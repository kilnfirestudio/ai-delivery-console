/**
 * Domain model of the delivery console.
 *
 * Field names follow the knowledge-base design doc ("知识模型与流程", "交付流程", "决策层", "观测与指标").
 * Every entity has a stable ID, and other entities refer to it by that ID only, so a real backend can
 * replace the mock dataset without touching the pages.
 */

/** Clock time on the current day, "HH:MM". */
export type ClockTime = string;
/** Calendar day, "MM/DD". */
export type DayLabel = string;

/** Visual status shared by chips, tiles and bars. */
export type Tone = 'done' | 'doing' | 'you' | 'queue' | 'risk';

// ───────────────────────── workspace ─────────────────────────

export interface Workspace {
  name: string;
  /** "Now" for the sample data; real data would use the server clock. */
  today: string; // YYYY-MM-DD
  weekday: string;
  now: ClockTime;
  /** Implementation-roadmap stage currently enabled (see "实施路线"). */
  stage: number;
  stageLabel: string;
  gateway: { online: boolean; latencyMs: number };
  devices: { name: string; online: boolean }[];
  notifications: { instant: number; digestAt: ClockTime };
}

export type ProjectId = 'shopline' | 'xuvia' | 'site' | 'voice';

export interface Project {
  id: ProjectId;
  name: string;
  /** Label used in filters and compact tables. */
  short: string;
  line: '主线' | '子线' | '维护';
}

export type ClientId = 'A' | 'B' | 'C';

export interface Client {
  id: ClientId;
  name: string;
  /** How the client is described without naming them. */
  alias: string;
  projectId: ProjectId;
}

// ───────────────────────── delivery ─────────────────────────

/** The eight delivery steps from "交付流程". Index + 1 is the step number. */
export const DELIVERY_STEPS = ['登记', '确认', '拆分', '开发', '回归', '交付', '回写', '校正'] as const;
export type DeliveryStepName = (typeof DELIVERY_STEPS)[number];

export interface Requirement {
  id: string;
  projectId: ProjectId;
  clientId?: ClientId;
  title: string;
  /** Current delivery step, 1–8. */
  step: number;
  plannedFor?: DayLabel;
  deliveredAt?: DayLabel;
  registeredAt?: DayLabel;
  /** Version of the confirmation sheet the client signed off. */
  specVersion?: string;
  /** Knowledge the split was based on, as shown to you. */
  splitBasis?: string;
  /** Who did what at each of the eight delivery steps (index = step - 1). */
  stepLog?: { who: string; note: string }[];
  acceptance?: AcceptanceCriterion[];
  /** Already-accepted features this change could break, from the freeze list's feature ↔ file map. */
  regression?: RegressionItem[];
}

export interface AcceptanceCriterion {
  text: string;
  /** Which subtask covers it and how it was checked. */
  by: string;
  met: boolean;
}

export interface RegressionItem {
  name: string;
  meta: string;
  status: '待回归' | '通过' | '有风险';
}

/** The five checkpoints every subtask passes. Index + 1 is the checkpoint number. */
export const CHECKPOINTS = ['领取', '改动提交', '自测与截图', '你看过截图', '合并回归通过'] as const;
/** The event record that proves each checkpoint was passed. */
export const CHECKPOINT_EVIDENCE = ['网关任务事件', '子任务分支上的 git 提交', '回报结果：自测通过并附截图', '你的审核事件', '回归脚本自动回报'] as const;

export type SubtaskState = 'done' | 'doing' | 'you' | 'queue';

export interface Subtask {
  /** Short ID, unique inside its requirement (e.g. "T2"). */
  id: string;
  requirementId: string;
  title: string;
  state: SubtaskState;
  agentId?: AgentId;
  /** Checkpoints passed, 0–5. */
  checkpoint: number;
  branch?: string;
  files?: string[];
  dependsOn?: string[];
  reworks?: number;
  /** Why it is waiting for you, when state is "you". */
  waitingFor?: string;
  /** Short result note, e.g. the regression outcome. */
  note?: string;
}

export type AgentId = 'split' | 'dev-a' | 'dev-b' | 'dev-c' | 'dev-d' | 'dev-e' | 'review';
export type AgentStatus = 'doing' | 'you' | 'idle' | 'standby';

/** One block on the agent's day timeline. */
export interface TimelineBlock {
  from: ClockTime;
  to: ClockTime;
  kind: 'past' | 'work' | 'wait';
  label: string;
}

export interface Agent {
  id: AgentId;
  name: string;
  tool: string;
  host: string;
  /** Runs on your own machine (shown as "本地" on the agent board). */
  local?: boolean;
  status: AgentStatus;
  /** Retrieval and write permissions granted by the gateway. */
  scope: string;
  /** One-line "what now" shown next to the timeline. */
  current: string;
  /** Subtask in hand, as `${requirementId}/${subtaskId}`. */
  activeSubtask?: string;
  /** Note under the active card on the agent board. */
  activeNote?: string;
  /** Placeholder shown when nothing is in hand. */
  idleText?: string;
  queue: { ref: string; project: string; title: string }[];
  finished: { ref: string; title: string; result: '一次通过' | '返工 1 次' }[];
  week: { done: number; firstPass: string; helps: number };
  today: TimelineBlock[];
}

// ───────────────────────── attention (待审) ─────────────────────────

export type AttentionKind = '求助' | '冲突' | '候选' | '上提' | '看截图' | '抽检' | '复验';
export type AttentionGroup = '阻塞任务' | '需要你确认' | '看截图' | '抽检与复验';

export interface AttentionItem {
  id: string;
  kind: AttentionKind;
  group: AttentionGroup;
  title: string;
  /** Line under the title in the review queue. */
  detail: string;
  /** Shorter line used on the overview. */
  summary: string;
  /** When it reached you (clock time or a day word such as "昨天"). */
  since: string;
  /** Minutes an agent has been blocked on it, when blocking. */
  waitedMin?: number;
  /** Longer explanation shown where the decision is made. */
  body?: string;
  route: string;
  refs?: { requirement?: string; subtask?: string; knowledge?: string; candidate?: string };
}

// ───────────────────────── knowledge ─────────────────────────

export type Layer = 'L0' | 'L1' | 'L2' | 'L3';
export type ConstraintLevel = '红线' | '默认' | '建议' | '参考';
export type Credibility = '假设' | '初步验证' | '已验证';
export type Lifecycle = '候选' | '已确认' | '可能过时' | '已废弃' | '已取代';

export interface KnowledgeItem {
  id: string;
  /** The judgement in one line. */
  text: string;
  /** Short name for compact views (graphs, heatmaps, traces). */
  short: string;
  layer: Layer;
  /** Scope label, e.g. "L2 bundle 插件" or "L3 客户 A". */
  scope: string;
  level: ConstraintLevel;
  credibility: Credibility;
  lifecycle: Lifecycle;
  /** Citations in the last 30 days. */
  cited30d?: number;
  /** Citations per week for the last 8 weeks (`observation.weeks.slice(-8)`), oldest first. */
  weeklyCitations?: number[];
  /** Status note shown with the item, e.g. "45 天未调用". */
  note?: string;
  /** One-line summary of the supporting evidence; `backticks` render as code. */
  evidenceSummary?: string;
  supersededBy?: string;
  /** Evidence the item rests on; when one goes stale, every item sharing it is flagged. */
  evidenceIds?: string[];
}

export interface Evidence {
  id: string;
  title: string;
  /** Source type, e.g. 返工复盘, 官方文档, 客户提供. */
  kind: string;
  date: DayLabel;
  note?: string;
  /** Content fingerprint and quoted lines, for source-code evidence. */
  excerpt?: { hash: string; lines: [lineNo: number, code: string][] };
}

/** Finished or running task as seen from a knowledge item. */
export interface TaskRecord {
  ref: string;
  title: string;
  meta: string;
  result: '进行中' | '一次通过' | '返工 1 次';
}

// ───────────────────────── observation ─────────────────────────

/** One of the four core metrics from "观测与指标". */
export interface CoreMetric {
  id: 'firstPass' | 'regressions' | 'corrections' | 'repeats';
  name: string;
  /** The question this metric answers. */
  question: string;
  unit: '' | '%';
  /** Weekly values aligned with `observation.weeks`. */
  values: number[];
  base: number;
  /** Extra note shown after the baseline on the overview. */
  aside?: string;
  /** Y-axis range for charts. */
  range: [number, number];
}

export interface GatewayToday {
  calls: number;
  byKind: Record<'检索' | '引用' | '其他', number>;
  activeSessions: number;
  p95Ms: number;
  p95TargetMs: number;
  rejected: number;
  timeouts: number;
  timeoutWindow: string;
  rateLimited: number;
  /** Calls per minute for the last 60 minutes, ending now. */
  lastHour: number[];
}

// ───────────────────────── task trace ─────────────────────────

export type TaskEventType = '领取' | '检索' | '引用' | '修改' | '候选' | '拦截' | '求助';

/** Append-only event log entry for a subtask, as recorded by the gateway and tool hooks. */
export interface TaskEvent {
  time: ClockTime;
  type: TaskEventType;
  title: string;
  detail: string;
}

export interface HelpRequest {
  /** Attention item that carries the decision. */
  attentionId: string;
  question: string;
  /** Explanation; text in `backticks` renders as code. */
  body: string;
  consequence: string;
  uncertainty: string;
  options: { title: string; desc: string; cost: string }[];
}

/** Everything recorded for one subtask: what it read, what it changed, and why. */
export interface TaskDetail {
  /** `${requirementId}/${subtaskId}` */
  subtask: string;
  help?: HelpRequest;
  events: TaskEvent[];
  files: { path: string; added?: number; removed?: number; state: '已修改' | '被 hook 拦下' }[];
  /** Evidence line per checkpoint (index = checkpoint - 1). */
  checkpointEvidence: string[];
  /** Knowledge the gateway returned, in retrieval order, and whether the agent cited it. */
  retrieved: { id: string; cited: boolean }[];
  citationsVerified: number;
  /** Trace graph: evidence → knowledge → outputs. */
  trace: {
    evidence: string[];
    outputs: { title: string; meta: string }[];
    /** [evidence id, knowledge id] */
    supports: [string, string][];
    /** [knowledge id, output index] */
    produces: [string, number][];
  };
  candidates: string[];
  visualCheck?: { state: '未开始' | '进行中' | '通过'; devices: string[]; note: string };
}

/** Full record of a knowledge item, per the field table in "知识模型与流程". Only items opened in detail carry one. */
export interface KnowledgeRecord {
  id: string;
  form: '规则' | '决策' | '踩坑' | '范例' | '流程' | '资产引用';
  /** Kind of constraint and which of the three knowledge classes (世界 / 你 / AI) it belongs to. */
  category: string;
  judgement?: string;
  reason?: string;
  /** Conditions at the time it was judged; used to tell when it may have gone stale. */
  conditions: string;
  scenario: string;
  scopeNote?: string;
  levelNote?: string;
  loading: string;
  importance?: '高' | '中' | '低';
  visibility: string;
  version?: string;
  provenance: string;
  credibilityNote?: string;
  evidence: { id: string; rel: '支持' | '条件来源' | '不构成反证' }[];
  usage?: { retrieved: number; cited: number; firstPass: [number, number]; reworks: number; reworkNote: string };
  /** Lifecycle history; `tone`: neutral, you (you decided), up (credibility up), flag (needs you). */
  history?: { date: DayLabel; tone: 'neutral' | 'you' | 'up' | 'flag'; title: string; detail: string }[];
  tasks?: { total: number; recent: TaskRecord[] };
  promotion?: { to: string; proposed: string; summary: string; reasons: string[]; caution: string };
  /** Relation to existing knowledge, shown when reviewing a candidate. */
  relations?: { id: string; rel: '覆盖' | '无关'; note: string }[];
  /** What happens once you confirm a candidate. */
  onConfirm?: string[];
}

export interface KnowledgeLayerStats {
  layer: Layer;
  name: string;
  desc: string;
  counts: Record<Lifecycle, number>;
  /** Confirmed items by credibility. */
  credibility: Record<Credibility, number>;
  cited30d: number;
}

/** A health signal on the knowledge base ("需要处理"). */
export interface KnowledgeSignal {
  title: string;
  count: number;
  tone: Tone;
  items: { id: string; meta: string; text?: string }[];
  hint: string;
}

// ───────────────────────── intake, screenshots, weekly review ─────────────────────────

/** A past requirement, used for similarity hints. */
export interface PastRequirement {
  id: string;
  clientId?: ClientId;
  title: string;
  month: string;
  acceptedAt?: DayLabel;
  outcome: string;
  lesson: string;
  similarity: number;
}

/** What was registered for a requirement and the confirmation sheet drafted from it. */
export interface IntakeRecord {
  requirementId: string;
  source: '微信' | '邮件' | '会议记录' | '其他';
  rawText: string;
  attachments: string[];
  expected: string;
  drafted: { by: string; at: string; retrieved: number; cited: number };
  understanding: string[];
  /** Source of each acceptance criterion (same order as `Requirement.acceptance`). */
  criteriaSources: string[];
  excluded: string[];
  questions: string[];
  knowledgeUsed: { id: string; use: '已用' | '冲突'; note?: string }[];
  similar: string[];
}

export interface ScreenshotDiff {
  text: string;
  note: string;
  verdict: '预期' | '意外' | '噪声';
}

/** A screenshot checkpoint ("你看过截图") for one subtask or merge. */
export interface VisualReview {
  id: string;
  subject: string;
  /** Subtask key, when the review belongs to a subtask. */
  subtask?: string;
  by: string;
  at: ClockTime;
  meta: string;
  status: '待你看' | '已通过';
  baseline?: string;
  devices?: { name: string; diffPct: number }[];
  diffs?: ScreenshotDiff[];
  suggestedReturnNote?: string;
  acceptance?: { text: string; note: string; met: boolean }[];
}

export type ErrorCause = '知识缺失' | '知识错误' | '执行失误' | '需求理解' | '外部变化';

export interface WeeklyReview {
  week: string;
  range: string;
  lastReview: { date: DayLabel; minutes: number };
  /** Index of the step currently open (1–5). */
  step: number;
  reworks: { now: number; last: number; base: number };
  completedLastWeek: number;
  errors: { task: string; what: string; cause: ErrorCause; action: string }[];
  knowledge: { added: number; revised: string[]; superseded: string[]; merged: number; recheck: string[]; idle30d: number; candidatesConfirmed: number };
  proposal: { title: string; change: string; basis: string };
  watch: { title: string; note: string; verdict: '维持' | '待看' }[];
  nextTuning: DayLabel;
  effort: { hours: number; output: string; outputHours: number; ratioWeeksBelow1: number };
}

// ───────────────────────── gateway & clients ─────────────────────────

export type GatewayApi = '查询知识' | '登记引用' | '提交候选' | '回报结果' | '求助';

/** One call to the knowledge gateway; every call carries an identity and a task code. */
export interface GatewayCall {
  time: string;
  identity: AgentId;
  task: string;
  api: GatewayApi;
  content: string;
  result: string;
  tone: Tone;
  latencyMs: number;
}

/** Gateway-side permissions of an agent identity (least privilege). */
export interface GatewayIdentity {
  agentId: AgentId;
  role: '需求拆分' | '开发' | '审查回归';
  reads: string;
  writes: string;
  lastCall: ClockTime;
}

export interface ClientProfile {
  clientId: ClientId;
  status: '合作中' | '已销毁';
  /** Short description line under the client name. */
  summary: string;
  /** Number of confirmed client-layer knowledge items. */
  knowledgeCount?: number;
  evidenceCount?: number;
  requirementCount?: number;
  rework?: string;
  /** For a destroyed client: what is left. */
  remains?: [string, string][];
  profile?: [string, string][];
  isolation?: { label: string; detail: string; ok: boolean }[];
  /** Client-layer items shown on the client page and how they relate to upper layers. */
  knowledgeShown?: { id: string; relation?: string }[];
}
