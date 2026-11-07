// 实时调用 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Live() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-amber float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"实时调用"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"所有 agent 对网关的读写，按时间倒序。每次调用都带身份和任务编号，规则与证据分开返回"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span className="chip s-done live">
              {"实时 · 每 5 秒刷新"}
            </span>
          </div>
        </div>
      </div>
      <section className="card" aria-labelledby="lv-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="lv-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"现在"}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div className="radar" aria-hidden="true" style={{ width: "116px", height: "116px" }}>
            <svg width="116" height="116" viewBox="0 0 100 100" style={{ position: "absolute", inset: "0px" }}>
              <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,.10)" />
              <circle cx="50" cy="50" r="31" fill="none" stroke="rgba(255,255,255,.07)" />
              <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(255,255,255,.06)" />
              <path d="M50 4 V96 M4 50 H96" stroke="rgba(255,255,255,.05)" />
              <circle cx="70" cy="34" r="3" fill="#3FB950">
                <animate attributeName="opacity" values="1;.25;1" dur="1.6s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="70" cy="34" r="3" fill="none" stroke="#3FB950">
                <animate attributeName="r" values="3;10" dur="1.6s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values=".8;0" dur="1.6s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="32" cy="64" r="3" fill="#E3A008">
                <animate attributeName="opacity" values="1;.25;1" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="32" cy="64" r="3" fill="none" stroke="#E3A008">
                <animate attributeName="r" values="3;10" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values=".8;0" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="62" cy="72" r="2.5" fill="#A99CFF">
                <animate attributeName="opacity" values="1;.25;1" dur="1.6s" begin="1s" repeatCount="indefinite" />
              </circle>
              <circle cx="62" cy="72" r="2.5" fill="none" stroke="#A99CFF">
                <animate attributeName="r" values="2.5;9.5" dur="1.6s" begin="1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values=".8;0" dur="1.6s" begin="1s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="sweep" />
          </div>
          <div className="screen" role="group" aria-label="实时读数" style={{ flex: "1 1 0%" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "8px 0px", marginLeft: "-16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 16px", borderLeft: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span style={{ fontSize: "12px", color: "rgb(138, 143, 152)" }}>
                  {"今天调用"}
                </span>
                <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.02em", color: "rgb(245, 246, 247)" }}>
                  {"1,284"}
                </span>
                <span style={{ fontSize: "11px", color: "rgb(138, 143, 152)" }}>
                  {"检索 802 · 引用 311 · 其他 171"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 16px", borderLeft: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span style={{ fontSize: "12px", color: "rgb(138, 143, 152)" }}>
                  {"活跃会话"}
                </span>
                <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.02em", color: "rgb(245, 246, 247)" }}>
                  {"5"}
                </span>
                <span style={{ fontSize: "11px", color: "rgb(138, 143, 152)" }}>
                  {"7 个身份"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 16px", borderLeft: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span style={{ fontSize: "12px", color: "rgb(138, 143, 152)" }}>
                  {"p95 延迟"}
                </span>
                <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.02em", color: "rgb(245, 246, 247)" }}>
                  {"210 ms"}
                </span>
                <span style={{ fontSize: "11px", color: "rgb(138, 143, 152)" }}>
                  {"目标 500 ms 以内"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 16px", borderLeft: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span style={{ fontSize: "12px", color: "rgb(138, 143, 152)" }}>
                  {"拒绝"}
                </span>
                <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.02em", color: "rgb(255, 123, 114)" }}>
                  {"2"}
                </span>
                <span style={{ fontSize: "11px", color: "rgb(138, 143, 152)" }}>
                  {"越权 1 · 密钥扫描 1"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 16px", borderLeft: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span style={{ fontSize: "12px", color: "rgb(138, 143, 152)" }}>
                  {"超时"}
                </span>
                <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.02em", color: "rgb(242, 193, 78)" }}>
                  {"3"}
                </span>
                <span style={{ fontSize: "11px", color: "rgb(138, 143, 152)" }}>
                  {"14:02–14:04 · 计入零调用"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 16px", borderLeft: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span style={{ fontSize: "12px", color: "rgb(138, 143, 152)" }}>
                  {"限流"}
                </span>
                <span style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.02em", color: "rgb(245, 246, 247)" }}>
                  {"0"}
                </span>
                <span style={{ fontSize: "11px", color: "rgb(138, 143, 152)" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div role="img" aria-label="近 60 分钟每分钟调用量，平均约 22 次，15:24 出现峰值 52 次" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div className="vbars" style={{ height: "90px", display: "flex", alignItems: "flex-end", gap: "2px", borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}>
              <span title="15:20 · 22 次" style={{ flex: "1 1 0%", height: "37%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "0ms" }} />
              <span title="15:21 · 16 次" style={{ flex: "1 1 0%", height: "27%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "14ms" }} />
              <span title="15:22 · 24 次" style={{ flex: "1 1 0%", height: "40%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "28ms" }} />
              <span title="15:23 · 32 次" style={{ flex: "1 1 0%", height: "53%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "42ms" }} />
              <span title="15:24 · 13 次" style={{ flex: "1 1 0%", height: "22%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "56ms" }} />
              <span title="15:25 · 14 次" style={{ flex: "1 1 0%", height: "23%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "70ms" }} />
              <span title="15:26 · 29 次" style={{ flex: "1 1 0%", height: "48%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "84ms" }} />
              <span title="15:27 · 15 次" style={{ flex: "1 1 0%", height: "25%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "98ms" }} />
              <span title="15:28 · 23 次" style={{ flex: "1 1 0%", height: "38%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "112ms" }} />
              <span title="15:29 · 30 次" style={{ flex: "1 1 0%", height: "50%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "126ms" }} />
              <span title="15:30 · 13 次" style={{ flex: "1 1 0%", height: "22%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "140ms" }} />
              <span title="15:31 · 28 次" style={{ flex: "1 1 0%", height: "47%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "154ms" }} />
              <span title="15:32 · 18 次" style={{ flex: "1 1 0%", height: "30%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "168ms" }} />
              <span title="15:33 · 13 次" style={{ flex: "1 1 0%", height: "22%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "182ms" }} />
              <span title="15:34 · 14 次" style={{ flex: "1 1 0%", height: "23%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "196ms" }} />
              <span title="15:35 · 25 次" style={{ flex: "1 1 0%", height: "42%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "210ms" }} />
              <span title="15:36 · 25 次" style={{ flex: "1 1 0%", height: "42%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "224ms" }} />
              <span title="15:37 · 14 次" style={{ flex: "1 1 0%", height: "23%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "238ms" }} />
              <span title="15:38 · 19 次" style={{ flex: "1 1 0%", height: "32%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "252ms" }} />
              <span title="15:39 · 14 次" style={{ flex: "1 1 0%", height: "23%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "266ms" }} />
              <span title="15:40 · 29 次" style={{ flex: "1 1 0%", height: "48%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "280ms" }} />
              <span title="15:41 · 25 次" style={{ flex: "1 1 0%", height: "42%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "294ms" }} />
              <span title="15:42 · 13 次" style={{ flex: "1 1 0%", height: "22%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "308ms" }} />
              <span title="15:43 · 30 次" style={{ flex: "1 1 0%", height: "50%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "322ms" }} />
              <span title="15:44 · 15 次" style={{ flex: "1 1 0%", height: "25%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "336ms" }} />
              <span title="15:45 · 19 次" style={{ flex: "1 1 0%", height: "32%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "350ms" }} />
              <span title="15:46 · 32 次" style={{ flex: "1 1 0%", height: "53%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "364ms" }} />
              <span title="15:47 · 32 次" style={{ flex: "1 1 0%", height: "53%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "378ms" }} />
              <span title="15:48 · 30 次" style={{ flex: "1 1 0%", height: "50%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "392ms" }} />
              <span title="15:49 · 13 次" style={{ flex: "1 1 0%", height: "22%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "406ms" }} />
              <span title="15:50 · 30 次" style={{ flex: "1 1 0%", height: "50%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "420ms" }} />
              <span title="15:51 · 30 次" style={{ flex: "1 1 0%", height: "50%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "434ms" }} />
              <span title="15:52 · 24 次" style={{ flex: "1 1 0%", height: "40%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "448ms" }} />
              <span title="15:53 · 13 次" style={{ flex: "1 1 0%", height: "22%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "462ms" }} />
              <span title="15:54 · 19 次" style={{ flex: "1 1 0%", height: "32%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "476ms" }} />
              <span title="15:55 · 13 次" style={{ flex: "1 1 0%", height: "22%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "490ms" }} />
              <span title="15:56 · 29 次" style={{ flex: "1 1 0%", height: "48%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "504ms" }} />
              <span title="15:57 · 16 次" style={{ flex: "1 1 0%", height: "27%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "518ms" }} />
              <span title="15:58 · 21 次" style={{ flex: "1 1 0%", height: "35%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "532ms" }} />
              <span title="15:59 · 25 次" style={{ flex: "1 1 0%", height: "42%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "546ms" }} />
              <span title="16:00 · 16 次" style={{ flex: "1 1 0%", height: "27%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "560ms" }} />
              <span title="16:01 · 29 次" style={{ flex: "1 1 0%", height: "48%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "574ms" }} />
              <span title="16:02 · 15 次" style={{ flex: "1 1 0%", height: "25%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "588ms" }} />
              <span title="16:03 · 30 次" style={{ flex: "1 1 0%", height: "50%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "602ms" }} />
              <span title="16:04 · 52 次" style={{ flex: "1 1 0%", height: "87%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "616ms" }} />
              <span title="16:05 · 29 次" style={{ flex: "1 1 0%", height: "48%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "630ms" }} />
              <span title="16:06 · 33 次" style={{ flex: "1 1 0%", height: "55%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "644ms" }} />
              <span title="16:07 · 17 次" style={{ flex: "1 1 0%", height: "28%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "658ms" }} />
              <span title="16:08 · 15 次" style={{ flex: "1 1 0%", height: "25%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "672ms" }} />
              <span title="16:09 · 30 次" style={{ flex: "1 1 0%", height: "50%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "686ms" }} />
              <span title="16:10 · 30 次" style={{ flex: "1 1 0%", height: "50%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "700ms" }} />
              <span title="16:11 · 32 次" style={{ flex: "1 1 0%", height: "53%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "714ms" }} />
              <span title="16:12 · 18 次" style={{ flex: "1 1 0%", height: "30%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "728ms" }} />
              <span title="16:13 · 23 次" style={{ flex: "1 1 0%", height: "38%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "742ms" }} />
              <span title="16:14 · 15 次" style={{ flex: "1 1 0%", height: "25%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "756ms" }} />
              <span title="16:15 · 29 次" style={{ flex: "1 1 0%", height: "48%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "770ms" }} />
              <span title="16:16 · 34 次" style={{ flex: "1 1 0%", height: "57%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "784ms" }} />
              <span title="16:17 · 14 次" style={{ flex: "1 1 0%", height: "23%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "798ms" }} />
              <span title="16:18 · 30 次" style={{ flex: "1 1 0%", height: "50%", background: "rgb(110, 92, 246)", borderRadius: "2px 2px 0px 0px", animationDelay: "812ms" }} />
              <span className="lastbar" title="16:19 · 13 次" style={{ flex: "1 1 0%", height: "22%", background: "rgb(180, 169, 255)", borderRadius: "2px 2px 0px 0px", animationDelay: "826ms" }} />
            </div>
            <div className="muted" style={{ display: "flex", justifyContent: "space-between", fontSize: "11px" }}>
              <span>
                {"15:20"}
              </span>
              <span>
                {"15:50"}
              </span>
              <span>
                {"16:20"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="card" aria-labelledby="la-h" style={{ minWidth: "0px", borderColor: "rgba(227, 160, 8, 0.45)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="la-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"需要注意"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"网关看不到的地方，用反向指标补上"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
          <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                <span className="chip s-you">
                  {"零调用任务"}
                </span>
                {" X-0029 素材库导入脚本"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"开发 D 的云端会话没有接网关，只靠热区规则完成。建议检查云端的 MCP 配置"}
              </span>
            </div>
            <div>
              <Link to="/distribution" style={{ fontSize: "13px" }}>
                {"看分发"}
              </Link>
            </div>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                <span className="chip s-you">
                  {"超时"}
                </span>
                {" 14:02–14:04 网关超时 3 次"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"期间 agent 用热区规则继续工作，这 3 次计入零调用"}
              </span>
            </div>
            <div>
              <Link to="/system" style={{ fontSize: "13px" }}>
                {"看系统"}
              </Link>
            </div>
          </li>
        </ul>
      </section>
      <section className="card" aria-labelledby="ls-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="ls-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"调用流水"}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "12px" }}>
          <div className="seg" role="group" aria-label="接口">
            <button type="button" aria-pressed="true">
              {"全部接口"}
            </button>
            <button type="button" aria-pressed="false">
              {"查询"}
            </button>
            <button type="button" aria-pressed="false">
              {"引用"}
            </button>
            <button type="button" aria-pressed="false">
              {"候选"}
            </button>
            <button type="button" aria-pressed="false">
              {"求助"}
            </button>
            <button type="button" aria-pressed="false">
              {"结果"}
            </button>
          </div>
          <div className="seg" role="group" aria-label="结果">
            <button type="button" aria-pressed="true">
              {"全部结果"}
            </button>
            <button type="button" aria-pressed="false">
              {"只看拒绝与异常"}
            </button>
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "980px" }}>
            <thead>
              <tr>
                <th scope="col">
                  {"时间"}
                </th>
                <th scope="col">
                  {"身份"}
                </th>
                <th scope="col">
                  {"任务"}
                </th>
                <th scope="col">
                  {"接口"}
                </th>
                <th scope="col">
                  {"内容"}
                </th>
                <th scope="col">
                  {"结果"}
                </th>
                <th scope="col">
                  {"延迟"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="flash">
                <td>
                  <span className="mono">
                    {"16:20:41"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"dev-a"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"TASK-0412-T3"}
                  </span>
                </td>
                <td>
                  {"查询知识"}
                </td>
                <td>
                  {"“客服弹窗 图标 无障碍”→ 4 条（规则 3 · 证据 1）"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"返回"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"120 ms"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"16:20:12"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"dev-b"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"TASK-0412-T1"}
                  </span>
                </td>
                <td>
                  {"登记引用"}
                </td>
                <td>
                  {"K-034、K-021"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"核验一致"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"64 ms"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"16:19:58"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"dev-d"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"X-0031"}
                  </span>
                </td>
                <td>
                  {"查询知识"}
                </td>
                <td>
                  {"“xuvia 分页 批量”→ 2 条"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"返回"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"98 ms"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"16:18:44"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"dev-d"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"X-0031"}
                  </span>
                </td>
                <td>
                  {"提交候选"}
                </td>
                <td>
                  {"脱敏后重新提交"}
                </td>
                <td>
                  <span className="chip s-doing">
                    {"进入候选区"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"77 ms"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"16:18:30"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"dev-d"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"X-0031"}
                  </span>
                </td>
                <td>
                  {"提交候选"}
                </td>
                <td>
                  {"内容含疑似密钥片段 sk-****"}
                </td>
                <td>
                  <span className="chip s-risk">
                    {"拒绝：密钥扫描"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"41 ms"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"16:12:05"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"split"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"TASK-0415"}
                  </span>
                </td>
                <td>
                  {"查询知识"}
                </td>
                <td>
                  {"“xuvia 选题 去重”→ 8 条"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"返回"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"143 ms"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"16:02:47"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"dev-b"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"TASK-0412-T1"}
                  </span>
                </td>
                <td>
                  {"查询知识"}
                </td>
                <td>
                  {"请求客户 B 层知识"}
                </td>
                <td>
                  <span className="chip s-risk">
                    {"拒绝：不在任务作用域"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"22 ms"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"15:45:10"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"dev-e"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"P-0012"}
                  </span>
                </td>
                <td>
                  {"回报结果"}
                </td>
                <td>
                  {"截图 4 张 · 自测通过"}
                </td>
                <td>
                  <span className="chip s-done">
                    {"检查点 3"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"210 ms"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"15:11:03"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"dev-c"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"TASK-0412-T2"}
                  </span>
                </td>
                <td>
                  {"求助"}
                </td>
                <td>
                  {"是否允许修改共用 CSS · 附 3 个方案"}
                </td>
                <td>
                  <span className="chip s-you">
                    {"等你"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"88 ms"}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"15:10:41"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"dev-c"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"TASK-0412-T2"}
                  </span>
                </td>
                <td>
                  {"回报结果"}
                </td>
                <td>
                  {"hook 拦下越界修改 styles/tokens.css"}
                </td>
                <td>
                  <span className="chip s-risk">
                    {"拦截记录"}
                  </span>
                </td>
                <td>
                  <span className="mono">
                    {"35 ms"}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="card" aria-labelledby="li-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="li-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"身份与权限"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"每个 agent 独立身份，按任务类型限制可读范围和写权限（最小权限）"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px" }}>
            <thead>
              <tr>
                <th scope="col">
                  {"身份"}
                </th>
                <th scope="col">
                  {"角色"}
                </th>
                <th scope="col">
                  {"工具 · 设备"}
                </th>
                <th scope="col">
                  {"可读"}
                </th>
                <th scope="col">
                  {"可写"}
                </th>
                <th scope="col">
                  {"当前任务"}
                </th>
                <th scope="col">
                  {"最近调用"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="mono">
                    {"split"}
                  </span>
                </td>
                <td>
                  {"需求拆分"}
                </td>
                <td>
                  {"Claude · 网页端"}
                </td>
                <td>
                  {"L0–L2 + 本客户层"}
                </td>
                <td>
                  {"候选、拆分方案"}
                </td>
                <td>
                  {"—"}
                </td>
                <td>
                  {"16:12"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"dev-a"}
                  </span>
                </td>
                <td>
                  {"开发"}
                </td>
                <td>
                  {"Claude Code · M5 Pro"}
                </td>
                <td>
                  {"L0–L2 + 客户 A"}
                </td>
                <td>
                  {"候选"}
                </td>
                <td>
                  {"TASK-0412-T3"}
                </td>
                <td>
                  {"16:20"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"dev-b"}
                  </span>
                </td>
                <td>
                  {"开发"}
                </td>
                <td>
                  {"Codex · M5 Pro"}
                </td>
                <td>
                  {"L0–L2 + 客户 A"}
                </td>
                <td>
                  {"候选"}
                </td>
                <td>
                  {"TASK-0412-T1"}
                </td>
                <td>
                  {"16:20"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"dev-c"}
                  </span>
                </td>
                <td>
                  {"开发"}
                </td>
                <td>
                  {"Claude Code · M5 Pro"}
                </td>
                <td>
                  {"L0–L2 + 客户 A"}
                </td>
                <td>
                  {"候选"}
                </td>
                <td>
                  {"TASK-0412-T2"}
                </td>
                <td>
                  {"15:11"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"dev-d"}
                  </span>
                </td>
                <td>
                  {"开发"}
                </td>
                <td>
                  {"Codex · 云端"}
                </td>
                <td>
                  {"L0–L2 + xuvia"}
                </td>
                <td>
                  {"候选"}
                </td>
                <td>
                  {"X-0031"}
                </td>
                <td>
                  {"16:19"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"dev-e"}
                  </span>
                </td>
                <td>
                  {"开发"}
                </td>
                <td>
                  {"Cursor · MacBook Air"}
                </td>
                <td>
                  {"L0–L2 + 个人站"}
                </td>
                <td>
                  {"候选"}
                </td>
                <td>
                  {"P-0012"}
                </td>
                <td>
                  {"15:45"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"review"}
                  </span>
                </td>
                <td>
                  {"审查回归"}
                </td>
                <td>
                  {"Claude Code · M5 Pro"}
                </td>
                <td>
                  {"本项目全部"}
                </td>
                <td>
                  {"测试、回归报告"}
                </td>
                <td>
                  {"—"}
                </td>
                <td>
                  {"12:10"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
