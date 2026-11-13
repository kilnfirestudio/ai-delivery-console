import { z } from 'zod';

export const id = z.string().min(1).max(128).regex(/^[A-Za-z0-9][A-Za-z0-9_./:-]*$/);
const text = z.string().trim().min(1).max(16_384);
const scope = { taskId: id };
const write = { ...scope, requestId: z.uuid() };
export const schemas = {
  queryKnowledge: z.object({ ...scope, query: text, limit: z.number().int().min(1).max(50).default(10) }).strict(),
  registerCitation: z.object({ ...write, knowledgeId: id, evidenceIds: z.array(id).max(50), reason: text }).strict(),
  submitCandidate: z.object({ ...write, text, layer: z.enum(['L0', 'L1', 'L2', 'L3']), evidenceIds: z.array(id).min(1).max(50) }).strict(),
  requestHelp: z.object({ ...write, question: text, consequence: text, uncertainty: text }).strict(),
  reportResult: z.object({ ...write, outcome: z.enum(['passed', 'failed', 'blocked']), summary: text, evidenceIds: z.array(id).max(50) }).strict(),
};
export type ToolName = keyof typeof schemas;
export const toolNames = Object.keys(schemas) as ToolName[];
export type ToolInput = { [K in ToolName]: z.infer<(typeof schemas)[K]> };
export type Layer = 'L0' | 'L1' | 'L2' | 'L3';
export interface Identity {
  id: string;
  tokenHash: string;
  projectIds: string[];
  clientIds: string[];
  taskIds: string[];
  layers: Layer[];
  tools: ToolName[];
  expiresAt: string;
}
export interface TaskScope { id: string; projectId: string; clientId?: string }
export interface Knowledge {
  id: string; text: string; layer: Layer; projectId?: string; clientId?: string;
  evidenceIds: string[];
}
export interface Evidence { id: string; projectId: string; clientId?: string; text: string }
export interface QueryResult { rules: Knowledge[]; evidence: Evidence[] }
export interface Receipt { id: string; requestId: string; acceptedAt: string }
export interface OperationContext { identity: Identity; task: TaskScope; signal: AbortSignal }
