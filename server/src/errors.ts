export type ErrorCode = 'UNAUTHENTICATED' | 'FORBIDDEN' | 'INVALID_INPUT' | 'SECRET_DETECTED' | 'RATE_LIMITED' | 'UNAVAILABLE' | 'TIMEOUT' | 'INTERNAL' | 'CONFLICT' | 'NOT_FOUND';
export class AppError extends Error {
  constructor(public readonly code: ErrorCode, message: string, public readonly status = 400) { super(message); }
}
export function publicError(error: unknown): AppError {
  return error instanceof AppError ? error : new AppError('INTERNAL', 'Internal server error', 500);
}
