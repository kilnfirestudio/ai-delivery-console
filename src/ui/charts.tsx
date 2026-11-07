import { useId, type CSSProperties, type ReactNode } from 'react';
import { AGENT_ROBOT, AGENT_STATUS_LABEL, AGENT_STATUS_TONE, toMinutes } from '../data/selectors';
import type { Agent, ClockTime, TimelineBlock } from '../data/types';
import { Robot } from './icons';
import { Chip, Legend } from './primitives';

const FONT = "Inter, 'Noto Sans SC', system-ui, sans-serif";
const DRAW = { calcMode: 'spline', keyTimes: '0;1', keySplines: '.2 .8 .2 1', fill: 'freeze' } as const;
const f1 = (n: number) => n.toFixed(1);

/** Tiny trend line; the last point breathes. `base` draws a dashed baseline. */
export function Spark({ values, base, width = 160, height = 40, color = '#9D8FFF' }: { values: number[]; base?: number; width?: number; height?: number; color?: string }) {
  const all = base === undefined ? values : [...values, base];
  const lo = Math.min(...all);
  const rng = Math.max(...all) - lo || 1;
  const y = (v: number) => height - 4 - ((v - lo) / rng) * (height - 8);
  const pts = values.map((v, i) => [2 + (i * (width - 4)) / (values.length - 1), y(v)]);
  const [lx, ly] = pts[pts.length - 1];
  return (
    <svg aria-hidden="true" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {base !== undefined && <line x1="0" y1={f1(y(base))} x2={width} y2={f1(y(base))} stroke="#5C616B" strokeWidth="1" strokeDasharray="3 3" />}
      <polyline points={pts.map(([px, py]) => `${f1(px)},${f1(py)}`).join(' ')} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength={100} strokeDasharray="100" strokeDashoffset="100">
        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.2s" begin="0.2s" {...DRAW} />
      </polyline>
      <circle cx={f1(lx)} cy={f1(ly)} r="3" fill={color}>
        <animate attributeName="r" values="3;5.5;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;.55;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export interface LineChartProps {
  values: number[];
  labels: string[];
  lo?: number;
  hi?: number;
  unit?: string;
  base?: number;
  baseLabel?: string;
  /** Index of a vertical marker (e.g. when a change was switched on). */
  marker?: number;
  markerLabel?: string;
  width?: number;
  height?: number;
  desc: string;
}

/** Line chart with three gridlines, every other x label, area fill and per-point tooltips. */
export function LineChart({ values, labels, lo = 0, hi = 100, unit = '', base, baseLabel = '', marker, markerLabel = '', width: w = 520, height: h = 200, desc }: LineChartProps) {
  const gid = `ar${useId().replace(/:/g, '')}`;
  const [L, R, T, B] = [40, 16, 16, 28];
  const pw = w - L - R;
  const ph = h - T - B;
  const X = (i: number) => L + (i * pw) / (values.length - 1);
  const Y = (v: number) => T + ph - ((v - lo) / (hi - lo)) * ph;
  const pts = values.map((v, i) => `${f1(X(i))},${f1(Y(v))}`).join(' ');
  const area = `${f1(X(0))},${T + ph} ${pts} ${f1(X(values.length - 1))},${T + ph}`;
  const last = values[values.length - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label={desc} style={{ display: 'block', fontFamily: FONT }}>
      {[0, 1, 2].map((t) => {
        const v = lo + ((hi - lo) * t) / 2;
        return (
          <g key={t}>
            <line x1={L} y1={f1(Y(v))} x2={w - R} y2={f1(Y(v))} stroke="rgba(255,255,255,.05)" />
            <text x={L - 8} y={f1(Y(v) + 4)} fontSize="11" fill="#A1A6B0" textAnchor="end">
              {`${v}${unit}`}
            </text>
          </g>
        );
      })}
      <line x1={L} y1={T + ph} x2={w - R} y2={T + ph} stroke="rgba(255,255,255,.12)" />
      {labels.map((lab, i) =>
        i % 2 === 0 || i === labels.length - 1 ? (
          <text key={lab} x={f1(X(i))} y={h - 8} fontSize="11" fill="#A1A6B0" textAnchor="middle">
            {lab}
          </text>
        ) : null,
      )}
      {marker !== undefined && (
        <>
          <line x1={f1(X(marker))} y1={T} x2={f1(X(marker))} y2={T + ph} stroke="#5C616B" strokeDasharray="2 3" />
          <text x={f1(X(marker) + 4)} y={T + 10} fontSize="11" fill="#A1A6B0">
            {markerLabel}
          </text>
        </>
      )}
      {base !== undefined && (
        <>
          <line x1={L} y1={f1(Y(base))} x2={w - R} y2={f1(Y(base))} stroke="#5C616B" strokeDasharray="5 4" />
          <text x={w - R} y={f1(Y(base) - 6)} fontSize="11" fill="#A1A6B0" textAnchor="end">
            {baseLabel}
          </text>
        </>
      )}
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8E7CFF" stopOpacity=".28" />
          <stop offset="1" stopColor="#8E7CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${gid})`} opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.8s" begin="0.9s" fill="freeze" />
      </polygon>
      <polyline points={pts} fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength={100} strokeDasharray="100" strokeDashoffset="100">
        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.3s" begin="0.2s" {...DRAW} />
      </polyline>
      {values.map((v, i) => (
        <g key={i}>
          <title>{`${labels[i]} · ${v}${unit}`}</title>
          <circle cx={f1(X(i))} cy={f1(Y(v))} r="8" fill="transparent" />
          <circle cx={f1(X(i))} cy={f1(Y(v))} r="0" fill="#9D8FFF" stroke="#101113" strokeWidth="2">
            <animate attributeName="r" values="0;4.5;3" keyTimes="0;.6;1" dur="0.45s" begin={`${(0.25 + (i * 1.2) / Math.max(1, values.length - 1)).toFixed(2)}s`} fill="freeze" />
          </circle>
        </g>
      ))}
      <text x={f1(X(values.length - 1) - 6)} y={f1(Y(last) - 10)} fontSize="12" fontWeight="600" fill="#EDEEF0" textAnchor="end">
        {`${last}${unit}`}
      </text>
    </svg>
  );
}

export interface DonutPart {
  label: string;
  value: number;
  color: string;
}

/** Status ring that draws segment by segment; total and caption in the middle. */
export function Donut({ parts, caption, size = 124, thickness: th = 14 }: { parts: DonutPart[]; caption: string; size?: number; thickness?: number }) {
  const r = (size - th) / 2;
  const c = size / 2;
  const total = parts.reduce((s, p) => s + p.value, 0);
  const gap = 2.2;
  let a0 = -90;
  const arcs = parts.map((p, k) => {
    const sweep = (p.value / total) * 360;
    const a1 = ((a0 + gap / 2) * Math.PI) / 180;
    const a2 = ((a0 + sweep - gap / 2) * Math.PI) / 180;
    const large = sweep - gap > 180 ? 1 : 0;
    a0 += sweep;
    const d = `M${(c + r * Math.cos(a1)).toFixed(2)} ${(c + r * Math.sin(a1)).toFixed(2)} A${r} ${r} 0 ${large} 1 ${(c + r * Math.cos(a2)).toFixed(2)} ${(c + r * Math.sin(a2)).toFixed(2)}`;
    return (
      <path key={p.label} d={d} fill="none" stroke={p.color} strokeWidth={th} pathLength={100} strokeDasharray="100 100" strokeDashoffset="100">
        <title>{`${p.label} ${p.value}`}</title>
        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.7s" begin={`${(0.25 + k * 0.28).toFixed(2)}s`} {...DRAW} />
      </path>
    );
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${caption}状态：${parts.map((p) => `${p.label} ${p.value}`).join('，')}`} style={{ overflow: 'visible' }}>
      <circle cx={c} cy={c} r={r + th / 2 + 4} fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1" strokeDasharray="2 6">
        <animateTransform attributeName="transform" type="rotate" from={`0 ${c} ${c}`} to={`360 ${c} ${c}`} dur="24s" repeatCount="indefinite" />
      </circle>
      <circle cx={c} cy={c} r={r} fill="none" stroke="rgba(255,255,255,.06)" strokeWidth={th} />
      {arcs}
      <text x={c} y={c + 4} textAnchor="middle" fontSize="28" fontWeight="700" fill="#F8FBFF" fontFamily="DIN Alternate, Barlow, Inter, sans-serif">
        {total}
      </text>
      <text x={c} y={c + 22} textAnchor="middle" fontSize="11" fill="#8A8F98">
        {caption}
      </text>
    </svg>
  );
}

/** Half-circle gauge with a travelling head and a baseline tick. Values are percentages. */
export function Gauge({ value, base, label, size = 168 }: { value: number; base: number; label: string; size?: number }) {
  const uid = useId().replace(/:/g, '');
  const c = size / 2;
  const r = size / 2 - 14;
  const at = (p: number, rr = r) => {
    const a = ((180 + (p / 100) * 180) * Math.PI) / 180;
    return [c + rr * Math.cos(a), c + 10 + rr * Math.sin(a)];
  };
  const [x0, y0] = at(0);
  const [x1, y1] = at(100);
  const [xv, yv] = at(value);
  const [bx1, by1] = at(base, r - 9);
  const [bx2, by2] = at(base, r + 9);
  const arc = `M${f1(x0)} ${f1(y0)} A${r} ${r} 0 0 1 ${f1(xv)} ${f1(yv)}`;
  return (
    <svg width={size} height={size / 2 + 22} viewBox={`0 0 ${size} ${size / 2 + 22}`} role="img" aria-label={`${label} ${value}%，基线 ${base}%`} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`gg${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7C6CFF" />
          <stop offset="1" stopColor="#4F8CFF" />
        </linearGradient>
        <filter id={`gl${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d={`M${f1(x0)} ${f1(y0)} A${r} ${r} 0 0 1 ${f1(x1)} ${f1(y1)}`} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="12" strokeLinecap="round" />
      <path d={arc} fill="none" stroke={`url(#gg${uid})`} strokeWidth="12" strokeLinecap="round" pathLength={100} strokeDasharray="100 101" strokeDashoffset="100">
        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1.4s" begin="0.3s" {...DRAW} />
      </path>
      <circle r="4" fill="#FEFEFE" filter={`url(#gl${uid})`} opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.2s" begin="0.3s" fill="freeze" />
        <animateMotion dur="1.4s" begin="0.3s" fill="freeze" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines=".2 .8 .2 1" path={arc} />
        <animate attributeName="r" values="4;6;4" dur="1.8s" begin="1.7s" repeatCount="indefinite" />
      </circle>
      <line x1={f1(bx1)} y1={f1(by1)} x2={f1(bx2)} y2={f1(by2)} stroke="#E3A008" strokeWidth="2">
        <title>{`基线 ${base}%`}</title>
      </line>
      <text x={c} y={c + 2} textAnchor="middle" fontSize="30" fontWeight="700" fill="#F8FBFF" fontFamily="DIN Alternate, Barlow, Inter, sans-serif">
        {`${value}%`}
      </text>
      <text x={c} y={c + 22} textAnchor="middle" fontSize="11" fill="#8A8F98">
        {`基线 ${base}%（黄线）`}
      </text>
    </svg>
  );
}

const BLOCK_STYLE: Record<TimelineBlock['kind'], CSSProperties> = {
  past: { backgroundColor: 'rgba(124,108,255,.14)', boxShadow: 'inset 0 0 0 1px rgba(124,108,255,.28)', color: '#C9CDD4' },
  work: { backgroundColor: '#6E5CF6', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.18)', color: '#FFFFFF' },
  wait: { backgroundColor: '#E3A008', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.18)', color: '#1A1200' },
};

export const TIMELINE_LEGEND = (
  <Legend
    items={[
      [{ background: 'rgba(124,108,255,.14)', boxShadow: 'inset 0 0 0 1px rgba(124,108,255,.28)' }, '今天已做完的'],
      [{ background: 'linear-gradient(90deg, #7C6CFF, #4F8CFF)' }, '正在做'],
      [{ background: '#E3A008' }, '等你'],
      [{ background: '#0C0D0F', border: '1px solid rgba(255,255,255,.1)' }, '空闲'],
      [{ background: '#F85149', width: 2, borderRadius: 0 }, '现在'],
    ]}
  />
);

export interface TimelineLane {
  agent: Agent;
  /** Right-hand "what now" text. */
  now: ReactNode;
}

/** Agent day timeline: one lane per agent, blocks positioned by clock time, red line at "now". */
export function AgentTimeline({ lanes, now, start = '09:00', end = '18:00', labelWidth = 220 }: { lanes: TimelineLane[]; now: ClockTime; start?: ClockTime; end?: ClockTime; labelWidth?: number }) {
  const s0 = toMinutes(start);
  const span = toMinutes(end) - s0;
  const pct = (t: ClockTime) => ((toMinutes(t) - s0) / span) * 100;
  const n0 = toMinutes(now);
  const nowX = `${pct(now).toFixed(2)}%`;
  const hours = Array.from({ length: Number(end.slice(0, 2)) - Number(start.slice(0, 2)) + 1 }, (_, i) => Number(start.slice(0, 2)) + i);
  const cols = `${labelWidth}px minmax(0, 1fr) 260px`;
  const rh = 36;
  return (
    <div role="table" aria-label="Agent 今日时间轴" style={{ display: 'flex', flexDirection: 'column', gap: 6, overflowX: 'auto' }}>
      <div style={{ minWidth: 900, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div aria-hidden="true" style={{ display: 'grid', gridTemplateColumns: cols, gap: 12 }}>
          <span />
          <div style={{ position: 'relative', height: 16 }}>
            {hours
              .filter((h) => Math.abs(h * 60 - n0) > 28)
              .map((h) => (
                <span key={h} style={{ position: 'absolute', left: `${(((h * 60 - s0) / span) * 100).toFixed(2)}%`, transform: 'translateX(-50%)', fontSize: 11, color: '#A1A6B0' }}>
                  {`${String(h).padStart(2, '0')}:00`}
                </span>
              ))}
            <span style={{ position: 'absolute', left: nowX, transform: 'translateX(-50%)', top: -3, fontSize: 11, fontWeight: 600, color: '#FFFFFF', background: '#F85149', borderRadius: 999, padding: '0 7px' }}>{now}</span>
          </div>
          <span />
        </div>
        {lanes.map(({ agent: a, now: cur }) => (
          <div key={a.id} role="row" style={{ display: 'grid', gridTemplateColumns: cols, gap: 12, alignItems: 'center' }}>
            <div role="rowheader" style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
              <Robot state={AGENT_ROBOT[a.status]} size={30} />
              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{a.name}</span>
                <span className="muted" style={{ fontSize: 11 }}>{`${a.tool} · ${a.host}`}</span>
              </div>
            </div>
            <div role="cell" style={{ position: 'relative', height: rh, background: '#0C0D0F', border: '1px solid rgba(255,255,255,.05)', borderRadius: 8, boxSizing: 'border-box' }}>
              {hours.map((h) => (
                <span key={h} aria-hidden="true" style={{ position: 'absolute', top: 0, bottom: 0, left: `${(((h * 60 - s0) / span) * 100).toFixed(2)}%`, width: 1, background: 'rgba(255,255,255,.04)' }} />
              ))}
              {a.today.map((b) => {
                const left = pct(b.from);
                const width = pct(b.to) - left;
                return (
                  <span
                    key={b.from}
                    className={b.kind === 'work' ? 'shim' : undefined}
                    title={`${a.name} · ${b.from}–${b.to} · ${b.label}`}
                    style={{ position: 'absolute', top: 5, bottom: 5, left: `${left.toFixed(2)}%`, width: `calc(${width.toFixed(2)}% - 3px)`, ...BLOCK_STYLE[b.kind], borderRadius: 6, fontSize: 11, fontWeight: 600, lineHeight: `${rh - 10}px`, padding: '0 8px', boxSizing: 'border-box', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
                  >
                    {width > 9 ? b.label : ''}
                  </span>
                );
              })}
              <span className="nowline" aria-hidden="true" style={{ position: 'absolute', top: -5, bottom: -5, left: nowX, width: 2, marginLeft: -1, background: '#F85149' }} />
            </div>
            <div role="cell" style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
              <Chip tone={AGENT_STATUS_TONE[a.status]} live={a.status === 'you'}>
                {AGENT_STATUS_LABEL[a.status]}
              </Chip>
              <span style={{ fontSize: 12, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{cur}</span>
              {a.status === 'doing' && (
                <span className="typing" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Horizontal bars with a label column and a value column. */
export function BarList({ items, max, color = '#7C6CFF', labelWidth = 120 }: { items: [label: ReactNode, value: number, title?: string][]; max: number; color?: string; labelWidth?: number }) {
  return (
    <>
      {items.map(([label, v, title], i) => (
        <div key={i} title={title ?? `${label} · ${v}`} style={{ display: 'grid', gridTemplateColumns: `${labelWidth}px 1fr 36px`, gap: 8, alignItems: 'center', fontSize: 12 }}>
          <span>{label}</span>
          <div style={{ height: 10, background: 'rgba(255,255,255,.05)', borderRadius: 3 }}>
            <div className="fill" style={{ width: `${Math.round((v / max) * 100)}%`, height: 10, background: color, borderRadius: 3 }} />
          </div>
          <span style={{ textAlign: 'right' }}>{v}</span>
        </div>
      ))}
    </>
  );
}

/** Two bars per category (e.g. input vs. output hours) with rounded tops. */
export function GroupedBars({ labels, series, max, unit = 'h', width: w = 560, height: h = 200, desc }: { labels: string[]; series: { name: string; color: string; values: number[] }[]; max: number; unit?: string; width?: number; height?: number; desc: string }) {
  const [L, R, T, B] = [36, 12, 12, 28];
  const pw = w - L - R;
  const ph = h - T - B;
  const gw = pw / labels.length;
  const bw = Math.min(14, (gw - 10) / 2);
  const base = T + ph;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label={desc} style={{ display: 'block', fontFamily: FONT }}>
      {[0, max / 2, max].map((t) => {
        const y = T + ph - (t / max) * ph;
        return (
          <g key={t}>
            <line x1={L} y1={f1(y)} x2={w - R} y2={f1(y)} stroke="rgba(255,255,255,.05)" />
            <text x={L - 8} y={f1(y + 4)} fontSize="11" fill="#A1A6B0" textAnchor="end">
              {`${t}${unit}`}
            </text>
          </g>
        );
      })}
      <line x1={L} y1={base} x2={w - R} y2={base} stroke="rgba(255,255,255,.12)" />
      {labels.map((lab, i) => {
        const cx = L + gw * i + gw / 2;
        return (
          <g key={lab}>
            {series.map((s, j) => {
              const x = cx - bw - 1 + j * (bw + 2);
              const top = base - (s.values[i] / max) * ph;
              return (
                <g key={s.name}>
                  <title>{`${lab} · ${s.name} ${s.values[i]} 小时`}</title>
                  <path d={`M${f1(x)} ${base} V${f1(top + 3)} Q${f1(x)} ${f1(top)} ${f1(x + 3)} ${f1(top)} H${f1(x + bw - 3)} Q${f1(x + bw)} ${f1(top)} ${f1(x + bw)} ${f1(top + 3)} V${base}z`} fill={s.color} />
                </g>
              );
            })}
            <text x={f1(cx)} y={h - 8} fontSize="11" fill="#A1A6B0" textAnchor="middle">
              {lab}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
