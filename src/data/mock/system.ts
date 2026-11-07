import type { Tone } from '../types';

type Row = { tone?: Tone; status?: string };

/** "采集与处理": where raw evidence comes from and how it becomes knowledge. */
export const pipeline = {
  week: {
    evidenceBySource: [['git 提交', 138], ['截图', 96], ['AI 网页对话导出', 64], ['agent 会话', 41], ['客户沟通', 12]] as [string, number][],
    runsByKind: [['提炼候选', 9], ['去重聚类', 5], ['有效期复查', 3], ['其他', 6]] as [string, number][],
    candidatesBySource: [['来自 agent 回写', 11], ['来自处理层', 5]] as [string, number][],
    /** Candidates still waiting at the end of the week (reviewed counts come from reviewHealth and delegation). */
    stillPending: 1,
  },
  sources: [
    { name: 'Claude Code 会话', method: 'hooks：会话结束自动回写', device: 'M5 Pro', lastSync: '16:05', week: 27, status: '正常', tone: 'done' },
    { name: 'Codex 会话', method: 'hooks', device: 'M5 Pro · 云端', lastSync: '15:50', week: 9, status: '云端会话未接网关', tone: 'you' },
    { name: 'Cursor 会话', method: '采集程序', device: 'MacBook Air', lastSync: '15:58', week: 5, status: '正常', tone: 'done' },
    { name: 'GPT · Gemini · Grok 网页对话', method: '手动导出，作为原始证据', device: '两台', lastSync: '11/06', week: 38, status: 'AI 的建议≠你的决定', tone: 'queue' },
    { name: 'Claude 网页对话', method: '导出', device: '两台', lastSync: '11/07', week: 26, status: '正常', tone: 'done' },
    { name: 'git 历史', method: '仓库钩子', device: 'VPS', lastSync: '16:02', week: 138, status: '正常', tone: 'done' },
    { name: '截图', method: '回归脚本 + 手动上传', device: 'M5 Pro', lastSync: '15:45', week: 96, status: '正常', tone: 'done' },
    { name: '客户沟通', method: '登记需求时提交', device: '—', lastSync: '11/07', week: 12, status: '正常', tone: 'done' },
  ] as ({ name: string; method: string; device: string; lastSync: string; week: number; status: string; tone: Tone })[],
  import: {
    name: '导入 #3：2025 年 Shopline 项目对话',
    funnel: [['导出的对话', 1240], ['选中导入', 186], ['提炼出候选', 41], ['已确认', 22]] as [string, number][],
    rejected: 11,
    pending: 8,
  },
  budget: { usedYuan: 186, limitYuan: 300, localShare: 0.64 },
  runs: [
    { id: 'PR-0907', kind: '提炼候选', input: 'T2 会话记录', model: '本地 · extract v6', time: '42 秒', cost: 0, output: '1 条候选 C-0219' },
    { id: 'PR-0906', kind: '去重聚类', input: '候选区 9 条', model: '云端 · dedup v3', time: '18 秒', cost: 0.8, output: '合并 3 组重复' },
    { id: 'PR-0905', kind: '有效期复查', input: '到期 14 条', model: '本地 · review v2', time: '1 分 05 秒', cost: 0, output: '标记 2 条可能过时' },
    { id: 'PR-0904', kind: '热区生成', input: 'bundle 插件 L0–L2', model: '规则脚本', time: '3 秒', cost: 0, output: '热区 v19，128 行' },
    { id: 'PR-0903', kind: '知识库回归', input: '12 个基准问题', model: '云端 · qa v4', time: '2 分 10 秒', cost: 2.1, output: '11 / 12 通过' },
    { id: 'PR-0902', kind: '对抗性复审', input: 'K-015 v3', model: '云端 · critic v2', time: '36 秒', cost: 0.6, output: '未发现问题' },
    { id: 'PR-0901', kind: '指标计算', input: '本周任务与事件', model: '规则脚本', time: '9 秒', cost: 0, output: '更新 4 个核心指标' },
  ],
};

/** "分发": how knowledge reaches agents. */
export const distribution = {
  channels: [
    { name: '静态注入 · 热区', desc: '红线和最核心约定，生成到各项目的 AGENTS.md 等文件；网关不可用时兜底', observable: '否', tone: 'you' },
    { name: '按需检索 · MCP', desc: '大部分规则、踩坑、客户信息；所有工具接同一个网关', observable: '是', tone: 'done' },
    { name: '技能', desc: '可复用的做事流程，渐进加载', observable: '部分', tone: 'queue' },
    { name: '回写', desc: '任务结果、会话归档、候选知识', observable: '是', tone: 'done' },
  ] as { name: string; desc: string; observable: string; tone: Tone }[],
  /** Hot-zone size limit from "知识模型与流程": all red lines go in, total ≤ 150 lines. */
  hotZoneLimit: 150,
  hotZoneWarnAt: 120,
  hotZones: [
    { projectId: 'shopline', version: 'v19', lines: 128, redLines: 6, core: 22, generated: '16:00' },
    { projectId: 'xuvia', version: 'v7', lines: 96, redLines: 4, core: 15, generated: '11/05' },
    { projectId: 'site', version: 'v5', lines: 74, redLines: 3, core: 11, generated: '11/02' },
    { projectId: 'voice', version: 'v3', lines: 61, redLines: 2, core: 9, generated: '10/12' },
  ],
  devices: ['M5 Pro', 'MacBook Air', 'Codex 云端'],
  /** Hot-zone version installed per project and device; `null` = not used there. */
  sync: [
    { projectId: 'shopline', cells: [{ version: 'v19', note: '16:01' }, { version: 'v18', note: '缺 K-021，Air 未联网同步' }, { version: 'v19', note: '16:02' }] },
    { projectId: 'xuvia', cells: [{ version: 'v7' }, { version: 'v7' }, { version: 'v6', note: '云端会话未接网关，热区也没更新' }] },
    { projectId: 'site', cells: [{ version: 'v5' }, { version: 'v5' }, null] },
  ] as { projectId: string; cells: ({ version: string; note?: string } | null)[] }[],
  lastChange: { project: 'bundle 插件', from: 'v18', to: 'v19', at: '11/07 16:00', run: 'PR-0904', lines: [['+', 'K-021'], ['+', 'K-118'], ['-', 'K-011']] as ['+' | '-', string][] },
  skills: [
    { name: 'shopline-section-dev', desc: 'Shopline 区块开发流程 · v4 · 开发 A、B、C', uses: 31 },
    { name: 'regression-screenshot', desc: '截图回归与差异标注 · v2 · 审查回归 agent', uses: 12 },
    { name: 'confirm-sheet-draft', desc: '确认单起草 · v3 · 需求拆分 agent', uses: 6 },
  ],
  shares: [
    { title: '客户 A · TASK-0412 确认单 v2', note: '11/05 客户已确认 · 客户查看 3 次', status: '已共享', tone: 'done' },
    { title: '客户 A · 预览站验收页', note: 'T4 回归通过后生成', status: '未生成', tone: 'queue' },
    { title: '个人站 · 案例“Shopline bundle 插件”', note: '公开发布：已去掉客户名称和数据，等你确认', status: '等你', tone: 'you' },
  ] as { title: string; note: string; status: string; tone: Tone }[],
};

/** "决策规则": the five-layer decision policy and its current state. */
export const rules = {
  ideals: [
    { text: '红线零违反', evidence: '本月 0 次', met: true },
    { text: '你的注意力只花在后果大又拿不准的决策上', evidence: '本周交给你 5 件，都在右上象限或属于必须由你确认的类别', met: true },
    { text: '同样的错误不发生第二次', evidence: '重复错误连续 3 周为 0', met: true },
    { text: '知识的可信度与实际结果相符', evidence: '引用后一次通过：已验证 84% · 初步验证 72% · 假设 61%', met: true },
    { text: '系统没有停止探索', evidence: '本月试用探索 3 条，2 条结果有效', met: true },
  ],
  layers: [
    { name: '1 硬约束过滤', role: '红线不参与权衡', week: '拦下越界修改 2 次 · 红线违反 0', cadence: '每次' },
    { name: '2 冲突裁决', role: '规则冲突时听谁的', week: '14 次，13 次自动裁决，1 次升级给你', cadence: '每次' },
    { name: '3 风险路由', role: '由谁做这个决定', week: '1,284 次决策，5 件交给你', cadence: '每次' },
    { name: '4 学习更新', role: '知识怎么变准', week: '可信度调整 9 次 · 取代 1 次', cadence: '每任务 · 每周' },
    { name: '5 元层调参', role: '调前四层的阈值和委托规则', week: '下次 12/01 · 1 条提议', cadence: '每月' },
  ],
  /** Decisions this week per quadrant of consequence × uncertainty. */
  quadrants: [
    { consequence: '高', uncertainty: '低', task: '自动执行，交付前核验并抽查', knowledge: '委托规则确认，定期抽检', count: 41 },
    { consequence: '高', uncertainty: '高', task: '经求助通道由你决定', knowledge: '由你确认', count: 3 },
    { consequence: '低', uncertainty: '低', task: '自动执行，只做事后统计', knowledge: '按委托规则确认', count: 1237 },
    { consequence: '低', uncertainty: '高', task: '试用探索，结果回流成证据', knowledge: '以“假设”可信度试用', count: 3 },
  ],
  /** Items routed to you, placed on the matrix. `mustYou`: category always confirmed by you. */
  routed: [
    { x: 380, y: 100, mustYou: false, title: '求助 T2：改共用 CSS' },
    { x: 440, y: 132, mustYou: false, title: '冲突：标题字号' },
    { x: 480, y: 96, mustYou: false, title: '候选：xuvia 单次 50 条' },
    { x: 150, y: 120, mustYou: true, title: '上提 K-027（跨项目，必须由你确认）' },
    { x: 130, y: 270, mustYou: true, title: '候选 C-0219（客户层，必须由你确认）' },
  ],
  conflictOrder: [['1 上位优先', 5], ['2 特别优先', 6], ['3 后法优先', 2], ['4 比可信度', 0], ['5 升级给你', 1]] as [string, number][],
  delegation: {
    rules: [
      { id: 'R1', when: 'L0–L2 · 参考级 · 至少 1 条证据 · 无冲突', then: '自动确认，可信度从“假设”起步' },
      { id: 'R2', when: 'L2 · 建议级 · 至少 2 条独立证据 · 无冲突', then: '自动确认 + 10% 抽检' },
      { id: '永远由你', when: '红线、跨项目上提、客户层、取代已验证的条目', then: '不论象限，交给你' },
    ],
    passedByCurrent: 37,
    history: [
      { version: 'v3', date: '10/27', note: '加入 R2；依据：L2 建议级候选连续 3 周你全部通过', current: true },
      { version: 'v2', date: '10/06', note: '加入 R1', current: false },
      { version: 'v1', date: '09/15', note: '全部由你确认（初期最保守）', current: false },
    ],
  },
  thresholds: [
    ['抽检比例', '10%', '10/27'], ['单条审核过快提醒', '30 秒', '10/06'], ['混入已知错误的候选', '每周 1 条', '10/06'],
    ['可能过时的有效期', '90 天', '09/15'], ['零调用提醒', '30 天', '09/15'], ['求助超时提醒', '30 分钟', '10/20'], ['可信度升级', '至少 2 个独立场景验证', '09/15'],
  ] as [string, string, string][],
  notifications: [
    { tier: '即时通知', when: '触及红线、阻塞任务的求助和冲突', channel: '桌面 + 手机', tone: 'you' },
    { tier: '摘要', when: '其余事项每天 18:00 合并一次', channel: '桌面', tone: 'queue' },
  ] as { tier: string; when: string; channel: string; tone: Tone }[],
};

/** "系统健康": components on the VPS and their state. */
export const system = {
  storage: [
    { name: 'git', holds: '已确认判断 L0–L2', size: '129 条 · 1,208 次提交', backup: '远端 + 异地 · 15:00', check: '与事件日志对账 · 今天 06:00 一致', status: '正常', tone: 'done' },
    { name: '客户库', holds: 'L3 知识和确认单', size: '客户 A、B · C 已销毁', backup: '按客户加密 · 异地', check: '密钥轮换 09/01', status: '正常', tone: 'done' },
    { name: '候选区', holds: '未确认的候选', size: '9 条', backup: '每小时', check: '—', status: '正常', tone: 'done' },
    { name: '事件日志', holds: '检索、引用、确认、写入', size: '382,410 条', backup: '异地 · 15:00', check: '只追加，哈希链完整', status: '正常', tone: 'done' },
    { name: '证据存储', holds: '截图、录屏、导出记录', size: '2,931 份 · 18.4 GB', backup: '异地 · 每天', check: '按哈希引用', status: '正常', tone: 'done' },
    { name: '任务与结果', holds: '任务、回归、验收、返工', size: '1,042 个任务', backup: '异地 · 每天', check: '—', status: '正常', tone: 'done' },
    { name: '索引', holds: '全文与向量检索、统计缓存', size: '按客户分区', backup: '不备份，可重建', check: '11/01 重建 · 用时 6 分钟', status: '可丢弃', tone: 'queue' },
  ] as ({ name: string; holds: string; size: string; backup: string; check: string } & Row)[],
  /** Short sizes shown in the architecture map's storage row. */
  storageBrief: [['git', '129 条', '1,208 次提交'], ['客户库', '2 个客户', '加密'], ['候选区', '9 条'], ['事件日志', '382,410 条', '只追加'], ['证据存储', '2,931 份', '18.4 GB'], ['任务与结果', '1,042 个任务'], ['索引', '派生', '11/01 重建']] as string[][],
  processing: { runsToday: 7, note: '只写候选区和索引' },
  writeConflicts: [
    { title: '本月 2 次', detail: '你的本地编辑和网关同时写 K-015；网关写入前先同步加锁，冲突已在 UI 裁决', status: '已解决', tone: 'done' },
    { title: '当前', detail: '没有待裁决的写入冲突', status: '0', tone: 'queue' },
  ] as ({ title: string; detail: string } & Row)[],
  recovery: [
    { title: '上次 10/20', detail: '从异地备份恢复事件日志和候选区，用时 14 分钟', status: '通过', tone: 'done' },
    { title: '下次 11/20', detail: '换一台 VPS 做完整恢复', status: '计划', tone: 'queue' },
  ] as ({ title: string; detail: string } & Row)[],
  formats: [
    { title: '知识条目 v2', detail: 'v1 → v2 迁移脚本已运行，0 条失败', status: '最新', tone: 'done' },
    { title: '事件 v1', detail: '—', status: '最新', tone: 'done' },
  ] as ({ title: string; detail: string } & Row)[],
};
