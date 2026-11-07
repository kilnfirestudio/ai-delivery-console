// Agent 看板 · Converted from the "AI 交付全局控制台" design export.
import { Link } from 'react-router-dom';

export default function Agents() {
  return (
    <main style={{ boxSizing: "border-box", width: "100%", maxWidth: "1280px", padding: "24px 32px 48px", display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span className="gt gt-violet float" aria-hidden="true" style={{ width: "44px", height: "44px", borderRadius: "12px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="url(#gs-violet)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
            </span>
            <h1 style={{ margin: "0px", fontSize: "28px", fontWeight: "600" }}>
              {"Agent 看板"}
            </h1>
          </div>
          <p className="muted" style={{ margin: "6px 0px 0px", fontSize: "14px" }}>
            {"每个 agent 一列：正在做的、排队的、今天做完的。身份由网关登记，文件范围由工具 hook 和提交检查执行"}
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          <span className="chip s-doing">
            {"进行中 3"}
          </span>
          <span className="chip s-you">
            {"等待你 2"}
          </span>
          <span className="chip s-queue">
            {"待命或空闲 2"}
          </span>
        </div>
      </div>
      <section className="card" aria-labelledby="atl-h" style={{ minWidth: "0px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 id="atl-h" style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
              {"今日时间轴"}
            </h2>
            <p className="muted" style={{ margin: "4px 0px 0px", fontSize: "13px", lineHeight: "1.6" }}>
              {"并行情况一眼看清：蓝色在做，橙色在等你，空白是空闲"}
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
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
                <svg className="bot bot-idle" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                    {"需求拆分 agent"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Claude · 网页端"}
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
                <span title="需求拆分 agent · 10:05–10:35 · TASK-0415 起草确认单" style={{ position: "absolute", top: "5px", bottom: "5px", left: "12.04%", width: "calc(5.56% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-queue">
                  {"空闲"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"等客户确认 TASK-0415 需求单"}
                </span>
              </div>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-work" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                    {"开发 A"}
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
                <span title="开发 A · 09:00–11:30 · T0 共用组件" style={{ position: "absolute", top: "5px", bottom: "5px", left: "0%", width: "calc(27.78% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T0 共用组件"}
                </span>
                <span className="shim" title="开发 A · 13:30–16:20 · T3 客服弹窗图标" style={{ position: "absolute", top: "5px", bottom: "5px", left: "50%", width: "calc(31.48% - 3px)", backgroundColor: "rgb(110, 92, 246)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(255, 255, 255)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T3 客服弹窗图标"}
                </span>
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-doing">
                  {"进行中"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T3 · 检查点 1 / 5"}
                </span>
                <span className="typing" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-work" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                    {"开发 B"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Codex · M5 Pro"}
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
                <span title="开发 B · 09:30–11:00 · T-0409 文案" style={{ position: "absolute", top: "5px", bottom: "5px", left: "5.56%", width: "calc(16.67% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T-0409 文案"}
                </span>
                <span className="shim" title="开发 B · 12:15–16:20 · T1 限时徽章" style={{ position: "absolute", top: "5px", bottom: "5px", left: "36.11%", width: "calc(45.37% - 3px)", backgroundColor: "rgb(110, 92, 246)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(255, 255, 255)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T1 限时徽章"}
                </span>
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-doing">
                  {"进行中"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T1 · 检查点 2 / 5"}
                </span>
                <span className="typing" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
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
                <span title="开发 C · 09:20–10:30 · T-0407 四舍五入" style={{ position: "absolute", top: "5px", bottom: "5px", left: "3.7%", width: "calc(12.96% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T-0407 四舍五入"}
                </span>
                <span title="开发 C · 10:30–10:50 · 等你" style={{ position: "absolute", top: "5px", bottom: "5px", left: "16.67%", width: "calc(3.7% - 3px)", backgroundColor: "rgb(227, 160, 8)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(26, 18, 0)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span title="开发 C · 10:50–11:30 · 返工" style={{ position: "absolute", top: "5px", bottom: "5px", left: "20.37%", width: "calc(7.41% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span title="开发 C · 12:15–15:11 · T2 移动端图片" style={{ position: "absolute", top: "5px", bottom: "5px", left: "36.11%", width: "calc(32.59% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"T2 移动端图片"}
                </span>
                <span title="开发 C · 15:11–16:20 · 等你回答求助" style={{ position: "absolute", top: "5px", bottom: "5px", left: "68.7%", width: "calc(12.78% - 3px)", backgroundColor: "rgb(227, 160, 8)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(26, 18, 0)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"等你回答求助"}
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
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-work" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                    {"开发 D"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Codex · 云端"}
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
                <span title="开发 D · 09:00–12:00 · X-0029 导入脚本" style={{ position: "absolute", top: "5px", bottom: "5px", left: "0%", width: "calc(33.33% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"X-0029 导入脚本"}
                </span>
                <span className="shim" title="开发 D · 13:00–16:20 · X-0031 批量生成接口" style={{ position: "absolute", top: "5px", bottom: "5px", left: "44.44%", width: "calc(37.04% - 3px)", backgroundColor: "rgb(110, 92, 246)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(255, 255, 255)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"X-0031 批量生成接口"}
                </span>
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-doing">
                  {"进行中"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"X-0031 · 检查点 2 / 5"}
                </span>
                <span className="typing" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
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
                    {"开发 E"}
                  </span>
                  <span className="muted" style={{ fontSize: "11px" }}>
                    {"Cursor · MacBook Air"}
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
                <span title="开发 E · 10:00–11:45 · P-0011 导航" style={{ position: "absolute", top: "5px", bottom: "5px", left: "11.11%", width: "calc(19.44% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"P-0011 导航"}
                </span>
                <span title="开发 E · 13:00–15:45 · P-0012 案例页" style={{ position: "absolute", top: "5px", bottom: "5px", left: "44.44%", width: "calc(30.56% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"P-0012 案例页"}
                </span>
                <span title="开发 E · 15:45–16:20 · 等你看截图" style={{ position: "absolute", top: "5px", bottom: "5px", left: "75%", width: "calc(6.48% - 3px)", backgroundColor: "rgb(227, 160, 8)", boxShadow: "rgba(255, 255, 255, 0.18) 0px 1px 0px inset", color: "rgb(26, 18, 0)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-you live">
                  {"等待你"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"P-0012 · 已等 35 分钟"}
                </span>
              </div>
            </div>
            <div role="row" style={{ display: "grid", gridTemplateColumns: "220px minmax(0px, 1fr) 260px", gap: "12px", alignItems: "center" }}>
              <div role="rowheader" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <svg className="bot bot-stand" width="30" height="30" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                    {"审查回归 agent"}
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
                <span title="审查回归 agent · 11:30–12:10 · T0 合并回归" style={{ position: "absolute", top: "5px", bottom: "5px", left: "27.78%", width: "calc(7.41% - 3px)", backgroundColor: "rgba(124, 108, 255, 0.14)", boxShadow: "rgba(124, 108, 255, 0.28) 0px 0px 0px 1px inset", color: "rgb(201, 205, 212)", borderRadius: "6px", fontSize: "11px", fontWeight: "600", lineHeight: "26px", padding: "0px 8px", boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} />
                <span className="nowline" aria-hidden="true" style={{ position: "absolute", top: "-5px", bottom: "-5px", left: "81.48%", width: "2px", marginLeft: "-1px", background: "rgb(248, 81, 73)" }} />
              </div>
              <div role="cell" style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0px" }}>
                <span className="chip s-queue">
                  {"待命"}
                </span>
                <span style={{ fontSize: "12px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  {"等 T1–T3 完成"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card" aria-label="本周汇总" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
        <div className="stat">
          <span className="muted" style={{ fontSize: "13px" }}>
            {"本周完成子任务"}
          </span>
          <span style={{ fontSize: "24px", fontWeight: "600" }}>
            {"23"}
          </span>
        </div>
        <div className="stat">
          <span className="muted" style={{ fontSize: "13px" }}>
            {"一次通过"}
          </span>
          <span style={{ fontSize: "24px", fontWeight: "600" }}>
            {"18 / 23"}
          </span>
        </div>
        <div className="stat">
          <span className="muted" style={{ fontSize: "13px" }}>
            {"求助"}
          </span>
          <span style={{ fontSize: "24px", fontWeight: "600" }}>
            {"7"}
          </span>
        </div>
        <div className="stat">
          <span className="muted" style={{ fontSize: "13px" }}>
            {"越界修改被拦下"}
          </span>
          <span style={{ fontSize: "24px", fontWeight: "600" }}>
            {"2"}
          </span>
        </div>
        <div className="stat">
          <span className="muted" style={{ fontSize: "13px" }}>
            {"引用核验不一致"}
          </span>
          <span style={{ fontSize: "24px", fontWeight: "600" }}>
            {"1"}
          </span>
        </div>
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px", alignItems: "start" }}>
        <section className="lane" aria-label="需求拆分 agent">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "0px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg className="bot bot-idle" width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                <h2 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"需求拆分 agent"}
                  </span>
                </h2>
              </div>
              <p className="muted" style={{ margin: "2px 0px 0px", fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Claude · 网页端"}
                </span>
              </p>
            </div>
            <span className="chip s-queue">
              <span className="sc-interp">
                {"空闲"}
              </span>
            </span>
          </div>
          <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
            {"权限："}
            <span className="sc-interp">
              {"读 L0–L2 与本客户层 · 写候选、提交拆分方案"}
            </span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", background: "rgb(22, 23, 26)", borderRadius: "8px", padding: "8px 10px" }}>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"本周完成"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"一次通过"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"3 / 3"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"求助"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"0"}
                </span>
              </span>
            </div>
          </div>
          <p className="lbl">
            {"正在做"}
          </p>
          <Link to="/task" className="tc" style={{ background: "transparent", borderStyle: "dashed", color: "rgb(161, 166, 176)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"—"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp" />
              </span>
            </div>
            <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"暂无"}
              </span>
            </span>
            <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
            </div>
            <span style={{ fontSize: "12px" }}>
              <span className="sc-interp" />
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              <span className="sc-interp" />
            </span>
          </Link>
          <p className="lbl">
            {"排队"}
          </p>
          <div className="tc" style={{  }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"TASK-0415"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp">
                  {"xuvia"}
                </span>
              </span>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"拆分选题去重需求（等客户确认需求单）"}
              </span>
            </span>
          </div>
          <p className="lbl">
            {"今天做完"}
          </p>
          <div className="tc" style={{ background: "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"TASK-0415"}
                </span>
              </span>
              <span className="chip s-done">
                <span className="sc-interp">
                  {"一次通过"}
                </span>
              </span>
            </div>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"起草 xuvia 选题去重的确认单"}
              </span>
            </span>
          </div>
        </section>
        <section className="lane" aria-label="开发 A">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "0px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg className="bot bot-work" width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                <h2 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"开发 A"}
                  </span>
                </h2>
              </div>
              <p className="muted" style={{ margin: "2px 0px 0px", fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Claude Code · M5 Pro 本地"}
                </span>
              </p>
            </div>
            <span className="chip s-doing">
              <span className="sc-interp">
                {"进行中"}
              </span>
            </span>
          </div>
          <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
            {"权限："}
            <span className="sc-interp">
              {"读 L0–L2 与客户 A 层 · 只改 T3 文件范围"}
            </span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", background: "rgb(22, 23, 26)", borderRadius: "8px", padding: "8px 10px" }}>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"本周完成"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"5"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"一次通过"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"5 / 5"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"求助"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
            </div>
          </div>
          <p className="lbl">
            {"正在做"}
          </p>
          <Link to="/task" className="tc" style={{  }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"T3"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Shopline"}
                </span>
              </span>
            </div>
            <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"客服弹窗换新图标"}
              </span>
            </span>
            <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
              <span style={{ height: "6px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
            </div>
            <span style={{ fontSize: "12px" }}>
              <span className="sc-interp">
                {"检查点 1 / 5 · 下一个：改动提交"}
              </span>
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"已检索 4 条图标与无障碍规则"}
              </span>
            </span>
          </Link>
          <p className="lbl">
            {"排队"}
          </p>
          <div className="tc" style={{ background: "transparent", borderStyle: "dashed", color: "rgb(161, 166, 176)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"—"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp" />
              </span>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"暂无"}
              </span>
            </span>
          </div>
          <p className="lbl">
            {"今天做完"}
          </p>
          <div className="tc" style={{ background: "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"T0"}
                </span>
              </span>
              <span className="chip s-done">
                <span className="sc-interp">
                  {"一次通过"}
                </span>
              </span>
            </div>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"抽出共用卡片组件与样式变量"}
              </span>
            </span>
          </div>
        </section>
        <section className="lane" aria-label="开发 B">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "0px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg className="bot bot-work" width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                <h2 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"开发 B"}
                  </span>
                </h2>
              </div>
              <p className="muted" style={{ margin: "2px 0px 0px", fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Codex · 本地"}
                </span>
              </p>
            </div>
            <span className="chip s-doing">
              <span className="sc-interp">
                {"进行中"}
              </span>
            </span>
          </div>
          <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
            {"权限："}
            <span className="sc-interp">
              {"读 L0–L2 与客户 A 层 · 只改 T1 文件范围"}
            </span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", background: "rgb(22, 23, 26)", borderRadius: "8px", padding: "8px 10px" }}>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"本周完成"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"一次通过"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"2 / 4"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"求助"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
            </div>
          </div>
          <p className="lbl">
            {"正在做"}
          </p>
          <Link to="/task" className="tc" style={{  }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"T1"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Shopline"}
                </span>
              </span>
            </div>
            <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"对比表加“限时”徽章"}
              </span>
            </span>
            <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
              <span style={{ height: "6px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
            </div>
            <span style={{ fontSize: "12px" }}>
              <span className="sc-interp">
                {"检查点 2 / 5 · 下一个：自测与截图"}
              </span>
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"1 处引用核验不一致，已记入每周复盘"}
              </span>
            </span>
          </Link>
          <p className="lbl">
            {"排队"}
          </p>
          <div className="tc" style={{ background: "transparent", borderStyle: "dashed", color: "rgb(161, 166, 176)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"—"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp" />
              </span>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"暂无"}
              </span>
            </span>
          </div>
          <p className="lbl">
            {"今天做完"}
          </p>
          <div className="tc" style={{ background: "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"T-0409"}
                </span>
              </span>
              <span className="chip s-done">
                <span className="sc-interp">
                  {"一次通过"}
                </span>
              </span>
            </div>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"购物车提示文案替换"}
              </span>
            </span>
          </div>
        </section>
        <section className="lane" aria-label="开发 C">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "0px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg className="bot bot-wait" width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                <h2 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"开发 C"}
                  </span>
                </h2>
              </div>
              <p className="muted" style={{ margin: "2px 0px 0px", fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Claude Code · M5 Pro 本地"}
                </span>
              </p>
            </div>
            <span className="chip s-you">
              <span className="sc-interp">
                {"等待你"}
              </span>
            </span>
          </div>
          <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
            {"权限："}
            <span className="sc-interp">
              {"读 L0–L2 与客户 A 层 · 只改 T2 文件范围"}
            </span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", background: "rgb(22, 23, 26)", borderRadius: "8px", padding: "8px 10px" }}>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"本周完成"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"一次通过"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"2 / 3"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"求助"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
            </div>
          </div>
          <p className="lbl">
            {"正在做"}
          </p>
          <Link to="/task" className="tc" style={{ borderColor: "rgba(227, 160, 8, 0.45)", background: "rgba(227, 160, 8, 0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"T2"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Shopline"}
                </span>
              </span>
            </div>
            <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"卡片移动端图片改为服务端裁切"}
              </span>
            </span>
            <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
              <span style={{ height: "6px", borderRadius: "2px", background: "rgb(220, 104, 3)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
            </div>
            <span style={{ fontSize: "12px" }}>
              <span className="sc-interp">
                {"检查点 1 / 5 · 下一个：改动提交"}
              </span>
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(242, 193, 78)", fontWeight: "500" }}>
              <span className="sc-interp">
                {"求助：要改共用 CSS 才能完成，已被改文件前 hook 拦下"}
              </span>
            </span>
          </Link>
          <p className="lbl">
            {"排队"}
          </p>
          <div className="tc" style={{ background: "transparent", borderStyle: "dashed", color: "rgb(161, 166, 176)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"—"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp" />
              </span>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"暂无"}
              </span>
            </span>
          </div>
          <p className="lbl">
            {"今天做完"}
          </p>
          <div className="tc" style={{ background: "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"T-0407"}
                </span>
              </span>
              <span className="chip s-you">
                <span className="sc-interp">
                  {"返工 1 次"}
                </span>
              </span>
            </div>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"bundle 价格四舍五入"}
              </span>
            </span>
          </div>
        </section>
        <section className="lane" aria-label="开发 D">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "0px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg className="bot bot-work" width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                <h2 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"开发 D"}
                  </span>
                </h2>
              </div>
              <p className="muted" style={{ margin: "2px 0px 0px", fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Codex · 云端"}
                </span>
              </p>
            </div>
            <span className="chip s-doing">
              <span className="sc-interp">
                {"进行中"}
              </span>
            </span>
          </div>
          <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
            {"权限："}
            <span className="sc-interp">
              {"读 L0–L2 与 xuvia 项目层 · 只改接口目录"}
            </span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", background: "rgb(22, 23, 26)", borderRadius: "8px", padding: "8px 10px" }}>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"本周完成"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"4"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"一次通过"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"3 / 4"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"求助"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
            </div>
          </div>
          <p className="lbl">
            {"正在做"}
          </p>
          <Link to="/task" className="tc" style={{  }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"X-0031"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp">
                  {"xuvia"}
                </span>
              </span>
            </div>
            <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"选题批量生成接口"}
              </span>
            </span>
            <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
              <span style={{ height: "6px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgb(110, 92, 246)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
            </div>
            <span style={{ fontSize: "12px" }}>
              <span className="sc-interp">
                {"检查点 2 / 5 · 下一个：自测与截图"}
              </span>
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(161, 166, 176)" }}>
              <span className="sc-interp">
                {"正在写接口测试"}
              </span>
            </span>
          </Link>
          <p className="lbl">
            {"排队"}
          </p>
          <div className="tc" style={{  }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"X-0032"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp">
                  {"xuvia"}
                </span>
              </span>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"生成结果去重"}
              </span>
            </span>
          </div>
          <p className="lbl">
            {"今天做完"}
          </p>
          <div className="tc" style={{ background: "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"X-0029"}
                </span>
              </span>
              <span className="chip s-done">
                <span className="sc-interp">
                  {"一次通过"}
                </span>
              </span>
            </div>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"素材库导入脚本"}
              </span>
            </span>
          </div>
        </section>
        <section className="lane" aria-label="开发 E">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "0px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg className="bot bot-wait" width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                <h2 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"开发 E"}
                  </span>
                </h2>
              </div>
              <p className="muted" style={{ margin: "2px 0px 0px", fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Cursor · MacBook Air"}
                </span>
              </p>
            </div>
            <span className="chip s-you">
              <span className="sc-interp">
                {"等待你"}
              </span>
            </span>
          </div>
          <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
            {"权限："}
            <span className="sc-interp">
              {"读 L0–L2 与个人站项目层 · 只改 pages/cases"}
            </span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", background: "rgb(22, 23, 26)", borderRadius: "8px", padding: "8px 10px" }}>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"本周完成"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"3"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"一次通过"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"2 / 3"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"求助"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"0"}
                </span>
              </span>
            </div>
          </div>
          <p className="lbl">
            {"正在做"}
          </p>
          <Link to="/task" className="tc" style={{ borderColor: "rgba(227, 160, 8, 0.45)", background: "rgba(227, 160, 8, 0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"P-0012"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp">
                  {"个人站"}
                </span>
              </span>
            </div>
            <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"案例页"}
              </span>
            </span>
            <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
              <span style={{ height: "6px", borderRadius: "2px", background: "rgb(220, 104, 3)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgb(220, 104, 3)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgb(220, 104, 3)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
            </div>
            <span style={{ fontSize: "12px" }}>
              <span className="sc-interp">
                {"检查点 3 / 5 · 下一个：你看过截图"}
              </span>
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5", color: "rgb(242, 193, 78)", fontWeight: "500" }}>
              <span className="sc-interp">
                {"截图已提交，等你看（不阻塞，可先领下一个任务）"}
              </span>
            </span>
          </Link>
          <p className="lbl">
            {"排队"}
          </p>
          <div className="tc" style={{ background: "transparent", borderStyle: "dashed", color: "rgb(161, 166, 176)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"—"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp" />
              </span>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"暂无"}
              </span>
            </span>
          </div>
          <p className="lbl">
            {"今天做完"}
          </p>
          <div className="tc" style={{ background: "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"P-0011"}
                </span>
              </span>
              <span className="chip s-done">
                <span className="sc-interp">
                  {"一次通过"}
                </span>
              </span>
            </div>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"移动端导航"}
              </span>
            </span>
          </div>
        </section>
        <section className="lane" aria-label="审查回归 agent">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "flex-start" }}>
            <div style={{ minWidth: "0px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg className="bot bot-stand" width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "0 0 auto", overflow: "visible" }}>
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
                <h2 style={{ margin: "0px", fontSize: "15px", fontWeight: "600" }}>
                  <span className="sc-interp">
                    {"审查回归 agent"}
                  </span>
                </h2>
              </div>
              <p className="muted" style={{ margin: "2px 0px 0px", fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Claude Code · M5 Pro 本地"}
                </span>
              </p>
            </div>
            <span className="chip s-queue">
              <span className="sc-interp">
                {"待命"}
              </span>
            </span>
          </div>
          <p className="muted" style={{ margin: "0px", fontSize: "12px", lineHeight: "1.5" }}>
            {"权限："}
            <span className="sc-interp">
              {"读全部本项目代码 · 只写测试与回归报告"}
            </span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", background: "rgb(22, 23, 26)", borderRadius: "8px", padding: "8px 10px" }}>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"本周完成"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"一次通过"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"1 / 1"}
                </span>
              </span>
            </div>
            <div className="stat">
              <span className="muted" style={{ fontSize: "11px" }}>
                {"求助"}
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                <span className="sc-interp">
                  {"1"}
                </span>
              </span>
            </div>
          </div>
          <p className="lbl">
            {"正在做"}
          </p>
          <Link to="/task" className="tc" style={{ background: "transparent", borderStyle: "dashed", color: "rgb(161, 166, 176)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"—"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp" />
              </span>
            </div>
            <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"等待 T1–T3 完成"}
              </span>
            </span>
            <div role="img" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
              <span style={{ height: "6px", borderRadius: "2px", background: "rgba(255, 255, 255, 0.08)" }} />
            </div>
            <span style={{ fontSize: "12px" }}>
              <span className="sc-interp" />
            </span>
            <span style={{ fontSize: "12px", lineHeight: "1.5" }}>
              <span className="sc-interp" />
            </span>
          </Link>
          <p className="lbl">
            {"排队"}
          </p>
          <div className="tc" style={{  }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"T4"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp">
                  {"Shopline"}
                </span>
              </span>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"合并 Black Friday 分支并全量回归"}
              </span>
            </span>
          </div>
          <div className="tc" style={{  }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"P-0013"}
                </span>
              </span>
              <span className="muted" style={{ fontSize: "12px" }}>
                <span className="sc-interp">
                  {"个人站"}
                </span>
              </span>
            </div>
            <span style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"案例页回归"}
              </span>
            </span>
          </div>
          <p className="lbl">
            {"今天做完"}
          </p>
          <div className="tc" style={{ background: "transparent" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
              <span className="mono">
                <span className="sc-interp">
                  {"T0-R"}
                </span>
              </span>
              <span className="chip s-done">
                <span className="sc-interp">
                  {"一次通过"}
                </span>
              </span>
            </div>
            <span className="muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
              <span className="sc-interp">
                {"T0 回归 12 / 12 通过"}
              </span>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
