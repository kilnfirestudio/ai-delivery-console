import type { CoreMetric, GatewayCall, GatewayIdentity, GatewayToday } from '../types';

export const observation = {
  weeks: ['W34', 'W35', 'W36', 'W37', 'W38', 'W39', 'W40', 'W41', 'W42', 'W43', 'W44', 'W45'],
  /** Index in `weeks` where stage 1a started (knowledge in use). */
  stage1aWeek: 4,
  coreMetrics: [
    { id: 'firstPass', name: '一次通过率', question: '需求和标准是否清楚', unit: '%', values: [50, 54, 51, 53, 58, 61, 66, 70, 72, 75, 77, 78], base: 52, range: [40, 90] },
    { id: 'regressions', name: '回归缺陷 · 每周', question: '有没有改坏已验收的功能', unit: '', values: [6, 7, 5, 6, 5, 4, 4, 3, 2, 2, 1, 1], base: 6, range: [0, 8] },
    { id: 'corrections', name: '纠错介入 · 每周', question: '你是否在退出中转站角色（求助介入单独统计）', unit: '', values: [11, 12, 10, 11, 9, 8, 7, 6, 6, 5, 5, 4], base: 11, aside: '求助介入 7 单独统计', range: [0, 14] },
    { id: 'repeats', name: '重复错误 · 每周', question: '系统是否真的在学习', unit: '', values: [3, 4, 3, 3, 2, 2, 1, 1, 1, 0, 0, 0], base: 3, range: [0, 5] },
  ] satisfies CoreMetric[] as CoreMetric[],
  /** Gateway enforcement this week, across all agents. */
  agentWeek: { outOfScopeBlocked: 2, citationMismatches: 1 },
  /** Delegation rule currently confirming low-risk candidates for you (see "决策层 · 委托规则"). */
  delegation: { version: 'v3', confirmedToday: 2, confirmedThisWeek: 6 },
  gatewayToday: {
    calls: 1284,
    byKind: { 检索: 802, 引用: 311, 其他: 171 },
    activeSessions: 5,
    p95Ms: 210,
    p95TargetMs: 500,
    rejected: 2,
    timeouts: 3,
    timeoutWindow: '14:02–14:04',
    rateLimited: 0,
    /** Calls per minute for the last 60 minutes, ending now. */
    lastHour: [22, 16, 24, 32, 13, 14, 29, 15, 23, 30, 13, 28, 18, 13, 14, 25, 25, 14, 19, 14, 29, 25, 13, 30, 15, 19, 32, 32, 30, 13, 30, 30, 24, 13, 19, 13, 29, 16, 21, 25, 16, 29, 15, 30, 52, 29, 33, 17, 15, 30, 30, 32, 18, 23, 15, 29, 34, 14, 30, 13],
  } satisfies GatewayToday as GatewayToday,
  gatewayCalls: [
    { time: '16:20:41', identity: 'dev-a', task: 'TASK-0412-T3', api: '查询知识', content: '“客服弹窗 图标 无障碍”→ 4 条（规则 3 · 证据 1）', result: '返回', tone: 'done', latencyMs: 120 },
    { time: '16:20:12', identity: 'dev-b', task: 'TASK-0412-T1', api: '登记引用', content: 'K-034、K-021', result: '核验一致', tone: 'done', latencyMs: 64 },
    { time: '16:19:58', identity: 'dev-d', task: 'X-0031', api: '查询知识', content: '“xuvia 分页 批量”→ 2 条', result: '返回', tone: 'done', latencyMs: 98 },
    { time: '16:18:44', identity: 'dev-d', task: 'X-0031', api: '提交候选', content: '脱敏后重新提交', result: '进入候选区', tone: 'doing', latencyMs: 77 },
    { time: '16:18:30', identity: 'dev-d', task: 'X-0031', api: '提交候选', content: '内容含疑似密钥片段 sk-****', result: '拒绝：密钥扫描', tone: 'risk', latencyMs: 41 },
    { time: '16:12:05', identity: 'split', task: 'TASK-0415', api: '查询知识', content: '“xuvia 选题 去重”→ 8 条', result: '返回', tone: 'done', latencyMs: 143 },
    { time: '16:02:47', identity: 'dev-b', task: 'TASK-0412-T1', api: '查询知识', content: '请求客户 B 层知识', result: '拒绝：不在任务作用域', tone: 'risk', latencyMs: 22 },
    { time: '15:45:10', identity: 'dev-e', task: 'P-0012', api: '回报结果', content: '截图 4 张 · 自测通过', result: '检查点 3', tone: 'done', latencyMs: 210 },
    { time: '15:11:03', identity: 'dev-c', task: 'TASK-0412-T2', api: '求助', content: '是否允许修改共用 CSS · 附 3 个方案', result: '等你', tone: 'you', latencyMs: 88 },
    { time: '15:10:41', identity: 'dev-c', task: 'TASK-0412-T2', api: '回报结果', content: 'hook 拦下越界修改 styles/tokens.css', result: '拦截记录', tone: 'risk', latencyMs: 35 },
  ] satisfies GatewayCall[] as GatewayCall[],
  identities: [
    { agentId: 'split', role: '需求拆分', reads: 'L0–L2 + 本客户层', writes: '候选、拆分方案', lastCall: '16:12' },
    { agentId: 'dev-a', role: '开发', reads: 'L0–L2 + 客户 A', writes: '候选', lastCall: '16:20' },
    { agentId: 'dev-b', role: '开发', reads: 'L0–L2 + 客户 A', writes: '候选', lastCall: '16:20' },
    { agentId: 'dev-c', role: '开发', reads: 'L0–L2 + 客户 A', writes: '候选', lastCall: '15:11' },
    { agentId: 'dev-d', role: '开发', reads: 'L0–L2 + xuvia', writes: '候选', lastCall: '16:19' },
    { agentId: 'dev-e', role: '开发', reads: 'L0–L2 + 个人站', writes: '候选', lastCall: '15:45' },
    { agentId: 'review', role: '审查回归', reads: '本项目全部', writes: '测试、回归报告', lastCall: '12:10' },
  ] satisfies GatewayIdentity[] as GatewayIdentity[],
  /** Reverse indicators for what the gateway cannot see. */
  gatewayAlerts: [
    { kind: '零调用任务', title: 'X-0029 素材库导入脚本', detail: '开发 D 的云端会话没有接网关，只靠热区规则完成。建议检查云端的 MCP 配置', link: ['看分发', '/distribution'] },
    { kind: '超时', title: '14:02–14:04 网关超时 3 次', detail: '期间 agent 用热区规则继续工作，这 3 次计入零调用', link: ['看系统', '/system'] },
  ] as { kind: string; title: string; detail: string; link: [string, string] }[],
  /** Implementation-roadmap failure check (see "实施路线 · 失败判定"). */
  failureCheck: {
    deadline: '12/15',
    daysRun: 53,
    daysTotal: 91,
    criteria: [
      { text: '一次通过率有提升', evidence: '52% → 78%', met: true },
      { text: '纠错介入有减少', evidence: '每周 11 → 4', met: true },
      { text: '投入没有持续超过产出', evidence: '本周 2.5 小时 vs 约 6.4 小时', met: true },
    ],
  },
  /** Weekly hours put into the knowledge base vs. estimated hours saved, from stage 1a on. */
  effortSeries: { input: [5.0, 4.5, 4.0, 3.5, 3.0, 3.0, 2.5, 2.5], output: [0.5, 1.5, 2.5, 3.5, 4.5, 5.2, 5.9, 6.4] },
  roadmap: [
    { name: '0 止血', exit: '回归问题基本消失', state: 'done', note: '已达成' },
    { name: '1a 单项目积累', exit: '积累约 30 条真实知识', state: 'done', note: '已达成 · 现 {count} 条' },
    { name: '1b 单项目见效', exit: '四个核心指标相对基线改善', state: 'done', note: '已达成' },
    { name: '2 网关与跨项目', exit: '出现可上提的跨项目知识', state: 'doing', note: '进行中 · K-027 已提议' },
    { name: '3 完整可观测', exit: '数据证明值得投入', state: 'queue', note: '未开始' },
  ] as { name: string; exit: string; state: 'done' | 'doing' | 'queue'; note: string }[],
  attribution: [
    { name: '1 检索记录', desc: '系统实际交给 agent 的条目 · 机器记录，全量', value: '今天 1,284 次' },
    { name: '2 引用核验', desc: 'agent 声称依据了哪条，自动核对是否存在、内容是否对得上', value: '一致 98.6%' },
    { name: '3 消融测试', desc: '去掉某条再跑一遍。K-021：去掉后返工 +3，保留；K-061：去掉后无变化，建议废弃', value: '已做 2 次' },
    { name: '4 AI 自述', desc: '只作参考，不作依据', value: '不计入' },
  ],
  blindSpots: [
    { gap: '本地热区规则是否被遵守', remedy: '热区保持极小；任务记录写明热区版本；结果抽查', week: '抽查 4 次，0 次违反' },
    { gap: '做法是否真的遵循了引用', remedy: '结果回流 + 抽查，防止为了通过检查而引用', week: '抽查 3 次，1 次不一致（T1）' },
    { gap: '从未调用网关的任务', remedy: '任务登记 + 零调用任务反向指标', week: '零调用任务 1 个', link: '/live' },
    { gap: '网关超时时 agent 无声跳过', remedy: '热区兜底 + 可用性报警；超时计入零调用', week: '超时 3 次' },
  ] as { gap: string; remedy: string; week: string; link?: string }[],
  extended: [
    { category: '质量', value: '证据覆盖率 100% · 验证率 59% · 引用准确率 98.6% · 冲突 1 · 过期率 4%' },
    { category: '使用', value: '调用 1,284 / 天 · 采用率（检索后被引用）38% · 知识缺口率（求助中“没有覆盖”）4 / 7', link: ['热力分布', '/knowledge'] },
    { category: '效果', value: '返工 5 轮 / 周（基线 12）· 交付周期中位 2.5 天（基线 4）· 有无知识对比：消融 2 次' },
    { category: '演化', value: '规模 148 · 本周 +5 / 修订 1 / 取代 1 · 假设转化率 46% · 修正时延中位 1.5 天' },
    { category: '审核健康', value: '通过率 78% · 单条 1 分 40 秒 · 混入错误候选检出 1 / 1' },
  ] as { category: string; value: string; link?: [string, string] }[],
};
