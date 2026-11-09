import { createContext, useContext } from 'react';
import { clientProfiles } from './mock/clients';
import * as delivery from './mock/delivery';
import { evidence, knowledge } from './mock/knowledge';
import { knowledgeRecords, knowledgeSummary, reviewHealth } from './mock/knowledgeDetail';
import { observation } from './mock/observation';
import { intakeRecords, pastRequirements, visualReviews, weeklyReview } from './mock/review';
import { distribution, pipeline, rules, system } from './mock/system';
import { taskDetails } from './mock/tasks';

export * from './types';

/**
 * Everything the console reads. The mock below is the single sample dataset; to use real data, build an
 * object of the same shape (e.g. from the gateway API) and pass it to <DataProvider value={...}>.
 */
export const mockData = {
  ...delivery,
  knowledge,
  evidence,
  knowledgeRecords,
  knowledgeSummary,
  reviewHealth,
  observation,
  taskDetails,
  intakeRecords,
  pastRequirements,
  visualReviews,
  weeklyReview,
  clientProfiles,
  pipeline,
  distribution,
  rules,
  system,
};

export type ConsoleData = typeof mockData;

/** Fetch status the UI can reflect. 'ready' is the normal case; the others drive F-09 loading/empty/error blocks. */
export type DataStatus = 'ready' | 'loading' | 'empty' | 'error';

export interface DataState {
  data: ConsoleData;
  status: DataStatus;
  /** Set when status is 'error'; a short human-readable reason. */
  error?: string;
}

const readyState: DataState = { data: mockData, status: 'ready' };

const DataContext = createContext<DataState>(readyState);

export const DataProvider = DataContext.Provider;

/** The dataset. Unchanged signature so every page keeps working; status lives in useDataState(). */
export function useData(): ConsoleData {
  return useContext(DataContext).data;
}

/** Full fetch state (data + status + error) for components that render loading / empty / error. */
export function useDataState(): DataState {
  return useContext(DataContext);
}

/**
 * Dev-only state override via the `?data=` query param (loading | empty | error), so the F-09 states can be
 * previewed without a backend. Returns the normal ready state in production and when no param is set.
 */
export function devDataState(search: string): DataState {
  if (!import.meta.env.DEV) return readyState;
  const mode = new URLSearchParams(search).get('data');
  if (mode === 'loading') return { data: mockData, status: 'loading' };
  if (mode === 'error') return { data: mockData, status: 'error', error: '示例：数据源返回了错误（开发模式 ?data=error）' };
  if (mode === 'empty') return { data: mockData, status: 'empty' };
  return readyState;
}
