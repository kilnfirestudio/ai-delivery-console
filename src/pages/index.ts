import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import { R, type RouteKey } from '../app/routes';

export type PageDef = { path: string; title: string; component: LazyExoticComponent<ComponentType> };

/** One entry per route; each page is its own chunk and loads on first visit. */
const PAGES: [RouteKey, string, () => Promise<{ default: ComponentType }>][] = [
  ['overview', '全局总览', () => import('./Overview')],
  ['review', '待审', () => import('./Review')],
  ['visual', '截图审核', () => import('./Visual')],
  ['weekly', '每周复盘', () => import('./Weekly')],
  ['intake', '登记需求', () => import('./Intake')],
  ['breakdown', '需求拆解', () => import('./Breakdown')],
  ['agents', 'Agent 看板', () => import('./Agents')],
  ['task', '单任务追踪', () => import('./Task')],
  ['knowledge', '知识库', () => import('./Knowledge')],
  ['knowledgeItem', '单条知识', () => import('./KnowledgeItem')],
  ['graph', '知识图谱', () => import('./Graph')],
  ['clients', '客户', () => import('./Clients')],
  ['metrics', '指标', () => import('./Metrics')],
  ['live', '实时调用', () => import('./Live')],
  ['pipeline', '采集与处理', () => import('./Pipeline')],
  ['distribution', '分发', () => import('./Distribution')],
  ['rules', '决策规则', () => import('./Rules')],
  ['system', '系统健康', () => import('./System')],
  ['spec', '组件规范', () => import('./Spec')],
];

export const pages: PageDef[] = PAGES.map(([key, title, load]) => ({ path: R[key], title, component: lazy(load) }));
