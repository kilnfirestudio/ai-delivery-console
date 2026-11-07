import { Link, useSearchParams } from 'react-router-dom';
import { R } from '../app/routes';
import { useData, type Lifecycle, type Tone } from '../data';
import { Chip, PageHeader, PageMain } from '../ui/primitives';

const LIFECYCLE_TONE: Record<Lifecycle, Tone> = { 候选: 'doing', 已确认: 'done', 可能过时: 'you', 已废弃: 'queue', 已取代: 'queue' };
const EVIDENCE_TONE = { 支持: 'done', 条件来源: 'doing', 不构成反证: 'queue' } as const;
const RESULT_TONE = { 进行中: 'doing', 一次通过: 'done', '返工 1 次': 'you' } as const;
const HISTORY_DOT = { neutral: '#5C616B', you: '#6E5CF6', up: '#039855', flag: '#DC6803' } as const;

export default function KnowledgeItem() {
  const d = useData();
  const [params] = useSearchParams();
  const id = params.get('id') ?? 'K-027';
  const k = d.knowledge.find((x) => x.id === id) ?? d.knowledge[0];
  const rec = d.knowledgeRecords.find((r) => r.id === k.id);
  const weeks = d.observation.weeks.slice(-8);
  const cites = k.weeklyCitations ?? [];
  const peak = Math.max(1, ...cites);
  const fields: [string, string | undefined][] = rec
    ? [
        ['形态', rec.form],
        ['类别', rec.category],
        ['判断', rec.judgement],
        ['理由', rec.reason],
        ['当下条件', rec.conditions],
        ['适用场景', rec.scenario],
        ['作用域', rec.scopeNote ?? k.scope],
        ['约束等级', rec.levelNote ?? k.level],
        ['加载方式', rec.loading],
        ['重要性', rec.importance],
        ['可见范围', rec.visibility],
        ['版本', rec.version],
        ['处理溯源', rec.provenance],
      ]
    : [];
  const version = rec?.version?.split(' ')[0];

  return (
    <PageMain>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <PageHeader icon="Knowledge" crumbs={[['知识库', R.knowledge], [k.scope], [k.id]]} title={k.text} sub={null} titleSize={26} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Chip tone={LIFECYCLE_TONE[k.lifecycle]}>{k.lifecycle}</Chip>
          {rec && <Chip>{rec.form}</Chip>}
          <Chip>{`约束：${k.level}`}</Chip>
          <Chip tone="doing">{`可信度：${k.credibility}`}</Chip>
          <Chip>{k.scope}</Chip>
          {version && <Chip>{version}</Chip>}
        </div>
      </div>

      {rec?.promotion && (
        <section aria-labelledby="up-h" style={{ background: '#16171A', border: '1px solid rgba(124,108,255,.5)', borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 id="up-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
              {`提议：上提到 ${rec.promotion.to}`}
            </h2>
            <span className="muted" style={{ fontSize: 13 }}>
              {`${rec.promotion.proposed} · 跨项目上提必须由你确认`}
            </span>
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14, lineHeight: 1.6 }}>
            {rec.promotion.reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <div style={{ padding: '12px 14px', borderRadius: 10, background: 'rgba(227,160,8,.08)', fontSize: 13, lineHeight: 1.6 }}>
            <strong style={{ fontWeight: 600 }}>上提前先看：</strong>
            {rec.promotion.caution}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['先复查当下条件', '同意上提', '暂不上提'].map((b) => (
              <button key={b} className="btn" type="button">
                {b}
              </button>
            ))}
          </div>
        </section>
      )}

      {rec && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <section className="card" aria-labelledby="fd-h">
              <h2 id="fd-h" style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 600 }}>
                字段
              </h2>
              <dl style={{ margin: 0 }}>
                {fields
                  .filter(([, v]) => v)
                  .map(([key, v]) => (
                    <div key={key} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 16, padding: '10px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                      <dt className="muted" style={{ fontSize: 13 }}>
                        {key}
                      </dt>
                      <dd style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>{v}</dd>
                    </div>
                  ))}
              </dl>
            </section>
            <section className="card" aria-labelledby="ev-h">
              <h2 id="ev-h" style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 600 }}>
                {`证据 · ${rec.evidence.length}`}
              </h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {rec.evidence.map(({ id: eid, rel }) => {
                  const e = d.evidence.find((x) => x.id === eid);
                  return (
                    <li key={eid} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ fontSize: 14 }}>
                          <span className="mono">{eid}</span>
                          {` · ${e?.title}`}
                        </span>
                        <span className="muted" style={{ fontSize: 12 }}>
                          {[e?.kind, e?.date, e?.note].filter(Boolean).join(' · ')}
                        </span>
                      </div>
                      <Chip tone={EVIDENCE_TONE[rel]}>{rel}</Chip>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div style={{ flex: '1 1 520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {rec.usage && (
              <section className="card" aria-labelledby="ef-h" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h2 id="ef-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                  使用与效果
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                  {[
                    ['被检索', rec.usage.retrieved, '近 8 周'],
                    ['被引用', rec.usage.cited, `引用率 ${Math.round((rec.usage.cited / rec.usage.retrieved) * 100)}%`],
                    ['一次通过', `${rec.usage.firstPass[0]} / ${rec.usage.firstPass[1]}`, '已结束的任务'],
                    ['返工', rec.usage.reworks, rec.usage.reworkNote],
                  ].map(([label, value, note]) => (
                    <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span className="muted" style={{ fontSize: 12 }}>
                        {label}
                      </span>
                      <span style={{ fontSize: 20, fontWeight: 600 }}>{value}</span>
                      <span className="muted" style={{ fontSize: 12 }}>
                        {note}
                      </span>
                    </div>
                  ))}
                </div>
                {cites.length > 0 && (
                  <div>
                    <p style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600 }}>每周被引用次数</p>
                    <div role="img" aria-label={`近 8 周每周被引用次数：${cites.join('、')}`} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div className="vbars" style={{ height: 110, display: 'flex', alignItems: 'flex-end', gap: 8, borderBottom: '1px solid rgba(255,255,255,.12)' }}>
                        {cites.map((v, i) => (
                          <div key={weeks[i]} title={`${weeks[i]} · 引用 ${v} 次`} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 4 }}>
                            <span style={{ fontSize: 11, color: '#A1A6B0' }}>{i === cites.length - 1 ? v : ''}</span>
                            <span style={{ width: '100%', maxWidth: 28, height: v ? Math.round((v / peak) * 84) : 0, background: '#7C6CFF', borderRadius: '4px 4px 0 0' }} />
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {weeks.map((w) => (
                          <span key={w} className="muted" style={{ flex: 1, textAlign: 'center', fontSize: 11 }}>
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <p className="muted well" style={{ margin: 0, fontSize: 12, lineHeight: 1.6, padding: '10px 12px', borderRadius: 8 }}>
                  引用和任务结果之间只是相关。要知道这条到底有没有作用，需要做消融测试：同类任务里去掉这条，对比一次通过率。这条还没做过。
                </p>
              </section>
            )}
            {rec.history && (
              <section className="card" aria-labelledby="cr-h">
                <h2 id="cr-h" style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 600 }}>
                  变化记录
                </h2>
                <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {rec.history.map((h) => (
                    <li key={h.date + h.title} style={{ display: 'grid', gridTemplateColumns: '48px 16px 1fr', gap: 10, paddingBottom: 14 }}>
                      <span className="mono muted" style={{ paddingTop: 2 }}>
                        {h.date}
                      </span>
                      <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 5, marginTop: 5, background: HISTORY_DOT[h.tone] }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ fontSize: 14, fontWeight: 500 }}>{h.title}</span>
                        <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                          {h.detail}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}
            {rec.tasks && (
              <section className="card" aria-labelledby="tk-h">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <h2 id="tk-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                    引用它的任务
                  </h2>
                  <span className="muted" style={{ fontSize: 13 }}>
                    {`最近 ${rec.tasks.recent.length} 个，共 ${rec.tasks.total} 个`}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {rec.tasks.recent.map((t) => (
                    <li key={t.ref} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Link to={R.task} style={{ fontSize: 14, textDecoration: 'none' }}>
                          <span className="mono">{t.ref}</span>
                          {` · ${t.title}`}
                        </Link>
                        <span className="muted" style={{ fontSize: 12 }}>
                          {t.meta}
                        </span>
                      </div>
                      <Chip tone={RESULT_TONE[t.result]}>{t.result}</Chip>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      )}
    </PageMain>
  );
}
