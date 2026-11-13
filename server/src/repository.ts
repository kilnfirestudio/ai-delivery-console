import type { Evidence, Knowledge, OperationContext, QueryResult, Receipt, TaskScope, ToolInput, ToolName } from './contracts.js';
import { AppError } from './errors.js';

/** Writes must honor signal before committing and deduplicate by identity + requestId. */
export interface GatewayRepository {
  getTask(id: string, signal: AbortSignal): Promise<TaskScope | undefined>;
  query(input: ToolInput['queryKnowledge'], context: OperationContext): Promise<QueryResult>;
  getKnowledge(id: string, context: OperationContext): Promise<Knowledge | undefined>;
  getEvidence(ids: string[], context: OperationContext): Promise<Evidence[]>;
  write(kind: Exclude<ToolName, 'queryKnowledge'>, input: ToolInput[Exclude<ToolName, 'queryKnowledge'>], context: OperationContext): Promise<Receipt>;
}
export class UnavailableRepository implements GatewayRepository {
  private unavailable(): never { throw new AppError('UNAVAILABLE', 'Storage is not configured', 503); }
  async getTask(): Promise<TaskScope | undefined> { return this.unavailable(); }
  async query(): Promise<QueryResult> { return this.unavailable(); }
  async getKnowledge(): Promise<Knowledge | undefined> { return this.unavailable(); }
  async getEvidence(): Promise<Evidence[]> { return this.unavailable(); }
  async write(): Promise<Receipt> { return this.unavailable(); }
}
