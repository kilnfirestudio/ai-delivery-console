import { Link } from 'react-router-dom';
import { R } from '../app/routes';
import { useData, type ErrorCause, type Tone } from '../data';
import { reviewQueue } from '../data/selectors';
import { Chip, DataTable, List, PageHeader, PageMain, Section, Stat, StatsGrid } from '../ui/primitives';

const CAUSES: ErrorCause[] = ['知识缺失', '知识错误', '执行失误', '需求理解', '外部变化'];
const CAUSE_TONE: Record<ErrorCause, Tone> = { 知识缺失: 'you', 知识错误: 'risk', 执行失误: 'queue', 需求理解: 'queue', 外部变化: 'queue' };
const STEPS = ['看结果', '过错误', '处理知识', '调参', '记投入'];
const GOOD = { color: '#56D364' };

export default function Weekly() {
  const d = useData();
  const w = d.weeklyReview;
  const m = Object.fromEntries(d.observation.coreMetrics.map((x) => [x.id, x]));
  const last = (id: string) => m[id].values[m[id].values.length - 1];
  const prev = (id: string) => m[id].values[m[id].values.length - 2];
  const done = d.agents.reduce((s, a) => s + a.week.done, 0);
  const firstPass = d.agents.reduce((s, a) => s + Number(a.week.firstPass.split(' / ')[0]), 0);
  const helps = d.agents.reduce((s, a) => s + a.week.helps, 0);
  const delivered = d.requirements.filter((r) => r.deliveredAt);
  const zeroStreak = [...m.repeats.values].reverse().findIndex((v) => v !== 0);
  const causeCount = CAUSES.map((c) => [c, w.errors.filter((e) => e.cause === c).length] as const);
  const maxCause = Math.max(...causeCount.map(([, n]) => n));
  const stale = d.knowledgeSummary.layers.reduce((s, l) => s + l.counts.可能过时, 0);
  const pct = (a: number, b: number) => `${Math.round((a / b) * 100)}%`;

  return (
    <PageMain>
      <PageHeader
        icon="Weekly"
        title={`每周复盘 · ${w.week}`}
        sub={`${w.range} · 交付流程第 8 步“校正”。上次复盘 ${w.lastReview.date}，用时 ${w.lastReview.minutes} 分钟`}
        right={
          <ol aria-label="复盘步骤" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {STEPS.map((n, i) => (
              <li key={n}>
                <a href={`#w${i + 1}`} className="btn" aria-current={i + 1 === w.step ? 'step' : undefined}>
                  {`${i + 1} ${n}${i + 1 < w.step ? ' ✓' : ''}`}
                </a>
              </li>
            ))}
          </ol>
        }
      />
      <Section id="w1" title="1 · 本周结果" sub="和上周、和基线比">
        <StatsGrid
          min={150}
          items={[
            { label: '交付需求', value: delivered.length, note: delivered.map((r) => r.id).join('、') },
            { label: '完成子任务', value: done, note: `上周 ${w.completedLastWeek}` },
            { label: '一次通过', value: `${firstPass} / ${done}`, note: `${pct(firstPass, done)}，上周 ${prev('firstPass')}%` },
            { label: '返工', value: `${w.reworks.now} 轮`, note: `上周 ${w.reworks.last} 轮 · 基线 ${w.reworks.base}` },
            { label: '回归缺陷', value: last('regressions'), note: `上周 ${prev('regressions')} · 基线 ${m.regressions.base}` },
            { label: '纠错介入', value: last('corrections'), note: `上周 ${prev('corrections')} · 基线 ${m.corrections.base}` },
            { label: '求助介入', value: helps, note: '单独统计，不要求下降' },
            { label: '重复错误', value: last('repeats'), note: `连续 ${zeroStreak} 周为 0`, noteStyle: GOOD },
          ]}
        />
      </Section>
      <Section id="w2" title={`2 · 本周的返工与错误 · ${w.errors.length}`}>
        <div style={{ display: 'grid', gridTemplateColumns: '260px minmax(0, 1fr)', gap: 24, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p className="lbl">按原因</p>
            {causeCount.map(([c, n]) => (
              <div key={c} style={{ display: 'grid', gridTemplateColumns: '72px 1fr 20px', gap: 8, alignItems: 'center', fontSize: 13 }}>
                <span>{c}</span>
                <div style={{ height: 12, background: 'rgba(255,255,255,.05)', borderRadius: 3 }}>
                  <div className="fill" style={{ width: `${Math.round((n / maxCause) * 100)}%`, height: 12, background: '#6E5CF6', borderRadius: 3 }} />
                </div>
                <span style={{ textAlign: 'right' }}>{n}</span>
              </div>
            ))}
            <p className="muted" style={{ margin: '4px 0 0', fontSize: 12, lineHeight: 1.5 }}>
              归因由处理层初判，你确认。决策质量和结果质量分开看
            </p>
          </div>
          <DataTable
            minWidth={760}
            widths={['90px', undefined, '110px', undefined]}
            cols={['任务', '发生了什么', '归因', '处理']}
            rows={w.errors.map((e) => [<span className="mono">{e.task}</span>, e.what, <Chip tone={CAUSE_TONE[e.cause]}>{e.cause}</Chip>, e.action])}
          />
        </div>
      </Section>
      <Section id="w3" title="3 · 知识变化" sub={`本周确认的 ${w.knowledge.candidatesConfirmed} 条候选里，${w.knowledge.added} 条成为新条目，${w.knowledge.merged} 条作为证据并入已有条目`} style={{ borderColor: 'rgba(124,108,255,.5)', boxShadow: '0 0 0 1px rgba(124,108,255,.5)' }}>
        <StatsGrid
          min={140}
          items={[
            { label: '新增', value: w.knowledge.added },
            { label: '修订', value: w.knowledge.revised.length, note: w.knowledge.revised.join('、') },
            { label: '取代', value: w.knowledge.superseded.length, note: w.knowledge.superseded.join('、') },
            { label: '并入已有条目作证据', value: w.knowledge.merged },
            { label: '待复验', value: w.knowledge.recheck.length, note: w.knowledge.recheck.join('、'), noteStyle: { color: '#F2C14E' } },
            { label: '零调用超 30 天', value: w.knowledge.idle30d },
          ]}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
          <Link className="btn" to={R.knowledge}>{`处理可能过时的 ${stale} 条`}</Link>
          <Link className="btn" to={R.review}>{`待审 ${reviewQueue(d).length} 件`}</Link>
        </div>
      </Section>
      <Section id="w4" title="4 · 调参" sub={`元层每月调整一次，下次 ${w.nextTuning}；本周只记录提议`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
              <Chip tone="doing">提议</Chip>
              <span style={{ fontSize: 15, fontWeight: 600 }}>{w.proposal.title}</span>
            </div>
            <span style={{ fontSize: 14, lineHeight: 1.6 }}>{w.proposal.change}</span>
            <span className="muted" style={{ fontSize: 12, lineHeight: 1.6 }}>
              {w.proposal.basis}
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-p" type="button">
                采纳，生成 v4
              </button>
              <button className="btn" type="button">
                再观察 4 周
              </button>
            </div>
          </div>
          <List items={w.watch.map((x) => ({ key: x.title, main: x.title, meta: x.note, right: <Chip tone={x.verdict === '待看' ? 'you' : 'queue'}>{x.verdict}</Chip> }))} />
        </div>
      </Section>
      <Section id="w5" title="5 · 记投入">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, alignItems: 'end' }}>
          <div className="field">
            <label htmlFor="hrs">本周花在知识库上的时间（估计）</label>
            <input id="hrs" className="inp" defaultValue={`${w.effort.hours} 小时`} />
          </div>
          <Stat label="产出估算" value={`约 ${w.effort.outputHours} 小时`} note={w.effort.output} />
          <Stat label="投入 / 产出" value={(w.effort.hours / w.effort.outputHours).toFixed(2)} note={`连续 ${w.effort.ratioWeeksBelow1} 周小于 1`} noteStyle={GOOD} />
        </div>
        <p className="muted" style={{ margin: '12px 0 0', fontSize: 12 }}>
          折算很粗略，只看趋势。它是三个月后“失败判定”的依据之一
        </p>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <button className="btn btn-p" type="button">
            完成本周复盘
          </button>
        </div>
      </Section>
    </PageMain>
  );
}
