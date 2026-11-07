# AI 交付全局控制台

把“客户需求 → 拆分 → 多个 agent 并行开发 → 回归 → 交付 → 知识回写”全过程可视化的控制台。设计依据是知识库文档《AI 交付知识库》，界面来自设计稿“AI 交付全局控制台”。

技术栈：React 19 + TypeScript + Vite，路由用 react-router。

```bash
npm install
npm run dev      # 本地开发
npm run build    # 类型检查 + 打包
npm run lint
```

## 目录

```
src/
  app/routes.ts        路由路径（R）和侧边导航配置（NAV）
  components/          应用外壳：AppShell、Sidebar、Topbar
  data/                数据层（见下）
  ui/                  界面组件库
    primitives.tsx     页面框架、分区、状态徽章、统计、表格、列表、检查点进度……
    charts.tsx         折线、迷你趋势、环形、仪表、分组柱、Agent 时间轴
    controls.tsx       开关、复选、子任务键帽、带保护盖的危险开关
    icons.tsx          线条图标、玻璃图块、机器人头像、雷达、闪光、流动箭头
  pages/               19 个页面，每个页面单独打包、按需加载
  styles/              设计系统样式（颜色、材质、动效）
```

## 数据层

页面不写死任何业务数据，全部从 `useData()` 读取。

```
data/
  types.ts         领域模型：项目、客户、需求、子任务、agent、待审事项、知识条目、证据、网关调用……
  mock/*.ts        唯一一份示例数据，按领域分文件
  selectors.ts     派生计算：完成度、等待时长、状态统计、标签与颜色映射
  validate.ts      引用完整性检查：每个被引用的 ID 都必须存在
  index.ts         mockData、DataProvider、useData()
```

几条约定：

- **同一个实体只定义一次。** 比如 TASK-0412 的 T2 只在 `mock/delivery.ts` 里有一条记录，总览的方块、需求拆解表、Agent 看板、任务追踪页都从这条记录派生。改一处，所有页面一起变。
- **能算出来的数字不存。** “6 件事在等你”“今天 agent 一共等你 2 小时 4 分钟”“子任务完成 6 / 11”这类数字都由 selectors 从原始记录计算。
- **实体之间只用 ID 互相引用。** 开发模式下启动时会运行 `validateData`，发现断开的引用会在控制台警告。

### 接入真实数据

1. 后端按 `ConsoleData`（即 `mockData` 的结构）返回数据，类型定义在 `data/types.ts`。
2. 在 `main.tsx` 里取数后用 `<DataProvider value={data}>` 包住 `<App />`。页面代码不需要改动。
3. 换数据源前先对真实数据跑一遍 `validateData`。

需要实时刷新的部分（实时调用、Agent 时间轴）可以在 Provider 外层轮询或订阅，再把新对象传进去。

## 页面

| 路径 | 页面 | 主要数据 |
| --- | --- | --- |
| `/` | 全局总览 | subtasks、agents、attention、observation |
| `/review` | 待审 | attention、knowledgeRecords、reviewHealth |
| `/visual` | 截图审核 | visualReviews |
| `/weekly` | 每周复盘 | weeklyReview、coreMetrics |
| `/intake` | 登记需求 | intakeRecords、requirements |
| `/breakdown?id=` | 需求拆解 | requirements、subtasks |
| `/agents` | Agent 看板 | agents |
| `/task?id=` | 任务追踪 | taskDetails、knowledge、evidence |
| `/knowledge` | 知识库 | knowledgeSummary、knowledge |
| `/knowledge/item?id=` | 单条知识 | knowledge、knowledgeRecords、evidence |
| `/graph` | 知识图谱 | knowledge（节点位置在页面内） |
| `/clients` | 客户 | clients、clientProfiles |
| `/metrics` | 指标 | observation |
| `/live` | 实时调用 | observation.gatewayCalls、identities |
| `/pipeline` | 采集与处理 | pipeline |
| `/distribution` | 分发 | distribution |
| `/rules` | 决策规则 | rules |
| `/system` | 系统健康 | system |
| `/spec` | 组件规范 | 组件示例，不读数据层 |
