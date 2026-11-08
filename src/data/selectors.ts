import type { Agent, AgentStatus, AttentionItem, AttentionKind, ClockTime, ConstraintLevel, Requirement, Subtask, SubtaskState, Tone } from './types';
import { CHECKPOINTS, DELIVERY_STEPS } from './types';
import type { ConsoleData } from './index';

// ───────────────────────── labels ─────────────────────────

export const SUBTASK_STATE_LABEL: Record<SubtaskState, string> = { done: '完成', doing: '进行中', you: '等待你', queue: '排队' };
export const AGENT_STATUS_LABEL: Record<AgentStatus, string> = { doing: '进行中', you: '等待你', idle: '空闲', standby: '待命' };
export const AGENT_STATUS_TONE: Record<AgentStatus, Tone> = { doing: 'doing', you: 'you', idle: 'queue', standby: 'queue' };
export const LEVEL_TONE: Record<ConstraintLevel, Tone> = { 红线: 'risk', 默认: 'doing', 建议: 'queue', 参考: 'queue' };
export const ATTENTION_TONE: Record<AttentionKind, Tone> = { 求助: 'you', 冲突: 'risk', 候选: 'doing', 上提: 'done', 看截图: 'you', 抽检: 'queue', 复验: 'queue' };
export const AGENT_ROBOT: Record<AgentStatus, 'work' | 'wait' | 'idle' | 'stand'> = { doing: 'work', you: 'wait', idle: 'idle', standby: 'stand' };

// ───────────────────────── time ─────────────────────────

export const toMinutes = (t: ClockTime) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

/** "2 小时 4 分钟", "69 分钟". */
export const formatDuration = (min: number) => (min >= 60 && min % 60 !== 0 ? `${Math.floor(min / 60)} 小时 ${min % 60} 分钟` : min >= 60 ? `${min / 60} 小时` : `${min} 分钟`);

export const formatNumber = (n: number) => n.toLocaleString('en-US');

// ───────────────────────── delivery ─────────────────────────

export const subtaskKey = (s: Subtask) => `${s.requirementId}/${s.id}`;

/** Task code agents report to the gateway: "TASK-0412-T3" for client tasks, else the subtask ID. */
export const taskCode = (s: Subtask) => (s.requirementId.startsWith('TASK-') ? `${s.requirementId}-${s.id}` : s.id);

export const findSubtask = (d: ConsoleData, key: string) => d.subtasks.find((s) => subtaskKey(s) === key);

export const subtasksOf = (d: ConsoleData, requirementId: string) => d.subtasks.filter((s) => s.requirementId === requirementId);

/** Requirements that have been split into subtasks, in data order. */
export const brokenDownRequirements = (d: ConsoleData, projectId?: string) =>
  d.requirements.filter((r) => (!projectId || r.projectId === projectId) && subtasksOf(d, r.id).length > 0);

export const countStates = (list: Subtask[]) => {
  const c: Record<SubtaskState, number> = { done: 0, doing: 0, you: 0, queue: 0 };
  list.forEach((s) => (c[s.state] += 1));
  return c;
};

/** "计划 11/09 · 第 4 步 开发" or "11/06 已交付". */
export const requirementSchedule = (r: Requirement) =>
  r.deliveredAt ? `${r.deliveredAt} 已交付` : `${r.plannedFor ? `计划 ${r.plannedFor} · ` : ''}第 ${r.step} 步 ${DELIVERY_STEPS[r.step - 1]}`;

export const nextCheckpoint = (s: Subtask) => (s.checkpoint >= CHECKPOINTS.length ? '全部通过' : `下一个：${CHECKPOINTS[s.checkpoint]}`);

// ───────────────────────── agents ─────────────────────────

export const agentById = (d: ConsoleData, id?: string) => d.agents.find((a) => a.id === id);

export const agentLabel = (a: Agent) => `${a.tool} · ${a.host}`;

/** Minutes the agent spent waiting for you today, counting an open wait up to now. */
export const waitedToday = (a: Agent, now: ClockTime) =>
  a.today.filter((b) => b.kind === 'wait').reduce((sum, b) => sum + Math.min(toMinutes(b.to), toMinutes(now)) - toMinutes(b.from), 0);

/** Minutes the current wait has lasted, if the agent is waiting now. */
export const currentWait = (a: Agent, now: ClockTime) => {
  const last = a.today[a.today.length - 1];
  return a.status === 'you' && last?.kind === 'wait' ? toMinutes(now) - toMinutes(last.from) : 0;
};

/** One-line "what now" for timelines: "T3 · 检查点 1 / 5", "T2 · 已等 69 分钟". */
export const agentNow = (d: ConsoleData, a: Agent) => {
  const s = a.activeSubtask ? findSubtask(d, a.activeSubtask) : undefined;
  if (!s) return a.current;
  if (a.status === 'you') return `${s.id} · 已等 ${currentWait(a, d.workspace.now)} 分钟`;
  return `${s.id} · 检查点 ${s.checkpoint} / ${CHECKPOINTS.length}`;
};

export const countAgents = (list: Agent[]) => {
  const c: Record<AgentStatus, number> = { doing: 0, you: 0, idle: 0, standby: 0 };
  list.forEach((a) => (c[a.status] += 1));
  return c;
};

// ───────────────────────── attention ─────────────────────────

export const attentionIn = (d: ConsoleData, group: AttentionItem['group']) => d.attention.filter((a) => a.group === group);

/** Where to act on an item: the exact task, knowledge item or review entry. */
export const attentionHref = (a: AttentionItem) => {
  if (a.kind === '求助' && a.refs?.subtask) return taskHref(a.refs.subtask);
  if (a.kind === '看截图') return '/visual';
  if (a.kind === '上提' && a.refs?.knowledge) return knowledgeHref(a.refs.knowledge);
  return `/review?item=${a.id}`;
};

export const taskHref = (key: string) => `/task?id=${encodeURIComponent(key)}`;
export const requirementHref = (id: string) => `/breakdown?id=${encodeURIComponent(id)}`;
export const knowledgeHref = (id: string) => `/knowledge/item?id=${encodeURIComponent(id)}`;

/** Wait against the help-timeout threshold: amber while within it, red once overdue. */
export const waitState = (d: ConsoleData, minutes = 0) => {
  const over = minutes - d.rules.helpTimeoutMin;
  return { overdue: over > 0, over, label: over > 0 ? `已等 ${minutes} 分钟 · 超时 ${over} 分钟` : `已等 ${minutes} 分钟` };
};

/** Attention items in the order you should handle them. */
export const attentionOrder = (d: ConsoleData) => {
  const groups: AttentionItem['group'][] = ['阻塞任务', '需要你确认', '看截图', '抽检与复验'];
  return groups.flatMap((g) => d.attention.filter((a) => a.group === g));
};

/** The item after `id` in handling order, wrapping to the first. */
export const nextAttention = (d: ConsoleData, id?: string) => {
  const list = attentionOrder(d);
  const i = list.findIndex((a) => a.id === id);
  return list[(i + 1) % list.length];
};

/** Items in the 待审 queue (screenshots have their own page). */
export const reviewQueue = (d: ConsoleData) => d.attention.filter((a) => a.group !== '看截图');
