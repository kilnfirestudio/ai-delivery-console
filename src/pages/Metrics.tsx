// 指标 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Metrics() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="gt gt-green float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-green)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </span>
              <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
                {"指标"}
              </h1>
            </div>
            <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px", lineHeight: "1.6" }}>
              {"只保留能回答“知识库有没有用”的指标。先有基线，再看变化；小心指标变成目标后失去意义"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            <div className="seg" role="group" aria-label="时间范围">
              <button type="button" aria-pressed="false">
                {"近 4 周"}
              </button>
              <button type="button" aria-pressed="true">
                {"近 12 周"}
              </button>
              <button type="button" aria-pressed="false">
                {"全部"}
              </button>
            </div>
            <div className="seg" role="group" aria-label="项目">
              <button type="button" aria-pressed="true">
                {"全部项目"}
              </button>
              <button type="button" aria-pressed="false">
                {"Shopline"}
              </button>
              <button type="button" aria-pressed="false">
                {"xuvia"}
              </button>
              <button type="button" aria-pressed="false">
                {"个人站"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="tier1" aria-labelledby="fj-h" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px", alignItems: "flex-end" }}>
          <div>
            <h2 id="fj-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"失败判定 · 12/15"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px" }}>
              {"运行三个月后，下面任一条不满足就停下重新评估，而不是继续投入"}
            </p>
          </div>
          <span style={{ fontSize: "13px" }}>
            {"已运行 53 / 91 天"}
          </span>
        </div>
        <div className="bar" role="img" aria-label="已运行 53 天，共 91 天">
          <div className="fill f-doing" style={{ width: "58%" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", alignItems: "stretch" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span className="chip s-done">
              {"满足"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {"一次通过率有提升"}
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                {"52% → 78%"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span className="chip s-done">
              {"满足"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {"纠错介入有减少"}
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                {"每周 11 → 4"}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span className="chip s-done">
              {"满足"}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {"投入没有持续超过产出"}
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                {"本周 2.5 小时 vs 约 6.4 小时"}
              </span>
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "16px" }}>
        <section className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
            <h3 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
              {"一次通过率"}
            </h3>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              {"78%"}
            </span>
          </div>
          <span className="muted" style={{ fontSize: "12px" }}>
            {"需求和标准是否清楚"}
          </span>
          <svg viewBox="0 0 520 200" width="100%" role="img" aria-label="一次通过率，近 12 周从 50% 到 78%，基线 52%" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
            <line x1="40" y1="172.0" x2="504" y2="172.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="176.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"40%"}
            </text>
            <line x1="40" y1="94.0" x2="504" y2="94.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="98.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"65%"}
            </text>
            <line x1="40" y1="16.0" x2="504" y2="16.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="20.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"90%"}
            </text>
            <line x1="40" y1="172" x2="504" y2="172" stroke="rgba(255,255,255,.12)" />
            <text x="40.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W34"}
            </text>
            <text x="124.4" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W36"}
            </text>
            <text x="208.7" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W38"}
            </text>
            <text x="293.1" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W40"}
            </text>
            <text x="377.5" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W42"}
            </text>
            <text x="461.8" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W44"}
            </text>
            <text x="504.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W45"}
            </text>
            <line x1="208.7" y1="16" x2="208.7" y2="172" stroke="#5C616B" strokeDasharray="2 3" />
            <text x="212.7" y="26" fontSize="11" fill="#A1A6B0">
              {"阶段 1a"}
            </text>
            <line x1="40" y1="134.6" x2="504" y2="134.6" stroke="#5C616B" strokeDasharray="5 4" />
            <text x="504" y="128.6" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"基线 52%"}
            </text>
            <defs>
              <linearGradient id="ar1002" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8E7CFF" stopOpacity=".28" />
                <stop offset="1" stopColor="#8E7CFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="40.0,172 40.0,140.8 82.2,128.3 124.4,137.7 166.5,131.4 208.7,115.8 250.9,106.5 293.1,90.9 335.3,78.4 377.5,72.2 419.6,62.8 461.8,56.6 504.0,53.4 504.0,172" fill="url(#ar1002)" opacity="0">
              <animate attributeName="opacity" from="0" to="1" dur="0.8s" begin="0.9s" fill="freeze" />
            </polygon>
            <polyline points="40.0,140.8 82.2,128.3 124.4,137.7 166.5,131.4 208.7,115.8 250.9,106.5 293.1,90.9 335.3,78.4 377.5,72.2 419.6,62.8 461.8,56.6 504.0,53.4" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.3s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
            </polyline>
            <g>
              <title>
                {"W34 · 50%"}
              </title>
              <circle cx="40.0" cy="140.8" r="8" fill="transparent" />
              <circle cx="40.0" cy="140.8" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.25s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W35 · 54%"}
              </title>
              <circle cx="82.2" cy="128.3" r="8" fill="transparent" />
              <circle cx="82.2" cy="128.3" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.36s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W36 · 51%"}
              </title>
              <circle cx="124.4" cy="137.7" r="8" fill="transparent" />
              <circle cx="124.4" cy="137.7" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.47s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W37 · 53%"}
              </title>
              <circle cx="166.5" cy="131.4" r="8" fill="transparent" />
              <circle cx="166.5" cy="131.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.58s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W38 · 58%"}
              </title>
              <circle cx="208.7" cy="115.8" r="8" fill="transparent" />
              <circle cx="208.7" cy="115.8" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.69s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W39 · 61%"}
              </title>
              <circle cx="250.9" cy="106.5" r="8" fill="transparent" />
              <circle cx="250.9" cy="106.5" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.80s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W40 · 66%"}
              </title>
              <circle cx="293.1" cy="90.9" r="8" fill="transparent" />
              <circle cx="293.1" cy="90.9" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.90s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W41 · 70%"}
              </title>
              <circle cx="335.3" cy="78.4" r="8" fill="transparent" />
              <circle cx="335.3" cy="78.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.01s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W42 · 72%"}
              </title>
              <circle cx="377.5" cy="72.2" r="8" fill="transparent" />
              <circle cx="377.5" cy="72.2" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.12s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W43 · 75%"}
              </title>
              <circle cx="419.6" cy="62.8" r="8" fill="transparent" />
              <circle cx="419.6" cy="62.8" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.23s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W44 · 77%"}
              </title>
              <circle cx="461.8" cy="56.6" r="8" fill="transparent" />
              <circle cx="461.8" cy="56.6" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.34s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W45 · 78%"}
              </title>
              <circle cx="504.0" cy="53.4" r="8" fill="transparent" />
              <circle cx="504.0" cy="53.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.45s" fill="freeze" />
              </circle>
            </g>
            <text x="498.0" y="43.4" fontSize="12" fontWeight="600" fill="#EDEEF0" textAnchor="end">
              {"78%"}
            </text>
          </svg>
        </section>
        <section className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
            <h3 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
              {"回归缺陷 · 每周"}
            </h3>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              {"1"}
            </span>
          </div>
          <span className="muted" style={{ fontSize: "12px" }}>
            {"有没有改坏已验收的功能"}
          </span>
          <svg viewBox="0 0 520 200" width="100%" role="img" aria-label="回归缺陷 · 每周，近 12 周从 6 到 1，基线 6" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
            <line x1="40" y1="172.0" x2="504" y2="172.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="176.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"0"}
            </text>
            <line x1="40" y1="94.0" x2="504" y2="94.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="98.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"4"}
            </text>
            <line x1="40" y1="16.0" x2="504" y2="16.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="20.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"8"}
            </text>
            <line x1="40" y1="172" x2="504" y2="172" stroke="rgba(255,255,255,.12)" />
            <text x="40.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W34"}
            </text>
            <text x="124.4" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W36"}
            </text>
            <text x="208.7" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W38"}
            </text>
            <text x="293.1" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W40"}
            </text>
            <text x="377.5" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W42"}
            </text>
            <text x="461.8" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W44"}
            </text>
            <text x="504.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W45"}
            </text>
            <line x1="208.7" y1="16" x2="208.7" y2="172" stroke="#5C616B" strokeDasharray="2 3" />
            <text x="212.7" y="26" fontSize="11" fill="#A1A6B0">
              {"阶段 1a"}
            </text>
            <line x1="40" y1="55.0" x2="504" y2="55.0" stroke="#5C616B" strokeDasharray="5 4" />
            <text x="504" y="49.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"基线 6"}
            </text>
            <defs>
              <linearGradient id="ar4684" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8E7CFF" stopOpacity=".28" />
                <stop offset="1" stopColor="#8E7CFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="40.0,172 40.0,55.0 82.2,35.5 124.4,74.5 166.5,55.0 208.7,74.5 250.9,94.0 293.1,94.0 335.3,113.5 377.5,133.0 419.6,133.0 461.8,152.5 504.0,152.5 504.0,172" fill="url(#ar4684)" opacity="0">
              <animate attributeName="opacity" from="0" to="1" dur="0.8s" begin="0.9s" fill="freeze" />
            </polygon>
            <polyline points="40.0,55.0 82.2,35.5 124.4,74.5 166.5,55.0 208.7,74.5 250.9,94.0 293.1,94.0 335.3,113.5 377.5,133.0 419.6,133.0 461.8,152.5 504.0,152.5" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.3s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
            </polyline>
            <g>
              <title>
                {"W34 · 6"}
              </title>
              <circle cx="40.0" cy="55.0" r="8" fill="transparent" />
              <circle cx="40.0" cy="55.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.25s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W35 · 7"}
              </title>
              <circle cx="82.2" cy="35.5" r="8" fill="transparent" />
              <circle cx="82.2" cy="35.5" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.36s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W36 · 5"}
              </title>
              <circle cx="124.4" cy="74.5" r="8" fill="transparent" />
              <circle cx="124.4" cy="74.5" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.47s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W37 · 6"}
              </title>
              <circle cx="166.5" cy="55.0" r="8" fill="transparent" />
              <circle cx="166.5" cy="55.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.58s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W38 · 5"}
              </title>
              <circle cx="208.7" cy="74.5" r="8" fill="transparent" />
              <circle cx="208.7" cy="74.5" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.69s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W39 · 4"}
              </title>
              <circle cx="250.9" cy="94.0" r="8" fill="transparent" />
              <circle cx="250.9" cy="94.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.80s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W40 · 4"}
              </title>
              <circle cx="293.1" cy="94.0" r="8" fill="transparent" />
              <circle cx="293.1" cy="94.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.90s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W41 · 3"}
              </title>
              <circle cx="335.3" cy="113.5" r="8" fill="transparent" />
              <circle cx="335.3" cy="113.5" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.01s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W42 · 2"}
              </title>
              <circle cx="377.5" cy="133.0" r="8" fill="transparent" />
              <circle cx="377.5" cy="133.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.12s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W43 · 2"}
              </title>
              <circle cx="419.6" cy="133.0" r="8" fill="transparent" />
              <circle cx="419.6" cy="133.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.23s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W44 · 1"}
              </title>
              <circle cx="461.8" cy="152.5" r="8" fill="transparent" />
              <circle cx="461.8" cy="152.5" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.34s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W45 · 1"}
              </title>
              <circle cx="504.0" cy="152.5" r="8" fill="transparent" />
              <circle cx="504.0" cy="152.5" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.45s" fill="freeze" />
              </circle>
            </g>
            <text x="498.0" y="142.5" fontSize="12" fontWeight="600" fill="#EDEEF0" textAnchor="end">
              {"1"}
            </text>
          </svg>
        </section>
        <section className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
            <h3 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
              {"纠错介入 · 每周"}
            </h3>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              {"4"}
            </span>
          </div>
          <span className="muted" style={{ fontSize: "12px" }}>
            {"你是否在退出中转站角色（求助介入单独统计）"}
          </span>
          <svg viewBox="0 0 520 200" width="100%" role="img" aria-label="纠错介入 · 每周，近 12 周从 11 到 4，基线 11" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
            <line x1="40" y1="172.0" x2="504" y2="172.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="176.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"0"}
            </text>
            <line x1="40" y1="94.0" x2="504" y2="94.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="98.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"7"}
            </text>
            <line x1="40" y1="16.0" x2="504" y2="16.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="20.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"14"}
            </text>
            <line x1="40" y1="172" x2="504" y2="172" stroke="rgba(255,255,255,.12)" />
            <text x="40.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W34"}
            </text>
            <text x="124.4" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W36"}
            </text>
            <text x="208.7" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W38"}
            </text>
            <text x="293.1" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W40"}
            </text>
            <text x="377.5" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W42"}
            </text>
            <text x="461.8" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W44"}
            </text>
            <text x="504.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W45"}
            </text>
            <line x1="208.7" y1="16" x2="208.7" y2="172" stroke="#5C616B" strokeDasharray="2 3" />
            <text x="212.7" y="26" fontSize="11" fill="#A1A6B0">
              {"阶段 1a"}
            </text>
            <line x1="40" y1="49.4" x2="504" y2="49.4" stroke="#5C616B" strokeDasharray="5 4" />
            <text x="504" y="43.4" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"基线 11"}
            </text>
            <defs>
              <linearGradient id="ar5836" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8E7CFF" stopOpacity=".28" />
                <stop offset="1" stopColor="#8E7CFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="40.0,172 40.0,49.4 82.2,38.3 124.4,60.6 166.5,49.4 208.7,71.7 250.9,82.9 293.1,94.0 335.3,105.1 377.5,105.1 419.6,116.3 461.8,116.3 504.0,127.4 504.0,172" fill="url(#ar5836)" opacity="0">
              <animate attributeName="opacity" from="0" to="1" dur="0.8s" begin="0.9s" fill="freeze" />
            </polygon>
            <polyline points="40.0,49.4 82.2,38.3 124.4,60.6 166.5,49.4 208.7,71.7 250.9,82.9 293.1,94.0 335.3,105.1 377.5,105.1 419.6,116.3 461.8,116.3 504.0,127.4" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.3s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
            </polyline>
            <g>
              <title>
                {"W34 · 11"}
              </title>
              <circle cx="40.0" cy="49.4" r="8" fill="transparent" />
              <circle cx="40.0" cy="49.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.25s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W35 · 12"}
              </title>
              <circle cx="82.2" cy="38.3" r="8" fill="transparent" />
              <circle cx="82.2" cy="38.3" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.36s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W36 · 10"}
              </title>
              <circle cx="124.4" cy="60.6" r="8" fill="transparent" />
              <circle cx="124.4" cy="60.6" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.47s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W37 · 11"}
              </title>
              <circle cx="166.5" cy="49.4" r="8" fill="transparent" />
              <circle cx="166.5" cy="49.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.58s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W38 · 9"}
              </title>
              <circle cx="208.7" cy="71.7" r="8" fill="transparent" />
              <circle cx="208.7" cy="71.7" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.69s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W39 · 8"}
              </title>
              <circle cx="250.9" cy="82.9" r="8" fill="transparent" />
              <circle cx="250.9" cy="82.9" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.80s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W40 · 7"}
              </title>
              <circle cx="293.1" cy="94.0" r="8" fill="transparent" />
              <circle cx="293.1" cy="94.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.90s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W41 · 6"}
              </title>
              <circle cx="335.3" cy="105.1" r="8" fill="transparent" />
              <circle cx="335.3" cy="105.1" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.01s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W42 · 6"}
              </title>
              <circle cx="377.5" cy="105.1" r="8" fill="transparent" />
              <circle cx="377.5" cy="105.1" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.12s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W43 · 5"}
              </title>
              <circle cx="419.6" cy="116.3" r="8" fill="transparent" />
              <circle cx="419.6" cy="116.3" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.23s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W44 · 5"}
              </title>
              <circle cx="461.8" cy="116.3" r="8" fill="transparent" />
              <circle cx="461.8" cy="116.3" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.34s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W45 · 4"}
              </title>
              <circle cx="504.0" cy="127.4" r="8" fill="transparent" />
              <circle cx="504.0" cy="127.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.45s" fill="freeze" />
              </circle>
            </g>
            <text x="498.0" y="117.4" fontSize="12" fontWeight="600" fill="#EDEEF0" textAnchor="end">
              {"4"}
            </text>
          </svg>
        </section>
        <section className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
            <h3 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
              {"重复错误 · 每周"}
            </h3>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              {"0"}
            </span>
          </div>
          <span className="muted" style={{ fontSize: "12px" }}>
            {"系统是否真的在学习"}
          </span>
          <svg viewBox="0 0 520 200" width="100%" role="img" aria-label="重复错误 · 每周，近 12 周从 3 到 0，基线 3" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
            <line x1="40" y1="172.0" x2="504" y2="172.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="176.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"0"}
            </text>
            <line x1="40" y1="94.0" x2="504" y2="94.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="98.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"2.5"}
            </text>
            <line x1="40" y1="16.0" x2="504" y2="16.0" stroke="rgba(255,255,255,.05)" />
            <text x="32" y="20.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"5"}
            </text>
            <line x1="40" y1="172" x2="504" y2="172" stroke="rgba(255,255,255,.12)" />
            <text x="40.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W34"}
            </text>
            <text x="124.4" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W36"}
            </text>
            <text x="208.7" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W38"}
            </text>
            <text x="293.1" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W40"}
            </text>
            <text x="377.5" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W42"}
            </text>
            <text x="461.8" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W44"}
            </text>
            <text x="504.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {"W45"}
            </text>
            <line x1="208.7" y1="16" x2="208.7" y2="172" stroke="#5C616B" strokeDasharray="2 3" />
            <text x="212.7" y="26" fontSize="11" fill="#A1A6B0">
              {"阶段 1a"}
            </text>
            <line x1="40" y1="78.4" x2="504" y2="78.4" stroke="#5C616B" strokeDasharray="5 4" />
            <text x="504" y="72.4" fontSize="11" fill="#A1A6B0" textAnchor="end">
              {"基线 3"}
            </text>
            <defs>
              <linearGradient id="ar9816" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8E7CFF" stopOpacity=".28" />
                <stop offset="1" stopColor="#8E7CFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="40.0,172 40.0,78.4 82.2,47.2 124.4,78.4 166.5,78.4 208.7,109.6 250.9,109.6 293.1,140.8 335.3,140.8 377.5,140.8 419.6,172.0 461.8,172.0 504.0,172.0 504.0,172" fill="url(#ar9816)" opacity="0">
              <animate attributeName="opacity" from="0" to="1" dur="0.8s" begin="0.9s" fill="freeze" />
            </polygon>
            <polyline points="40.0,78.4 82.2,47.2 124.4,78.4 166.5,78.4 208.7,109.6 250.9,109.6 293.1,140.8 335.3,140.8 377.5,140.8 419.6,172.0 461.8,172.0 504.0,172.0" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset="100">
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.3s" begin="0.2s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".2 .8 .2 1" />
            </polyline>
            <g>
              <title>
                {"W34 · 3"}
              </title>
              <circle cx="40.0" cy="78.4" r="8" fill="transparent" />
              <circle cx="40.0" cy="78.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.25s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W35 · 4"}
              </title>
              <circle cx="82.2" cy="47.2" r="8" fill="transparent" />
              <circle cx="82.2" cy="47.2" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.36s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W36 · 3"}
              </title>
              <circle cx="124.4" cy="78.4" r="8" fill="transparent" />
              <circle cx="124.4" cy="78.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.47s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W37 · 3"}
              </title>
              <circle cx="166.5" cy="78.4" r="8" fill="transparent" />
              <circle cx="166.5" cy="78.4" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.58s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W38 · 2"}
              </title>
              <circle cx="208.7" cy="109.6" r="8" fill="transparent" />
              <circle cx="208.7" cy="109.6" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.69s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W39 · 2"}
              </title>
              <circle cx="250.9" cy="109.6" r="8" fill="transparent" />
              <circle cx="250.9" cy="109.6" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.80s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W40 · 1"}
              </title>
              <circle cx="293.1" cy="140.8" r="8" fill="transparent" />
              <circle cx="293.1" cy="140.8" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="0.90s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W41 · 1"}
              </title>
              <circle cx="335.3" cy="140.8" r="8" fill="transparent" />
              <circle cx="335.3" cy="140.8" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.01s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W42 · 1"}
              </title>
              <circle cx="377.5" cy="140.8" r="8" fill="transparent" />
              <circle cx="377.5" cy="140.8" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.12s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W43 · 0"}
              </title>
              <circle cx="419.6" cy="172.0" r="8" fill="transparent" />
              <circle cx="419.6" cy="172.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.23s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W44 · 0"}
              </title>
              <circle cx="461.8" cy="172.0" r="8" fill="transparent" />
              <circle cx="461.8" cy="172.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.34s" fill="freeze" />
              </circle>
            </g>
            <g>
              <title>
                {"W45 · 0"}
              </title>
              <circle cx="504.0" cy="172.0" r="8" fill="transparent" />
              <circle cx="504.0" cy="172.0" r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
                <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin="1.45s" fill="freeze" />
              </circle>
            </g>
            <text x="498.0" y="162.0" fontSize="12" fontWeight="600" fill="#EDEEF0" textAnchor="end">
              {"0"}
            </text>
          </svg>
        </section>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: "1.2 1 520px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="roi-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="roi-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"投入产出"}
                </h2>
                <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
                  {"从阶段 1a 开始"}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <svg viewBox="0 0 560 200" width="100%" role="img" aria-label="每周投入与产出估算（小时）" style={{ display: "block", fontFamily: "Inter, \"Noto Sans SC\", system-ui, sans-serif" }}>
              <line x1="36" y1="172.0" x2="548" y2="172.0" stroke="rgba(255,255,255,.05)" />
              <text x="28" y="176.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
                {"0h"}
              </text>
              <line x1="36" y1="92.0" x2="548" y2="92.0" stroke="rgba(255,255,255,.05)" />
              <text x="28" y="96.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
                {"4h"}
              </text>
              <line x1="36" y1="12.0" x2="548" y2="12.0" stroke="rgba(255,255,255,.05)" />
              <text x="28" y="16.0" fontSize="11" fill="#A1A6B0" textAnchor="end">
                {"8h"}
              </text>
              <line x1="36" y1="172" x2="548" y2="172" stroke="rgba(255,255,255,.12)" />
              <g>
                <title>
                  {"W38 · 投入 5 小时"}
                </title>
                <path d="M53.0 172 V75.0 Q53.0 72.0 56.0 72.0 H64.0 Q67.0 72.0 67.0 75.0 V172z" fill="#5C616B" />
              </g>
              <g>
                <title>
                  {"W38 · 产出估算 0.5 小时"}
                </title>
                <path d="M69.0 172 V165.0 Q69.0 162.0 72.0 162.0 H80.0 Q83.0 162.0 83.0 165.0 V172z" fill="#7C6CFF" />
              </g>
              <text x="68.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"W38"}
              </text>
              <g>
                <title>
                  {"W39 · 投入 4.5 小时"}
                </title>
                <path d="M117.0 172 V85.0 Q117.0 82.0 120.0 82.0 H128.0 Q131.0 82.0 131.0 85.0 V172z" fill="#5C616B" />
              </g>
              <g>
                <title>
                  {"W39 · 产出估算 1.5 小时"}
                </title>
                <path d="M133.0 172 V145.0 Q133.0 142.0 136.0 142.0 H144.0 Q147.0 142.0 147.0 145.0 V172z" fill="#7C6CFF" />
              </g>
              <text x="132.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"W39"}
              </text>
              <g>
                <title>
                  {"W40 · 投入 4 小时"}
                </title>
                <path d="M181.0 172 V95.0 Q181.0 92.0 184.0 92.0 H192.0 Q195.0 92.0 195.0 95.0 V172z" fill="#5C616B" />
              </g>
              <g>
                <title>
                  {"W40 · 产出估算 2.5 小时"}
                </title>
                <path d="M197.0 172 V125.0 Q197.0 122.0 200.0 122.0 H208.0 Q211.0 122.0 211.0 125.0 V172z" fill="#7C6CFF" />
              </g>
              <text x="196.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"W40"}
              </text>
              <g>
                <title>
                  {"W41 · 投入 3.5 小时"}
                </title>
                <path d="M245.0 172 V105.0 Q245.0 102.0 248.0 102.0 H256.0 Q259.0 102.0 259.0 105.0 V172z" fill="#5C616B" />
              </g>
              <g>
                <title>
                  {"W41 · 产出估算 3.5 小时"}
                </title>
                <path d="M261.0 172 V105.0 Q261.0 102.0 264.0 102.0 H272.0 Q275.0 102.0 275.0 105.0 V172z" fill="#7C6CFF" />
              </g>
              <text x="260.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"W41"}
              </text>
              <g>
                <title>
                  {"W42 · 投入 3 小时"}
                </title>
                <path d="M309.0 172 V115.0 Q309.0 112.0 312.0 112.0 H320.0 Q323.0 112.0 323.0 115.0 V172z" fill="#5C616B" />
              </g>
              <g>
                <title>
                  {"W42 · 产出估算 4.5 小时"}
                </title>
                <path d="M325.0 172 V85.0 Q325.0 82.0 328.0 82.0 H336.0 Q339.0 82.0 339.0 85.0 V172z" fill="#7C6CFF" />
              </g>
              <text x="324.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"W42"}
              </text>
              <g>
                <title>
                  {"W43 · 投入 3 小时"}
                </title>
                <path d="M373.0 172 V115.0 Q373.0 112.0 376.0 112.0 H384.0 Q387.0 112.0 387.0 115.0 V172z" fill="#5C616B" />
              </g>
              <g>
                <title>
                  {"W43 · 产出估算 5.2 小时"}
                </title>
                <path d="M389.0 172 V71.0 Q389.0 68.0 392.0 68.0 H400.0 Q403.0 68.0 403.0 71.0 V172z" fill="#7C6CFF" />
              </g>
              <text x="388.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"W43"}
              </text>
              <g>
                <title>
                  {"W44 · 投入 2.5 小时"}
                </title>
                <path d="M437.0 172 V125.0 Q437.0 122.0 440.0 122.0 H448.0 Q451.0 122.0 451.0 125.0 V172z" fill="#5C616B" />
              </g>
              <g>
                <title>
                  {"W44 · 产出估算 5.9 小时"}
                </title>
                <path d="M453.0 172 V57.0 Q453.0 54.0 456.0 54.0 H464.0 Q467.0 54.0 467.0 57.0 V172z" fill="#7C6CFF" />
              </g>
              <text x="452.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"W44"}
              </text>
              <g>
                <title>
                  {"W45 · 投入 2.5 小时"}
                </title>
                <path d="M501.0 172 V125.0 Q501.0 122.0 504.0 122.0 H512.0 Q515.0 122.0 515.0 125.0 V172z" fill="#5C616B" />
              </g>
              <g>
                <title>
                  {"W45 · 产出估算 6.4 小时"}
                </title>
                <path d="M517.0 172 V47.0 Q517.0 44.0 520.0 44.0 H528.0 Q531.0 44.0 531.0 47.0 V172z" fill="#7C6CFF" />
              </g>
              <text x="516.0" y="192" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                {"W45"}
              </text>
            </svg>
            <div className="muted" style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px" }}>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(92, 97, 107)" }} />
                {"投入：每周花在知识库上的时间"}
              </span>
              <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "3px", background: "rgb(124, 108, 255)" }} />
                {"产出估算：少返工、少纠错折算的时间"}
              </span>
            </div>
            <p className="muted" style={{ margin: "8px 0px 0px", fontSize: "12px" }}>
              {"折算很粗略，只看趋势。W41 起产出超过投入"}
            </p>
          </section>
        </div>
        <div style={{ flex: "1 1 360px", minWidth: "0px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <section className="card" aria-labelledby="stg-h" style={{ minWidth: "0px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <h2 id="stg-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
                  {"阶段进度"}
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
            </div>
            <ol style={{ listStyle: "none", margin: "0px", padding: "0px", display: "flex", flexDirection: "column" }}>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "8px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {"0 止血"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"进入下一阶段：回归问题基本消失"}
                  </span>
                </div>
                <span className="chip s-done">
                  {"已达成"}
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "8px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {"1a 单项目积累"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"进入下一阶段：积累约 30 条真实知识"}
                  </span>
                </div>
                <span className="chip s-done">
                  {"已达成 · 现 148 条"}
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "8px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {"1b 单项目见效"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"进入下一阶段：四个核心指标相对基线改善"}
                  </span>
                </div>
                <span className="chip s-done">
                  {"已达成"}
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "8px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {"2 网关与跨项目"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"进入下一阶段：出现可上提的跨项目知识"}
                  </span>
                </div>
                <span className="chip s-doing">
                  {"进行中 · K-027 已提议"}
                </span>
              </li>
              <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "8px", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {"3 完整可观测"}
                  </span>
                  <span className="muted" style={{ fontSize: "12px" }}>
                    {"进入下一阶段：数据证明值得投入"}
                  </span>
                </div>
                <span className="chip s-queue">
                  {"未开始"}
                </span>
              </li>
            </ol>
          </section>
        </div>
      </div>
      <section className="card" aria-labelledby="att-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="att-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"溯源四层"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"可信度从高到低"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
          <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {"1 检索记录"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"系统实际交给 agent 的条目 · 机器记录，全量"}
              </span>
            </div>
            <div>
              <span className="chip s-queue">
                {"今天 1,284 次"}
              </span>
            </div>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {"2 引用核验"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"agent 声称依据了哪条，自动核对是否存在、内容是否对得上"}
              </span>
            </div>
            <div>
              <span className="chip s-queue">
                {"一致 98.6%"}
              </span>
            </div>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {"3 消融测试"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"去掉某条再跑一遍。K-021：去掉后返工 +3，保留；K-061：去掉后无变化，建议废弃"}
              </span>
            </div>
            <div>
              <span className="chip s-queue">
                {"已做 2 次"}
              </span>
            </div>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "12px", alignItems: "center", padding: "10px 0px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0px" }}>
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {"4 AI 自述"}
              </span>
              <span className="muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                {"只作参考，不作依据"}
              </span>
            </div>
            <div>
              <span className="chip s-queue">
                {"不计入"}
              </span>
            </div>
          </li>
        </ul>
      </section>
      <section className="card" aria-labelledby="bl-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="bl-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"监控盲区"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"网关能保证 agent 写不乱，但不能保证你看得全。看不到的地方明确标出来"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "620px" }}>
            <thead>
              <tr>
                <th scope="col">
                  {"看不到什么"}
                </th>
                <th scope="col">
                  {"补救"}
                </th>
                <th scope="col">
                  {"本周"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {"本地热区规则是否被遵守"}
                </td>
                <td>
                  {"热区保持极小；任务记录写明热区版本；结果抽查"}
                </td>
                <td>
                  {"抽查 4 次，0 次违反"}
                </td>
              </tr>
              <tr>
                <td>
                  {"做法是否真的遵循了引用"}
                </td>
                <td>
                  {"结果回流 + 抽查，防止为了通过检查而引用"}
                </td>
                <td>
                  {"抽查 3 次，1 次不一致（T1）"}
                </td>
              </tr>
              <tr>
                <td>
                  {"从未调用网关的任务"}
                </td>
                <td>
                  {"任务登记 + 零调用任务反向指标"}
                </td>
                <td>
                  <Link to="/live">
                    {"零调用任务 1 个"}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  {"网关超时时 agent 无声跳过"}
                </td>
                <td>
                  {"热区兜底 + 可用性报警；超时计入零调用"}
                </td>
                <td>
                  {"超时 3 次"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="card" aria-labelledby="ext-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="ext-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"扩展指标"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"数据足够后启用。指标只辅助判断实用性，不是实用性本身"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }} />
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
            <thead>
              <tr>
                <th scope="col" style={{ width: "90px" }}>
                  {"类别"}
                </th>
                <th scope="col">
                  {"当前值"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {"质量"}
                </td>
                <td>
                  {"证据覆盖率 100% · 验证率 59% · 引用准确率 98.6% · 冲突 1 · 过期率 4%"}
                </td>
              </tr>
              <tr>
                <td>
                  {"使用"}
                </td>
                <td>
                  {"调用 1,284 / 天 · 采用率（检索后被引用）38% · 知识缺口率（求助中“没有覆盖”）4 / 7 · "}
                  <Link to="/knowledge">
                    {"热力分布"}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  {"效果"}
                </td>
                <td>
                  {"返工 5 轮 / 周（基线 12）· 交付周期中位 2.5 天（基线 4）· 有无知识对比：消融 2 次"}
                </td>
              </tr>
              <tr>
                <td>
                  {"演化"}
                </td>
                <td>
                  {"规模 148 · 本周 +5 / 修订 1 / 取代 1 · 假设转化率 46% · 修正时延中位 1.5 天"}
                </td>
              </tr>
              <tr>
                <td>
                  {"审核健康"}
                </td>
                <td>
                  {"通过率 78% · 单条 1 分 40 秒 · 混入错误候选检出 1 / 1"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
