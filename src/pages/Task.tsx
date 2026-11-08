import { useState, type CSSProperties } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { R } from '../app/routes';
import { CHECKPOINTS, useData, type ConsoleData, type ConstraintLevel, type KnowledgeItem, type TaskDetail, type TaskEventType, type Tone } from '../data';
import { agentById, attentionHref, findSubtask, LEVEL_TONE, nextAttention, requirementHref, SUBTASK_STATE_LABEL, waitState } from '../data/selectors';
import { CheckpointBar, Chip, PageHeader, PageMain, Rich } from '../ui/primitives';

const EVENT_STYLE: Record<TaskEventType, [Tone, string]> = {
  领取: ['queue', '#5C616B'],
  检索: ['doing', '#4F8CFF'],
  引用: ['doing', '#4F8CFF'],
  修改: ['done', '#039855'],
  候选: ['doing', '#4F8CFF'],
  拦截: ['risk', '#D92D20'],
  求助: ['you', '#DC6803'],
};
const LEVEL_BAR: Record<ConstraintLevel, string> = { 红线: '#D92D20', 默认: '#9D8FFF', 建议: '#5C616B', 参考: '#5C616B' };

const NODE_W = 300;
const ROW = 62;
const COL_X = [0, 470, 940];
const cy = (i: number) => 22 + ROW * i;

function TraceNode({ x, i, title, meta, tip, bar, unused }: { x: number; i: number; title: string; meta: string; tip: string; bar?: string; unused?: boolean }) {
  const y = ROW * i;
  return (
    <g>
      <title>{tip}</title>
      <rect x={x} y={y} width={NODE_W} height="44" rx="8" fill={unused ? 'rgba(255,255,255,.03)' : '#16171A'} stroke="rgba(255,255,255,.12)" strokeDasharray={unused ? '4 3' : undefined} />
      {bar && <rect x={x} y={y + 8} width="3" height="28" rx="1.5" fill={bar} />}
      <text x={x + 14} y={y + 19} fontSize="13" fontWeight="500" fill={unused ? '#A1A6B0' : '#EDEEF0'}>
        {title}
      </text>
      <text x={x + 14} y={y + 35} fontSize="11" fill="#A1A6B0">
        {meta}
      </text>
    </g>
  );
}

function TraceEdge({ from, to, x, k }: { from: number; to: number; x: number; k: number }) {
  const d = `M${x} ${cy(from)} C${(x + 85).toFixed(1)} ${cy(from)} ${(x + 85).toFixed(1)} ${cy(to)} ${x + 170} ${cy(to)}`;
  const begin = `${((k * 0.37) % 2).toFixed(2)}s`;
  return (
    <>
      <path d={d} fill="none" stroke="#5C616B" strokeWidth="1.5" strokeDasharray="4 5">
        <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.1s" repeatCount="indefinite" />
      </path>
      <circle r="2.6" fill="#B4A9FF">
        <animateMotion dur="2.2s" begin={begin} repeatCount="indefinite" path={d} />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.85;1" dur="2.2s" begin={begin} repeatCount="indefinite" />
      </circle>
    </>
  );
}

/** Evidence → knowledge → outputs, one column each; every edge is a citation or evidence record. */
function TraceGraph({ d, t }: { d: ConsoleData; t: TaskDetail }) {
  const kn = (id: string) => d.knowledge.find((k) => k.id === id) as KnowledgeItem;
  const ev = (id: string) => d.evidence.find((e) => e.id === id)!;
  const cited = t.retrieved.filter((r) => r.cited).map((r) => r.id);
  const unused = t.retrieved.filter((r) => !r.cited).map((r) => r.id);
  const kOrder = [...cited, ...unused];
  const rows = Math.max(t.trace.evidence.length, kOrder.length, t.trace.outputs.length);
  const h = ROW * rows - 18;
  const edits = t.files.filter((f) => f.state === '已修改').length;
  let k = 0;
  return (
    <svg viewBox={`0 0 1240 ${h}`} width="100%" role="img" aria-label={`追溯图：${t.trace.evidence.length} 条证据支撑 ${cited.length} 条被引用的知识，产生 ${edits} 处改动和 ${t.help ? 1 : 0} 次求助；另有 ${unused.length} 条知识检索到但没用上，${t.candidates.length} 条候选来自新证据`} style={{ display: 'block', fontFamily: "Inter, 'Noto Sans SC', system-ui, sans-serif" }}>
      {t.trace.supports.map(([e, kid]) => (
        <TraceEdge key={`${e}-${kid}`} from={t.trace.evidence.indexOf(e)} to={kOrder.indexOf(kid)} x={NODE_W} k={++k} />
      ))}
      {t.trace.produces.map(([kid, o]) => (
        <TraceEdge key={`${kid}-${o}`} from={kOrder.indexOf(kid)} to={o} x={COL_X[1] + NODE_W} k={++k} />
      ))}
      {t.trace.evidence.map((id, i) => {
        const e = ev(id);
        const meta = `${e.id} · ${e.kind} · ${e.date}`;
        return <TraceNode key={id} x={COL_X[0]} i={i} title={e.title} meta={meta} tip={`${meta}：${e.title}`} />;
      })}
      {kOrder.map((id, i) => {
        const item = kn(id);
        const isUsed = cited.includes(id);
        const meta = isUsed ? `${id} · ${item.level} · ${item.credibility}` : `${id} · 检索到但没用上`;
        return <TraceNode key={id} x={COL_X[1]} i={i} title={item.short} meta={meta} tip={`${meta}：${item.short}`} bar={isUsed ? LEVEL_BAR[item.level] : undefined} unused={!isUsed} />;
      })}
      {t.trace.outputs.map((o, i) => (
        <TraceNode key={o.title} x={COL_X[2]} i={i} title={o.title} meta={o.meta} tip={`${o.title}：${o.meta}`} />
      ))}
    </svg>
  );
}

const card: CSSProperties = { border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 6 };

export default function Task() {
  const d = useData();
  const [params] = useSearchParams();
  const key = params.get('id') ?? 'TASK-0412/T2';
  const s = findSubtask(d, key) ?? d.subtasks[0];
  const t = d.taskDetails.find((x) => x.subtask === key);
  const req = d.requirements.find((r) => r.id === s.requirementId);
  const a = agentById(d, s.agentId);
  const help = t?.help && d.attention.find((x) => x.id === t.help?.attentionId);
  const stuckAt = CHECKPOINTS[s.checkpoint];
  const retrieved = t?.retrieved.map((r) => ({ ...r, item: d.knowledge.find((k) => k.id === r.id) as KnowledgeItem })) ?? [];
  const citedCount = retrieved.filter((r) => r.cited).length;
  const wait = waitState(d, help?.waitedMin);
  const next = help ? nextAttention(d, help.id) : undefined;
  const recommended = Math.max(0, t?.help?.options.findIndex((o) => o.recommended) ?? 0);
  const [choice, setChoice] = useState(recommended);
  const [decided, setDecided] = useState<number>();

  return (
    <PageMain>
      <PageHeader
        icon="Task"
        crumbs={[['全局总览', R.overview], [req?.title ?? s.requirementId, requirementHref(s.requirementId)], [s.id]]}
        title={`${s.id} · ${s.title}`}
        sub={
          <>
            {`${a ? `${a.name} · ${a.tool} · ` : ''}分支 `}
            <span className="mono">{s.branch}</span>
            {' · 文件范围 '}
            <span className="mono">{s.files?.join(' ')}</span>
          </>
        }
        right={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Chip tone={s.state}>{SUBTASK_STATE_LABEL[s.state]}</Chip>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{`检查点 ${s.checkpoint} / 5${s.state === 'you' && stuckAt ? ` · 卡在${stuckAt}` : ''}`}</span>
            </div>
            <CheckpointBar passed={s.checkpoint} tone={s.state === 'you' ? 'you' : s.checkpoint === 5 ? 'done' : 'doing'} />
          </div>
        }
      />

      {t?.help && help && (
        <section aria-labelledby="help-h" style={{ background: 'rgba(227,160,8,.06)', border: `1px solid ${wait.overdue ? 'rgba(248,81,73,.55)' : 'rgba(227,160,8,.45)'}`, borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 id="help-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
              {`求助：${t.help.question}`}
            </h2>
            <span className={wait.overdue ? 'overdue' : 'muted'} style={{ fontSize: 13, fontWeight: wait.overdue ? 600 : 400 }}>
              {`${help.since} 提出 · ${wait.label}`}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            <Rich text={t.help.body} />
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Chip tone="risk">{`后果：${t.help.consequence}`}</Chip>
            <Chip tone="you">{`不确定：${t.help.uncertainty}`}</Chip>
            <Chip>风险路由 → 你来决策</Chip>
          </div>
          {decided === undefined ? (
            <>
              <div role="radiogroup" aria-label="选择方案" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
                {t.help.options.map((o, i) => (
                  <button key={o.title} type="button" role="radio" aria-checked={choice === i} className="opt" onClick={() => setChoice(i)}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{o.title}</span>
                      {o.recommended && <Chip tone="doing">推荐</Chip>}
                    </span>
                    <span className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
                      {o.desc}
                    </span>
                    <span style={{ fontSize: 12, lineHeight: 1.5 }}>{o.cost}</span>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                <button className="btn btn-p" type="button" onClick={() => setDecided(choice)}>
                  {`按“${t.help.options[choice].title}”回复开发 C`}
                </button>
                <span className="muted" style={{ fontSize: 12 }}>
                  你的回答直接作为由你确认的判断入库，只适用于这个任务，原文存为证据
                </span>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderRadius: 10, background: 'rgba(63,185,80,.08)' }}>
              <span style={{ fontSize: 14 }}>
                <Chip tone="done">已回复</Chip> {`${t.help.options[decided].title}。${a?.name ?? 'agent'} 会从检查点 ${s.checkpoint + 1} 继续`}
              </span>
              <span style={{ display: 'flex', gap: 8 }}>
                <button className="btn" type="button" onClick={() => setDecided(undefined)}>
                  撤回
                </button>
                {next && (
                  <Link className="btn btn-p" to={attentionHref(next)}>
                    {`下一件：${next.title}`}
                  </Link>
                )}
              </span>
            </div>
          )}
        </section>
      )}

      {t && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 480px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <section className="card" aria-labelledby="cp-h">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <h2 id="cp-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                  {`完成度 · ${s.checkpoint} / 5`}
                </h2>
                <span className="muted" style={{ fontSize: 13 }}>
                  每个检查点都要有对应的事件
                </span>
              </div>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {CHECKPOINTS.map((name, i) => {
                  const st = i < s.checkpoint ? 'pass' : i === s.checkpoint && s.state === 'you' ? 'stuck' : 'todo';
                  const dot: CSSProperties = st === 'pass' ? { background: '#039855', color: '#FFFFFF' } : st === 'stuck' ? { background: '#DC6803', color: '#FFFFFF' } : { background: 'rgba(255,255,255,.08)', color: '#A1A6B0' };
                  return (
                    <li key={name} style={{ display: 'grid', gridTemplateColumns: '28px 1fr auto', gap: 10, alignItems: 'center', padding: '8px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                      <span style={{ width: 24, height: 24, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, ...dot }}>{i + 1}</span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                        <span style={{ fontSize: 14, fontWeight: 500 }}>{name}</span>
                        <span className="muted" style={{ fontSize: 12 }}>
                          {t.checkpointEvidence[i]}
                        </span>
                      </div>
                      <Chip tone={st === 'pass' ? 'done' : st === 'stuck' ? 'you' : 'queue'}>{st === 'pass' ? '通过' : st === 'stuck' ? '卡住' : '未开始'}</Chip>
                    </li>
                  );
                })}
              </ol>
            </section>
            <section className="card" aria-labelledby="tl-h">
              <h2 id="tl-h" style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 600 }}>
                事件时间线
              </h2>
              <p className="muted" style={{ margin: '0 0 16px', fontSize: 13 }}>
                来自事件日志，只追加、不可改
              </p>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {t.events.map((e) => (
                  <li key={`${e.time}-${e.title}`} style={{ display: 'grid', gridTemplateColumns: '48px 16px 1fr', gap: 10, paddingBottom: 16 }}>
                    <span className="mono muted" style={{ paddingTop: 2 }}>
                      {e.time}
                    </span>
                    <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 5, marginTop: 5, background: EVENT_STYLE[e.type][1] }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
                        <Chip tone={EVENT_STYLE[e.type][0]}>{e.type}</Chip>
                        <span style={{ fontSize: 14, fontWeight: 500 }}>{e.title}</span>
                      </div>
                      <span className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
                        {e.detail}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>
          <div style={{ flex: '1 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <section className="card" aria-labelledby="kn-h">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <h2 id="kn-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                  用到的知识
                </h2>
                <span className="muted" style={{ fontSize: 13 }}>
                  {`检索 ${retrieved.length} 条 · 声称引用 ${citedCount} 条 · 核验一致 ${t.citationsVerified} / ${citedCount}`}
                </span>
              </div>
              <p className="muted" style={{ margin: '0 0 12px', fontSize: 13 }}>
                检索到但没用上的知识也列出来，用来判断检索是否精准
              </p>
              <div style={{ overflowX: 'auto' }}>
                <div role="table" style={{ width: '100%', minWidth: 560, display: 'flex', flexDirection: 'column' }}>
                  {[null, ...retrieved].map((r) => (
                    <div key={r?.id ?? 'head'} role="row" className="tr" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2.6fr) minmax(0, 1.1fr) 76px 90px 100px' }}>
                      {r === null ? (
                        ['知识', '层级', '约束', '可信度', '本任务'].map((h) => (
                          <div key={h} role="columnheader" className="th">
                            {h}
                          </div>
                        ))
                      ) : (
                        <>
                          <div role="cell" className="td">
                            <span className="mono">{r.id}</span>
                            <br />
                            <span>{r.item.text}</span>
                          </div>
                          <div role="cell" className="td" style={{ whiteSpace: 'nowrap' }}>
                            {r.item.scope}
                          </div>
                          <div role="cell" className="td">
                            <Chip tone={LEVEL_TONE[r.item.level]}>{r.item.level}</Chip>
                          </div>
                          <div role="cell" className="td" style={{ whiteSpace: 'nowrap' }}>
                            {r.item.credibility}
                          </div>
                          <div role="cell" className="td">
                            <Chip tone={r.cited ? 'done' : 'queue'}>{r.cited ? '已引用' : '检索未用'}</Chip>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="card" aria-labelledby="fl-h">
              <h2 id="fl-h" style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 600 }}>
                改动文件
              </h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {t.files.map((f) => (
                  <li key={f.path} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                    <span className="mono">{f.path}</span>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span className="mono" style={{ color: '#56D364' }}>
                        {f.added !== undefined ? `+${f.added}` : ''}
                      </span>
                      <span className="mono" style={{ color: '#FF7B72' }}>
                        {f.removed !== undefined ? `−${f.removed}` : ''}
                      </span>
                      <Chip tone={f.state === '已修改' ? 'done' : 'risk'}>{f.state}</Chip>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="card" aria-labelledby="cd-h">
              <h2 id="cd-h" style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 600 }}>
                产出与检查
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.candidates.map((id) => {
                  const c = d.knowledge.find((k) => k.id === id);
                  const at = d.attention.find((x) => x.refs?.candidate === id);
                  return (
                    c && (
                      <div key={id} style={card}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                          <Chip tone="doing">候选</Chip>
                          <span className="muted" style={{ fontSize: 12 }}>
                            {at?.summary}
                          </span>
                        </div>
                        <span style={{ fontSize: 14, fontWeight: 500 }}>{c.text}</span>
                        {c.evidenceSummary && (
                          <span className="muted" style={{ fontSize: 12 }}>
                            证据：<Rich text={c.evidenceSummary} />
                          </span>
                        )}
                        <Link className="btn" to={R.review} style={{ alignSelf: 'flex-start', minHeight: 36, fontSize: 13 }}>
                          去审核
                        </Link>
                      </div>
                    )
                  );
                })}
                {t.visualCheck && (
                  <div style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                      <span style={{ fontSize: 14, fontWeight: 500 }}>截图比对</span>
                      <Chip tone={t.visualCheck.state === '通过' ? 'done' : t.visualCheck.state === '进行中' ? 'doing' : 'queue'}>{t.visualCheck.state}</Chip>
                    </div>
                    <span className="muted" style={{ fontSize: 12 }}>
                      {`${t.visualCheck.devices.join(' · ')}，${t.visualCheck.note}`}
                    </span>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      )}

      {t && (
        <section className="card" aria-labelledby="tr-h">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <h2 id="tr-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                追溯图
              </h2>
              <span className="stage">阶段 3</span>
            </div>
            <span className="muted" style={{ fontSize: 13 }}>
              每条线都对应一条引用或证据记录
            </span>
          </div>
          <p className="muted" style={{ margin: '0 0 16px', fontSize: 13 }}>
            从右往左读：这次的每个产出依据了哪些知识，每条知识又是由哪些原始证据支撑的
          </p>
          <div style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: 960 }}>
              <div aria-hidden="true" style={{ display: 'grid', gridTemplateColumns: '300fr 170fr 300fr 170fr 300fr', marginBottom: 8 }}>
                <span className="lbl" style={{ fontSize: 12, fontWeight: 600, color: '#A1A6B0' }}>
                  {`证据 · ${t.trace.evidence.length}`}
                </span>
                <span />
                <span style={{ fontSize: 12, fontWeight: 600, color: '#A1A6B0' }}>{`知识 · 检索 ${t.retrieved.length}，引用 ${citedCount}`}</span>
                <span />
                <span style={{ fontSize: 12, fontWeight: 600, color: '#A1A6B0' }}>{`本任务的产出 · ${t.trace.outputs.length}`}</span>
              </div>
              <TraceGraph d={d} t={t} />
            </div>
          </div>
          <div className="muted" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 12, fontSize: 12 }}>
            {(['红线', '默认', '建议'] as const).map((lv) => (
              <span key={lv} style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
                <span aria-hidden="true" style={{ width: 3, height: 14, borderRadius: 1.5, background: lv === '默认' ? '#6E5CF6' : LEVEL_BAR[lv] }} />
                {lv}
              </span>
            ))}
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
              <span className="well" aria-hidden="true" style={{ width: 16, height: 10, borderRadius: 3 }} />
              检索到但没用上
            </span>
            <span>引用表示 agent 声明并经网关核对，不代表这条知识一定起了作用</span>
          </div>
        </section>
      )}
    </PageMain>
  );
}
