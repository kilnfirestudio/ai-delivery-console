// 单任务追踪 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Task() {
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
          <Link to="/breakdown">
            {"Black Friday 页面改版"}
          </Link>
          <span aria-hidden="true">
            {"/"}
          </span>
          <span>
            {"T2"}
          </span>
        </nav>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-rose float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-rose)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"T2 · 卡片移动端图片改为服务端裁切"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px" }}>
              {"开发 C · Claude Code · 分支 "}
              <span className="mono">
                {"bf/t2-mobile-img"}
              </span>
              {" · 文件范围 "}
              <span className="mono">
                {"sections/bundle-card/*"}
              </span>
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", minWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className="chip s-you">
                {"等待你"}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "500" }}>
                {"检查点 1 / 5 · 卡在改动提交"}
              </span>
            </div>
            <div role="img" aria-label="检查点 1 / 5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
              <span style={{ height: "8px", borderRadius: "2px", background: "rgb(220, 104, 3)" }} />
              <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
            </div>
          </div>
        </div>
      </div>
      <section aria-labelledby="help-h" style={{ background: "rgba(227, 160, 8, 0.06)", border: "1px solid rgba(227, 160, 8, 0.45)", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between" }}>
          <h2 id="help-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
            {"求助：是否允许修改共用 CSS"}
          </h2>
          <span className="muted" style={{ fontSize: "13px" }}>
            {"15:11 提出 · 已等待 69 分钟"}
          </span>
        </div>
        <p style={{ margin: "0px", fontSize: "14px", lineHeight: "1.6" }}>
          {"要让移动端图片不裁掉商品主体，需要改 "}
          <span className="mono">
            {"styles/tokens.css"}
          </span>
          {" 里的图片比例变量。这个文件不在 T2 的范围里，开发 C 尝试修改时被 Claude Code 的改文件前 hook 拦下，网关记下了这次拦截。这个变量还被对比表和推荐区块使用。"}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span className="chip s-risk">
            {"后果：高 · 影响 3 个已验收区块"}
          </span>
          <span className="chip s-you">
            {"不确定：高 · 没有覆盖这种情况的已验证知识"}
          </span>
          <span className="chip s-queue">
            {"风险路由 → 你来决策"}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
          <div className="opt">
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"拆出 T2b，先改共用变量"}
              </span>
            </span>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"由开发 A 单独改 tokens.css，审查回归 agent 回归 3 个区块后，T2 再继续"}
              </span>
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"代价：多一个子任务，约晚半天 · 风险最低"}
              </span>
            </span>
          </div>
          <div className="opt">
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"允许 T2 越界修改"}
              </span>
            </span>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"临时扩大开发 C 的文件范围，改完后由 T4 统一回归"}
              </span>
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"代价：最快 · 回归失败时要回退两处"}
              </span>
            </span>
          </div>
          <div className="opt">
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              <span className="sc-interp">
                {"只改本区块"}
              </span>
            </span>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"在 bundle 卡片里覆盖比例变量，不动共用文件"}
              </span>
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"代价：留下一处特例，以后改共用样式时容易漏"}
              </span>
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <button className="btn btn-p" type="button">
            {"拆出 T2b，先改共用变量"}
          </button>
          <button className="btn" type="button">
            {"允许 T2 越界修改"}
          </button>
          <button className="btn" type="button">
            {"只改本区块"}
          </button>
        </div>
        <p className="muted" style={{ margin: "0px", fontSize: "12px" }}>
          {"你的回答直接作为由你确认的判断入库，只适用于这个任务，原文存为证据。如果处理层从中总结出通用规则（例如“共用变量的改动必须单独成任务”），那条规则才作为候选进入候选区"}
        </p>
      </section>
      <section className="card" aria-labelledby="tr-h">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <h2 id="tr-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"追溯图"}
            </h2>
            <span className="stage">
              {"阶段 3"}
            </span>
          </div>
          <span className="muted" style={{ fontSize: "13px" }}>
            {"每条线都对应一条引用或证据记录"}
          </span>
        </div>
        <p className="muted" style={{ margin: "0px 0px 16px", fontSize: "13px" }}>
          {"从右往左读：这次的每个产出依据了哪些知识，每条知识又是由哪些原始证据支撑的"}
        </p>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: "960px" }}>
            <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "300fr 170fr 300fr 170fr 300fr", marginBottom: "8px" }}>
              <span className="lbl" style={{ fontSize: "12px", fontWeight: "600", color: "rgb(161, 166, 176)" }}>
                {"证据 · 5"}
              </span>
              <span />
              <span style={{ fontSize: "12px", fontWeight: "600", color: "rgb(161, 166, 176)" }}>
                {"知识 · 检索 6，引用 4"}
              </span>
              <span />
              <span style={{ fontSize: "12px", fontWeight: "600", color: "rgb(161, 166, 176)" }}>
                {"本任务的产出 · 4"}
              </span>
            </div>
            <svg viewBox="0 0 1240 356" width="100%" role="img" aria-label="追溯图：5 条证据支撑 4 条被引用的知识，产生 2 处改动和 1 次求助；另有 2 条知识检索到但没用上，1 条候选来自新证据" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
              <path d="M300 22 C385.0 22 385.0 22 470 22" fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
              </path>
              <circle r="2.6" fill="#B4A9FF">
                <animateMotion dur="2.2s" begin="0.37s" repeatCount="indefinite" path="M300 22 C385.0 22 385.0 22 470 22" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin="0.37s" repeatCount="indefinite" />
              </circle>
              <path d="M300 84 C385.0 84 385.0 22 470 22" fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
              </path>
              <circle r="2.6" fill="#B4A9FF">
                <animateMotion dur="2.2s" begin="0.74s" repeatCount="indefinite" path="M300 84 C385.0 84 385.0 22 470 22" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin="0.74s" repeatCount="indefinite" />
              </circle>
              <path d="M300 146 C385.0 146 385.0 84 470 84" fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
              </path>
              <circle r="2.6" fill="#B4A9FF">
                <animateMotion dur="2.2s" begin="1.11s" repeatCount="indefinite" path="M300 146 C385.0 146 385.0 84 470 84" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin="1.11s" repeatCount="indefinite" />
              </circle>
              <path d="M300 208 C385.0 208 385.0 146 470 146" fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
              </path>
              <circle r="2.6" fill="#B4A9FF">
                <animateMotion dur="2.2s" begin="1.48s" repeatCount="indefinite" path="M300 208 C385.0 208 385.0 146 470 146" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin="1.48s" repeatCount="indefinite" />
              </circle>
              <path d="M300 270 C385.0 270 385.0 208 470 208" fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
              </path>
              <circle r="2.6" fill="#B4A9FF">
                <animateMotion dur="2.2s" begin="1.85s" repeatCount="indefinite" path="M300 270 C385.0 270 385.0 208 470 208" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin="1.85s" repeatCount="indefinite" />
              </circle>
              <path d="M770 22 C855.0 22 855.0 22 940 22" fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
              </path>
              <circle r="2.6" fill="#B4A9FF">
                <animateMotion dur="2.2s" begin="0.22s" repeatCount="indefinite" path="M770 22 C855.0 22 855.0 22 940 22" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin="0.22s" repeatCount="indefinite" />
              </circle>
              <path d="M770 146 C855.0 146 855.0 22 940 22" fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
              </path>
              <circle r="2.6" fill="#B4A9FF">
                <animateMotion dur="2.2s" begin="0.59s" repeatCount="indefinite" path="M770 146 C855.0 146 855.0 22 940 22" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin="0.59s" repeatCount="indefinite" />
              </circle>
              <path d="M770 84 C855.0 84 855.0 84 940 84" fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
              </path>
              <circle r="2.6" fill="#B4A9FF">
                <animateMotion dur="2.2s" begin="0.96s" repeatCount="indefinite" path="M770 84 C855.0 84 855.0 84 940 84" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin="0.96s" repeatCount="indefinite" />
              </circle>
              <path d="M770 208 C855.0 208 855.0 146 940 146" fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
              </path>
              <circle r="2.6" fill="#B4A9FF">
                <animateMotion dur="2.2s" begin="1.33s" repeatCount="indefinite" path="M770 208 C855.0 208 855.0 146 940 146" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin="1.33s" repeatCount="indefinite" />
              </circle>
              <g>
                <title>
                  {"E-311 · 返工复盘 · 09/12：9 月客户 A 移动端图片返工记录"}
                </title>
                <rect x="0" y="0" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <text x="14" y="19" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"9 月客户 A 移动端图片返工记录"}
                </text>
                <text x="14" y="35" fontSize="11" fill="#A1A6B0">
                  {"E-311 · 返工复盘 · 09/12"}
                </text>
              </g>
              <g>
                <title>
                  {"E-208 · 官方文档 · 09/14：Shopline 图片服务参数文档截图"}
                </title>
                <rect x="0" y="62" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <text x="14" y="81" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"Shopline 图片服务参数文档截图"}
                </text>
                <text x="14" y="97" fontSize="11" fill="#A1A6B0">
                  {"E-208 · 官方文档 · 09/14"}
                </text>
              </g>
              <g>
                <title>
                  {"E-102 · 复盘记录 · 06/30：布局跳动问题复盘"}
                </title>
                <rect x="0" y="124" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <text x="14" y="143" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"布局跳动问题复盘"}
                </text>
                <text x="14" y="159" fontSize="11" fill="#A1A6B0">
                  {"E-102 · 复盘记录 · 06/30"}
                </text>
              </g>
              <g>
                <title>
                  {"E-450 · 客户提供 · 08/03：客户 A 品牌手册 v2"}
                </title>
                <rect x="0" y="186" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <text x="14" y="205" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"客户 A 品牌手册 v2"}
                </text>
                <text x="14" y="221" fontSize="11" fill="#A1A6B0">
                  {"E-450 · 客户提供 · 08/03"}
                </text>
              </g>
              <g>
                <title>
                  {"E-077 · 回归脚本 · 08/21：8 月共用样式回归失败日志"}
                </title>
                <rect x="0" y="248" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <text x="14" y="267" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"8 月共用样式回归失败日志"}
                </text>
                <text x="14" y="283" fontSize="11" fill="#A1A6B0">
                  {"E-077 · 回归脚本 · 08/21"}
                </text>
              </g>
              <g>
                <title>
                  {"K-027 · 建议 · 初步验证：图片裁切走服务端渲染"}
                </title>
                <rect x="470" y="0" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <rect x="470" y="8" width="3" height="28" rx="1.5" fill="#5C616B" />
                <text x="484" y="19" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"图片裁切走服务端渲染"}
                </text>
                <text x="484" y="35" fontSize="11" fill="#A1A6B0">
                  {"K-027 · 建议 · 初步验证"}
                </text>
              </g>
              <g>
                <title>
                  {"K-035 · 默认 · 已验证：图片容器用固定比例"}
                </title>
                <rect x="470" y="62" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <rect x="470" y="70" width="3" height="28" rx="1.5" fill="#9D8FFF" />
                <text x="484" y="81" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"图片容器用固定比例"}
                </text>
                <text x="484" y="97" fontSize="11" fill="#A1A6B0">
                  {"K-035 · 默认 · 已验证"}
                </text>
              </g>
              <g>
                <title>
                  {"C-A-003 · 红线 · 已验证：品牌色与 logo 区不可改"}
                </title>
                <rect x="470" y="124" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <rect x="470" y="132" width="3" height="28" rx="1.5" fill="#D92D20" />
                <text x="484" y="143" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"品牌色与 logo 区不可改"}
                </text>
                <text x="484" y="159" fontSize="11" fill="#A1A6B0">
                  {"C-A-003 · 红线 · 已验证"}
                </text>
              </g>
              <g>
                <title>
                  {"K-021 · 默认 · 已验证：共用文件先单独改完"}
                </title>
                <rect x="470" y="186" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <rect x="470" y="194" width="3" height="28" rx="1.5" fill="#9D8FFF" />
                <text x="484" y="205" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"共用文件先单独改完"}
                </text>
                <text x="484" y="221" fontSize="11" fill="#A1A6B0">
                  {"K-021 · 默认 · 已验证"}
                </text>
              </g>
              <g>
                <title>
                  {"K-019 · 检索到但没用上：Liquid 循环嵌套不超过三层"}
                </title>
                <rect x="470" y="248" width="300" height="44" rx="8" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.12)" strokeDasharray="4 3" />
                <text x="484" y="267" fontSize="13" fontWeight="500" fill="#A1A6B0">
                  {"Liquid 循环嵌套不超过三层"}
                </text>
                <text x="484" y="283" fontSize="11" fill="#A1A6B0">
                  {"K-019 · 检索到但没用上"}
                </text>
              </g>
              <g>
                <title>
                  {"K-040 · 检索到但没用上：懒加载要给占位尺寸"}
                </title>
                <rect x="470" y="310" width="300" height="44" rx="8" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.12)" strokeDasharray="4 3" />
                <text x="484" y="329" fontSize="13" fontWeight="500" fill="#A1A6B0">
                  {"懒加载要给占位尺寸"}
                </text>
                <text x="484" y="345" fontSize="11" fill="#A1A6B0">
                  {"K-040 · 检索到但没用上"}
                </text>
              </g>
              <g>
                <title>
                  {"card.liquid 改用服务端裁切参数：已修改 · +42 −10"}
                </title>
                <rect x="940" y="0" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <text x="954" y="19" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"card.liquid 改用服务端裁切参数"}
                </text>
                <text x="954" y="35" fontSize="11" fill="#A1A6B0">
                  {"已修改 · +42 −10"}
                </text>
              </g>
              <g>
                <title>
                  {"card.css 图片容器改为固定比例：已修改 · +18 −6"}
                </title>
                <rect x="940" y="62" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <text x="954" y="81" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"card.css 图片容器改为固定比例"}
                </text>
                <text x="954" y="97" fontSize="11" fill="#A1A6B0">
                  {"已修改 · +18 −6"}
                </text>
              </g>
              <g>
                <title>
                  {"求助：是否改共用 CSS：已有知识覆盖不到这种情况"}
                </title>
                <rect x="940" y="124" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <text x="954" y="143" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"求助：是否改共用 CSS"}
                </text>
                <text x="954" y="159" fontSize="11" fill="#A1A6B0">
                  {"已有知识覆盖不到这种情况"}
                </text>
              </g>
              <g>
                <title>
                  {"候选：客户 A 断点 750px：来自新证据 E-512，不来自已有知识"}
                </title>
                <rect x="940" y="186" width="300" height="44" rx="8" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <text x="954" y="205" fontSize="13" fontWeight="500" fill="#EDEEF0">
                  {"候选：客户 A 断点 750px"}
                </text>
                <text x="954" y="221" fontSize="11" fill="#A1A6B0">
                  {"来自新证据 E-512，不来自已有知识"}
                </text>
              </g>
            </svg>
          </div>
        </div>
        <div className="muted" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "12px", fontSize: "12px" }}>
          <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
            <span aria-hidden="true" style={{ width: "3px", height: "14px", borderRadius: "1.5px", background: "rgb(217, 45, 32)" }} />
            {"红线"}
          </span>
          <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
            <span aria-hidden="true" style={{ width: "3px", height: "14px", borderRadius: "1.5px", background: "rgb(110, 92, 246)" }} />
            {"默认"}
          </span>
          <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
            <span aria-hidden="true" style={{ width: "3px", height: "14px", borderRadius: "1.5px", background: "rgb(92, 97, 107)" }} />
            {"建议"}
          </span>
          <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
            <span aria-hidden="true" style={{ width: "16px", height: "10px", borderRadius: "3px", border: "1px dashed rgb(92, 97, 107)", background: "rgb(249, 250, 251)" }} />
            {"检索到但没用上"}
          </span>
          <span>
            {"引用表示 agent 声明并经网关核对，不代表这条知识一定起了作用"}
          </span>
        </div>
      </section>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 480px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="tl-h">
            <h2 id="tl-h" style={{ margin: "0px 0px 4px", fontSize: "18px", fontWeight: "600" }}>
              {"事件时间线"}
            </h2>
            <p className="muted" style={{ margin: "0px 0px 16px", fontSize: "13px" }}>
              {"来自事件日志，只追加、不可改"}
            </p>
            <ol style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "16px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"14:02"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(92, 97, 107)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                    <span className="chip s-queue">
                      <span className="sc-interp">
                        {"领取"}
                      </span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      <span className="sc-interp">
                        {"从网关领取 T2"}
                      </span>
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"任务 ID TASK-0412-T2 · 身份 dev-c · 文件范围已锁定"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "16px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"14:03"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(110, 92, 246)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                    <span className="chip s-doing">
                      <span className="sc-interp">
                        {"检索"}
                      </span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      <span className="sc-interp">
                        {"查询“移动端图片 裁切 Shopline”"}
                      </span>
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"返回 6 条，按层级和可信度排序"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "16px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"14:05"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(110, 92, 246)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                    <span className="chip s-doing">
                      <span className="sc-interp">
                        {"引用"}
                      </span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      <span className="sc-interp">
                        {"登记引用 K-027、K-035、C-A-003、K-021"}
                      </span>
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"网关核对：4 条都在检索结果里"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "16px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"14:22"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(3, 152, 85)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                    <span className="chip s-done">
                      <span className="sc-interp">
                        {"修改"}
                      </span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      <span className="sc-interp">
                        {"card.liquid 改用服务端裁切参数"}
                      </span>
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"+42 −10"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "16px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"14:31"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(3, 152, 85)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                    <span className="chip s-done">
                      <span className="sc-interp">
                        {"修改"}
                      </span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      <span className="sc-interp">
                        {"card.css 调整图片容器"}
                      </span>
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"+18 −6"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "16px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"14:40"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(110, 92, 246)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                    <span className="chip s-doing">
                      <span className="sc-interp">
                        {"候选"}
                      </span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      <span className="sc-interp">
                        {"提交候选：客户移动端断点 750px"}
                      </span>
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"附主题源码行号与 2 张截图"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "16px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"15:08"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(110, 92, 246)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                    <span className="chip s-doing">
                      <span className="sc-interp">
                        {"检索"}
                      </span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      <span className="sc-interp">
                        {"查询“共用 tokens 修改流程”"}
                      </span>
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"只命中 K-021，没有覆盖跨区块影响的规则"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "16px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"15:10"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(217, 45, 32)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                    <span className="chip s-risk">
                      <span className="sc-interp">
                        {"拦截"}
                      </span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      <span className="sc-interp">
                        {"尝试修改 styles/tokens.css"}
                      </span>
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"改文件前 hook 检查路径：不在文件范围内，拒绝修改并向网关回报"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "48px 16px 1fr", gap: "10px", paddingBottom: "16px" }}>
                <span className="mono muted" style={{ paddingTop: "2px" }}>
                  <span className="sc-interp">
                    {"15:11"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ width: "10px", height: "10px", borderRadius: "5px", marginTop: "5px", background: "rgb(220, 104, 3)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                    <span className="chip s-you">
                      <span className="sc-interp">
                        {"求助"}
                      </span>
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      <span className="sc-interp">
                        {"提出求助，附 3 个方案"}
                      </span>
                    </span>
                  </div>
                  <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                    <span className="sc-interp">
                      {"风险路由判定：高后果 × 高不确定，交给你"}
                    </span>
                  </span>
                </div>
              </li>
            </ol>
          </section>
          <section className="card" aria-labelledby="fl-h">
            <h2 id="fl-h" style={{ margin: "0px 0px 12px", fontSize: "18px", fontWeight: "600" }}>
              {"改动文件"}
            </h2>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span className="mono">
                  <span className="sc-interp">
                    {"sections/bundle-card/card.liquid"}
                  </span>
                </span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span className="mono" style={{ color: "rgb(86, 211, 100)" }}>
                    <span className="sc-interp">
                      {"+42"}
                    </span>
                  </span>
                  <span className="mono" style={{ color: "rgb(255, 123, 114)" }}>
                    <span className="sc-interp">
                      {"−10"}
                    </span>
                  </span>
                  <span className="chip s-done">
                    <span className="sc-interp">
                      {"已修改"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span className="mono">
                  <span className="sc-interp">
                    {"sections/bundle-card/card.css"}
                  </span>
                </span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span className="mono" style={{ color: "rgb(86, 211, 100)" }}>
                    <span className="sc-interp">
                      {"+18"}
                    </span>
                  </span>
                  <span className="mono" style={{ color: "rgb(255, 123, 114)" }}>
                    <span className="sc-interp">
                      {"−6"}
                    </span>
                  </span>
                  <span className="chip s-done">
                    <span className="sc-interp">
                      {"已修改"}
                    </span>
                  </span>
                </div>
              </li>
              <li style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span className="mono">
                  <span className="sc-interp">
                    {"styles/tokens.css"}
                  </span>
                </span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span className="mono" style={{ color: "rgb(86, 211, 100)" }}>
                    <span className="sc-interp" />
                  </span>
                  <span className="mono" style={{ color: "rgb(255, 123, 114)" }}>
                    <span className="sc-interp" />
                  </span>
                  <span className="chip s-risk">
                    <span className="sc-interp">
                      {"被 hook 拦下"}
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div style={{ flex: "1 1 560px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="cp-h">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
              <h2 id="cp-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"完成度 · 1 / 5"}
              </h2>
              <span className="muted" style={{ fontSize: "13px" }}>
                {"每个检查点都要有对应的事件"}
              </span>
            </div>
            <ol style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "28px 1fr auto", gap: "10px", alignItems: "center", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgb(3, 152, 85)", color: "rgb(255, 255, 255)" }}>
                  <span className="sc-interp">
                    {"1"}
                  </span>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"领取"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"14:02 任务事件 #8812"}
                    </span>
                  </span>
                </div>
                <span className="chip s-done">
                  <span className="sc-interp">
                    {"通过"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "28px 1fr auto", gap: "10px", alignItems: "center", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgb(220, 104, 3)", color: "rgb(255, 255, 255)" }}>
                  <span className="sc-interp">
                    {"2"}
                  </span>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"改动提交"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"本地已改 2 个文件，未提交：卡在求助"}
                    </span>
                  </span>
                </div>
                <span className="chip s-you">
                  <span className="sc-interp">
                    {"卡住"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "28px 1fr auto", gap: "10px", alignItems: "center", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"3"}
                  </span>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"自测与截图"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"还没有回报结果"}
                    </span>
                  </span>
                </div>
                <span className="chip s-queue">
                  <span className="sc-interp">
                    {"未开始"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "28px 1fr auto", gap: "10px", alignItems: "center", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"4"}
                  </span>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"你看过截图"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"还没有审核事件"}
                    </span>
                  </span>
                </div>
                <span className="chip s-queue">
                  <span className="sc-interp">
                    {"未开始"}
                  </span>
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "28px 1fr auto", gap: "10px", alignItems: "center", padding: "8px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", background: "rgba(255, 255, 255, 0.08)", color: "rgb(161, 166, 176)" }}>
                  <span className="sc-interp">
                    {"5"}
                  </span>
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    <span className="sc-interp">
                      {"合并回归通过"}
                    </span>
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    <span className="sc-interp">
                      {"由 T4 合并后回报"}
                    </span>
                  </span>
                </div>
                <span className="chip s-queue">
                  <span className="sc-interp">
                    {"未开始"}
                  </span>
                </span>
              </li>
            </ol>
          </section>
          <section className="card" aria-labelledby="kn-h">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
              <h2 id="kn-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"用到的知识"}
              </h2>
              <span className="muted" style={{ fontSize: "13px" }}>
                {"检索 6 条 · 声称引用 4 条 · 核验一致 4 / 4"}
              </span>
            </div>
            <p className="muted" style={{ margin: "0px 0px 12px", fontSize: "13px" }}>
              {"检索到但没用上的知识也列出来，用来判断检索是否精准"}
            </p>
            <div style={{ overflowX: "auto" }}>
              <div role="table" style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px", display: "flex", flexDirection: "column" }}>
                <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 2.6fr) minmax(0px, 1.1fr) 76px 90px 100px" }}>
                  <div role="columnheader" className="th">
                    {"知识"}
                  </div>
                  <div role="columnheader" className="th">
                    {"层级"}
                  </div>
                  <div role="columnheader" className="th">
                    {"约束"}
                  </div>
                  <div role="columnheader" className="th">
                    {"可信度"}
                  </div>
                  <div role="columnheader" className="th">
                    {"本任务"}
                  </div>
                </div>
                <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 2.6fr) minmax(0px, 1.1fr) 76px 90px 100px" }}>
                  <div role="cell" className="td">
                    <span className="mono">
                      <span className="sc-interp">
                        {"K-027"}
                      </span>
                    </span>
                    <br />
                    <span>
                      <span className="sc-interp">
                        {"商品图片的裁切走服务端渲染，不在前端用 CSS 硬裁"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"L2 bundle 插件"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-queue">
                      <span className="sc-interp">
                        {"建议"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"初步验证"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-done">
                      <span className="sc-interp">
                        {"已引用"}
                      </span>
                    </span>
                  </div>
                </div>
                <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 2.6fr) minmax(0px, 1.1fr) 76px 90px 100px" }}>
                  <div role="cell" className="td">
                    <span className="mono">
                      <span className="sc-interp">
                        {"K-035"}
                      </span>
                    </span>
                    <br />
                    <span>
                      <span className="sc-interp">
                        {"图片容器用 aspect-ratio 固定比例，防止布局跳动"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"L0 全局"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-doing">
                      <span className="sc-interp">
                        {"默认"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"已验证"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-done">
                      <span className="sc-interp">
                        {"已引用"}
                      </span>
                    </span>
                  </div>
                </div>
                <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 2.6fr) minmax(0px, 1.1fr) 76px 90px 100px" }}>
                  <div role="cell" className="td">
                    <span className="mono">
                      <span className="sc-interp">
                        {"C-A-003"}
                      </span>
                    </span>
                    <br />
                    <span>
                      <span className="sc-interp">
                        {"品牌色和 logo 区域不可改动"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"L3 客户 A"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-risk">
                      <span className="sc-interp">
                        {"红线"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"已验证"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-done">
                      <span className="sc-interp">
                        {"已引用"}
                      </span>
                    </span>
                  </div>
                </div>
                <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 2.6fr) minmax(0px, 1.1fr) 76px 90px 100px" }}>
                  <div role="cell" className="td">
                    <span className="mono">
                      <span className="sc-interp">
                        {"K-021"}
                      </span>
                    </span>
                    <br />
                    <span>
                      <span className="sc-interp">
                        {"多个子任务共用的文件，先单独改完再并行"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"L0 全局"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-doing">
                      <span className="sc-interp">
                        {"默认"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"已验证"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-done">
                      <span className="sc-interp">
                        {"已引用"}
                      </span>
                    </span>
                  </div>
                </div>
                <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 2.6fr) minmax(0px, 1.1fr) 76px 90px 100px" }}>
                  <div role="cell" className="td">
                    <span className="mono">
                      <span className="sc-interp">
                        {"K-019"}
                      </span>
                    </span>
                    <br />
                    <span>
                      <span className="sc-interp">
                        {"Liquid 模板里避免嵌套三层以上的循环"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"L1 Shopline"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-queue">
                      <span className="sc-interp">
                        {"建议"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"已验证"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-queue">
                      <span className="sc-interp">
                        {"检索未用"}
                      </span>
                    </span>
                  </div>
                </div>
                <div role="row" className="tr" style={{ display: "grid", gridTemplateColumns: "minmax(0px, 2.6fr) minmax(0px, 1.1fr) 76px 90px 100px" }}>
                  <div role="cell" className="td">
                    <span className="mono">
                      <span className="sc-interp">
                        {"K-040"}
                      </span>
                    </span>
                    <br />
                    <span>
                      <span className="sc-interp">
                        {"图片懒加载要给出占位尺寸，防止布局跳动"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"L0 全局"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-queue">
                      <span className="sc-interp">
                        {"参考"}
                      </span>
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ whiteSpace: "nowrap" }}>
                    <span className="sc-interp">
                      {"假设"}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    <span className="chip s-queue">
                      <span className="sc-interp">
                        {"检索未用"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="card" aria-labelledby="cd-h">
            <h2 id="cd-h" style={{ margin: "0px 0px 12px", fontSize: "18px", fontWeight: "600" }}>
              {"产出与检查"}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                  <span className="chip s-doing">
                    {"候选"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"客户层 · 必须由你确认"}
                  </span>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  {"该客户主题的移动端断点是 750px，不是默认的 768px"}
                </span>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"证据：主题源码 "}
                  <span className="mono">
                    {"layout/theme.liquid"}
                  </span>
                  {" 第 88 行 · 预览站截图 2 张"}
                </span>
                <Link to="/review" className="btn" style={{ alignSelf: "flex-start", minHeight: "36px", fontSize: "13px" }}>
                  {"去审核"}
                </Link>
              </div>
              <div style={{ border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "10px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {"截图比对"}
                  </span>
                  <span className="chip s-queue">
                    {"未开始"}
                  </span>
                </div>
                <span className="muted" style={{ fontSize: "12px" }}>
                  {"iPhone 13 · Pixel 7 · iPad mini · 桌面 1440，等求助解决后由审查回归 agent 执行"}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
