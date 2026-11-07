// 知识图谱 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Graph() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-violet float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="16" y="16" width="6" height="6" rx="1" />
                  <rect x="2" y="16" width="6" height="6" rx="1" />
                  <rect x="9" y="2" width="6" height="6" rx="1" />
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                  <path d="M12 12V8" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"知识图谱"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"知识之间的取代、覆盖、冲突和共用证据，一张图看清。证据过时会沿着“依据同一证据”的线波及到相关条目"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <span className="stage">
              {"阶段 3"}
            </span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 640px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="gm-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="gm-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"知识关系"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"按层级从上到下排列；L2 按项目分区，L3 按客户隔离。悬停节点看详情，点击选中"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
                <div className="seg" role="group" aria-label="层级">
                  <button type="button" aria-pressed="true">
                    {"全部层级"}
                  </button>
                  <button type="button" aria-pressed="false">
                    {"L0"}
                  </button>
                  <button type="button" aria-pressed="false">
                    {"L1"}
                  </button>
                  <button type="button" aria-pressed="false">
                    {"L2"}
                  </button>
                  <button type="button" aria-pressed="false">
                    {"L3"}
                  </button>
                </div>
                <div className="seg" role="group" aria-label="状态">
                  <button type="button" aria-pressed="true">
                    {"全部状态"}
                  </button>
                  <button type="button" aria-pressed="false">
                    {"只看要处理的"}
                  </button>
                </div>
                <div className="seg" role="group" aria-label="引用统计">
                  <button type="button" aria-pressed="true">
                    {"近 30 天"}
                  </button>
                  <button type="button" aria-pressed="false">
                    {"近 90 天"}
                  </button>
                </div>
              </div>
            </div>
            <svg viewBox="0 0 820 560" width="100%" role="img" aria-label="知识图谱：按 L0 到 L3 分层排列。选中 K-027：它取代了 K-011，与可能过时的 K-044 依据同一份证据 E-208，并被提议上提到 L1。客户 A 的候选 C-0219 覆盖 L1 的 K-112；K-008 与客户 A 的需求单冲突。" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
              <defs>
                <marker id="ar-g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0 0L10 5L0 10z" fill="#5C616B" />
                </marker>
                <marker id="ar-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0 0L10 5L0 10z" fill="#9D8FFF" />
                </marker>
                <marker id="ar-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0 0L10 5L0 10z" fill="#DC6803" />
                </marker>
                <radialGradient id="bead-v" cx="40%" cy="35%" r="70%">
                  <stop offset="0" stopColor="#F3F0FF" />
                  <stop offset=".45" stopColor="#B4A9FF" />
                  <stop offset="1" stopColor="#5B4BD6" />
                </radialGradient>
                <radialGradient id="bead-p" cx="40%" cy="35%" r="70%">
                  <stop offset="0" stopColor="#D6D0FF" />
                  <stop offset=".45" stopColor="#7C6CFF" />
                  <stop offset="1" stopColor="#3B2FA8" />
                </radialGradient>
                <radialGradient id="bead-h" cx="40%" cy="35%" r="70%">
                  <stop offset="0" stopColor="#9CA0AA" />
                  <stop offset=".5" stopColor="#4A4560" />
                  <stop offset="1" stopColor="#26242F" />
                </radialGradient>
                <radialGradient id="bead-o" cx="40%" cy="35%" r="70%">
                  <stop offset="0" stopColor="#6B7079" />
                  <stop offset="1" stopColor="#2A2C31" />
                </radialGradient>
                <filter id="bs" x="-80%" y="-80%" width="260%" height="260%">
                  <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity=".6" />
                </filter>
              </defs>
              <rect x="0" y="0" width="820" height="120" rx="12" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.06)" />
              <line x1="12" y1="119.5" x2="808" y2="119.5" stroke="#101113" />
              <text x="14" y="22" fontSize="12" fontWeight="600" fill="#A1A6B0">
                {"L0 全局"}
              </text>
              <rect x="0" y="130" width="820" height="120" rx="12" fill="rgba(255,255,255,.012)" stroke="rgba(255,255,255,.06)" />
              <line x1="12" y1="249.5" x2="808" y2="249.5" stroke="#101113" />
              <text x="14" y="152" fontSize="12" fontWeight="600" fill="#A1A6B0">
                {"L1 Shopline 领域"}
              </text>
              <rect x="0" y="266" width="820" height="134" rx="12" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.06)" />
              <line x1="12" y1="399.5" x2="808" y2="399.5" stroke="#101113" />
              <text x="14" y="288" fontSize="12" fontWeight="600" fill="#A1A6B0">
                {"L2 项目"}
              </text>
              <rect x="0" y="410" width="820" height="146" rx="12" fill="rgba(255,255,255,.012)" stroke="rgba(255,255,255,.06)" />
              <line x1="12" y1="555.5" x2="808" y2="555.5" stroke="#101113" />
              <text x="14" y="432" fontSize="12" fontWeight="600" fill="#A1A6B0">
                {"L3 客户"}
              </text>
              <text x="110" y="290" fontSize="11" fill="#A1A6B0">
                {"bundle 插件"}
              </text>
              <line x1="400" y1="276" x2="400" y2="392" stroke="rgba(255,255,255,.12)" strokeDasharray="3 4" />
              <text x="410" y="290" fontSize="11" fill="#A1A6B0">
                {"xuvia"}
              </text>
              <line x1="560" y1="276" x2="560" y2="392" stroke="rgba(255,255,255,.12)" strokeDasharray="3 4" />
              <text x="570" y="290" fontSize="11" fill="#A1A6B0">
                {"个人站"}
              </text>
              <line x1="700" y1="276" x2="700" y2="392" stroke="rgba(255,255,255,.12)" strokeDasharray="3 4" />
              <text x="710" y="290" fontSize="11" fill="#A1A6B0">
                {"直播语音"}
              </text>
              <rect x="100" y="424" width="370" height="122" rx="8" fill="none" stroke="#5C616B" strokeDasharray="4 4" />
              <text x="110" y="440" fontSize="11" fill="#A1A6B0">
                {"客户 A"}
              </text>
              <rect x="480" y="424" width="160" height="122" rx="8" fill="none" stroke="#5C616B" strokeDasharray="4 4" />
              <text x="490" y="440" fontSize="11" fill="#A1A6B0">
                {"客户 B"}
              </text>
              <rect x="650" y="424" width="156" height="122" rx="8" fill="rgba(255,255,255,.03)" stroke="#5C616B" strokeDasharray="4 4" />
              <text x="660" y="440" fontSize="11" fill="#A1A6B0">
                {"客户 C · 已销毁 10/01"}
              </text>
              <text x="728" y="492" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"只剩 ID 与哈希"}
              </text>
              <path d="M213 335 L148 335" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 3" fill="none" markerEnd="url(#ar-g)">
                <title>
                  {"K-027 取代 K-011"}
                </title>
              </path>
              <path d="M225 321 L225 222" stroke="#9D8FFF" strokeWidth="1.5" strokeDasharray="5 4" fill="none" markerEnd="url(#ar-b)">
                <title>
                  {"提议上提到 L1"}
                </title>
                <animate attributeName="stroke-dashoffset" from="18" to="0" dur="0.9s" repeatCount="indefinite" />
              </path>
              <path d="M236 328 Q 400 270 512 262" stroke="#A99CFF" strokeWidth="1.4" strokeDasharray="4 6" fill="none">
                <title>
                  {"K-027 依据 E-208"}
                </title>
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.2s" repeatCount="indefinite" />
              </path>
              <circle r="3" fill="#E9E5FF">
                <animateMotion dur="2.6s" repeatCount="indefinite" path="M512 262 Q 400 270 236 328" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="2.6s" repeatCount="indefinite" />
              </circle>
              <path d="M528 260 Q 570 240 585 200" stroke="#A99CFF" strokeWidth="1.4" strokeDasharray="4 6" fill="none">
                <title>
                  {"K-044 依据 E-208"}
                </title>
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.2s" repeatCount="indefinite" />
              </path>
              <circle r="2.5" fill="#E9E5FF">
                <animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite" path="M528 260 Q 570 240 585 200" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.85;1" dur="1.8s" begin="0.9s" repeatCount="indefinite" />
              </circle>
              <path d="M430 470 Q 420 330 404 200" stroke="#DC6803" strokeWidth="1.5" fill="none" markerEnd="url(#ar-a)">
                <title>
                  {"候选 C-0219 在客户 A 范围内覆盖 K-112"}
                </title>
              </path>
              <circle r="3" fill="#F2C14E">
                <animateMotion dur="3s" repeatCount="indefinite" path="M430 470 Q 420 330 404 200" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.1;.85;1" dur="3s" repeatCount="indefinite" />
              </circle>
              <path d="M300 202 Q 380 330 357 458" stroke="#D92D20" strokeWidth="1.5" strokeDasharray="6 4" fill="none">
                <title>
                  {"K-008 与 TASK-0412 需求单冲突"}
                </title>
                <animate attributeName="opacity" values="1;.35;1" dur="1.6s" repeatCount="indefinite" />
              </path>
              <g>
                <title>
                  {"K-021 共用文件先单独改完 · 已验证 · 近 30 天引用 44"}
                </title>
                <circle cx="170" cy="66" r="16" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="164.9" cy="59.3" rx="6.1" ry="3.5" fill="#F8FBFF" opacity=".35" />
                <text x="170" y="96" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-021"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="4.6s" begin="-0.0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-034 按文件范围切分 · 已验证 · 引用 36"}
                </title>
                <circle cx="262" cy="66" r="14" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="257.5" cy="60.1" rx="5.3" ry="3.1" fill="#F8FBFF" opacity=".35" />
                <text x="262" y="94" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-034"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="4.6s" begin="-0.7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-035 图片容器固定比例 · 已验证 · 引用 26"}
                </title>
                <circle cx="350" cy="66" r="12" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="346.2" cy="61.0" rx="4.6" ry="2.6" fill="#F8FBFF" opacity=".35" />
                <text x="350" y="92" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-035"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="4.1s" begin="-1.0s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-040 懒加载给占位尺寸 · 假设 · 引用 2"}
                </title>
                <circle cx="430" cy="66" r="6" fill="url(#bead-h)" filter="url(#bs)" />
                <ellipse cx="428.1" cy="63.5" rx="2.3" ry="1.3" fill="#F8FBFF" opacity=".35" />
                <text x="430" y="86" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-040"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="4.9s" begin="-0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-061 Codex 需要显式文件清单 · 可能过时"}
                </title>
                <circle cx="520" cy="66" r="8" fill="#16171A" stroke="#7C6CFF" strokeWidth="2" strokeDasharray="3 2">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.6s" repeatCount="indefinite" />
                </circle>
                <text x="520" y="88" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-061"}
                </text>
              </g>
              <g>
                <title>
                  {"K-002 交付前必须过回归 · 已验证 · 引用 31"}
                </title>
                <circle cx="720" cy="66" r="10" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="716.8" cy="61.8" rx="3.8" ry="2.2" fill="#F8FBFF" opacity=".35" />
                <text x="720" y="90" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-002"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="3.2s" begin="-0.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-015 折扣叠加计算顺序 · v3 修订后降为初步验证 · 引用 29"}
                </title>
                <circle cx="150" cy="190" r="13" fill="url(#bead-p)" filter="url(#bs)" />
                <ellipse cx="145.8" cy="184.5" rx="4.9" ry="2.9" fill="#F8FBFF" opacity=".35" />
                <text x="150" y="217" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-015"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="5.3s" begin="-1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-027 上提后的位置（提议）"}
                </title>
                <circle cx="225" cy="205" r="10" fill="none" stroke="#9D8FFF" strokeWidth="1.5" strokeDasharray="3 3">
                  <animate attributeName="opacity" values=".35;1;.35" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
              <g>
                <title>
                  {"K-008 移动端标题不超过 28px · 已验证 · 与客户要求冲突"}
                </title>
                <circle cx="300" cy="190" r="11" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="296.5" cy="185.4" rx="4.2" ry="2.4" fill="#F8FBFF" opacity=".35" />
                <text x="300" y="173" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-008"}
                </text>
              </g>
              <g>
                <title>
                  {"K-112 默认移动端断点 768px · 已验证"}
                </title>
                <circle cx="400" cy="190" r="9" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="397.1" cy="186.2" rx="3.4" ry="2.0" fill="#F8FBFF" opacity=".35" />
                <text x="400" y="175" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-112"}
                </text>
              </g>
              <g>
                <title>
                  {"K-019 Liquid 循环嵌套不超过三层 · 已验证 · 引用 7"}
                </title>
                <circle cx="490" cy="190" r="6" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="488.1" cy="187.5" rx="2.3" ry="1.3" fill="#F8FBFF" opacity=".35" />
                <text x="490" y="210" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-019"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="4.1s" begin="-1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-044 图片服务 v1 参数写法 · 可能过时（官方文档 10/20 更新）"}
                </title>
                <circle cx="590" cy="190" r="8" fill="#16171A" stroke="#B4A9FF" strokeWidth="2" strokeDasharray="3 2">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.6s" repeatCount="indefinite" />
                </circle>
                <text x="590" y="176" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-044"}
                </text>
              </g>
              <g>
                <title>
                  {"K-118 折扣标签窄屏不换行 · 本周新增 · 假设"}
                </title>
                <circle cx="700" cy="190" r="6" fill="url(#bead-h)" filter="url(#bs)" />
                <ellipse cx="698.1" cy="187.5" rx="2.3" ry="1.3" fill="#F8FBFF" opacity=".35" />
                <text x="700" y="210" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-118"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="3.9s" begin="-0.3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-027 商品图片裁切走服务端渲染 · 初步验证 · 引用 17"}
                </title>
                <circle cx="225" cy="335" r="17" fill="none" stroke="#EDEEF0" strokeWidth="2" />
                <circle cx="225" cy="335" r="17" fill="none" stroke="#B4A9FF" strokeWidth="1.5">
                  <animate attributeName="r" from="17" to="34" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from=".9" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="225" cy="335" r="12" fill="url(#bead-p)" filter="url(#bs)" />
                <ellipse cx="221.2" cy="330.0" rx="4.6" ry="2.6" fill="#F8FBFF" opacity=".35" />
                <text x="225" y="361" fontSize="11" fontWeight="600" fill="#EDEEF0" textAnchor="middle">
                  {"K-027"}
                </text>
              </g>
              <g>
                <title>
                  {"K-011 商品图统一 1:1 裁切 · 已被 K-027 取代"}
                </title>
                <circle cx="140" cy="335" r="6" fill="url(#bead-o)" filter="url(#bs)" />
                <text x="140" y="355" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-011"}
                </text>
              </g>
              <g>
                <title>
                  {"K-020 bundle 价格统一由服务端计算 · 已验证"}
                </title>
                <circle cx="300" cy="335" r="9" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="297.1" cy="331.2" rx="3.4" ry="2.0" fill="#F8FBFF" opacity=".35" />
                <text x="300" y="358" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-020"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="5.2s" begin="-1.1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-052 xuvia 旧版接口鉴权 · 45 天未调用"}
                </title>
                <circle cx="450" cy="335" r="5" fill="url(#bead-h)" filter="url(#bs)" />
                <ellipse cx="448.4" cy="332.9" rx="1.9" ry="1.1" fill="#F8FBFF" opacity=".35" />
                <text x="450" y="354" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-052"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="4.4s" begin="-0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"候选：xuvia 选题接口单次最多 50 条"}
                </title>
                <circle cx="515" cy="335" r="8" fill="#16171A" stroke="#A1A6B0" strokeWidth="1.5" strokeDasharray="3 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.2s" repeatCount="indefinite" />
                </circle>
                <text x="515" y="357" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"候选"}
                </text>
              </g>
              <g>
                <title>
                  {"K-073 个人站旧版字体加载 · 38 天未调用"}
                </title>
                <circle cx="610" cy="335" r="5" fill="url(#bead-h)" filter="url(#bs)" />
                <ellipse cx="608.4" cy="332.9" rx="1.9" ry="1.1" fill="#F8FBFF" opacity=".35" />
                <text x="610" y="354" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-073"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="3.7s" begin="-1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-080 案例图统一 4:3 · 初步验证"}
                </title>
                <circle cx="660" cy="335" r="8" fill="url(#bead-p)" filter="url(#bs)" />
                <ellipse cx="657.4" cy="331.6" rx="3.0" ry="1.8" fill="#F8FBFF" opacity=".35" />
                <text x="660" y="357" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-080"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="4.2s" begin="-1.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"K-090 直播语音采样率 48k · 已验证"}
                </title>
                <circle cx="752" cy="335" r="7" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="749.8" cy="332.1" rx="2.7" ry="1.5" fill="#F8FBFF" opacity=".35" />
                <text x="752" y="356" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"K-090"}
                </text>
                <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur="4.2s" begin="-0.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />
              </g>
              <g>
                <title>
                  {"C-A-003 品牌色与 logo 区不可改 · 红线 · 已验证"}
                </title>
                <circle cx="150" cy="488" r="11" fill="url(#bead-v)" filter="url(#bs)" stroke="#D92D20" strokeWidth="3" />
                <ellipse cx="146.5" cy="483.4" rx="4.2" ry="2.4" fill="#F8FBFF" opacity=".35" />
                <text x="150" y="513" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"C-A-003"}
                </text>
              </g>
              <g>
                <title>
                  {"C-A-001 先给预览站再上线 · 已验证"}
                </title>
                <circle cx="222" cy="488" r="9" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="219.1" cy="484.2" rx="3.4" ry="2.0" fill="#F8FBFF" opacity=".35" />
                <text x="222" y="511" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"C-A-001"}
                </text>
              </g>
              <g>
                <title>
                  {"C-A-007 价格保留两位小数 · 初步验证"}
                </title>
                <circle cx="292" cy="488" r="7" fill="url(#bead-p)" filter="url(#bs)" />
                <ellipse cx="289.8" cy="485.1" rx="2.7" ry="1.5" fill="#F8FBFF" opacity=".35" />
                <text x="292" y="509" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"C-A-007"}
                </text>
              </g>
              <g>
                <title>
                  {"候选 C-0219 断点 750px · 等你确认"}
                </title>
                <circle cx="430" cy="488" r="9" fill="#16171A" stroke="#A1A6B0" strokeWidth="1.5" strokeDasharray="3 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.2s" repeatCount="indefinite" />
                </circle>
                <text x="430" y="511" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"C-0219"}
                </text>
              </g>
              <g>
                <title>
                  {"C-B-004 断点 768px · 已验证"}
                </title>
                <circle cx="545" cy="488" r="8" fill="url(#bead-v)" filter="url(#bs)" />
                <ellipse cx="542.4" cy="484.6" rx="3.0" ry="1.8" fill="#F8FBFF" opacity=".35" />
                <text x="545" y="510" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"C-B-004"}
                </text>
              </g>
              <g>
                <title>
                  {"C-B-002 不使用弹窗 · 初步验证"}
                </title>
                <circle cx="605" cy="488" r="6" fill="url(#bead-p)" filter="url(#bs)" />
                <ellipse cx="603.1" cy="485.5" rx="2.3" ry="1.3" fill="#F8FBFF" opacity=".35" />
                <text x="605" y="508" fontSize="11" fontWeight="400" fill="#EDEEF0" textAnchor="middle">
                  {"C-B-002"}
                </text>
              </g>
              <g>
                <title>
                  {"E-208 Shopline 图片服务文档 2026-09 版 · 官方 10/20 已更新"}
                </title>
                <rect x="512" y="254" width="16" height="16" rx="3" fill="none" stroke="#F2C14E" strokeWidth="1">
                  <animate attributeName="x" values="512;502" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="y" values="254;244" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="width" values="16;36" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="height" values="16;36" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".9;0" dur="1.8s" repeatCount="indefinite" />
                </rect>
                <rect x="512" y="254" width="16" height="16" rx="3" fill="rgba(227,160,8,.08)" stroke="#DC6803" strokeWidth="1.5" />
                <text x="536" y="267" fontSize="11" fill="#F2C14E">
                  {"E-208 已更新"}
                </text>
              </g>
              <g>
                <title>
                  {"TASK-0412 需求单：标题 36px"}
                </title>
                <rect x="350" y="458" width="14" height="14" transform="rotate(45 357 465)" fill="rgba(248,81,73,.08)" stroke="#D92D20" strokeWidth="1.5" />
                <text x="357" y="492" fontSize="11" fill="#FF7B72" textAnchor="middle">
                  {"需求单"}
                </text>
              </g>
            </svg>
          </section>
        </div>
        <div style={{ flex: "0 1 300px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="gs-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="gs-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"选中"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <span className="mono muted">
                  {"K-027 · L2 bundle 插件"}
                </span>
                <h3 style={{ margin: "4px 0px 0px", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>
                  {"商品图片的裁切走服务端渲染"}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span className="chip s-doing">
                  {"初步验证"}
                </span>
                <span className="chip s-queue">
                  {"建议"}
                </span>
                <span className="chip s-queue">
                  {"引用 17"}
                </span>
              </div>
              <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
                <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                    <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                      {"取代 K-011"}
                    </span>
                    <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                      {"商品图统一 1:1 裁切"}
                    </span>
                  </div>
                  <div />
                </li>
                <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                    <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                      {"依据 E-208"}
                    </span>
                    <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                      {"这份文档 10/20 已更新；同样依据它的 K-044 已标为可能过时"}
                    </span>
                  </div>
                  <div>
                    <span className="chip s-you">
                      {"需复查"}
                    </span>
                  </div>
                </li>
                <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                    <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                      {"提议上提到 L1"}
                    </span>
                    <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                      {"已在 2 个客户主题验证"}
                    </span>
                  </div>
                  <div>
                    <span className="chip s-you">
                      {"等你"}
                    </span>
                  </div>
                </li>
                <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
                    <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                      {"被 10 个任务引用"}
                    </span>
                    <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                      {"一次通过 7 / 9"}
                    </span>
                  </div>
                  <div />
                </li>
              </ul>
              <Link to="/knowledge/item" className="btn" style={{ alignSelf: "flex-start" }}>
                {"打开条目"}
              </Link>
            </div>
          </section>
          <section className="card" aria-labelledby="gl-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="gl-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"图例"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
              <p className="lbl">
                {"节点"}
              </p>
              <div className="muted" style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px" }}>
                <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                  <span aria-hidden="true" style={{ width: "12px", height: "12px", background: "radial-gradient(circle at 40% 35%, rgb(243, 240, 255), rgb(180, 169, 255) 45%, rgb(91, 75, 214))", borderRadius: "6px" }} />
                  {"已验证"}
                </span>
                <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                  <span aria-hidden="true" style={{ width: "12px", height: "12px", background: "radial-gradient(circle at 40% 35%, rgb(214, 208, 255), rgb(124, 108, 255) 45%, rgb(59, 47, 168))", borderRadius: "6px" }} />
                  {"初步验证"}
                </span>
                <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                  <span aria-hidden="true" style={{ width: "12px", height: "12px", background: "radial-gradient(circle at 40% 35%, rgb(156, 160, 170), rgb(74, 69, 96) 50%, rgb(38, 36, 47))", borderRadius: "6px" }} />
                  {"假设"}
                </span>
              </div>
              <div className="muted" style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px" }}>
                <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                  <span aria-hidden="true" style={{ width: "12px", height: "12px", background: "rgb(22, 23, 26)", border: "1.5px dashed rgb(161, 166, 176)", borderRadius: "6px" }} />
                  {"候选"}
                </span>
                <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                  <span aria-hidden="true" style={{ width: "12px", height: "12px", background: "rgb(22, 23, 26)", border: "2px dashed rgb(124, 108, 255)", borderRadius: "6px" }} />
                  {"可能过时"}
                </span>
                <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                  <span aria-hidden="true" style={{ width: "12px", height: "12px", background: "radial-gradient(circle at 40% 35%, rgb(107, 112, 121), rgb(42, 44, 49))", borderRadius: "6px" }} />
                  {"已取代"}
                </span>
                <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                  <span aria-hidden="true" style={{ width: "12px", height: "12px", background: "rgb(124, 108, 255)", border: "2px solid rgb(217, 45, 32)", borderRadius: "6px" }} />
                  {"红线"}
                </span>
              </div>
              <span className="muted">
                {"大小 = 近 30 天被引用次数"}
              </span>
              <p className="lbl" style={{ marginTop: "4px" }}>
                {"关系"}
              </p>
              <div className="muted" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <svg aria-hidden="true" width="28" height="8">
                    <line x1="0" y1="4" x2="28" y2="4" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 3" />
                  </svg>
                  {"取代"}
                </span>
                <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <svg aria-hidden="true" width="28" height="8">
                    <line x1="0" y1="4" x2="28" y2="4" stroke="#9D8FFF" strokeWidth="1.5" strokeDasharray="4 3" />
                  </svg>
                  {"上提提议"}
                </span>
                <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <svg aria-hidden="true" width="28" height="8">
                    <line x1="0" y1="4" x2="28" y2="4" stroke="#DC6803" strokeWidth="1.5" />
                  </svg>
                  {"覆盖上层"}
                </span>
                <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <svg aria-hidden="true" width="28" height="8">
                    <line x1="0" y1="4" x2="28" y2="4" stroke="#D92D20" strokeWidth="1.5" strokeDasharray="4 3" />
                  </svg>
                  {"冲突"}
                </span>
                <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <svg aria-hidden="true" width="28" height="8">
                    <line x1="0" y1="4" x2="28" y2="4" stroke="#5C616B" strokeWidth="1.5" />
                  </svg>
                  {"依据同一证据"}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
