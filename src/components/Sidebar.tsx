// Converted from the "AI 交付全局控制台" design export.
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside aria-label="侧边导航" style={{ background: "rgba(11, 12, 14, 0.92)", borderRight: "1px solid rgba(255, 255, 255, 0.06)", padding: "14px 10px", display: "flex", flexDirection: "column", gap: "18px", boxSizing: "border-box" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "0px 6px" }}>
        <div aria-hidden="true" style={{ width: "28px", height: "28px", borderRadius: "8px", background: "linear-gradient(135deg, rgb(142, 124, 255), rgb(79, 140, 255))", boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 0px inset", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#101113" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx="4" cy="20" r="2" />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
          <span style={{ fontSize: "14px", fontWeight: "600", color: "rgb(245, 246, 247)" }}>
            {"AI 交付控制台"}
          </span>
          <span style={{ fontSize: "12px", color: "rgb(138, 143, 152)" }}>
            {"个人工作区 ▾"}
          </span>
        </div>
      </div>
      <Link to="/intake" className="btn btn-p" style={{ width: "100%" }}>
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        {"登记需求"}
      </Link>
      <nav aria-label="主导航" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div>
          <p className="sg">
            {"工作台"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
                <span>
                  {"全局总览"}
                </span>
              </span>
            </NavLink>
            <NavLink to="/review" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                </svg>
                <span>
                  {"待审"}
                </span>
              </span>
              <span className="cnt" aria-label="7 件">
                {"7"}
              </span>
            </NavLink>
            <NavLink to="/visual" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                  <circle cx="12" cy="12" r="1" />
                  <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
                </svg>
                <span>
                  {"截图审核"}
                </span>
              </span>
              <span className="cnt" aria-label="1 件">
                {"1"}
              </span>
            </NavLink>
            <NavLink to="/weekly" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M8 2v3" />
                  <path d="M16 2v3" />
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
                <span>
                  {"每周复盘"}
                </span>
              </span>
            </NavLink>
          </div>
        </div>
        <div>
          <p className="sg">
            {"交付"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <NavLink to="/breakdown" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
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
                <span>
                  {"需求拆解"}
                </span>
              </span>
            </NavLink>
            <NavLink to="/agents" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
                <span>
                  {"Agent 看板"}
                </span>
              </span>
            </NavLink>
            <NavLink to="/task" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <span>
                  {"任务追踪"}
                </span>
              </span>
            </NavLink>
          </div>
        </div>
        <div>
          <p className="sg">
            {"知识"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <NavLink to="/knowledge" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M12 5v16" />
                  <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
                </svg>
                <span>
                  {"知识库"}
                </span>
              </span>
            </NavLink>
            <NavLink to="/graph" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <rect x="16" y="16" width="6" height="6" rx="1" />
                  <rect x="2" y="16" width="6" height="6" rx="1" />
                  <rect x="9" y="2" width="6" height="6" rx="1" />
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                  <path d="M12 12V8" />
                </svg>
                <span>
                  {"知识图谱"}
                </span>
              </span>
              <span className="stage">
                {"阶段 3"}
              </span>
            </NavLink>
            <NavLink to="/clients" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M10 12h4" />
                  <path d="M10 8h4" />
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                </svg>
                <span>
                  {"客户"}
                </span>
              </span>
            </NavLink>
          </div>
        </div>
        <div>
          <p className="sg">
            {"观测"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <NavLink to="/metrics" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
                <span>
                  {"指标"}
                </span>
              </span>
            </NavLink>
            <NavLink to="/live" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
                <span>
                  {"实时调用"}
                </span>
              </span>
            </NavLink>
          </div>
        </div>
        <div>
          <p className="sg">
            {"系统"}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <NavLink to="/pipeline" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                </svg>
                <span>
                  {"采集与处理"}
                </span>
              </span>
            </NavLink>
            <NavLink to="/distribution" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
                <span>
                  {"分发"}
                </span>
              </span>
            </NavLink>
            <NavLink to="/rules" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <path d="M12 3v18" />
                  <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                  <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                  <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                  <path d="M7 21h10" />
                </svg>
                <span>
                  {"决策规则"}
                </span>
              </span>
            </NavLink>
            <NavLink to="/system" className={({ isActive }) => (isActive ? "sl sl-on" : "sl")}>
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
                  <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                  <line x1="6" x2="6.01" y1="6" y2="6" />
                  <line x1="6" x2="6.01" y1="18" y2="18" />
                </svg>
                <span>
                  {"系统健康"}
                </span>
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px", padding: "12px 10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", fontSize: "12px", color: "rgb(161, 166, 176)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="led led-g" aria-hidden="true" />
          {"网关在线 · 180 ms"}
        </span>
        <span className="muted" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="led led-g" aria-hidden="true" style={{ width: "6px", height: "6px" }} />
          {"M5 Pro · MacBook Air 在线"}
        </span>
        <span className="muted">
          {"当前阶段：2 网关与跨项目"}
        </span>
        <span className="chip s-queue" style={{ alignSelf: "flex-start" }}>
          {"示例数据"}
        </span>
      </div>
    </aside>
  );
}
