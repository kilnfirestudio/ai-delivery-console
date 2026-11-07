// 每周复盘 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Weekly() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-rose float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-rose)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v3" />
                  <path d="M16 2v3" />
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"每周复盘 · 第 45 周"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"11/02–11/08 · 交付流程第 8 步“校正”。上次复盘 11/01，用时 22 分钟"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <ol aria-label="复盘步骤" style={{ listStyle: "none", margin: "0px", padding: "0px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <li>
                <a href="#w1" className="btn">
                  {"1 看结果 ✓"}
                </a>
              </li>
              <li>
                <a href="#w2" className="btn">
                  {"2 过错误 ✓"}
                </a>
              </li>
              <li>
                <a href="#w3" className="btn" aria-current="step">
                  {"3 处理知识"}
                </a>
              </li>
              <li>
                <a href="#w4" className="btn">
                  {"4 调参"}
                </a>
              </li>
              <li>
                <a href="#w5" className="btn">
                  {"5 记投入"}
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <section className="card" aria-labelledby="w1" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="w1" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"1 · 本周结果"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"和上周、和基线比"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"交付需求"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"1"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"TASK-0409"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"完成子任务"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"23"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"上周 19"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"一次通过"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"18 / 23"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"78%，上周 77%"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"返工"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"5 轮"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"上周 6 轮 · 基线 12"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"回归缺陷"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"1"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"上周 1 · 基线 6"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"纠错介入"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"4"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"上周 5 · 基线 11"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"求助介入"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"7"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"单独统计，不要求下降"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"重复错误"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"0"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(86, 211, 100)" }}>
              {"连续 3 周为 0"}
            </span>
          </div>
        </div>
      </section>
      <section className="card" aria-labelledby="w2" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="w2" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"2 · 本周的返工与错误 · 5"}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "260px minmax(0px, 1fr)", gap: "24px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p className="lbl">
              {"按原因"}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "72px 1fr 20px", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              <span>
                {"知识缺失"}
              </span>
              <div style={{ height: "12px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "100%", height: "12px", background: "rgb(110, 92, 246)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"2"}
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "72px 1fr 20px", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              <span>
                {"知识错误"}
              </span>
              <div style={{ height: "12px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "50%", height: "12px", background: "rgb(110, 92, 246)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"1"}
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "72px 1fr 20px", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              <span>
                {"执行失误"}
              </span>
              <div style={{ height: "12px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "50%", height: "12px", background: "rgb(110, 92, 246)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"1"}
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "72px 1fr 20px", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              <span>
                {"需求理解"}
              </span>
              <div style={{ height: "12px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "50%", height: "12px", background: "rgb(110, 92, 246)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"1"}
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "72px 1fr 20px", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              <span>
                {"外部变化"}
              </span>
              <div style={{ height: "12px", background: "rgba(255, 255, 255, 0.05)", borderRadius: "3px" }}>
                <div className="fill" style={{ width: "0%", height: "12px", background: "rgb(110, 92, 246)", borderRadius: "3px" }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {"0"}
              </span>
            </div>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "12px", lineHeight: "1.5" }}>
              {"归因由处理层初判，你确认。决策质量和结果质量分开看"}
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "760px" }}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: "90px" }}>
                    {"任务"}
                  </th>
                  <th scope="col">
                    {"发生了什么"}
                  </th>
                  <th scope="col" style={{ width: "110px" }}>
                    {"归因"}
                  </th>
                  <th scope="col">
                    {"处理"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="mono">
                      {"T-0407"}
                    </span>
                  </td>
                  <td>
                    {"价格四舍五入后折扣叠加多减 0.01"}
                  </td>
                  <td>
                    <span className="chip s-risk">
                      {"知识错误"}
                    </span>
                  </td>
                  <td>
                    {"K-015 计算顺序写反 → 修订为 v3（取代 v2）"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="mono">
                      {"X-0028"}
                    </span>
                  </td>
                  <td>
                    {"xuvia 选题接口一次拉 200 条导致超时"}
                  </td>
                  <td>
                    <span className="chip s-you">
                      {"知识缺失"}
                    </span>
                  </td>
                  <td>
                    {"提交候选“单次最多 50 条”，等你确认"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="mono">
                      {"T-0403"}
                    </span>
                  </td>
                  <td>
                    {"折扣标签在窄屏换行（回归缺陷）"}
                  </td>
                  <td>
                    <span className="chip s-you">
                      {"知识缺失"}
                    </span>
                  </td>
                  <td>
                    {"新增 K-118 并加入回归基准截图"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="mono">
                      {"P-0009"}
                    </span>
                  </td>
                  <td>
                    {"个人站图片模糊"}
                  </td>
                  <td>
                    <span className="chip s-queue">
                      {"执行失误"}
                    </span>
                  </td>
                  <td>
                    {"规则 K-035 已有，没照做 → 不改知识，加入抽检"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="mono">
                      {"T-0405"}
                    </span>
                  </td>
                  <td>
                    {"提示文案漏了英文版"}
                  </td>
                  <td>
                    <span className="chip s-queue">
                      {"需求理解"}
                    </span>
                  </td>
                  <td>
                    {"确认单模板加一项“多语言”"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="card" aria-labelledby="w3" style={{ minWidth: "0px", borderColor: "rgba(124, 108, 255, 0.5)", boxShadow: "rgba(124, 108, 255, 0.5) 0px 0px 0px 1px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="w3" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"3 · 知识变化"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"本周确认的 13 条候选里，5 条成为新条目，6 条作为证据并入已有条目"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px" }}>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"新增"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"5"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"修订"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"1"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"K-015"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"取代"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"1"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"K-011 → K-027"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"并入已有条目作证据"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"6"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"待复验"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"2"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(242, 193, 78)" }}>
              {"K-061、K-044"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"零调用超 30 天"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"12"}
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
          <Link to="/knowledge" className="btn">
            {"处理可能过时的 6 条"}
          </Link>
          <Link to="/review" className="btn">
            {"待审 7 件"}
          </Link>
        </div>
      </section>
      <section className="card" aria-labelledby="w4" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="w4" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"4 · 调参"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"元层每月调整一次，下次 12/01；本周只记录提议"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
              <span className="chip s-doing">
                {"提议"}
              </span>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                {"委托规则 v3 → v4：放宽一类候选"}
              </span>
            </div>
            <span style={{ fontSize: "14px", lineHeight: "1.6" }}>
              {"把“L2 项目层 · 建议级 · 至少 2 条独立证据 · 无冲突”的候选，从“你来确认”改为“自动确认 + 抽检”"}
            </span>
            <span className="muted" style={{ fontSize: "12px", lineHeight: "1.6" }}>
              {"依据：近 4 周这类候选 31 条你全部通过，抽检 0 错，混入的错误候选你检出 4 / 4。对应元层规则“审核通过率长期接近 100% 且结果良好 → 放宽边界”"}
            </span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="btn btn-p" type="button">
                {"采纳，生成 v4"}
              </button>
              <button className="btn" type="button">
                {"再观察 4 周"}
              </button>
            </div>
          </div>
          <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"回归缺陷持续下降"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"不需要收紧路由边界"}
                </span>
              </div>
              <div>
                <span className="chip s-queue">
                  {"维持"}
                </span>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"试用探索 3 条，2 条结果有效"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"维持探索比例"}
                </span>
              </div>
              <div>
                <span className="chip s-queue">
                  {"维持"}
                </span>
              </div>
            </li>
            <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  {"“标题字号”类冲突本月 3 次"}
                </span>
                <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                  {"检查 K-008 的作用域是否太宽"}
                </span>
              </div>
              <div>
                <span className="chip s-you">
                  {"待看"}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="card" aria-labelledby="w5" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="w5" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"5 · 记投入"}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", alignItems: "end" }}>
          <div className="field">
            <label htmlFor="hrs">
              {"本周花在知识库上的时间（估计）"}
            </label>
            <input id="hrs" className="inp" defaultValue={"2.5 小时"} />
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"产出估算"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"约 6.4 小时"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              {"返工少 7 轮 × 40 分钟 + 纠错少 7 次 × 15 分钟"}
            </span>
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: "13px" }}>
              {"投入 / 产出"}
            </span>
            <span style={{ fontSize: "24px", fontWeight: "600", lineHeight: "1.3" }}>
              {"0.39"}
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(86, 211, 100)" }}>
              {"连续 5 周小于 1"}
            </span>
          </div>
        </div>
        <p className="muted" style={{ margin: "12px 0px 0px", fontSize: "12px" }}>
          {"折算很粗略，只看趋势。它是三个月后“失败判定”的依据之一"}
        </p>
        <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
          <button className="btn btn-p" type="button">
            {"完成本周复盘"}
          </button>
        </div>
      </section>
    </main>
  );
}
