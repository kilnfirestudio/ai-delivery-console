import { useEffect, useMemo, useRef, useState } from 'react';
import { forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY, type Simulation } from 'd3-force';
import type { ConsoleData, Layer } from '../../data';
import { BANDS, buildGraph, CLIENT_BOX, EDGE_STYLE, H, PROJECT_LABEL, PROJECT_X, W, type GEdge, type GNode } from './model';

/*
 * Knowledge graph as a particle simulation. Every item is a particle; relations are springs; particles repel
 * and settle. Layer (Y) and project / client zone (X) stay hard constraints so the picture keeps its meaning.
 * Motion budget: the simulation moves on load, drag and hover only. The one loop is light flowing out of a
 * stale evidence, because it needs you. With reduced motion the graph renders already settled.
 */

/** Hard constraints: a particle never leaves its layer band or its project / client zone. */
function clamp(n: GNode) {
  const [y0, y1] = BANDS[n.layer];
  n.y = Math.min(y1 - n.r - 18, Math.max(y0 + n.r + 30, n.y!));
  n.x = Math.min(n.zone[1] - n.r, Math.max(n.zone[0] + n.r, n.x!));
}

const nodeOf = (e: GEdge, end: 'source' | 'target') => e[end] as GNode;

function drawArrow(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, color: string) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-7, -3.5);
  ctx.lineTo(-7, 3.5);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/** Control point for a gently bent edge, so parallel springs don't overlap labels. */
function bend(a: GNode, b: GNode) {
  const mx = (a.x! + b.x!) / 2;
  const my = (a.y! + b.y!) / 2;
  const dx = b.x! - a.x!;
  const dy = b.y! - a.y!;
  return { cx: mx - dy * 0.12, cy: my + dx * 0.12 };
}
function onQuad(a: GNode, c: { cx: number; cy: number }, b: GNode, t: number) {
  const u = 1 - t;
  return { x: u * u * a.x! + 2 * u * t * c.cx + t * t * b.x!, y: u * u * a.y! + 2 * u * t * c.cy + t * t * b.y! };
}

const CRED = {
  已验证: { core: ['#F3F0FF', '#B4A9FF', '#6B57F2'], halo: 'rgba(180,169,255,', haloA: 0.32 },
  初步验证: { core: ['#C9C1FF', '#7C6CFF', '#3B2FA8'], halo: 'rgba(124,108,255,', haloA: 0.18 },
  假设: { core: ['#8A8F98', '#5C616B', '#2A2C31'], halo: 'rgba(138,143,152,', haloA: 0 },
} as const;

function drawNode(ctx: CanvasRenderingContext2D, n: GNode, opts: { selected: boolean; hovered: boolean; t: number }) {
  const { x, y } = n as { x: number; y: number };
  const r = n.r * (opts.hovered ? 1.15 : 1);

  if (n.kind === 'evidence') {
    const s = 14;
    ctx.save();
    // Stale evidence breathes: the only looping node.
    const ph = (opts.t % 1800) / 1800;
    ctx.strokeStyle = `rgba(242,193,78,${0.8 * (1 - ph)})`;
    ctx.lineWidth = 1;
    const g = s + ph * 18;
    ctx.strokeRect(x - g / 2, y - g / 2, g, g);
    ctx.fillStyle = 'rgba(227,160,8,.12)';
    ctx.strokeStyle = '#E3A008';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(x - s / 2, y - s / 2, s, s, 3);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#F2C14E';
    ctx.font = "11px Inter, 'Noto Sans SC', system-ui, sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText(n.label, x, y + s / 2 + 15);
    ctx.restore();
    return;
  }
  if (n.kind === 'requirement') {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = 'rgba(248,81,73,.1)';
    ctx.strokeStyle = '#F85149';
    ctx.lineWidth = 1.5;
    ctx.fillRect(-6, -6, 12, 12);
    ctx.strokeRect(-6, -6, 12, 12);
    ctx.restore();
    ctx.fillStyle = '#FF7B72';
    ctx.font = "11px Inter, 'Noto Sans SC', system-ui, sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText(n.label, x, y + 22);
    return;
  }

  const k = n.k!;
  const cred = CRED[k.credibility];
  const candidate = k.lifecycle === '候选';
  const stale = k.lifecycle === '可能过时';
  const superseded = k.lifecycle === '已取代';
  const hollow = candidate || stale || k.credibility === '假设';

  // Halo: verified glows, partly verified glows less, hypotheses and hollow states don't glow.
  if (!hollow && !superseded && cred.haloA > 0) {
    const hr = r * 2.6;
    const g = ctx.createRadialGradient(x, y, r * 0.6, x, y, hr);
    g.addColorStop(0, `${cred.halo}${cred.haloA})`);
    g.addColorStop(1, `${cred.halo}0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, hr, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  if (superseded) {
    ctx.fillStyle = '#2A2C31';
    ctx.fill();
    ctx.strokeStyle = '#5C616B';
    ctx.lineWidth = 1.2;
    ctx.stroke();
  } else if (hollow) {
    ctx.fillStyle = '#16171A';
    ctx.fill();
    ctx.setLineDash(candidate ? [3, 3] : [3, 2]);
    if (stale) ctx.lineDashOffset = -((opts.t / 160) % 10);
    ctx.strokeStyle = candidate ? '#A1A6B0' : stale ? '#B4A9FF' : '#8A8F98';
    ctx.lineWidth = stale ? 2 : 1.5;
    ctx.stroke();
  } else if (k.credibility === '已验证') {
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.1, x, y, r);
    g.addColorStop(0, cred.core[0]);
    g.addColorStop(0.5, cred.core[1]);
    g.addColorStop(1, cred.core[2]);
    ctx.fillStyle = g;
    ctx.fill();
  } else {
    // Partly verified: translucent body, crisp ring, small solid core.
    ctx.fillStyle = 'rgba(124,108,255,.28)';
    ctx.fill();
    ctx.strokeStyle = '#9D8FFF';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, Math.max(2, r * 0.38), 0, Math.PI * 2);
    ctx.fillStyle = '#C9C1FF';
    ctx.fill();
  }
  ctx.restore();

  if (k.level === '红线') {
    ctx.beginPath();
    ctx.arc(x, y, r + 3, 0, Math.PI * 2);
    ctx.strokeStyle = '#F85149';
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }
  if (opts.selected) {
    ctx.beginPath();
    ctx.arc(x, y, r + (k.level === '红线' ? 7 : 5), 0, Math.PI * 2);
    ctx.strokeStyle = '#EDEEF0';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  ctx.fillStyle = opts.selected || opts.hovered ? '#EDEEF0' : '#A1A6B0';
  ctx.font = `${opts.selected ? 600 : 400} 11px 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace`;
  ctx.textAlign = 'center';
  ctx.fillText(n.label, x, y + r + (k.level === '红线' ? 17 : 14));
}

function drawBackdrop(ctx: CanvasRenderingContext2D, d: ConsoleData) {
  const layerName = (layer: string) => d.knowledgeSummary.layers.find((l) => l.layer === layer)?.name ?? layer;
  (Object.entries(BANDS) as [Layer, [number, number]][]).forEach(([layer, [y0, y1]], i) => {
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255,255,255,.025)' : 'rgba(255,255,255,.012)';
    ctx.strokeStyle = 'rgba(255,255,255,.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(0.5, y0 + 0.5, W - 1, y1 - y0 - 1, 12);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#A1A6B0';
    ctx.font = "600 12px Inter, 'Noto Sans SC', system-ui, sans-serif";
    ctx.textAlign = 'left';
    ctx.fillText(layerName(layer), 14, y0 + 22);
  });
  ctx.font = "11px Inter, 'Noto Sans SC', system-ui, sans-serif";
  for (const p of d.projects) {
    const x = PROJECT_X[p.id];
    if (x === undefined) continue;
    if (p.id !== 'shopline') {
      ctx.save();
      ctx.setLineDash([3, 4]);
      ctx.strokeStyle = 'rgba(255,255,255,.12)';
      ctx.beginPath();
      ctx.moveTo(x, 276);
      ctx.lineTo(x, 392);
      ctx.stroke();
      ctx.restore();
    }
    ctx.fillStyle = '#A1A6B0';
    ctx.fillText(PROJECT_LABEL[p.id] ?? p.id, x + 10, 290);
  }
  const destroyed = d.clientProfiles.filter((c) => c.status === '已销毁').map((c) => c.clientId);
  for (const c of d.clients) {
    const box = CLIENT_BOX[c.id];
    if (!box) continue;
    const [x0, x1] = box;
    const dead = destroyed.includes(c.id);
    const note = dead ? d.clientProfiles.find((p) => p.clientId === c.id)?.summary.match(/(\d\d\/\d\d) 销毁/)?.[1] : undefined;
    ctx.save();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = '#5C616B';
    ctx.fillStyle = dead ? 'rgba(255,255,255,.03)' : 'transparent';
    ctx.beginPath();
    ctx.roundRect(x0, 424, x1 - x0, 122, 8);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.fillStyle = '#A1A6B0';
    ctx.textAlign = 'left';
    ctx.fillText(dead ? `${c.name} · 已销毁 ${note ?? ''}` : c.name, x0 + 10, 440);
    if (dead) {
      ctx.textAlign = 'center';
      ctx.fillText('只剩 ID 与哈希', (x0 + x1) / 2, 492);
    }
  }
}

const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export interface ForceGraphProps {
  d: ConsoleData;
  selected: string;
  onSelect: (id: string) => void;
  /** Layers to show; others fade out of the simulation's way. */
  layers: Layer[];
  /** Only items that need you, plus what they touch. */
  needsYouOnly: boolean;
  /** Draws the proposed promotion of the selected item. */
  promotionTo?: Layer;
}

export default function ForceGraph({ d, selected, onSelect, layers, needsYouOnly, promotionTo }: ForceGraphProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const graph = useMemo(() => buildGraph(d), [d]);
  const sim = useRef<Simulation<GNode, GEdge> | null>(null);
  const [hover, setHover] = useState<{ n: GNode; px: number; py: number } | null>(null);
  const state = useRef({ selected, hovered: null as string | null, layers, needsYouOnly, promotionTo });
  state.current = { ...state.current, selected, layers, needsYouOnly, promotionTo };

  // Simulation: built once per data set.
  useEffect(() => {
    const { nodes, edges } = graph;
    const still = reducedMotion();
    for (const n of nodes) {
      n.x = still ? n.ax : n.ax + (Math.random() - 0.5) * 220;
      n.y = still ? n.ay : n.ay + (Math.random() - 0.5) * 60;
    }
    const s = forceSimulation(nodes)
      .force('x', forceX<GNode>((n) => n.ax).strength(0.09))
      .force('y', forceY<GNode>((n) => n.ay).strength(0.3))
      .force('charge', forceManyBody<GNode>().strength(-45).distanceMax(120))
      .force('collide', forceCollide<GNode>((n) => n.r + 14).strength(0.8))
      .force('link', forceLink<GNode, GEdge>(edges).id((n) => n.id).distance(90).strength(0.02))
      .alphaDecay(0.035)
      .velocityDecay(0.35)
      .on('tick', () => nodes.forEach(clamp));
    if (still) {
      // Manual ticks don't fire 'tick', so constraints are applied by hand.
      s.stop();
      for (let i = 0; i < 300; i++) {
        s.tick();
        nodes.forEach(clamp);
      }
    }
    sim.current = s;
    return () => {
      s.stop();
    };
  }, [graph]);

  // Rendering loop.
  useEffect(() => {
    const el = canvas.current!;
    const ctx = el.getContext('2d')!;
    const still = reducedMotion();
    let raf = 0;
    const { nodes, edges } = graph;
    const neighbours = (id: string) => new Set([id, ...edges.flatMap((e) => (nodeOf(e, 'source').id === id ? [nodeOf(e, 'target').id] : nodeOf(e, 'target').id === id ? [nodeOf(e, 'source').id] : []))]);
    const needsYou = new Set(nodes.filter((n) => n.kind !== 'knowledge' || n.k!.lifecycle === '候选' || n.k!.lifecycle === '可能过时' || n.k!.note?.includes('冲突')).map((n) => n.id));
    edges.forEach((e) => {
      if (needsYou.has(nodeOf(e, 'source').id) || needsYou.has(nodeOf(e, 'target').id)) {
        needsYou.add(nodeOf(e, 'source').id);
        needsYou.add(nodeOf(e, 'target').id);
      }
    });

    const frame = (t: number) => {
      const st = state.current;
      const dpr = window.devicePixelRatio || 1;
      const cssW = el.clientWidth;
      const scale = cssW / W;
      if (el.width !== Math.round(cssW * dpr)) {
        el.width = Math.round(cssW * dpr);
        el.height = Math.round(H * scale * dpr);
      }
      ctx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0);
      ctx.clearRect(0, 0, W, H);
      drawBackdrop(ctx, d);

      const focus = st.hovered ? neighbours(st.hovered) : null;
      const visible = (n: GNode) => st.layers.includes(n.layer) && (!st.needsYouOnly || needsYou.has(n.id));
      const alphaOf = (n: GNode) => (!visible(n) ? 0.08 : focus && !focus.has(n.id) ? 0.22 : 1);

      // Promotion proposal: a ghost slot in the target layer, straight above the selected item.
      const sel = nodes.find((n) => n.id === st.selected);
      if (sel && st.promotionTo && visible(sel)) {
        const [y0, y1] = BANDS[st.promotionTo];
        const gy = (y0 + y1) / 2 + 10;
        ctx.save();
        ctx.globalAlpha = focus && !focus.has(sel.id) ? 0.22 : 1;
        ctx.setLineDash([5, 4]);
        ctx.strokeStyle = '#9D8FFF';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(sel.x!, sel.y! - sel.r - 4);
        ctx.lineTo(sel.x!, gy + sel.r + 6);
        ctx.stroke();
        drawArrow(ctx, sel.x!, gy + sel.r + 4, -Math.PI / 2, '#9D8FFF');
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(sel.x!, gy, sel.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      for (const e of edges) {
        const a = nodeOf(e, 'source');
        const b = nodeOf(e, 'target');
        const style = EDGE_STYLE[e.kind];
        const lit = !focus || (focus.has(a.id) && focus.has(b.id));
        const alpha = Math.min(alphaOf(a), alphaOf(b), lit ? 1 : 0.15);
        const c = bend(a, b);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = style.color;
        ctx.lineWidth = style.width;
        if (style.dash) ctx.setLineDash(style.dash);
        ctx.beginPath();
        ctx.moveTo(a.x!, a.y!);
        ctx.quadraticCurveTo(c.cx, c.cy, b.x!, b.y!);
        ctx.stroke();
        if (style.arrow) {
          // Arrow sits on the target's rim.
          const back = onQuad(a, c, b, 0.97);
          const ang = Math.atan2(b.y! - back.y, b.x! - back.x);
          drawArrow(ctx, b.x! - Math.cos(ang) * (b.r + 3), b.y! - Math.sin(ang) * (b.r + 3), ang, style.color);
        }
        if (e.flow && alpha > 0.5) {
          // Light flowing out of the stale evidence to every item resting on it.
          ctx.setLineDash([]);
          const period = 2600;
          for (let i = 0; i < 3; i++) {
            const p = still ? 0.5 : ((t / period + i / 3) % 1);
            const pt = onQuad(a, c, b, p);
            const fade = still ? 1 : Math.sin(p * Math.PI);
            const g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 7);
            g.addColorStop(0, `rgba(242,193,78,${0.9 * fade})`);
            g.addColorStop(1, 'rgba(242,193,78,0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 7, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = `rgba(255,244,214,${fade})`;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 1.8, 0, Math.PI * 2);
            ctx.fill();
            if (still) break;
          }
        }
        ctx.restore();
      }

      for (const n of nodes) {
        ctx.save();
        ctx.globalAlpha = alphaOf(n);
        drawNode(ctx, n, { selected: n.id === st.selected, hovered: n.id === st.hovered, t: still ? 0 : t });
        ctx.restore();
      }
      if (!still) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    const redraw = () => {
      if (still) raf = requestAnimationFrame(frame);
    };
    window.addEventListener('resize', redraw);
    const s = sim.current;
    s?.on('tick.draw', redraw);
    // Repaint on prop changes when not looping.
    redraw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', redraw);
      s?.on('tick.draw', null);
    };
  }, [graph, d, selected, layers, needsYouOnly, promotionTo]);

  // Pointer: hover, drag (springs back), click to select.
  useEffect(() => {
    const el = canvas.current!;
    const toLocal = (ev: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const s = W / rect.width;
      return { x: (ev.clientX - rect.left) * s, y: (ev.clientY - rect.top) * s, px: ev.clientX - rect.left, py: ev.clientY - rect.top };
    };
    const hit = (x: number, y: number) => {
      let best: GNode | null = null;
      let bd = Infinity;
      for (const n of graph.nodes) {
        if (!state.current.layers.includes(n.layer)) continue;
        const dd = Math.hypot(n.x! - x, n.y! - y);
        if (dd < n.r + 8 && dd < bd) {
          best = n;
          bd = dd;
        }
      }
      return best;
    };
    let drag: { n: GNode; moved: boolean; x0: number; y0: number } | null = null;
    const down = (ev: PointerEvent) => {
      const p = toLocal(ev);
      const n = hit(p.x, p.y);
      if (!n) return;
      el.setPointerCapture(ev.pointerId);
      drag = { n, moved: false, x0: p.x, y0: p.y };
      n.fx = n.x;
      n.fy = n.y;
      if (!reducedMotion()) sim.current?.alphaTarget(0.25).restart();
    };
    const move = (ev: PointerEvent) => {
      const p = toLocal(ev);
      if (drag) {
        if (Math.hypot(p.x - drag.x0, p.y - drag.y0) > 3) drag.moved = true;
        drag.n.fx = p.x;
        drag.n.fy = p.y;
        if (reducedMotion()) {
          drag.n.x = p.x;
          drag.n.y = p.y;
          clamp(drag.n);
          window.dispatchEvent(new Event('resize'));
        }
        setHover({ n: drag.n, px: p.px, py: p.py });
        return;
      }
      const n = hit(p.x, p.y);
      state.current.hovered = n?.id ?? null;
      el.style.cursor = n ? 'grab' : 'default';
      setHover(n ? { n, px: p.px, py: p.py } : null);
      if (reducedMotion()) window.dispatchEvent(new Event('resize'));
    };
    const up = (ev: PointerEvent) => {
      if (!drag) return;
      const { n, moved } = drag;
      drag = null;
      el.releasePointerCapture(ev.pointerId);
      n.fx = null;
      n.fy = null;
      if (reducedMotion()) {
        n.x = n.ax;
        n.y = n.ay;
        clamp(n);
        window.dispatchEvent(new Event('resize'));
      } else sim.current?.alphaTarget(0).alpha(0.5).restart();
      if (!moved && n.kind === 'knowledge') onSelect(n.id);
    };
    const leave = () => {
      if (drag) return;
      state.current.hovered = null;
      setHover(null);
    };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointerleave', leave);
    };
  }, [graph, onSelect]);

  const knowledgeNodes = graph.nodes.filter((n) => n.kind === 'knowledge' && layers.includes(n.layer));
  return (
    <div ref={wrap} style={{ position: 'relative' }}>
      <canvas
        ref={canvas}
        role="img"
        aria-label="知识图谱：按 L0 到 L3 分层排列，每条知识是一个粒子，关系是弹簧。可拖动节点，松手后弹回；悬停高亮相连的条目；点击选中。"
        style={{ display: 'block', width: '100%', aspectRatio: `${W} / ${H}`, touchAction: 'none' }}
      />
      {hover && (
        <div
          role="tooltip"
          style={{
            position: 'absolute',
            left: Math.min(hover.px + 14, (wrap.current?.clientWidth ?? W) - 260),
            top: hover.py + 14,
            maxWidth: 260,
            padding: '8px 10px',
            borderRadius: 8,
            background: '#1C1D21',
            border: '1px solid rgba(255,255,255,.1)',
            boxShadow: '0 8px 24px rgba(0,0,0,.5)',
            fontSize: 12,
            lineHeight: 1.5,
            color: '#EDEEF0',
            pointerEvents: 'none',
          }}
        >
          {hover.n.tip}
        </div>
      )}
      {/* Keyboard and screen-reader path to the same selection. */}
      <ul style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', margin: 0, padding: 0 }}>
        {knowledgeNodes.map((n) => (
          <li key={n.id}>
            <button type="button" aria-pressed={n.id === selected} onClick={() => onSelect(n.id)}>
              {n.tip}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
