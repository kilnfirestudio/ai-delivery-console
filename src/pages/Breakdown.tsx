// 需求拆解 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Breakdown() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <nav aria-label="位置" className="muted" style={{ fontSize: "13px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
          <Link to="/">
            {"全局总览"}
          </Link>
          <span aria-hidden="true">
            {"/"}
          </span>
          <span>
            {"Shopline bundle 插件"}
          </span>
          <span aria-hidden="true">
            {"/"}
          </span>
          <span>
            {"TASK-0412"}
          </span>
        </nav>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-blue float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-blue)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
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
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"Black Friday 页面改版"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px" }}>
              {"客户：某户外品牌 · 登记 11/05 · 需求单 v2 已由客户确认 · 计划交付 11/09"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <span className="chip s-doing">
              {"开发中"}
            </span>
            <span className="chip s-you">
              {"1 个子任务等待你"}
            </span>
            <span className="chip s-risk">
              {"1 个冲突"}
            </span>
          </div>
        </div>
      </div>
      <section className="card" aria-labelledby="flow-h">
        <h2 id="flow-h" style={{ margin: "0px 0px 16px", fontSize: "18px", fontWeight: "600" }}>
          {"交付流程"}
        </h2>
        <div style={{ overflowX: "auto" }}>
          <ol aria-label="交付流程八步" style={{ listStyle: "none", margin: "0px", padding: "0px", display: "grid", gridTemplateColumns: "repeat(8, minmax(110px, 1fr))", gap: "8px", minWidth: "940px" }}>
            <li style={{ borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", background: "rgba(63, 185, 80, 0.06)", border: "1px solid rgba(63, 185, 80, 0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgb(3, 152, 85)", color: "rgb(255, 255, 255)" }}>
                  <span className="sc-interp">
                    {"1"}
                  </span>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"登记"}
                  </span>
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"你 · 11/05"}
                </span>
              </span>
              <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"网关生成 TASK-0412"}
                </span>
              </span>
            </li>
            <li style={{ borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", background: "rgba(63, 185, 80, 0.06)", border: "1px solid rgba(63, 185, 80, 0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgb(3, 152, 85)", color: "rgb(255, 255, 255)" }}>
                  <span className="sc-interp">
                    {"2"}
                  </span>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"确认"}
                  </span>
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"你 + 客户 · 11/05"}
                </span>
              </span>
              <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"需求单 v2，6 条验收标准"}
                </span>
              </span>
            </li>
            <li style={{ borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", background: "rgba(63, 185, 80, 0.06)", border: "1px solid rgba(63, 185, 80, 0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgb(3, 152, 85)", color: "rgb(255, 255, 255)" }}>
                  <span className="sc-interp">
                    {"3"}
                  </span>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"拆分"}
                  </span>
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"需求拆分 agent · 11/06"}
                </span>
              </span>
              <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"5 个子任务，你已确认"}
                </span>
              </span>
            </li>
            <li style={{ borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", background: "rgba(124, 108, 255, 0.1)", border: "1px solid rgba(124, 108, 255, 0.5)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgb(110, 92, 246)", color: "rgb(255, 255, 255)" }}>
                  <span className="sc-interp">
                    {"4"}
                  </span>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"开发"}
                  </span>
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"开发 A / B / C"}
                </span>
              </span>
              <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"T0 已过 5 个检查点，T1–T3 进行中"}
                </span>
              </span>
            </li>
            <li style={{ borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", background: "rgb(249, 250, 251)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"5"}
                  </span>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"回归"}
                  </span>
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"审查回归 agent"}
                </span>
              </span>
              <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"等待 T1–T3"}
                </span>
              </span>
            </li>
            <li style={{ borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", background: "rgb(249, 250, 251)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"6"}
                  </span>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"交付"}
                  </span>
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"你"}
                </span>
              </span>
              <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"验收后发给客户"}
                </span>
              </span>
            </li>
            <li style={{ borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", background: "rgb(249, 250, 251)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"7"}
                  </span>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"回写"}
                  </span>
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"处理层 → 候选区"}
                </span>
              </span>
              <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"交付后提炼候选"}
                </span>
              </span>
            </li>
            <li style={{ borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px", background: "rgb(249, 250, 251)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"8"}
                  </span>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"校正"}
                  </span>
                </span>
              </div>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"你 / 委托规则"}
                </span>
              </span>
              <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
                <span className="sc-interp">
                  {"更新可信度与规则"}
                </span>
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section className="card" aria-labelledby="dep-h">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="dep-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"拆分与依赖"}
            </h2>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "13px" }}>
              {"先改共用文件，再并行开发互不重叠的部分，最后合并做全量回归"}
            </p>
          </div>
          <span className="muted" style={{ fontSize: "13px" }}>
            {"拆分依据：K-021 共用文件先行 · K-034 按文件范围切分"}
          </span>
        </div>
        <div style={{ overflowX: "auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 32px 1.3fr 32px 1fr 32px 0.8fr", alignItems: "center", minWidth: "1040px" }}>
            <div>
              <p className="colh">
                {"第一步 · 先做"}
              </p>
              <Link to="/task" className="node">
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span className="mono">
                    {"T0"}
                  </span>
                  <span className="chip s-done">
                    {"完成"}
                  </span>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  {"抽出共用卡片组件与样式变量"}
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"开发 A · 检查点 5 / 5 · 回归 12/12 通过"}
                </span>
              </Link>
            </div>
            <svg aria-hidden="true" width="32" height="24" viewBox="0 0 32 24">
              <path d="M4 12h20m-6-6 6 6-6 6" fill="none" stroke="#5C616B" strokeWidth="1.5" />
            </svg>
            <div>
              <p className="colh">
                {"第二步 · 并行"}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link to="/task" className="node" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"T1"}
                      </span>
                    </span>
                    <span className="chip s-doing">
                      <span className="sc-interp">
                        {"进行中"}
                      </span>
                    </span>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"对比表加“限时”徽章"}
                    </span>
                  </span>
                  <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                  </div>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"开发 B"}
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"检查点 2 / 5"}
                    </span>
                  </span>
                </Link>
                <Link to="/task" className="node" style={{ borderColor: "rgba(227, 160, 8, 0.45)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"T2"}
                      </span>
                    </span>
                    <span className="chip s-you">
                      <span className="sc-interp">
                        {"等待你"}
                      </span>
                    </span>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"卡片移动端图片改为服务端裁切"}
                    </span>
                  </span>
                  <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(220, 104, 3)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                  </div>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"开发 C"}
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"检查点 1 / 5"}
                    </span>
                  </span>
                </Link>
                <Link to="/task" className="node" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                    <span className="mono">
                      <span className="sc-interp">
                        {"T3"}
                      </span>
                    </span>
                    <span className="chip s-doing">
                      <span className="sc-interp">
                        {"进行中"}
                      </span>
                    </span>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"客服弹窗换新图标"}
                    </span>
                  </span>
                  <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                  </div>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"开发 A"}
                    </span>
                    {" · "}
                    <span className="sc-interp">
                      {"检查点 1 / 5"}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <svg aria-hidden="true" width="32" height="24" viewBox="0 0 32 24">
              <path d="M4 12h20m-6-6 6 6-6 6" fill="none" stroke="#5C616B" strokeWidth="1.5" />
            </svg>
            <div>
              <p className="colh">
                {"第三步 · 合并"}
              </p>
              <Link to="/task" className="node">
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span className="mono">
                    {"T4"}
                  </span>
                  <span className="chip s-queue">
                    {"排队"}
                  </span>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  {"合并分支，全量回归与截图比对"}
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"审查回归 agent · 检查点 0 / 5 · 依赖 T1–T3"}
                </span>
              </Link>
            </div>
            <svg aria-hidden="true" width="32" height="24" viewBox="0 0 32 24">
              <path d="M4 12h20m-6-6 6 6-6 6" fill="none" stroke="#5C616B" strokeWidth="1.5" />
            </svg>
            <div>
              <p className="colh">
                {"第四步 · 交付"}
              </p>
              <div className="node" style={{ background: "rgb(249, 250, 251)", borderStyle: "dashed" }}>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  {"你验收后交付客户"}
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"预计 11/09"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card" aria-labelledby="tbl-h">
        <h2 id="tbl-h" style={{ margin: "0px 0px 12px", fontSize: "18px", fontWeight: "600" }}>
          {"子任务明细"}
        </h2>
        <p className="muted" style={{ margin: "0px 0px 12px", fontSize: "13px", lineHeight: "1.6" }}>
          {"文件范围在拆分时写进任务登记。拦截发生在三处：工具的改文件前 hook、提交前检查、合并时检查；网关不拦文件，只记录拦截事件。越界会被拦下并转成求助"}
        </p>
        <div style={{ overflowX: "auto" }}>
          <div role="table" style={{ width: "100%", borderCollapse: "collapse", minWidth: "1000px", display: "flex", flexDirection: "column" }}>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "56px minmax(0px, 1.4fr) minmax(0px, 1.2fr) minmax(0px, 1fr) minmax(0px, 1.3fr) 70px 96px 170px" }}>
              <div role="columnheader" className="th">
                {"子任务"}
              </div>
              <div role="columnheader" className="th">
                {"内容"}
              </div>
              <div role="columnheader" className="th">
                {"Agent"}
              </div>
              <div role="columnheader" className="th">
                {"分支"}
              </div>
              <div role="columnheader" className="th">
                {"文件范围"}
              </div>
              <div role="columnheader" className="th">
                {"依赖"}
              </div>
              <div role="columnheader" className="th">
                {"状态"}
              </div>
              <div role="columnheader" className="th" style={{ width: "180px" }}>
                {"完成度"}
              </div>
            </div>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "56px minmax(0px, 1.4fr) minmax(0px, 1.2fr) minmax(0px, 1fr) minmax(0px, 1.3fr) 70px 96px 170px" }}>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"T0"}
                </span>
              </div>
              <div role="cell" className="td" style={{ fontWeight: "500" }}>
                <span className="sc-interp">
                  {"抽出共用卡片组件与样式变量"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"开发 A · Claude Code"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"bf/t0-shared"}
                </span>
              </div>
              <div role="cell" className="td mono" style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>
                <span className="sc-interp">
                  {"components/card/*\nstyles/tokens.css"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"—"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="chip s-done">
                  <span className="sc-interp">
                    {"完成"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
                  </div>
                  <span style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"5 / 5 · 全部通过"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "56px minmax(0px, 1.4fr) minmax(0px, 1.2fr) minmax(0px, 1fr) minmax(0px, 1.3fr) 70px 96px 170px" }}>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"T1"}
                </span>
              </div>
              <div role="cell" className="td" style={{ fontWeight: "500" }}>
                <span className="sc-interp">
                  {"对比表加“限时”徽章"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"开发 B · Codex"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"bf/t1-badge"}
                </span>
              </div>
              <div role="cell" className="td mono" style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>
                <span className="sc-interp">
                  {"sections/compare-table/*"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"T0"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="chip s-doing">
                  <span className="sc-interp">
                    {"进行中"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                  </div>
                  <span style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"2 / 5 · 下一个：自测与截图"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "56px minmax(0px, 1.4fr) minmax(0px, 1.2fr) minmax(0px, 1fr) minmax(0px, 1.3fr) 70px 96px 170px" }}>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"T2"}
                </span>
              </div>
              <div role="cell" className="td" style={{ fontWeight: "500" }}>
                <span className="sc-interp">
                  {"卡片移动端图片改为服务端裁切"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"开发 C · Claude Code"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"bf/t2-mobile-img"}
                </span>
              </div>
              <div role="cell" className="td mono" style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>
                <span className="sc-interp">
                  {"sections/bundle-card/*"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"T0"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="chip s-you">
                  <span className="sc-interp">
                    {"等待你"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(220, 104, 3)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                  </div>
                  <span style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"1 / 5 · 下一个：改动提交"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "56px minmax(0px, 1.4fr) minmax(0px, 1.2fr) minmax(0px, 1fr) minmax(0px, 1.3fr) 70px 96px 170px" }}>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"T3"}
                </span>
              </div>
              <div role="cell" className="td" style={{ fontWeight: "500" }}>
                <span className="sc-interp">
                  {"客服弹窗换新图标"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"开发 A · Claude Code"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"bf/t3-icon"}
                </span>
              </div>
              <div role="cell" className="td mono" style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>
                <span className="sc-interp">
                  {"snippets/chat-popup.liquid\nassets/icons/*"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"T0"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="chip s-doing">
                  <span className="sc-interp">
                    {"进行中"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                  </div>
                  <span style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"1 / 5 · 下一个：改动提交"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "56px minmax(0px, 1.4fr) minmax(0px, 1.2fr) minmax(0px, 1fr) minmax(0px, 1.3fr) 70px 96px 170px" }}>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"T4"}
                </span>
              </div>
              <div role="cell" className="td" style={{ fontWeight: "500" }}>
                <span className="sc-interp">
                  {"合并分支，全量回归与截图比对"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"审查回归 agent"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"bf/release"}
                </span>
              </div>
              <div role="cell" className="td mono" style={{ lineHeight: "1.6", whiteSpace: "pre-line" }}>
                <span className="sc-interp">
                  {"只读 + tests/*"}
                </span>
              </div>
              <div role="cell" className="td mono">
                <span className="sc-interp">
                  {"T1 T2 T3"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="chip s-queue">
                  <span className="sc-interp">
                    {"排队"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td">
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                    <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                  </div>
                  <span style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"0 / 5 · 下一个：领取"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "16px", padding: "14px 16px", borderRadius: "10px", background: "rgb(249, 250, 251)", display: "flex", flexDirection: "column", gap: "10px" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"完成度怎么算"}
          </span>
          <span className="muted" style={{ fontSize: "13px", lineHeight: "1.6" }}>
            {"每个子任务有 5 个检查点，每过一个都对应一条事件记录，点开能看到原始记录。没有记录就不算过，agent 自己说“完成 70%”不计入。"}
          </span>
          <ol style={{ listStyle: "none", margin: "0px", padding: "0px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
            <li style={{ background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "8px", padding: "10px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
                {" · "}
                <span className="sc-interp">
                  {"领取"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"依据："}
                <span className="sc-interp">
                  {"网关任务事件"}
                </span>
              </span>
            </li>
            <li style={{ background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "8px", padding: "10px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
                {" · "}
                <span className="sc-interp">
                  {"改动提交"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"依据："}
                <span className="sc-interp">
                  {"子任务分支上的 git 提交"}
                </span>
              </span>
            </li>
            <li style={{ background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "8px", padding: "10px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
                {" · "}
                <span className="sc-interp">
                  {"自测与截图"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"依据："}
                <span className="sc-interp">
                  {"回报结果：自测通过并附截图"}
                </span>
              </span>
            </li>
            <li style={{ background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "8px", padding: "10px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
                {" · "}
                <span className="sc-interp">
                  {"你看过截图"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"依据："}
                <span className="sc-interp">
                  {"你的审核事件"}
                </span>
              </span>
            </li>
            <li style={{ background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "8px", padding: "10px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"5"}
                </span>
                {" · "}
                <span className="sc-interp">
                  {"合并回归通过"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"依据："}
                <span className="sc-interp">
                  {"回归脚本自动回报"}
                </span>
              </span>
            </li>
          </ol>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <section className="card" aria-labelledby="ac-h" style={{ flex: "1 1 520px", minWidth: "0px" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <h2 id="ac-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"验收标准"}
            </h2>
            <span className="muted" style={{ fontSize: "13px" }}>
              {"2 / 6 已满足"}
            </span>
          </div>
          <ul style={{ listStyle: "none", margin: "0px", padding: "0px", display: "flex", flexDirection: "column" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <span className="chip s-done" style={{ marginTop: "1px" }}>
                <span className="sc-interp">
                  {"已满足"}
                </span>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"所有 bundle 卡片显示 Black Friday 折扣价与原价"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"T0 + T1 · 已在预览站确认"}
                  </span>
                </span>
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <span className="chip s-queue" style={{ marginTop: "1px" }}>
                <span className="sc-interp">
                  {"未满足"}
                </span>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"对比表中参加活动的商品显示“限时”徽章"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"T1 · 开发中"}
                  </span>
                </span>
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <span className="chip s-queue" style={{ marginTop: "1px" }}>
                <span className="sc-interp">
                  {"未满足"}
                </span>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"移动端卡片图片不变形、不裁掉商品主体"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"T2 · 等待你决定是否改共用 CSS"}
                  </span>
                </span>
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <span className="chip s-queue" style={{ marginTop: "1px" }}>
                <span className="sc-interp">
                  {"未满足"}
                </span>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"客服弹窗使用新图标，点击行为不变"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"T3 · 开发中"}
                  </span>
                </span>
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <span className="chip s-done" style={{ marginTop: "1px" }}>
                <span className="sc-interp">
                  {"已满足"}
                </span>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"活动结束后自动恢复原样式"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"T0 · 已用时间开关验证"}
                  </span>
                </span>
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <span className="chip s-queue" style={{ marginTop: "1px" }}>
                <span className="sc-interp">
                  {"未满足"}
                </span>
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                  <span className="sc-interp">
                    {"原有加购、折扣叠加逻辑不受影响"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"T4 · 全量回归时验证"}
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </section>
        <section className="card" aria-labelledby="rg-h" style={{ flex: "1 1 520px", minWidth: "0px" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
            <h2 id="rg-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"回归范围"}
            </h2>
            <span className="muted" style={{ fontSize: "13px" }}>
              {"按冻结清单里“功能 ↔ 文件”的对应自动算出"}
            </span>
          </div>
          <ul style={{ listStyle: "none", margin: "0px", padding: "0px", display: "flex", flexDirection: "column" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "space-between", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px" }}>
                  <span className="sc-interp">
                    {"多件折扣叠加计算"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"10/12 验收 · 关联规则 K-015"}
                  </span>
                </span>
              </div>
              <span className="chip s-queue">
                <span className="sc-interp">
                  {"待回归"}
                </span>
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "space-between", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px" }}>
                  <span className="sc-interp">
                    {"bundle 卡片桌面端布局"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"10/20 验收 · T0 改了共用组件"}
                  </span>
                </span>
              </div>
              <span className="chip s-done">
                <span className="sc-interp">
                  {"通过"}
                </span>
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "space-between", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px" }}>
                  <span className="sc-interp">
                    {"加购按钮与库存提示"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"10/20 验收"}
                  </span>
                </span>
              </div>
              <span className="chip s-queue">
                <span className="sc-interp">
                  {"待回归"}
                </span>
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "space-between", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px" }}>
                  <span className="sc-interp">
                    {"移动端商品图"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"09/28 验收 · T2 直接改动此处"}
                  </span>
                </span>
              </div>
              <span className="chip s-you">
                <span className="sc-interp">
                  {"有风险"}
                </span>
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "space-between", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px" }}>
                  <span className="sc-interp">
                    {"客服弹窗打开与关闭"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"10/02 验收 · T3 改动此处"}
                  </span>
                </span>
              </div>
              <span className="chip s-queue">
                <span className="sc-interp">
                  {"待回归"}
                </span>
              </span>
            </li>
          </ul>
          <div style={{ marginTop: "12px", padding: "12px 14px", borderRadius: "10px", background: "rgba(248, 81, 73, 0.08)", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "rgb(255, 123, 114)" }}>
              {"冲突待你裁决"}
            </span>
            <span style={{ fontSize: "13px", lineHeight: "1.5" }}>
              {"客户要求标题 36px，全局规则 K-008 规定移动端标题不超过 28px。上位、特别、后法、可信度都分不出，已升级给你。"}
            </span>
            <Link to="/review" className="btn" style={{ alignSelf: "flex-start" }}>
              {"去裁决"}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
