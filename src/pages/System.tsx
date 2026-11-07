// 系统健康 · Converted from the "AI 交付全局控制台" design export.


export default function System() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-green float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-green)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                  <line x1="6" x2="6.01" y1="6" y2="6" />
                  <line x1="6" x2="6.01" y1="18" y2="18" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"系统健康"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"VPS 承载网关、UI 和处理层。这一页只在出问题时需要看"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span className="chip s-you">
              {"2 个警告"}
            </span>
          </div>
        </div>
      </div>
      <section className="card" aria-labelledby="sa-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="sa-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"架构状态"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"和文档里的架构图一一对应；橙点是警告，悬停看详情"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <svg viewBox="0 0 1000 470" width="100%" role="img" aria-label="架构状态图：除 Codex 云端未接网关、MacBook Air 热区落后外，其余组件正常" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
          <defs>
            <marker id="sa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0L10 5L0 10z" fill="#5C616B" />
            </marker>
            <filter id="mod" x="-10%" y="-20%" width="120%" height="160%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity=".12" />
            </filter>
            <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#18191C" />
              <stop offset="1" stopColor="#121315" />
            </linearGradient>
            <linearGradient id="gw" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#17142B" />
              <stop offset=".5" stopColor="#2A2452">
                <animate attributeName="offset" values="0;1;0" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="1" stopColor="#17142B" />
            </linearGradient>
          </defs>
          <g>
            <title>
              {"你 · UI · 网页控制台 · 待审 7 · 截图 1"}
            </title>
            <rect x="20" y="10" width="300" height="60" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="36" cy="30" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-0.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-0.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="36" cy="30" r="4.5" fill="#12B76A" />
            <circle cx="34.8" cy="28.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="48" y="34" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"你 · UI"}
            </text>
            <text x="34" y="54" fontSize="11" fill="#A1A6B0">
              {"网页控制台 · 待审 7 · 截图 1"}
            </text>
          </g>
          <g>
            <title>
              {"采集层 · 6 类来源 · 1 个警告：Codex 云端"}
            </title>
            <rect x="350" y="10" width="300" height="60" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="366" cy="30" r="7.5" fill="#F79009" opacity=".22">
              <animate attributeName="r" values="5;11;5" dur="1.1s" begin="-0.9s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="1.1s" begin="-0.9s" repeatCount="indefinite" />
            </circle>
            <circle cx="366" cy="30" r="4.5" fill="#F79009" />
            <circle cx="364.8" cy="28.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="378" y="34" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"采集层"}
            </text>
            <text x="364" y="54" fontSize="11" fill="#A1A6B0">
              {"6 类来源 · 1 个警告：Codex 云端"}
            </text>
          </g>
          <g>
            <title>
              {"Agent · 7 个身份 · 活跃会话 5 · 零调用任务 1"}
            </title>
            <rect x="680" y="10" width="300" height="60" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="696" cy="30" r="7.5" fill="#F79009" opacity=".22">
              <animate attributeName="r" values="5;11;5" dur="1.1s" begin="-0.1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="1.1s" begin="-0.1s" repeatCount="indefinite" />
            </circle>
            <circle cx="696" cy="30" r="4.5" fill="#F79009" />
            <circle cx="694.8" cy="28.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="708" y="34" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"Agent · 7 个身份"}
            </text>
            <text x="694" y="54" fontSize="11" fill="#A1A6B0">
              {"活跃会话 5 · 零调用任务 1"}
            </text>
          </g>
          <line x1="170" y1="72" x2="170" y2="106" stroke="#5C616B" strokeWidth="1.5" markerEnd="url(#sa)" />
          <circle r="2.8" fill="#B4A9FF">
            <animateMotion dur="1.2s" begin="1.0s" repeatCount="indefinite" path="M170 72 L170 100" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.75;1" dur="1.2s" begin="1.0s" repeatCount="indefinite" />
          </circle>
          <line x1="500" y1="72" x2="500" y2="106" stroke="#5C616B" strokeWidth="1.5" markerEnd="url(#sa)" />
          <circle r="2.8" fill="#B4A9FF">
            <animateMotion dur="1.2s" begin="1.0s" repeatCount="indefinite" path="M500 72 L500 100" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.75;1" dur="1.2s" begin="1.0s" repeatCount="indefinite" />
          </circle>
          <line x1="830" y1="72" x2="830" y2="106" stroke="#5C616B" strokeWidth="1.5" markerEnd="url(#sa)" />
          <circle r="2.8" fill="#B4A9FF">
            <animateMotion dur="1.2s" begin="1.0s" repeatCount="indefinite" path="M830 72 L830 100" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.75;1" dur="1.2s" begin="1.0s" repeatCount="indefinite" />
          </circle>
          <g>
            <title>
              {"网关 · VPS · 在线 · p95 210 ms · 今天 1,284 次调用 · 拒绝 2 · 超时 3（14:02–14:04）"}
            </title>
            <rect x="20" y="110" width="960" height="60" rx="10" fill="url(#gw)" stroke="rgba(124,108,255,.5)" filter="url(#mod)" />
            <circle cx="36" cy="130" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-0.0s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-0.0s" repeatCount="indefinite" />
            </circle>
            <circle cx="36" cy="130" r="4.5" fill="#12B76A" />
            <circle cx="34.8" cy="128.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="48" y="134" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"网关 · VPS"}
            </text>
            <text x="34" y="154" fontSize="11" fill="#A1A6B0">
              {"在线 · p95 210 ms · 今天 1,284 次调用 · 拒绝 2 · 超时 3（14:02–14:04）"}
            </text>
          </g>
          <line x1="500" y1="172" x2="500" y2="196" stroke="#5C616B" strokeWidth="1.5" markerEnd="url(#sa)" />
          <circle r="2.8" fill="#B4A9FF">
            <animateMotion dur="1.2s" begin="0.0s" repeatCount="indefinite" path="M500 172 L500 190" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.75;1" dur="1.2s" begin="0.0s" repeatCount="indefinite" />
          </circle>
          <rect x="20" y="200" width="960" height="150" rx="14" fill="rgba(255,255,255,.02)" stroke="rgba(255,255,255,.08)" />
          <line x1="34" y1="350.5" x2="966" y2="350.5" stroke="#101113" />
          <text x="36" y="222" fontSize="12" fontWeight="600" fill="#A1A6B0">
            {"存储层"}
          </text>
          <g>
            <title>
              {"git · "}
            </title>
            <rect x="36.0" y="236" width="124.0" height="96" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="52.0" cy="256" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-1.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="52.0" cy="256" r="4.5" fill="#12B76A" />
            <circle cx="50.8" cy="254.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="64.0" y="260" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"git"}
            </text>
            <text x="50.0" y="280" fontSize="11" fill="#A1A6B0" />
          </g>
          <text x="50.0" y="280" fontSize="11" fill="#A1A6B0">
            {"129 条"}
          </text>
          <text x="50.0" y="296" fontSize="11" fill="#A1A6B0">
            {"1,208 次提交"}
          </text>
          <g>
            <title>
              {"客户库 · "}
            </title>
            <rect x="170.0" y="236" width="124.0" height="96" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="186.0" cy="256" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-0.3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="186.0" cy="256" r="4.5" fill="#12B76A" />
            <circle cx="184.8" cy="254.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="198.0" y="260" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"客户库"}
            </text>
            <text x="184.0" y="280" fontSize="11" fill="#A1A6B0" />
          </g>
          <text x="184.0" y="280" fontSize="11" fill="#A1A6B0">
            {"2 个客户"}
          </text>
          <text x="184.0" y="296" fontSize="11" fill="#A1A6B0">
            {"加密"}
          </text>
          <g>
            <title>
              {"候选区 · "}
            </title>
            <rect x="304.0" y="236" width="124.0" height="96" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="320.0" cy="256" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-0.7s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-0.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="320.0" cy="256" r="4.5" fill="#12B76A" />
            <circle cx="318.8" cy="254.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="332.0" y="260" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"候选区"}
            </text>
            <text x="318.0" y="280" fontSize="11" fill="#A1A6B0" />
          </g>
          <text x="318.0" y="280" fontSize="11" fill="#A1A6B0">
            {"9 条"}
          </text>
          <g>
            <title>
              {"事件日志 · "}
            </title>
            <rect x="438.0" y="236" width="124.0" height="96" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="454.0" cy="256" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-1.1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-1.1s" repeatCount="indefinite" />
            </circle>
            <circle cx="454.0" cy="256" r="4.5" fill="#12B76A" />
            <circle cx="452.8" cy="254.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="466.0" y="260" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"事件日志"}
            </text>
            <text x="452.0" y="280" fontSize="11" fill="#A1A6B0" />
          </g>
          <text x="452.0" y="280" fontSize="11" fill="#A1A6B0">
            {"382,410 条"}
          </text>
          <text x="452.0" y="296" fontSize="11" fill="#A1A6B0">
            {"只追加"}
          </text>
          <g>
            <title>
              {"证据存储 · "}
            </title>
            <rect x="572.0" y="236" width="124.0" height="96" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="588.0" cy="256" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-0.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="588.0" cy="256" r="4.5" fill="#12B76A" />
            <circle cx="586.8" cy="254.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="600.0" y="260" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"证据存储"}
            </text>
            <text x="586.0" y="280" fontSize="11" fill="#A1A6B0" />
          </g>
          <text x="586.0" y="280" fontSize="11" fill="#A1A6B0">
            {"2,931 份"}
          </text>
          <text x="586.0" y="296" fontSize="11" fill="#A1A6B0">
            {"18.4 GB"}
          </text>
          <g>
            <title>
              {"任务与结果 · "}
            </title>
            <rect x="706.0" y="236" width="124.0" height="96" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="722.0" cy="256" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-0.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="722.0" cy="256" r="4.5" fill="#12B76A" />
            <circle cx="720.8" cy="254.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="734.0" y="260" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"任务与结果"}
            </text>
            <text x="720.0" y="280" fontSize="11" fill="#A1A6B0" />
          </g>
          <text x="720.0" y="280" fontSize="11" fill="#A1A6B0">
            {"1,042 个任务"}
          </text>
          <g>
            <title>
              {"索引 · "}
            </title>
            <rect x="840.0" y="236" width="124.0" height="96" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" strokeDasharray="5 4" filter="url(#mod)" />
            <circle cx="856.0" cy="256" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-1.0s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-1.0s" repeatCount="indefinite" />
            </circle>
            <circle cx="856.0" cy="256" r="4.5" fill="#12B76A" />
            <circle cx="854.8" cy="254.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="868.0" y="260" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"索引"}
            </text>
            <text x="854.0" y="280" fontSize="11" fill="#A1A6B0" />
          </g>
          <text x="854.0" y="280" fontSize="11" fill="#A1A6B0">
            {"派生"}
          </text>
          <text x="854.0" y="296" fontSize="11" fill="#A1A6B0">
            {"11/01 重建"}
          </text>
          <line x1="250" y1="352" x2="250" y2="386" stroke="#5C616B" strokeWidth="1.5" markerEnd="url(#sa)" />
          <circle r="2.8" fill="#B4A9FF">
            <animateMotion dur="1.2s" begin="0.2s" repeatCount="indefinite" path="M250 352 L250 380" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.75;1" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
          </circle>
          <line x1="750" y1="352" x2="750" y2="386" stroke="#5C616B" strokeWidth="1.5" markerEnd="url(#sa)" />
          <circle r="2.8" fill="#B4A9FF">
            <animateMotion dur="1.2s" begin="0.6s" repeatCount="indefinite" path="M750 352 L750 380" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.75;1" dur="1.2s" begin="0.6s" repeatCount="indefinite" />
          </circle>
          <g>
            <title>
              {"处理层 · 7 次运行 · 预算已用 62% · 只写候选区和索引"}
            </title>
            <rect x="20" y="390" width="460" height="60" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="36" cy="410" r="7.5" fill="#12B76A" opacity=".22">
              <animate attributeName="r" values="5;8.5;5" dur="2.6s" begin="-0.7s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="2.6s" begin="-0.7s" repeatCount="indefinite" />
            </circle>
            <circle cx="36" cy="410" r="4.5" fill="#12B76A" />
            <circle cx="34.8" cy="408.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="48" y="414" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"处理层"}
            </text>
            <text x="34" y="434" fontSize="11" fill="#A1A6B0">
              {"7 次运行 · 预算已用 62% · 只写候选区和索引"}
            </text>
          </g>
          <g>
            <title>
              {"分发 · 热区 4 个项目 · 2 处落后：MacBook Air、Codex 云端"}
            </title>
            <rect x="520" y="390" width="460" height="60" rx="10" fill="url(#panel)" stroke="rgba(255,255,255,.09)" filter="url(#mod)" />
            <circle cx="536" cy="410" r="7.5" fill="#F79009" opacity=".22">
              <animate attributeName="r" values="5;11;5" dur="1.1s" begin="-0.0s" repeatCount="indefinite" />
              <animate attributeName="opacity" values=".45;.08;.45" dur="1.1s" begin="-0.0s" repeatCount="indefinite" />
            </circle>
            <circle cx="536" cy="410" r="4.5" fill="#F79009" />
            <circle cx="534.8" cy="408.6" r="1.4" fill="#16171A" opacity=".7" />
            <text x="548" y="414" fontSize="13" fontWeight="600" fill="#EDEEF0">
              {"分发"}
            </text>
            <text x="534" y="434" fontSize="11" fill="#A1A6B0">
              {"热区 4 个项目 · 2 处落后：MacBook Air、Codex 云端"}
            </text>
          </g>
        </svg>
      </section>
      <section className="card" aria-labelledby="ss-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="ss-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"存储"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"git 和客户库是判断的原件；只有索引可以丢弃，其余都异地备份"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "960px" }}>
            <thead>
              <tr>
                <th scope="col">
                  {"组件"}
                </th>
                <th scope="col">
                  {"存什么"}
                </th>
                <th scope="col">
                  {"规模"}
                </th>
                <th scope="col">
                  {"备份"}
                </th>
                <th scope="col">
                  {"校验"}
                </th>
                <th scope="col">
                  {"状态"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {"git"}
                </td>
                <td>
                  {"已确认判断 L0–L2"}
                </td>
                <td>
                  {"129 条 · 1,208 次提交"}
                </td>
                <td>
                  {"远端 + 异地 · 15:00"}
                </td>
                <td>
                  {"与事件日志对账 · 今天 06:00 一致"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"正常"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {"客户库"}
                </td>
                <td>
                  {"L3 知识和确认单"}
                </td>
                <td>
                  {"客户 A、B · C 已销毁"}
                </td>
                <td>
                  {"按客户加密 · 异地"}
                </td>
                <td>
                  {"密钥轮换 09/01"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"正常"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {"候选区"}
                </td>
                <td>
                  {"未确认的候选"}
                </td>
                <td>
                  {"9 条"}
                </td>
                <td>
                  {"每小时"}
                </td>
                <td>
                  {"—"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"正常"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {"事件日志"}
                </td>
                <td>
                  {"检索、引用、确认、写入"}
                </td>
                <td>
                  {"382,410 条"}
                </td>
                <td>
                  {"异地 · 15:00"}
                </td>
                <td>
                  {"只追加，哈希链完整"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"正常"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {"证据存储"}
                </td>
                <td>
                  {"截图、录屏、导出记录"}
                </td>
                <td>
                  {"2,931 份 · 18.4 GB"}
                </td>
                <td>
                  {"异地 · 每天"}
                </td>
                <td>
                  {"按哈希引用"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"正常"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {"任务与结果"}
                </td>
                <td>
                  {"任务、回归、验收、返工"}
                </td>
                <td>
                  {"1,042 个任务"}
                </td>
                <td>
                  {"异地 · 每天"}
                </td>
                <td>
                  {"—"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"正常"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {"索引"}
                </td>
                <td>
                  {"全文与向量检索、统计缓存"}
                </td>
                <td>
                  {"按客户分区"}
                </td>
                <td>
                  {"不备份，可重建"}
                </td>
                <td>
                  {"11/01 重建 · 用时 6 分钟"}
                </td>
                <td>
                  <span className="chip s-queue">
                    {"可丢弃"}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "start" }}>
        <section className="card" aria-labelledby="sw-h" style={{ minWidth: "0px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <h2 id="sw-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"写入冲突"}
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
          </div>
          <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"本月 2 次"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"你的本地编辑和网关同时写 K-015；网关写入前先同步加锁，冲突已在 UI 裁决"}
                </span>
              </div>
              <div>
                <span className="chip s-done">
                  {"已解决"}
                </span>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"当前"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"没有待裁决的写入冲突"}
                </span>
              </div>
              <div>
                <span className="chip s-queue">
                  {"0"}
                </span>
              </div>
            </li>
          </ul>
        </section>
        <section className="card" aria-labelledby="sr-h" style={{ minWidth: "0px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <h2 id="sr-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"恢复演练"}
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
          </div>
          <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"上次 10/20"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"从异地备份恢复事件日志和候选区，用时 14 分钟"}
                </span>
              </div>
              <div>
                <span className="chip s-done">
                  {"通过"}
                </span>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"下次 11/20"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"换一台 VPS 做完整恢复"}
                </span>
              </div>
              <div>
                <span className="chip s-queue">
                  {"计划"}
                </span>
              </div>
            </li>
          </ul>
        </section>
        <section className="card" aria-labelledby="sv-h" style={{ minWidth: "0px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <h2 id="sv-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"格式版本"}
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
          </div>
          <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"知识条目 v2"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"v1 → v2 迁移脚本已运行，0 条失败"}
                </span>
              </div>
              <div>
                <span className="chip s-done">
                  {"最新"}
                </span>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"事件 v1"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"—"}
                </span>
              </div>
              <div>
                <span className="chip s-done">
                  {"最新"}
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
