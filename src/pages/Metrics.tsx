import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../data';
import { formatNumber } from '../data/selectors';
import { GroupedBars, LineChart } from '../ui/charts';
import { Chip, Col, DataTable, Grid, Legend, List, PageHeader, PageMain, Row, Section } from '../ui/primitives';

// Time windows for the core-metric charts. 近 12 周 is the full 12-week dataset; 近 4 周 trims to the tail.
const RANGES = [
  { label: '近 4 周', weeks: 4 },
  { label: '近 12 周', weeks: 12 },
  { label: '全部', weeks: Infinity },
] as const;

export default function Metrics() {
  const d = useData();
  const o = d.observation;
  const fc = o.failureCheck;
  const effortWeeks = o.weeks.slice(o.stage1aWeek);
  const crossWeek = effortWeeks[o.effortSeries.output.findIndex((v, i) => v > o.effortSeries.input[i])];
  const totalKnowledge = d.knowledgeSummary.layers.reduce((s, l) => s + l.counts.已确认, 0);
  const [range, setRange] = useState(1);
  // Slice the shared weeks axis to the chosen window; each metric's values slice to the same tail length.
  const span = Math.min(RANGES[range].weeks, o.weeks.length);
  const from = o.weeks.length - span;
  const weeks = o.weeks.slice(from);
  const markerInWindow = o.stage1aWeek >= from ? o.stage1aWeek - from : undefined;

  return (
    <PageMain>
      <PageHeader
        icon="Metrics"
        title="指标"
        sub="只保留能回答“知识库有没有用”的指标。先有基线，再看变化；小心指标变成目标后失去意义"
        right={
          <div className="seg" role="group" aria-label="时间范围">
            {RANGES.map((r, i) => (
              <button key={r.label} type="button" aria-pressed={i === range} onClick={() => setRange(i)}>
                {r.label}
              </button>
            ))}
          </div>
        }
      />
      <section className="tier1" aria-labelledby="fj-h" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, alignItems: 'flex-end' }}>
          <div>
            <h2 id="fj-h" style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
              {`失败判定 · ${fc.deadline}`}
            </h2>
            <p className="muted" style={{ margin: '4px 0 0', fontSize: 13 }}>
              运行三个月后，下面任一条不满足就停下重新评估，而不是继续投入
            </p>
          </div>
          <span style={{ fontSize: 13 }}>{`已运行 ${fc.daysRun} / ${fc.daysTotal} 天`}</span>
        </div>
        <div className="bar" role="img" aria-label={`已运行 ${fc.daysRun} 天，共 ${fc.daysTotal} 天`}>
          <div className="fill f-doing" style={{ width: `${Math.round((fc.daysRun / fc.daysTotal) * 100)}%` }} />
        </div>
        <Grid min={240}>
          {fc.criteria.map((c) => (
            <div key={c.text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <Chip tone={c.met ? 'done' : 'risk'}>{c.met ? '满足' : '不满足'}</Chip>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{c.text}</span>
                <span className="muted" style={{ fontSize: 12 }}>
                  {c.evidence}
                </span>
              </div>
            </div>
          ))}
        </Grid>
      </section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: 16 }}>
        {o.coreMetrics.map((m) => {
          const values = m.values.slice(from);
          const last = values[values.length - 1];
          return (
            <section key={m.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{m.name}</h3>
                <span style={{ fontSize: 22, fontWeight: 600 }}>{`${last}${m.unit}`}</span>
              </div>
              <span className="muted" style={{ fontSize: 12 }}>
                {m.question}
              </span>
              <LineChart values={values} labels={weeks} base={m.base} baseLabel={`基线 ${m.base}${m.unit}`} lo={m.range[0]} hi={m.range[1]} unit={m.unit} marker={markerInWindow} markerLabel="阶段 1a" desc={`${m.name}，${weeks[0]} 到 ${weeks[weeks.length - 1]} 从 ${values[0]}${m.unit} 到 ${last}${m.unit}，基线 ${m.base}${m.unit}`} />
            </section>
          );
        })}
      </div>
      <Row>
        <Col flex="1.2 1 520px">
          <Section id="roi-h" title="投入产出" sub="从阶段 1a 开始">
            <GroupedBars
              labels={effortWeeks}
              max={8}
              desc="每周投入与产出估算（小时）"
              series={[
                { name: '投入', color: '#5C616B', values: o.effortSeries.input },
                { name: '产出估算', color: '#7C6CFF', values: o.effortSeries.output },
              ]}
            />
            <Legend
              items={[
                [{ background: '#5C616B' }, '投入：每周花在知识库上的时间'],
                [{ background: '#7C6CFF' }, '产出估算：少返工、少纠错折算的时间'],
              ]}
            />
            <p className="muted" style={{ margin: '8px 0 0', fontSize: 12 }}>
              {`折算很粗略，只看趋势。${crossWeek} 起产出超过投入`}
            </p>
          </Section>
        </Col>
        <Col flex="1 1 360px">
          <Section id="stg-h" title="阶段进度">
            <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
              {o.roadmap.map((s) => (
                <li key={s.name} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, padding: '10px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{s.name}</span>
                    <span className="muted" style={{ fontSize: 12 }}>
                      {`进入下一阶段：${s.exit}`}
                    </span>
                  </div>
                  <Chip tone={s.state}>{s.note.replace('{count}', String(totalKnowledge))}</Chip>
                </li>
              ))}
            </ol>
          </Section>
        </Col>
      </Row>
      <Section id="att-h" title="溯源四层" sub="可信度从高到低">
        <List items={o.attribution.map((a, i) => ({ key: a.name, main: a.name, meta: a.desc, right: <Chip>{i === 0 ? `今天 ${formatNumber(o.gatewayToday.calls)} 次` : a.value}</Chip> }))} />
      </Section>
      <Section id="bl-h" title="监控盲区" sub="网关能保证 agent 写不乱，但不能保证你看得全。看不到的地方明确标出来">
        <DataTable minWidth={620} cols={['看不到什么', '补救', '本周']} rows={o.blindSpots.map((b) => [b.gap, b.remedy, b.link ? <Link to={b.link}>{b.week}</Link> : b.week])} />
      </Section>
      <Section id="ext-h" title="扩展指标" sub="数据足够后启用。指标只辅助判断实用性，不是实用性本身">
        <DataTable
          minWidth={600}
          widths={['90px', undefined]}
          cols={['类别', '当前值']}
          rows={o.extended.map((x) => [
            x.category,
            x.link ? (
              <>
                {`${x.value} · `}
                <Link to={x.link[1]}>{x.link[0]}</Link>
              </>
            ) : (
              x.value
            ),
          ])}
        />
      </Section>
    </PageMain>
  );
}
