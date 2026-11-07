import type { TaskDetail } from '../types';

export const taskDetails: TaskDetail[] = [
  {
    subtask: 'TASK-0412/T2',
    help: {
      attentionId: 'AT-01',
      question: '是否允许修改共用 CSS',
      body: '要让移动端图片不裁掉商品主体，需要改 `styles/tokens.css` 里的图片比例变量。这个文件不在 T2 的范围里，开发 C 尝试修改时被 Claude Code 的改文件前 hook 拦下，网关记下了这次拦截。这个变量还被对比表和推荐区块使用。',
      consequence: '高 · 影响 3 个已验收区块',
      uncertainty: '高 · 没有覆盖这种情况的已验证知识',
      options: [
        { title: '拆出 T2b，先改共用变量', desc: '由开发 A 单独改 tokens.css，审查回归 agent 回归 3 个区块后，T2 再继续', cost: '代价：多一个子任务，约晚半天 · 风险最低' },
        { title: '允许 T2 越界修改', desc: '临时扩大开发 C 的文件范围，改完后由 T4 统一回归', cost: '代价：最快 · 回归失败时要回退两处' },
        { title: '只改本区块', desc: '在 bundle 卡片里覆盖比例变量，不动共用文件', cost: '代价：留下一处特例，以后改共用样式时容易漏' },
      ],
    },
    events: [
      { time: '14:02', type: '领取', title: '从网关领取 T2', detail: '任务 ID TASK-0412-T2 · 身份 dev-c · 文件范围已锁定' },
      { time: '14:03', type: '检索', title: '查询“移动端图片 裁切 Shopline”', detail: '返回 6 条，按层级和可信度排序' },
      { time: '14:05', type: '引用', title: '登记引用 K-027、K-035、C-A-003、K-021', detail: '网关核对：4 条都在检索结果里' },
      { time: '14:22', type: '修改', title: 'card.liquid 改用服务端裁切参数', detail: '+42 −10' },
      { time: '14:31', type: '修改', title: 'card.css 调整图片容器', detail: '+18 −6' },
      { time: '14:40', type: '候选', title: '提交候选：客户移动端断点 750px', detail: '附主题源码行号与 2 张截图' },
      { time: '15:08', type: '检索', title: '查询“共用 tokens 修改流程”', detail: '只命中 K-021，没有覆盖跨区块影响的规则' },
      { time: '15:10', type: '拦截', title: '尝试修改 styles/tokens.css', detail: '改文件前 hook 检查路径：不在文件范围内，拒绝修改并向网关回报' },
      { time: '15:11', type: '求助', title: '提出求助，附 3 个方案', detail: '风险路由判定：高后果 × 高不确定，交给你' },
    ],
    files: [
      { path: 'sections/bundle-card/card.liquid', added: 42, removed: 10, state: '已修改' },
      { path: 'sections/bundle-card/card.css', added: 18, removed: 6, state: '已修改' },
      { path: 'styles/tokens.css', state: '被 hook 拦下' },
    ],
    checkpointEvidence: ['14:02 任务事件 #8812', '本地已改 2 个文件，未提交：卡在求助', '还没有回报结果', '还没有审核事件', '由 T4 合并后回报'],
    retrieved: [
      { id: 'K-027', cited: true },
      { id: 'K-035', cited: true },
      { id: 'C-A-003', cited: true },
      { id: 'K-021', cited: true },
      { id: 'K-019', cited: false },
      { id: 'K-040', cited: false },
    ],
    citationsVerified: 4,
    trace: {
      evidence: ['E-311', 'E-208', 'E-102', 'E-450', 'E-077'],
      outputs: [
        { title: 'card.liquid 改用服务端裁切参数', meta: '已修改 · +42 −10' },
        { title: 'card.css 图片容器改为固定比例', meta: '已修改 · +18 −6' },
        { title: '求助：是否改共用 CSS', meta: '已有知识覆盖不到这种情况' },
        { title: '候选：客户 A 断点 750px', meta: '来自新证据 E-512，不来自已有知识' },
      ],
      supports: [['E-311', 'K-027'], ['E-208', 'K-027'], ['E-102', 'K-035'], ['E-450', 'C-A-003'], ['E-077', 'K-021']],
      produces: [['K-027', 0], ['C-A-003', 0], ['K-035', 1], ['K-021', 2]],
    },
    candidates: ['C-0219'],
    visualCheck: { state: '未开始', devices: ['iPhone 13', 'Pixel 7', 'iPad mini', '桌面 1440'], note: '等求助解决后由审查回归 agent 执行' },
  },
];
