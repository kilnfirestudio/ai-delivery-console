// 分发 · Converted from the "AI 交付全局控制台" design export.


export default function Distribution() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-blue float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-blue)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"分发"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"知识通过四种通道到达 agent：热区本地保底，网关远程增强"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", alignItems: "stretch" }}>
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "15px", fontWeight: "600" }}>
            {"静态注入 · 热区"}
          </span>
          <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
            {"红线和最核心约定，生成到各项目的 AGENTS.md 等文件；网关不可用时兜底"}
          </span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <span className="chip s-you">
              {"可观测：否"}
            </span>
          </div>
        </div>
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "15px", fontWeight: "600" }}>
            {"按需检索 · MCP"}
          </span>
          <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
            {"大部分规则、踩坑、客户信息；所有工具接同一个网关"}
          </span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <span className="chip s-done">
              {"可观测：是"}
            </span>
          </div>
        </div>
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "15px", fontWeight: "600" }}>
            {"技能"}
          </span>
          <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
            {"可复用的做事流程，渐进加载"}
          </span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <span className="chip s-queue">
              {"可观测：部分"}
            </span>
          </div>
        </div>
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span style={{ fontSize: "15px", fontWeight: "600" }}>
            {"回写"}
          </span>
          <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
            {"任务结果、会话归档、候选知识"}
          </span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <span className="chip s-done">
              {"可观测：是"}
            </span>
          </div>
        </div>
      </div>
      <section className="card" aria-labelledby="dh-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="dh-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"热区文件"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"热区越小越好：它的遵守情况网关看不到"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
            <thead>
              <tr>
                <th scope="col">
                  {"项目"}
                </th>
                <th scope="col">
                  {"版本"}
                </th>
                <th scope="col">
                  {"长度"}
                </th>
                <th scope="col">
                  {"内容"}
                </th>
                <th scope="col">
                  {"生成时间"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {"bundle 插件"}
                </td>
                <td>
                  <span className="mono">
                    {"v19"}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "160px" }}>
                    <div title="128 / 150 行" style={{ height: "8px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px" }}>
                      <div className="fill" style={{ width: "85%", height: "8px", background: "rgb(220, 104, 3)", borderRadius: "4px" }} />
                    </div>
                    <span style={{ fontSize: "12px" }}>
                      {"128 / 150 行"}
                    </span>
                  </div>
                </td>
                <td>
                  {"红线 6 · 核心约定 22"}
                </td>
                <td>
                  {"16:00"}
                </td>
              </tr>
              <tr>
                <td>
                  {"xuvia"}
                </td>
                <td>
                  <span className="mono">
                    {"v7"}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "160px" }}>
                    <div title="96 / 150 行" style={{ height: "8px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px" }}>
                      <div className="fill" style={{ width: "64%", height: "8px", background: "rgb(124, 108, 255)", borderRadius: "4px" }} />
                    </div>
                    <span style={{ fontSize: "12px" }}>
                      {"96 / 150 行"}
                    </span>
                  </div>
                </td>
                <td>
                  {"红线 4 · 核心约定 15"}
                </td>
                <td>
                  {"11/05"}
                </td>
              </tr>
              <tr>
                <td>
                  {"个人站"}
                </td>
                <td>
                  <span className="mono">
                    {"v5"}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "160px" }}>
                    <div title="74 / 150 行" style={{ height: "8px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px" }}>
                      <div className="fill" style={{ width: "49%", height: "8px", background: "rgb(124, 108, 255)", borderRadius: "4px" }} />
                    </div>
                    <span style={{ fontSize: "12px" }}>
                      {"74 / 150 行"}
                    </span>
                  </div>
                </td>
                <td>
                  {"红线 3 · 核心约定 11"}
                </td>
                <td>
                  {"11/02"}
                </td>
              </tr>
              <tr>
                <td>
                  {"直播语音"}
                </td>
                <td>
                  <span className="mono">
                    {"v3"}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "160px" }}>
                    <div title="61 / 150 行" style={{ height: "8px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "4px" }}>
                      <div className="fill" style={{ width: "41%", height: "8px", background: "rgb(124, 108, 255)", borderRadius: "4px" }} />
                    </div>
                    <span style={{ fontSize: "12px" }}>
                      {"61 / 150 行"}
                    </span>
                  </div>
                </td>
                <td>
                  {"红线 2 · 核心约定 9"}
                </td>
                <td>
                  {"10/12"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="muted" style={{ margin: "10px 0px 0px", fontSize: "12px" }}>
          {"同一份内容生成 AGENTS.md、CLAUDE.md、GEMINI.md 和 Cursor 规则。超过 120 行时标橙，提醒精简"}
        </p>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1.4 1 560px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="dm-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="dm-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"设备同步"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"任务记录会写明所用热区版本：T1、T2、T3 用 v19，X-0031 用 v7，P-0012 用 v5"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
                <thead>
                  <tr>
                    <th scope="col">
                      {"项目"}
                    </th>
                    <th scope="col">
                      {"M5 Pro"}
                    </th>
                    <th scope="col">
                      {"MacBook Air"}
                    </th>
                    <th scope="col">
                      {"Codex 云端"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {"bundle 插件"}
                    </td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="chip s-done">
                          {"v19 · 最新"}
                        </span>
                        <span className="muted" style={{ fontSize: "12px" }}>
                          {"16:01"}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="chip s-risk">
                          {"v18 · 落后"}
                        </span>
                        <span className="muted" style={{ fontSize: "12px" }}>
                          {"缺 K-021，Air 未联网同步"}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="chip s-done">
                          {"v19 · 最新"}
                        </span>
                        <span className="muted" style={{ fontSize: "12px" }}>
                          {"16:02"}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"xuvia"}
                    </td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="chip s-done">
                          {"v7 · 最新"}
                        </span>
                        <span className="muted" style={{ fontSize: "12px" }} />
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="chip s-done">
                          {"v7 · 最新"}
                        </span>
                        <span className="muted" style={{ fontSize: "12px" }} />
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="chip s-risk">
                          {"v6 · 落后"}
                        </span>
                        <span className="muted" style={{ fontSize: "12px" }}>
                          {"云端会话未接网关，热区也没更新"}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"个人站"}
                    </td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="chip s-done">
                          {"v5 · 最新"}
                        </span>
                        <span className="muted" style={{ fontSize: "12px" }} />
                      </div>
                    </td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span className="chip s-done">
                          {"v5 · 最新"}
                        </span>
                        <span className="muted" style={{ fontSize: "12px" }} />
                      </div>
                    </td>
                    <td>
                      <span className="muted">
                        {"未使用"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <button className="btn btn-p" type="button">
                {"同步落后的 2 处"}
              </button>
            </div>
          </section>
          <section className="card" aria-labelledby="dk-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="dk-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"技能"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"平时只加载名称和简介，用到时才读全文"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"shopline-section-dev"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"Shopline 区块开发流程 · v4 · 开发 A、B、C"}
                  </span>
                </div>
                <div>
                  <span className="chip s-queue">
                    {"用了 31 次"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"regression-screenshot"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"截图回归与差异标注 · v2 · 审查回归 agent"}
                  </span>
                </div>
                <div>
                  <span className="chip s-queue">
                    {"用了 12 次"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"confirm-sheet-draft"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"确认单起草 · v3 · 需求拆分 agent"}
                  </span>
                </div>
                <div>
                  <span className="chip s-queue">
                    {"用了 6 次"}
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div style={{ flex: "1 1 380px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="dd-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="dd-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"最近一次变化"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <pre className="mono" style={{ margin: "0px", padding: "14px", background: "rgb(249, 250, 251)", borderRadius: "10px", fontSize: "12px", lineHeight: "1.8", overflowX: "auto", whiteSpace: "pre-wrap" }}>
              <span style={{ color: "rgb(161, 166, 176)" }}>
                {"bundle 插件 · v18 → v19 · 11/07 16:00 · PR-0904"}
              </span>
              <span style={{ color: "rgb(86, 211, 100)" }}>
                {"+ 多个子任务共用的文件，先单独改完再并行（K-021）"}
              </span>
              <span style={{ color: "rgb(86, 211, 100)" }}>
                {"+ 折扣标签在窄屏不换行（K-118）"}
              </span>
              <span style={{ color: "rgb(255, 123, 114)" }}>
                {"- 商品图统一 1:1 裁切（K-011，已被 K-027 取代）"}
              </span>
            </pre>
          </section>
          <section className="card" aria-labelledby="dc-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="dc-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"客户共享与公开发布"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"对外的内容一律由你发出"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"客户 A · TASK-0412 确认单 v2"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"11/05 客户已确认 · 客户查看 3 次"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"已共享"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"客户 A · 预览站验收页"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"T4 回归通过后生成"}
                  </span>
                </div>
                <div>
                  <span className="chip s-queue">
                    {"未生成"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"个人站 · 案例“Shopline bundle 插件”"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"公开发布：已去掉客户名称和数据，等你确认"}
                  </span>
                </div>
                <div>
                  <span className="chip s-you">
                    {"等你"}
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
