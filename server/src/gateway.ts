import { performance } from 'node:perf_hooks';
import { authorizeTask, canReadKnowledge, containsSecret } from './auth.js';
import { schemas, type Identity, type OperationContext, type ToolName, type ToolInput } from './contracts.js';
import { AppError, publicError } from './errors.js';
import type { GatewayRepository } from './repository.js';

export class Gateway {
  private windows = new Map<string, { start: number; count: number }>();
  private durations: number[] = [];
  private totals = { calls: 0, succeeded: 0, rejected: 0, timeouts: 0, failed: 0 };
  constructor(private repo: GatewayRepository, private timeoutMs = 500, private rateLimit = 60) {}
  metrics() {
    const sorted = [...this.durations].sort((a, b) => a - b);
    return { ...this.totals, p95Ms: sorted[Math.max(0, Math.ceil(sorted.length * .95) - 1)] ?? 0, sampleSize: sorted.length, zeroCalls: this.totals.timeouts };
  }
  async call(name: ToolName, raw: unknown, identity: Identity) {
    const start = performance.now();
    this.totals.calls++;
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      const now = Date.now();
      const previous = this.windows.get(identity.id);
      const window = previous && now - previous.start < 60_000 ? previous : { start: now, count: 0 };
      this.windows.set(identity.id, window);
      if (++window.count > this.rateLimit) throw new AppError('RATE_LIMITED', 'Agent rate limit exceeded', 429);
      if (!identity.tools.includes(name)) throw new AppError('FORBIDDEN', 'Tool access denied', 403);
      const parsed = schemas[name].safeParse(raw);
      if (!parsed.success) throw new AppError('INVALID_INPUT', 'Invalid tool arguments');
      if (name !== 'queryKnowledge' && containsSecret(raw)) throw new AppError('SECRET_DETECTED', 'Submission contains possible credentials');
      const input = parsed.data;
      if (!identity.taskIds.includes(input.taskId)) throw new AppError('FORBIDDEN', 'Task access denied', 403);
      const output = await Promise.race([
        this.execute(name, input, identity, controller.signal),
        new Promise<never>((_, reject) => {
          timer = setTimeout(() => {
            reject(new AppError('TIMEOUT', 'Gateway operation timed out', 504));
            controller.abort();
          }, this.timeoutMs);
        }),
      ]);
      this.totals.succeeded++;
      return { ok: true as const, data: output };
    } catch (error) {
      const safe = publicError(error);
      if (safe.code === 'TIMEOUT') this.totals.timeouts++;
      else if (safe.status < 500) this.totals.rejected++;
      else this.totals.failed++;
      return { ok: false as const, error: { code: safe.code, message: safe.message } };
    } finally {
      clearTimeout(timer);
      this.durations.push(performance.now() - start);
      if (this.durations.length > 1000) this.durations.shift();
    }
  }
  private async execute(name: ToolName, input: ToolInput[ToolName], identity: Identity, signal: AbortSignal) {
    const task = await this.repo.getTask(input.taskId, signal);
    if (!task) throw new AppError('FORBIDDEN', 'Task access denied', 403);
    authorizeTask(identity, task);
    const ctx: OperationContext = { identity, task, signal };
    const evidenceAllowed = (e: { projectId: string; clientId?: string }) => e.projectId === task.projectId && (!e.clientId || (e.clientId === task.clientId && identity.clientIds.includes(e.clientId)));
    if (name === 'queryKnowledge') {
      const result = await this.repo.query(input as ToolInput['queryKnowledge'], ctx);
      const rules = result.rules.filter(k => canReadKnowledge(identity, task, k)).slice(0, (input as ToolInput['queryKnowledge']).limit);
      const referenced = new Set(rules.flatMap(k => k.evidenceIds));
      const evidence = result.evidence.filter(e => referenced.has(e.id) && evidenceAllowed(e));
      const visible = new Set(evidence.map(e => e.id));
      return { rules: rules.map(k => ({ ...k, evidenceIds: k.evidenceIds.filter(id => visible.has(id)) })), evidence };
    }
    if ('evidenceIds' in input) {
      const evidence = await this.repo.getEvidence(input.evidenceIds, ctx);
      if (input.evidenceIds.some(id => !evidence.some(e => e.id === id && evidenceAllowed(e)))) throw new AppError('FORBIDDEN', 'Evidence access denied', 403);
    }
    if (name === 'registerCitation') {
      const citation = input as ToolInput['registerCitation'];
      const item = await this.repo.getKnowledge(citation.knowledgeId, ctx);
      if (!item || !canReadKnowledge(identity, task, item) || citation.evidenceIds.some(id => !item.evidenceIds.includes(id))) throw new AppError('FORBIDDEN', 'Knowledge access denied', 403);
    }
    if (name === 'submitCandidate') {
      const layer = (input as ToolInput['submitCandidate']).layer;
      if (!identity.layers.includes(layer) || (layer === 'L3' && !task.clientId)) throw new AppError('FORBIDDEN', 'Candidate scope denied', 403);
    }
    signal.throwIfAborted();
    return this.repo.write(name, input as ToolInput[Exclude<ToolName, 'queryKnowledge'>], ctx);
  }
}
