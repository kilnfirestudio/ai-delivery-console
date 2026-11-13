import { readFileSync } from 'node:fs';
import { z } from 'zod';
import { id, toolNames, type Identity } from './contracts.js';

const identitySchema = z.object({
  id, tokenHash: z.string().regex(/^[a-f0-9]{64}$/),
  projectIds: z.array(id).min(1), clientIds: z.array(id), taskIds: z.array(id).min(1),
  layers: z.array(z.enum(['L0', 'L1', 'L2', 'L3'])).min(1),
  tools: z.array(z.enum(toolNames as [typeof toolNames[number], ...typeof toolNames[number][]])).min(1),
  expiresAt: z.iso.datetime(),
}).strict();
export interface Config {
  host: string; port: number; allowedHosts: string[]; allowedOrigins: string[];
  timeoutMs: number; rateLimit: number; identities: Identity[];
}
export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  const cfg = z.object({
    HOST: z.enum(['127.0.0.1', '0.0.0.0', '::1']).default('127.0.0.1'),
    PORT: z.coerce.number().int().min(0).max(65535).default(3001),
    IDENTITIES_FILE: z.string().min(1),
    ALLOWED_HOSTS: z.string().default('localhost,127.0.0.1,[::1]'),
    ALLOWED_ORIGINS: z.string().default(''),
    TOOL_TIMEOUT_MS: z.coerce.number().int().min(10).max(30_000).default(500),
    RATE_LIMIT_PER_MINUTE: z.coerce.number().int().min(1).max(10_000).default(60),
  }).safeParse(env);
  if (!cfg.success) throw new Error(`Invalid environment: ${cfg.error.issues.map(i => i.path.join('.')).join(', ')}`);
  const parsed = z.array(identitySchema).min(1).safeParse(JSON.parse(readFileSync(cfg.data.IDENTITIES_FILE, 'utf8')));
  if (!parsed.success) throw new Error('Invalid identities file');
  for (const key of ['id', 'tokenHash'] as const) {
    if (new Set(parsed.data.map(i => i[key])).size !== parsed.data.length) throw new Error(`Duplicate identity ${key}`);
  }
  const split = (s: string) => s.split(',').map(x => x.trim()).filter(Boolean);
  return { host: cfg.data.HOST, port: cfg.data.PORT, allowedHosts: split(cfg.data.ALLOWED_HOSTS), allowedOrigins: split(cfg.data.ALLOWED_ORIGINS), timeoutMs: cfg.data.TOOL_TIMEOUT_MS, rateLimit: cfg.data.RATE_LIMIT_PER_MINUTE, identities: parsed.data };
}
