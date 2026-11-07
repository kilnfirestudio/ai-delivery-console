import { createElement, type CSSProperties } from 'react';
import { ICON_PATHS, type IconName } from './iconPaths';
import { ICON_TINT, TINTS, type Tint } from './tints';

export type { IconName, Tint };
function Glyph({ name }: { name: IconName }) {
  return (
    <>
      {ICON_PATHS[name].map(([tag, attrs], i) => createElement(tag, { key: i, ...attrs }))}
    </>
  );
}

/** Plain Lucide line icon. */
export function LineIcon({ name, size = 16, strokeWidth = 1.75, color = 'currentColor' }: { name: IconName; size?: number; strokeWidth?: number; color?: string }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ flex: '0 0 auto' }}>
      <Glyph name={name} />
    </svg>
  );
}

/** Glass tile with a gradient-stroked glyph. `motion`: "float" bobs the tile, "swing" rocks the glyph. */
export function GlassIcon({ name, size = 40, motion, label }: { name: IconName; size?: number; motion?: 'float' | 'swing'; label?: string }) {
  const tint = ICON_TINT[name] ?? 'violet';
  const g = Math.round(size * 0.5);
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true as const };
  return (
    <span className={`gt gt-${tint}${motion === 'float' ? ' float' : ''}`} {...a11y} style={{ width: size, height: size, borderRadius: Math.round(size * 0.28) }}>
      <svg className={motion === 'swing' ? 'glyph-swing' : undefined} width={g} height={g} viewBox="0 0 24 24" fill="none" stroke={`url(#gs-${tint})`} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <Glyph name={name} />
      </svg>
    </span>
  );
}

/** Gradients referenced by glass tiles and robots; render once per page. */
export function IconDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        {(Object.keys(TINTS) as Tint[]).map((k) => (
          <linearGradient key={k} id={`gs-${k}`} gradientUnits="userSpaceOnUse" x1="2" y1="2" x2="22" y2="22">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor={TINTS[k].light} />
          </linearGradient>
        ))}
        <linearGradient id="rb-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B3E4A" />
          <stop offset="1" stopColor="#1B1C22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export type RobotState = 'work' | 'wait' | 'idle' | 'stand';

const loop = { repeatCount: 'indefinite' } as const;

function Eye({ x }: { x: number }) {
  return (
    <rect x={x} y="29" width="5" height="8" rx="2.5" fill="currentColor">
      <animate attributeName="height" values="8;8;1;8" dur="4.2s" keyTimes="0;.9;.94;1" {...loop} />
      <animate attributeName="y" values="29;29;32.5;29" dur="4.2s" keyTimes="0;.9;.94;1" {...loop} />
    </rect>
  );
}

/**
 * Agent avatar. work: spinner + blinking eyes; wait: bouncing "?"; idle: asleep with floating z; stand: awake, no overlay.
 * Animation is native SVG (SMIL); CSS (.bot-*) only chooses which parts are visible.
 */
export function Robot({ state, size = 40, label }: { state: RobotState; size?: number; label?: string }) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true as const };
  return (
    <svg className={`bot bot-${state}`} width={size} height={size} viewBox="0 0 64 64" {...a11y} style={{ flex: 'none', overflow: 'visible' }}>
      <line x1="32" y1="13" x2="32" y2="7" stroke="#5C616B" strokeWidth="2" strokeLinecap="round" />
      <g className="awake">
        <circle className="ant" cx="32" cy="6" r="3">
          <animate attributeName="opacity" values="1;.3;1" dur="1.6s" {...loop} />
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
        <Eye x={23} />
        <Eye x={36} />
      </g>
      <g className="asleep">
        <rect x="23" y="32" width="5" height="2" rx="1" fill="#5C616B" />
        <rect x="36" y="32" width="5" height="2" rx="1" fill="#5C616B" />
      </g>
      <g className="gear">
        <circle cx="52" cy="52" r="8" fill="#101113" stroke="rgba(255,255,255,.12)" />
        <path d="M52 46.5 A5.5 5.5 0 1 1 46.5 52" fill="none" stroke="#A99CFF" strokeWidth="2.4" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 52 52" to="360 52 52" dur="1.1s" {...loop} />
        </path>
      </g>
      <g className="q">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="1.1s" {...loop} />
        <circle cx="53" cy="11" r="8.5" fill="#E3A008" />
        <text x="53" y="15.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1A1200" fontFamily="Inter, sans-serif">?</text>
      </g>
      <g className="zz">
        <text x="49" y="13" fontSize="11" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
          z
          <animate attributeName="opacity" values="0;1;0" dur="2.6s" {...loop} />
          <animate attributeName="y" values="16;13;6" dur="2.6s" {...loop} />
        </text>
        <text x="55" y="7" fontSize="8" fontWeight="700" fill="#6B7079" fontFamily="Inter, sans-serif">
          z
          <animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="0.9s" {...loop} />
          <animate attributeName="y" values="10;7;0" dur="2.6s" begin="0.9s" {...loop} />
        </text>
      </g>
    </svg>
  );
}

const SPARKS: [d: string, fill: string, begin: string][] = [
  ['M10 2 L11.6 8.4 L18 10 L11.6 11.6 L10 18 L8.4 11.6 L2 10 L8.4 8.4 Z', '#F2C14E', '0s'],
  ['M30 14 L31 18 L35 19 L31 20 L30 24 L29 20 L25 19 L29 18 Z', '#D6D0FF', '0.6s'],
  ['M24 30 L25 33 L28 34 L25 35 L24 38 L23 35 L20 34 L23 33 Z', '#F2C14E', '1.2s'],
];

/** Twinkling stars pinned to the top-right corner of a relatively positioned parent. */
export function Sparkles() {
  return (
    <svg className="spark" aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" style={{ position: 'absolute', right: -14, top: -14, overflow: 'visible' }}>
      {SPARKS.map(([d, fill, begin]) => (
        <path key={d} d={d} fill={fill} opacity=".2">
          <animate attributeName="opacity" values=".15;1;.15" dur="1.8s" begin={begin} {...loop} />
        </path>
      ))}
    </svg>
  );
}

const BLIPS: [x: number, y: number, r: number, c: string, begin: string][] = [
  [70, 34, 3, '#3FB950', '0s'],
  [32, 64, 3, '#E3A008', '0.5s'],
  [62, 72, 2.5, '#A99CFF', '1s'],
];

/** Radar with a CSS sweep and SMIL blips; used for live activity. */
export function Radar({ size = 96, style }: { size?: number; style?: CSSProperties }) {
  return (
    <div className="radar" aria-hidden="true" style={{ width: size, height: size, ...style }}>
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0 }}>
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,.10)" />
        <circle cx="50" cy="50" r="31" fill="none" stroke="rgba(255,255,255,.07)" />
        <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(255,255,255,.06)" />
        <path d="M50 4 V96 M4 50 H96" stroke="rgba(255,255,255,.05)" />
        {BLIPS.map(([x, y, r, c, begin]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={r} fill={c}>
              <animate attributeName="opacity" values="1;.25;1" dur="1.6s" begin={begin} {...loop} />
            </circle>
            <circle cx={x} cy={y} r={r} fill="none" stroke={c}>
              <animate attributeName="r" values={`${r};${r + 7}`} dur="1.6s" begin={begin} {...loop} />
              <animate attributeName="opacity" values=".8;0" dur="1.6s" begin={begin} {...loop} />
            </circle>
          </g>
        ))}
      </svg>
      <div className="sweep" />
    </div>
  );
}

/** Right arrow with a travelling packet, used between pipeline stages. */
export function FlowArrow() {
  return (
    <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg className="nudge" width="24" height="24" viewBox="0 0 24 24" style={{ overflow: 'visible' }}>
        <path d="M4 12h14m-5-5 5 5-5 5" fill="none" stroke="#5C616B" strokeWidth="1.6" />
        <circle r="2.2" fill="#B4A9FF">
          <animateMotion dur="1.3s" repeatCount="indefinite" path="M-2 12 H18" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.8;1" dur="1.3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
