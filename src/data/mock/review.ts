import type { IntakeRecord, PastRequirement, VisualReview, WeeklyReview } from '../types';

export const pastRequirements: PastRequirement[] = [
  { id: 'TASK-0388', clientId: 'A', title: '移动端商品图修改', month: '9 月', acceptedAt: '09/14', outcome: '返工 2 次', lesson: '原因：CSS 硬裁，已沉淀为 K-027', similarity: 0.82 },
  { id: 'TASK-0361', title: '双十一活动页', month: '10 月', outcome: '一次通过', lesson: '活动结束自动恢复的做法可复用', similarity: 0.71 },
  { id: 'TASK-0401', clientId: 'A', title: '组合卡片桌面端', month: '10 月', acceptedAt: '10/28', outcome: '一次通过', lesson: '', similarity: 0 },
];

export const intakeRecords: IntakeRecord[] = [
  {
    requirementId: 'TASK-0412',
    source: '微信',
    rawText: '黑五活动页那个套装卡片，手机上图片被裁掉一半，能不能手机单独设置图片？\n另外对比表那里想加个“限时”标签，客服弹窗的图标换成我们新的。\n标题想再大一点，36 号字。周日前要上线，上线前先给我们看预览。',
    attachments: ['手机首页.png', '对比表.png', '新图标.svg'],
    expected: '11/09 周日',
    drafted: { by: '需求拆分 agent', at: '11/05 16:12', retrieved: 8, cited: 5 },
    understanding: ['Black Friday 页面的 bundle 卡片，移动端可单独设置图片，不再被裁切', '对比表里参加活动的商品加“限时”标签', '客服弹窗换成新图标'],
    criteriaSources: ['原话第 1 句', '原话第 2 句', '原话第 1 句 + 截图 手机首页.png', '原话第 2 句 + 附件 新图标.svg', '历史需求 TASK-0361 的同类要求', '冻结清单'],
    excluded: ['桌面端布局调整', '结账和支付流程'],
    questions: ['标题 36 号字超过了移动端常用上限 28px，是否只用于桌面端？', '“限时”标签的结束时间按哪个时区？'],
    knowledgeUsed: [
      { id: 'C-A-001', use: '已用', note: '已写进确认单的流程' },
      { id: 'C-A-003', use: '已用' },
      { id: 'K-008', use: '冲突', note: '与客户要求的 36px 冲突，已转成问题问客户' },
    ],
    similar: ['TASK-0388', 'TASK-0361'],
  },
];

export const visualReviews: VisualReview[] = [
  {
    id: 'VR-31',
    subject: 'P-0012 个人站案例页',
    subtask: 'P-REQ-03/P-0012',
    by: '开发 E',
    at: '15:45',
    meta: '15:45 提交 · 4 台设备',
    status: '待你看',
    baseline: '11/02 验收版',
    devices: [
      { name: 'iPhone 13', diffPct: 6.2 },
      { name: 'Pixel 7', diffPct: 6.0 },
      { name: 'iPad mini', diffPct: 3.1 },
      { name: '桌面 1440', diffPct: 2.4 },
    ],
    diffs: [
      { text: '案例卡片由一列改为两列', note: '在本任务文件范围内（pages/cases）· 对应验收标准第 1 条', verdict: '预期' },
      { text: '页脚上边距 24px 变为 16px', note: '页脚不在文件范围内 · 很可能是共用样式被带改 · 4 台设备都出现', verdict: '意外' },
      { text: '标题字体抗锯齿差异 0.1%', note: '低于噪声阈值 0.5%，已自动忽略', verdict: '噪声' },
    ],
    suggestedReturnNote: '页脚间距不在本任务范围，请恢复，检查是否改了共用样式。',
    acceptance: [
      { text: '案例卡片在移动端两列展示', note: '对应差异 1', met: true },
      { text: '案例图片有占位尺寸，加载时不跳动', note: '录屏 E-622 · 布局偏移 0.01', met: true },
      { text: '其他页面不受影响', note: '差异 2 违反', met: false },
    ],
  },
  { id: 'VR-30', subject: 'T0 合并回归', by: '审查回归 agent', at: '11:58', meta: '11:58 · 12 / 12 项', status: '已通过' },
  { id: 'VR-29', subject: 'P-0011 移动端导航', by: '开发 E', at: '11:50', meta: '11:50 · 你看过', status: '已通过' },
];

export const weeklyReview: WeeklyReview = {
  week: '第 45 周',
  range: '11/02–11/08',
  lastReview: { date: '11/01', minutes: 22 },
  step: 3,
  reworks: { now: 5, last: 6, base: 12 },
  completedLastWeek: 19,
  errors: [
    { task: 'TASK-0407', what: '价格四舍五入后折扣叠加多减 0.01', cause: '知识错误', action: 'K-015 计算顺序写反 → 修订为 v3（取代 v2）' },
    { task: 'X-0028', what: 'xuvia 选题接口一次拉 200 条导致超时', cause: '知识缺失', action: '提交候选“单次最多 50 条”，等你确认' },
    { task: 'T-0403', what: '折扣标签在窄屏换行（回归缺陷）', cause: '知识缺失', action: '新增 K-118 并加入回归基准截图' },
    { task: 'P-0009', what: '个人站图片模糊', cause: '执行失误', action: '规则 K-035 已有，没照做 → 不改知识，加入抽检' },
    { task: 'T-0405', what: '提示文案漏了英文版', cause: '需求理解', action: '确认单模板加一项“多语言”' },
  ],
  knowledge: { added: 5, revised: ['K-015'], superseded: ['K-011 → K-027'], merged: 6, recheck: ['K-061', 'K-044'], idle30d: 12, candidatesConfirmed: 13 },
  proposal: {
    title: '委托规则 v3 → v4：放宽一类候选',
    change: '把“L2 项目层 · 建议级 · 至少 2 条独立证据 · 无冲突”的候选，从“你来确认”改为“自动确认 + 抽检”',
    basis: '依据：近 4 周这类候选 31 条你全部通过，抽检 0 错，混入的错误候选你检出 4 / 4。对应元层规则“审核通过率长期接近 100% 且结果良好 → 放宽边界”',
  },
  watch: [
    { title: '回归缺陷持续下降', note: '不需要收紧路由边界', verdict: '维持' },
    { title: '试用探索 3 条，2 条结果有效', note: '维持探索比例', verdict: '维持' },
    { title: '“标题字号”类冲突本月 3 次', note: '检查 K-008 的作用域是否太宽', verdict: '待看' },
  ],
  nextTuning: '12/01',
  effort: { hours: 2.5, output: '返工少 7 轮 × 40 分钟 + 纠错少 7 次 × 15 分钟', outputHours: 6.4, ratioWeeksBelow1: 5 },
};
