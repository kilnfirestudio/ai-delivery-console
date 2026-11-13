import Fastify from 'fastify';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { CallToolRequestSchema, ListToolsRequestSchema, type Tool } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import { authenticate } from './auth.js';
import type { Config } from './config.js';
import { schemas, toolNames, type ToolName } from './contracts.js';
import { AppError, publicError } from './errors.js';
import { Gateway } from './gateway.js';
import { UnavailableRepository, type GatewayRepository } from './repository.js';

const descriptions: Record<ToolName, string> = {
  queryKnowledge: '查询当前任务允许读取的知识；规则与证据分别返回。',
  registerCitation: '登记当前任务对知识及其证据的引用。',
  submitCandidate: '提交待审核候选；不会直接写入已确认知识。',
  requestHelp: '记录需要人工决策的求助。',
  reportResult: '回报任务结果与证据；不会自动通过人工检查点。',
};

export function buildApp(config: Config, repo: GatewayRepository = new UnavailableRepository()) {
  const app = Fastify({ logger: false, bodyLimit: 64 * 1024, requestTimeout: 10_000 });
  const gateway = new Gateway(repo, config.timeoutMs, config.rateLimit);
  app.setErrorHandler((error, _request, reply) => {
    const safe = error instanceof AppError ? error : new AppError('INVALID_INPUT', 'Invalid HTTP request', 400);
    if (safe.status === 401) reply.header('WWW-Authenticate', 'Bearer realm="delivery-gateway"');
    return reply.code(safe.status).send({ error: { code: safe.code, message: safe.message } });
  });
  app.addHook('onRequest', async request => {
    let host: string;
    try { host = new URL(`http://${request.headers.host}`).hostname; }
    catch { throw new AppError('FORBIDDEN', 'Host denied', 403); }
    if (!config.allowedHosts.includes(host)) throw new AppError('FORBIDDEN', 'Host denied', 403);
    const origin = request.headers.origin;
    if (origin && !config.allowedOrigins.includes(origin)) throw new AppError('FORBIDDEN', 'Origin denied', 403);
  });
  app.get('/health/live', async () => ({ status: 'ok' }));
  app.get('/health/ready', async (_request, reply) => {
    const ready = !(repo instanceof UnavailableRepository);
    return reply.code(ready ? 200 : 503).send({ status: ready ? 'ready' : 'storage-unavailable' });
  });
  app.post('/mcp', async (request, reply) => {
    const identity = authenticate(request.headers.authorization, config.identities);
    const server = new Server({ name: 'ai-delivery-gateway', version: '0.1.0' }, { capabilities: { tools: {} } });
    server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: toolNames.filter(n => identity.tools.includes(n)).map(name => ({
      name, description: descriptions[name], inputSchema: z.toJSONSchema(schemas[name], { io: 'input' }) as Tool['inputSchema'],
      annotations: { readOnlyHint: name === 'queryKnowledge', destructiveHint: false, idempotentHint: true, openWorldHint: false },
    })) }));
    server.setRequestHandler(CallToolRequestSchema, async req => {
      if (!toolNames.includes(req.params.name as ToolName)) return { isError: true, content: [{ type: 'text', text: 'Unknown tool' }] };
      const result = await gateway.call(req.params.name as ToolName, req.params.arguments, identity);
      return { isError: !result.ok, content: [{ type: 'text', text: JSON.stringify(result) }], structuredContent: result };
    });
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
    await server.connect(transport);
    reply.hijack();
    try {
      await transport.handleRequest(request.raw, reply.raw, request.body);
    } catch (error) {
      if (!reply.raw.headersSent) {
        const safe = publicError(error);
        reply.raw.writeHead(safe.status, { 'Content-Type': 'application/json' });
        reply.raw.end(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32603, message: safe.message } }));
      } else if (!reply.raw.writableEnded) reply.raw.end();
    } finally {
      await server.close();
    }
  });
  app.route({ method: ['GET', 'DELETE'], url: '/mcp', handler: async (_req, reply) => reply.header('Allow', 'POST').code(405).send({ error: 'Stateless transport only accepts POST' }) });
  return { app, gateway };
}
