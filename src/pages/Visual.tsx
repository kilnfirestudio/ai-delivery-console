// 截图审核 · Converted from the "AI 交付全局控制台" design export.


export default function Visual() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-cyan float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-cyan)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                  <circle cx="12" cy="12" r="1" />
                  <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"截图审核"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"看每个子任务的截图，以及合并后的回归差异。差异区域自动框出，你只需要判断“是不是预期的”"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "0 1 340px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="vq-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="vq-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"队列"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"你的两个检查点：子任务截图、合并后的回归差异"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    <span className="chip s-you">
                      {"待你看"}
                    </span>
                    {" P-0012 个人站案例页"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"开发 E · 15:45 提交 · 4 台设备"}
                  </span>
                </div>
                <div>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"已等 35 分钟"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    <span className="chip s-done">
                      {"已通过"}
                    </span>
                    {" T0 合并回归"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"审查回归 agent · 11:58 · 12 / 12 项"}
                  </span>
                </div>
                <div>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"今天"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    <span className="chip s-done">
                      {"已通过"}
                    </span>
                    {" P-0011 移动端导航"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"开发 E · 11:50 · 你看过"}
                  </span>
                </div>
                <div>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"今天"}
                  </span>
                </div>
              </li>
            </ul>
          </section>
          <section className="card" aria-labelledby="va-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="va-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"本任务验收标准"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"案例卡片在移动端两列展示"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"对应差异 1"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"满足"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"案例图片有占位尺寸，加载时不跳动"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"录屏 E-622 · 布局偏移 0.01"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"满足"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"其他页面不受影响"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"差异 2 违反"}
                  </span>
                </div>
                <div>
                  <span className="chip s-risk">
                    {"不满足"}
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div style={{ flex: "1 1 640px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="vm-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="vm-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"P-0012 · 案例页"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"个人站 · 开发 E · Cursor · 文件范围 pages/cases/* · 检查点 3 / 5"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                <span className="chip s-you">
                  {"待你看"}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-between", marginBottom: "18px" }}>
              <div className="seg" role="group" aria-label="设备">
                <button type="button" aria-pressed="true">
                  {"iPhone 13 · 6.2%"}
                </button>
                <button type="button" aria-pressed="false">
                  {"Pixel 7 · 6.0%"}
                </button>
                <button type="button" aria-pressed="false">
                  {"iPad mini · 3.1%"}
                </button>
                <button type="button" aria-pressed="false">
                  {"桌面 1440 · 2.4%"}
                </button>
              </div>
              <div className="seg" role="group" aria-label="比对方式">
                <button type="button" aria-pressed="true">
                  {"并排"}
                </button>
                <button type="button" aria-pressed="false">
                  {"叠加"}
                </button>
                <button type="button" aria-pressed="false">
                  {"只看差异"}
                </button>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", justifyContent: "center", padding: "24px", background: "rgb(249, 250, 251)", borderRadius: "12px" }}>
              <figure style={{ margin: "0px", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
                <div style={{ width: "200px", height: "380px", padding: "8px", boxSizing: "border-box", borderRadius: "32px", background: "linear-gradient(145deg, rgb(52, 55, 61), rgb(18, 20, 23))", boxShadow: "rgba(16, 24, 40, 0.28) 0px 16px 32px, rgba(16, 24, 40, 0.2) 0px 2px 4px, rgba(255, 255, 255, 0.15) 0px 1px 0px inset" }}>
                  <div style={{ position: "relative", height: "100%", borderRadius: "24px", background: "rgb(22, 23, 26)", padding: "14px 12px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "8px", overflow: "hidden" }}>
                    <span style={{ height: "12px", width: "60%", background: "rgba(255, 255, 255, 0.08)", borderRadius: "3px" }} />
                    <span style={{ height: "70px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "4px" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ height: "60px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "4px" }} />
                      <span style={{ height: "60px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "4px" }} />
                    </span>
                    <span style={{ marginTop: "30px", height: "30px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px" }} />
                    <span aria-hidden="true" style={{ position: "absolute", inset: "0px", pointerEvents: "none", background: "linear-gradient(115deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 32%)" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "13px", fontWeight: "500" }}>
                  {"基准 · 11/02 验收版"}
                </figcaption>
              </figure>
              <figure style={{ margin: "0px", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
                <div style={{ width: "200px", height: "380px", padding: "8px", boxSizing: "border-box", borderRadius: "32px", background: "linear-gradient(145deg, rgb(52, 55, 61), rgb(18, 20, 23))", boxShadow: "rgba(16, 24, 40, 0.28) 0px 16px 32px, rgba(16, 24, 40, 0.2) 0px 2px 4px, rgba(255, 255, 255, 0.15) 0px 1px 0px inset" }}>
                  <div style={{ position: "relative", height: "100%", borderRadius: "24px", background: "rgb(22, 23, 26)", padding: "14px 12px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "8px", overflow: "hidden" }}>
                    <span style={{ height: "12px", width: "60%", background: "rgba(255, 255, 255, 0.08)", borderRadius: "3px" }} />
                    <span style={{ height: "70px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "4px" }} />
                    <span style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                      <span style={{ height: "60px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "4px" }} />
                      <span style={{ height: "60px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "4px" }} />
                      <span style={{ height: "60px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "4px" }} />
                      <span style={{ height: "60px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "4px" }} />
                    </span>
                    <span style={{ marginTop: "22px", height: "30px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px" }} />
                    <span title="差异 1：案例卡片改为两列" style={{ position: "absolute", left: "6px", right: "6px", top: "118px", height: "132px", border: "2px solid rgb(110, 92, 246)", borderRadius: "4px", background: "rgba(37, 99, 235, 0.06)" }}>
                      <span style={{ position: "absolute", top: "-10px", left: "-10px", width: "20px", height: "20px", borderRadius: "10px", background: "rgb(110, 92, 246)", color: "rgb(255, 255, 255)", fontSize: "11px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {"1"}
                      </span>
                    </span>
                    <span className="diffp" title="差异 2：页脚上边距 24 变 16" style={{ position: "absolute", left: "6px", right: "6px", top: "296px", height: "46px", border: "2px solid rgb(217, 45, 32)", borderRadius: "4px", background: "rgba(217, 45, 32, 0.08)" }}>
                      <span style={{ position: "absolute", top: "-10px", left: "-10px", width: "20px", height: "20px", borderRadius: "10px", background: "rgb(217, 45, 32)", color: "rgb(255, 255, 255)", fontSize: "11px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {"2"}
                      </span>
                    </span>
                    <span className="scan" aria-hidden="true" />
                    <span aria-hidden="true" style={{ position: "absolute", inset: "0px", pointerEvents: "none", background: "linear-gradient(115deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 32%)" }} />
                  </div>
                </div>
                <figcaption style={{ fontSize: "13px", fontWeight: "500" }}>
                  {"本次 · P-0012"}
                </figcaption>
              </figure>
            </div>
          </section>
          <section className="card" aria-labelledby="vd-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="vd-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"差异 · 3 处"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"按“是否在文件范围内”自动初判，最终由你决定"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    <span className="mono" style={{ color: "rgb(141, 182, 255)", fontWeight: "600" }}>
                      {"1"}
                    </span>
                    {" 案例卡片由一列改为两列"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"在本任务文件范围内（pages/cases）· 对应验收标准第 1 条"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"预期"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    <span className="mono" style={{ color: "rgb(255, 123, 114)", fontWeight: "600" }}>
                      {"2"}
                    </span>
                    {" 页脚上边距 24px 变为 16px"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"页脚不在文件范围内 · 很可能是共用样式被带改 · 4 台设备都出现"}
                  </span>
                </div>
                <div>
                  <span className="chip s-risk">
                    {"意外"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    <span className="mono" style={{ color: "rgb(161, 166, 176)", fontWeight: "600" }}>
                      {"3"}
                    </span>
                    {" 标题字体抗锯齿差异 0.1%"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"低于噪声阈值 0.5%，已自动忽略"}
                  </span>
                </div>
                <div>
                  <span className="chip s-queue">
                    {"噪声"}
                  </span>
                </div>
              </li>
            </ul>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "16px" }}>
              <label htmlFor="bk" style={{ fontSize: "13px", fontWeight: "600" }}>
                {"退回说明"}
              </label>
              <textarea defaultValue={"页脚间距不在本任务范围，请恢复，检查是否改了共用样式。"} id="bk" className="inp" rows={2} style={{ resize: "vertical" }} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <button className="btn btn-p" type="button">
                  {"退回并附上差异 2"}
                </button>
                <button className="btn" type="button">
                  {"通过，记录“你看过截图”"}
                </button>
              </div>
              <p className="muted" style={{ margin: "0px", fontSize: "12px" }}>
                {"通过后进入检查点 5：合并回归。退回会计入返工轮数"}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
