import type { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force';
import type { ConsoleData, KnowledgeItem, Layer } from '../../data';

export const W = 820;
export const H = 560;
export const BANDS: Record<Layer, [number, number]> = { L0: [0, 120], L1: [130, 250], L2: [266, 400], L3: [410, 556] };
export const PROJECT_X: Record<string, number> = { shopline: 100, xuvia: 400, site: 560, voice: 700 };
export const PROJECT_LABEL: Record<string, string> = { shopline: 'bundle 插件', xuvia: 'xuvia', site: '个人站', voice: '直播语音' };
export const CLIENT_BOX: Record<string, [number, number]> = { A: [100, 470], B: [480, 640], C: [650, 806] };
const L2_ZONES: [number, number][] = [
  [20, 400],
  [400, 560],
  [560, 700],
  [700, 812],
];

/** [id, anchor x, anchor y, size]. Anchors are where a particle rests; size follows citations. */
const LAYOUT: [string, number, number, number][] = [
  ['K-021', 170, 66, 16], ['K-034', 262, 66, 14], ['K-035', 350, 66, 12], ['K-040', 430, 66, 6], ['K-061', 520, 66, 8], ['K-002', 720, 66, 10],
  ['K-015', 150, 190, 13], ['K-008', 300, 190, 11], ['K-112', 400, 190, 9], ['K-019', 490, 190, 6], ['K-044', 590, 190, 8], ['K-118', 700, 190, 6],
  ['K-027', 225, 335, 12], ['K-011', 140, 335, 6], ['K-020', 300, 335, 9], ['K-052', 450, 335, 5], ['C-0220', 515, 335, 8], ['K-073', 610, 335, 5], ['K-080', 660, 335, 8], ['K-090', 752, 335, 7],
  ['C-A-003', 150, 488, 11], ['C-A-001', 222, 488, 9], ['C-A-007', 292, 488, 7], ['C-0219', 430, 488, 9], ['C-B-004', 545, 488, 8], ['C-B-002', 605, 488, 6],
];

export type EdgeKind = '取代' | '依据同一证据' | '覆盖上层' | '冲突';
export const EDGE_STYLE: Record<EdgeKind, { color: string; dash?: number[]; arrow: boolean; width: number }> = {
  取代: { color: '#5C616B', dash: [4, 3], arrow: true, width: 1.5 },
  依据同一证据: { color: '#A99CFF', dash: [4, 5], arrow: false, width: 1.4 },
  覆盖上层: { color: '#E3A008', arrow: true, width: 1.5 },
  冲突: { color: '#F85149', dash: [6, 4], arrow: false, width: 1.5 },
};

type NodeKind = 'knowledge' | 'evidence' | 'requirement';
export interface GNode extends SimulationNodeDatum {
  id: string;
  kind: NodeKind;
  ax: number;
  ay: number;
  r: number;
  layer: Layer;
  /** Hard X bounds of the zone the node lives in (project for L2, client for L3). */
  zone: [number, number];
  k?: KnowledgeItem;
  tip: string;
  label: string;
}
export interface GEdge extends SimulationLinkDatum<GNode> {
  kind: EdgeKind;
  title: string;
  source: GNode | string;
  target: GNode | string;
  /** Light flows along this edge (stale evidence). */
  flow?: boolean;
}

export function nodeTip(k: KnowledgeItem) {
  if (k.lifecycle === '候选') return `候选 ${k.id} ${k.short} · ${k.note ?? '等你确认'}`;
  if (k.lifecycle === '已取代') return `${k.id} ${k.short} · 已被 ${k.supersededBy} 取代`;
  const parts = [`${k.id} ${k.short}`, k.level === '红线' ? '红线' : undefined, k.lifecycle === '可能过时' ? '可能过时' : k.credibility, k.note, k.cited30d ? `引用 ${k.cited30d}` : undefined];
  return parts.filter(Boolean).join(' · ');
}

function layerOfY(y: number): Layer {
  return (Object.keys(BANDS) as Layer[]).find((l) => y >= BANDS[l][0] && y <= BANDS[l][1]) ?? 'L0';
}
function zoneOf(layer: Layer, x: number): [number, number] {
  if (layer === 'L2') return L2_ZONES.find(([a, b]) => x >= a && x < b) ?? [20, W - 8];
  if (layer === 'L3') {
    const box = Object.values(CLIENT_BOX).find(([a, b]) => x >= a && x <= b);
    if (box) return [box[0] + 14, box[1] - 14];
  }
  return [24, W - 16];
}

/** Builds particles and springs from the data. Only relations the data states become edges. */
export function buildGraph(d: ConsoleData) {
  const byId = new Map(d.knowledge.map((k) => [k.id, k]));
  const nodes: GNode[] = LAYOUT.filter(([id]) => byId.has(id)).map(([id, ax, ay, size]) => {
    const k = byId.get(id)!;
    const layer = layerOfY(ay);
    return { id, kind: 'knowledge', ax, ay, r: Math.max(4.5, 3 + (size - 5) * 1.35), layer, zone: zoneOf(layer, ax), k, tip: nodeTip(k), label: k.lifecycle === '候选' && k.layer !== 'L3' ? '候选' : k.id };
  });
  const inGraph = new Set(nodes.map((n) => n.id));
  const edges: GEdge[] = [];

  for (const n of nodes) {
    const by = n.k?.supersededBy;
    if (by && inGraph.has(by)) edges.push({ source: by, target: n.id, kind: '取代', title: `${by} 取代 ${n.id}` });
  }

  // Evidence that went stale, and every item resting on it.
  const staleEvidence = d.evidence.filter((e) => d.knowledge.some((k) => k.lifecycle === '可能过时' && k.evidenceIds?.includes(e.id)));
  for (const e of staleEvidence) {
    const users = nodes.filter((n) => n.k?.evidenceIds?.includes(e.id));
    if (users.length < 2) continue;
    nodes.push({ id: e.id, kind: 'evidence', ax: 520, ay: 258, r: 8, layer: 'L1', zone: [440, 620], tip: `${e.id} ${e.title} · ${e.note ?? ''}`, label: `${e.id} 已更新` });
    for (const u of users) edges.push({ source: e.id, target: u.id, kind: '依据同一证据', title: `${u.id} 依据 ${e.id}`, flow: true });
  }

  // Client candidates that would override an upper-layer item.
  for (const p of d.clientProfiles) {
    for (const item of p.knowledgeShown ?? []) {
      const m = item.relation?.match(/覆盖 L\d (K-\d+)/);
      if (m && inGraph.has(item.id) && inGraph.has(m[1])) edges.push({ source: item.id, target: m[1], kind: '覆盖上层', title: `候选 ${item.id} 在客户 ${p.clientId} 范围内覆盖 ${m[1]}` });
    }
  }

  // Requirements that conflict with a knowledge item.
  for (const a of d.attention.filter((x) => x.kind === '冲突' && x.refs?.knowledge && x.refs.requirement)) {
    const kid = a.refs!.knowledge!;
    const req = a.refs!.requirement!;
    if (!inGraph.has(kid)) continue;
    if (!nodes.some((n) => n.id === req)) nodes.push({ id: req, kind: 'requirement', ax: 357, ay: 470, r: 8, layer: 'L3', zone: [114, 456], tip: `${req} 需求单 · ${a.title}`, label: '需求单' });
    edges.push({ source: kid, target: req, kind: '冲突', title: `${kid} 与 ${req} 需求单冲突` });
  }

  return { nodes, edges };
}

