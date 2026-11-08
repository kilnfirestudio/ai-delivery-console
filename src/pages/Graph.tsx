import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useData, type Layer } from '../data';
import { knowledgeHref } from '../data/selectors';
import { Chip, Col, Legend, List, PageHeader, PageMain, Row, Section, Stage } from '../ui/primitives';
import ForceGraph from './graph/ForceGraph';
import { buildGraph, EDGE_STYLE, type EdgeKind } from './graph/model';

const ALL_LAYERS: Layer[] = ['L0', 'L1', 'L2', 'L3'];

function Seg({ label, options, value, onChange }: { label: string; options: string[]; value: number; onChange: (i: number) => void }) {
  return (
    <div className="seg" role="group" aria-label={label}>
      {options.map((o, i) => (
        <button key={o} type="button" aria-pressed={i === value} onClick={() => onChange(i)}>
          {o}
        </button>
      ))}
    </div>
  );
}

export default function Graph() {
  const d = useData();
  const [selected, setSelected] = useState('K-027');
  const [layerIdx, setLayerIdx] = useState(0);
  const [stateIdx, setStateIdx] = useState(0);
  const layers = useMemo(() => (layerIdx === 0 ? ALL_LAYERS : [ALL_LAYERS[layerIdx - 1]]), [layerIdx]);
  const onSelect = useCallback((id: string) => setSelected(id), []);
  const { edges } = useMemo(() => buildGraph(d), [d]);
  const k = d.knowledge.find((x) => x.id === selected)!;
  const rec = d.knowledgeRecords.find((r) => r.id === selected);
  const promoTo = rec?.promotion?.to.slice(0, 2) as Layer | undefined;
  const end = (v: unknown) => (typeof v === 'string' ? v : (v as { id: string }).id);
  const relations = edges.filter((e) => end(e.source) === selected || end(e.target) === selected);
  const evOf = (id: string) => d.evidence.find((e) => e.id === id);

  const items = [
    ...relations.map((e) => {
      const other = end(e.source) === selected ? end(e.target) : end(e.source);
      if (e.kind === '依据同一证据') {
        const ev = evOf(other);
        const sharing = edges.filter((x) => end(x.source) === other && end(x.target) !== selected).map((x) => end(x.target));
        return { key: e.title, main: `依据 ${other}`, meta: `${ev?.note ?? ''}${sharing.length ? `；同样依据它的 ${sharing.join('、')} 已标为可能过时` : ''}`, right: <Chip tone="you">需复查</Chip> };
      }
      if (e.kind === '取代') {
        const o = d.knowledge.find((x) => x.id === other);
        return { key: e.title, main: end(e.source) === selected ? `取代 ${other}` : `已被 ${other} 取代`, meta: o?.text };
      }
      if (e.kind === '冲突') return { key: e.title, main: `与 ${other} 需求单冲突`, meta: d.attention.find((a) => a.refs?.requirement === other && a.kind === '冲突')?.body, right: <Chip tone="you">等你</Chip> };
      return { key: e.title, main: end(e.source) === selected ? `覆盖 ${other}` : `被 ${other} 覆盖`, meta: e.title };
    }),
    ...(rec?.promotion ? [{ key: 'up', main: `提议上提到 ${promoTo}`, meta: rec.promotion.summary, right: <Chip tone="you">等你</Chip> }] : []),
    ...(rec?.tasks && rec.usage ? [{ key: 'tk', main: `被 ${rec.tasks.total} 个任务引用`, meta: `一次通过 ${rec.usage.firstPass[0]} / ${rec.usage.firstPass[1]}` }] : []),
  ];

  return (
    <PageMain>
      <PageHeader icon="Graph" title="知识图谱" sub="知识之间的取代、覆盖、冲突和共用证据，一张图看清。证据过时会沿着“依据同一证据”的线波及到相关条目" right={<Stage>阶段 3</Stage>} />
      <Row>
        <Col flex="1 1 640px">
          <Section id="gm-h" title="知识关系" sub="按层级从上到下排列；L2 按项目分区，L3 按客户隔离。每条知识是一个粒子：悬停高亮相连的条目，拖动后松手会弹回，点击选中">
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                <Seg label="层级" options={['全部层级', 'L0', 'L1', 'L2', 'L3']} value={layerIdx} onChange={setLayerIdx} />
                <Seg label="状态" options={['全部状态', '只看要处理的']} value={stateIdx} onChange={setStateIdx} />
              </div>
            </div>
            <ForceGraph d={d} selected={selected} onSelect={onSelect} layers={layers} needsYouOnly={stateIdx === 1} promotionTo={promoTo} />
          </Section>
        </Col>
        <Col flex="0 1 300px">
          <Section id="gs-h" title="选中">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <span className="mono muted">{`${k.id} · ${k.scope}`}</span>
                <h3 style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 600, lineHeight: 1.5 }}>{k.short}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                <Chip tone={k.lifecycle === '可能过时' || k.lifecycle === '候选' ? 'you' : 'doing'}>{k.lifecycle === '已确认' ? k.credibility : k.lifecycle}</Chip>
                <Chip>{k.level}</Chip>
                {k.cited30d !== undefined && <Chip>{`引用 ${k.cited30d}`}</Chip>}
              </div>
              {items.length > 0 ? <List items={items} /> : <span className="muted">这条知识和图上的其他条目没有直接关系。</span>}
              <Link className="btn" to={knowledgeHref(selected)} style={{ alignSelf: 'flex-start' }}>
                打开条目
              </Link>
            </div>
          </Section>
          <Section id="gl-h" title="图例">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 12 }}>
              <p className="lbl">节点</p>
              <Legend
                items={[
                  [{ background: 'radial-gradient(circle at 40% 35%, #F3F0FF, #B4A9FF 50%, #6B57F2)', borderRadius: 6, boxShadow: '0 0 8px rgba(180,169,255,.5)' }, '已验证'],
                  [{ background: 'radial-gradient(circle, #C9C1FF 0 28%, rgba(124,108,255,.28) 30%)', border: '1.5px solid #9D8FFF', borderRadius: 6 }, '初步验证'],
                  [{ background: '#16171A', border: '1.5px dashed #8A8F98', borderRadius: 6 }, '假设'],
                ]}
              />
              <Legend
                items={[
                  [{ background: '#16171A', border: '1.5px dashed #A1A6B0', borderRadius: 6 }, '候选'],
                  [{ background: '#16171A', border: '2px dashed #B4A9FF', borderRadius: 6 }, '可能过时'],
                  [{ background: '#2A2C31', border: '1px solid #5C616B', borderRadius: 6 }, '已取代'],
                  [{ background: '#B4A9FF', boxShadow: '0 0 0 2px #16171A, 0 0 0 4px #F85149', borderRadius: 6 }, '红线'],
                ]}
              />
              <span className="muted">大小 = 近 30 天被引用次数；黄色流光 = 证据已更新，正在波及依据它的条目</span>
              <p className="lbl" style={{ marginTop: 4 }}>
                关系
              </p>
              <div className="muted" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {(
                  [
                    ...(Object.entries(EDGE_STYLE) as [EdgeKind, (typeof EDGE_STYLE)[EdgeKind]][]).map(([t, st]) => [st.color, !!st.dash, t] as const),
                    ['#9D8FFF', true, '上提提议'] as const,
                  ]
                ).map(([c, dashed, t]) => (
                  <span key={t} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <svg aria-hidden="true" width="28" height="8">
                      <line x1="0" y1="4" x2="28" y2="4" stroke={c} strokeWidth="1.5" strokeDasharray={dashed ? '4 3' : undefined} />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Section>
        </Col>
      </Row>
    </PageMain>
  );
}
