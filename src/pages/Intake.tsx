// 登记需求 · Converted from the "AI 交付全局控制台" design export.


export default function Intake() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-green float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-green)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M9 14h6" />
                  <path d="M12 17v-6" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"登记需求"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"把客户原话交给系统，拆分要等客户确认需求单之后。示例是 11/05 登记 TASK-0412 时的样子"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <ol aria-label="步骤" style={{ listStyle: "none", margin: "0px", padding: "0px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgb(110, 92, 246)", color: "rgb(255, 255, 255)" }}>
                  {"1"}
                </span>
                <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(141, 182, 255)" }}>
                  {"登记"}
                </span>
              </li>
              <li aria-hidden="true" style={{ flex: "0 0 40px", height: "1px", background: "rgba(255, 255, 255, 0.14)" }} />
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "rgb(161, 166, 176)" }}>
                  {"2"}
                </span>
                <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(161, 166, 176)" }}>
                  {"确认"}
                </span>
              </li>
              <li aria-hidden="true" style={{ flex: "0 0 40px", height: "1px", background: "rgba(255, 255, 255, 0.14)" }} />
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "rgb(161, 166, 176)" }}>
                  {"3"}
                </span>
                <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(161, 166, 176)" }}>
                  {"拆分"}
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 420px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="in-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="in-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"1 · 客户原话"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"一次提交同时生成任务和证据"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <form style={{ display: "flex", flexDirection: "column", gap: "16px" }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div className="field">
                  <label htmlFor="pj">
                    {"项目"}
                  </label>
                  <select id="pj" className="inp">
                    <option>
                      {"Shopline bundle 插件"}
                    </option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="cl">
                    {"客户"}
                  </label>
                  <select id="cl" className="inp">
                    <option>
                      {"客户 A · 户外品牌"}
                    </option>
                  </select>
                </div>
              </div>
              <div className="field">
                <span style={{ fontSize: "13px", fontWeight: "600" }}>
                  {"来源"}
                </span>
                <div className="seg" role="group" aria-label="来源">
                  <button type="button" aria-pressed="true">
                    {"微信"}
                  </button>
                  <button type="button" aria-pressed="false">
                    {"邮件"}
                  </button>
                  <button type="button" aria-pressed="false">
                    {"会议记录"}
                  </button>
                  <button type="button" aria-pressed="false">
                    {"其他"}
                  </button>
                </div>
              </div>
              <div className="field">
                <label htmlFor="raw">
                  {"客户原话 "}
                  <span className="muted" style={{ fontWeight: "400" }}>
                    {"原样粘贴，不要改写"}
                  </span>
                </label>
                <textarea defaultValue={"黑五活动页那个套装卡片，手机上图片被裁掉一半，能不能手机单独设置图片？\n另外对比表那里想加个“限时”标签，客服弹窗的图标换成我们新的。\n标题想再大一点，36 号字。周日前要上线，上线前先给我们看预览。"} id="raw" className="inp" rows={6} style={{ resize: "vertical", lineHeight: "1.6" }} />
              </div>
              <div className="field">
                <span style={{ fontSize: "13px", fontWeight: "600" }}>
                  {"截图与附件"}
                </span>
                <div className="ants" style={{ border: "1.5px dashed rgba(255, 255, 255, 0.12)", borderRadius: "10px", padding: "14px", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                    <div aria-hidden="true" style={{ width: "72px", height: "110px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.12)", background: "rgb(22, 23, 26)", padding: "6px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ height: "8px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                      <span style={{ height: "34px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "2px" }} />
                      <span style={{ height: "6px", width: "70%", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                      <span style={{ height: "18px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                    </div>
                    <span className="muted" style={{ fontSize: "11px" }}>
                      {"手机首页.png"}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                    <div aria-hidden="true" style={{ width: "72px", height: "110px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.12)", background: "rgb(22, 23, 26)", padding: "6px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ height: "8px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                      <span style={{ height: "34px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "2px" }} />
                      <span style={{ height: "6px", width: "70%", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                      <span style={{ height: "18px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                    </div>
                    <span className="muted" style={{ fontSize: "11px" }}>
                      {"对比表.png"}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                    <div aria-hidden="true" style={{ width: "72px", height: "110px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.12)", background: "rgb(22, 23, 26)", padding: "6px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ height: "8px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                      <span style={{ height: "34px", background: "rgba(255, 255, 255, 0.14)", borderRadius: "2px" }} />
                      <span style={{ height: "6px", width: "70%", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                      <span style={{ height: "18px", background: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }} />
                    </div>
                    <span className="muted" style={{ fontSize: "11px" }}>
                      {"新图标.svg"}
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.6" }}>
                    {"拖入截图、文件，或直接粘贴"}
                    <br />
                    {"⌘V 粘贴剪贴板里的截图"}
                  </span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div className="field">
                  <label htmlFor="dl">
                    {"期望上线"}
                  </label>
                  <input id="dl" className="inp" defaultValue={"11/09 周日"} />
                </div>
                <div className="field">
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {"可见范围"}
                  </span>
                  <div className="inp" style={{ display: "flex", alignItems: "center", color: "rgb(161, 166, 176)" }}>
                    {"只限客户 A（自动）"}
                  </div>
                </div>
              </div>
              <div style={{ padding: "12px 14px", borderRadius: "10px", background: "rgb(249, 250, 251)", fontSize: "13px", lineHeight: "1.6" }}>
                {"原话和截图会作为证据原样保存，按客户 A 加密，只追加不修改。登记后生成任务编号。"}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <button className="btn btn-p" type="button">
                  {"登记并起草确认单"}
                </button>
                <button className="btn" type="button">
                  {"只登记"}
                </button>
              </div>
            </form>
          </section>
        </div>
        <div style={{ flex: "1.2 1 480px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="paper" aria-labelledby="cf-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="cf-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"2 · 确认单草稿"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"发给客户前你要看一遍"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                <span className="chip s-doing">
                  {"草稿"}
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"需求拆分 agent 11/05 16:12 起草 · 检索 8 条 · 引用 5 条"}
                </span>
              </div>
              <div>
                <h3 style={{ margin: "0px 0px 8px", fontSize: "15px", fontWeight: "600" }}>
                  {"我们理解的需求"}
                </h3>
                <ul style={{ margin: "0px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px", fontSize: "14px", lineHeight: "1.6" }}>
                  <li>
                    {"Black Friday 页面的 bundle 卡片，移动端可单独设置图片，不再被裁切"}
                  </li>
                  <li>
                    {"对比表里参加活动的商品加“限时”标签"}
                  </li>
                  <li>
                    {"客服弹窗换成新图标"}
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ margin: "0px 0px 4px", fontSize: "15px", fontWeight: "600" }}>
                  {"验收标准 · 6"}
                </h3>
                <ol style={{ margin: "0px", padding: "0px", listStyle: "none", display: "flex", flexDirection: "column" }}>
                  <li style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: "10px", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                    <span className="muted mono" style={{ paddingTop: "2px" }}>
                      {"1"}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {"所有 bundle 卡片显示活动折扣价与原价"}
                      </span>
                      <span className="muted" style={{ fontSize: "12px" }}>
                        {"来源：原话第 1 句"}
                      </span>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: "10px", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                    <span className="muted mono" style={{ paddingTop: "2px" }}>
                      {"2"}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {"对比表中参加活动的商品显示“限时”标签"}
                      </span>
                      <span className="muted" style={{ fontSize: "12px" }}>
                        {"来源：原话第 2 句"}
                      </span>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: "10px", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                    <span className="muted mono" style={{ paddingTop: "2px" }}>
                      {"3"}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {"移动端卡片图片不变形、不裁掉商品主体"}
                      </span>
                      <span className="muted" style={{ fontSize: "12px" }}>
                        {"来源：原话第 1 句 + 截图 手机首页.png"}
                      </span>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: "10px", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                    <span className="muted mono" style={{ paddingTop: "2px" }}>
                      {"4"}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {"客服弹窗使用新图标，点击行为不变"}
                      </span>
                      <span className="muted" style={{ fontSize: "12px" }}>
                        {"来源：原话第 2 句 + 附件 新图标.svg"}
                      </span>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: "10px", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                    <span className="muted mono" style={{ paddingTop: "2px" }}>
                      {"5"}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {"活动结束后自动恢复原样式"}
                      </span>
                      <span className="muted" style={{ fontSize: "12px" }}>
                        {"来源：历史需求 TASK-0361 的同类要求"}
                      </span>
                    </div>
                  </li>
                  <li style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: "10px", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                    <span className="muted mono" style={{ paddingTop: "2px" }}>
                      {"6"}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                        {"原有加购、折扣叠加逻辑不受影响"}
                      </span>
                      <span className="muted" style={{ fontSize: "12px" }}>
                        {"来源：冻结清单"}
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
              <div>
                <h3 style={{ margin: "0px 0px 8px", fontSize: "15px", fontWeight: "600" }}>
                  {"本次不包括"}
                </h3>
                <ul style={{ margin: "0px", paddingLeft: "20px", fontSize: "14px", lineHeight: "1.6" }}>
                  <li>
                    {"桌面端布局调整"}
                  </li>
                  <li>
                    {"结账和支付流程"}
                  </li>
                </ul>
              </div>
              <div>
                <h3 style={{ margin: "0px 0px 8px", fontSize: "15px", fontWeight: "600" }}>
                  {"需要客户回答 · 2"}
                </h3>
                <ul style={{ margin: "0px", paddingLeft: "20px", fontSize: "14px", lineHeight: "1.6" }}>
                  <li>
                    {"标题 36 号字超过了移动端常用上限 28px，是否只用于桌面端？"}
                  </li>
                  <li>
                    {"“限时”标签的结束时间按哪个时区？"}
                  </li>
                </ul>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <button className="btn btn-p" type="button">
                  {"复制确认单文本"}
                </button>
                <button className="btn" type="button">
                  {"生成客户共享链接"}
                </button>
                <button className="btn" type="button">
                  {"修改"}
                </button>
              </div>
              <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.6" }}>
                {"对外承诺属于后果大的决定，确认单只能由你发出。客户的回复登记回来后，作为证据进入第 2 步。"}
              </p>
            </div>
          </section>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px", alignItems: "stretch" }}>
        <section className="card" aria-labelledby="kc-h" style={{ minWidth: "0px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <h2 id="kc-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"用到的已有知识"}
              </h2>
              <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                {"起草时自动检索，每条都可点开"}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
          </div>
          <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"C-A-001 先给预览站链接，确认后再上线"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"客户 A · 默认 · 已写进确认单的流程"}
                </span>
              </div>
              <div>
                <span className="chip s-done">
                  {"已用"}
                </span>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"C-A-003 品牌色与 logo 区不可改"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"客户 A · 红线"}
                </span>
              </div>
              <div>
                <span className="chip s-done">
                  {"已用"}
                </span>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"K-008 移动端标题不超过 28px"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"Shopline 领域 · 与客户要求的 36px 冲突，已转成问题问客户"}
                </span>
              </div>
              <div>
                <span className="chip s-risk">
                  {"冲突"}
                </span>
              </div>
            </li>
          </ul>
        </section>
        <section className="card" aria-labelledby="hs-h" style={{ minWidth: "0px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <h2 id="hs-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"相似的历史需求"}
              </h2>
              <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                {"上次踩过的坑会提前出现在这里"}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
          </div>
          <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"TASK-0388 移动端商品图修改"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"9 月 · 返工 2 次 · 原因：CSS 硬裁，已沉淀为 K-027"}
                </span>
              </div>
              <div>
                <span className="chip s-queue">
                  {"相似 0.82"}
                </span>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"TASK-0361 双十一活动页"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"10 月 · 一次通过 · 活动结束自动恢复的做法可复用"}
                </span>
              </div>
              <div>
                <span className="chip s-queue">
                  {"相似 0.71"}
                </span>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
