// 组件规范 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Spec() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-violet float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
                  <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
                  <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
                  <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"组件规范"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"现代风格：中性近黑底、细边框、大圆角、单一紫蓝强调色、克制的状态色。趣味来自玻璃图标、机器人头像和小动效，不靠满屏发光"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span className="chip s-queue">
              {"示例数据"}
            </span>
          </div>
        </div>
      </div>
      <section className="card" aria-labelledby="cmo-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="cmo-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"动效规范"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"SVG 动画用原生 SMIL，HTML 动画用 CSS；不依赖脚本，导出和预览里都能播放"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <p className="lbl" style={{ marginBottom: "12px" }}>
          {"动效样例 · 全部在循环播放"}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "16px", alignItems: "stretch" }}>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <svg width="150" height="56" viewBox="0 0 150 56" aria-hidden="true">
                <polyline points="4,46 26,40 48,42 70,30 92,32 114,18 146,10" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="100" strokeDasharray="100">
                  <animate attributeName="stroke-dashoffset" values="100;0;0" keyTimes="0;.55;1" dur="2.8s" repeatCount="indefinite" />
                </polyline>
                <circle cx="146" cy="10" r="3" fill="#B4A9FF">
                  <animate attributeName="r" values="0;0;4;3;3" keyTimes="0;.5;.6;.66;1" dur="2.8s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"折线绘入 · 1.3s"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"图表进入视野时从左画到右，末点弹出后持续呼吸"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="8" />
                <circle cx="32" cy="32" r="24" fill="none" stroke="#3FB950" strokeWidth="8" pathLength="100" strokeDasharray="48 100" strokeDashoffset="0" transform="rotate(-90 32 32)">
                  <animate attributeName="stroke-dasharray" values="0 100;0 100;48 100;48 100" keyTimes="0;0.00;0.30;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="32" cy="32" r="24" fill="none" stroke="#4F8CFF" strokeWidth="8" pathLength="100" strokeDasharray="16 100" strokeDashoffset="-50" transform="rotate(-90 32 32)">
                  <animate attributeName="stroke-dasharray" values="0 100;0 100;16 100;16 100" keyTimes="0;0.15;0.45;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="32" cy="32" r="24" fill="none" stroke="#E3A008" strokeWidth="8" pathLength="100" strokeDasharray="10 100" strokeDashoffset="-68" transform="rotate(-90 32 32)">
                  <animate attributeName="stroke-dasharray" values="0 100;0 100;10 100;10 100" keyTimes="0;0.30;0.60;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="32" cy="32" r="24" fill="none" stroke="#3A3D44" strokeWidth="8" pathLength="100" strokeDasharray="20 100" strokeDashoffset="-80" transform="rotate(-90 32 32)">
                  <animate attributeName="stroke-dasharray" values="0 100;0 100;20 100;20 100" keyTimes="0;0.45;0.75;1" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"环形分段 · 每段 0.7s"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"按顺序一段段长出，先完成、再进行中、最后排队"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <span className="cu-loop to-148" style={{ fontSize: "34px", fontWeight: "600", letterSpacing: "-0.02em" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"数字滚动 · 1.4s"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"关键计数从 0 滚到当前值，只在进入时播放一次"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <span className="shim" style={{ display: "block", width: "150px", height: "14px", borderRadius: "7px" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"进行中光带 · 2.4s 循环"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"时间轴上正在工作的条，光带表示“还在跑”"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <svg width="150" height="40" viewBox="0 0 150 40" aria-hidden="true">
                <rect x="2" y="12" width="26" height="16" rx="4" fill="#16171A" stroke="rgba(255,255,255,.12)" />
                <rect x="122" y="12" width="26" height="16" rx="4" fill="#16171A" stroke="rgba(124,108,255,.5)" />
                <line x1="30" y1="20" x2="120" y2="20" stroke="#3A3D44" strokeWidth="1.5" />
                <circle r="3" fill="#B4A9FF">
                  <animateMotion dur="1.5s" begin="0s" repeatCount="indefinite" path="M30 20 H120" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="1.5s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#B4A9FF">
                  <animateMotion dur="1.5s" begin="0.5s" repeatCount="indefinite" path="M30 20 H120" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#B4A9FF">
                  <animateMotion dur="1.5s" begin="1s" repeatCount="indefinite" path="M30 20 H120" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="1.5s" begin="1s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"数据包流动 · 1.2–1.5s"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"流水线、架构图、任务溯源：数据从哪来到哪去"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
                <circle cx="36" cy="36" r="10" fill="none" stroke="#B4A9FF" strokeWidth="1.5">
                  <animate attributeName="r" from="10" to="32" dur="2.4s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from=".9" to="0" dur="2.4s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle cx="36" cy="36" r="10" fill="none" stroke="#B4A9FF" strokeWidth="1.5">
                  <animate attributeName="r" from="10" to="32" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from=".9" to="0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="36" cy="36" r="10" fill="none" stroke="#B4A9FF" strokeWidth="1.5">
                  <animate attributeName="r" from="10" to="32" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from=".9" to="0" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="36" cy="36" r="9" fill="#7C6CFF" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"选中涟漪 · 2s 循环"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"图谱里当前选中的节点、风险矩阵里交给你的事项"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <span className="breathe" style={{ display: "block", width: "120px", height: "26px", borderRadius: "4px", background: "rgba(227, 160, 8, 0.25)", border: "1px solid rgb(227, 160, 8)" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"等待呼吸 · 2.2s 循环"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"等你超过 30 分钟的 agent 和任务，琥珀色光晕"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ position: "relative", width: "64px", height: "72px", borderRadius: "8px", background: "rgb(237, 238, 240)", overflow: "hidden" }}>
                <span className="diffp" style={{ position: "absolute", left: "6px", right: "6px", bottom: "10px", height: "14px", border: "1.5px solid rgb(248, 81, 73)", borderRadius: "3px" }} />
                <span className="scan" />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"截图扫描 · 2.8s 循环"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"截图对比时扫描线走过，差异框同步闪动"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div className="ants" style={{ width: "150px", height: "56px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "rgb(138, 143, 152)" }}>
                {"拖入文件"}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"蚂蚁线 · 1s 循环"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"可拖放区域，告诉你这里能放东西"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                <span className="relay" style={{ width: "26px", height: "40px", borderRadius: "6px", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.07)", animationDelay: "0s" }} />
                <span className="relay" style={{ width: "26px", height: "40px", borderRadius: "6px", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.07)", animationDelay: "1s" }} />
                <span className="relay" style={{ width: "26px", height: "40px", borderRadius: "6px", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.07)", animationDelay: "2s" }} />
                <span className="relay" style={{ width: "26px", height: "40px", borderRadius: "6px", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.07)", animationDelay: "3s" }} />
                <span className="relay" style={{ width: "26px", height: "40px", borderRadius: "6px", background: "rgb(22, 23, 26)", border: "1px solid rgba(255, 255, 255, 0.07)", animationDelay: "4s" }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"接力点亮 · 5s 一轮"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"五层策略按顺序点亮，表示决策依次经过各层"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <svg className="bot bot-work" width="56" height="56" viewBox="0 0 64 64" role="img" aria-label="进行中" style={{ flex: "0 0 auto", overflow: "visible" }}>
                <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                <g className="awake">
                  <circle className="ant" cx="32" cy="6" r="3">
                    <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                </g>
                <g className="asleep">
                  <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                </g>
                <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                <g className="awake eyes">
                  <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                    <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  </rect>
                  <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                    <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  </rect>
                </g>
                <g className="asleep">
                  <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                </g>
                <g className="gear">
                  <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                  <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                  </path>
                </g>
                <g className="q">
                  <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                  <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                  <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                    {"?"}
                  </text>
                </g>
                <g className="zz">
                  <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                    {"z"}
                    <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                  </text>
                  <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                    {"z"}
                    <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                  </text>
                </g>
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"机器人状态"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"转圈、眨眼、问号跳动、飘 z，四种状态一眼可分"}
              </span>
            </div>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "150px" }}>
            <div style={{ height: "72px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div className="card" style={{ width: "150px", padding: "12px", fontSize: "12px", color: "rgb(161, 166, 176)", textAlign: "center" }}>
                {"悬停我：抬起 2px"}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"悬停抬起 · 150ms"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"卡片、节点、按键的即时反馈；按下缩到 97%"}
              </span>
            </div>
          </div>
        </div>
        <div style={{ height: "24px" }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          <div style={{ flex: "1.3 1 520px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "520px" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ width: "120px" }}>
                      {"名称"}
                    </th>
                    <th scope="col" style={{ width: "220px" }}>
                      {"数值"}
                    </th>
                    <th scope="col">
                      {"用在哪里"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="mono">
                        {"--t-fast"}
                      </span>
                    </td>
                    <td>
                      {"150 ms"}
                    </td>
                    <td>
                      {"悬停、按下、切换"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono">
                        {"--t-mid"}
                      </span>
                    </td>
                    <td>
                      {"480 ms"}
                    </td>
                    <td>
                      {"页面区块依次上浮进入，每块间隔 60 ms"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono">
                        {"--t-data"}
                      </span>
                    </td>
                    <td>
                      {"1000–1400 ms"}
                    </td>
                    <td>
                      {"折线、环形、仪表、进度条、数字滚动"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono">
                        {"循环"}
                      </span>
                    </td>
                    <td>
                      {"1–6 s"}
                    </td>
                    <td>
                      {"只用于正在发生的事：进行中、等你、实时流、数据流动"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono">
                        {"--ease"}
                      </span>
                    </td>
                    <td>
                      {"cubic-bezier(.2, .8, .2, 1)"}
                    </td>
                    <td>
                      {"所有入场和数据动画：快出慢停"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ flex: "1 1 340px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <p className="lbl" style={{ marginBottom: "4px" }}>
              {"原则"}
            </p>
            <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"静态数据只动一次"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"进入页面时画出来，之后保持不动，方便读数"}
                  </span>
                </div>
                <div />
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"循环动效 = 有东西在发生"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"进行中、等你、实时调用、数据流动。完成的事情不再动"}
                  </span>
                </div>
                <div />
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"颜色不动，位置动"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"状态色固定不闪烁变色，靠光晕、光带、粒子表现活跃"}
                  </span>
                </div>
                <div />
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    {"减少动态效果"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                    {"上浮、摆动、扫描、粒子停止；呼吸光晕和指示灯保留，避免信息丢失"}
                  </span>
                </div>
                <div />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="card" aria-labelledby="ci-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="ci-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"图标与动效"}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <p className="lbl" style={{ marginBottom: "12px" }}>
          {"导航用线条图标 · 16px"}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", color: "rgb(161, 166, 176)", marginBottom: "24px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            {"全局总览"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            </svg>
            {"待审"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
              <circle cx="12" cy="12" r="1" />
              <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
            </svg>
            {"截图审核"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M8 2v3" />
              <path d="M16 2v3" />
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="m9 15 2 2 4-4" />
            </svg>
            {"每周复盘"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M9 14h6" />
              <path d="M12 17v-6" />
            </svg>
            {"登记需求"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
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
            {"需求拆解"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2" />
              <path d="M20 14h2" />
              <path d="M15 13v2" />
              <path d="M9 13v2" />
            </svg>
            {"Agent"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            {"任务追踪"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M12 5v16" />
              <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
            </svg>
            {"知识库"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <rect x="16" y="16" width="6" height="6" rx="1" />
              <rect x="2" y="16" width="6" height="6" rx="1" />
              <rect x="9" y="2" width="6" height="6" rx="1" />
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
              <path d="M12 12V8" />
            </svg>
            {"知识图谱"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M10 12h4" />
              <path d="M10 8h4" />
              <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
              <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
              <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
            </svg>
            {"客户"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
            {"指标"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
            {"实时调用"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            {"采集与处理"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
            {"分发"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M12 3v18" />
              <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
              <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
              <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
              <path d="M7 21h10" />
            </svg>
            {"决策规则"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
              <line x1="6" x2="6.01" y1="6" y2="6" />
              <line x1="6" x2="6.01" y1="18" y2="18" />
            </svg>
            {"系统健康"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
              <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
              <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
              <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
            </svg>
            {"组件"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M22 8c0-2.3-.8-4.3-2-6" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
              <path d="M4 2C2.8 3.7 2 5.7 2 8" />
            </svg>
            {"提醒"}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
              <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
              <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
              <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
              <path d="M4 22h16" />
              <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
              <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
            </svg>
            {"成就"}
          </span>
        </div>
        <p className="lbl" style={{ marginBottom: "12px" }}>
          {"标题和卡片用玻璃图块"}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(104px, 1fr))", gap: "12px" }}>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-violet " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"全局总览"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-amber " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"待审"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-cyan " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-cyan)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                <circle cx="12" cy="12" r="1" />
                <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"截图审核"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-rose " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-rose)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v3" />
                <path d="M16 2v3" />
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="m9 15 2 2 4-4" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"每周复盘"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-green " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-green)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M9 14h6" />
                <path d="M12 17v-6" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"登记需求"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-blue " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-blue)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
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
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"需求拆解"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-violet " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"Agent"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-rose " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-rose)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"任务追踪"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-blue " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-blue)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v16" />
                <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"知识库"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-violet " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="16" y="16" width="6" height="6" rx="1" />
                <rect x="2" y="16" width="6" height="6" rx="1" />
                <rect x="9" y="2" width="6" height="6" rx="1" />
                <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                <path d="M12 12V8" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"知识图谱"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-cyan " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-cyan)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 12h4" />
                <path d="M10 8h4" />
                <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"客户"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-green " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-green)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"指标"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-amber " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"实时调用"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-cyan " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-cyan)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"采集与处理"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-blue " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-blue)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"分发"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-violet " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                <path d="M7 21h10" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"决策规则"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-green " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-green)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                <line x1="6" x2="6.01" y1="6" y2="6" />
                <line x1="6" x2="6.01" y1="18" y2="18" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"系统健康"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-violet " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
                <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
                <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
                <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"组件"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-amber " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M22 8c0-2.3-.8-4.3-2-6" />
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                <path d="M4 2C2.8 3.7 2 5.7 2 8" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"提醒"}
            </span>
          </div>
          <div className="well" style={{ borderRadius: "12px", padding: "16px 8px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <span className="gt gt-amber " aria-hidden="true" style={{ width: "48px", height: "48px", borderRadius: "13px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
                <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
                <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
                <path d="M4 22h16" />
                <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"成就"}
            </span>
          </div>
        </div>
        <div style={{ height: "24px" }} />
        <p className="lbl" style={{ marginBottom: "12px" }}>
          {"Agent 头像 · 4 种状态"}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <svg className="bot bot-work" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="进行中" style={{ flex: "0 0 auto", overflow: "visible" }}>
              <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
              <g className="awake">
                <circle className="ant" cx="32" cy="6" r="3">
                  <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                </circle>
              </g>
              <g className="asleep">
                <circle cx="32" cy="6" r="3" fill="#3A3D44" />
              </g>
              <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
              <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
              <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
              <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
              <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
              <g className="awake eyes">
                <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                  <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                </rect>
                <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                  <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                </rect>
              </g>
              <g className="asleep">
                <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
              </g>
              <g className="gear">
                <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                </path>
              </g>
              <g className="q">
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                  {"?"}
                </text>
              </g>
              <g className="zz">
                <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                  {"z"}
                  <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                </text>
                <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                  {"z"}
                  <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                  <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                </text>
              </g>
            </svg>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"进行中"}
            </span>
            <span className="muted" style={{ fontSize: "11px" }}>
              {"右下角转圈、天线闪烁"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <svg className="bot bot-wait" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="等待你" style={{ flex: "0 0 auto", overflow: "visible" }}>
              <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
              <g className="awake">
                <circle className="ant" cx="32" cy="6" r="3">
                  <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                </circle>
              </g>
              <g className="asleep">
                <circle cx="32" cy="6" r="3" fill="#3A3D44" />
              </g>
              <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
              <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
              <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
              <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
              <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
              <g className="awake eyes">
                <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                  <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                </rect>
                <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                  <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                </rect>
              </g>
              <g className="asleep">
                <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
              </g>
              <g className="gear">
                <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                </path>
              </g>
              <g className="q">
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                  {"?"}
                </text>
              </g>
              <g className="zz">
                <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                  {"z"}
                  <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                </text>
                <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                  {"z"}
                  <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                  <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                </text>
              </g>
            </svg>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"等待你"}
            </span>
            <span className="muted" style={{ fontSize: "11px" }}>
              {"问号跳动、天线琥珀色"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <svg className="bot bot-idle" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="空闲" style={{ flex: "0 0 auto", overflow: "visible" }}>
              <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
              <g className="awake">
                <circle className="ant" cx="32" cy="6" r="3">
                  <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                </circle>
              </g>
              <g className="asleep">
                <circle cx="32" cy="6" r="3" fill="#3A3D44" />
              </g>
              <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
              <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
              <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
              <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
              <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
              <g className="awake eyes">
                <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                  <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                </rect>
                <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                  <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                </rect>
              </g>
              <g className="asleep">
                <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
              </g>
              <g className="gear">
                <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                </path>
              </g>
              <g className="q">
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                  {"?"}
                </text>
              </g>
              <g className="zz">
                <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                  {"z"}
                  <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                </text>
                <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                  {"z"}
                  <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                  <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                </text>
              </g>
            </svg>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"空闲"}
            </span>
            <span className="muted" style={{ fontSize: "11px" }}>
              {"闭眼、飘出 z"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <svg className="bot bot-stand" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="待命" style={{ flex: "0 0 auto", overflow: "visible" }}>
              <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
              <g className="awake">
                <circle className="ant" cx="32" cy="6" r="3">
                  <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                </circle>
              </g>
              <g className="asleep">
                <circle cx="32" cy="6" r="3" fill="#3A3D44" />
              </g>
              <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
              <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
              <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
              <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
              <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
              <g className="awake eyes">
                <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                  <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                </rect>
                <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                  <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                  <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                </rect>
              </g>
              <g className="asleep">
                <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
              </g>
              <g className="gear">
                <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                </path>
              </g>
              <g className="q">
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                  {"?"}
                </text>
              </g>
              <g className="zz">
                <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                  {"z"}
                  <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                </text>
                <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                  {"z"}
                  <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                  <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                </text>
              </g>
            </svg>
            <span style={{ fontSize: "12px", color: "rgb(201, 205, 212)" }}>
              {"待命"}
            </span>
            <span className="muted" style={{ fontSize: "11px" }}>
              {"闭眼、天线熄灭"}
            </span>
          </div>
        </div>
        <div style={{ height: "24px" }} />
        <p className="lbl" style={{ marginBottom: "12px" }}>
          {"循环动效"}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
            <div className="radar" aria-hidden="true" style={{ width: "110px", height: "110px" }}>
              <svg width="110" height="110" viewBox="0 0 100 100" style={{ position: "absolute", inset: "0px" }}>
                <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,.10)" />
                <circle cx="50" cy="50" r="31" fill="none" stroke="rgba(255,255,255,.07)" />
                <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(255,255,255,.06)" />
                <path d="M50 4 V96 M4 50 H96" stroke="rgba(255,255,255,.05)" />
                <circle cx="70" cy="34" r="3" fill="#3FB950">
                  <animate attributeName="opacity" values="1;.25;1" dur="1.6s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle cx="70" cy="34" r="3" fill="none" stroke="#3FB950">
                  <animate attributeName="r" values="3;10" dur="1.6s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".8;0" dur="1.6s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle cx="32" cy="64" r="3" fill="#E3A008">
                  <animate attributeName="opacity" values="1;.25;1" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="32" cy="64" r="3" fill="none" stroke="#E3A008">
                  <animate attributeName="r" values="3;10" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".8;0" dur="1.6s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="62" cy="72" r="2.5" fill="#A99CFF">
                  <animate attributeName="opacity" values="1;.25;1" dur="1.6s" begin="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="62" cy="72" r="2.5" fill="none" stroke="#A99CFF">
                  <animate attributeName="r" values="2.5;9.5" dur="1.6s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".8;0" dur="1.6s" begin="1s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div className="sweep" />
            </div>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"雷达扫描：实时调用页"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
            <div style={{ position: "relative", display: "inline-flex", padding: "14px 10px 0px" }}>
              <span className="gt gt-amber float" aria-hidden="true" style={{ width: "56px", height: "56px", borderRadius: "16px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
                  <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
                  <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
                  <path d="M4 22h16" />
                  <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                  <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
                </svg>
              </span>
              <svg className="spark" aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" style={{ position: "absolute", right: "-14px", top: "-14px", overflow: "visible" }}>
                <path d="M10 2 L11.6 8.4 L18 10 L11.6 11.6 L10 18 L8.4 11.6 L2 10 L8.4 8.4 Z" fill="#F2C14E" opacity=".2">
                  <animate attributeName="opacity" values=".15;1;.15" dur="1.8s" begin="0s" repeatCount="indefinite" />
                </path>
                <path d="M30 14 L31 18 L35 19 L31 20 L30 24 L29 20 L25 19 L29 18 Z" fill="#D6D0FF" opacity=".2">
                  <animate attributeName="opacity" values=".15;1;.15" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
                </path>
                <path d="M24 30 L25 33 L28 34 L25 35 L24 38 L23 35 L20 34 L23 33 Z" fill="#F2C14E" opacity=".2">
                  <animate attributeName="opacity" values=".15;1;.15" dur="1.8s" begin="1.2s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"闪光：指标达成时"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
            <span className="gt gt-amber " aria-hidden="true" style={{ width: "56px", height: "56px", borderRadius: "16px" }}>
              <svg className="glyph-swing" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#gs-amber)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M22 8c0-2.3-.8-4.3-2-6" />
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                <path d="M4 2C2.8 3.7 2 5.7 2 8" />
              </svg>
            </span>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"摇铃：有阻塞任务时"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <svg width="220" height="60" viewBox="0 0 220 60" aria-hidden="true">
              <path d="M10 50 C80 50 120 10 210 10" fill="none" stroke="#A99CFF" strokeWidth="2" strokeDasharray="5 7">
                <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
              </path>
              <circle r="3.5" fill="#E9E5FF">
                <animateMotion dur="2s" repeatCount="indefinite" path="M10 50 C80 50 120 10 210 10" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.88;1" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"流动虚线：证据 → 知识 → 产出"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              {"T3 · 检查点 1 / 5"}
              <span className="typing">
                <i />
                <i />
                <i />
              </span>
            </span>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"输入中：agent 正在工作"}
            </span>
          </div>
        </div>
        <p className="muted" style={{ margin: "16px 0px 0px", fontSize: "12px" }}>
          {"线条图标来自开源图标库 Lucide（ISC 许可）。动效用 CSS 和 SVG 原生动画（SMIL）实现，比 GIF 清晰、文件更小。系统开启“减少动态效果”时，位移类动效停止，颜色和透明度提示保留"}
        </p>
      </section>
      <section className="card" aria-labelledby="cm-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="cm-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"材质与层级"}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px", alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="base" style={{ height: "96px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"底座"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"近黑 #08090A，顶部淡紫蓝光晕"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="tier1" style={{ height: "96px", padding: "0px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"第一级 · 需要你处理"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"缓慢流动的渐变描边"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="card" style={{ height: "96px", padding: "0px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"第二级 · 标准面板"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"#101113，1px 细边框，圆角 14"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="quiet" style={{ height: "76px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"第三级 · 参考信息"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"无面板，只有一条分隔线"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="well" style={{ height: "96px", borderRadius: "12px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"内嵌区"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"更深一层，用于输入框和分组"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div className="paper" style={{ height: "96px", padding: "0px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600" }}>
                {"单据"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"顶部一条强调色细线"}
              </span>
            </div>
          </div>
        </div>
        <p className="muted" style={{ margin: "16px 0px 0px", fontSize: "12px" }}>
          {"层级靠字号、留白和细边框区分；只有第一级用动效。一页里第一级最多一块"}
        </p>
      </section>
      <section className="card" aria-labelledby="ck-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="ck-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"按键"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"主按键是浅色实底；次按键是深色描边；当前步骤是按下状态"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(4, minmax(0px, 1fr))", gap: "16px", paddingBottom: "8px" }}>
          <span className="lbl" />
          <span className="lbl">
            {"默认"}
          </span>
          <span className="lbl">
            {"悬停"}
          </span>
          <span className="lbl">
            {"按下"}
          </span>
          <span className="lbl">
            {"禁用"}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(4, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"主按键"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <button className="btn btn-p" type="button">
              {"登记需求"}
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <button className="btn btn-p" type="button" style={{ background: "rgb(250, 250, 250)", borderColor: "rgb(250, 250, 250)", color: "rgb(8, 9, 10)" }}>
              {"登记需求"}
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <button className="btn btn-p is-active" type="button">
              {"登记需求"}
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <button className="btn btn-p is-disabled" type="button" disabled>
              {"登记需求"}
            </button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(4, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"次按键"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <button className="btn" type="button">
              {"去看截图"}
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <button className="btn" type="button" style={{ background: "rgb(34, 35, 39)", borderColor: "rgba(255, 255, 255, 0.18)", color: "rgb(255, 255, 255)" }}>
              {"去看截图"}
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <button className="btn is-active" type="button">
              {"去看截图"}
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <button className="btn is-disabled" type="button" disabled>
              {"去看截图"}
            </button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(4, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"步骤键"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <a className="btn" href="#">
              {"1 看结果 ✓"}
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <a className="btn" href="#" aria-current="step">
              {"3 处理知识"}
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"当前步骤 = 按下并保持"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }} />
        </div>
      </section>
      <section className="card" aria-labelledby="cc-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="cc-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"控件"}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(3, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"分段控件"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div className="seg" role="group" aria-label="示例">
              <button type="button" aria-pressed="true">
                {"全部项目"}
              </button>
              <button type="button" aria-pressed="false">
                {"Shopline"}
              </button>
              <button type="button" aria-pressed="false">
                {"xuvia"}
              </button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div className="seg" role="group" aria-label="示例">
              <button type="button" aria-pressed="false">
                {"并排"}
              </button>
              <button type="button" aria-pressed="true">
                {"叠加"}
              </button>
              <button type="button" aria-pressed="false">
                {"只看差异"}
              </button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"深色轨道 + 浮起的选中块"}
            </span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(3, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"输入框"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <input className="inp" aria-label="默认" placeholder="默认" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <input className="inp is-focus" aria-label="聚焦" defaultValue={"聚焦：外圈蓝色柔光"} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <input className="inp" aria-label="禁用" disabled defaultValue={"禁用"} style={{ opacity: "0.55" }} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(3, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"开关与复选"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span role="switch" aria-checked="false" style={{ display: "inline-block", position: "relative", width: "44px", height: "24px", borderRadius: "12px", background: "rgb(42, 44, 49)", boxShadow: "rgba(16, 24, 40, 0.3) 0px 1px 3px inset" }}>
                <span style={{ position: "absolute", top: "3px", left: "3px", width: "18px", height: "18px", borderRadius: "9px", background: "rgb(245, 246, 247)", boxShadow: "rgba(0, 0, 0, 0.4) 0px 1px 2px" }} />
              </span>
              <span role="switch" aria-checked="true" style={{ display: "inline-block", position: "relative", width: "44px", height: "24px", borderRadius: "12px", background: "rgb(124, 108, 255)", boxShadow: "rgba(16, 24, 40, 0.3) 0px 1px 3px inset" }}>
                <span style={{ position: "absolute", top: "3px", left: "21px", width: "18px", height: "18px", borderRadius: "9px", background: "rgb(245, 246, 247)", boxShadow: "rgba(0, 0, 0, 0.4) 0px 1px 2px" }} />
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span role="checkbox" aria-checked="false" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "6px", boxSizing: "border-box", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.18)" }} />
              <span role="checkbox" aria-checked="true" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px", borderRadius: "6px", boxSizing: "border-box", background: "rgb(124, 108, 255)" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#101113" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span style={{ display: "inline-flex", gap: "6px", alignItems: "center", fontSize: "13px" }}>
              {"快捷键 "}
              <span className="kbd">
                {"⌘"}
              </span>
              <span className="kbd">
                {"K"}
              </span>
            </span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(2, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"危险操作"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
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
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span className="muted" style={{ fontSize: "12px", lineHeight: "1.6" }}>
              {"只用于不可撤回的操作，例如销毁客户数据。先掀开保护盖，再拨动，再输入名称确认"}
            </span>
          </div>
        </div>
      </section>
      <section className="card" aria-labelledby="cl-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="cl-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"指示灯与状态"}
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(5, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"状态徽章"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span className="chip s-done">
              {"完成"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span className="chip s-doing">
              {"进行中"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span className="chip s-you live">
              {"等待你"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span className="chip s-queue">
              {"排队"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span className="chip s-risk">
              {"冲突"}
            </span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(5, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"在线指示灯"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span style={{ display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              <span className="led led-g" />
              {"在线"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span style={{ display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              <span className="led led-a" />
              {"警告"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span style={{ display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              <span className="led led-r" />
              {"故障"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span style={{ display: "inline-flex", gap: "8px", alignItems: "center", fontSize: "13px" }}>
              <span className="led led-o" />
              {"离线"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(5, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"检查点电池格"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ width: "150px" }}>
              <div role="img" aria-label="检查点 0 / 5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              </div>
            </div>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"0 / 5 · 排队"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ width: "150px" }}>
              <div role="img" aria-label="检查点 2 / 5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                <span style={{ height: "8px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              </div>
            </div>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"2 / 5 · 进行中"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ width: "150px" }}>
              <div role="img" aria-label="检查点 1 / 5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                <span style={{ height: "8px", borderRadius: "2px", background: "rgb(220, 104, 3)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              </div>
            </div>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"1 / 5 · 等待你"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ width: "150px" }}>
              <div role="img" aria-label="检查点 5 / 5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
                <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
                <span style={{ height: "8px", borderRadius: "2px", background: "rgb(3, 152, 85)" }} />
              </div>
            </div>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"5 / 5 · 完成"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(5, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"子任务键帽"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <Link to="/task" className="tile" title="T0 · 完成 · 完成" aria-label="T0 完成" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(6, 118, 71)", color: "rgb(255, 255, 255)" }}>
              {"T0"}
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <Link to="/task" className="tile" title="T1 · 进行中 · 进行中" aria-label="T1 进行中" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(29, 78, 216)", color: "rgb(255, 255, 255)" }}>
              {"T1"}
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <Link to="/task" className="tile" title="T2 · 等待你 · 等待你" aria-label="T2 等待你" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgb(181, 71, 8)", color: "rgb(255, 255, 255)" }}>
              {"T2"}
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <Link to="/task" className="tile" title="T4 · 排队 · 排队" aria-label="T4 排队" style={{ minWidth: "40px", width: "auto", padding: "0px 7px", background: "rgba(255, 255, 255, 0.05)", color: "rgb(161, 166, 176)", border: "1px dashed rgb(92, 97, 107)" }}>
              {"T4"}
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <span className="muted" style={{ fontSize: "12px" }}>
              {"排队 = 虚线空槽"}
            </span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "140px repeat(5, minmax(0px, 1fr))", gap: "16px", alignItems: "center", padding: "14px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "rgba(255, 255, 255, 0) 0px 1px 0px inset" }}>
          <span style={{ fontSize: "13px", fontWeight: "600" }}>
            {"进度轨道"}
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div className="bar" style={{ width: "180px" }}>
              <div className="fill f-doing" style={{ width: "58%" }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
            <div className="bar" style={{ width: "180px" }}>
              <div className="fill f-done" style={{ width: "100%" }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }} />
        </div>
        <p className="muted" style={{ margin: "12px 0px 0px", fontSize: "12px" }}>
          {"等待超过 30 分钟的指示灯缓慢呼吸，周期 2 秒；系统开启“减少动态效果”时停止"}
        </p>
      </section>
      <section className="card" aria-labelledby="ct-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="ct-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"时间轴"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"深色轨道 + 圆角条；“现在”是一根红线"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div role="table" aria-label="Agent 今日时间轴" style={{ display: "flex", flexDirection: "column", gap: "6px", overflowX: "auto" }}>
          <div style={{ minWidth: "900px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px" }}>
              <span />
              <div style={{ position: "relative", height: "16px" }}>
                <span style={{ position: "absolute", left: "0%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"09:00"}
                </span>
                <span style={{ position: "absolute", left: "11.11%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"10:00"}
                </span>
                <span style={{ position: "absolute", left: "22.22%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"11:00"}
                </span>
                <span style={{ position: "absolute", left: "33.33%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"12:00"}
                </span>
                <span style={{ position: "absolute", left: "44.44%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"13:00"}
                </span>
                <span style={{ position: "absolute", left: "55.56%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"14:00"}
                </span>
                <span style={{ position: "absolute", left: "66.67%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"15:00"}
                </span>
                <span style={{ position: "absolute", left: "88.89%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"17:00"}
                </span>
                <span style={{ position: "absolute", left: "100%", transform: "translateX(-50%)", fontSize: "11px", color: "rgb(161, 166, 176)" }}>
                  {"18:00"}
                </span>
                <span style={{ position: "absolute", left: "81.48%", transform: "translateX(-50%)", top: "-3px", fontSize: "11px", fontWeight: "600", color: "rgb(255, 255, 255)", background: "rgb(248, 81, 73)", borderRadius: "999px", padding: "0px 7px" }}>
                  {"16:20"}
                </span>
              </div>
              <span />
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-wait" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
                  <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
                  <g className="awake">
                    <circle className="ant" cx="32" cy="6" r="3">
                      <animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g className="asleep">
                    <circle cx="32" cy="6" r="3" fill="#3A3D44" />
                  </g>
                  <rect x="6" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="54" y="27" width="4" height="10" rx="2" fill="#2A2C35" />
                  <rect x="10" y="13" width="44" height="38" rx="15" fill="url(#rb-body)" stroke="rgba(255,255,255,.14)" />
                  <rect x="16" y="16" width="32" height="5" rx="2.5" fill="#FEFEFE" opacity=".06" />
                  <rect x="16" y="23" width="32" height="20" rx="10" fill="#0B0C10" />
                  <g className="awake eyes">
                    <rect x="23" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                    <rect x="36" y="29" width="5" height="8" rx="2.5" fill="currentColor">
                      <animate attributeName="height" values="8;8;1;8" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" repeatCount="indefinite" keyTimes="0;.9;.94;1" />
                    </rect>
                  </g>
                  <g className="asleep">
                    <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                    <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
                  </g>
                  <g className="gear">
                    <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
                    <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
                      <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" repeatCount="indefinite" />
                    </path>
                  </g>
                  <g className="q">
                    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" repeatCount="indefinite" />
                    <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
                    <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">
                      {"?"}
                    </text>
                  </g>
                  <g className="zz">
                    <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" repeatCount="indefinite" />
                      <animate attributeName="y" values="16;13;6" dur="2.6s" repeatCount="indefinite" />
                    </text>
                    <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
                      {"z"}
                      <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" repeatCount="indefinite" />
                    </text>
                  </g>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", minWidth: "0px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {"开发 C"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Claude Code · M5 Pro"}
                  </span>
                </div>
              </div>
              <div role="cell" style={{ position: "relative", height: "36px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "8px", boxSizing: "border-box" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "0%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "11.11%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "22.22%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "33.33%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "44.44%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "55.56%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "66.67%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "77.78%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "88.89%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span aria-hidden="true" style={{ position: "absolute", top: "0px", bottom: "0px", left: "100%", width: "1px", background: "rgba(255, 255, 255, 0.04)" }} />
                <span title="开发 C · 09:20–10:30 · 已做完" style={{ position: "absolute", top: "5px", bottom: "5px", left: "3.7%", width: "calc(12.96% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"已做完"}
                </span>
                <span className="shim" title="开发 C · 12:15–15:11 · 正在做" style={{ position: "absolute", top: "5px", bottom: "5px", left: "36.11%", width: "calc(32.59% - 3px)", backgroundColor: "rgb(110, 92, 246)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(255, 255, 255)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"正在做"}
                </span>
                <span title="开发 C · 15:11–16:20 · 等你" style={{ position: "absolute", top: "5px", bottom: "5px", left: "68.7%", width: "calc(12.78% - 3px)", backgroundColor: "rgb(227, 160, 8)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(26, 18, 0)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"等你"}
                </span>
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-you live">
                  {"等待你"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T2 · 已等 69 分钟"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "12px" }}>
          <div className="muted" style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px" }}>
            <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset" }} />
              {"今天已做完的"}
            </span>
            <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "linear-gradient(90deg, rgb(124, 108, 255), rgb(79, 140, 255))" }} />
              {"正在做"}
            </span>
            <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(227, 160, 8)" }} />
              {"等你"}
            </span>
            <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(12, 13, 15)", border: "1px solid rgba(255, 255, 255, 0.1)" }} />
              {"空闲"}
            </span>
            <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
              <span aria-hidden="true" style={{ height: "12px", background: "rgb(248, 81, 73)", width: "2px", borderRadius: "0px" }} />
              {"现在"}
            </span>
          </div>
        </div>
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", alignItems: "start" }}>
        <section className="card" aria-labelledby="cs-h" style={{ minWidth: "0px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <h2 id="cs-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"读数屏"}
              </h2>
              <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                {"实时读数：大号数字，异常值用状态色"}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
          </div>
          <div className="screen" style={{ display: "flex", gap: "0px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", paddingRight: "20px" }}>
              <span style={{ fontSize: "12px", color: "rgb(166, 216, 185)" }}>
                {"今天调用"}
              </span>
              <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "28px", fontWeight: "600", color: "rgb(209, 250, 223)", textShadow: "rgba(209, 250, 223, 0.35) 0px 0px 8px" }}>
                {"1,284"}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", paddingLeft: "20px", borderLeft: "1px solid rgba(209, 250, 223, 0.12)" }}>
              <span style={{ fontSize: "12px", color: "rgb(166, 216, 185)" }}>
                {"拒绝"}
              </span>
              <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "28px", fontWeight: "600", color: "rgb(254, 205, 202)" }}>
                {"2"}
              </span>
            </div>
          </div>
        </section>
        <section className="card" aria-labelledby="cg-h" style={{ minWidth: "0px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <h2 id="cg-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"玻璃浮层"}
              </h2>
              <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                {"下拉、⌘K 搜索结果、悬停详情"}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
          </div>
          <div className="well" style={{ position: "relative", height: "170px", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div className="raised" style={{ height: "22px", width: "80%" }} />
              <div className="raised" style={{ height: "22px", width: "64%" }} />
              <div className="raised" style={{ height: "22px", width: "72%" }} />
              <div className="raised" style={{ height: "22px", width: "50%" }} />
            </div>
            <div className="glass" role="menu" aria-label="浮层示例" style={{ position: "absolute", top: "24px", left: "44%", width: "200px", padding: "6px" }}>
              <div role="menuitem" style={{ padding: "8px 10px", borderRadius: "8px", fontSize: "13px", background: "rgba(37, 99, 235, 0.1)", color: "rgb(141, 182, 255)", fontWeight: "600" }}>
                {"跳到 TASK-0412"}
              </div>
              <div role="menuitem" style={{ padding: "8px 10px", borderRadius: "8px", fontSize: "13px" }}>
                {"跳到 K-027"}
              </div>
              <div role="menuitem" style={{ padding: "8px 10px", borderRadius: "8px", fontSize: "13px" }}>
                {"跳到 P-0012"}
              </div>
            </div>
          </div>
        </section>
        <section className="card" aria-labelledby="cf-h" style={{ minWidth: "0px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <h2 id="cf-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                {"图表"}
              </h2>
              <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                {"细线、不做 3D、不加透视，保证读数准确"}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
          </div>
          <svg viewBox="0 0 420 170" width="100%" role="img" aria-label="扁平图表示例：一次通过率" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
            <line x1="40" y1="142.0" x2="404" y2="142.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="146.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"40%"}
            </text>
            <line x1="40" y1="79.0" x2="404" y2="79.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="83.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"65%"}
            </text>
            <line x1="40" y1="16.0" x2="404" y2="16.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="20.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"90%"}
            </text>
            <line x1="40" y1="142" x2="404" y2="142" stroke="rgba(255,255,255,.12)" />
            <text x="40.0" y="162" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W34"}
            </text>
            <text x="106.2" y="162" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W36"}
            </text>
            <text x="172.4" y="162" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W38"}
            </text>
            <text x="238.5" y="162" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W40"}
            </text>
            <text x="304.7" y="162" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W42"}
            </text>
            <text x="370.9" y="162" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W44"}
            </text>
            <text x="404.0" y="162" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W45"}
            </text>
            <line x1="172.4" y1="16" x2="172.4" y2="142" stroke="#5C616B" strokeDasharray="2 3" />
            <text x="176.4" y="26" fontSize="11" fill="#A1A6B0">
              {"阶段 1a"}
            </text>
            <line x1="40" y1="111.8" x2="404" y2="111.8" stroke="#5C616B" strokeDasharray="5 4" />
            <text x="404" y="105.8" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"基线 52%"}
            </text>
            <defs>
              <linearGradient id="ar8420" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8E7CFF" stopOpacity=".28" />
                <stop offset="1" stopColor="#8E7CFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="40.0,142 40.0,116.8 73.1,106.7 106.2,114.3 139.3,109.2 172.4,96.6 205.5,89.1 238.5,76.5 271.6,66.4 304.7,61.4 337.8,53.8 370.9,48.8 404.0,46.2 404.0,142" fill="url(#ar8420)" opacity="0">
              <animate attributeName="opacity" from="0" to="1" dur="0.8s" begin="0.9s" fill="freeze" />
            </polygon>
            <polyline points="40.0,116.8 73.1,106.7 106.2,114.3 139.3,109.2 172.4,96.6 205.5,89.1 238.5,76.5 271.6,66.4 304.7,61.4 337.8,53.8 370.9,48.8 404.0,46.2" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.3s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
            </polyline>
            <g>
              <title>
                {"W34 · 50%"}
              </title>
              <circle cx="40.0" cy="116.8" r="8" fill="transparent" />
              <circle cx="40.0" cy="116.8" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.25s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W35 · 54%"}
              </title>
              <circle cx="73.1" cy="106.7" r="8" fill="transparent" />
              <circle cx="73.1" cy="106.7" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.36s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W36 · 51%"}
              </title>
              <circle cx="106.2" cy="114.3" r="8" fill="transparent" />
              <circle cx="106.2" cy="114.3" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.47s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W37 · 53%"}
              </title>
              <circle cx="139.3" cy="109.2" r="8" fill="transparent" />
              <circle cx="139.3" cy="109.2" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.58s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W38 · 58%"}
              </title>
              <circle cx="172.4" cy="96.6" r="8" fill="transparent" />
              <circle cx="172.4" cy="96.6" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.69s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W39 · 61%"}
              </title>
              <circle cx="205.5" cy="89.1" r="8" fill="transparent" />
              <circle cx="205.5" cy="89.1" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.80s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W40 · 66%"}
              </title>
              <circle cx="238.5" cy="76.5" r="8" fill="transparent" />
              <circle cx="238.5" cy="76.5" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.90s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W41 · 70%"}
              </title>
              <circle cx="271.6" cy="66.4" r="8" fill="transparent" />
              <circle cx="271.6" cy="66.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.01s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W42 · 72%"}
              </title>
              <circle cx="304.7" cy="61.4" r="8" fill="transparent" />
              <circle cx="304.7" cy="61.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.12s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W43 · 75%"}
              </title>
              <circle cx="337.8" cy="53.8" r="8" fill="transparent" />
              <circle cx="337.8" cy="53.8" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.23s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W44 · 77%"}
              </title>
              <circle cx="370.9" cy="48.8" r="8" fill="transparent" />
              <circle cx="370.9" cy="48.8" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.34s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W45 · 78%"}
              </title>
              <circle cx="404.0" cy="46.2" r="8" fill="transparent" />
              <circle cx="404.0" cy="46.2" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.45s" fill="freeze" />
              </circle>
            </g>
            <text x="398.0" y="36.2" fontSize="12" fontWeight="600" fill="#EDEEF0" textAnchor="end">
              {"78%"}
            </text>
          </svg>
        </section>
      </div>
    </main>
  );
}
