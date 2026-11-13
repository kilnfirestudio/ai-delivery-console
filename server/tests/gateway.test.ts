import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import test from 'node:test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { buildApp } from '../src/app.js';
import { authenticate, tokenHash } from '../src/auth.js';
import type { Config } from '../src/config.js';
import { toolNames, type Identity, type OperationContext, type Receipt, type ToolInput, type ToolName } from '../src/contracts.js';
import { Gateway } from '../src/gateway.js';
import { UnavailableRepository, type GatewayRepository } from '../src/repository.js';

const token = 'test-only-agent-token-01234567890123456789';
const identity: Identity = { id: 'dev-a', tokenHash: tokenHash(token), projectIds: ['p'], clientIds: ['a'], taskIds: ['task'], layers: ['L0', 'L1', 'L2', 'L3'], tools: toolNames, expiresAt: '2099-01-01T00:00:00Z' };
const config: Config = { host: '127.0.0.1', port: 0, allowedHosts: ['127.0.0.1', 'localhost'], allowedOrigins: [], timeoutMs: 500, rateLimit: 60, identities: [identity] };
class FixtureRepository implements GatewayRepository {
  writes = 0;
  async getTask() { return { id: 'task', projectId: 'p', clientId: 'a' }; }
  async query() { return {
    rules: [
      { id: 'allowed', text: 'A', layer: 'L3' as const, projectId: 'p', clientId: 'a', evidenceIds: ['ea', 'eb'] },
      { id: 'denied', text: 'B', layer: 'L3' as const, projectId: 'p', clientId: 'b', evidenceIds: ['eb'] },
    ],
    evidence: [{ id: 'ea', projectId: 'p', clientId: 'a', text: 'A' }, { id: 'eb', projectId: 'p', clientId: 'b', text: 'B' }],
  }; }
  async getKnowledge(id: string) { return (await this.query()).rules.find(k => k.id === id); }
  async getEvidence(ids: string[]) { return (await this.query()).evidence.filter(e => ids.includes(e.id)); }
  async write(_kind: string, input: ToolInput[Exclude<ToolName, 'queryKnowledge'>], context: OperationContext): Promise<Receipt> {
    void _kind;
    context.signal.throwIfAborted(); this.writes++;
    return { id: randomUUID(), requestId: input.requestId, acceptedAt: new Date().toISOString() };
  }
}
const help = () => ({ taskId: 'task', requestId: randomUUID(), question: 'Need approval', consequence: 'Shared file', uncertainty: 'Unknown impact' });

test('authentication rejects missing, expired and unknown credentials', () => {
  assert.throws(() => authenticate(undefined, [identity]));
  assert.throws(() => authenticate(`Bearer ${token}bad`, [identity]));
  assert.throws(() => authenticate(`Bearer ${token}`, [{ ...identity, expiresAt: '2000-01-01T00:00:00Z' }]));
  assert.equal(authenticate(`Bearer ${token}`, [identity]).id, identity.id);
});
test('query filters cross-client records and evidence references', async () => {
  const gateway = new Gateway(new FixtureRepository());
  const result = await gateway.call('queryKnowledge', { taskId: 'task', query: 'rules' }, identity);
  assert.equal(result.ok, true);
  assert.ok(!JSON.stringify(result).includes('denied'));
  assert.ok(!JSON.stringify(result).includes('eb'));
  assert.ok(JSON.stringify(result).includes('allowed'));
});
test('all five tools execute with valid scope; writes reject injected identity and foreign evidence', async () => {
  const repo = new FixtureRepository();
  const gateway = new Gateway(repo);
  const requests = {
    queryKnowledge: { taskId: 'task', query: 'rules' },
    registerCitation: { taskId: 'task', requestId: randomUUID(), knowledgeId: 'allowed', evidenceIds: ['ea'], reason: 'Used rule' },
    submitCandidate: { taskId: 'task', requestId: randomUUID(), text: 'Candidate', layer: 'L3', evidenceIds: ['ea'] },
    requestHelp: help(),
    reportResult: { taskId: 'task', requestId: randomUUID(), outcome: 'passed', summary: 'Tests pass', evidenceIds: ['ea'] },
  };
  for (const name of toolNames) assert.equal((await gateway.call(name, requests[name], identity)).ok, true, name);
  assert.equal(repo.writes, 4);
  assert.equal((await gateway.call('requestHelp', { ...help(), identity: 'admin' }, identity)).ok, false);
  assert.equal((await gateway.call('submitCandidate', { ...requests.submitCandidate, evidenceIds: ['eb'] }, identity)).ok, false);
  assert.equal((await gateway.call('requestHelp', help(), { ...identity, tools: ['queryKnowledge'] })).ok, false);
  assert.equal((await gateway.call('requestHelp', help(), { ...identity, clientIds: ['b'] })).ok, false);
  assert.equal(repo.writes, 4);
});
test('rejects secrets without returning them or writing', async () => {
  const repo = new FixtureRepository();
  const gateway = new Gateway(repo);
  const secret = `ghp_${'a'.repeat(36)}`;
  const result = await gateway.call('requestHelp', { ...help(), question: secret }, identity);
  assert.equal(result.ok, false);
  assert.ok(!JSON.stringify(result).includes(secret));
  assert.equal(repo.writes, 0);
});
test('rate limits per identity and counts rejected requests', async () => {
  const gateway = new Gateway(new FixtureRepository(), 500, 1);
  await gateway.call('requestHelp', help(), identity);
  const result = await gateway.call('requestHelp', help(), identity);
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.error.code, 'RATE_LIMITED');
  assert.equal(gateway.metrics().rejected, 1);
});
test('timeouts count as zero calls, cancel work and do not report success', async () => {
  class SlowRepository extends FixtureRepository {
    override async getTask() { await new Promise(r => setTimeout(r, 50)); return super.getTask(); }
  }
  const repo = new SlowRepository();
  const gateway = new Gateway(repo, 5);
  const result = await gateway.call('requestHelp', help(), identity);
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.error.code, 'TIMEOUT');
  await new Promise(r => setTimeout(r, 60));
  assert.equal(repo.writes, 0);
  assert.equal(gateway.metrics().zeroCalls, 1);
  assert.equal(gateway.metrics().succeeded, 0);
});
test('unconfigured storage returns unavailable', async () => {
  const gateway = new Gateway(new UnavailableRepository());
  const result = await gateway.call('requestHelp', help(), identity);
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.error.code, 'UNAVAILABLE');
});
test('HTTP guards host, origin, credentials and readiness', async t => {
  const { app } = buildApp(config);
  t.after(() => app.close());
  assert.equal((await app.inject({ method: 'GET', url: '/health/live' })).statusCode, 200);
  assert.equal((await app.inject({ method: 'GET', url: '/health/ready' })).statusCode, 503);
  assert.equal((await app.inject({ method: 'POST', url: '/mcp', payload: {} })).statusCode, 401);
  assert.equal((await app.inject({ method: 'POST', url: '/mcp', headers: { host: 'evil.example' }, payload: {} })).statusCode, 403);
  assert.equal((await app.inject({ method: 'POST', url: '/mcp', headers: { origin: 'https://evil.example' }, payload: {} })).statusCode, 403);
});
test('real MCP client initializes, discovers and invokes tools over Streamable HTTP', async t => {
  const { app } = buildApp(config, new FixtureRepository());
  const address = await app.listen({ host: '127.0.0.1', port: 0 });
  const client = new Client({ name: 'integration-test', version: '1.0.0' });
  t.after(async () => { await client.close(); await app.close(); });
  await client.connect(new StreamableHTTPClientTransport(new URL(`${address}/mcp`), { requestInit: { headers: { Authorization: `Bearer ${token}` } } }));
  assert.equal((await client.listTools()).tools.length, 5);
  const result = await client.callTool({ name: 'requestHelp', arguments: help() });
  assert.equal(result.isError, false);
});
