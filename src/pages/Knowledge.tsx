// 知识库 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Knowledge() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span className="gt gt-blue float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-blue)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v16" />
                <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
              </svg>
            </span>
            <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
              {"知识库"}
            </h1>
          </div>
          <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px" }}>
            {"知识本身的状态：有多少、分在哪层、有多可信、哪些在被用、哪些该处理"}
          </p>
        </div>
        <p className="muted" style={{ margin: "0px", fontSize: "13px" }}>
          {"最后写入 16:02 · git 与事件日志今日对账一致"}
        </p>
      </div>
      <section aria-label="知识数量" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "16px" }}>
        <div className="card" style={{ padding: "16px 18px" }}>
          <p className="muted" style={{ margin: "0px", fontSize: "13px" }}>
            <span className="sc-interp">
              {"已确认"}
            </span>
          </p>
          <p style={{ margin: "6px 0px 2px", fontSize: "26px", fontWeight: "600" }}>
            <span className="sc-interp">
              {"148"}
            </span>
          </p>
          <p className="muted" style={{ margin: "0px", fontSize: "12px" }}>
            <span className="sc-interp">
              {"git 129 · 客户库 19 · 本周新增 5"}
            </span>
          </p>
        </div>
        <div className="card" style={{ padding: "16px 18px" }}>
          <p className="muted" style={{ margin: "0px", fontSize: "13px" }}>
            <span className="sc-interp">
              {"候选"}
            </span>
          </p>
          <p style={{ margin: "6px 0px 2px", fontSize: "26px", fontWeight: "600" }}>
            <span className="sc-interp">
              {"9"}
            </span>
          </p>
          <p className="muted" style={{ margin: "0px", fontSize: "12px" }}>
            <span className="sc-interp">
              {"等你 2 · 等委托规则 7"}
            </span>
          </p>
        </div>
        <div className="card" style={{ padding: "16px 18px" }}>
          <p className="muted" style={{ margin: "0px", fontSize: "13px" }}>
            <span className="sc-interp">
              {"可能过时"}
            </span>
          </p>
          <p style={{ margin: "6px 0px 2px", fontSize: "26px", fontWeight: "600" }}>
            <span className="sc-interp">
              {"6"}
            </span>
          </p>
          <p className="muted" style={{ margin: "0px", fontSize: "12px" }}>
            <span className="sc-interp">
              {"超过有效期或条件变了"}
            </span>
          </p>
        </div>
        <div className="card" style={{ padding: "16px 18px" }}>
          <p className="muted" style={{ margin: "0px", fontSize: "13px" }}>
            <span className="sc-interp">
              {"已废弃"}
            </span>
          </p>
          <p style={{ margin: "6px 0px 2px", fontSize: "26px", fontWeight: "600" }}>
            <span className="sc-interp">
              {"4"}
            </span>
          </p>
          <p className="muted" style={{ margin: "0px", fontSize: "12px" }}>
            <span className="sc-interp">
              {"保留历史，不再返回"}
            </span>
          </p>
        </div>
        <div className="card" style={{ padding: "16px 18px" }}>
          <p className="muted" style={{ margin: "0px", fontSize: "13px" }}>
            <span className="sc-interp">
              {"已取代"}
            </span>
          </p>
          <p style={{ margin: "6px 0px 2px", fontSize: "26px", fontWeight: "600" }}>
            <span className="sc-interp">
              {"7"}
            </span>
          </p>
          <p className="muted" style={{ margin: "0px", fontSize: "12px" }}>
            <span className="sc-interp">
              {"都能追到取代它的条目"}
            </span>
          </p>
        </div>
        <div className="card" style={{ padding: "16px 18px" }}>
          <p className="muted" style={{ margin: "0px", fontSize: "13px" }}>
            <span className="sc-interp">
              {"证据覆盖"}
            </span>
          </p>
          <p style={{ margin: "6px 0px 2px", fontSize: "26px", fontWeight: "600" }}>
            <span className="sc-interp">
              {"100%"}
            </span>
          </p>
          <p className="muted" style={{ margin: "0px", fontSize: "12px" }}>
            <span className="sc-interp">
              {"每条已确认知识都有证据"}
            </span>
          </p>
        </div>
      </section>
      <section className="card" aria-labelledby="ly-h">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
          <h2 id="ly-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
            {"分层与状态"}
          </h2>
          <div className="muted" aria-label="可信度图例" style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px" }}>
            <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(180, 169, 255)" }} />
              {"已验证"}
            </span>
            <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(124, 108, 255)" }} />
              {"初步验证"}
            </span>
            <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(74, 69, 96)" }} />
              {"假设"}
            </span>
          </div>
        </div>
        <div style={{ overflowX: "auto" }}>
          <div role="table" style={{ width: "100%", borderCollapse: "collapse", minWidth: "1000px", display: "flex", flexDirection: "column" }}>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1.6fr) 70px 60px 80px 70px 70px 300px 110px" }}>
              <div role="columnheader" className="th">
                {"层级"}
              </div>
              <div role="columnheader" className="th">
                {"已确认"}
              </div>
              <div role="columnheader" className="th">
                {"候选"}
              </div>
              <div role="columnheader" className="th">
                {"可能过时"}
              </div>
              <div role="columnheader" className="th">
                {"已废弃"}
              </div>
              <div role="columnheader" className="th">
                {"已取代"}
              </div>
              <div role="columnheader" className="th" style={{ width: "300px" }}>
                {"已确认条目的可信度"}
              </div>
              <div role="columnheader" className="th">
                {"近 30 天被引用"}
              </div>
            </div>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1.6fr) 70px 60px 80px 70px 70px 300px 110px" }}>
              <div role="cell" className="td">
                <span style={{ fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"L0 全局"}
                  </span>
                </span>
                <br />
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"跨所有项目的做事方式"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td" style={{ fontWeight: "600" }}>
                <span className="sc-interp">
                  {"31"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"2"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"1"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"1"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"2"}
                </span>
              </div>
              <div role="cell" className="td">
                <div role="img" title="已验证 22 · 初步验证 7 · 假设 2" style={{ display: "flex", gap: "2px", height: "12px" }}>
                  <span style={{ flex: "22 1 0px", background: "rgb(180, 169, 255)", borderRadius: "3px 0px 0px 3px" }} />
                  <span style={{ flex: "7 1 0px", background: "rgb(124, 108, 255)" }} />
                  <span style={{ flex: "2 1 0px", background: "rgb(74, 69, 96)", borderRadius: "0px 3px 3px 0px" }} />
                </div>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"22"}
                  </span>
                  {" / "}
                  <span className="sc-interp">
                    {"7"}
                  </span>
                  {" / "}
                  <span className="sc-interp">
                    {"2"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"96"}
                </span>
              </div>
            </div>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1.6fr) 70px 60px 80px 70px 70px 300px 110px" }}>
              <div role="cell" className="td">
                <span style={{ fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"L1 Shopline 领域"}
                  </span>
                </span>
                <br />
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"平台规则与主题开发"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td" style={{ fontWeight: "600" }}>
                <span className="sc-interp">
                  {"46"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"3"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"3"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"1"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"3"}
                </span>
              </div>
              <div role="cell" className="td">
                <div role="img" title="已验证 28 · 初步验证 13 · 假设 5" style={{ display: "flex", gap: "2px", height: "12px" }}>
                  <span style={{ flex: "28 1 0px", background: "rgb(180, 169, 255)", borderRadius: "3px 0px 0px 3px" }} />
                  <span style={{ flex: "13 1 0px", background: "rgb(124, 108, 255)" }} />
                  <span style={{ flex: "5 1 0px", background: "rgb(74, 69, 96)", borderRadius: "0px 3px 3px 0px" }} />
                </div>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"28"}
                  </span>
                  {" / "}
                  <span className="sc-interp">
                    {"13"}
                  </span>
                  {" / "}
                  <span className="sc-interp">
                    {"5"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"118"}
                </span>
              </div>
            </div>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1.6fr) 70px 60px 80px 70px 70px 300px 110px" }}>
              <div role="cell" className="td">
                <span style={{ fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"L2 项目"}
                  </span>
                </span>
                <br />
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"bundle 插件、xuvia、直播语音、个人站"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td" style={{ fontWeight: "600" }}>
                <span className="sc-interp">
                  {"52"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"3"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"2"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"2"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"2"}
                </span>
              </div>
              <div role="cell" className="td">
                <div role="img" title="已验证 25 · 初步验证 19 · 假设 8" style={{ display: "flex", gap: "2px", height: "12px" }}>
                  <span style={{ flex: "25 1 0px", background: "rgb(180, 169, 255)", borderRadius: "3px 0px 0px 3px" }} />
                  <span style={{ flex: "19 1 0px", background: "rgb(124, 108, 255)" }} />
                  <span style={{ flex: "8 1 0px", background: "rgb(74, 69, 96)", borderRadius: "0px 3px 3px 0px" }} />
                </div>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"25"}
                  </span>
                  {" / "}
                  <span className="sc-interp">
                    {"19"}
                  </span>
                  {" / "}
                  <span className="sc-interp">
                    {"8"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"87"}
                </span>
              </div>
            </div>
            <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 1.6fr) 70px 60px 80px 70px 70px 300px 110px" }}>
              <div role="cell" className="td">
                <span style={{ fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"L3 客户"}
                  </span>
                </span>
                <br />
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"3 个客户，各自加密隔离"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td" style={{ fontWeight: "600" }}>
                <span className="sc-interp">
                  {"19"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"1"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"0"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"0"}
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"0"}
                </span>
              </div>
              <div role="cell" className="td">
                <div role="img" title="已验证 12 · 初步验证 5 · 假设 2" style={{ display: "flex", gap: "2px", height: "12px" }}>
                  <span style={{ flex: "12 1 0px", background: "rgb(180, 169, 255)", borderRadius: "3px 0px 0px 3px" }} />
                  <span style={{ flex: "5 1 0px", background: "rgb(124, 108, 255)" }} />
                  <span style={{ flex: "2 1 0px", background: "rgb(74, 69, 96)", borderRadius: "0px 3px 3px 0px" }} />
                </div>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"12"}
                  </span>
                  {" / "}
                  <span className="sc-interp">
                    {"5"}
                  </span>
                  {" / "}
                  <span className="sc-interp">
                    {"2"}
                  </span>
                </span>
              </div>
              <div role="cell" className="td">
                <span className="sc-interp">
                  {"41"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card" aria-labelledby="hm-h">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <h2 id="hm-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"近 8 周引用次数 · 前 8 条"}
            </h2>
            <Link to="/graph" style={{ fontSize: "13px" }}>
              {"在图谱中查看"}
            </Link>
          </div>
          <div className="muted" aria-label="颜色图例：引用次数" style={{ display: "flex", gap: "2px", alignItems: "center", fontSize: "12px" }}>
            <span style={{ marginRight: "6px" }}>
              {"0"}
            </span>
            <span title="0 次" style={{ width: "22px", height: "12px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.05)" }} />
            <span title="1–2 次" style={{ width: "22px", height: "12px", borderRadius: "2px", background: "rgba(124, 108, 255, 0.14)" }} />
            <span title="3–4 次" style={{ width: "22px", height: "12px", borderRadius: "2px", background: "rgba(124, 108, 255, 0.28)" }} />
            <span title="5–6 次" style={{ width: "22px", height: "12px", borderRadius: "2px", background: "rgba(124, 108, 255, 0.45)" }} />
            <span title="7–8 次" style={{ width: "22px", height: "12px", borderRadius: "2px", background: "rgba(124, 108, 255, 0.68)" }} />
            <span title="9 次以上" style={{ width: "22px", height: "12px", borderRadius: "2px", background: "rgb(169, 156, 255)" }} />
            <span style={{ marginLeft: "6px" }}>
              {"9 次以上"}
            </span>
          </div>
        </div>
        <p className="muted" style={{ margin: "0px 0px 16px", fontSize: "13px" }}>
          {"只统计网关里的检索和引用；热区规则是静态注入的，不产生调用记录，所以不在这里"}
        </p>
        <div style={{ overflowX: "auto" }}>
          <div role="table" aria-label="近 8 周引用次数" style={{ minWidth: "1000px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "340px repeat(8, 1fr) 72px", gap: "2px", fontSize: "12px", color: "rgb(161, 166, 176)", fontWeight: "600" }}>
              <span role="columnheader" style={{ padding: "4px 0px" }}>
                {"知识"}
              </span>
              <span role="columnheader" style={{ textAlign: "center", padding: "4px 0px" }}>
                <span className="sc-interp">
                  {"W38"}
                </span>
              </span>
              <span role="columnheader" style={{ textAlign: "center", padding: "4px 0px" }}>
                <span className="sc-interp">
                  {"W39"}
                </span>
              </span>
              <span role="columnheader" style={{ textAlign: "center", padding: "4px 0px" }}>
                <span className="sc-interp">
                  {"W40"}
                </span>
              </span>
              <span role="columnheader" style={{ textAlign: "center", padding: "4px 0px" }}>
                <span className="sc-interp">
                  {"W41"}
                </span>
              </span>
              <span role="columnheader" style={{ textAlign: "center", padding: "4px 0px" }}>
                <span className="sc-interp">
                  {"W42"}
                </span>
              </span>
              <span role="columnheader" style={{ textAlign: "center", padding: "4px 0px" }}>
                <span className="sc-interp">
                  {"W43"}
                </span>
              </span>
              <span role="columnheader" style={{ textAlign: "center", padding: "4px 0px" }}>
                <span className="sc-interp">
                  {"W44"}
                </span>
              </span>
              <span role="columnheader" style={{ textAlign: "center", padding: "4px 0px" }}>
                <span className="sc-interp">
                  {"W45"}
                </span>
              </span>
              <span role="columnheader" style={{ textAlign: "right", padding: "4px 0px" }}>
                {"合计"}
              </span>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "340px repeat(8, 1fr) 72px", gap: "2px", alignItems: "center" }}>
              <Link to="/knowledge/item" role="rowheader" style={{ fontSize: "13px", color: "rgb(237, 238, 240)", textDecoration: "none", padding: "6px 8px 6px 0px", lineHeight: "1.4" }}>
                <span className="mono" style={{ color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"K-021"}
                  </span>
                </span>
                {" "}
                <span className="sc-interp">
                  {"共用文件先单独改完再并行"}
                </span>
              </Link>
              <span role="cell" title="K-021 · W38 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-021 · W39 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="K-021 · W40 · 引用 4 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
              <span role="cell" title="K-021 · W41 · 引用 6 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"6"}
                </span>
              </span>
              <span role="cell" title="K-021 · W42 · 引用 5 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"5"}
                </span>
              </span>
              <span role="cell" title="K-021 · W43 · 引用 8 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.68)", color: "rgb(4, 18, 31)" }}>
                <span className="sc-interp">
                  {"8"}
                </span>
              </span>
              <span role="cell" title="K-021 · W44 · 引用 9 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgb(169, 156, 255)", color: "rgb(4, 18, 31)" }}>
                <span className="sc-interp">
                  {"9"}
                </span>
              </span>
              <span role="cell" title="K-021 · W45 · 引用 7 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.68)", color: "rgb(4, 18, 31)" }}>
                <span className="sc-interp">
                  {"7"}
                </span>
              </span>
              <span role="cell" style={{ textAlign: "right", fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"44"}
                </span>
              </span>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "340px repeat(8, 1fr) 72px", gap: "2px", alignItems: "center" }}>
              <Link to="/knowledge/item" role="rowheader" style={{ fontSize: "13px", color: "rgb(237, 238, 240)", textDecoration: "none", padding: "6px 8px 6px 0px", lineHeight: "1.4" }}>
                <span className="mono" style={{ color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"C-A-003"}
                  </span>
                </span>
                {" "}
                <span className="sc-interp">
                  {"客户 A 品牌色与 logo 区不可改"}
                </span>
              </Link>
              <span role="cell" title="C-A-003 · W38 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="C-A-003 · W39 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="C-A-003 · W40 · 引用 4 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
              <span role="cell" title="C-A-003 · W41 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="C-A-003 · W42 · 引用 5 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"5"}
                </span>
              </span>
              <span role="cell" title="C-A-003 · W43 · 引用 4 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
              <span role="cell" title="C-A-003 · W44 · 引用 6 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"6"}
                </span>
              </span>
              <span role="cell" title="C-A-003 · W45 · 引用 5 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"5"}
                </span>
              </span>
              <span role="cell" style={{ textAlign: "right", fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"32"}
                </span>
              </span>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "340px repeat(8, 1fr) 72px", gap: "2px", alignItems: "center" }}>
              <Link to="/knowledge/item" role="rowheader" style={{ fontSize: "13px", color: "rgb(237, 238, 240)", textDecoration: "none", padding: "6px 8px 6px 0px", lineHeight: "1.4" }}>
                <span className="mono" style={{ color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"K-034"}
                  </span>
                </span>
                {" "}
                <span className="sc-interp">
                  {"按文件范围切分子任务"}
                </span>
              </Link>
              <span role="cell" title="K-034 · W38 · 引用 0 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(255, 255, 255, 0.05)" }}>
                <span className="sc-interp" />
              </span>
              <span role="cell" title="K-034 · W39 · 引用 1 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
              <span role="cell" title="K-034 · W40 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="K-034 · W41 · 引用 5 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"5"}
                </span>
              </span>
              <span role="cell" title="K-034 · W42 · 引用 6 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"6"}
                </span>
              </span>
              <span role="cell" title="K-034 · W43 · 引用 7 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.68)", color: "rgb(4, 18, 31)" }}>
                <span className="sc-interp">
                  {"7"}
                </span>
              </span>
              <span role="cell" title="K-034 · W44 · 引用 8 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.68)", color: "rgb(4, 18, 31)" }}>
                <span className="sc-interp">
                  {"8"}
                </span>
              </span>
              <span role="cell" title="K-034 · W45 · 引用 6 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"6"}
                </span>
              </span>
              <span role="cell" style={{ textAlign: "right", fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"36"}
                </span>
              </span>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "340px repeat(8, 1fr) 72px", gap: "2px", alignItems: "center" }}>
              <Link to="/knowledge/item" role="rowheader" style={{ fontSize: "13px", color: "rgb(237, 238, 240)", textDecoration: "none", padding: "6px 8px 6px 0px", lineHeight: "1.4" }}>
                <span className="mono" style={{ color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"K-015"}
                  </span>
                </span>
                {" "}
                <span className="sc-interp">
                  {"折扣叠加的计算顺序"}
                </span>
              </Link>
              <span role="cell" title="K-015 · W38 · 引用 5 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"5"}
                </span>
              </span>
              <span role="cell" title="K-015 · W39 · 引用 4 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
              <span role="cell" title="K-015 · W40 · 引用 6 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"6"}
                </span>
              </span>
              <span role="cell" title="K-015 · W41 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="K-015 · W42 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-015 · W43 · 引用 4 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
              <span role="cell" title="K-015 · W44 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="K-015 · W45 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" style={{ textAlign: "right", fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"29"}
                </span>
              </span>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "340px repeat(8, 1fr) 72px", gap: "2px", alignItems: "center" }}>
              <Link to="/knowledge/item" role="rowheader" style={{ fontSize: "13px", color: "rgb(237, 238, 240)", textDecoration: "none", padding: "6px 8px 6px 0px", lineHeight: "1.4" }}>
                <span className="mono" style={{ color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"K-035"}
                  </span>
                </span>
                {" "}
                <span className="sc-interp">
                  {"图片容器用固定比例"}
                </span>
              </Link>
              <span role="cell" title="K-035 · W38 · 引用 1 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
              <span role="cell" title="K-035 · W39 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-035 · W40 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-035 · W41 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="K-035 · W42 · 引用 4 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
              <span role="cell" title="K-035 · W43 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="K-035 · W44 · 引用 5 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"5"}
                </span>
              </span>
              <span role="cell" title="K-035 · W45 · 引用 6 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"6"}
                </span>
              </span>
              <span role="cell" style={{ textAlign: "right", fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"26"}
                </span>
              </span>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "340px repeat(8, 1fr) 72px", gap: "2px", alignItems: "center" }}>
              <Link to="/knowledge/item" role="rowheader" style={{ fontSize: "13px", color: "rgb(237, 238, 240)", textDecoration: "none", padding: "6px 8px 6px 0px", lineHeight: "1.4" }}>
                <span className="mono" style={{ color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"K-008"}
                  </span>
                </span>
                {" "}
                <span className="sc-interp">
                  {"移动端标题不超过 28px"}
                </span>
              </Link>
              <span role="cell" title="K-008 · W38 · 引用 4 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
              <span role="cell" title="K-008 · W39 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="K-008 · W40 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="K-008 · W41 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-008 · W42 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-008 · W43 · 引用 1 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
              <span role="cell" title="K-008 · W44 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-008 · W45 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" style={{ textAlign: "right", fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"20"}
                </span>
              </span>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "340px repeat(8, 1fr) 72px", gap: "2px", alignItems: "center" }}>
              <Link to="/knowledge/item" role="rowheader" style={{ fontSize: "13px", color: "rgb(237, 238, 240)", textDecoration: "none", padding: "6px 8px 6px 0px", lineHeight: "1.4" }}>
                <span className="mono" style={{ color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"K-027"}
                  </span>
                </span>
                {" "}
                <span className="sc-interp">
                  {"商品图片裁切走服务端渲染"}
                </span>
              </Link>
              <span role="cell" title="K-027 · W38 · 引用 0 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(255, 255, 255, 0.05)" }}>
                <span className="sc-interp" />
              </span>
              <span role="cell" title="K-027 · W39 · 引用 0 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(255, 255, 255, 0.05)" }}>
                <span className="sc-interp" />
              </span>
              <span role="cell" title="K-027 · W40 · 引用 1 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
              <span role="cell" title="K-027 · W41 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-027 · W42 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-027 · W43 · 引用 3 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
              <span role="cell" title="K-027 · W44 · 引用 4 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.28)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
              <span role="cell" title="K-027 · W45 · 引用 5 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.45)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"5"}
                </span>
              </span>
              <span role="cell" style={{ textAlign: "right", fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"17"}
                </span>
              </span>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "340px repeat(8, 1fr) 72px", gap: "2px", alignItems: "center" }}>
              <Link to="/knowledge/item" role="rowheader" style={{ fontSize: "13px", color: "rgb(237, 238, 240)", textDecoration: "none", padding: "6px 8px 6px 0px", lineHeight: "1.4" }}>
                <span className="mono" style={{ color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"K-019"}
                  </span>
                </span>
                {" "}
                <span className="sc-interp">
                  {"Liquid 循环嵌套不超过三层"}
                </span>
              </Link>
              <span role="cell" title="K-019 · W38 · 引用 1 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
              <span role="cell" title="K-019 · W39 · 引用 1 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
              <span role="cell" title="K-019 · W40 · 引用 0 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(255, 255, 255, 0.05)" }}>
                <span className="sc-interp" />
              </span>
              <span role="cell" title="K-019 · W41 · 引用 2 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"2"}
                </span>
              </span>
              <span role="cell" title="K-019 · W42 · 引用 1 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
              <span role="cell" title="K-019 · W43 · 引用 1 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
              <span role="cell" title="K-019 · W44 · 引用 0 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(255, 255, 255, 0.05)" }}>
                <span className="sc-interp" />
              </span>
              <span role="cell" title="K-019 · W45 · 引用 1 次" style={{ height: "36px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", background: "rgba(124, 108, 255, 0.14)", color: "rgb(237, 238, 240)" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
              <span role="cell" style={{ textAlign: "right", fontSize: "13px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"7"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="at-h" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h2 id="at-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
          {"需要处理"}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"30 天以上没被调用"}
                </span>
              </span>
              <span className="chip s-queue">
                <span className="sc-interp">
                  {"12 条"}
                </span>
              </span>
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px", display: "flex", flexDirection: "column" }}>
              <li style={{ padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px" }}>
                  <span className="mono">
                    <span className="sc-interp">
                      {"K-052"}
                    </span>
                  </span>
                  {" · "}
                  <span className="sc-interp">
                    {"xuvia 旧版接口的鉴权方式"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"45 天未调用 · L2 xuvia"}
                  </span>
                </span>
              </li>
              <li style={{ padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px" }}>
                  <span className="mono">
                    <span className="sc-interp">
                      {"K-073"}
                    </span>
                  </span>
                  {" · "}
                  <span className="sc-interp">
                    {"个人站旧版字体加载方式"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"38 天未调用 · L2 个人站"}
                  </span>
                </span>
              </li>
            </ul>
            <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"没被调用不等于没用：先确认对应场景最近是否出现过，再决定废弃"}
              </span>
            </p>
          </div>
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"可能过时"}
                </span>
              </span>
              <span className="chip s-you">
                <span className="sc-interp">
                  {"6 条"}
                </span>
              </span>
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px", display: "flex", flexDirection: "column" }}>
              <li style={{ padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px" }}>
                  <span className="mono">
                    <span className="sc-interp">
                      {"K-061"}
                    </span>
                  </span>
                  {" · "}
                  <span className="sc-interp">
                    {"Codex 需要显式写出文件清单"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"模型升级后可能不再需要 · 建议做消融测试"}
                  </span>
                </span>
              </li>
              <li style={{ padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px" }}>
                  <span className="mono">
                    <span className="sc-interp">
                      {"K-044"}
                    </span>
                  </span>
                  {" · "}
                  <span className="sc-interp">
                    {"Shopline 图片服务 v1 参数写法"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"官方文档 10/20 更新，当下条件变了"}
                  </span>
                </span>
              </li>
            </ul>
            <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"复验后三选一：确认仍有效、修订为新条目取代、废弃"}
              </span>
            </p>
          </div>
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"引用后返工偏高"}
                </span>
              </span>
              <span className="chip s-risk">
                <span className="sc-interp">
                  {"2 条"}
                </span>
              </span>
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px", display: "flex", flexDirection: "column" }}>
              <li style={{ padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px" }}>
                  <span className="mono">
                    <span className="sc-interp">
                      {"K-015"}
                    </span>
                  </span>
                  {" · "}
                  <span className="sc-interp">
                    {"折扣叠加的计算顺序"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"近 8 周引用 29 次，其中 6 次所在任务返工"}
                  </span>
                </span>
              </li>
              <li style={{ padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px" }}>
                  <span className="mono">
                    <span className="sc-interp">
                      {"K-008"}
                    </span>
                  </span>
                  {" · "}
                  <span className="sc-interp">
                    {"移动端标题不超过 28px"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"引用 20 次，返工 3 次，并与客户要求冲突"}
                  </span>
                </span>
              </li>
            </ul>
            <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"相关不等于因果：先看返工原因是不是出在这条知识上"}
              </span>
            </p>
          </div>
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"冲突"}
                </span>
              </span>
              <span className="chip s-risk">
                <span className="sc-interp">
                  {"1 条"}
                </span>
              </span>
            </div>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px", display: "flex", flexDirection: "column" }}>
              <li style={{ padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px" }}>
                  <span className="mono">
                    <span className="sc-interp">
                      {"K-008"}
                    </span>
                  </span>
                  {" · "}
                  <span className="sc-interp">
                    {"与客户 A 要求的 36px 标题冲突"}
                  </span>
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  <span className="sc-interp">
                    {"上位、特别、后法、可信度都分不出 · 已升级给你"}
                  </span>
                </span>
              </li>
            </ul>
            <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"裁决结果会作为客户层的覆盖写入，并写明理由"}
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
