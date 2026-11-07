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

const DataContext = createContext<ConsoleData>(mockData);

export const DataProvider = DataContext.Provider;

export function useData(): ConsoleData {
  return useContext(DataContext);
}
