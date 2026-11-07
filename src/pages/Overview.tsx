// 全局总览 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-violet float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"全局总览"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"6 件事在等你，其中 2 件正在阻塞任务 · 3 个 agent 在工作，2 个在等你"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <div className="seg" role="group" aria-label="按项目筛选">
              <button type="button" aria-pressed="true">
                {"全部项目"}
              </button>
              <button type="button" aria-pressed="false">
                {"Shopline"}
              </button>
              <button type="button" aria-pressed="false">
                {"xuvia"}
              </button>
              <button type="button" aria-pressed="false">
                {"个人站"}
              </button>
              <button type="button" aria-pressed="false">
                {"直播语音"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.9fr 1.1fr 1fr", gap: "16px" }}>
        <div className="card" style={{ position: "relative", display: "flex", alignItems: "center", gap: "20px" }}>
          <div>
            <svg width="124" height="124" viewBox="0 0 124 124" role="img" aria-label="子任务状态：完成 9，进行中 3，等待你 2，排队 4" style={{ overflow: "visible" }}>
              <defs>
                <filter id="dg" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.2" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle cx="62.0" cy="62.0" r="66.0" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1" strokeDasharray="2 6">
                <animateTransform attributeName="transform" type="rotate" from="0 62.0 62.0" to="360 62.0 62.0" dur="24s" repeatCount="indefinite" />
              </circle>
              <circle cx="62.0" cy="62.0" r="55.0" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="14" />
              <path d="M63.06 7.01 A55.0 55.0 0 0 1 63.06 116.99" fill="none" stroke="#3FB950" strokeWidth="14" pathLength="100" strokeDasharray="100 100" strokeDashoffset="100">
                <title>
                  {"完成 9"}
                </title>
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.7s" begin="0.25s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
              </path>
              <path d="M60.94 116.99 A55.0 55.0 0 0 1 14.91 90.41" fill="none" stroke="#4F8CFF" strokeWidth="14" pathLength="100" strokeDasharray="100 100" strokeDashoffset="100">
                <title>
                  {"进行中 3"}
                </title>
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.7s" begin="0.53s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
              </path>
              <path d="M13.85 88.58 A55.0 55.0 0 0 1 7.66 53.49" fill="none" stroke="#E3A008" strokeWidth="14" pathLength="100" strokeDasharray="100 100" strokeDashoffset="100">
                <title>
                  {"等待你 2"}
                </title>
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.7s" begin="0.81s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
              </path>
              <path d="M8.03 51.41 A55.0 55.0 0 0 1 60.94 7.01" fill="none" stroke="#3A3D44" strokeWidth="14" pathLength="100" strokeDasharray="100 100" strokeDashoffset="100">
                <title>
                  {"排队 4"}
                </title>
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.7s" begin="1.09s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
              </path>
              <text x="62.0" y="66.0" textAnchor="middle" fontSize="28" fontWeight="700" fill="#F8FBFF" fontFamily="DIN Alternate, Barlow, Inter, sans-serif">
                {"18"}
              </text>
              <text x="62.0" y="84.0" textAnchor="middle" fontSize="11" fill="#8A8F98">
                {"子任务"}
              </text>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
              <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "2px", background: "rgb(63, 185, 80)" }} />
              <span className="muted" style={{ width: "48px" }}>
                {"完成"}
              </span>
              <span className="num" style={{ fontSize: "18px" }}>
                {"9"}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
              <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "2px", background: "rgb(79, 140, 255)" }} />
              <span className="muted" style={{ width: "48px" }}>
                {"进行中"}
              </span>
              <span className="num" style={{ fontSize: "18px" }}>
                {"3"}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
              <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "2px", background: "rgb(227, 160, 8)" }} />
              <span className="muted" style={{ width: "48px" }}>
                {"等待你"}
              </span>
              <span className="num" style={{ fontSize: "18px" }}>
                {"2"}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
              <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "2px", background: "rgb(58, 61, 68)" }} />
              <span className="muted" style={{ width: "48px" }}>
                {"排队"}
              </span>
              <span className="num" style={{ fontSize: "18px" }}>
                {"4"}
              </span>
            </div>
          </div>
          <div style={{ position: "absolute", right: "14px", top: "12px" }}>
            <span className="gt gt-blue " aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#gs-blue)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                <path d="m7 16.5-4.74-2.85" />
                <path d="m7 16.5 5-3" />
                <path d="M7 16.5v5.17" />
                <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                <path d="m17 16.5-5-3" />
                <path d="m17 16.5 4.74-2.85" />
                <path d="M17 16.5v5.17" />
                <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                <path d="M12 8 7.26 5.15" />
                <path d="m12 8 4.74-2.85" />
                <path d="M12 13.5V8" />
              </svg>
            </span>
          </div>
        </div>
        <div className="card" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
          <div style={{ position: "absolute", right: "14px", top: "12px" }}>
            <span className="gt gt-green " aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#gs-green)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </span>
          </div>
          <span className="lbl" style={{ alignSelf: "flex-start" }}>
            {"一次通过率 · 本周"}
          </span>
          <svg width="168" height="106.0" viewBox="0 0 168 106.0" role="img" aria-label="一次通过率 78%，基线 52%" style={{ display: "block" }}>
            <defs>
              <linearGradient id="gg" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#7C6CFF" />
                <stop offset="1" stopColor="#4F8CFF" />
              </linearGradient>
              <filter id="gl" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M14.0 94.0 A70.0 70.0 0 0 1 154.0 94.0" fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="12" strokeLinecap="round" />
            <path d="M14.0 94.0 A70.0 70.0 0 0 1 137.9 49.4" fill="none" stroke="url(#gg)" strokeWidth="12" strokeLinecap="round" pathLength="100" strokeDasharray="100 101" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.4s" begin="0.3s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
            </path>
            <circle r="4" fill="#FEFEFE" filter="url(#gl)" opacity="0">
              <animate attributeName="opacity" from="0" to="1" dur="0.2s" begin="0.3s" fill="freeze" />
              <animateMotion dur="1.4s" begin="0.3s" fill="freeze" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines=".2 .8 .2 1" path="M14.0 94.0 A70.0 70.0 0 0 1 137.9 49.4" />
              <animate attributeName="r" values="4;6;4" dur="1.8s" begin="1.7s" repeatCount="indefinite" />
            </circle>
            <line x1="87.8" y1="33.1" x2="89.0" y2="15.2" stroke="#E3A008" strokeWidth="2">
              <title>
                {"基线 52%"}
              </title>
            </line>
            <text x="84.0" y="86.0" textAnchor="middle" fontSize="30" fontWeight="700" fill="#F8FBFF" fontFamily="DIN Alternate, Barlow, Inter, sans-serif">
              {"78%"}
            </text>
            <text x="84.0" y="106.0" textAnchor="middle" fontSize="11" fill="#8A8F98">
              {"基线 52%（黄线）"}
            </text>
          </svg>
        </div>
        <div className="card" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ position: "absolute", right: "14px", top: "12px" }}>
            <span className="gt gt-violet " aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            </span>
          </div>
          <span className="lbl">
            {"Agent · 7"}
          </span>
          <div style={{ display: "flex", alignItems: "baseline", gap: "18px" }}>
            <div className="stat">
              <span className="muted" style={{ fontSize: "12px" }}>
                {"在工作"}
              </span>
              <span className="cu to-3" aria-label="3" style={{ fontSize: "30px" }} />
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "12px" }}>
                {"等你"}
              </span>
              <span className="cu to-2" aria-label="2" style={{ fontSize: "30px", color: "rgb(242, 193, 78)" }} />
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "12px" }}>
                {"空闲"}
              </span>
              <span className="cu to-2" aria-label="2" style={{ fontSize: "30px" }} />
            </div>
          </div>
          <div role="img" aria-label="7 个 agent：3 个在工作，2 个等你，2 个空闲" style={{ display: "flex", gap: "4px" }}>
            <span title="需求拆分 agent：空闲" style={{ flex: "1 1 0%", height: "26px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.12)", boxShadow: "none" }} />
            <span className="pill-run" title="开发 A：进行中" style={{ flex: "1 1 0%", height: "26px", borderRadius: "2px", background: "rgba(79, 140, 255, 0.26)", border: "1px solid rgb(79, 140, 255)", boxShadow: "none" }} />
            <span className="pill-run" title="开发 B：进行中" style={{ flex: "1 1 0%", height: "26px", borderRadius: "2px", background: "rgba(79, 140, 255, 0.26)", border: "1px solid rgb(79, 140, 255)", boxShadow: "none" }} />
            <span className="breathe" title="开发 C：等待你" style={{ flex: "1 1 0%", height: "26px", borderRadius: "2px", background: "rgba(227, 160, 8, 0.25)", border: "1px solid rgb(227, 160, 8)", boxShadow: "none" }} />
            <span className="pill-run" title="开发 D：进行中" style={{ flex: "1 1 0%", height: "26px", borderRadius: "2px", background: "rgba(79, 140, 255, 0.26)", border: "1px solid rgb(79, 140, 255)", boxShadow: "none" }} />
            <span className="breathe" title="开发 E：等待你" style={{ flex: "1 1 0%", height: "26px", borderRadius: "2px", background: "rgba(227, 160, 8, 0.25)", border: "1px solid rgb(227, 160, 8)", boxShadow: "none" }} />
            <span title="审查回归 agent：待命" style={{ flex: "1 1 0%", height: "26px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.12)", boxShadow: "none" }} />
          </div>
          <span className="muted" style={{ fontSize: "12px" }}>
            {"今天 agent 一共等你 "}
            <span style={{ color: "rgb(242, 193, 78)", fontWeight: "600" }}>
              {"2 小时 4 分钟"}
            </span>
          </span>
        </div>
        <div className="card" style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ position: "absolute", right: "14px", top: "12px" }}>
            <span className="gt gt-amber " aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
              </svg>
            </span>
          </div>
          <span className="lbl">
            {"网关 · 今天"}
          </span>
          <div className="stat">
            <span className="muted" style={{ fontSize: "12px" }}>
              {"调用次数"}
            </span>
            <span style={{ fontSize: "30px" }}>
              {"1,284"}
            </span>
          </div>
          <div title="近 60 分钟调用量">
            <svg aria-hidden="true" width="220" height="46" viewBox="0 0 220 46">
              <polyline points="2.0,42.0 16.4,37.5 30.8,40.9 45.2,34.2 59.6,38.6 74.0,30.8 88.4,35.3 102.8,27.5 117.2,31.9 131.6,33.1 146.0,25.2 160.4,4.0 174.8,29.7 189.2,28.6 203.6,31.9 218.0,26.4" fill="none" stroke="#8E7CFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.2s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
              </polyline>
              <circle cx="218.0" cy="26.4" r="3" fill="#8E7CFF">
                <animate attributeName="r" values="3;5.5;3" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;.55;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          <div style={{ display: "flex", gap: "14px", fontSize: "12px" }}>
            <span className="muted">
              {"p95 "}
              <span style={{ color: "rgb(201, 205, 212)" }}>
                {"210 ms"}
              </span>
            </span>
            <span className="muted">
              {"拒绝 "}
              <span style={{ color: "rgb(255, 123, 114)" }}>
                {"2"}
              </span>
            </span>
            <span className="muted">
              {"超时 "}
              <span style={{ color: "rgb(242, 193, 78)" }}>
                {"3"}
              </span>
            </span>
          </div>
        </div>
      </div>
      <section className="tier1" aria-labelledby="you-h">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span className="gt gt-amber " aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
              <svg className="glyph-swing" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M22 8c0-2.3-.8-4.3-2-6" />
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                <path d="M4 2C2.8 3.7 2 5.7 2 8" />
              </svg>
            </span>
            <div>
              <h2 id="you-h" style={{ margin: "0px", fontSize: "20px", fontWeight: "600" }}>
                {"需要你处理 · 6"}
              </h2>
              <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px" }}>
                {"阻塞任务的排在最前面；只有后果大又拿不准的、或必须由你确认的才会到这里"}
              </p>
            </div>
          </div>
          <Link to="/review" style={{ fontSize: "14px", fontWeight: "500" }}>
            {"打开待审"}
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr 0.85fr", gap: "20px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p className="lbl">
              {"阻塞任务 · 2"}
            </p>
            <div className="raised" style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <span className="chip s-you live">
                  {"求助"}
                </span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "rgb(242, 193, 78)" }}>
                  {"已等 69 分钟"}
                </span>
              </div>
              <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.5" }}>
                {"T2 是否允许修改共用 CSS"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"开发 C 停在检查点 2 · 会影响 3 个已验收区块"}
              </span>
              <Link to="/task" className="btn" style={{ alignSelf: "flex-start" }}>
                {"处理求助"}
              </Link>
            </div>
            <div className="raised" style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <span className="chip s-risk live">
                  {"冲突"}
                </span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "rgb(242, 193, 78)" }}>
                  {"已等 40 分钟"}
                </span>
              </div>
              <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.5" }}>
                {"客户要求标题 36px，与 K-008 冲突"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"裁决规则分不出先后 · 影响验收标准第 1 条"}
              </span>
              <Link to="/review" className="btn" style={{ alignSelf: "flex-start" }}>
                {"去裁决"}
              </Link>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p className="lbl">
              {"需要你确认 · 3"}
            </p>
            <div className="raised" style={{ padding: "2px 16px 4px" }}>
              <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
                <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                    <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                      <span className="chip s-doing">
                        {"候选"}
                      </span>
                      {" 客户 A 移动端断点为 750px"}
                    </span>
                    <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                      {"客户层 · 必须由你确认 · 14:40"}
                    </span>
                  </div>
                  <div>
                    <Link to="/review" style={{ fontSize: "13px" }}>
                      {"审核"}
                    </Link>
                  </div>
                </li>
                <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                    <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                      <span className="chip s-doing">
                        {"候选"}
                      </span>
                      {" xuvia 选题接口单次最多 50 条"}
                    </span>
                    <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                      {"后果大：影响批量生成 · 13:15"}
                    </span>
                  </div>
                  <div>
                    <Link to="/review" style={{ fontSize: "13px" }}>
                      {"审核"}
                    </Link>
                  </div>
                </li>
                <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                    <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                      <span className="chip s-done">
                        {"上提"}
                      </span>
                      {" K-027 上提到 Shopline 领域层"}
                    </span>
                    <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                      {"跨项目上提 · 建议先复查当下条件 · 11:30"}
                    </span>
                  </div>
                  <div>
                    <Link to="/knowledge/item" style={{ fontSize: "13px" }}>
                      {"查看"}
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p className="lbl">
              {"看截图 · 1"}
            </p>
            <div className="raised" style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="chip s-you live">
                  {"看截图"}
                </span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "rgb(242, 193, 78)" }}>
                  {"已等 35 分钟"}
                </span>
              </div>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                {"P-0012 个人站案例页"}
              </span>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
                <div aria-hidden="true" style={{ width: "56px", height: "98px", borderRadius: "11px", border: "4px solid rgb(29, 31, 35)", background: "rgb(22, 23, 26)", padding: "4px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "4px", position: "relative", boxShadow: "rgba(16, 24, 40, 0.22) 0px 4px 10px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset" }}>
                  <span style={{ height: "8px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                  <span style={{ height: "22px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "2px" }} />
                  <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
                    <span style={{ height: "16px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                    <span style={{ height: "16px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                  </span>
                  <span style={{ height: "8px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px", marginTop: "auto" }} />
                </div>
                <span className="muted" style={{ fontSize: "11px", paddingBottom: "40px" }}>
                  {"→"}
                </span>
                <div aria-hidden="true" style={{ width: "56px", height: "98px", borderRadius: "11px", border: "4px solid rgb(29, 31, 35)", background: "rgb(22, 23, 26)", padding: "4px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "4px", position: "relative", boxShadow: "rgba(16, 24, 40, 0.22) 0px 4px 10px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset" }}>
                  <span style={{ height: "8px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                  <span style={{ height: "22px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "2px" }} />
                  <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
                    <span style={{ height: "16px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                    <span style={{ height: "16px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                  </span>
                  <span className="diffp" style={{ position: "absolute", left: "3px", right: "3px", bottom: "6px", height: "12px", border: "1.5px solid rgb(217, 45, 32)", borderRadius: "2px", background: "rgba(217, 45, 32, 0.08)" }} />
                </div>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"4 台设备"}
                  <br />
                  {"1 处意外差异"}
                </span>
              </div>
              <Link to="/visual" className="btn" style={{ alignSelf: "flex-start" }}>
                {"去看截图"}
              </Link>
            </div>
          </div>
        </div>
        <p className="muted" style={{ margin: "16px 0px 0px", fontSize: "12px" }}>
          {"另有 2 件抽检与复验，不急 · 委托规则 v3 今天自动确认 2 条 · 今天 agent 一共等你 2 小时 4 分钟"}
        </p>
      </section>
      <section className="card" aria-labelledby="map-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="map-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"项目拆解地图"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"4 个项目 · 5 个需求 · 18 个子任务。每个方块是一个子任务，颜色表示状态，悬停看详情，点开进入任务"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <div className="muted" style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px" }}>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(63, 185, 80)" }} />
                {"完成 9"}
              </span>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(79, 140, 255)" }} />
                {"进行中 3"}
              </span>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(227, 160, 8)" }} />
                {"等待你 2"}
              </span>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "transparent", border: "1px dashed rgb(92, 97, 107)" }} />
                {"排队 4"}
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "grid", gridTemplateColumns: "240px minmax(0px, 1fr)", gap: "16px", alignItems: "start", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "6px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={{ fontSize: "15px", fontWeight: "600" }}>
                  {"Shopline bundle 插件"}
                </span>
                <span className="chip s-doing">
                  {"主线"}
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px" }}>
                {"子任务完成 6 / 11"}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ flex: "0 1 auto", minWidth: "220px", display: "flex", flexDirection: "column", gap: "8px", padding: "12px", borderRadius: "10px", background: "rgb(249, 250, 251)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/breakdown" style={{ fontSize: "13px", fontWeight: "600", color: "rgb(237, 238, 240)", textDecoration: "none" }}>
                    {"TASK-0412 · Black Friday 页面改版"}
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"计划 11/09 · 第 4 步 开发"}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  <Link to="/task" className="tile" title="T0 · 抽出共用卡片组件 · 开发 A · 5 / 5 · 完成" aria-label="T0 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
                    {"T0"}
                  </Link>
                  <Link to="/task" className="tile" title="T1 · 对比表加限时徽章 · 开发 B · 2 / 5 · 进行中" aria-label="T1 进行中" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(29, 78, 216)", color: "rgb(255, 255, 255)" }}>
                    {"T1"}
                  </Link>
                  <Link to="/task" className="tile" title="T2 · 卡片移动端图片 · 开发 C · 1 / 5 · 等你回答求助 · 等待你" aria-label="T2 等待你" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(181, 71, 8)", color: "rgb(255, 255, 255)" }}>
                    {"T2"}
                  </Link>
                  <Link to="/task" className="tile" title="T3 · 客服弹窗换图标 · 开发 A · 1 / 5 · 进行中" aria-label="T3 进行中" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(29, 78, 216)", color: "rgb(255, 255, 255)" }}>
                    {"T3"}
                  </Link>
                  <Link to="/task" className="tile" title="T4 · 合并与全量回归 · 依赖 T1–T3 · 排队" aria-label="T4 排队" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgba(255, 255, 255, 0.05)", color: "rgb(161, 166, 176)", border: "1px dashed rgb(92, 97, 107)" }}>
                    {"T4"}
                  </Link>
                </div>
              </div>
              <div style={{ flex: "0 1 auto", minWidth: "220px", display: "flex", flexDirection: "column", gap: "8px", padding: "12px", borderRadius: "10px", background: "rgb(249, 250, 251)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/breakdown" style={{ fontSize: "13px", fontWeight: "600", color: "rgb(237, 238, 240)", textDecoration: "none" }}>
                    {"TASK-0409 · 购物车提示文案"}
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"11/06 已交付"}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  <Link to="/task" className="tile" title="09-1 · 提示文案替换 · 完成" aria-label="09-1 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
                    {"09-1"}
                  </Link>
                  <Link to="/task" className="tile" title="09-2 · 库存提示样式 · 完成" aria-label="09-2 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
                    {"09-2"}
                  </Link>
                  <Link to="/task" className="tile" title="09-3 · 多语言文案 · 完成" aria-label="09-3 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
                    {"09-3"}
                  </Link>
                </div>
              </div>
              <div style={{ flex: "0 1 auto", minWidth: "220px", display: "flex", flexDirection: "column", gap: "8px", padding: "12px", borderRadius: "10px", background: "rgb(249, 250, 251)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/breakdown" style={{ fontSize: "13px", fontWeight: "600", color: "rgb(237, 238, 240)", textDecoration: "none" }}>
                    {"TASK-0407 · bundle 价格计算修正"}
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"计划 11/12 · 第 4 步 开发"}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  <Link to="/task" className="tile" title="07-1 · 价格四舍五入（返工 1 次） · 完成" aria-label="07-1 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
                    {"07-1"}
                  </Link>
                  <Link to="/task" className="tile" title="07-2 · 折扣叠加顺序 · 完成" aria-label="07-2 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
                    {"07-2"}
                  </Link>
                  <Link to="/task" className="tile" title="07-3 · 价格单元测试补齐 · 排队" aria-label="07-3 排队" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgba(255, 255, 255, 0.05)", color: "rgb(161, 166, 176)", border: "1px dashed rgb(92, 97, 107)" }}>
                    {"07-3"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "240px minmax(0px, 1fr)", gap: "16px", alignItems: "start", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "6px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={{ fontSize: "15px", fontWeight: "600" }}>
                  {"xuvia 内容系统"}
                </span>
                <span className="chip s-queue">
                  {"子线"}
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px" }}>
                {"子任务完成 1 / 4"}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ flex: "0 1 auto", minWidth: "220px", display: "flex", flexDirection: "column", gap: "8px", padding: "12px", borderRadius: "10px", background: "rgb(249, 250, 251)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/breakdown" style={{ fontSize: "13px", fontWeight: "600", color: "rgb(237, 238, 240)", textDecoration: "none" }}>
                    {"X-REQ-02 · 选题批量生成"}
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"计划 11/14 · 第 4 步 开发"}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  <Link to="/task" className="tile" title="X-0029 · 素材库导入脚本 · 完成" aria-label="X-0029 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
                    {"X-0029"}
                  </Link>
                  <Link to="/task" className="tile" title="X-0031 · 批量生成接口 · 开发 D · 2 / 5 · 进行中" aria-label="X-0031 进行中" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(29, 78, 216)", color: "rgb(255, 255, 255)" }}>
                    {"X-0031"}
                  </Link>
                  <Link to="/task" className="tile" title="X-0032 · 生成结果去重 · 排队" aria-label="X-0032 排队" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgba(255, 255, 255, 0.05)", color: "rgb(161, 166, 176)", border: "1px dashed rgb(92, 97, 107)" }}>
                    {"X-0032"}
                  </Link>
                  <Link to="/task" className="tile" title="X-0033 · 生成记录页 · 排队" aria-label="X-0033 排队" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgba(255, 255, 255, 0.05)", color: "rgb(161, 166, 176)", border: "1px dashed rgb(92, 97, 107)" }}>
                    {"X-0033"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "240px minmax(0px, 1fr)", gap: "16px", alignItems: "start", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "6px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={{ fontSize: "15px", fontWeight: "600" }}>
                  {"个人站"}
                </span>
                <span className="chip s-queue">
                  {"子线"}
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px" }}>
                {"子任务完成 2 / 3"}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ flex: "0 1 auto", minWidth: "220px", display: "flex", flexDirection: "column", gap: "8px", padding: "12px", borderRadius: "10px", background: "rgb(249, 250, 251)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/breakdown" style={{ fontSize: "13px", fontWeight: "600", color: "rgb(237, 238, 240)", textDecoration: "none" }}>
                    {"P-REQ-03 · 案例页改版"}
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"计划 11/10 · 第 4 步 开发"}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  <Link to="/task" className="tile" title="P-0010 · 案例数据整理 · 完成" aria-label="P-0010 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
                    {"P-0010"}
                  </Link>
                  <Link to="/task" className="tile" title="P-0011 · 移动端导航 · 完成" aria-label="P-0011 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
                    {"P-0011"}
                  </Link>
                  <Link to="/task" className="tile" title="P-0012 · 案例页 · 开发 E · 3 / 5 · 等你看截图 · 等待你" aria-label="P-0012 等待你" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(181, 71, 8)", color: "rgb(255, 255, 255)" }}>
                    {"P-0012"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "240px minmax(0px, 1fr)", gap: "16px", alignItems: "start", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "6px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={{ fontSize: "15px", fontWeight: "600" }}>
                  {"AI 直播语音"}
                </span>
                <span className="chip s-queue">
                  {"维护"}
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px" }}>
                {"没有进行中的需求"}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ padding: "8px 16px", borderRadius: "4px", border: "1px dashed rgba(255, 255, 255, 0.12)", fontSize: "13px", color: "rgb(161, 166, 176)", display: "flex", alignItems: "center", gap: "10px" }}>
                <svg className="bot bot-idle" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
                  <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                  <g className="awake">
                    <circle className="ant" cx="32" cy="6" r="3">
                      <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g className="asleep">
                    <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                  </g>
                  <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                  <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                  <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                  <g className="awake eyes">
                    <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                    <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                  </g>
                  <g className="asleep">
                    <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                    <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  </g>
                  <g className="gear">
                    <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                    <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                      <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g className="q">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                    <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                    <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                      {"?"}
                    </text>
                  </g>
                  <g className="zz">
                    <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                    </text>
                    <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    </text>
                  </g>
                </svg>
                {"暂无需求，维护中"}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card" aria-labelledby="tl-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="tl-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"Agent 今日时间轴"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"7 个 agent：谁在做、谁在等你、谁空着"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <div className="muted" style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px" }}>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset" }} />
                {"今天已做完的"}
              </span>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "linear-gradient(90deg, rgb(124, 108, 255), rgb(79, 140, 255))" }} />
                {"正在做"}
              </span>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(227, 160, 8)" }} />
                {"等你"}
              </span>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.1)" }} />
                {"空闲"}
              </span>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ height: "12px", background: "rgb(248, 81, 73)", width: "2px", borderRadius: "0px" }} />
                {"现在"}
              </span>
            </div>
            <Link to="/agents" style={{ fontSize: "14px", fontWeight: "500" }}>
              {"打开 Agent 看板"}
            </Link>
          </div>
        </div>
        <div role="table" aria-label="Agent 今日时间轴" style={{ display: "flex", flexDirection: "column", gap: "6px", overflowX: "auto" }}>
          <div style={{ minWidth: "900px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px" }}>
              <span />
              <div style={{ position: "relative", height: "16px" }}>
                <span style={{ position: "absolute", left: "0%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"09:00"}
                </span>
                <span style={{ position: "absolute", left: "11.11%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"10:00"}
                </span>
                <span style={{ position: "absolute", left: "22.22%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"11:00"}
                </span>
                <span style={{ position: "absolute", left: "33.33%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"12:00"}
                </span>
                <span style={{ position: "absolute", left: "44.44%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"13:00"}
                </span>
                <span style={{ position: "absolute", left: "55.56%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"14:00"}
                </span>
                <span style={{ position: "absolute", left: "66.67%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"15:00"}
                </span>
                <span style={{ position: "absolute", left: "88.89%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"17:00"}
                </span>
                <span style={{ position: "absolute", left: "100%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"18:00"}
                </span>
                <span style={{ position: "absolute", left: "81.48%", transform: "translateX(-50%)", top: "-3px", fontSize: "11px", fontWeight: "600", color: "rgb(255, 255, 255)", background: "rgb(248, 81, 73)", borderRadius: "999px", padding: "0px 7px" }}>
                  {"16:20"}
                </span>
              </div>
              <span />
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-idle" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
                  <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                  <g className="awake">
                    <circle className="ant" cx="32" cy="6" r="3">
                      <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g className="asleep">
                    <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                  </g>
                  <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                  <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                  <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                  <g className="awake eyes">
                    <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                    <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                  </g>
                  <g className="asleep">
                    <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                    <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  </g>
                  <g className="gear">
                    <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                    <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                      <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g className="q">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                    <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                    <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                      {"?"}
                    </text>
                  </g>
                  <g className="zz">
                    <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                    </text>
                    <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    </text>
                  </g>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", minWidth: "0px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {"需求拆分 agent"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Claude · 网页端"}
                  </span>
                </div>
              </div>
              <div role="cell" style={{ position: "relative", height: "36px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "8px", boxSizing: "border-box" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "0%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "11.11%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "22.22%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "33.33%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "44.44%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "55.56%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "66.67%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "77.78%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "88.89%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "100%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span title="需求拆分 agent · 10:05–10:35 · TASK-0415 起草确认单" style={{ position: "absolute", top: "5px", bottom: "5px", left: "12.04%", width: "calc(5.56% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-queue">
                  {"空闲"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"等客户确认 TASK-0415 需求单"}
                </span>
              </div>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-work" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
                  <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                  <g className="awake">
                    <circle className="ant" cx="32" cy="6" r="3">
                      <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g className="asleep">
                    <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                  </g>
                  <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                  <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                  <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                  <g className="awake eyes">
                    <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                    <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                  </g>
                  <g className="asleep">
                    <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                    <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  </g>
                  <g className="gear">
                    <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                    <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                      <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g className="q">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                    <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                    <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                      {"?"}
                    </text>
                  </g>
                  <g className="zz">
                    <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                    </text>
                    <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    </text>
                  </g>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", minWidth: "0px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {"开发 A"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Claude Code · M5 Pro"}
                  </span>
                </div>
              </div>
              <div role="cell" style={{ position: "relative", height: "36px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "8px", boxSizing: "border-box" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "0%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "11.11%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "22.22%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "33.33%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "44.44%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "55.56%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "66.67%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "77.78%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "88.89%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "100%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span title="开发 A · 09:00–11:30 · T0 共用组件" style={{ position: "absolute", top: "5px", bottom: "5px", left: "0%", width: "calc(27.78% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T0 共用组件"}
                </span>
                <span className="shim" title="开发 A · 13:30–16:20 · T3 客服弹窗图标" style={{ position: "absolute", top: "5px", bottom: "5px", left: "50%", width: "calc(31.48% - 3px)", backgroundColor: "rgb(110, 92, 246)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(255, 255, 255)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T3 客服弹窗图标"}
                </span>
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-doing">
                  {"进行中"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T3 · 检查点 1 / 5"}
                </span>
                <span className="typing" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-work" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
                  <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                  <g className="awake">
                    <circle className="ant" cx="32" cy="6" r="3">
                      <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g className="asleep">
                    <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                  </g>
                  <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                  <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                  <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                  <g className="awake eyes">
                    <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                    <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                  </g>
                  <g className="asleep">
                    <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                    <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  </g>
                  <g className="gear">
                    <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                    <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                      <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g className="q">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                    <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                    <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                      {"?"}
                    </text>
                  </g>
                  <g className="zz">
                    <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                    </text>
                    <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    </text>
                  </g>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", minWidth: "0px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {"开发 B"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Codex · M5 Pro"}
                  </span>
                </div>
              </div>
              <div role="cell" style={{ position: "relative", height: "36px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "8px", boxSizing: "border-box" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "0%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "11.11%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "22.22%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "33.33%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "44.44%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "55.56%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "66.67%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "77.78%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "88.89%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "100%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span title="开发 B · 09:30–11:00 · T-0409 文案" style={{ position: "absolute", top: "5px", bottom: "5px", left: "5.56%", width: "calc(16.67% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T-0409 文案"}
                </span>
                <span className="shim" title="开发 B · 12:15–16:20 · T1 限时徽章" style={{ position: "absolute", top: "5px", bottom: "5px", left: "36.11%", width: "calc(45.37% - 3px)", backgroundColor: "rgb(110, 92, 246)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(255, 255, 255)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T1 限时徽章"}
                </span>
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-doing">
                  {"进行中"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T1 · 检查点 2 / 5"}
                </span>
                <span className="typing" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-wait" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
                  <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                  <g className="awake">
                    <circle className="ant" cx="32" cy="6" r="3">
                      <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g className="asleep">
                    <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                  </g>
                  <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                  <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                  <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                  <g className="awake eyes">
                    <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                    <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                  </g>
                  <g className="asleep">
                    <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                    <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  </g>
                  <g className="gear">
                    <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                    <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                      <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g className="q">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                    <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                    <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                      {"?"}
                    </text>
                  </g>
                  <g className="zz">
                    <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                    </text>
                    <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    </text>
                  </g>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", minWidth: "0px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {"开发 C"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Claude Code · M5 Pro"}
                  </span>
                </div>
              </div>
              <div role="cell" style={{ position: "relative", height: "36px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "8px", boxSizing: "border-box" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "0%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "11.11%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "22.22%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "33.33%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "44.44%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "55.56%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "66.67%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "77.78%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "88.89%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "100%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span title="开发 C · 09:20–10:30 · T-0407 四舍五入" style={{ position: "absolute", top: "5px", bottom: "5px", left: "3.7%", width: "calc(12.96% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T-0407 四舍五入"}
                </span>
                <span title="开发 C · 10:30–10:50 · 等你" style={{ position: "absolute", top: "5px", bottom: "5px", left: "16.67%", width: "calc(3.7% - 3px)", backgroundColor: "rgb(227, 160, 8)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(26, 18, 0)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span title="开发 C · 10:50–11:30 · 返工" style={{ position: "absolute", top: "5px", bottom: "5px", left: "20.37%", width: "calc(7.41% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span title="开发 C · 12:15–15:11 · T2 移动端图片" style={{ position: "absolute", top: "5px", bottom: "5px", left: "36.11%", width: "calc(32.59% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T2 移动端图片"}
                </span>
                <span title="开发 C · 15:11–16:20 · 等你回答求助" style={{ position: "absolute", top: "5px", bottom: "5px", left: "68.7%", width: "calc(12.78% - 3px)", backgroundColor: "rgb(227, 160, 8)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(26, 18, 0)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"等你回答求助"}
                </span>
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-you live">
                  {"等待你"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T2 · 已等 69 分钟"}
                </span>
              </div>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-work" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
                  <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                  <g className="awake">
                    <circle className="ant" cx="32" cy="6" r="3">
                      <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g className="asleep">
                    <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                  </g>
                  <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                  <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                  <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                  <g className="awake eyes">
                    <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                    <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                  </g>
                  <g className="asleep">
                    <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                    <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  </g>
                  <g className="gear">
                    <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                    <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                      <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g className="q">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                    <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                    <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                      {"?"}
                    </text>
                  </g>
                  <g className="zz">
                    <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                    </text>
                    <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    </text>
                  </g>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", minWidth: "0px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {"开发 D"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Codex · 云端"}
                  </span>
                </div>
              </div>
              <div role="cell" style={{ position: "relative", height: "36px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "8px", boxSizing: "border-box" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "0%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "11.11%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "22.22%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "33.33%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "44.44%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "55.56%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "66.67%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "77.78%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "88.89%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "100%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span title="开发 D · 09:00–12:00 · X-0029 导入脚本" style={{ position: "absolute", top: "5px", bottom: "5px", left: "0%", width: "calc(33.33% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"X-0029 导入脚本"}
                </span>
                <span className="shim" title="开发 D · 13:00–16:20 · X-0031 批量生成接口" style={{ position: "absolute", top: "5px", bottom: "5px", left: "44.44%", width: "calc(37.04% - 3px)", backgroundColor: "rgb(110, 92, 246)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(255, 255, 255)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"X-0031 批量生成接口"}
                </span>
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-doing">
                  {"进行中"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"X-0031 · 检查点 2 / 5"}
                </span>
                <span className="typing" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-wait" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
                  <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                  <g className="awake">
                    <circle className="ant" cx="32" cy="6" r="3">
                      <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g className="asleep">
                    <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                  </g>
                  <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                  <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                  <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                  <g className="awake eyes">
                    <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                    <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                  </g>
                  <g className="asleep">
                    <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                    <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  </g>
                  <g className="gear">
                    <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                    <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                      <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g className="q">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                    <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                    <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                      {"?"}
                    </text>
                  </g>
                  <g className="zz">
                    <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                    </text>
                    <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    </text>
                  </g>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", minWidth: "0px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {"开发 E"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Cursor · MacBook Air"}
                  </span>
                </div>
              </div>
              <div role="cell" style={{ position: "relative", height: "36px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "8px", boxSizing: "border-box" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "0%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "11.11%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "22.22%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "33.33%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "44.44%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "55.56%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "66.67%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "77.78%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "88.89%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "100%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span title="开发 E · 10:00–11:45 · P-0011 导航" style={{ position: "absolute", top: "5px", bottom: "5px", left: "11.11%", width: "calc(19.44% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"P-0011 导航"}
                </span>
                <span title="开发 E · 13:00–15:45 · P-0012 案例页" style={{ position: "absolute", top: "5px", bottom: "5px", left: "44.44%", width: "calc(30.56% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"P-0012 案例页"}
                </span>
                <span title="开发 E · 15:45–16:20 · 等你看截图" style={{ position: "absolute", top: "5px", bottom: "5px", left: "75%", width: "calc(6.48% - 3px)", backgroundColor: "rgb(227, 160, 8)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(26, 18, 0)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-you live">
                  {"等待你"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"P-0012 · 已等 35 分钟"}
                </span>
              </div>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-stand" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
                  <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                  <g className="awake">
                    <circle className="ant" cx="32" cy="6" r="3">
                      <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g className="asleep">
                    <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                  </g>
                  <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                  <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                  <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                  <g className="awake eyes">
                    <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                    <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                  </g>
                  <g className="asleep">
                    <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                    <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  </g>
                  <g className="gear">
                    <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                    <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                      <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g className="q">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                    <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                    <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                      {"?"}
                    </text>
                  </g>
                  <g className="zz">
                    <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                    </text>
                    <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    </text>
                  </g>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", minWidth: "0px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {"审查回归 agent"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Claude Code · M5 Pro"}
                  </span>
                </div>
              </div>
              <div role="cell" style={{ position: "relative", height: "36px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "8px", boxSizing: "border-box" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "0%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "11.11%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "22.22%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "33.33%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "44.44%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "55.56%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "66.67%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "77.78%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "88.89%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "100%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span title="审查回归 agent · 11:30–12:10 · T0 合并回归" style={{ position: "absolute", top: "5px", bottom: "5px", left: "27.78%", width: "calc(7.41% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-queue">
                  {"待命"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"等 T1–T3 完成"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="muted" style={{ margin: "12px 0px 0px", fontSize: "12px" }}>
          {"今天 agent 一共等你 2 小时 4 分钟：开发 C 89 分钟，开发 E 35 分钟。时间轴来自网关的任务事件"}
        </p>
      </section>
      <section className="quiet" aria-labelledby="kpi-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="kpi-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"本周效果"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"四个核心指标，近 12 周；虚线是基线。每周复盘时再细看"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <Link to="/metrics" style={{ fontSize: "14px", fontWeight: "500" }}>
              {"打开指标"}
            </Link>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
              <div className="stat">
                <span className="muted" style={{ fontSize: "13px" }}>
                  {"一次通过率"}
                </span>
                <span style={{ fontSize: "22px", fontWeight: "600" }}>
                  {"78%"}
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"基线 52%"}
                </span>
              </div>
            </div>
            <div title="一次通过率：50、54、51、53、58、61、66、70、72、75、77、78">
              <svg aria-hidden="true" width="120" height="40" viewBox="0 0 120 40">
                <line x1="0" y1="33.7" x2="120" y2="33.7" stroke="#5C616B" strokeWidth="1" strokeDasharray="3 3" />
                <polyline points="2.0,36.0 12.5,31.4 23.1,34.9 33.6,32.6 44.2,26.9 54.7,23.4 65.3,17.7 75.8,13.1 86.4,10.9 96.9,7.4 107.5,5.1 118.0,4.0" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.2s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
                </polyline>
                <circle cx="118.0" cy="4.0" r="3" fill="#9D8FFF">
                  <animate attributeName="r" values="3;5.5;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;.55;1" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
              <div className="stat">
                <span className="muted" style={{ fontSize: "13px" }}>
                  {"回归缺陷 · 每周"}
                </span>
                <span style={{ fontSize: "22px", fontWeight: "600" }}>
                  {"1"}
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"基线 6"}
                </span>
              </div>
            </div>
            <div title="回归缺陷 · 每周：6、7、5、6、5、4、4、3、2、2、1、1">
              <svg aria-hidden="true" width="120" height="40" viewBox="0 0 120 40">
                <line x1="0" y1="9.3" x2="120" y2="9.3" stroke="#5C616B" strokeWidth="1" strokeDasharray="3 3" />
                <polyline points="2.0,9.3 12.5,4.0 23.1,14.7 33.6,9.3 44.2,14.7 54.7,20.0 65.3,20.0 75.8,25.3 86.4,30.7 96.9,30.7 107.5,36.0 118.0,36.0" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.2s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
                </polyline>
                <circle cx="118.0" cy="36.0" r="3" fill="#9D8FFF">
                  <animate attributeName="r" values="3;5.5;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;.55;1" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
              <div className="stat">
                <span className="muted" style={{ fontSize: "13px" }}>
                  {"纠错介入 · 每周"}
                </span>
                <span style={{ fontSize: "22px", fontWeight: "600" }}>
                  {"4"}
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"基线 11 · 求助介入 7 单独统计"}
                </span>
              </div>
            </div>
            <div title="纠错介入 · 每周：11、12、10、11、9、8、7、6、6、5、5、4">
              <svg aria-hidden="true" width="120" height="40" viewBox="0 0 120 40">
                <line x1="0" y1="8.0" x2="120" y2="8.0" stroke="#5C616B" strokeWidth="1" strokeDasharray="3 3" />
                <polyline points="2.0,8.0 12.5,4.0 23.1,12.0 33.6,8.0 44.2,16.0 54.7,20.0 65.3,24.0 75.8,28.0 86.4,28.0 96.9,32.0 107.5,32.0 118.0,36.0" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.2s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
                </polyline>
                <circle cx="118.0" cy="36.0" r="3" fill="#9D8FFF">
                  <animate attributeName="r" values="3;5.5;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;.55;1" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
              <div style={{ position: "relative", display: "inline-flex" }}>
                <span className="gt gt-amber " aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
                    <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
                    <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
                    <path d="M4 22h16" />
                    <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                    <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
                  </svg>
                </span>
                <svg className="spark" aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" style={{ position: "absolute", right: "-14px", top: "-14px", overflow: "visible" }}>
                  <path d="M10 2 L11.6 8.4 L18 10 L11.6 11.6 L10 18 L8.4 11.6 L2 10 L8.4 8.4 Z" fill="#F2C14E" opacity=".2">
                    <animate attributeName="opacity" values=".15;1;.15" dur="1.8s" begin="0s" repeatCount="indefinite" />
                  </path>
                  <path d="M30 14 L31 18 L35 19 L31 20 L30 24 L29 20 L25 19 L29 18 Z" fill="#D6D0FF" opacity=".2">
                    <animate attributeName="opacity" values=".15;1;.15" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
                  </path>
                  <path d="M24 30 L25 33 L28 34 L25 35 L24 38 L23 35 L20 34 L23 33 Z" fill="#F2C14E" opacity=".2">
                    <animate attributeName="opacity" values=".15;1;.15" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
              <div className="stat">
                <span className="muted" style={{ fontSize: "13px" }}>
                  {"重复错误 · 每周"}
                </span>
                <span style={{ fontSize: "22px", fontWeight: "600" }}>
                  {"0"}
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"基线 3"}
                </span>
              </div>
            </div>
            <div title="重复错误 · 每周：3、4、3、3、2、2、1、1、1、0、0、0">
              <svg aria-hidden="true" width="120" height="40" viewBox="0 0 120 40">
                <line x1="0" y1="12.0" x2="120" y2="12.0" stroke="#5C616B" strokeWidth="1" strokeDasharray="3 3" />
                <polyline points="2.0,12.0 12.5,4.0 23.1,12.0 33.6,12.0 44.2,20.0 54.7,20.0 65.3,28.0 75.8,28.0 86.4,28.0 96.9,36.0 107.5,36.0 118.0,36.0" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.2s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
                </polyline>
                <circle cx="118.0" cy="36.0" r="3" fill="#9D8FFF">
                  <animate attributeName="r" values="3;5.5;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;.55;1" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
