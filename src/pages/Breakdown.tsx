import type { CSSProperties } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { R } from '../app/routes';
import { CHECKPOINTS, CHECKPOINT_EVIDENCE, DELIVERY_STEPS, useData, type Subtask } from '../data';
import { agentById, nextCheckpoint, SUBTASK_STATE_LABEL, subtasksOf } from '../data/selectors';
import { CheckpointBar, Chip, PageHeader, PageMain } from '../ui/primitives';

const COLS = '56px minmax(0, 1.4fr) minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 1.3fr) 70px 96px 170px';
const ARROW = (
  <svg aria-hidden="true" width="32" height="24" viewBox="0 0 32 24">
    <path d="M4 12h20m-6-6 6 6-6 6" fill="none" stroke="#5C616B" strokeWidth="1.5" />
  </svg>
);
const REGRESSION_TONE = { 待回归: 'queue', 通过: 'done', 有风险: 'you' } as const;

const cpTone = (s: Subtask) => (s.state === 'you' ? 'you' : s.checkpoint === 5 ? 'done' : 'doing');

export default function Breakdown() {
  const d = useData();
  const [params] = useSearchParams();
  const req = d.requirements.find((r) => r.id === (params.get('id') ?? 'TASK-0412')) ?? d.requirements[0];
  const project = d.projects.find((p) => p.id === req.projectId);
  const client = d.clients.find((c) => c.id === req.clientId);
  const subs = subtasksOf(d, req.id);
  const first = subs.filter((s) => !s.dependsOn?.length);
  const parallel = subs.filter((s) => s.dependsOn?.length && s.dependsOn.every((x) => first.some((f) => f.id === x)));
  const merge = subs.filter((s) => !first.includes(s) && !parallel.includes(s));
  const waiting = subs.filter((s) => s.state === 'you').length;
  const conflicts = d.attention.filter((a) => a.kind === '冲突' && a.refs?.requirement === req.id);
  const met = req.acceptance?.filter((c) => c.met).length ?? 0;
  const agentName = (s: Subtask) => agentById(d, s.agentId)?.name ?? '未分配';

  const node = (s: Subtask, meta: string, style?: CSSProperties) => (
    <Link key={s.id} className="node" to={R.task} style={style}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <span className="mono">{s.id}</span>
        <Chip tone={s.state}>{SUBTASK_STATE_LABEL[s.state]}</Chip>
      </div>
      <span style={{ fontSize: 14, fontWeight: 500 }}>{s.title}</span>
      {meta && (
        <span className="muted" style={{ fontSize: 12 }}>
          {meta}
        </span>
      )}
    </Link>
  );

  return (
    <PageMain>
      <PageHeader
        icon="Breakdown"
        crumbs={[['全局总览', R.overview], [project?.name ?? ''], [req.id]]}
        title={req.title}
        sub={[client && `客户：${client.alias}`, req.registeredAt && `登记 ${req.registeredAt}`, req.specVersion && `需求单 ${req.specVersion} 已由客户确认`, req.plannedFor && `计划交付 ${req.plannedFor}`].filter(Boolean).join(' · ')}
        right={
          <>
            <Chip tone="doing">{`${DELIVERY_STEPS[req.step - 1]}中`}</Chip>
            {waiting > 0 && <Chip tone="you">{`${waiting} 个子任务等待你`}</Chip>}
            {conflicts.length > 0 && <Chip tone="risk">{`${conflicts.length} 个冲突`}</Chip>}
          </>
        }
      />

      {req.stepLog && (
        <section className="card" aria-labelledby="flow-h">
          <h2 id="flow-h" style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 600 }}>
            交付流程
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <ol aria-label="交付流程八步" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(8, minmax(110px, 1fr))', gap: 8, minWidth: 940 }}>
              {DELIVERY_STEPS.map((label, i) => {
                const done = i < req.step - 1;
                const cur = i === req.step - 1;
                const box: CSSProperties = cur ? { background: 'rgba(124,108,255,.10)', border: '1px solid rgba(124,108,255,.5)' } : done ? { background: 'rgba(63,185,80,.06)', border: '1px solid rgba(63,185,80,.3)' } : {};
                const dot: CSSProperties = done ? { background: '#039855', color: '#FFFFFF' } : cur ? { background: '#6E5CF6', color: '#FFFFFF' } : { background: 'rgba(255,255,255,.08)', color: '#A1A6B0' };
                return (
                  <li key={label} className={done || cur ? undefined : 'well'} style={{ borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'column', gap: 6, ...box }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 24, height: 24, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, ...dot }}>{i + 1}</span>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{label}</span>
                    </div>
                    <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                      {req.stepLog?.[i]?.who}
                    </span>
                    <span style={{ fontSize: 12, lineHeight: 1.5 }}>{req.stepLog?.[i]?.note}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      <section className="card" aria-labelledby="dep-h">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <h2 id="dep-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
              拆分与依赖
            </h2>
            <p className="muted" style={{ margin: '6px 0 0', fontSize: 13 }}>
              先改共用文件，再并行开发互不重叠的部分，最后合并做全量回归
            </p>
          </div>
          {req.splitBasis && (
            <span className="muted" style={{ fontSize: 13 }}>
              {`拆分依据：${req.splitBasis}`}
            </span>
          )}
        </div>
        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 32px 1.3fr 32px 1fr 32px 0.8fr', alignItems: 'center', minWidth: 1040 }}>
            <div>
              <p className="colh">第一步 · 先做</p>
              {first.map((s) => node(s, [agentName(s), `检查点 ${s.checkpoint} / 5`, s.note].filter(Boolean).join(' · ')))}
            </div>
            {ARROW}
            <div>
              <p className="colh">第二步 · 并行</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {parallel.map((s) => (
                  <Link key={s.id} className="node" to={R.task} style={{ borderColor: s.state === 'you' ? 'rgba(227,160,8,.45)' : 'rgba(255,255,255,.08)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                      <span className="mono">{s.id}</span>
                      <Chip tone={s.state}>{SUBTASK_STATE_LABEL[s.state]}</Chip>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{s.title}</span>
                    <CheckpointBar passed={s.checkpoint} tone={cpTone(s)} label={`${s.id} 检查点 ${s.checkpoint} / 5`} />
                    <span className="muted" style={{ fontSize: 12 }}>
                      {`${agentName(s)} · 检查点 ${s.checkpoint} / 5`}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {ARROW}
            <div>
              <p className="colh">第三步 · 合并</p>
              {merge.map((s) => node(s, `${agentName(s)} · 检查点 ${s.checkpoint} / 5 · 依赖 ${s.dependsOn?.[0]}–${s.dependsOn?.[s.dependsOn.length - 1]}`))}
            </div>
            {ARROW}
            <div>
              <p className="colh">第四步 · 交付</p>
              <div className="node well" style={{ borderStyle: 'dashed' }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>你验收后交付客户</span>
                <span className="muted" style={{ fontSize: 12 }}>
                  {`预计 ${req.plannedFor ?? '待定'}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card" aria-labelledby="tbl-h">
        <h2 id="tbl-h" style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 600 }}>
          子任务明细
        </h2>
        <p className="muted" style={{ margin: '0 0 12px', fontSize: 13, lineHeight: 1.6 }}>
          文件范围在拆分时写进任务登记。拦截发生在三处：工具的改文件前 hook、提交前检查、合并时检查；网关不拦文件，只记录拦截事件。越界会被拦下并转成求助
        </p>
        <div style={{ overflowX: 'auto' }}>
          <div role="table" style={{ width: '100%', minWidth: 1000, display: 'flex', flexDirection: 'column' }}>
            <div role="row" className="tr" style={{ display: 'grid', gridTemplateColumns: COLS }}>
              {['子任务', '内容', 'Agent', '分支', '文件范围', '依赖', '状态', '完成度'].map((h) => (
                <div key={h} role="columnheader" className="th">
                  {h}
                </div>
              ))}
            </div>
            {subs.map((s) => {
              const a = agentById(d, s.agentId);
              return (
                <div key={s.id} role="row" className="tr" style={{ display: 'grid', gridTemplateColumns: COLS }}>
                  <div role="cell" className="td mono">
                    {s.id}
                  </div>
                  <div role="cell" className="td" style={{ fontWeight: 500 }}>
                    {s.title}
                  </div>
                  <div role="cell" className="td">
                    {a ? `${a.name} · ${a.tool}` : '未分配'}
                  </div>
                  <div role="cell" className="td mono">
                    {s.branch ?? '—'}
                  </div>
                  <div role="cell" className="td mono" style={{ lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {s.files?.join('\n') ?? '—'}
                  </div>
                  <div role="cell" className="td mono">
                    {s.dependsOn?.join(' ') ?? '—'}
                  </div>
                  <div role="cell" className="td">
                    <Chip tone={s.state}>{SUBTASK_STATE_LABEL[s.state]}</Chip>
                  </div>
                  <div role="cell" className="td">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <CheckpointBar passed={s.checkpoint} tone={cpTone(s)} label={`${s.id} 检查点 ${s.checkpoint} / 5`} />
                      <span style={{ fontSize: 12 }}>{`${s.checkpoint} / 5 · ${nextCheckpoint(s)}`}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="well" style={{ marginTop: 16, padding: '14px 16px', borderRadius: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>完成度怎么算</span>
          <span className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>
            每个子任务有 5 个检查点，每过一个都对应一条事件记录，点开能看到原始记录。没有记录就不算过，agent 自己说“完成 70%”不计入。
          </span>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 8 }}>
            {CHECKPOINTS.map((name, i) => (
              <li key={name} style={{ background: '#16171A', border: '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{`${i + 1} · ${name}`}</span>
                <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                  {`依据：${CHECKPOINT_EVIDENCE[i]}`}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
        {req.acceptance && (
          <section className="card" aria-labelledby="ac-h" style={{ flex: '1 1 520px', minWidth: 0 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <h2 id="ac-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                验收标准
              </h2>
              <span className="muted" style={{ fontSize: 13 }}>
                {`${met} / ${req.acceptance.length} 已满足`}
              </span>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
              {req.acceptance.map((c) => (
                <li key={c.text} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                  <Chip tone={c.met ? 'done' : 'queue'} style={{ marginTop: 1 }}>
                    {c.met ? '已满足' : '未满足'}
                  </Chip>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 14, lineHeight: 1.5 }}>{c.text}</span>
                    <span className="muted" style={{ fontSize: 12 }}>
                      {c.by}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
        {req.regression && (
          <section className="card" aria-labelledby="rg-h" style={{ flex: '1 1 520px', minWidth: 0 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <h2 id="rg-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                回归范围
              </h2>
              <span className="muted" style={{ fontSize: 13 }}>
                按冻结清单里“功能 ↔ 文件”的对应自动算出
              </span>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
              {req.regression.map((g) => (
                <li key={g.name} style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 14 }}>{g.name}</span>
                    <span className="muted" style={{ fontSize: 12 }}>
                      {g.meta}
                    </span>
                  </div>
                  <Chip tone={REGRESSION_TONE[g.status]}>{g.status}</Chip>
                </li>
              ))}
            </ul>
            {conflicts.map((c) => (
              <div key={c.id} style={{ marginTop: 12, padding: '12px 14px', borderRadius: 10, background: 'rgba(248,81,73,.08)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#FF7B72' }}>冲突待你裁决</span>
                <span style={{ fontSize: 13, lineHeight: 1.5 }}>{c.body}</span>
                <Link className="btn" to={c.route} style={{ alignSelf: 'flex-start' }}>
                  去裁决
                </Link>
              </div>
            ))}
          </section>
        )}
      </div>
    </PageMain>
  );
}
