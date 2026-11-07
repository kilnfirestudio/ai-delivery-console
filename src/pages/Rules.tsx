// 决策规则 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Rules() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-violet float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18" />
                  <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                  <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                  <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                  <path d="M7 21h10" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"决策规则"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"五层组合：约束保底、规则裁决冲突、风险分配决策权、结果更新知识、元层慢速调参"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
      </div>
      <section className="tier1" aria-labelledby="ri-h">
        <h2 id="ri-h" style={{ margin: "0px 0px 4px", fontSize: "18px", fontWeight: "600" }}>
          {"理想状态 · 5 / 5"}
        </h2>
        <p className="muted" style={{ margin: "0px 0px 16px", fontSize: "13px" }}>
          {"五个可检验的条件。它们之间有张力：自动化越多，注意力越省，红线风险也越大"}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "14px", alignItems: "stretch" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span className="chip s-done">
              {"满足"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {"红线零违反"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"本月 0 次"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span className="chip s-done">
              {"满足"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {"你的注意力只花在后果大又拿不准的决策上"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"本周交给你 5 件，都在右上象限或属于必须由你确认的类别"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span className="chip s-done">
              {"满足"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {"同样的错误不发生第二次"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"重复错误连续 3 周为 0"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span className="chip s-done">
              {"满足"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {"知识的可信度与实际结果相符"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"引用后一次通过：已验证 84% · 初步验证 72% · 假设 61%"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span className="chip s-done">
              {"满足"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {"系统没有停止探索"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"本月试用探索 3 条，2 条结果有效"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="card" aria-labelledby="rl-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="rl-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"五层策略 · 本周"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"快的层追求稳定和可预测，慢的层调整快层的规则"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr 24px 1fr 24px 1fr 24px 1fr", gap: "4px", alignItems: "stretch", overflowX: "auto" }}>
          <div className="raised relay" style={{ animationDelay: "0s", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {"1 硬约束过滤"}
            </span>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"红线不参与权衡"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              {"拦下越界修改 2 次 · 红线违反 0"}
            </span>
            <span className="stage" style={{ alignSelf: "flex-start" }}>
              {"每次"}
            </span>
          </div>
          <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg className="nudge" width="24" height="24" viewBox="0 0 24 24" style={{ overflow: "visible" }}>
              <path d="M4 12h14m-5-5 5 5-5 5" fill="none" stroke="#5C616B" strokeWidth="1.6" />
              <circle r="2.2" fill="#B4A9FF">
                <animateMotion dur="1.3s" repeatCount="indefinite" path="M-2 12 H18" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="1.3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div className="raised relay" style={{ animationDelay: "1s", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {"2 冲突裁决"}
            </span>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"规则冲突时听谁的"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              {"14 次，13 次自动裁决，1 次升级给你"}
            </span>
            <span className="stage" style={{ alignSelf: "flex-start" }}>
              {"每次"}
            </span>
          </div>
          <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg className="nudge" width="24" height="24" viewBox="0 0 24 24" style={{ overflow: "visible" }}>
              <path d="M4 12h14m-5-5 5 5-5 5" fill="none" stroke="#5C616B" strokeWidth="1.6" />
              <circle r="2.2" fill="#B4A9FF">
                <animateMotion dur="1.3s" repeatCount="indefinite" path="M-2 12 H18" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="1.3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div className="raised relay" style={{ animationDelay: "2s", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {"3 风险路由"}
            </span>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"由谁做这个决定"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              {"1,284 次决策，5 件交给你"}
            </span>
            <span className="stage" style={{ alignSelf: "flex-start" }}>
              {"每次"}
            </span>
          </div>
          <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg className="nudge" width="24" height="24" viewBox="0 0 24 24" style={{ overflow: "visible" }}>
              <path d="M4 12h14m-5-5 5 5-5 5" fill="none" stroke="#5C616B" strokeWidth="1.6" />
              <circle r="2.2" fill="#B4A9FF">
                <animateMotion dur="1.3s" repeatCount="indefinite" path="M-2 12 H18" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="1.3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div className="raised relay" style={{ animationDelay: "3s", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {"4 学习更新"}
            </span>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"知识怎么变准"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              {"可信度调整 9 次 · 取代 1 次"}
            </span>
            <span className="stage" style={{ alignSelf: "flex-start" }}>
              {"每任务 · 每周"}
            </span>
          </div>
          <div aria-hidden="true" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg className="nudge" width="24" height="24" viewBox="0 0 24 24" style={{ overflow: "visible" }}>
              <path d="M4 12h14m-5-5 5 5-5 5" fill="none" stroke="#5C616B" strokeWidth="1.6" />
              <circle r="2.2" fill="#B4A9FF">
                <animateMotion dur="1.3s" repeatCount="indefinite" path="M-2 12 H18" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="1.3s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div className="raised relay" style={{ borderColor: "rgba(124, 108, 255, 0.5)", animationDelay: "4s", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", minWidth: "0px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {"5 元层调参"}
            </span>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"调前四层的阈值和委托规则"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              {"下次 12/01 · 1 条提议"}
            </span>
            <span className="stage" style={{ alignSelf: "flex-start" }}>
              {"每月"}
            </span>
          </div>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1.3 1 520px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="rm-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="rm-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"风险路由"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"后果 = 影响范围、能否撤回；不确定性 = 知识覆盖、可信度。数字是本周的决策数"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <svg viewBox="0 0 560 400" width="100%" role="img" aria-label="风险路由矩阵：本周 1,284 次决策中，5 件交给你；其中 2 件因为属于必须由你确认的类别，不论落在哪个象限都交给你" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
              <defs>
                <radialGradient id="pin" cx="35%" cy="30%" r="75%">
                  <stop offset="0" stopColor="#FDB022" />
                  <stop offset=".6" stopColor="#DC6803" />
                  <stop offset="1" stopColor="#93370D" />
                </radialGradient>
                <filter id="ps" x="-60%" y="-60%" width="220%" height="220%">
                  <feDropShadow dx="0" dy="2" stdDeviation="1.6" floodColor="#000000" floodOpacity=".35" />
                </filter>
                <linearGradient id="tray" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#121316" />
                  <stop offset="1" stopColor="#0E0F11" />
                </linearGradient>
                <linearGradient id="tray-a" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#1C1709" />
                  <stop offset="1" stopColor="#141108" />
                </linearGradient>
              </defs>
              <rect x="80" y="20" width="220" height="170" rx="12" fill="url(#tray)" stroke="rgba(255,255,255,.08)" />
              <line x1="92" y1="190.5" x2="288" y2="190.5" stroke="#101113" />
              <text x="92" y="42" fontSize="12" fontWeight="600" fill="#EDEEF0">
                {"高后果 · 低不确定"}
              </text>
              <text x="92" y="60" fontSize="11" fill="#A1A6B0">
                {"任务：自动执行，交付前核验并抽查"}
              </text>
              <text x="92" y="76" fontSize="11" fill="#A1A6B0">
                {"知识：委托规则确认，定期抽检"}
              </text>
              <text x="288" y="176" fontSize="20" fontWeight="600" fill="#EDEEF0" textAnchor="end">
                {"41"}
              </text>
              <rect x="310" y="20" width="220" height="170" rx="12" fill="url(#tray-a)" stroke="rgba(227,160,8,.45)" />
              <line x1="322" y1="190.5" x2="518" y2="190.5" stroke="#101113" />
              <text x="322" y="42" fontSize="12" fontWeight="600" fill="#EDEEF0">
                {"高后果 · 高不确定"}
              </text>
              <text x="322" y="60" fontSize="11" fill="#A1A6B0">
                {"任务：经求助通道由你决定"}
              </text>
              <text x="322" y="76" fontSize="11" fill="#A1A6B0">
                {"知识：由你确认"}
              </text>
              <text x="518" y="176" fontSize="20" fontWeight="600" fill="#EDEEF0" textAnchor="end">
                {"3"}
              </text>
              <rect x="80" y="200" width="220" height="170" rx="12" fill="url(#tray)" stroke="rgba(255,255,255,.08)" />
              <line x1="92" y1="370.5" x2="288" y2="370.5" stroke="#101113" />
              <text x="92" y="222" fontSize="12" fontWeight="600" fill="#EDEEF0">
                {"低后果 · 低不确定"}
              </text>
              <text x="92" y="240" fontSize="11" fill="#A1A6B0">
                {"任务：自动执行，只做事后统计"}
              </text>
              <text x="92" y="256" fontSize="11" fill="#A1A6B0">
                {"知识：按委托规则确认"}
              </text>
              <text x="288" y="356" fontSize="20" fontWeight="600" fill="#EDEEF0" textAnchor="end">
                {"1,237"}
              </text>
              <rect x="310" y="200" width="220" height="170" rx="12" fill="url(#tray)" stroke="rgba(255,255,255,.08)" />
              <line x1="322" y1="370.5" x2="518" y2="370.5" stroke="#101113" />
              <text x="322" y="222" fontSize="12" fontWeight="600" fill="#EDEEF0">
                {"低后果 · 高不确定"}
              </text>
              <text x="322" y="240" fontSize="11" fill="#A1A6B0">
                {"任务：试用探索，结果回流成证据"}
              </text>
              <text x="322" y="256" fontSize="11" fill="#A1A6B0">
                {"知识：以“假设”可信度试用"}
              </text>
              <text x="518" y="356" fontSize="20" fontWeight="600" fill="#EDEEF0" textAnchor="end">
                {"3"}
              </text>
              <text x="52" y="109.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
                {"高"}
              </text>
              <text x="52" y="289.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
                {"低"}
              </text>
              <text x="16" y="195" fontSize="12" fill="#A1A6B0" transform="rotate(-90 16 195)" textAnchor="middle">
                {"后果"}
              </text>
              <text x="190.0" y="390" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"低"}
              </text>
              <text x="420.0" y="390" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"高"}
              </text>
              <text x="305" y="390" fontSize="12" fill="#A1A6B0" textAnchor="middle">
                {"不确定性"}
              </text>
              <g>
                <title>
                  {"求助 T2：改共用 CSS"}
                </title>
                <circle cx="380" cy="100" r="9" fill="none" stroke="#F2C14E" strokeWidth="1.5">
                  <animate attributeName="r" from="9" to="22" dur="1.8s" begin="0.85s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;.85;0" keyTimes="0;.05;1" dur="1.8s" begin="0.85s" repeatCount="indefinite" />
                </circle>
                <circle cx="380" cy="100" r="8" fill="url(#pin)" filter="url(#ps)" />
                <ellipse cx="377.5" cy="96.8" rx="3" ry="1.8" fill="#16171A" opacity=".6" />
                <animateTransform attributeName="transform" type="translate" values="0 -34;0 -34;0 3;0 0" keyTimes="0;0.353;0.824;1" dur="0.85s" fill="freeze" />
                <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.353;1" dur="0.85s" fill="freeze" />
              </g>
              <g>
                <title>
                  {"冲突：标题字号"}
                </title>
                <circle cx="440" cy="132" r="9" fill="none" stroke="#F2C14E" strokeWidth="1.5">
                  <animate attributeName="r" from="9" to="22" dur="1.8s" begin="1.03s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;.85;0" keyTimes="0;.05;1" dur="1.8s" begin="1.03s" repeatCount="indefinite" />
                </circle>
                <circle cx="440" cy="132" r="8" fill="url(#pin)" filter="url(#ps)" />
                <ellipse cx="437.5" cy="128.8" rx="3" ry="1.8" fill="#16171A" opacity=".6" />
                <animateTransform attributeName="transform" type="translate" values="0 -34;0 -34;0 3;0 0" keyTimes="0;0.466;0.854;1" dur="1.03s" fill="freeze" />
                <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.466;1" dur="1.03s" fill="freeze" />
              </g>
              <g>
                <title>
                  {"候选：xuvia 单次 50 条"}
                </title>
                <circle cx="480" cy="96" r="9" fill="none" stroke="#F2C14E" strokeWidth="1.5">
                  <animate attributeName="r" from="9" to="22" dur="1.8s" begin="1.21s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;.85;0" keyTimes="0;.05;1" dur="1.8s" begin="1.21s" repeatCount="indefinite" />
                </circle>
                <circle cx="480" cy="96" r="8" fill="url(#pin)" filter="url(#ps)" />
                <ellipse cx="477.5" cy="92.8" rx="3" ry="1.8" fill="#16171A" opacity=".6" />
                <animateTransform attributeName="transform" type="translate" values="0 -34;0 -34;0 3;0 0" keyTimes="0;0.545;0.876;1" dur="1.21s" fill="freeze" />
                <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.545;1" dur="1.21s" fill="freeze" />
              </g>
              <g>
                <title>
                  {"上提 K-027（跨项目，必须由你确认）"}
                </title>
                <rect x="142" y="112" width="16" height="16" rx="3" fill="#16171A" stroke="#B54708" strokeWidth="2.5" filter="url(#ps)" />
                <rect x="147" y="117" width="6" height="6" rx="1" fill="#DC6803" />
                <animateTransform attributeName="transform" type="translate" values="0 -34;0 -34;0 3;0 0" keyTimes="0;0.604;0.892;1" dur="1.39s" fill="freeze" />
                <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.604;1" dur="1.39s" fill="freeze" />
              </g>
              <g>
                <title>
                  {"候选 C-0219（客户层，必须由你确认）"}
                </title>
                <rect x="122" y="262" width="16" height="16" rx="3" fill="#16171A" stroke="#B54708" strokeWidth="2.5" filter="url(#ps)" />
                <rect x="127" y="267" width="6" height="6" rx="1" fill="#DC6803" />
                <animateTransform attributeName="transform" type="translate" values="0 -34;0 -34;0 3;0 0" keyTimes="0;0.650;0.904;1" dur="1.57s" fill="freeze" />
                <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.650;1" dur="1.57s" fill="freeze" />
              </g>
            </svg>
            <div className="muted" style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px" }}>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", background: "radial-gradient(circle at 35% 30%, rgb(253, 176, 34), rgb(220, 104, 3) 60%, rgb(147, 55, 13))", borderRadius: "6px" }} />
                {"按象限交给你"}
              </span>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(22, 23, 26)", border: "2.5px solid rgb(181, 71, 8)", boxShadow: "rgba(16, 24, 40, 0.3) 0px 1px 2px" }} />
                {"必须由你确认的类别（红线、跨项目上提、客户层、取代已验证）"}
              </span>
            </div>
          </section>
        </div>
        <div style={{ flex: "1 1 340px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="ro-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="ro-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"冲突裁决 · 本周 14 次"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div title="1 上位优先 · 5" style={{ display: "grid", gridTemplateColumns: "96px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
                <span>
                  {"1 上位优先"}
                </span>
                <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                  <div className="fill" style={{ width: "83%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
                </div>
                <span style={{ textAlign: "right" }}>
                  {"5"}
                </span>
              </div>
              <div title="2 特别优先 · 6" style={{ display: "grid", gridTemplateColumns: "96px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
                <span>
                  {"2 特别优先"}
                </span>
                <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                  <div className="fill" style={{ width: "100%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
                </div>
                <span style={{ textAlign: "right" }}>
                  {"6"}
                </span>
              </div>
              <div title="3 后法优先 · 2" style={{ display: "grid", gridTemplateColumns: "96px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
                <span>
                  {"3 后法优先"}
                </span>
                <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                  <div className="fill" style={{ width: "33%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
                </div>
                <span style={{ textAlign: "right" }}>
                  {"2"}
                </span>
              </div>
              <div title="4 比可信度 · 0" style={{ display: "grid", gridTemplateColumns: "96px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
                <span>
                  {"4 比可信度"}
                </span>
                <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                  <div className="fill" style={{ width: "0%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
                </div>
                <span style={{ textAlign: "right" }}>
                  {"0"}
                </span>
              </div>
              <div title="5 升级给你 · 1" style={{ display: "grid", gridTemplateColumns: "96px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
                <span>
                  {"5 升级给你"}
                </span>
                <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                  <div className="fill" style={{ width: "17%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
                </div>
                <span style={{ textAlign: "right" }}>
                  {"1"}
                </span>
              </div>
            </div>
            <p className="muted" style={{ margin: "12px 0px 0px", fontSize: "12px", lineHeight: "1.6" }}>
              {"上位：红线 > 默认 > 建议 > 参考。特别：客户层 > 项目层 > 领域层 > 全局层。同样的冲突永远得到同样的裁决"}
            </p>
          </section>
          <section className="card" aria-labelledby="rn-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="rn-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"通知分级"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"即时通知"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"触及红线、阻塞任务的求助和冲突"}
                  </span>
                </div>
                <div>
                  <span className="chip s-you">
                    {"桌面 + 手机"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"摘要"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"其余事项每天 18:00 合并一次"}
                  </span>
                </div>
                <div>
                  <span className="chip s-queue">
                    {"桌面"}
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1.4 1 560px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="rd-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="rd-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"委托规则 · v3"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "80px" }}>
                      {"规则"}
                    </th>
                    <th scope="col">
                      {"适用条件"}
                    </th>
                    <th scope="col">
                      {"处理"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {"R1"}
                    </td>
                    <td>
                      {"L0–L2 · 参考级 · 至少 1 条证据 · 无冲突"}
                    </td>
                    <td>
                      {"自动确认，可信度从“假设”起步"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"R2"}
                    </td>
                    <td>
                      {"L2 · 建议级 · 至少 2 条独立证据 · 无冲突"}
                    </td>
                    <td>
                      {"自动确认 + 10% 抽检"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"永远由你"}
                    </td>
                    <td>
                      {"红线、跨项目上提、客户层、取代已验证的条目"}
                    </td>
                    <td>
                      {"不论象限，交给你"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "14px 0px 6px" }}>
              <Link to="/knowledge" className="btn">
                {"查看 v3 放行的 37 条"}
              </Link>
              <Link to="/weekly" className="btn">
                {"v4 提议"}
              </Link>
            </div>
            <p className="muted" style={{ margin: "0px 0px 8px", fontSize: "12px" }}>
              {"委托规则本身是 L0 知识，只能由你确认和取代。每次放行都记录规则版本，规则写错时能批量找出它放行过的条目"}
            </p>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"v3 · 10/27"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"加入 R2；依据：L2 建议级候选连续 3 周你全部通过"}
                  </span>
                </div>
                <div>
                  <span className="chip s-doing">
                    {"当前"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"v2 · 10/06"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"加入 R1"}
                  </span>
                </div>
                <div>
                  <span className="chip s-queue">
                    {"已取代"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"v1 · 09/15"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"全部由你确认（初期最保守）"}
                  </span>
                </div>
                <div>
                  <span className="chip s-queue">
                    {"已取代"}
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div style={{ flex: "1 1 360px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="rt-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="rt-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"阈值"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"由元层每月调整"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "360px" }}>
                <thead>
                  <tr>
                    <th scope="col">
                      {"阈值"}
                    </th>
                    <th scope="col">
                      {"当前值"}
                    </th>
                    <th scope="col">
                      {"上次调整"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {"抽检比例"}
                    </td>
                    <td>
                      {"10%"}
                    </td>
                    <td>
                      {"10/27"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"单条审核过快提醒"}
                    </td>
                    <td>
                      {"30 秒"}
                    </td>
                    <td>
                      {"10/06"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"混入已知错误的候选"}
                    </td>
                    <td>
                      {"每周 1 条"}
                    </td>
                    <td>
                      {"10/06"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"可能过时的有效期"}
                    </td>
                    <td>
                      {"90 天"}
                    </td>
                    <td>
                      {"09/15"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"零调用提醒"}
                    </td>
                    <td>
                      {"30 天"}
                    </td>
                    <td>
                      {"09/15"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"求助超时提醒"}
                    </td>
                    <td>
                      {"30 分钟"}
                    </td>
                    <td>
                      {"10/20"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"可信度升级"}
                    </td>
                    <td>
                      {"至少 2 个独立场景验证"}
                    </td>
                    <td>
                      {"09/15"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
