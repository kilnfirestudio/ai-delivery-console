import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Tone } from '../data/types';
import { GlassIcon, type IconName } from './icons';

/** Plain text where `backticked` parts render as inline code. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/).map((part, i) =>
        part.startsWith('`') ? (
          <span key={i} className="mono">
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Page content column; every page renders inside one. */
export function PageMain({ children }: { children: ReactNode }) {
  return <main style={{ boxSizing: 'border-box', width: '100%', maxWidth: 1280, padding: '24px 32px 48px', display: 'flex', flexDirection: 'column', gap: 24 }}>{children}</main>;
}

/** Status pill. `live` adds a pulsing dot. */
export function Chip({ tone = 'queue', live, children, title, style }: { tone?: Tone; live?: boolean; children: ReactNode; title?: string; style?: CSSProperties }) {
  return (
    <span className={`chip s-${tone}${live ? ' live' : ''}`} title={title} style={style}>
      {children}
    </span>
  );
}

export function Stage({ children }: { children: ReactNode }) {
  return <span className="stage">{children}</span>;
}

export function Led({ tone, size }: { tone: 'g' | 'a' | 'r' | 'o'; size?: number }) {
  return <span className={`led led-${tone}`} aria-hidden="true" style={size ? { width: size, height: size } : undefined} />;
}

/** Link styled as text; `to` is a route path. */
export function TextLink({ to, children, size = 14, weight = 500 }: { to: string; children: ReactNode; size?: number; weight?: number }) {
  return (
    <Link to={to} style={{ fontSize: size, fontWeight: weight }}>
      {children}
    </Link>
  );
}

export function ButtonLink({ to, children, primary, style }: { to: string; children: ReactNode; primary?: boolean; style?: CSSProperties }) {
  return (
    <Link className={primary ? 'btn btn-p' : 'btn'} to={to} style={style}>
      {children}
    </Link>
  );
}

/** Page title row with the page's glass icon, optional breadcrumbs and right-side controls. */
export function PageHeader({ icon, title, sub, right, crumbs, titleSize = 28 }: { icon?: IconName; title: string; sub: ReactNode; right?: ReactNode; crumbs?: [label: string, to?: string][]; titleSize?: number }) {
  return (
    <div>
      {crumbs && (
        <nav aria-label="位置" className="muted" style={{ fontSize: 13, display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
          {crumbs.map(([label, to], i) => (
            <span key={label} style={{ display: 'contents' }}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
            </span>
          ))}
        </nav>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {icon && <GlassIcon name={icon} size={44} motion="float" />}
            <h1 style={{ margin: 0, fontSize: titleSize, fontWeight: 600, ...(titleSize !== 28 ? { lineHeight: 1.4 } : {}) }}>{title}</h1>
          </div>
          {sub && (
            <p className="muted" style={{ margin: '6px 0 0', fontSize: 14, lineHeight: 1.6 }}>
              {sub}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>{right}</div>
      </div>
    </div>
  );
}

/** Titled block. `variant`: card (default), quiet (no box), raised, tier1 (highlighted). */
export function Section({ id, title, sub, right, variant = 'card', style, titleExtra, children }: {
  id: string; title: ReactNode; sub?: ReactNode; right?: ReactNode; variant?: 'card' | 'quiet' | 'raised' | 'tier1' | 'paper'; style?: CSSProperties; titleExtra?: ReactNode; children: ReactNode;
}) {
  const heading = (
    <h2 id={id} style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
      {title}
    </h2>
  );
  return (
    <section className={variant} aria-labelledby={id} style={{ minWidth: 0, ...style }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          {titleExtra ? (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {heading}
              {titleExtra}
            </div>
          ) : (
            heading
          )}
          {sub && (
            <p className="muted" style={{ margin: '4px 0 0', fontSize: 13, lineHeight: 1.6 }}>
              {sub}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>{right}</div>
      </div>
      {children}
    </section>
  );
}

export function Label({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p className="lbl" style={style}>
      {children}
    </p>
  );
}

export interface StatProps {
  label: ReactNode;
  value: ReactNode;
  note?: ReactNode;
  noteStyle?: CSSProperties;
  size?: number;
}

export function Stat({ label, value, note, noteStyle = { color: '#A1A6B0' }, size = 24 }: StatProps) {
  return (
    <div className="stat">
      <span className="muted" style={{ fontSize: 13 }}>
        {label}
      </span>
      <span style={{ fontSize: size, fontWeight: 600, lineHeight: 1.3 }}>{value}</span>
      {note && <span style={{ fontSize: 12, lineHeight: 1.5, ...noteStyle }}>{note}</span>}
    </div>
  );
}

export function Grid({ min = 300, gap = 16, align = 'stretch', children, style }: { min?: number; gap?: number; align?: CSSProperties['alignItems']; children: ReactNode; style?: CSSProperties }) {
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap, alignItems: align, ...style }}>{children}</div>;
}

export function StatsGrid({ items, min = 170, gap = 16 }: { items: StatProps[]; min?: number; gap?: number }) {
  return (
    <Grid min={min} gap={gap}>
      {items.map((s, i) => (
        <Stat key={i} {...s} />
      ))}
    </Grid>
  );
}

/** Wrapping row of columns; each child of Row should be a <Col>. */
export function Row({ gap = 24, children }: { gap?: number; children: ReactNode }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap, alignItems: 'flex-start' }}>{children}</div>;
}

export function Col({ flex, children }: { flex: string; children: ReactNode }) {
  return <div style={{ flex, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>{children}</div>;
}

export function DataTable({ cols, rows, minWidth = 800, widths, rowClass }: { cols: ReactNode[]; rows: ReactNode[][]; minWidth?: number; widths?: (string | undefined)[]; rowClass?: (i: number) => string | undefined }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth }}>
        <thead>
          <tr>
            {cols.map((c, i) => (
              <th key={i} scope="col" style={widths?.[i] ? { width: widths[i] } : undefined}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={rowClass?.(i)}>
              {r.map((c, j) => (
                <td key={j}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface ListEntry {
  key: string;
  main: ReactNode;
  meta?: ReactNode;
  right?: ReactNode;
}

/** Divided list: main line, optional muted meta line, optional right-hand action. */
export function List({ items }: { items: ListEntry[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {items.map((it) => (
        <li key={it.key} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>{it.main}</span>
            {it.meta && (
              <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                {it.meta}
              </span>
            )}
          </div>
          <div>{it.right}</div>
        </li>
      ))}
    </ul>
  );
}

/** Five-checkpoint progress. */
export function CheckpointBar({ passed, tone, label }: { passed: number; tone: 'doing' | 'you' | 'done'; label?: string }) {
  return (
    <div className="cp5" role="img" aria-label={label ?? `检查点 ${passed} / 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className={i < passed ? `cp-${tone}` : undefined} />
      ))}
    </div>
  );
}

export function SegControl({ options, pressed = 0, label }: { options: string[]; pressed?: number; label: string }) {
  return (
    <div className="seg" role="group" aria-label={label}>
      {options.map((o, i) => (
        <button key={o} type="button" aria-pressed={i === pressed}>
          {o}
        </button>
      ))}
    </div>
  );
}

const NOTE_BG = { warn: 'rgba(227,160,8,.08)', risk: 'rgba(248,81,73,.08)', blue: 'rgba(124,108,255,.10)' } as const;

export function Note({ kind = 'info', children, style }: { kind?: 'info' | keyof typeof NOTE_BG; children: ReactNode; style?: CSSProperties }) {
  return (
    <div className={kind === 'info' ? 'well' : undefined} style={{ padding: '12px 14px', borderRadius: 10, fontSize: 13, lineHeight: 1.6, ...(kind === 'info' ? {} : { background: NOTE_BG[kind] }), ...style }}>
      {children}
    </div>
  );
}

export function Legend({ items }: { items: [swatch: CSSProperties, label: ReactNode][] }) {
  return (
    <div className="muted" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, fontSize: 12 }}>
      {items.map(([sw, label], i) => (
        <span key={i} style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
          <span aria-hidden="true" style={{ width: 12, height: 12, borderRadius: 3, ...sw }} />
          {label}
        </span>
      ))}
    </div>
  );
}

/** Number that rolls up from 0 on first paint (CSS counter animation). */
export function CountUp({ to, style }: { to: number; style?: CSSProperties }) {
  return <span className="cu" aria-label={String(to)} style={{ ['--to' as string]: to, ...style }} />;
}

// ───────────────────────── loading / empty / error ─────────────────────────

/**
 * Block-shaped loading placeholder — never a full-page spinner. `lines` stacks bars to echo a text block;
 * `height` makes a single block (e.g. a chart or tile). The shimmer stops under reduced motion (see .skel).
 */
export function Skeleton({ lines = 1, height, width = '100%', style }: { lines?: number; height?: number; width?: number | string; style?: CSSProperties }) {
  if (height !== undefined) return <span className="skel" aria-hidden="true" style={{ display: 'block', height, width, ...style }} />;
  return (
    <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {Array.from({ length: lines }, (_, i) => (
        <span key={i} className="skel" style={{ display: 'block', height: 12, width: i === lines - 1 && lines > 1 ? '60%' : width }} />
      ))}
    </span>
  );
}

/** Empty state: says why it is empty and what to do next. `action` is an optional call-to-action. */
export function EmptyState({ title, hint, icon, action }: { title: string; hint?: string; icon?: IconName; action?: ReactNode }) {
  return (
    <div className="well" role="status" style={{ padding: '32px 24px', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center' }}>
      {icon && <GlassIcon name={icon} size={44} />}
      <span style={{ fontSize: 15, fontWeight: 600 }}>{title}</span>
      {hint && <span className="muted" style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 380 }}>{hint}</span>}
      {action}
    </div>
  );
}

/** Error state: says where it broke and offers a retry. `onRetry` renders the 重试 button. */
export function ErrorState({ title = '这块没能加载出来', detail, onRetry }: { title?: string; detail?: string; onRetry?: () => void }) {
  return (
    <div role="alert" style={{ padding: '24px', borderRadius: 12, background: NOTE_BG.risk, border: '1px solid rgba(248,81,73,.3)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
      <span style={{ fontSize: 15, fontWeight: 600 }}>{title}</span>
      {detail && <span className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>{detail}</span>}
      {onRetry && (
        <button type="button" className="btn" onClick={onRetry}>
          重试
        </button>
      )}
    </div>
  );
}
