// 单条知识 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function KnowledgeItem() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <nav aria-label="位置" className="muted" style={{ fontSize: "13px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
          <Link to="/knowledge">
            {"知识库"}
          </Link>
          <span aria-hidden="true">
            {"/"}
          </span>
          <span>
            {"L2 bundle 插件"}
          </span>
          <span aria-hidden="true">
            {"/"}
          </span>
          <span>
            {"K-027"}
          </span>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span className="gt gt-blue float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-blue)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v16" />
              <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
            </svg>
          </span>
          <h1 style={{ margin: "0px", fontSize: "26px", fontWeight: "600", lineHeight: "1.4" }}>
            {"商品图片的裁切走服务端渲染，不在前端用 CSS 硬裁"}
          </h1>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span className="chip s-done">
            {"已确认"}
          </span>
          <span className="chip s-queue">
            {"规则"}
          </span>
          <span className="chip s-queue">
            {"约束：建议"}
          </span>
          <span className="chip s-doing">
            {"可信度：初步验证"}
          </span>
          <span className="chip s-queue">
            {"L2 bundle 插件"}
          </span>
          <span className="chip s-queue">
            {"v2"}
          </span>
        </div>
      </div>
      <section aria-labelledby="up-h" style={{ background: "rgb(22, 23, 26)", border: "1px solid rgba(124, 108, 255, 0.5)", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between" }}>
          <h2 id="up-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
            {"提议：上提到 L1 Shopline 领域层"}
          </h2>
          <span className="muted" style={{ fontSize: "13px" }}>
            {"处理层 11/07 11:30 提出 · 跨项目上提必须由你确认"}
          </span>
        </div>
        <ul style={{ margin: "0px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "4px", fontSize: "14px", lineHeight: "1.6" }}>
          <li>
            {"已在客户 A、客户 B 两个主题里验证通过"}
          </li>
          <li>
            {"条目本身不含客户信息，不需要去标识化；证据随条目一起继承"}
          </li>
          <li>
            {"上提后，所有 Shopline 项目的 agent 都会检索到它，不再只限 bundle 插件"}
          </li>
        </ul>
        <div style={{ padding: "12px 14px", borderRadius: "10px", background: "rgba(227, 160, 8, 0.08)", fontSize: "13px", lineHeight: "1.6" }}>
          <strong style={{ fontWeight: "600" }}>
            {"上提前先看："}
          </strong>
          {"本条的“当下条件”引用的是 2026-09 版图片服务文档。官方文档 10/20 有更新，同样依据这份文档的 K-044 已被标为可能过时。建议先复查当下条件，再决定上提。\n"}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <button className="btn" type="button">
            {"先复查当下条件"}
          </button>
          <button className="btn" type="button">
            {"同意上提"}
          </button>
          <button className="btn" type="button">
            {"暂不上提"}
          </button>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 560px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="fd-h">
            <h2 id="fd-h" style={{ margin: "0px 0px 8px", fontSize: "18px", fontWeight: "600" }}>
              {"字段"}
            </h2>
            <dl style={{ margin: "0px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"形态"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"规则"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"类别"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"技术约束 · 世界的知识"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"判断"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"商品图片由 Shopline 图片服务按尺寸参数生成，前端不用 object-fit 硬裁"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"理由"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"CSS 硬裁在比例不同的商品图上会裁掉主体；9 月客户 A 的两次返工都是这个原因"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"当下条件"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"Shopline 图片地址支持宽高和裁切参数（官方文档 2026-09 版）"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"适用场景"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"bundle 插件里展示商品图的区块，移动端和桌面端都适用"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"作用域"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"L2 bundle 插件 · 所有客户"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"约束等级"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"建议：可以不照做，但要在引用时说明原因"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"加载方式"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"冷区，按场景检索"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"重要性"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"中"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"可见范围"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"内部"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"版本"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"v2 · 取代 K-011「商品图统一 1:1 裁切」"}
                  </span>
                </dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "16px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <dt className="muted" style={{ fontSize: "13px" }}>
                  <span className="sc-interp">
                    {"处理溯源"}
                  </span>
                </dt>
                <dd style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
                  <span className="sc-interp">
                    {"处理运行 PR-0712 从 T-0388 的返工复盘中提炼，你在 09/15 确认"}
                  </span>
                </dd>
              </div>
            </dl>
          </section>
          <section className="card" aria-labelledby="ev-h">
            <h2 id="ev-h" style={{ margin: "0px 0px 8px", fontSize: "18px", fontWeight: "600" }}>
              {"证据 · 5"}
            </h2>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"E-311"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"9 月客户 A 移动端图片返工复盘"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"复盘记录 · 09/12 · 原文在客户 A 库，这里引用去标识后的摘要"}
                    </span>
                  </span>
                </div>
                <span className="chip s-done">
                  <span className="sc-interp">
                    {"支持"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"E-208"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"Shopline 图片服务参数文档截图"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"官方文档 2026-09 版 · 09/14"}
                    </span>
                  </span>
                </div>
                <span className="chip s-doing">
                  <span className="sc-interp">
                    {"条件来源"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"E-390"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"客户 B 主题验证截图"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"3 种比例商品图，主体完整 · 10/03"}
                    </span>
                  </span>
                </div>
                <span className="chip s-done">
                  <span className="sc-interp">
                    {"支持"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"E-402"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"10 月底回归报告"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"相关区块 14 项全部通过 · 10/28"}
                    </span>
                  </span>
                </div>
                <span className="chip s-done">
                  <span className="sc-interp">
                    {"支持"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"E-455"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"T-0390 返工记录"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"原因是图片服务参数写错，规则本身没问题 · 10/16"}
                    </span>
                  </span>
                </div>
                <span className="chip s-queue">
                  <span className="sc-interp">
                    {"不构成反证"}
                  </span>
                </span>
              </li>
            </ul>
          </section>
        </div>
        <div style={{ flex: "1 1 520px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="ef-h" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 id="ef-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"使用与效果"}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"被检索"}
                  </span>
                </span>
                <span style={{ fontSize: "20px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"41"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"近 8 周"}
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"被引用"}
                  </span>
                </span>
                <span style={{ fontSize: "20px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"17"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"引用率 41%"}
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"一次通过"}
                  </span>
                </span>
                <span style={{ fontSize: "20px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"7 / 9"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"已结束的任务"}
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"返工"}
                  </span>
                </span>
                <span style={{ fontSize: "20px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"2"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"1 次与本条无关"}
                  </span>
                </span>
              </div>
            </div>
            <div>
              <p style={{ margin: "0px 0px 8px", fontSize: "13px", fontWeight: "600" }}>
                {"每周被引用次数"}
              </p>
              <div role="img" aria-label="近 8 周每周被引用次数：0、0、1、2、2、3、4、5" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div className="vbars" style={{ height: "110px", display: "flex", alignItems: "flex-end", gap: "8px", borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}>
                  <div title="W38 · 引用 0 次" style={{ flex: "1 1 0%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                      <span className="sc-interp" />
                    </span>
                    <span style={{ width: "100%", maxWidth: "28px", height: "0px", background: "rgb(124, 108, 255)", borderRadius: "4px 4px 0px 0px" }} />
                  </div>
                  <div title="W39 · 引用 0 次" style={{ flex: "1 1 0%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                      <span className="sc-interp" />
                    </span>
                    <span style={{ width: "100%", maxWidth: "28px", height: "0px", background: "rgb(124, 108, 255)", borderRadius: "4px 4px 0px 0px" }} />
                  </div>
                  <div title="W40 · 引用 1 次" style={{ flex: "1 1 0%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                      <span className="sc-interp" />
                    </span>
                    <span style={{ width: "100%", maxWidth: "28px", height: "17px", background: "rgb(124, 108, 255)", borderRadius: "4px 4px 0px 0px" }} />
                  </div>
                  <div title="W41 · 引用 2 次" style={{ flex: "1 1 0%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                      <span className="sc-interp" />
                    </span>
                    <span style={{ width: "100%", maxWidth: "28px", height: "34px", background: "rgb(124, 108, 255)", borderRadius: "4px 4px 0px 0px" }} />
                  </div>
                  <div title="W42 · 引用 2 次" style={{ flex: "1 1 0%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                      <span className="sc-interp" />
                    </span>
                    <span style={{ width: "100%", maxWidth: "28px", height: "34px", background: "rgb(124, 108, 255)", borderRadius: "4px 4px 0px 0px" }} />
                  </div>
                  <div title="W43 · 引用 3 次" style={{ flex: "1 1 0%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                      <span className="sc-interp" />
                    </span>
                    <span style={{ width: "100%", maxWidth: "28px", height: "50px", background: "rgb(124, 108, 255)", borderRadius: "4px 4px 0px 0px" }} />
                  </div>
                  <div title="W44 · 引用 4 次" style={{ flex: "1 1 0%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                      <span className="sc-interp" />
                    </span>
                    <span style={{ width: "100%", maxWidth: "28px", height: "67px", background: "rgb(124, 108, 255)", borderRadius: "4px 4px 0px 0px" }} />
                  </div>
                  <div title="W45 · 引用 5 次" style={{ flex: "1 1 0%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                      <span className="sc-interp">
                        {"5"}
                      </span>
                    </span>
                    <span style={{ width: "100%", maxWidth: "28px", height: "84px", background: "rgb(124, 108, 255)", borderRadius: "4px 4px 0px 0px" }} />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span className="muted" style={{ flex: "1 1 0%", textAlign: "center", fontSize: "11px" }}>
                    <span className="sc-interp">
                      {"W38"}
                    </span>
                  </span>
                  <span className="muted" style={{ flex: "1 1 0%", textAlign: "center", fontSize: "11px" }}>
                    <span className="sc-interp">
                      {"W39"}
                    </span>
                  </span>
                  <span className="muted" style={{ flex: "1 1 0%", textAlign: "center", fontSize: "11px" }}>
                    <span className="sc-interp">
                      {"W40"}
                    </span>
                  </span>
                  <span className="muted" style={{ flex: "1 1 0%", textAlign: "center", fontSize: "11px" }}>
                    <span className="sc-interp">
                      {"W41"}
                    </span>
                  </span>
                  <span className="muted" style={{ flex: "1 1 0%", textAlign: "center", fontSize: "11px" }}>
                    <span className="sc-interp">
                      {"W42"}
                    </span>
                  </span>
                  <span className="muted" style={{ flex: "1 1 0%", textAlign: "center", fontSize: "11px" }}>
                    <span className="sc-interp">
                      {"W43"}
                    </span>
                  </span>
                  <span className="muted" style={{ flex: "1 1 0%", textAlign: "center", fontSize: "11px" }}>
                    <span className="sc-interp">
                      {"W44"}
                    </span>
                  </span>
                  <span className="muted" style={{ flex: "1 1 0%", textAlign: "center", fontSize: "11px" }}>
                    <span className="sc-interp">
                      {"W45"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.6", padding: "10px 12px", background: "rgb(249, 250, 251)", borderRadius: "8px" }}>
              {"引用和任务结果之间只是相关。要知道这条到底有没有作用，需要做消融测试：同类任务里去掉这条，对比一次通过率。这条还没做过。"}
            </p>
          </section>
          <section className="card" aria-labelledby="cr-h">
            <h2 id="cr-h" style={{ margin: "0px 0px 12px", fontSize: "18px", fontWeight: "600" }}>
              {"变化记录"}
            </h2>
            <ol style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "14px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"09/14"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(92, 97, 107)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"作为候选进入候选区"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"处理运行 PR-0712 从 T-0388 的返工复盘中提炼，附证据 E-311、E-208"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "14px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"09/15"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(110, 92, 246)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"你确认，可信度：假设"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"同时取代 K-011；K-011 保留历史，不再返回"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "14px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"10/03"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(3, 152, 85)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"可信度升到初步验证"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"客户 B 主题验证通过（E-390），按可信度更新规则自动升级"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "14px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"10/28"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(3, 152, 85)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"新增支持证据"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"回归报告 E-402"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "14px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"11/07"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(220, 104, 3)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"处理层提议上提到 L1 Shopline"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"等你决定"}
                    </span>
                  </span>
                </div>
              </li>
            </ol>
          </section>
          <section className="card" aria-labelledby="tk-h">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
              <h2 id="tk-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"引用它的任务"}
              </h2>
              <span className="muted" style={{ fontSize: "13px" }}>
                {"最近 5 个，共 10 个"}
              </span>
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/task" style={{ fontSize: "14px", textDecoration: "none" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"T2"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"卡片移动端图片改为服务端裁切"}
                    </span>
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"Black Friday 改版 · 开发 C · 本条被引用"}
                    </span>
                  </span>
                </div>
                <span className="chip s-doing">
                  <span className="sc-interp">
                    {"进行中"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/task" style={{ fontSize: "14px", textDecoration: "none" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"T-0407"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"bundle 价格四舍五入"}
                    </span>
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"返工原因与本条无关"}
                    </span>
                  </span>
                </div>
                <span className="chip s-you">
                  <span className="sc-interp">
                    {"返工 1 次"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/task" style={{ fontSize: "14px", textDecoration: "none" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"T-0401"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"组合卡片桌面端布局"}
                    </span>
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"开发 A"}
                    </span>
                  </span>
                </div>
                <span className="chip s-done">
                  <span className="sc-interp">
                    {"一次通过"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/task" style={{ fontSize: "14px", textDecoration: "none" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"T-0396"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"推荐区块商品图"}
                    </span>
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"开发 B"}
                    </span>
                  </span>
                </div>
                <span className="chip s-done">
                  <span className="sc-interp">
                    {"一次通过"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <Link to="/task" style={{ fontSize: "14px", textDecoration: "none" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"T-0390"}
                      </span>
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"客户 B 主题适配"}
                    </span>
                  </Link>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"图片服务参数写错"}
                    </span>
                  </span>
                </div>
                <span className="chip s-you">
                  <span className="sc-interp">
                    {"返工 1 次"}
                  </span>
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
