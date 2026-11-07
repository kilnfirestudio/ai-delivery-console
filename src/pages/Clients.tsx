// 客户 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Clients() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-cyan float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-cyan)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 12h4" />
                  <path d="M10 8h4" />
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"客户"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"客户层的知识和证据按客户加密隔离；合作结束可以整体销毁，不影响 git"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", alignItems: "stretch" }}>
        <Link to="/clients" className="card" aria-current="true" style={{ borderColor: "rgb(110, 92, 246)", boxShadow: "rgb(110, 92, 246) 0px 0px 0px 1px", textDecoration: "none", color: "rgb(237, 238, 240)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: "600" }}>
              {"客户 A"}
            </span>
            <span className="chip s-doing">
              {"合作中"}
            </span>
          </div>
          <span className="muted" style={{ fontSize: "13px" }}>
            {"户外品牌 · Shopline · 合作 8 个月"}
          </span>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"客户层知识"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"11 条 + 候选 1"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"证据"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"312 份"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"需求"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"14 个 · 进行中 1"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"返工率"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"18% → 9%"}
              </span>
            </div>
          </div>
        </Link>
        <Link to="/clients" className="card" aria-current="false" style={{ textDecoration: "none", color: "rgb(237, 238, 240)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: "600" }}>
              {"客户 B"}
            </span>
            <span className="chip s-doing">
              {"合作中"}
            </span>
          </div>
          <span className="muted" style={{ fontSize: "13px" }}>
            {"家居品牌 · Shopline · 合作 3 个月"}
          </span>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"客户层知识"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"8 条"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"证据"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"141 份"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"需求"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"5 个 · 进行中 0"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"返工率"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"14%"}
              </span>
            </div>
          </div>
        </Link>
        <Link to="/clients" className="card" aria-current="false" style={{ background: "rgb(249, 250, 251)", textDecoration: "none", color: "rgb(237, 238, 240)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "16px", fontWeight: "600" }}>
              {"客户 C"}
            </span>
            <span className="chip s-queue">
              {"已销毁"}
            </span>
          </div>
          <span className="muted" style={{ fontSize: "13px" }}>
            {"合作 09/30 结束 · 密钥 10/01 销毁"}
          </span>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"客户库与证据"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"已删除"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"索引分区"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"已删除"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"事件日志"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"只剩 ID 与哈希"}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", padding: "4px 0px" }}>
              <span className="muted">
                {"上提的去标识知识"}
              </span>
              <span style={{ fontWeight: "500" }}>
                {"2 条保留"}
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1.6 1 560px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="ck-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="ck-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"客户 A 的知识 · 11 条"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"特别优先：客户层的条目在客户 A 的任务里优先于上层；覆盖上层时必须写理由"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "34%" }}>
                      {"条目"}
                    </th>
                    <th scope="col" style={{ width: "64px" }}>
                      {"约束"}
                    </th>
                    <th scope="col" style={{ width: "80px" }}>
                      {"可信度"}
                    </th>
                    <th scope="col">
                      {"与上层的关系"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="mono">
                        {"C-A-003"}
                      </span>
                      {" 品牌色与 logo 区不可改"}
                    </td>
                    <td>
                      <span className="chip s-risk">
                        {"红线"}
                      </span>
                    </td>
                    <td>
                      {"已验证"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono">
                        {"C-A-001"}
                      </span>
                      {" 先给预览站链接，确认后再上线"}
                    </td>
                    <td>
                      <span className="chip s-doing">
                        {"默认"}
                      </span>
                    </td>
                    <td>
                      {"已验证"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono">
                        {"C-A-007"}
                      </span>
                      {" 价格显示保留两位小数"}
                    </td>
                    <td>
                      <span className="chip s-doing">
                        {"默认"}
                      </span>
                    </td>
                    <td>
                      {"初步验证"}
                    </td>
                    <td>
                      {"覆盖 L1 K-120“按店铺货币设置”· 理由：客户运营要求统一"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono">
                        {"C-A-009"}
                      </span>
                      {" 移动端首屏不放轮播"}
                    </td>
                    <td>
                      <span className="chip s-queue">
                        {"建议"}
                      </span>
                    </td>
                    <td>
                      {"初步验证"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono">
                        {"C-0219"}
                      </span>
                      {" 移动端断点 750px"}
                    </td>
                    <td>
                      <span className="chip s-doing">
                        {"候选"}
                      </span>
                    </td>
                    <td>
                      {"初步验证"}
                    </td>
                    <td>
                      {"将覆盖 L1 K-112（768px）· 理由待你填写"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link to="/knowledge" style={{ display: "inline-block", marginTop: "12px", fontSize: "13px" }}>
              {"查看全部 11 条"}
            </Link>
          </section>
          <section className="card" aria-labelledby="ch-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="ch-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"确认单与验收"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"TASK-0412 Black Friday 页面改版"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"确认单 v2 11/05 客户已确认 · 开发中"}
                  </span>
                </div>
                <div>
                  <span className="chip s-doing">
                    {"进行中"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"TASK-0401 组合卡片桌面端"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"10/28 验收 · 一次通过"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"已交付"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"TASK-0388 移动端商品图"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"09/14 验收 · 返工 2 次"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"已交付"}
                  </span>
                </div>
              </li>
            </ul>
          </section>
          <section className="card" aria-labelledby="cd-h" style={{ minWidth: "0px", borderColor: "rgba(248, 81, 73, 0.45)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="cd-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"结束合作"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <p style={{ margin: "0px 0px 12px", fontSize: "14px", lineHeight: "1.6" }}>
              {"销毁客户 A 的密钥后：客户库、证据、索引分区一并删除；事件日志只剩 ID 和哈希；git 里没有客户内容，不受影响；已经去标识上提的知识保留。"}
            </p>
            <div className="field" style={{ maxWidth: "360px" }}>
              <label htmlFor="cn">
                {"输入“客户 A”确认"}
              </label>
              <input id="cn" className="inp" placeholder="客户 A" />
            </div>
            <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div role="group" aria-label="带保护盖的销毁开关" style={{ position: "relative", width: "120px", height: "64px", borderRadius: "4px", background: "rgb(12, 13, 15)", border: "1px solid rgba(248, 81, 73, 0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span aria-hidden="true" style={{ width: "64px", height: "30px", borderRadius: "15px", background: "rgb(30, 41, 59)", boxShadow: "rgba(0, 0, 0, 0.6) 0px 1px 3px inset", position: "relative" }}>
                  <span style={{ position: "absolute", left: "3px", top: "3px", width: "24px", height: "24px", borderRadius: "12px", background: "linear-gradient(rgb(203, 213, 225), rgb(100, 116, 139))", boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 3px" }} />
                </span>
                <span aria-hidden="true" style={{ position: "absolute", inset: "4px", borderRadius: "9px", background: "linear-gradient(rgba(248, 81, 73, 0.26), rgba(248, 81, 73, 0.12))", border: "1px solid rgba(248, 81, 73, 0.6)", boxShadow: "rgba(255, 255, 255, 0.14) 0px 1px 0px inset" }} />
                <span aria-hidden="true" style={{ position: "absolute", left: "10px", right: "10px", top: "2px", height: "3px", borderRadius: "2px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <button className="btn btn-d" type="button">
                  {"掀开保护盖"}
                </button>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"掀盖后拨动开关才会执行，期间可随时取消"}
                </span>
              </div>
            </div>
          </section>
        </div>
        <div style={{ flex: "1 1 360px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="cp-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="cp-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"客户档案"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"沟通"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"微信；习惯先看预览站再上线"}
                  </span>
                </div>
                <div />
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"验收"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"运营负责人确认，通常在上线前一天"}
                  </span>
                </div>
                <div />
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"上线窗口"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"周日晚上"}
                  </span>
                </div>
                <div />
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"偏好来源"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"全部来自客户原话或确认单，可点开证据"}
                  </span>
                </div>
                <div />
              </li>
            </ul>
          </section>
          <section className="card" aria-labelledby="ci-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="ci-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"隔离状态"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"加密"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"客户 A 独立密钥 KA-03 · 09/01 轮换"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"正常"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"可见范围"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"只对标记为客户 A 的任务可见"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"正常"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"本周访问"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"86 次，全部来自客户 A 的任务"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"正常"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"越权访问尝试"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"1 次：开发 B 在客户 A 任务中请求客户 B 层，已拒绝"}
                  </span>
                </div>
                <div>
                  <span className="chip s-risk">
                    {"已拦截"}
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"索引"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"按客户分区，可单独删除"}
                  </span>
                </div>
                <div>
                  <span className="chip s-done">
                    {"正常"}
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
