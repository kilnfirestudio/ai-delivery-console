import type { ComponentType } from 'react';
import Overview from './Overview';
import Review from './Review';
import Visual from './Visual';
import Weekly from './Weekly';
import Intake from './Intake';
import Breakdown from './Breakdown';
import Agents from './Agents';
import Task from './Task';
import Knowledge from './Knowledge';
import KnowledgeItem from './KnowledgeItem';
import Graph from './Graph';
import Clients from './Clients';
import Metrics from './Metrics';
import Live from './Live';
import Pipeline from './Pipeline';
import Distribution from './Distribution';
import Rules from './Rules';
import System from './System';
import Spec from './Spec';

export type PageDef = { path: string; title: string; component: ComponentType };

export const pages: PageDef[] = [
  { path: '/', title: '全局总览', component: Overview },
  { path: '/review', title: '待审', component: Review },
  { path: '/visual', title: '截图审核', component: Visual },
  { path: '/weekly', title: '每周复盘', component: Weekly },
  { path: '/intake', title: '登记需求', component: Intake },
  { path: '/breakdown', title: '需求拆解', component: Breakdown },
  { path: '/agents', title: 'Agent 看板', component: Agents },
  { path: '/task', title: '单任务追踪', component: Task },
  { path: '/knowledge', title: '知识库', component: Knowledge },
  { path: '/knowledge/item', title: '单条知识', component: KnowledgeItem },
  { path: '/graph', title: '知识图谱', component: Graph },
  { path: '/clients', title: '客户', component: Clients },
  { path: '/metrics', title: '指标', component: Metrics },
  { path: '/live', title: '实时调用', component: Live },
  { path: '/pipeline', title: '采集与处理', component: Pipeline },
  { path: '/distribution', title: '分发', component: Distribution },
  { path: '/rules', title: '决策规则', component: Rules },
  { path: '/system', title: '系统健康', component: System },
  { path: '/spec', title: '组件规范', component: Spec },
];
