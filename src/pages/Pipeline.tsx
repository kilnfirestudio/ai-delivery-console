// 采集与处理 · Converted from the "AI 交付全局控制台" design export.


export default function Pipeline() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-cyan float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-cyan)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"采集与处理"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"数据从哪来、怎么变成候选、最后有多少成了知识"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
      </div>
      <section className="card" aria-labelledby="pf-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="pf-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"本周流量"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"原始证据只追加；处理层只写候选区和索引，从不直接写 git"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span className="stage">
              {"持续采集与处理层全量 · 阶段 3"}
            </span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 24px 1fr 24px 1fr 24px 1.1fr 24px 1.1fr", gap: "6px", alignItems: "stretch", overflowX: "auto" }}>
          <div style={{ background: "rgb(249, 250, 251)", borderRadius: "10px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0px" }}>
            <span className="lbl">
              {"1 采集 · 原始证据"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600" }}>
              {"351 份"}
            </span>
            <div title="git 提交 · 138" style={{ display: "grid", gridTemplateColumns: "100px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
              <span>
                {"git 提交"}
              </span>
              <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "100%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"138"}
              </span>
            </div>
            <div title="截图 · 96" style={{ display: "grid", gridTemplateColumns: "100px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
              <span>
                {"截图"}
              </span>
              <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "70%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"96"}
              </span>
            </div>
            <div title="AI 网页对话导出 · 64" style={{ display: "grid", gridTemplateColumns: "100px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
              <span>
                {"AI 网页对话导出"}
              </span>
              <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "46%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"64"}
              </span>
            </div>
            <div title="agent 会话 · 41" style={{ display: "grid", gridTemplateColumns: "100px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
              <span>
                {"agent 会话"}
              </span>
              <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "30%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"41"}
              </span>
            </div>
            <div title="客户沟通 · 12" style={{ display: "grid", gridTemplateColumns: "100px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
              <span>
                {"客户沟通"}
              </span>
              <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "9%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"12"}
              </span>
            </div>
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
          <div style={{ background: "rgb(249, 250, 251)", borderRadius: "10px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0px" }}>
            <span className="lbl">
              {"2 处理层提炼"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600" }}>
              {"23 次运行"}
            </span>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"提炼候选"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"9"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"去重聚类"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"5"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"有效期复查"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"3"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"其他"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"6"}
              </span>
            </div>
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
          <div style={{ background: "rgb(249, 250, 251)", borderRadius: "10px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0px" }}>
            <span className="lbl">
              {"3 候选"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600" }}>
              {"16 条"}
            </span>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"来自 agent 回写"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"11"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"来自处理层"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"5"}
              </span>
            </div>
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
          <div style={{ background: "rgb(249, 250, 251)", borderRadius: "10px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0px" }}>
            <span className="lbl">
              {"4 确认"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600" }}>
              {"15 条已处理"}
            </span>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"你审核"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"9（确认 7 · 驳回 2）"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"委托规则"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"6"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"仍在候选区"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"1"}
              </span>
            </div>
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
          <div style={{ background: "rgb(249, 250, 251)", borderRadius: "10px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px", minWidth: "0px" }}>
            <span className="lbl">
              {"5 入库"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600" }}>
              {"13 条"}
            </span>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"新增条目"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"5"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"修订"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"1"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"取代"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"1"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span className="muted">
                {"并入已有条目作证据"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"6"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1.6 1 600px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="ps-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="ps-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"来源"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"入口即标注来源、时间、项目、可见范围、可信度"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "860px" }}>
                <thead>
                  <tr>
                    <th scope="col">
                      {"来源"}
                    </th>
                    <th scope="col">
                      {"采集方式"}
                    </th>
                    <th scope="col">
                      {"设备"}
                    </th>
                    <th scope="col">
                      {"最近同步"}
                    </th>
                    <th scope="col">
                      {"本周"}
                    </th>
                    <th scope="col">
                      {"状态"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {"Claude Code 会话"}
                    </td>
                    <td>
                      {"hooks：会话结束自动回写"}
                    </td>
                    <td>
                      {"M5 Pro"}
                    </td>
                    <td>
                      {"16:05"}
                    </td>
                    <td>
                      {"27"}
                    </td>
                    <td>
                      <span className="chip s-done">
                        {"正常"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Codex 会话"}
                    </td>
                    <td>
                      {"hooks"}
                    </td>
                    <td>
                      {"M5 Pro · 云端"}
                    </td>
                    <td>
                      {"15:50"}
                    </td>
                    <td>
                      {"9"}
                    </td>
                    <td>
                      <span className="chip s-you">
                        {"云端会话未接网关"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Cursor 会话"}
                    </td>
                    <td>
                      {"采集程序"}
                    </td>
                    <td>
                      {"MacBook Air"}
                    </td>
                    <td>
                      {"15:58"}
                    </td>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      <span className="chip s-done">
                        {"正常"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"GPT · Gemini · Grok 网页对话"}
                    </td>
                    <td>
                      {"手动导出，作为原始证据"}
                    </td>
                    <td>
                      {"两台"}
                    </td>
                    <td>
                      {"11/06"}
                    </td>
                    <td>
                      {"38"}
                    </td>
                    <td>
                      <span className="chip s-queue">
                        {"AI 的建议≠你的决定"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"Claude 网页对话"}
                    </td>
                    <td>
                      {"导出"}
                    </td>
                    <td>
                      {"两台"}
                    </td>
                    <td>
                      {"11/07"}
                    </td>
                    <td>
                      {"26"}
                    </td>
                    <td>
                      <span className="chip s-done">
                        {"正常"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"git 历史"}
                    </td>
                    <td>
                      {"仓库钩子"}
                    </td>
                    <td>
                      {"VPS"}
                    </td>
                    <td>
                      {"16:02"}
                    </td>
                    <td>
                      {"138"}
                    </td>
                    <td>
                      <span className="chip s-done">
                        {"正常"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"截图"}
                    </td>
                    <td>
                      {"回归脚本 + 手动上传"}
                    </td>
                    <td>
                      {"M5 Pro"}
                    </td>
                    <td>
                      {"15:45"}
                    </td>
                    <td>
                      {"96"}
                    </td>
                    <td>
                      <span className="chip s-done">
                        {"正常"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"客户沟通"}
                    </td>
                    <td>
                      {"登记需求时提交"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td>
                      {"11/07"}
                    </td>
                    <td>
                      {"12"}
                    </td>
                    <td>
                      <span className="chip s-done">
                        {"正常"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div style={{ flex: "1 1 320px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="pi-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="pi-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"批量导入"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                <span className="chip s-doing">
                  {"进行中"}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div title="导出的对话 · 1240" style={{ display: "grid", gridTemplateColumns: "90px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
                <span>
                  {"导出的对话"}
                </span>
                <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                  <div className="fill" style={{ width: "100%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
                </div>
                <span style={{ textAlign: "right" }}>
                  {"1240"}
                </span>
              </div>
              <div title="选中导入 · 186" style={{ display: "grid", gridTemplateColumns: "90px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
                <span>
                  {"选中导入"}
                </span>
                <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                  <div className="fill" style={{ width: "15%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
                </div>
                <span style={{ textAlign: "right" }}>
                  {"186"}
                </span>
              </div>
              <div title="提炼出候选 · 41" style={{ display: "grid", gridTemplateColumns: "90px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
                <span>
                  {"提炼出候选"}
                </span>
                <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                  <div className="fill" style={{ width: "3%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
                </div>
                <span style={{ textAlign: "right" }}>
                  {"41"}
                </span>
              </div>
              <div title="已确认 · 22" style={{ display: "grid", gridTemplateColumns: "90px 1fr 36px", gap: "8px", alignItems: "center", fontSize: "12px" }}>
                <span>
                  {"已确认"}
                </span>
                <div style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                  <div className="fill" style={{ width: "2%", height: "10px", background: "rgb(124, 108, 255)", borderRadius: "3px" }} />
                </div>
                <span style={{ textAlign: "right" }}>
                  {"22"}
                </span>
              </div>
            </div>
            <p className="muted" style={{ margin: "12px 0px 0px", fontSize: "12px", lineHeight: "1.6" }}>
              {"导入 #3：2025 年 Shopline 项目对话。已确认 22 · 驳回 11 · 待审 8。历史数据选择性导入，不整包倒进来"}
            </p>
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <button className="btn" type="button">
                {"继续审核 8 条"}
              </button>
              <button className="btn" type="button">
                {"新建导入"}
              </button>
            </div>
          </section>
        </div>
      </div>
      <section className="card" aria-labelledby="pr-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="pr-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"处理运行"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"每次运行都记录为独立活动：模型、提示词版本、输入。质量出问题时能定位到哪次运行"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
          <span>
            {"本月成本 ¥186 / ¥300"}
          </span>
          <span className="muted">
            {"本地模型承担 64% 的运行"}
          </span>
        </div>
        <div className="bar" role="img" aria-label="预算已用 62%">
          <div className="fill f-doing" style={{ width: "62%" }} />
        </div>
        <div style={{ height: "16px" }} />
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px" }}>
            <thead>
              <tr>
                <th scope="col">
                  {"编号"}
                </th>
                <th scope="col">
                  {"类型"}
                </th>
                <th scope="col">
                  {"输入"}
                </th>
                <th scope="col">
                  {"模型 · 提示词版本"}
                </th>
                <th scope="col">
                  {"用时"}
                </th>
                <th scope="col">
                  {"成本"}
                </th>
                <th scope="col">
                  {"产出"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="mono">
                    {"PR-0907"}
                  </span>
                </td>
                <td>
                  {"提炼候选"}
                </td>
                <td>
                  {"T2 会话记录"}
                </td>
                <td>
                  {"本地 · extract v6"}
                </td>
                <td>
                  {"42 秒"}
                </td>
                <td>
                  {"¥0"}
                </td>
                <td>
                  {"1 条候选 C-0219"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"PR-0906"}
                  </span>
                </td>
                <td>
                  {"去重聚类"}
                </td>
                <td>
                  {"候选区 9 条"}
                </td>
                <td>
                  {"云端 · dedup v3"}
                </td>
                <td>
                  {"18 秒"}
                </td>
                <td>
                  {"¥0.8"}
                </td>
                <td>
                  {"合并 3 组重复"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"PR-0905"}
                  </span>
                </td>
                <td>
                  {"有效期复查"}
                </td>
                <td>
                  {"到期 14 条"}
                </td>
                <td>
                  {"本地 · review v2"}
                </td>
                <td>
                  {"1 分 05 秒"}
                </td>
                <td>
                  {"¥0"}
                </td>
                <td>
                  {"标记 2 条可能过时"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"PR-0904"}
                  </span>
                </td>
                <td>
                  {"热区生成"}
                </td>
                <td>
                  {"bundle 插件 L0–L2"}
                </td>
                <td>
                  {"规则脚本"}
                </td>
                <td>
                  {"3 秒"}
                </td>
                <td>
                  {"¥0"}
                </td>
                <td>
                  {"热区 v19，128 行"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"PR-0903"}
                  </span>
                </td>
                <td>
                  {"知识库回归"}
                </td>
                <td>
                  {"12 个基准问题"}
                </td>
                <td>
                  {"云端 · qa v4"}
                </td>
                <td>
                  {"2 分 10 秒"}
                </td>
                <td>
                  {"¥2.1"}
                </td>
                <td>
                  {"11 / 12 通过"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"PR-0902"}
                  </span>
                </td>
                <td>
                  {"对抗性复审"}
                </td>
                <td>
                  {"K-015 v3"}
                </td>
                <td>
                  {"云端 · critic v2"}
                </td>
                <td>
                  {"36 秒"}
                </td>
                <td>
                  {"¥0.6"}
                </td>
                <td>
                  {"未发现问题"}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mono">
                    {"PR-0901"}
                  </span>
                </td>
                <td>
                  {"指标计算"}
                </td>
                <td>
                  {"本周任务与事件"}
                </td>
                <td>
                  {"规则脚本"}
                </td>
                <td>
                  {"9 秒"}
                </td>
                <td>
                  {"¥0"}
                </td>
                <td>
                  {"更新 4 个核心指标"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
