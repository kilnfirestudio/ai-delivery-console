# 后端

Node 22、TypeScript、Fastify 5、官方 MCP SDK。独立依赖与 CI，不导入前端 `src/`。

## 当前范围：B-01 / #3

实现无会话 Streamable HTTP `/mcp`、独立 Agent 凭据、任务/项目/客户/知识层级权限、提交内容扫描、每身份限流、超时与进程内统计。每个请求重新认证，凭据不会从工具参数取得。

五类工具通过 `GatewayRepository` 接入业务存储。默认启动使用不可用适配器，业务调用返回 `UNAVAILABLE`，就绪检查返回 503。测试替身仅在 `tests/`，不作为生产存储。B-02、B-03、B-04 分别负责持久事件、知识、证据与任务。

## 启动

```sh
npm ci
npm run build
IDENTITIES_FILE=/absolute/path/identities.json npm start
```

身份文件是运维配置，不提交 Git。用密码学安全随机数生成至少 32 字节凭据，仅保存其 SHA-256 十六进制哈希。原始凭据配置到对应 Agent 的 Authorization 请求头。身份配置示例（替换占位内容）：

```json
[
  {
    "id": "developer-a",
    "tokenHash": "<64-character-sha256-hex>",
    "projectIds": ["project-a"],
    "clientIds": ["client-a"],
    "taskIds": ["task-a"],
    "layers": ["L0", "L1", "L2", "L3"],
    "tools": ["queryKnowledge", "registerCitation", "submitCandidate", "requestHelp", "reportResult"],
    "expiresAt": "2027-01-01T00:00:00Z"
  }
]
```

轮换或撤销身份后重启服务。不同 Agent 不能复用 token；配置加载拒绝重复 ID/哈希。已过期身份不能调用。人工审核属于独立控制台权限，Agent 的 `reportResult` 不代表人工通过。

| 环境变量 | 默认 | 说明 |
|---|---|---|
| IDENTITIES_FILE | 必填 | 身份 JSON 的路径 |
| HOST | 127.0.0.1 | 默认仅本机；远程由受控 TLS 入口转发 |
| PORT | 3001 | HTTP 端口 |
| ALLOWED_HOSTS | localhost,127.0.0.1,[::1] | 允许的 Host 主机名，不含端口 |
| ALLOWED_ORIGINS | 空 | 浏览器 Origin 精确白名单；无 Origin 的 Agent 可访问 |
| TOOL_TIMEOUT_MS | 500 | 工具执行截止时间 |
| RATE_LIMIT_PER_MINUTE | 60 | 单身份工具调用次数，固定一分钟窗口 |

当前凭据模式适用于受控 Agent 部署，不是通用公网 OAuth 授权服务器。未配置 CORS，不允许任意网站跨源访问。服务不记录请求体、Authorization、客户原文；错误不会回显扫描命中的密钥。

## 接口契约

使用标准 MCP `initialize`、`tools/list`、`tools/call`；`tools/list` 只列当前身份获准的工具。HTTP GET/DELETE `/mcp` 返回 405。`GET /health/live` 表示进程存活，`GET /health/ready` 表示是否接入存储。

| 工具 | 必填参数（均含 taskId） | 返回 |
|---|---|---|
| queryKnowledge | query；limit 可选，1–50 | rules 与 evidence 分开 |
| registerCitation | requestId、knowledgeId、evidenceIds、reason | receipt |
| submitCandidate | requestId、text、layer、evidenceIds（非空） | receipt，仅候选 |
| requestHelp | requestId、question、consequence、uncertainty | receipt |
| reportResult | requestId、outcome、summary、evidenceIds | receipt |

写请求的 requestId 必须为 UUID。存储适配器必须按身份和 requestId 幂等，相同 ID 不同内容返回 CONFLICT。receipt 为 `{ id, requestId, acceptedAt }`。时间使用 ISO 8601，ID 为动态字符串；模型与前端 mock 固定枚举解耦。

成功工具结果的 structuredContent 为 `{ ok: true, data }`；失败为 `{ ok: false, error: { code, message } }`，同时 MCP `isError=true`。认证失败返回 HTTP 401，Host/Origin 拒绝为 403。错误码包括 INVALID_INPUT、FORBIDDEN、SECRET_DETECTED、RATE_LIMITED、UNAVAILABLE、TIMEOUT、CONFLICT、INTERNAL。

超时向存储传递 AbortSignal；适配器必须在提交前检查取消状态。超时后重试应复用 requestId，以查询/复用提交结果，不能假定网络超时代表未提交。扫描是已知凭据格式与敏感赋值模式检测，不能保证发现所有自定义秘密。

`Gateway.metrics()` 提供累计调用、成功、拒绝、失败、超时、最近 1000 次调用 p95。按 Issue 要求，超时也累计为 zeroCalls；它不等于知识条目 30 天无引用的业务指标。统计随进程重启清零，持久化由事件与观测后续工作提供。500ms 是默认截止时间与目标，并非尚未接入数据库时的生产性能承诺。

## 目录与后续接入

- `src/contracts.ts`：运行时 schema 和领域接口。
- `src/auth.ts`、`config.ts`：认证、权限、配置和密钥扫描。
- `src/gateway.ts`：工具业务边界、截止时间和统计。
- `src/repository.ts`：存储契约及明确失败的默认适配器。
- `src/app.ts`、`main.ts`：协议适配、HTTP 和启动。
- `tests/`：授权、隔离、超时与真实 MCP 客户端测试。

后续依赖顺序：B-02 事件日志 → B-03 知识存储 / B-04 任务证据 → B-07 决策 → B-05 采集 / B-06 处理 → B-08 分发 / B-09 截图 / B-10 通知 → B-11 恢复演练。每个 Issue 独立 PR。PostgreSQL 用于事务数据；L0–L2 已确认知识仍以 Git 为事实来源；L3 与证据的加密、密钥生命周期由对应存储 Issue 实现。

控制台将使用独立 `/api/v1/` 读取及人工决策接口。此 PR 不声称已有前端 API 或完整交付闭环。

## 验证

```sh
npm run lint
npm test
npm run build
```

协议集成测试监听随机本机端口，使用官方 MCP Client 初始化、发现并调用工具；不需要真实凭据或数据库。
