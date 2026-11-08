import type { Agent, AttentionItem, Client, Project, Requirement, Subtask, Workspace } from '../types';

export const workspace: Workspace = {
  name: '个人工作区',
  today: '2026-11-07',
  weekday: '周六',
  now: '16:20',
  stage: 2,
  stageLabel: '网关与跨项目',
  gateway: { online: true, latencyMs: 180 },
  devices: [
    { name: 'M5 Pro', online: true },
    { name: 'MacBook Air', online: true },
  ],
  notifications: { instant: 2, digestAt: '18:00' },
};

export const projects: Project[] = [
  { id: 'shopline', name: 'Shopline bundle 插件', short: 'Shopline', line: '主线' },
  { id: 'xuvia', name: 'xuvia 内容系统', short: 'xuvia', line: '子线' },
  { id: 'site', name: '个人站', short: '个人站', line: '子线' },
  { id: 'voice', name: 'AI 直播语音', short: '直播语音', line: '维护' },
];

export const clients: Client[] = [
  { id: 'A', name: '客户 A', alias: '某户外品牌', projectId: 'shopline' },
  { id: 'B', name: '客户 B', alias: '某家居品牌', projectId: 'shopline' },
  { id: 'C', name: '客户 C', alias: '某美妆品牌', projectId: 'shopline' },
];

export const requirements: Requirement[] = [
  {
    id: 'TASK-0412', projectId: 'shopline', clientId: 'A', title: 'Black Friday 页面改版', step: 4, plannedFor: '11/09', registeredAt: '11/05', specVersion: 'v2',
    splitBasis: 'K-021 共用文件先行 · K-034 按文件范围切分',
    stepLog: [
      { who: '你 · 11/05', note: '网关生成 TASK-0412' },
      { who: '你 + 客户 · 11/05', note: '需求单 v2，6 条验收标准' },
      { who: '需求拆分 agent · 11/06', note: '5 个子任务，你已确认' },
      { who: '开发 A / B / C', note: 'T0 已过 5 个检查点，T1–T3 进行中' },
      { who: '审查回归 agent', note: '等待 T1–T3' },
      { who: '你', note: '验收后发给客户' },
      { who: '处理层 → 候选区', note: '交付后提炼候选' },
      { who: '你 / 委托规则', note: '更新可信度与规则' },
    ],
    acceptance: [
      { text: '所有 bundle 卡片显示 Black Friday 折扣价与原价', by: 'T0 + T1 · 已在预览站确认', met: true },
      { text: '对比表中参加活动的商品显示“限时”徽章', by: 'T1 · 开发中', met: false },
      { text: '移动端卡片图片不变形、不裁掉商品主体', by: 'T2 · 等待你决定是否改共用 CSS', met: false },
      { text: '客服弹窗使用新图标，点击行为不变', by: 'T3 · 开发中', met: false },
      { text: '活动结束后自动恢复原样式', by: 'T0 · 已用时间开关验证', met: true },
      { text: '原有加购、折扣叠加逻辑不受影响', by: 'T4 · 全量回归时验证', met: false },
    ],
    regression: [
      { name: '多件折扣叠加计算', meta: '10/12 验收 · 关联规则 K-015', status: '待回归' },
      { name: 'bundle 卡片桌面端布局', meta: '10/20 验收 · T0 改了共用组件', status: '通过' },
      { name: '加购按钮与库存提示', meta: '10/20 验收', status: '待回归' },
      { name: '移动端商品图', meta: '09/28 验收 · T2 直接改动此处', status: '有风险' },
      { name: '客服弹窗打开与关闭', meta: '10/02 验收 · T3 改动此处', status: '待回归' },
    ],
  },
  { id: 'TASK-0409', projectId: 'shopline', title: '购物车提示文案', step: 6, deliveredAt: '11/06' },
  { id: 'TASK-0407', projectId: 'shopline', title: 'bundle 价格计算修正', step: 4, plannedFor: '11/12' },
  { id: 'X-REQ-02', projectId: 'xuvia', title: '选题批量生成', step: 4, plannedFor: '11/14' },
  { id: 'TASK-0415', projectId: 'xuvia', title: '选题去重', step: 2 },
  { id: 'P-REQ-03', projectId: 'site', title: '案例页改版', step: 4, plannedFor: '11/10' },
];

export const subtasks: Subtask[] = [
  { id: 'T0', requirementId: 'TASK-0412', title: '抽出共用卡片组件与样式变量', state: 'done', agentId: 'dev-a', checkpoint: 5, branch: 'bf/t0-shared', files: ['components/card/*', 'styles/tokens.css'], note: '回归 12/12 通过' },
  { id: 'T1', requirementId: 'TASK-0412', title: '对比表加“限时”徽章', state: 'doing', agentId: 'dev-b', checkpoint: 2, branch: 'bf/t1-badge', files: ['sections/compare-table/*'], dependsOn: ['T0'] },
  { id: 'T2', requirementId: 'TASK-0412', title: '卡片移动端图片改为服务端裁切', state: 'you', agentId: 'dev-c', checkpoint: 1, branch: 'bf/t2-mobile-img', files: ['sections/bundle-card/*'], dependsOn: ['T0'], waitingFor: '等你回答求助' },
  { id: 'T3', requirementId: 'TASK-0412', title: '客服弹窗换新图标', state: 'doing', agentId: 'dev-a', checkpoint: 1, branch: 'bf/t3-icon', files: ['snippets/chat-popup.liquid', 'assets/icons/*'], dependsOn: ['T0'] },
  { id: 'T4', requirementId: 'TASK-0412', title: '合并分支，全量回归与截图比对', state: 'queue', agentId: 'review', checkpoint: 0, branch: 'bf/release', files: ['只读 + tests/*'], dependsOn: ['T1', 'T2', 'T3'] },
  { id: '09-1', requirementId: 'TASK-0409', title: '提示文案替换', state: 'done', agentId: 'dev-b', checkpoint: 5 },
  { id: '09-2', requirementId: 'TASK-0409', title: '库存提示样式', state: 'done', checkpoint: 5 },
  { id: '09-3', requirementId: 'TASK-0409', title: '多语言文案', state: 'done', checkpoint: 5 },
  { id: '07-1', requirementId: 'TASK-0407', title: '价格四舍五入', state: 'done', agentId: 'dev-c', checkpoint: 5, reworks: 1 },
  { id: '07-2', requirementId: 'TASK-0407', title: '折扣叠加顺序', state: 'done', checkpoint: 5 },
  { id: '07-3', requirementId: 'TASK-0407', title: '价格单元测试补齐', state: 'queue', checkpoint: 0 },
  { id: 'X-0029', requirementId: 'X-REQ-02', title: '素材库导入脚本', state: 'done', agentId: 'dev-d', checkpoint: 5 },
  { id: 'X-0031', requirementId: 'X-REQ-02', title: '选题批量生成接口', state: 'doing', agentId: 'dev-d', checkpoint: 2 },
  { id: 'X-0032', requirementId: 'X-REQ-02', title: '生成结果去重', state: 'queue', checkpoint: 0 },
  { id: 'X-0033', requirementId: 'X-REQ-02', title: '生成记录页', state: 'queue', checkpoint: 0 },
  { id: 'P-0010', requirementId: 'P-REQ-03', title: '案例数据整理', state: 'done', checkpoint: 5 },
  { id: 'P-0011', requirementId: 'P-REQ-03', title: '移动端导航', state: 'done', agentId: 'dev-e', checkpoint: 5 },
  { id: 'P-0012', requirementId: 'P-REQ-03', title: '案例页', state: 'you', agentId: 'dev-e', checkpoint: 3, files: ['pages/cases/*'], waitingFor: '等你看截图' },
];

export const agents: Agent[] = [
  {
    id: 'split', name: '需求拆分 agent', tool: 'Claude', host: '网页端', status: 'idle',
    scope: '读 L0–L2 与本客户层 · 写候选、提交拆分方案',
    current: '等客户确认 TASK-0415 需求单', idleText: '暂无',
    queue: [{ ref: 'TASK-0415', project: 'xuvia', title: '拆分选题去重需求（等客户确认需求单）' }],
    finished: [{ ref: 'TASK-0415', title: '起草 xuvia 选题去重的确认单', result: '一次通过' }],
    week: { done: 3, firstPass: '3 / 3', helps: 0 },
    today: [{ from: '10:05', to: '10:35', kind: 'past', label: 'TASK-0415 起草确认单' }],
  },
  {
    id: 'dev-a', name: '开发 A', tool: 'Claude Code', host: 'M5 Pro', local: true, status: 'doing',
    scope: '读 L0–L2 与客户 A 层 · 只改 T3 文件范围',
    current: '', activeSubtask: 'TASK-0412/T3', activeNote: '已检索 4 条图标与无障碍规则',
    queue: [],
    finished: [{ ref: 'T0', title: '抽出共用卡片组件与样式变量', result: '一次通过' }],
    week: { done: 5, firstPass: '5 / 5', helps: 1 },
    today: [
      { from: '09:00', to: '11:30', kind: 'past', label: 'T0 共用组件' },
      { from: '13:30', to: '16:20', kind: 'work', label: 'T3 客服弹窗图标' },
    ],
  },
  {
    id: 'dev-b', name: '开发 B', tool: 'Codex', host: 'M5 Pro', local: true, status: 'doing',
    scope: '读 L0–L2 与客户 A 层 · 只改 T1 文件范围',
    current: '', activeSubtask: 'TASK-0412/T1', activeNote: '1 处引用核验不一致，已记入每周复盘',
    queue: [],
    finished: [{ ref: 'TASK-0409', title: '购物车提示文案替换', result: '一次通过' }],
    week: { done: 4, firstPass: '2 / 4', helps: 1 },
    today: [
      { from: '09:30', to: '11:00', kind: 'past', label: 'TASK-0409 文案' },
      { from: '12:15', to: '16:20', kind: 'work', label: 'T1 限时徽章' },
    ],
  },
  {
    id: 'dev-c', name: '开发 C', tool: 'Claude Code', host: 'M5 Pro', local: true, status: 'you',
    scope: '读 L0–L2 与客户 A 层 · 只改 T2 文件范围',
    current: '', activeSubtask: 'TASK-0412/T2', activeNote: '求助：要改共用 CSS 才能完成，已被改文件前 hook 拦下',
    queue: [],
    finished: [{ ref: 'TASK-0407', title: 'bundle 价格四舍五入', result: '返工 1 次' }],
    week: { done: 3, firstPass: '2 / 3', helps: 3 },
    today: [
      { from: '09:20', to: '10:30', kind: 'past', label: 'TASK-0407 四舍五入' },
      { from: '10:30', to: '10:50', kind: 'wait', label: '等你' },
      { from: '10:50', to: '11:30', kind: 'past', label: '返工' },
      { from: '12:15', to: '15:11', kind: 'past', label: 'T2 移动端图片' },
      { from: '15:11', to: '16:20', kind: 'wait', label: '等你回答求助' },
    ],
  },
  {
    id: 'dev-d', name: '开发 D', tool: 'Codex', host: '云端', status: 'doing',
    scope: '读 L0–L2 与 xuvia 项目层 · 只改接口目录',
    current: '', activeSubtask: 'X-REQ-02/X-0031', activeNote: '正在写接口测试',
    queue: [{ ref: 'X-0032', project: 'xuvia', title: '生成结果去重' }],
    finished: [{ ref: 'X-0029', title: '素材库导入脚本', result: '一次通过' }],
    week: { done: 4, firstPass: '3 / 4', helps: 1 },
    today: [
      { from: '09:00', to: '12:00', kind: 'past', label: 'X-0029 导入脚本' },
      { from: '13:00', to: '16:20', kind: 'work', label: 'X-0031 批量生成接口' },
    ],
  },
  {
    id: 'dev-e', name: '开发 E', tool: 'Cursor', host: 'MacBook Air', status: 'you',
    scope: '读 L0–L2 与个人站项目层 · 只改 pages/cases',
    current: '', activeSubtask: 'P-REQ-03/P-0012', activeNote: '截图已提交，等你看（不阻塞，可先领下一个任务）',
    queue: [],
    finished: [{ ref: 'P-0011', title: '移动端导航', result: '一次通过' }],
    week: { done: 3, firstPass: '2 / 3', helps: 0 },
    today: [
      { from: '10:00', to: '11:45', kind: 'past', label: 'P-0011 导航' },
      { from: '13:00', to: '15:45', kind: 'past', label: 'P-0012 案例页' },
      { from: '15:45', to: '16:20', kind: 'wait', label: '等你看截图' },
    ],
  },
  {
    id: 'review', name: '审查回归 agent', tool: 'Claude Code', host: 'M5 Pro', local: true, status: 'standby',
    scope: '读全部本项目代码 · 只写测试与回归报告',
    current: '等 T1–T3 完成', idleText: '等待 T1–T3 完成',
    queue: [
      { ref: 'T4', project: 'Shopline', title: '合并 Black Friday 分支并全量回归' },
      { ref: 'P-0013', project: '个人站', title: '案例页回归' },
    ],
    finished: [{ ref: 'T0-R', title: 'T0 回归 12 / 12 通过', result: '一次通过' }],
    week: { done: 1, firstPass: '1 / 1', helps: 1 },
    today: [{ from: '11:30', to: '12:10', kind: 'past', label: 'T0 合并回归' }],
  },
];

/** Everything that needs a decision from you, ordered by urgency inside each group. */
export const attention: AttentionItem[] = [
  {
    id: 'AT-01', kind: '求助', group: '阻塞任务', title: 'T2 是否允许修改共用 CSS',
    detail: 'Black Friday 改版 · 开发 C 停在检查点 2', summary: '开发 C 停在检查点 2 · 会影响 3 个已验收区块',
    since: '15:11', waitedMin: 69, refs: { requirement: 'TASK-0412', subtask: 'TASK-0412/T2' },
  },
  {
    id: 'AT-02', kind: '冲突', group: '阻塞任务', title: '客户要求标题 36px，与 K-008 冲突',
    detail: '影响验收标准第 1 条 · 裁决规则分不出', summary: '裁决规则分不出先后 · 影响验收标准第 1 条',
    since: '15:40', waitedMin: 40, refs: { requirement: 'TASK-0412', knowledge: 'K-008' },
    body: '客户要求标题 36px，领域规则 K-008 规定移动端标题不超过 28px。上位、特别、后法、可信度都分不出，已升级给你。',
  },
  {
    id: 'AT-03', kind: '候选', group: '需要你确认', title: '客户 A 移动端断点为 750px',
    detail: '客户层 · 来自 T2', summary: '客户层 · 必须由你确认', since: '14:40', refs: { requirement: 'TASK-0412', subtask: 'TASK-0412/T2', candidate: 'C-0219' },
  },
  {
    id: 'AT-04', kind: '候选', group: '需要你确认', title: 'xuvia 选题接口单次最多 50 条',
    detail: '项目层 · 高后果：影响批量生成', summary: '后果大：影响批量生成', since: '13:15', refs: { candidate: 'C-0220' },
  },
  {
    id: 'AT-05', kind: '上提', group: '需要你确认', title: 'K-027 上提到 Shopline 领域层',
    detail: '已在 2 个客户主题验证', summary: '跨项目上提 · 建议先复查当下条件', since: '11:30', refs: { knowledge: 'K-027' },
  },
  {
    id: 'AT-06', kind: '看截图', group: '看截图', title: 'P-0012 个人站案例页',
    detail: '4 台设备 · 1 处意外差异', summary: '4 台设备 · 1 处意外差异', since: '15:45', waitedMin: 35, refs: { subtask: 'P-REQ-03/P-0012' },
  },
  {
    id: 'AT-07', kind: '抽检', group: '抽检与复验', title: '委托规则自动确认：个人站图片统一用 webp',
    detail: '低风险自动确认后的随机抽检', summary: '低风险自动确认后的随机抽检', since: '10:05',
  },
  {
    id: 'AT-08', kind: '复验', group: '抽检与复验', title: 'K-061 Codex 需要显式写出文件清单',
    detail: '模型升级后可能不再需要 · 建议做消融测试', summary: '模型升级后可能不再需要', since: '昨天', refs: { knowledge: 'K-061' },
  },
];
