// Converted from the "AI 交付全局控制台" design export.


export default function Topbar() {
  return (
    <header style={{ height: "56px", background: "rgba(8, 9, 10, 0.6)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "0px 32px", boxSizing: "border-box" }}>
      <div role="search" className="inp" style={{ flex: "0 1 480px", width: "auto", display: "flex", alignItems: "center", gap: "8px", minHeight: "38px", padding: "0px 12px" }}>
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A8F98" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
        <input aria-label="搜索" placeholder="搜索需求、任务、知识、证据，或输入编号跳转" style={{ flex: "1 1 0%", border: "0px", background: "transparent", fontFamily: "inherit", fontSize: "14px", color: "rgb(237, 238, 240)", outline: "none", minWidth: "0px" }} />
        <span className="kbd">
          {"⌘K"}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span className="muted" style={{ fontSize: "13px" }}>
          {"周六 11/07 · 16:20"}
        </span>
        <button className="btn" type="button" aria-label="通知：即时 2 条，其余在 18:00 合并为摘要">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>
          {"即时 2"}
          <span className="muted" style={{ fontWeight: "400" }}>
            {"· 摘要 18:00"}
          </span>
        </button>
      </div>
    </header>
  );
}
