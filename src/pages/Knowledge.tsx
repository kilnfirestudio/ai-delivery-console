import { Link } from 'react-router-dom';
import { R } from '../app/routes';
import { useData, type Credibility, type KnowledgeItem } from '../data';
import { PageHeader, PageMain, Chip } from '../ui/primitives';

const CRED_COLOR: Record<Credibility, string> = { 已验证: '#B4A9FF', 初步验证: '#7C6CFF', 假设: '#4A4560' };
const LAYER_COLS = 'minmax(0, 1.6fr) 70px 60px 80px 70px 70px 300px 110px';
/** Heat bins for weekly citation counts. */
const BINS: { max: number; bg: string; fg: string; label: string }[] = [
  { max: 2, bg: 'rgba(124,108,255,.14)', fg: '#EDEEF0', label: '1–2 次' },
  { max: 4, bg: 'rgba(124,108,255,.28)', fg: '#EDEEF0', label: '3–4 次' },
  { max: 6, bg: 'rgba(124,108,255,.45)', fg: '#EDEEF0', label: '5–6 次' },
  { max: 8, bg: 'rgba(124,108,255,.68)', fg: '#04121F', label: '7–8 次' },
  { max: Infinity, bg: '#A99CFF', fg: '#04121F', label: '9 次以上' },
];
const ZERO_BG = 'rgba(255,255,255,.05)';

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);

export default function Knowledge() {
  const d = useData();
  const ks = d.knowledgeSummary;
  const total = (k: keyof (typeof ks.layers)[number]['counts']) => sum(ks.layers.map((l) => l.counts[k]));
  const clientVault = ks.layers.find((l) => l.layer === 'L3')?.counts.已确认 ?? 0;
  const waitingYou = d.attention.filter((a) => a.kind === '候选').length;
  const weeks = d.observation.weeks.slice(-8);
  const heat = d.knowledge
    .filter((k): k is KnowledgeItem & { weeklyCitations: number[] } => !!k.weeklyCitations)
    .map((k) => ({ ...k, total: sum(k.weeklyCitations) }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 8);
  const stats = [
    { label: '已确认', value: total('已确认'), note: `git ${total('已确认') - clientVault} · 客户库 ${clientVault} · 本周新增 ${ks.newThisWeek}` },
    { label: '候选', value: total('候选'), note: `等你 ${waitingYou} · 等委托规则 ${total('候选') - waitingYou}` },
    { label: '可能过时', value: total('可能过时'), note: '超过有效期或条件变了' },
    { label: '已废弃', value: total('已废弃'), note: '保留历史，不再返回' },
    { label: '已取代', value: total('已取代'), note: '都能追到取代它的条目' },
    { label: '证据覆盖', value: '100%', note: '每条已确认知识都有证据' },
  ];
  const text = (id: string) => d.knowledge.find((k) => k.id === id)?.text;

  return (
    <PageMain>
      <PageHeader
        icon="Knowledge"
        title="知识库"
        sub="知识本身的状态：有多少、分在哪层、有多可信、哪些在被用、哪些该处理"
        right={
          <p className="muted" style={{ margin: 0, fontSize: 13 }}>
            {`最后写入 ${ks.lastWrite} · git 与事件日志今日对账${ks.reconciled ? '一致' : '不一致'}`}
          </p>
        }
      />
      <section aria-label="知识数量" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 16 }}>
        {stats.map((st) => (
          <div key={st.label} className="card" style={{ padding: '16px 18px' }}>
            <p className="muted" style={{ margin: 0, fontSize: 13 }}>
              {st.label}
            </p>
            <p style={{ margin: '6px 0 2px', fontSize: 26, fontWeight: 600 }}>{st.value}</p>
            <p className="muted" style={{ margin: 0, fontSize: 12 }}>
              {st.note}
            </p>
          </div>
        ))}
      </section>

      <section className="card" aria-labelledby="ly-h">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h2 id="ly-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
            分层与状态
          </h2>
          <div className="muted" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, fontSize: 12 }} aria-label="可信度图例">
            {(Object.keys(CRED_COLOR) as Credibility[]).map((c) => (
              <span key={c} style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
                <span aria-hidden="true" style={{ width: 12, height: 12, borderRadius: 3, background: CRED_COLOR[c] }} />
                {c}
              </span>
            ))}
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <div role="table" style={{ width: '100%', minWidth: 1000, display: 'flex', flexDirection: 'column' }}>
            <div role="row" className="tr" style={{ display: 'grid', gridTemplateColumns: LAYER_COLS }}>
              {['层级', '已确认', '候选', '可能过时', '已废弃', '已取代', '已确认条目的可信度', '近 30 天被引用'].map((h) => (
                <div key={h} role="columnheader" className="th">
                  {h}
                </div>
              ))}
            </div>
            {ks.layers.map((l) => {
              const c = l.credibility;
              return (
                <div key={l.layer} role="row" className="tr" style={{ display: 'grid', gridTemplateColumns: LAYER_COLS }}>
                  <div role="cell" className="td">
                    <span style={{ fontWeight: 600 }}>{l.name}</span>
                    <br />
                    <span className="muted" style={{ fontSize: 12 }}>
                      {l.desc}
                    </span>
                  </div>
                  <div role="cell" className="td" style={{ fontWeight: 600 }}>
                    {l.counts.已确认}
                  </div>
                  <div role="cell" className="td">
                    {l.counts.候选}
                  </div>
                  <div role="cell" className="td">
                    {l.counts.可能过时}
                  </div>
                  <div role="cell" className="td">
                    {l.counts.已废弃}
                  </div>
                  <div role="cell" className="td">
                    {l.counts.已取代}
                  </div>
                  <div role="cell" className="td">
                    <div role="img" aria-label={`${l.name}：已验证 ${c.已验证}，初步验证 ${c.初步验证}，假设 ${c.假设}`} title={`已验证 ${c.已验证} · 初步验证 ${c.初步验证} · 假设 ${c.假设}`} style={{ display: 'flex', gap: 2, height: 12 }}>
                      <span style={{ flex: `${c.已验证} 1 0`, background: CRED_COLOR.已验证, borderRadius: '3px 0 0 3px' }} />
                      <span style={{ flex: `${c.初步验证} 1 0`, background: CRED_COLOR.初步验证 }} />
                      <span style={{ flex: `${c.假设} 1 0`, background: CRED_COLOR.假设, borderRadius: '0 3px 3px 0' }} />
                    </div>
                    <span className="muted" style={{ fontSize: 12 }}>
                      {`${c.已验证} / ${c.初步验证} / ${c.假设}`}
                    </span>
                  </div>
                  <div role="cell" className="td">
                    {l.cited30d}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="card" aria-labelledby="hm-h">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <h2 id="hm-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
              {`近 8 周引用次数 · 前 ${heat.length} 条`}
            </h2>
            <Link to={R.graph} style={{ fontSize: 13 }}>
              在图谱中查看
            </Link>
          </div>
          <div className="muted" aria-label="颜色图例：引用次数" style={{ display: 'flex', gap: 2, alignItems: 'center', fontSize: 12 }}>
            <span style={{ marginRight: 6 }}>0</span>
            {[{ bg: ZERO_BG, label: '0 次' }, ...BINS].map((b) => (
              <span key={b.label} title={b.label} style={{ width: 22, height: 12, borderRadius: 2, background: b.bg }} />
            ))}
            <span style={{ marginLeft: 6 }}>9 次以上</span>
          </div>
        </div>
        <p className="muted" style={{ margin: '0 0 16px', fontSize: 13 }}>
          只统计网关里的检索和引用；热区规则是静态注入的，不产生调用记录，所以不在这里
        </p>
        <div style={{ overflowX: 'auto' }}>
          <div role="table" aria-label="近 8 周引用次数" style={{ minWidth: 1000, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div role="row" style={{ display: 'grid', gridTemplateColumns: '340px repeat(8, 1fr) 72px', gap: 2, fontSize: 12, color: '#A1A6B0', fontWeight: 600 }}>
              <span role="columnheader" style={{ padding: '4px 0' }}>
                知识
              </span>
              {weeks.map((w) => (
                <span key={w} role="columnheader" style={{ textAlign: 'center', padding: '4px 0' }}>
                  {w}
                </span>
              ))}
              <span role="columnheader" style={{ textAlign: 'right', padding: '4px 0' }}>
                合计
              </span>
            </div>
            {heat.map((k) => (
              <div key={k.id} role="row" style={{ display: 'grid', gridTemplateColumns: '340px repeat(8, 1fr) 72px', gap: 2, alignItems: 'center' }}>
                <Link role="rowheader" to={R.knowledgeItem} style={{ fontSize: 13, color: '#EDEEF0', textDecoration: 'none', padding: '6px 8px 6px 0', lineHeight: 1.4 }}>
                  <span className="mono" style={{ color: '#A1A6B0' }}>
                    {k.id}
                  </span>{' '}
                  {k.short}
                </Link>
                {k.weeklyCitations.map((v, i) => {
                  const bin = BINS.find((b) => v <= b.max)!;
                  return (
                    <span key={weeks[i]} role="cell" className="heat" title={`${k.id} · ${weeks[i]} · 引用 ${v} 次`} style={{ height: 36, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 500, ...(v ? { background: bin.bg, color: bin.fg } : { background: ZERO_BG }) }}>
                      {v || ''}
                    </span>
                  );
                })}
                <span role="cell" style={{ textAlign: 'right', fontSize: 13, fontWeight: 600 }}>
                  {k.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="at-h" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h2 id="at-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
          需要处理
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {ks.signals.map((s) => (
            <div key={s.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{s.title}</span>
                <Chip tone={s.tone}>{`${s.count} 条`}</Chip>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
                {s.items.map((it) => (
                  <li key={it.id} style={{ padding: '8px 0', borderTop: '1px solid rgba(255,255,255,.05)', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 13 }}>
                      <span className="mono">{it.id}</span>
                      {` · ${it.text ?? text(it.id)}`}
                    </span>
                    <span className="muted" style={{ fontSize: 12 }}>
                      {it.meta}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="muted" style={{ margin: 0, fontSize: 12, lineHeight: 1.5 }}>
                {s.hint}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageMain>
  );
}
