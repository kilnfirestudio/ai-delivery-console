import type { KnowledgeLayerStats, KnowledgeRecord, KnowledgeSignal } from '../types';

export const knowledgeRecords: KnowledgeRecord[] = [
  {
    id: 'K-027',
    form: '规则',
    category: '技术约束 · 世界的知识',
    judgement: '商品图片由 Shopline 图片服务按尺寸参数生成，前端不用 object-fit 硬裁',
    reason: 'CSS 硬裁在比例不同的商品图上会裁掉主体；9 月客户 A 的两次返工都是这个原因',
    conditions: 'Shopline 图片地址支持宽高和裁切参数（官方文档 2026-09 版）',
    scenario: 'bundle 插件里展示商品图的区块，移动端和桌面端都适用',
    scopeNote: 'L2 bundle 插件 · 所有客户',
    levelNote: '建议：可以不照做，但要在引用时说明原因',
    loading: '冷区，按场景检索',
    importance: '中',
    visibility: '内部',
    version: 'v2 · 取代 K-011「商品图统一 1:1 裁切」',
    provenance: '处理运行 PR-0712 从 T-0388 的返工复盘中提炼，你在 09/15 确认',
    evidence: [
      { id: 'E-311', rel: '支持' },
      { id: 'E-208', rel: '条件来源' },
      { id: 'E-390', rel: '支持' },
      { id: 'E-402', rel: '支持' },
      { id: 'E-455', rel: '不构成反证' },
    ],
    usage: { retrieved: 41, cited: 17, firstPass: [7, 9], reworks: 2, reworkNote: '1 次与本条无关' },
    history: [
      { date: '09/14', tone: 'neutral', title: '作为候选进入候选区', detail: '处理运行 PR-0712 从 T-0388 的返工复盘中提炼，附证据 E-311、E-208' },
      { date: '09/15', tone: 'you', title: '你确认，可信度：假设', detail: '同时取代 K-011；K-011 保留历史，不再返回' },
      { date: '10/03', tone: 'up', title: '可信度升到初步验证', detail: '客户 B 主题验证通过（E-390），按可信度更新规则自动升级' },
      { date: '10/28', tone: 'up', title: '新增支持证据', detail: '回归报告 E-402' },
      { date: '11/07', tone: 'flag', title: '处理层提议上提到 L1 Shopline', detail: '等你决定' },
    ],
    tasks: {
      total: 10,
      recent: [
        { ref: 'T2', title: '卡片移动端图片改为服务端裁切', meta: 'Black Friday 改版 · 开发 C · 本条被引用', result: '进行中' },
        { ref: 'TASK-0407', title: 'bundle 价格四舍五入', meta: '返工原因与本条无关', result: '返工 1 次' },
        { ref: 'T-0401', title: '组合卡片桌面端布局', meta: '开发 A', result: '一次通过' },
        { ref: 'T-0396', title: '推荐区块商品图', meta: '开发 B', result: '一次通过' },
        { ref: 'T-0390', title: '客户 B 主题适配', meta: '图片服务参数写错', result: '返工 1 次' },
      ],
    },
    promotion: {
      to: 'L1 Shopline 领域层',
      proposed: '处理层 11/07 11:30 提出',
      summary: '已在 2 个客户主题验证',
      reasons: ['已在客户 A、客户 B 两个主题里验证通过', '条目本身不含客户信息，不需要去标识化；证据随条目一起继承', '上提后，所有 Shopline 项目的 agent 都会检索到它，不再只限 bundle 插件'],
      caution: '本条的“当下条件”引用的是 2026-09 版图片服务文档。官方文档 10/20 有更新，同样依据这份文档的 K-044 已被标为可能过时。建议先复查当下条件，再决定上提。',
    },
  },
  {
    id: 'C-0219',
    form: '规则',
    category: '技术约束 · 世界的知识',
    conditions: '客户 A 当前主题版本 2.4；换主题后需复查',
    scenario: '客户 A 主题里所有移动端样式和图片尺寸',
    loading: '冷区，按场景检索',
    visibility: '只对客户 A 的任务可见',
    provenance: '来自 T2 · 开发 C 在 14:40 提交 · 处理运行 PR-0907 补全了字段和去重',
    credibilityNote: '初步验证（源码 + 2 张截图）',
    evidence: [
      { id: 'E-512', rel: '支持' },
      { id: 'E-513', rel: '支持' },
      { id: 'E-514', rel: '支持' },
    ],
    relations: [
      { id: 'K-112', rel: '覆盖', note: 'L1 Shopline 领域 · 已验证 · 本条在客户 A 范围内覆盖它，需要写明理由' },
      { id: 'C-B-004', rel: '无关', note: 'L3 客户 B · 不同客户，互不可见' },
    ],
    onConfirm: ['先记入事件日志，再由网关写入客户 A 的客户库，不进 git', '客户 A 的 agent 查询移动端样式时，这条排在 K-112 前面', 'K-112 和其他客户不受影响；合作结束销毁客户 A 的密钥时，这条一起销毁'],
  },
];

export const knowledgeSummary = {
  lastWrite: '16:02',
  reconciled: true,
  newThisWeek: 5,
  layers: [
    { layer: 'L0', name: 'L0 全局', desc: '跨所有项目的做事方式', counts: { 已确认: 31, 候选: 2, 可能过时: 1, 已废弃: 1, 已取代: 2 }, credibility: { 已验证: 22, 初步验证: 7, 假设: 2 }, cited30d: 96 },
    { layer: 'L1', name: 'L1 Shopline 领域', desc: '平台规则与主题开发', counts: { 已确认: 46, 候选: 3, 可能过时: 3, 已废弃: 1, 已取代: 3 }, credibility: { 已验证: 28, 初步验证: 13, 假设: 5 }, cited30d: 118 },
    { layer: 'L2', name: 'L2 项目', desc: 'bundle 插件、xuvia、直播语音、个人站', counts: { 已确认: 52, 候选: 3, 可能过时: 2, 已废弃: 2, 已取代: 2 }, credibility: { 已验证: 25, 初步验证: 19, 假设: 8 }, cited30d: 87 },
    { layer: 'L3', name: 'L3 客户', desc: '3 个客户，各自加密隔离', counts: { 已确认: 19, 候选: 1, 可能过时: 0, 已废弃: 0, 已取代: 0 }, credibility: { 已验证: 12, 初步验证: 5, 假设: 2 }, cited30d: 41 },
  ] satisfies KnowledgeLayerStats[] as KnowledgeLayerStats[],
  signals: [
    { title: '30 天以上没被调用', count: 12, tone: 'queue', items: [{ id: 'K-052', meta: '45 天未调用 · L2 xuvia' }, { id: 'K-073', meta: '38 天未调用 · L2 个人站' }], hint: '没被调用不等于没用：先确认对应场景最近是否出现过，再决定废弃' },
    { title: '可能过时', count: 6, tone: 'you', items: [{ id: 'K-061', meta: '模型升级后可能不再需要 · 建议做消融测试' }, { id: 'K-044', meta: '官方文档 10/20 更新，当下条件变了' }], hint: '复验后三选一：确认仍有效、修订为新条目取代、废弃' },
    { title: '引用后返工偏高', count: 2, tone: 'risk', items: [{ id: 'K-015', meta: '近 8 周引用 29 次，其中 6 次所在任务返工' }, { id: 'K-008', meta: '引用 20 次，返工 3 次，并与客户要求冲突' }], hint: '相关不等于因果：先看返工原因是不是出在这条知识上' },
    { title: '冲突', count: 1, tone: 'risk', items: [{ id: 'K-008', text: '与客户 A 要求的 36px 标题冲突', meta: '上位、特别、后法、可信度都分不出 · 已升级给你' }], hint: '裁决结果会作为客户层的覆盖写入，并写明理由' },
  ] satisfies KnowledgeSignal[] as KnowledgeSignal[],
};

/** This week's review-gate health (see "决策层 · 审核本身也被监控"). */
export const reviewHealth = {
  reviewed: 9,
  rejected: 2,
  avgSeconds: 100,
  lastWeekAvgSeconds: 125,
  under30s: 1,
  seededWrong: { caught: 1, total: 1 },
  spotChecks: 2,
  spotIssues: 0,
  overturned30d: 1,
  overturnedNote: 'K-015 修订',
};
