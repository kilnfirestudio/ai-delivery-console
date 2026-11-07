import { Link } from 'react-router-dom';
import { useData, type AttentionItem } from '../data';
import { ATTENTION_TONE, reviewQueue } from '../data/selectors';
import { Chip, PageHeader, PageMain, Rich } from '../ui/primitives';

const GROUP_TONE = { 阻塞任务: 'risk', 需要你确认: 'you', 抽检与复验: 'queue', 看截图: 'you' } as const;

const fmtSeconds = (s: number) => `${Math.floor(s / 60)} 分 ${String(s % 60).padStart(2, '0')} 秒`;

export default function Review() {
  const d = useData();
  const queue = reviewQueue(d);
  const groups = [...new Set(queue.map((a) => a.group))].map((g) => ({ name: g, items: queue.filter((a) => a.group === g) }));
  const selected = queue.find((a) => a.kind === '候选' && a.refs?.candidate) as AttentionItem;
  const cand = d.knowledge.find((k) => k.id === selected?.refs?.candidate);
  const rec = d.knowledgeRecords.find((r) => r.id === cand?.id);
  const h = d.reviewHealth;
  const deleg = d.observation.delegation;
  const overrides = rec?.relations?.find((r) => r.rel === '覆盖');
  const health: { label: string; value: string; note: string; tone?: 'warn' | 'good' }[] = [
    { label: '你审核', value: `${h.reviewed} 条`, note: `驳回 ${h.rejected} 条，占 ${Math.round((h.rejected / h.reviewed) * 100)}%` },
    { label: '每条平均用时', value: fmtSeconds(h.avgSeconds), note: `上周 ${fmtSeconds(h.lastWeekAvgSeconds)}` },
    { label: '30 秒内就通过', value: `${h.under30s} 条`, note: '可能看得太快，已标记复看', tone: h.under30s ? 'warn' : undefined },
    { label: '委托规则自动确认', value: `${deleg.confirmedThisWeek} 条`, note: `规则 ${deleg.version}，只覆盖低风险` },
    { label: '混入错误候选', value: `${h.seededWrong.caught} / ${h.seededWrong.total}`, note: '已知有错的测试候选被你驳回', tone: h.seededWrong.caught === h.seededWrong.total ? 'good' : 'warn' },
    { label: '抽检', value: `${h.spotChecks} 条`, note: `发现问题 ${h.spotIssues} 条`, tone: h.spotIssues ? 'warn' : 'good' },
    { label: '确认后被推翻', value: `${h.overturned30d} 条`, note: `近 30 天，${h.overturnedNote}` },
  ];
  const fields: [string, string][] = cand && rec
    ? [
        ['层级', cand.scope],
        ['类别', rec.category],
        ['约束等级', cand.level],
        ['适用场景', rec.scenario],
        ['加载方式', rec.loading],
        ['可信度', rec.credibilityNote ?? cand.credibility],
        ['可见范围', rec.visibility],
        ['当下条件', rec.conditions],
      ]
    : [];
  const ev = rec?.evidence.map((e) => d.evidence.find((x) => x.id === e.id)!) ?? [];

  return (
    <PageMain>
      <PageHeader
        icon="Review"
        title="待审"
        sub="需要你决定或确认的事。阻塞任务的排在最前面，其余按后果排序"
        right={groups.map((g) => (
          <Chip key={g.name} tone={GROUP_TONE[g.name]}>{`${g.name} ${g.items.length}`}</Chip>
        ))}
      />
      <section className="card" aria-labelledby="hl-h">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <h2 id="hl-h" style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
            审核健康 · 本周
          </h2>
          <span className="muted" style={{ fontSize: 13 }}>
            用来发现两种失效：你审得太快变成走过场，委托规则放进了错的东西
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 16 }}>
          {health.map((x) => (
            <div key={x.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span className="muted" style={{ fontSize: 13 }}>
                {x.label}
              </span>
              <span style={{ fontSize: 22, fontWeight: 600 }}>{x.value}</span>
              <span style={{ fontSize: 12, ...(x.tone === 'warn' ? { color: '#F2C14E', fontWeight: 500 } : x.tone === 'good' ? { color: '#56D364' } : { color: '#A1A6B0' }) }}>{x.note}</span>
            </div>
          ))}
        </div>
      </section>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
        <section aria-labelledby="q-h" style={{ flex: '1 1 360px', maxWidth: 440, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 id="q-h" style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>
            {`队列 · ${queue.length}`}
          </h2>
          {groups.map((g) => (
            <div key={g.name} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: '#A1A6B0' }}>{g.name}</p>
              {g.items.map((it) => {
                const sel = it.id === selected?.id;
                return (
                  <Link key={it.id} to={it.route} aria-current={sel ? 'true' : undefined} style={{ textDecoration: 'none', color: '#EDEEF0', background: '#16171A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 6, ...(sel ? { borderColor: '#6E5CF6', boxShadow: '0 0 0 1px #6E5CF6' } : {}) }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                      <Chip tone={ATTENTION_TONE[it.kind]}>{it.kind}</Chip>
                      <span className="muted" style={{ fontSize: 12 }}>
                        {it.waitedMin ? `${it.waitedMin} 分钟` : it.since}
                      </span>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>{it.title}</span>
                    <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                      {it.detail}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
        </section>
        {cand && rec && (
          <section className="card" aria-labelledby="dt-h" style={{ flex: '999 1 640px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <Chip tone="doing">候选</Chip>
                <Chip tone="you">{selected.summary}</Chip>
              </div>
              <h2 id="dt-h" style={{ margin: 0, fontSize: 22, fontWeight: 600, lineHeight: 1.4 }}>
                {cand.text}
              </h2>
              <p className="muted" style={{ margin: 0, fontSize: 13 }}>
                {`${cand.id} · ${rec.provenance}`}
              </p>
            </div>
            {cand.layer === 'L3' && (
              <div style={{ padding: '12px 14px', borderRadius: 10, background: 'rgba(227,160,8,.08)', fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ fontWeight: 600 }}>为什么到你这里：</strong>
                它属于客户层知识。客户层、红线、跨项目上提、取代已验证的知识，这四类永远由你确认，委托规则不覆盖。
              </div>
            )}
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 15, fontWeight: 600 }}>提议的字段</h3>
              <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0 24px' }}>
                {fields.map(([k, v]) => (
                  <div key={k} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 12, padding: '9px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                    <dt className="muted" style={{ fontSize: 13 }}>
                      {k}
                    </dt>
                    <dd style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 style={{ margin: '0 0 10px', fontSize: 15, fontWeight: 600 }}>{`证据 · ${ev.length}`}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {ev.map((e) =>
                  e.excerpt ? (
                    <div key={e.id} style={{ border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, overflow: 'hidden' }}>
                      <div className="well" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between', padding: '10px 14px', fontSize: 13 }}>
                        <span>
                          <span className="mono">{e.id}</span>
                          {' · '}
                          <Rich text={e.title} />
                        </span>
                        <span className="muted">{`哈希 ${e.excerpt.hash}`}</span>
                      </div>
                      <pre className="mono" style={{ margin: 0, padding: '12px 14px', fontSize: 12, lineHeight: 1.6, overflowX: 'auto', color: '#EDEEF0' }}>
                        {e.excerpt.lines.map(([n, code], i) => (
                          <span key={n}>
                            {i > 0 && '\n'}
                            <span style={{ color: '#A1A6B0' }}>{n}</span>
                            {`  ${code}`}
                          </span>
                        ))}
                      </pre>
                    </div>
                  ) : (
                    <div key={e.id} style={{ border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '10px 14px', display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div aria-hidden="true" style={{ width: 40, height: 64, borderRadius: 6, background: 'rgba(255,255,255,.08)', flex: 'none' }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ fontSize: 13 }}>
                          <span className="mono">{e.id}</span>
                          {` · ${e.title}`}
                        </span>
                        <span className="muted" style={{ fontSize: 12 }}>
                          {e.note}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
            {rec.relations && (
              <div>
                <h3 style={{ margin: '0 0 10px', fontSize: 15, fontWeight: 600 }}>与现有知识的关系</h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {rec.relations.map((r) => (
                    <li key={r.id} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <span style={{ fontSize: 14 }}>
                          <span className="mono">{r.id}</span>
                          {` · ${d.knowledge.find((k) => k.id === r.id)?.text}`}
                        </span>
                        <span className="muted" style={{ fontSize: 12 }}>
                          {r.note}
                        </span>
                      </div>
                      <Chip tone={r.rel === '覆盖' ? 'you' : 'queue'}>{r.rel}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {rec.onConfirm && (
              <div>
                <h3 style={{ margin: '0 0 10px', fontSize: 15, fontWeight: 600 }}>确认后会发生什么</h3>
                <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, lineHeight: 1.6 }}>
                  {rec.onConfirm.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ol>
              </div>
            )}
            <form style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4, borderTop: '1px solid rgba(255,255,255,.08)' }}>
              <label htmlFor="why" style={{ fontSize: 13, fontWeight: 600, paddingTop: 14 }}>
                {overrides ? `覆盖 ${overrides.id} 的理由（必填）` : '确认说明（可选）'}
              </label>
              <textarea id="why" rows={2} placeholder="例如：客户 A 主题沿用旧版断点，源码已确认" style={{ fontFamily: 'inherit', fontSize: 14, padding: '10px 12px', border: '1px solid rgba(255,255,255,.12)', borderRadius: 8, resize: 'vertical' }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <button className="btn btn-p" type="button">
                  确认
                </button>
                <button className="btn" type="button">
                  修改字段后确认
                </button>
                <button className="btn" type="button">
                  驳回
                </button>
              </div>
            </form>
          </section>
        )}
      </div>
    </PageMain>
  );
}
