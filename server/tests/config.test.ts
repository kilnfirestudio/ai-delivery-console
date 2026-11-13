import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { loadConfig } from '../src/config.js';

test('configuration validates bounds, duplicate identities and expiry format', t => {
  const directory = mkdtempSync(join(tmpdir(), 'gateway-config-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const path = join(directory, 'identities.json');
  const identity = { id: 'test', tokenHash: 'a'.repeat(64), projectIds: ['p'], clientIds: [], taskIds: ['t'], layers: ['L0'], tools: ['queryKnowledge'], expiresAt: '2099-01-01T00:00:00Z' };
  writeFileSync(path, JSON.stringify([identity]));
  assert.equal(loadConfig({ IDENTITIES_FILE: path }).port, 3001);
  assert.throws(() => loadConfig({ IDENTITIES_FILE: path, PORT: '-1' }));
  assert.throws(() => loadConfig({ IDENTITIES_FILE: path, TOOL_TIMEOUT_MS: '0' }));
  writeFileSync(path, JSON.stringify([identity, identity]));
  assert.throws(() => loadConfig({ IDENTITIES_FILE: path }), /Duplicate/);
  writeFileSync(path, JSON.stringify([{ ...identity, expiresAt: 'tomorrow' }]));
  assert.throws(() => loadConfig({ IDENTITIES_FILE: path }), /Invalid identities/);
});
