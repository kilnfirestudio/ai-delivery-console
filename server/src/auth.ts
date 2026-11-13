import { createHash, timingSafeEqual } from 'node:crypto';
import type { Identity, Knowledge, TaskScope } from './contracts.js';
import { AppError } from './errors.js';

export const tokenHash = (token: string) => createHash('sha256').update(token).digest('hex');
export function authenticate(header: string | undefined, identities: Identity[], now = Date.now()): Identity {
  const token = /^Bearer ([\x21-\x7e]{32,512})$/.exec(header ?? '')?.[1];
  const digest = Buffer.from(tokenHash(token ?? ''), 'hex');
  let found: Identity | undefined;
  for (const identity of identities) {
    if (timingSafeEqual(digest, Buffer.from(identity.tokenHash, 'hex'))) found = identity;
  }
  if (!token || !found || Date.parse(found.expiresAt) <= now) throw new AppError('UNAUTHENTICATED', 'Valid agent credentials required', 401);
  return found;
}
export function authorizeTask(identity: Identity, task: TaskScope) {
  if (!identity.taskIds.includes(task.id) || !identity.projectIds.includes(task.projectId) || (task.clientId && !identity.clientIds.includes(task.clientId))) {
    throw new AppError('FORBIDDEN', 'Task access denied', 403);
  }
}
export function canReadKnowledge(identity: Identity, task: TaskScope, item: Knowledge): boolean {
  if (!identity.layers.includes(item.layer)) return false;
  if (item.layer === 'L3' && (!item.clientId || !item.projectId)) return false;
  if (item.layer === 'L2' && !item.projectId) return false;
  if (item.projectId && item.projectId !== task.projectId) return false;
  if (item.clientId && (item.clientId !== task.clientId || !identity.clientIds.includes(item.clientId))) return false;
  return true;
}
// Scan only request payloads. Never include a matching value in errors or logs.
export function containsSecret(input: unknown): boolean {
  const value = JSON.stringify(input);
  return [
    /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
    /\b(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/,
    /\b(?:sk-(?:proj-|ant-)?[A-Za-z0-9_-]{20,}|AKIA[A-Z0-9]{16})\b/,
    /\b(?:password|passwd|api[_-]?key|secret|access[_-]?token)\s*["']?\s*[:=]\s*["']?[^\s"'\\,}]{8,}/i,
    /\bBearer\s+[A-Za-z0-9._~-]{20,}/i,
  ].some(pattern => pattern.test(value));
}
