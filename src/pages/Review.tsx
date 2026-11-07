// 待审 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Review() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span className="gt gt-amber float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              </svg>
            </span>
            <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
              {"待审"}
            </h1>
          </div>
          <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px" }}>
            {"需要你决定或确认的事。阻塞任务的排在最前面，其余按后果排序"}
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          <span className="chip s-risk">
            {"阻塞任务 2"}
          </span>
          <span className="chip s-you">
            {"需要你确认 3"}
          </span>
          <span className="chip s-queue">
            {"抽检与复验 2"}
          </span>
        </div>
      </div>
      <section className="card" aria-labelledby="hl-h">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
          <h2 id="hl-h" style={{ margin: "0px", fontSize: "16px", fontWeight: "600" }}>
            {"审核健康 · 本周"}
          </h2>
          <span className="muted" style={{ fontSize: "13px" }}>
            {"用来发现两种失效：你审得太快变成走过场，委托规则放进了错的东西"}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span className="muted" style={{ fontSize: "13px" }}>
              <span className="sc-interp">
                {"你审核"}
              </span>
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"9 条"}
              </span>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"驳回 2 条，占 22%"}
              </span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span className="muted" style={{ fontSize: "13px" }}>
              <span className="sc-interp">
                {"每条平均用时"}
              </span>
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"1 分 40 秒"}
              </span>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"上周 2 分 05 秒"}
              </span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span className="muted" style={{ fontSize: "13px" }}>
              <span className="sc-interp">
                {"30 秒内就通过"}
              </span>
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"1 条"}
              </span>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(242, 193, 78)", fontWeight: "500" }}>
              <span className="sc-interp">
                {"可能看得太快，已标记复看"}
              </span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span className="muted" style={{ fontSize: "13px" }}>
              <span className="sc-interp">
                {"委托规则自动确认"}
              </span>
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"6 条"}
              </span>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"规则 v3，只覆盖低风险"}
              </span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span className="muted" style={{ fontSize: "13px" }}>
              <span className="sc-interp">
                {"混入错误候选"}
              </span>
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"1 / 1"}
              </span>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(86, 211, 100)" }}>
              <span className="sc-interp">
                {"已知有错的测试候选被你驳回"}
              </span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span className="muted" style={{ fontSize: "13px" }}>
              <span className="sc-interp">
                {"抽检"}
              </span>
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"2 条"}
              </span>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(86, 211, 100)" }}>
              <span className="sc-interp">
                {"发现问题 0 条"}
              </span>
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span className="muted" style={{ fontSize: "13px" }}>
              <span className="sc-interp">
                {"确认后被推翻"}
              </span>
            </span>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"1 条"}
              </span>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"近 30 天，K-015 修订"}
              </span>
            </span>
          </div>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <section aria-labelledby="q-h" style={{ flex: "1 1 360px", maxWidth: "440px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <h2 id="q-h" style={{ margin: "0px", fontSize: "16px", fontWeight: "600" }}>
            {"队列 · 7"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ margin: "0px", fontSize: "12px", fontWeight: "600", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"阻塞任务"}
              </span>
            </p>
            <Link to="/task" aria-current="false" style={{ textDecoration: "none", color: "rgb(237, 238, 240)", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <span className="chip s-you">
                  <span className="sc-interp">
                    {"求助"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"69 分钟"}
                  </span>
                </span>
              </div>
              <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"T2 是否允许修改共用 CSS"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"Black Friday 改版 · 开发 C 停在检查点 2"}
                </span>
              </span>
            </Link>
            <Link to="/breakdown" aria-current="false" style={{ textDecoration: "none", color: "rgb(237, 238, 240)", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <span className="chip s-risk">
                  <span className="sc-interp">
                    {"冲突"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"40 分钟"}
                  </span>
                </span>
              </div>
              <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"客户要求标题 36px，与 K-008 冲突"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"影响验收标准第 1 条 · 裁决规则分不出"}
                </span>
              </span>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ margin: "0px", fontSize: "12px", fontWeight: "600", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"需要你确认"}
              </span>
            </p>
            <Link to="/review" aria-current="true" style={{ textDecoration: "none", color: "rgb(237, 238, 240)", background: "rgb(22, 23, 26)", border: "1px solid rgb(110, 92, 246)", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px", boxShadow: "rgb(110, 92, 246) 0px 0px 0px 1px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <span className="chip s-doing">
                  <span className="sc-interp">
                    {"候选"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"14:40"}
                  </span>
                </span>
              </div>
              <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"客户 A 移动端断点为 750px"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"客户层 · 来自 T2"}
                </span>
              </span>
            </Link>
            <Link to="/review" aria-current="false" style={{ textDecoration: "none", color: "rgb(237, 238, 240)", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <span className="chip s-doing">
                  <span className="sc-interp">
                    {"候选"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"13:15"}
                  </span>
                </span>
              </div>
              <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"xuvia 选题接口单次最多返回 50 条"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"项目层 · 高后果：影响批量生成"}
                </span>
              </span>
            </Link>
            <Link to="/knowledge/item" aria-current="false" style={{ textDecoration: "none", color: "rgb(237, 238, 240)", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <span className="chip s-done">
                  <span className="sc-interp">
                    {"上提"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"11:30"}
                  </span>
                </span>
              </div>
              <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"K-027 从项目层上提到 Shopline 领域层"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"已在 2 个客户主题验证"}
                </span>
              </span>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ margin: "0px", fontSize: "12px", fontWeight: "600", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"抽检与复验"}
              </span>
            </p>
            <Link to="/review" aria-current="false" style={{ textDecoration: "none", color: "rgb(237, 238, 240)", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <span className="chip s-queue">
                  <span className="sc-interp">
                    {"抽检"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"10:05"}
                  </span>
                </span>
              </div>
              <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"委托规则自动确认：个人站图片统一用 webp"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"低风险自动确认后的随机抽检"}
                </span>
              </span>
            </Link>
            <Link to="/knowledge" aria-current="false" style={{ textDecoration: "none", color: "rgb(237, 238, 240)", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                <span className="chip s-queue">
                  <span className="sc-interp">
                    {"复验"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"昨天"}
                  </span>
                </span>
              </div>
              <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"K-061 Codex 需要显式写出文件清单"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"模型升级后可能不再需要 · 建议做消融测试"}
                </span>
              </span>
            </Link>
          </div>
        </section>
        <section className="card" aria-labelledby="dt-h" style={{ flex: "999 1 640px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span className="chip s-doing">
                {"候选"}
              </span>
              <span className="chip s-you">
                {"客户层 · 必须由你确认"}
              </span>
            </div>
            <h2 id="dt-h" style={{ margin: "0px", fontSize: "22px", fontWeight: "600", lineHeight: "1.4" }}>
              {"客户 A 主题的移动端断点是 750px，不是默认的 768px"}
            </h2>
            <p className="muted" style={{ margin: "0px", fontSize: "13px" }}>
              {"C-0219 · 来自 T2 · 开发 C 在 14:40 提交 · 处理运行 PR-0907 补全了字段和去重"}
            </p>
          </div>
          <div style={{ padding: "12px 14px", borderRadius: "10px", background: "rgba(227, 160, 8, 0.08)", fontSize: "13px", lineHeight: "1.6" }}>
            <strong style={{ fontWeight: "600" }}>
              {"为什么到你这里："}
            </strong>
            {"它属于客户层知识。客户层、红线、跨项目上提、取代已验证的知识，这四类永远由你确认，委托规则不覆盖。\n"}
          </div>
          <div>
            <h3 style={{ margin: "0px 0px 10px", fontSize: "15px", fontWeight: "600" }}>
              {"提议的字段"}
            </h3>
            <dl style={{ margin: "0px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0px 24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "12px", padding: "9px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"层级"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "13px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"L3 客户 A"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "12px", padding: "9px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"类别"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "13px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"技术约束 · 世界的知识"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "12px", padding: "9px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"约束等级"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "13px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"默认"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "12px", padding: "9px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"适用场景"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "13px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"客户 A 主题里所有移动端样式和图片尺寸"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "12px", padding: "9px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"加载方式"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "13px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"冷区，按场景检索"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "12px", padding: "9px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"可信度"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "13px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"初步验证（源码 + 2 张截图）"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "12px", padding: "9px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"可见范围"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "13px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"只对客户 A 的任务可见"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "12px", padding: "9px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"当下条件"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "13px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"客户 A 当前主题版本 2.4；换主题后需复查"}
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 style={{ margin: "0px 0px 10px", fontSize: "15px", fontWeight: "600" }}>
              {"证据 · 3"}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "space-between", padding: "10px 14px", background: "rgb(249, 250, 251)", fontSize: "13px" }}>
                  <span>
                    <span className="mono">
                      {"E-512"}
                    </span>
                    {" · 主题源码 "}
                    <span className="mono">
                      {"layout/theme.liquid"}
                    </span>
                    {" 第 88 行"}
                  </span>
                  <span className="muted">
                    {"哈希 9f3c…a1"}
                  </span>
                </div>
                <pre className="mono" style={{ margin: "0px", padding: "12px 14px", fontSize: "12px", lineHeight: "1.6", overflowX: "auto", color: "rgb(237, 238, 240)" }}>
                  <span style={{ color: "rgb(161, 166, 176)" }}>
                    {"87"}
                  </span>
                  {"  /* mobile */\n"}
                  <span style={{ color: "rgb(161, 166, 176)" }}>
                    {"88"}
                  </span>
                  {"  @media screen and (max-width: 749px) {\n"}
                  <span style={{ color: "rgb(161, 166, 176)" }}>
                    {"89"}
                  </span>
                  {"    .page-width { padding: 0 16px; }"}
                </pre>
              </div>
              <div style={{ border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "10px 14px", display: "flex", gap: "12px", alignItems: "center" }}>
                <div aria-hidden="true" style={{ width: "40px", height: "64px", borderRadius: "6px", background: "rgba(255, 255, 255, 0.08)", flex: "0 0 auto" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "13px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"E-513"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"预览站截图 · iPhone 13"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"749px 处布局切换 · 开发 C 14:38 上传"}
                    </span>
                  </span>
                </div>
              </div>
              <div style={{ border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "10px 14px", display: "flex", gap: "12px", alignItems: "center" }}>
                <div aria-hidden="true" style={{ width: "40px", height: "64px", borderRadius: "6px", background: "rgba(255, 255, 255, 0.08)", flex: "0 0 auto" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "13px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"E-514"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"预览站截图 · 浏览器宽 750px"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"仍是桌面布局 · 开发 C 14:39 上传"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ margin: "0px 0px 10px", fontSize: "15px", fontWeight: "600" }}>
              {"与现有知识的关系"}
            </h3>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"K-112"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"Shopline 主题默认移动端断点 768px"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"L1 Shopline 领域 · 已验证 · 本条在客户 A 范围内覆盖它，需要写明理由"}
                    </span>
                  </span>
                </div>
                <span className="chip s-you">
                  <span className="sc-interp">
                    {"覆盖"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"C-B-004"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"客户 B 移动端断点 768px"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"L3 客户 B · 不同客户，互不可见"}
                    </span>
                  </span>
                </div>
                <span className="chip s-queue">
                  <span className="sc-interp">
                    {"无关"}
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ margin: "0px 0px 10px", fontSize: "15px", fontWeight: "600" }}>
              {"确认后会发生什么"}
            </h3>
            <ol style={{ margin: "0px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", lineHeight: "1.6" }}>
              <li>
                {"先记入事件日志，再由网关写入客户 A 的客户库，不进 git"}
              </li>
              <li>
                {"客户 A 的 agent 查询移动端样式时，这条排在 K-112 前面"}
              </li>
              <li>
                {"K-112 和其他客户不受影响；合作结束销毁客户 A 的密钥时，这条一起销毁"}
              </li>
            </ol>
          </div>
          <form style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "4px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="why" style={{ fontSize: "13px", fontWeight: "600", paddingTop: "14px" }}>
              {"覆盖 K-112 的理由（必填）"}
            </label>
            <textarea id="why" rows={2} placeholder="例如：客户 A 主题沿用旧版断点，源码已确认" style={{ fontFamily: "inherit", fontSize: "14px", padding: "10px 12px", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: "8px", resize: "vertical" }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <button className="btn btn-p" type="button">
                {"确认"}
              </button>
              <button className="btn" type="button">
                {"修改字段后确认"}
              </button>
              <button className="btn" type="button">
                {"驳回"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
