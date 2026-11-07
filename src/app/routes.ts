import type { IconName } from '../ui/icons';

/** Route paths, one per page. Use these instead of string literals when linking. */
export const R = {
  overview: '/',
  review: '/review',
  visual: '/visual',
  weekly: '/weekly',
  intake: '/intake',
  breakdown: '/breakdown',
  agents: '/agents',
  task: '/task',
  knowledge: '/knowledge',
  knowledgeItem: '/knowledge/item',
  graph: '/graph',
  clients: '/clients',
  metrics: '/metrics',
  live: '/live',
  pipeline: '/pipeline',
  distribution: '/distribution',
  rules: '/rules',
  system: '/system',
  spec: '/spec',
} as const;

export type RouteKey = keyof typeof R;

export interface NavItem {
  route: RouteKey;
  label: string;
  icon: IconName;
  /** Roadmap stage at which the page becomes real; shown as a tag. */
  stage?: string;
  /** Count badge, filled in from data by the sidebar. */
  badge?: 'review' | 'visual';
}

export const NAV: { group: string; items: NavItem[] }[] = [
  {
    group: '工作台',
    items: [
      { route: 'overview', label: '全局总览', icon: 'Main' },
      { route: 'review', label: '待审', icon: 'Review', badge: 'review' },
      { route: 'visual', label: '截图审核', icon: 'Visual', badge: 'visual' },
      { route: 'weekly', label: '每周复盘', icon: 'Weekly' },
    ],
  },
  {
    group: '交付',
    items: [
      { route: 'breakdown', label: '需求拆解', icon: 'Breakdown' },
      { route: 'agents', label: 'Agent 看板', icon: 'Agents' },
      { route: 'task', label: '任务追踪', icon: 'Task' },
    ],
  },
  {
    group: '知识',
    items: [
      { route: 'knowledge', label: '知识库', icon: 'Knowledge' },
      { route: 'graph', label: '知识图谱', icon: 'Graph', stage: '阶段 3' },
      { route: 'clients', label: '客户', icon: 'Clients' },
    ],
  },
  {
    group: '观测',
    items: [
      { route: 'metrics', label: '指标', icon: 'Metrics' },
      { route: 'live', label: '实时调用', icon: 'Live' },
    ],
  },
  {
    group: '系统',
    items: [
      { route: 'pipeline', label: '采集与处理', icon: 'Pipeline' },
      { route: 'distribution', label: '分发', icon: 'Distribution' },
      { route: 'rules', label: '决策规则', icon: 'Rules' },
      { route: 'system', label: '系统健康', icon: 'System' },
    ],
  },
];
