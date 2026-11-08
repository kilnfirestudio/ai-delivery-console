import { Link } from 'react-router-dom';
import { useData, type ConsoleData, type Credibility, type KnowledgeItem } from '../data';
import { knowledgeHref } from '../data/selectors';
import { Chip, Col, Legend, List, PageHeader, PageMain, Row, Section, SegControl, Stage } from '../ui/primitives';

/*
 * Layout of the knowledge graph. Positions are presentation only; what each node is (layer, credibility,
 * lifecycle, constraint level) comes from the knowledge catalog.
 */
const W = 820;
const H = 560;
const BANDS: { layer: string; y0: number; y1: number }[] = [
  { layer: 'L0', y0: 0, y1: 120 },
  { layer: 'L1', y0: 130, y1: 250 },
  { layer: 'L2', y0: 266, y1: 400 },
  { layer: 'L3', y0: 410, y1: 556 },
];
const PROJECT_X: Record<string, number> = { shopline: 100, xuvia: 400, site: 560, voice: 700 };
const PROJECT_LABEL: Record<string, string> = { shopline: 'bundle 插件', xuvia: 'xuvia', site: '个人站', voice: '直播语音' };
const CLIENT_BOX: Record<string, [number, number]> = { A: [100, 470], B: [480, 640], C: [650, 806] };
/** [knowledge id, x, y, radius] */
const NODES: [string, number, number, number][] = [
  ['K-021', 170, 66, 16], ['K-034', 262, 66, 14], ['K-035', 350, 66, 12], ['K-040', 430, 66, 6], ['K-061', 520, 66, 8], ['K-002', 720, 66, 10],
  ['K-015', 150, 190, 13], ['K-008', 300, 190, 11], ['K-112', 400, 190, 9], ['K-019', 490, 190, 6], ['K-044', 590, 190, 8], ['K-118', 700, 190, 6],
  ['K-027', 225, 335, 12], ['K-011', 140, 335, 6], ['K-020', 300, 335, 9], ['K-052', 450, 335, 5], ['C-0220', 515, 335, 8], ['K-073', 610, 335, 5], ['K-080', 660, 335, 8], ['K-090', 752, 335, 7],
  ['C-A-003', 150, 488, 11], ['C-A-001', 222, 488, 9], ['C-A-007', 292, 488, 7], ['C-0219', 430, 488, 9], ['C-B-004', 545, 488, 8], ['C-B-002', 605, 488, 6],
];
/** Labels drawn above the node instead of below, to keep edges readable. */
const LABEL_ABOVE = new Set(['K-008', 'K-112', 'K-044']);
const BEAD: Record<Credibility, string> = { 已验证: 'v', 初步验证: 'p', 假设: 'h' };
const CRED_STROKE: Record<Credibility, string> = { 已验证: '#B4A9FF', 初步验证: '#7C6CFF', 假设: '#4A4560' };
const loop = { repeatCount: 'indefinite' } as const;

function nodeTip(k: KnowledgeItem) {
  if (k.lifecycle === '候选') return `候选 ${k.id} ${k.short} · ${k.note ?? '等你确认'}`;
  if (k.lifecycle === '已取代') return `${k.id} ${k.short} · 已被 ${k.supersededBy} 取代`;
  const parts = [`${k.id} ${k.short}`, k.level === '红线' ? '红线' : undefined, k.lifecycle === '可能过时' ? '可能过时' : k.credibility, k.note, k.cited30d ? `引用 ${k.cited30d}` : undefined];
  return parts.filter(Boolean).join(' · ');
}

function GraphNode({ k, x, y, r, selected }: { k: KnowledgeItem; x: number; y: number; r: number; selected: boolean }) {
  const candidate = k.lifecycle === '候选';
  const stale = k.lifecycle === '可能过时';
  const superseded = k.lifecycle === '已取代';
  const label = candidate && k.layer !== 'L3' ? '候选' : k.id;
  const ly = LABEL_ABOVE.has(k.id) ? y - r - 6 : y + r + 14;
  const floats = !candidate && !stale && !superseded && !selected && !LABEL_ABOVE.has(k.id) && k.id !== 'K-011' && y < 420;
  const dur = 3.2 + ((x * 7 + y) % 23) / 10;
  return (
    <g>
      <title>{nodeTip(k)}</title>
      {selected && (
        <>
          <circle cx={x} cy={y} r={r + 5} fill="none" stroke="#EDEEF0" strokeWidth="2" />
          <circle cx={x} cy={y} r={r + 5} fill="none" stroke="#B4A9FF" strokeWidth="1.5">
            <animate attributeName="r" from={r + 5} to={r + 22} dur="2s" {...loop} />
            <animate attributeName="opacity" from=".9" to="0" dur="2s" {...loop} />
          </circle>
        </>
      )}
      {stale ? (
        <circle cx={x} cy={y} r={r} fill="#16171A" stroke={CRED_STROKE[k.credibility]} strokeWidth="2" strokeDasharray="3 2">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.6s" {...loop} />
        </circle>
      ) : candidate ? (
        <circle cx={x} cy={y} r={r} fill="#16171A" stroke="#A1A6B0" strokeWidth="1.5" strokeDasharray="3 3">
          <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.2s" {...loop} />
        </circle>
      ) : superseded ? (
        <circle cx={x} cy={y} r={r} fill="url(#bead-o)" filter="url(#bs)" />
      ) : (
        <>
          <circle cx={x} cy={y} r={r} fill={`url(#bead-${BEAD[k.credibility]})`} filter="url(#bs)" {...(k.level === '红线' ? { stroke: '#D92D20', strokeWidth: 3 } : {})} />
          <ellipse cx={(x - r * 0.32).toFixed(1)} cy={(y - r * 0.42).toFixed(1)} rx={(r * 0.38).toFixed(1)} ry={(r * 0.22).toFixed(1)} fill="#F8FBFF" opacity=".35" />
        </>
      )}
      <text x={x} y={ly} fontSize="11" fontWeight={selected ? 600 : 400} fill="#EDEEF0" textAnchor="middle">
        {label}
      </text>
      {floats && <animateTransform attributeName="transform" type="translate" values="0 0;0 -2.5;0 0" dur={`${dur.toFixed(1)}s`} begin={`-${((x % 17) / 10).toFixed(1)}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" />}
    </g>
  );
}

function Pulse({ path, r, fill, dur, begin, fade = '0;.15;.85;1' }: { path: string; r: number; fill: string; dur: string; begin?: string; fade?: string }) {
  return (
    <circle r={r} fill={fill}>
      <animateMotion dur={dur} begin={begin} path={path} {...loop} />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes={fade} dur={dur} begin={begin} {...loop} />
    </circle>
  );
}

function KnowledgeGraph({ d, selected }: { d: ConsoleData; selected: string }) {
  const kn = (id: string) => d.knowledge.find((k) => k.id === id)!;
  const layerName = (layer: string) => d.knowledgeSummary.layers.find((l) => l.layer === layer)?.name ?? layer;
  const destroyed = d.clientProfiles.filter((c) => c.status === '已销毁').map((c) => c.clientId);
  const promo = d.knowledgeRecords.find((r) => r.id === selected)?.promotion;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="知识图谱：按 L0 到 L3 分层排列。选中 K-027：它取代了 K-011，与可能过时的 K-044 依据同一份证据 E-208，并被提议上提到 L1。客户 A 的候选 C-0219 覆盖 L1 的 K-112；K-008 与客户 A 的需求单冲突。" style={{ display: 'block', fontFamily: "Inter, 'Noto Sans SC', system-ui, sans-serif" }}>
      <defs>
        {[
          ['ar-g', '#5C616B'],
          ['ar-b', '#9D8FFF'],
          ['ar-a', '#DC6803'],
        ].map(([id, c]) => (
          <marker key={id} id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill={c} />
          </marker>
        ))}
        {[
          ['bead-v', ['#F3F0FF', '#B4A9FF', '#5B4BD6'], '.45'],
          ['bead-p', ['#D6D0FF', '#7C6CFF', '#3B2FA8'], '.45'],
          ['bead-h', ['#9CA0AA', '#4A4560', '#26242F'], '.5'],
        ].map(([id, [a, b, c], mid]) => (
          <radialGradient key={id as string} id={id as string} cx="40%" cy="35%" r="70%">
            <stop offset="0" stopColor={a} />
            <stop offset={mid as string} stopColor={b} />
            <stop offset="1" stopColor={c} />
          </radialGradient>
        ))}
        <radialGradient id="bead-o" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#6B7079" />
          <stop offset="1" stopColor="#2A2C31" />
        </radialGradient>
        <filter id="bs" x="-80%" y="-80%" width="260%" height="260%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity=".6" />
        </filter>
      </defs>
      {BANDS.map((b, i) => (
        <g key={b.layer}>
          <rect x="0" y={b.y0} width={W} height={b.y1 - b.y0} rx="12" fill={i % 2 === 0 ? 'rgba(255,255,255,.025)' : 'rgba(255,255,255,.012)'} stroke="rgba(255,255,255,.06)" />
          <line x1="12" y1={b.y1 - 0.5} x2={W - 12} y2={b.y1 - 0.5} stroke="#101113" />
          <text x="14" y={b.y0 + 22} fontSize="12" fontWeight="600" fill="#A1A6B0">
            {layerName(b.layer)}
          </text>
        </g>
      ))}
      {d.projects.map((p) => (
        <g key={p.id}>
          {p.id !== 'shopline' && <line x1={PROJECT_X[p.id]} y1="276" x2={PROJECT_X[p.id]} y2="392" stroke="rgba(255,255,255,.12)" strokeDasharray="3 4" />}
          <text x={PROJECT_X[p.id] + 10} y="290" fontSize="11" fill="#A1A6B0">
            {PROJECT_LABEL[p.id]}
          </text>
        </g>
      ))}
      {d.clients.map((c) => {
        const [x0, x1] = CLIENT_BOX[c.id];
        const dead = destroyed.includes(c.id);
        const note = dead ? d.clientProfiles.find((p) => p.clientId === c.id)?.summary.match(/(\d\d\/\d\d) 销毁/)?.[1] : undefined;
        return (
          <g key={c.id}>
            <rect x={x0} y="424" width={x1 - x0} height="122" rx="8" fill={dead ? 'rgba(255,255,255,.03)' : 'none'} stroke="#5C616B" strokeDasharray="4 4" />
            <text x={x0 + 10} y="440" fontSize="11" fill="#A1A6B0">
              {dead ? `${c.name} · 已销毁 ${note}` : c.name}
            </text>
            {dead && (
              <text x={(x0 + x1) / 2} y="492" fontSize="11" fill="#A1A6B0" textAnchor="middle">
                只剩 ID 与哈希
              </text>
            )}
          </g>
        );
      })}
      <path d="M213 335 L148 335" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 3" fill="none" markerEnd="url(#ar-g)">
        <title>K-027 取代 K-011</title>
      </path>
      {promo && (
        <path d="M225 321 L225 222" stroke="#9D8FFF" strokeWidth="1.5" strokeDasharray="5 4" fill="none" markerEnd="url(#ar-b)">
          <title>{`提议上提到 ${promo.to.slice(0, 2)}`}</title>
          <animate attributeName="stroke-dashoffset" from="18" to="0" dur="0.9s" {...loop} />
        </path>
      )}
      <path d="M236 328 Q 400 270 512 262" stroke="#A99CFF" strokeWidth="1.4" strokeDasharray="4 6" fill="none">
        <title>K-027 依据 E-208</title>
        <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.2s" {...loop} />
      </path>
      <Pulse path="M512 262 Q 400 270 236 328" r={3} fill="#E9E5FF" dur="2.6s" />
      <path d="M528 260 Q 570 240 585 200" stroke="#A99CFF" strokeWidth="1.4" strokeDasharray="4 6" fill="none">
        <title>K-044 依据 E-208</title>
        <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.2s" {...loop} />
      </path>
      <Pulse path="M528 260 Q 570 240 585 200" r={2.5} fill="#E9E5FF" dur="1.8s" begin="0.9s" />
      <path d="M430 470 Q 420 330 404 200" stroke="#DC6803" strokeWidth="1.5" fill="none" markerEnd="url(#ar-a)">
        <title>候选 C-0219 在客户 A 范围内覆盖 K-112</title>
      </path>
      <Pulse path="M430 470 Q 420 330 404 200" r={3} fill="#F2C14E" dur="3s" fade="0;.1;.85;1" />
      <path d="M300 202 Q 380 330 357 458" stroke="#D92D20" strokeWidth="1.5" strokeDasharray="6 4" fill="none">
        <title>K-008 与 TASK-0412 需求单冲突</title>
        <animate attributeName="opacity" values="1;.35;1" dur="1.6s" {...loop} />
      </path>
      {NODES.map(([id, x, y, r]) => (
        <GraphNode key={id} k={kn(id)} x={x} y={y} r={r} selected={id === selected} />
      ))}
      {promo && (
        <g>
          <title>{`${selected} 上提后的位置（提议）`}</title>
          <circle cx="225" cy="205" r="10" fill="none" stroke="#9D8FFF" strokeWidth="1.5" strokeDasharray="3 3">
            <animate attributeName="opacity" values=".35;1;.35" dur="2s" {...loop} />
          </circle>
        </g>
      )}
      <g>
        <title>E-208 Shopline 图片服务文档 2026-09 版 · 官方 10/20 已更新</title>
        <rect x="512" y="254" width="16" height="16" rx="3" fill="none" stroke="#F2C14E" strokeWidth="1">
          <animate attributeName="x" values="512;502" dur="1.8s" {...loop} />
          <animate attributeName="y" values="254;244" dur="1.8s" {...loop} />
          <animate attributeName="width" values="16;36" dur="1.8s" {...loop} />
          <animate attributeName="height" values="16;36" dur="1.8s" {...loop} />
          <animate attributeName="opacity" values=".9;0" dur="1.8s" {...loop} />
        </rect>
        <rect x="512" y="254" width="16" height="16" rx="3" fill="rgba(227,160,8,.08)" stroke="#DC6803" strokeWidth="1.5" />
        <text x="536" y="267" fontSize="11" fill="#F2C14E">
          E-208 已更新
        </text>
      </g>
      <g>
        <title>TASK-0412 需求单：标题 36px</title>
        <rect x="350" y="458" width="14" height="14" transform="rotate(45 357 465)" fill="rgba(248,81,73,.08)" stroke="#D92D20" strokeWidth="1.5" />
        <text x="357" y="492" fontSize="11" fill="#FF7B72" textAnchor="middle">
          需求单
        </text>
      </g>
    </svg>
  );
}

const bead = (a: string, b: string, c: string, mid = '45%') => ({ background: `radial-gradient(circle at 40% 35%, ${a}, ${b} ${mid}, ${c})`, borderRadius: 6 });

export default function Graph() {
  const d = useData();
  const selected = 'K-027';
  const k = d.knowledge.find((x) => x.id === selected)!;
  const rec = d.knowledgeRecords.find((r) => r.id === selected);
  const replaced = d.knowledge.find((x) => x.supersededBy === selected);
  const condition = rec?.evidence.find((e) => e.rel === '条件来源');
  const condEv = condition && d.evidence.find((e) => e.id === condition.id);
  const sharing = d.knowledge.filter((x) => x.id !== selected && x.lifecycle === '可能过时' && condition && x.evidenceIds?.includes(condition.id));

  return (
    <PageMain>
      <PageHeader icon="Graph" title="知识图谱" sub="知识之间的取代、覆盖、冲突和共用证据，一张图看清。证据过时会沿着“依据同一证据”的线波及到相关条目" right={<Stage>阶段 3</Stage>} />
      <Row>
        <Col flex="1 1 640px">
          <Section id="gm-h" title="知识关系" sub="按层级从上到下排列；L2 按项目分区，L3 按客户隔离。悬停节点看详情，点击选中">
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                <SegControl label="层级" options={['全部层级', 'L0', 'L1', 'L2', 'L3']} />
                <SegControl label="状态" options={['全部状态', '只看要处理的']} />
                <SegControl label="引用统计" options={['近 30 天', '近 90 天']} />
              </div>
            </div>
            <KnowledgeGraph d={d} selected={selected} />
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
                <Chip tone="doing">{k.credibility}</Chip>
                <Chip>{k.level}</Chip>
                {k.cited30d !== undefined && <Chip>{`引用 ${k.cited30d}`}</Chip>}
              </div>
              <List
                items={[
                  ...(replaced ? [{ key: 'rep', main: `取代 ${replaced.id}`, meta: replaced.text }] : []),
                  ...(condition ? [{ key: 'ev', main: `依据 ${condition.id}`, meta: `${condEv?.note}；同样依据它的 ${sharing.map((x) => x.id).join('、')} 已标为可能过时`, right: <Chip tone="you">需复查</Chip> }] : []),
                  ...(rec?.promotion ? [{ key: 'up', main: `提议上提到 ${rec.promotion.to.slice(0, 2)}`, meta: rec.promotion.summary, right: <Chip tone="you">等你</Chip> }] : []),
                  ...(rec?.tasks && rec.usage ? [{ key: 'tk', main: `被 ${rec.tasks.total} 个任务引用`, meta: `一次通过 ${rec.usage.firstPass[0]} / ${rec.usage.firstPass[1]}` }] : []),
                ]}
              />
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
                  [bead('#F3F0FF', '#B4A9FF', '#5B4BD6'), '已验证'],
                  [bead('#D6D0FF', '#7C6CFF', '#3B2FA8'), '初步验证'],
                  [bead('#9CA0AA', '#4A4560', '#26242F', '50%'), '假设'],
                ]}
              />
              <Legend
                items={[
                  [{ background: '#16171A', border: '1.5px dashed #A1A6B0', borderRadius: 6 }, '候选'],
                  [{ background: '#16171A', border: '2px dashed #7C6CFF', borderRadius: 6 }, '可能过时'],
                  [{ background: 'radial-gradient(circle at 40% 35%, #6B7079, #2A2C31)', borderRadius: 6 }, '已取代'],
                  [{ background: '#7C6CFF', border: '2px solid #D92D20', borderRadius: 6 }, '红线'],
                ]}
              />
              <span className="muted">大小 = 近 30 天被引用次数</span>
              <p className="lbl" style={{ marginTop: 4 }}>
                关系
              </p>
              <div className="muted" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {(
                  [
                    ['#5C616B', true, '取代'],
                    ['#6E5CF6', true, '上提提议'],
                    ['#DC6803', false, '覆盖上层'],
                    ['#D92D20', true, '冲突'],
                    ['#5C616B', false, '依据同一证据'],
                  ] as const
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
