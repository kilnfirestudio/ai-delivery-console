import { Link } from 'react-router-dom';
import { R } from '../app/routes';
import { useData, type AttentionItem, type ConsoleData } from '../data';
import {
  AGENT_STATUS_LABEL, agentById, agentNow, attentionHref, attentionIn, brokenDownRequirements, countAgents, countStates, findSubtask, formatDuration, formatNumber,
  requirementHref, requirementSchedule, SUBTASK_STATE_LABEL, subtaskKey, subtasksOf, taskHref, waitedToday, waitState,
} from '../data/selectors';
import { AgentTimeline, Donut, Gauge, Spark, TIMELINE_LEGEND, type DonutPart } from '../ui/charts';
import { SubtaskTile } from '../ui/controls';
import { GlassIcon, Robot, Sparkles, type IconName } from '../ui/icons';
import { ButtonLink, CheckpointBar, Chip, CountUp, Label, Legend, List, PageHeader, PageMain, Section, SegControl, TextLink } from '../ui/primitives';

const STATE_COLOR = { done: '#3FB950', doing: '#4F8CFF', you: '#E3A008', queue: '#3A3D44' } as const;


/** Today at a glance; each card opens its page. */
function CornerIcon({ name }: { name: IconName }) {
  return (
    <div style={{ position: 'absolute', right: 14, top: 12 }}>
      <GlassIcon name={name} size={36} />
    </div>
  );
}

function TodayRow({ d }: { d: ConsoleData }) {
  const states = countStates(d.subtasks);
  const parts: DonutPart[] = (['done', 'doing', 'you', 'queue'] as const).map((k) => ({ label: SUBTASK_STATE_LABEL[k], value: states[k], color: STATE_COLOR[k] }));
  const ag = countAgents(d.agents);
  const waited = d.agents.reduce((s, a) => s + waitedToday(a, d.workspace.now), 0);
  const firstPass = d.observation.coreMetrics.find((m) => m.id === 'firstPass')!;
  const gw = d.observation.gatewayToday;
  const pill = { doing: { bg: 'rgba(79,140,255,.26)', bd: '#4F8CFF', cls: 'pill-run' }, you: { bg: 'rgba(227,160,8,.25)', bd: '#E3A008', cls: undefined } } as const;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.9fr 1.1fr 1fr', gap: 16 }}>
      <Link to={R.breakdown} className="card today-card" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 20 }}>
        <div>
          <Donut parts={parts} caption="子任务" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {parts.map((p) => (
            <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
              <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 2, background: p.color }} />
              <span className="muted" style={{ width: 48 }}>
                {p.label}
              </span>
              <span className="num" style={{ fontSize: 18 }}>
                {p.value}
              </span>
            </div>
          ))}
        </div>
        <CornerIcon name="Breakdown" />
      </Link>
      <Link to={R.metrics} className="card today-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <CornerIcon name="Metrics" />
        <span className="lbl" style={{ alignSelf: 'flex-start' }}>
          {`${firstPass.name} · 本周`}
        </span>
        <Gauge value={firstPass.values[firstPass.values.length - 1]} base={firstPass.base} label={firstPass.name} />
      </Link>
      <Link to={R.agents} className="card today-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <CornerIcon name="Agents" />
        <span className="lbl">{`Agent · ${d.agents.length}`}</span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <div className="stat">
            <span className="muted" style={{ fontSize: 12 }}>
              在工作
            </span>
            <CountUp to={ag.doing} style={{ fontSize: 30 }} />
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: 12 }}>
              等你
            </span>
            <CountUp to={ag.you} style={{ fontSize: 30, color: '#F2C14E' }} />
          </div>
          <div className="stat">
            <span className="muted" style={{ fontSize: 12 }}>
              空闲
            </span>
            <CountUp to={ag.idle + ag.standby} style={{ fontSize: 30 }} />
          </div>
        </div>
        <div role="img" aria-label={`${d.agents.length} 个 agent：${ag.doing} 个在工作，${ag.you} 个等你，${ag.idle + ag.standby} 个空闲`} style={{ display: 'flex', gap: 4 }}>
          {d.agents.map((a) => {
            const p = a.status === 'doing' || a.status === 'you' ? pill[a.status] : { bg: 'rgba(255,255,255,.05)', bd: 'rgba(255,255,255,.12)', cls: undefined };
            return <span key={a.id} className={p.cls} title={`${a.name}：${AGENT_STATUS_LABEL[a.status]}`} style={{ flex: 1, height: 26, borderRadius: 2, background: p.bg, border: `1px solid ${p.bd}`, boxShadow: 'none' }} />;
          })}
        </div>
        <span className="muted" style={{ fontSize: 12 }}>
          今天 agent 一共等你 <span style={{ color: '#F2C14E', fontWeight: 600 }}>{formatDuration(waited)}</span>
        </span>
      </Link>
      <Link to={R.live} className="card today-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <CornerIcon name="Live" />
        <span className="lbl">网关 · 今天</span>
        <div className="stat">
          <span className="muted" style={{ fontSize: 12 }}>
            调用次数
          </span>
          <span style={{ fontSize: 30 }}>{formatNumber(gw.calls)}</span>
        </div>
        <div title="近 60 分钟调用量">
          <Spark values={gw.lastHour} width={220} height={46} color="#8E7CFF" />
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 12 }}>
          <span className="muted">
            p95 <span style={{ color: '#C9CDD4' }}>{`${gw.p95Ms} ms`}</span>
          </span>
          <span className="muted">
            拒绝 <span style={{ color: '#FF7B72' }}>{gw.rejected}</span>
          </span>
          <span className="muted">
            超时 <span style={{ color: '#F2C14E' }}>{gw.timeouts}</span>
          </span>
        </div>
      </Link>
    </div>
  );
}

const BLOCKING_ACTION: Partial<Record<AttentionItem['kind'], { tone: 'you' | 'risk'; button: string }>> = {
  求助: { tone: 'you', button: '处理求助' },
  冲突: { tone: 'risk', button: '去裁决' },
};

function PhoneThumb({ diff }: { diff?: boolean }) {
  const bar = (h: number, bg = 'rgba(255,255,255,.08)') => <span style={{ height: h, background: bg, borderRadius: 2 }} />;
  return (
    <div aria-hidden="true" style={{ width: 56, height: 98, borderRadius: 11, border: '4px solid #1D1F23', background: '#16171A', padding: 4, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 4, position: 'relative', boxShadow: '0 4px 10px rgba(16,24,40,.22), inset 0 0 0 1px rgba(0,0,0,.05)' }}>
      {bar(8)}
      {bar(22, 'rgba(255,255,255,.14)')}
      <span style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
        {bar(16)}
        {bar(16)}
      </span>
      {diff ? (
        <span style={{ position: 'absolute', left: 3, right: 3, bottom: 6, height: 12, border: '1.5px solid #D92D20', borderRadius: 2, background: 'rgba(217,45,32,0.08)' }} />
      ) : (
        <span style={{ height: 8, background: 'rgba(255,255,255,.08)', borderRadius: 2, marginTop: 'auto' }} />
      )}
    </div>
  );
}

function NeedsYou({ d }: { d: ConsoleData }) {
  const blocking = attentionIn(d, '阻塞任务');
  const confirm = attentionIn(d, '需要你确认');
  const shots = attentionIn(d, '看截图');
  const rest = [...confirm, ...shots];
  const audits = attentionIn(d, '抽检与复验');
  const deleg = d.observation.delegation;
  const waiting = d.agents.map((a) => [a, waitedToday(a, d.workspace.now)] as const).filter(([, m]) => m > 0);
  const waitedTotal = waiting.reduce((sum, [, m]) => sum + m, 0);
  return (
    <section className="tier1" aria-labelledby="you-h">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <GlassIcon name="Bell" size={44} motion="swing" />
          <div>
            <h2 id="you-h" style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
              {`需要你处理 · ${blocking.length + rest.length}`}
            </h2>
            <p className="muted" style={{ margin: '4px 0 0', fontSize: 13 }}>
              {`${blocking.length} 件正在阻塞 agent，先处理左边；右边的不阻塞，可以稍后`}
            </p>
          </div>
        </div>
        <TextLink to={R.review}>打开待审</TextLink>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Label>{`阻塞任务 · ${blocking.length}`}</Label>
          {blocking.map((it) => {
            const act = BLOCKING_ACTION[it.kind] ?? { tone: 'you' as const, button: '处理' };
            const w = waitState(d, it.waitedMin);
            const sub = it.refs?.subtask ? findSubtask(d, it.refs.subtask) : undefined;
            return (
              <div key={it.id} className="raised" style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 8, ...(w.overdue ? { borderColor: 'rgba(248,81,73,.45)' } : {}) }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                  <Chip tone={act.tone} live>
                    {it.kind}
                  </Chip>
                  <span className={w.overdue ? 'overdue' : undefined} style={{ fontSize: 14, fontWeight: 700, color: '#F2C14E' }}>
                    {w.label}
                  </span>
                </div>
                <span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.5 }}>{it.title}</span>
                <span className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
                  {it.summary}
                </span>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <ButtonLink primary to={attentionHref(it)}>
                    {act.button}
                  </ButtonLink>
                  {sub && (
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span className="muted" style={{ fontSize: 12 }}>
                        {`${sub.id} 停在检查点 ${sub.checkpoint + 1} / 5`}
                      </span>
                      <div style={{ width: 120 }}>
                        <CheckpointBar passed={sub.checkpoint} tone="you" label={`${sub.id} 已过 ${sub.checkpoint} 个检查点，停在第 ${sub.checkpoint + 1} 个`} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Label>{`不阻塞 · ${rest.length}`}</Label>
          <div className="raised" style={{ padding: '2px 16px 4px' }}>
            <List
              items={confirm.map((it) => ({
                key: it.id,
                main: (
                  <>
                    <Chip tone={it.kind === '上提' ? 'done' : 'doing'}>{it.kind}</Chip> {it.title}
                  </>
                ),
                meta: `${it.summary} · ${it.since}`,
                right: (
                  <Link to={attentionHref(it)} style={{ fontSize: 13 }}>
                    {it.kind === '上提' ? '查看' : '审核'}
                  </Link>
                ),
              }))}
            />
          </div>
          {shots.map((it) => {
            const w = waitState(d, it.waitedMin);
            return (
              <Link key={it.id} to={attentionHref(it)} className="raised today-card" style={{ marginTop: 6, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <PhoneThumb />
                  <span className="muted" aria-hidden="true" style={{ fontSize: 12 }}>
                    →
                  </span>
                  <PhoneThumb diff />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                  <span>
                    <Chip tone="you">{it.kind}</Chip> <span style={{ fontWeight: 500 }}>{it.title}</span>
                  </span>
                  <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                    {it.summary}
                  </span>
                  <span className={w.overdue ? 'overdue' : 'muted'} style={{ fontSize: 12 }}>
                    {w.label}
                  </span>
                  <span style={{ fontSize: 13, color: '#9D8FFF' }}>去看截图 →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, margin: '16px 0 0', fontSize: 12 }}>
        <span className="muted">
          {`在等你的 agent：${waiting.map(([a, m]) => `${a.name} ${m} 分钟`).join('，')}，今天合计 `}
          <span style={{ color: '#F2C14E', fontWeight: 600 }}>{formatDuration(waitedTotal)}</span>
          {' · '}
          <Link to={R.agents}>Agent 看板</Link>
        </span>
        <span className="muted">{`另有 ${audits.length} 件抽检与复验，不急 · 委托规则 ${deleg.version} 今天自动确认 ${deleg.confirmedToday} 条`}</span>
      </div>
    </section>
  );
}

function BreakdownMap({ d }: { d: ConsoleData }) {
  const reqs = brokenDownRequirements(d);
  const c = countStates(d.subtasks);
  return (
    <Section
      id="map-h"
      title="项目拆解地图"
      sub={`${d.projects.length} 个项目 · ${reqs.length} 个需求 · ${d.subtasks.length} 个子任务。每个方块是一个子任务，颜色表示状态，悬停看详情，点开进入任务`}
      right={
        <Legend
          items={[
            [{ background: '#3FB950' }, `完成 ${c.done}`],
            [{ background: '#4F8CFF' }, `进行中 ${c.doing}`],
            [{ background: '#E3A008' }, `等待你 ${c.you}`],
            [{ background: 'transparent', border: '1px dashed #5C616B' }, `排队 ${c.queue}`],
          ]}
        />
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {d.projects.map((p) => {
          const preqs = brokenDownRequirements(d, p.id);
          const subs = preqs.flatMap((r) => subtasksOf(d, r.id));
          return (
            <div key={p.id} style={{ display: 'grid', gridTemplateColumns: '240px minmax(0, 1fr)', gap: 16, alignItems: 'start', padding: '14px 0', borderTop: '1px solid rgba(255,255,255,.06)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 6 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{p.name}</span>
                  <Chip tone={p.line === '主线' ? 'doing' : 'queue'}>{p.line}</Chip>
                </div>
                <span className="muted" style={{ fontSize: 12 }}>
                  {subs.length ? `子任务完成 ${countStates(subs).done} / ${subs.length}` : '没有进行中的需求'}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {preqs.length ? (
                  preqs.map((r) => (
                    <div key={r.id} className="well" style={{ flex: '0 1 auto', minWidth: 220, display: 'flex', flexDirection: 'column', gap: 8, padding: 12, borderRadius: 10, ...(subtasksOf(d, r.id).some((x) => x.state === 'you') ? { borderColor: 'rgba(227,160,8,.45)' } : {}) }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Link to={requirementHref(r.id)} style={{ fontSize: 13, fontWeight: 600, color: '#EDEEF0', textDecoration: 'none' }}>
                          {`${r.id} · ${r.title}`}
                        </Link>
                        <span className="muted" style={{ fontSize: 12 }}>
                          {requirementSchedule(r)}
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {subtasksOf(d, r.id).map((s) => {
                          const who = agentById(d, s.agentId);
                          const tip = [s.id, s.title, who?.name, s.state === 'doing' || s.state === 'you' ? `${s.checkpoint} / 5` : undefined, s.waitingFor, s.dependsOn && s.state === 'queue' ? `依赖 ${s.dependsOn.join(' ')}` : undefined, SUBTASK_STATE_LABEL[s.state]]
                            .filter(Boolean)
                            .join(' · ');
                          return (
                            <SubtaskTile key={s.id} id={s.id} state={s.state} title={tip} to={taskHref(subtaskKey(s))} />
                          );
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ padding: '8px 16px', borderRadius: 4, border: '1px dashed rgba(255,255,255,.12)', fontSize: 13, color: '#A1A6B0', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Robot state="idle" size={30} />
                    暂无需求，维护中
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function TimelineSection({ d }: { d: ConsoleData }) {
  const waiting = d.agents.map((a) => [a, waitedToday(a, d.workspace.now)] as const).filter(([, m]) => m > 0);
  const total = waiting.reduce((s, [, m]) => s + m, 0);
  return (
    <Section
      id="tl-h"
      title="Agent 今日时间轴"
      sub={`${d.agents.length} 个 agent：谁在做、谁在等你、谁空着`}
      right={
        <>
          {TIMELINE_LEGEND}
          <TextLink to={R.agents}>打开 Agent 看板</TextLink>
        </>
      }
    >
      <AgentTimeline lanes={d.agents.map((a) => ({ agent: a, now: agentNow(d, a) }))} now={d.workspace.now} />
      <p className="muted" style={{ margin: '12px 0 0', fontSize: 12 }}>
        {`今天 agent 一共等你 ${formatDuration(total)}：${waiting.map(([a, m]) => `${a.name} ${m} 分钟`).join('，')}。时间轴来自网关的任务事件`}
      </p>
    </Section>
  );
}

function Kpis({ d }: { d: ConsoleData }) {
  return (
    <Section id="kpi-h" variant="quiet" title="本周效果" sub="四个核心指标，近 12 周；虚线是基线。每周复盘时再细看" right={<TextLink to={R.metrics}>打开指标</TextLink>}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
        {d.observation.coreMetrics.map((m) => (
          <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
              {m.id === 'repeats' && (
                <div style={{ position: 'relative', display: 'inline-flex' }}>
                  <GlassIcon name="Trophy" size={36} />
                  <Sparkles />
                </div>
              )}
              <div className="stat">
                <span className="muted" style={{ fontSize: 13 }}>
                  {m.name}
                </span>
                <span style={{ fontSize: 22, fontWeight: 600 }}>{`${m.values[m.values.length - 1]}${m.unit}`}</span>
                <span className="muted" style={{ fontSize: 12 }}>
                  {[`基线 ${m.base}${m.unit}`, m.aside].filter(Boolean).join(' · ')}
                </span>
              </div>
            </div>
            <div title={`${m.name}：${m.values.join('、')}`}>
              <Spark values={m.values} base={m.base} width={120} height={40} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function Overview() {
  const d = useData();
  const blocking = attentionIn(d, '阻塞任务').length;
  const needs = d.attention.filter((a) => a.group !== '抽检与复验').length;
  const ag = countAgents(d.agents);
  return (
    <PageMain>
      <PageHeader
        icon="Main"
        title="全局总览"
        sub={`${needs} 件事在等你，其中 ${blocking} 件正在阻塞任务 · ${ag.doing} 个 agent 在工作，${ag.you} 个在等你`}
        right={<SegControl label="按项目筛选" options={['全部项目', ...d.projects.map((p) => p.short)]} />}
      />
      <NeedsYou d={d} />
      <TodayRow d={d} />
      <BreakdownMap d={d} />
      <TimelineSection d={d} />
      <Kpis d={d} />
    </PageMain>
  );
}

