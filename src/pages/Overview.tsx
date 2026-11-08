import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { R } from '../app/routes';
import { CHECKPOINTS, useData, type AttentionItem, type ClockTime, type ConsoleData } from '../data';
import {
  AGENT_STATUS_LABEL, agentById, agentNow, ATTENTION_TONE, attentionHref, attentionIn, brokenDownRequirements, countAgents, countStates, findSubtask, formatDuration, formatNumber,
  requirementHref, requirementSchedule, SUBTASK_STATE_LABEL, subtaskKey, subtasksOf, taskHref, toMinutes, waitedToday, waitState,
} from '../data/selectors';
import { AgentTimeline, Donut, Gauge, Spark, TIMELINE_LEGEND, type DonutPart } from '../ui/charts';
import { SubtaskTile } from '../ui/controls';
import { GlassIcon, LineIcon, Robot, Sparkles, type IconName } from '../ui/icons';
import { ButtonLink, Chip, CountUp, Label, Legend, List, PageHeader, PageMain, Section, SegControl, TextLink } from '../ui/primitives';
import { TINTS } from '../ui/tints';

// 排队灰 #5C616B（画布 v20）：tints.ts 没有中性灰、src/ui 是 F-07 定稿不改，这一处单独命名，避免散落的内联十六进制。
const QUEUE = '#5C616B';
const STATE_COLOR = { done: TINTS.green.base, doing: TINTS.blue.base, you: TINTS.amber.base, queue: QUEUE } as const;


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
  const pill = { doing: { bg: 'rgba(79,140,255,.26)', bd: TINTS.blue.base, cls: 'pill-run' }, you: { bg: 'rgba(227,160,8,.25)', bd: TINTS.amber.base, cls: 'breathe' } } as const;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <Link to={R.breakdown} className="card today-card" style={{ flex: '1.15 1 260px', position: 'relative', display: 'flex', alignItems: 'center', gap: 20 }}>
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
      <Link to={R.metrics} className="card today-card" style={{ flex: '0.9 1 240px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <CornerIcon name="Metrics" />
        <span className="lbl" style={{ alignSelf: 'flex-start' }}>
          {`${firstPass.name} · 本周`}
        </span>
        <Gauge value={firstPass.values[firstPass.values.length - 1]} base={firstPass.base} label={firstPass.name} />
      </Link>
      <Link to={R.agents} className="card today-card" style={{ flex: '1.1 1 260px', position: 'relative', display: 'flex', flexDirection: 'column', gap: 12 }}>
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
      <Link to={R.live} className="card today-card" style={{ flex: '1 1 260px', position: 'relative', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <CornerIcon name="Live" />
        <span className="lbl">网关 · 今天</span>
        <div className="stat">
          <span className="muted" style={{ fontSize: 12 }}>
            调用次数
          </span>
          <span style={{ fontSize: 30 }}>{formatNumber(gw.calls)}</span>
        </div>
        <div title="近 60 分钟调用量">
          <Spark values={gw.lastHour} width={220} height={46} color={TINTS.violet.base} />
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

const RISK = TINTS.rose.base;

/** Placeholder block in a phone thumbnail; `strong` stacks a second .bar for the brighter hero block. */
function ThumbBar({ h, strong, style }: { h: number; strong?: boolean; style?: CSSProperties }) {
  return <span className="bar" style={{ height: h, borderRadius: 2, ...style }}>{strong && <span className="bar" style={{ display: 'block', height: '100%', borderRadius: 0 }} />}</span>;
}

function PhoneThumb({ diff }: { diff?: boolean }) {
  return (
    <div aria-hidden="true" className="screen" style={{ width: 56, height: 98, borderRadius: 11, borderWidth: 4, padding: 4, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 4, position: 'relative' }}>
      <ThumbBar h={8} />
      <ThumbBar h={22} strong />
      <span style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
        <ThumbBar h={16} />
        <ThumbBar h={16} />
      </span>
      {diff ? (
        <span style={{ position: 'absolute', left: 3, right: 3, bottom: 6, height: 12, border: `1.5px solid ${RISK}`, borderRadius: 2, background: `${RISK}14` }} />
      ) : (
        <ThumbBar h={8} style={{ marginTop: 'auto' }} />
      )}
    </div>
  );
}

/** Checkpoint battery for a stuck subtask: passed cells green, the one it is stuck at amber. */
function StuckCheckpoints({ passed, label }: { passed: number; label: string }) {
  return (
    <div className="cp5" role="img" aria-label={label} style={{ width: 120 }}>
      {CHECKPOINTS.map((name, i) => (
        <span key={name} className={i < passed ? 'cp-done' : i === passed ? 'cp-you' : undefined} />
      ))}
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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-start' }}>
        <div style={{ flex: '1.5 1 360px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Label>{`阻塞任务 · ${blocking.length}`}</Label>
          {blocking.map((it) => {
            const act = BLOCKING_ACTION[it.kind] ?? { tone: 'you' as const, button: '处理' };
            const w = waitState(d, it.waitedMin);
            const sub = it.refs?.subtask ? findSubtask(d, it.refs.subtask) : undefined;
            return (
              <div key={it.id} className="raised" style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 8, ...(w.overdue ? { borderColor: `${RISK}73` } : {}) }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                  <Chip tone={act.tone} live>
                    {it.kind}
                  </Chip>
                  <span className={w.overdue ? 'overdue' : 's-you'} style={{ fontSize: 14, fontWeight: 700, background: 'none' }}>
                    {w.label}
                  </span>
                </div>
                <span style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.5 }}>{it.title}</span>
                <span className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
                  {it.summary}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                  <ButtonLink primary to={attentionHref(it)}>
                    {act.button}
                  </ButtonLink>
                  {sub && (
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span className="muted" style={{ fontSize: 12 }}>
                        {`${sub.id} 停在检查点 ${sub.checkpoint + 1} / ${CHECKPOINTS.length}`}
                      </span>
                      <StuckCheckpoints passed={sub.checkpoint} label={`${sub.id} 已过 ${sub.checkpoint} 个检查点，停在第 ${sub.checkpoint + 1} 个`} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Label>{`不阻塞 · ${rest.length}`}</Label>
          <div className="raised" style={{ padding: '2px 16px 4px' }}>
            <List
              items={confirm.map((it) => ({
                key: it.id,
                main: (
                  <>
                    <Chip tone={ATTENTION_TONE[it.kind]}>{it.kind}</Chip> {it.title}
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
                    <Chip tone={ATTENTION_TONE[it.kind]}>{it.kind}</Chip> <span style={{ fontWeight: 500 }}>{it.title}</span>
                  </span>
                  <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                    {it.summary}
                  </span>
                  <span className={w.overdue ? 'overdue' : 'muted'} style={{ fontSize: 12 }}>
                    {w.label}
                  </span>
                  <span style={{ fontSize: 13, color: TINTS.violet.base }}>去看截图 →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, margin: '16px 0 0', fontSize: 12 }}>
        <span className="muted">
          {`在等你的 agent：${waiting.map(([a, m]) => `${a.name} ${m} 分钟`).join('，')}，今天合计 `}
          <span className="s-you" style={{ background: 'none', fontWeight: 600 }}>
            {formatDuration(waitedTotal)}
          </span>
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
            [{ background: STATE_COLOR.done }, `完成 ${c.done}`],
            [{ background: STATE_COLOR.doing }, `进行中 ${c.doing}`],
            [{ background: STATE_COLOR.you }, `等待你 ${c.you}`],
            [{ background: 'transparent', border: `1px dashed ${QUEUE}` }, `排队 ${c.queue}`],
          ]}
        />
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {d.projects.map((p) => {
          const preqs = brokenDownRequirements(d, p.id);
          const subs = preqs.flatMap((r) => subtasksOf(d, r.id));
          return (
            <div key={p.id} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'start', padding: '14px 0', borderTop: '1px solid rgba(255,255,255,.06)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0)' }}>
              <div style={{ flex: '0 0 240px', display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 6 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{p.name}</span>
                  <Chip tone={p.line === '主线' ? 'doing' : 'queue'}>{p.line}</Chip>
                </div>
                <span className="muted" style={{ fontSize: 12 }}>
                  {subs.length ? `子任务完成 ${countStates(subs).done} / ${subs.length}` : '没有进行中的需求'}
                </span>
              </div>
              <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
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

function greeting(now: ClockTime) {
  const h = Math.floor(toMinutes(now) / 60);
  return h < 5 ? '夜深了' : h < 11 ? '早上好' : h < 13 ? '中午好' : h < 18 ? '下午好' : '晚上好';
}

/** Weeks in a row, up to this week, with zero repeated errors. */
function zeroRepeatWeeks(d: ConsoleData) {
  const values = d.observation.coreMetrics.find((m) => m.id === 'repeats')?.values ?? [];
  let n = 0;
  while (n < values.length && values[values.length - 1 - n] === 0) n += 1;
  return n;
}

function StreakTag({ weeks }: { weeks: number }) {
  return (
    <Link to={R.weekly} style={{ textDecoration: 'none' }}>
      <span className="s-you" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, lineHeight: '22px', padding: '0 10px 0 8px', borderRadius: 999, border: '1px solid color-mix(in srgb, currentColor 35%, transparent)' }}>
        <LineIcon name="Trophy" size={14} strokeWidth={2} />
        {`连续 ${weeks} 周零重复错误`}
      </span>
    </Link>
  );
}

export default function Overview() {
  const d = useData();
  const blocking = attentionIn(d, '阻塞任务').length;
  const needs = d.attention.filter((a) => a.group !== '抽检与复验').length;
  const ag = countAgents(d.agents);
  const streak = zeroRepeatWeeks(d);
  return (
    <PageMain>
      <PageHeader
        icon="Main"
        title="全局总览"
        sub={
          <>
            {`${greeting(d.workspace.now)}。${needs} 件事在等你，其中 ${blocking} 件正在阻塞任务 · ${ag.doing} 个 agent 在工作，${ag.you} 个在等你`}
            {streak > 0 && (
              <span style={{ display: 'block', marginTop: 10 }}>
                <StreakTag weeks={streak} />
              </span>
            )}
          </>
        }
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

