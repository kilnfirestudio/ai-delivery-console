import { Fragment, type ReactNode } from 'react';
import { useData } from '../data';
import { BarList } from '../ui/charts';
import { FlowArrow } from '../ui/icons';
import { Chip, Col, DataTable, PageHeader, PageMain, Row, Section, Stage } from '../ui/primitives';

function FlowColumn({ title, big, children }: { title: string; big: string; children: ReactNode }) {
  return (
    <div className="well" style={{ borderRadius: 10, padding: 14, display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
      <span className="lbl">{title}</span>
      <span style={{ fontSize: 24, fontWeight: 600 }}>{big}</span>
      {children}
    </div>
  );
}

function KV({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <>
      {rows.map(([a, b]) => (
        <div key={a} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
          <span className="muted">{a}</span>
          <span style={{ fontWeight: 500 }}>{b}</span>
        </div>
      ))}
    </>
  );
}

const sum = (rows: [string, number][]) => rows.reduce((s, [, v]) => s + v, 0);

export default function Pipeline() {
  const d = useData();
  const p = d.pipeline;
  const w = p.week;
  const rh = d.reviewHealth;
  const byRule = d.observation.delegation.confirmedThisWeek;
  const k = d.weeklyReview.knowledge;
  const processed = rh.reviewed + byRule;
  const stored = k.added + k.revised.length + k.superseded.length + k.merged;
  const imp = p.import;
  const confirmed = imp.funnel[imp.funnel.length - 1][1];
  const usedPct = Math.round((p.budget.usedYuan / p.budget.limitYuan) * 100);
  const columns = [
    <FlowColumn key="1" title="1 采集 · 原始证据" big={`${sum(w.evidenceBySource)} 份`}>
      <BarList items={w.evidenceBySource} max={Math.max(...w.evidenceBySource.map(([, v]) => v))} labelWidth={100} />
    </FlowColumn>,
    <FlowColumn key="2" title="2 处理层提炼" big={`${sum(w.runsByKind)} 次运行`}>
      <KV rows={w.runsByKind.map(([k, v]) => [k, String(v)])} />
    </FlowColumn>,
    <FlowColumn key="3" title="3 候选" big={`${sum(w.candidatesBySource)} 条`}>
      <KV rows={w.candidatesBySource.map(([k, v]) => [k, String(v)])} />
    </FlowColumn>,
    <FlowColumn key="4" title="4 确认" big={`${processed} 条已处理`}>
      <KV
        rows={[
          ['你审核', `${rh.reviewed}（确认 ${rh.reviewed - rh.rejected} · 驳回 ${rh.rejected}）`],
          ['委托规则', String(byRule)],
          ['仍在候选区', String(w.stillPending)],
        ]}
      />
    </FlowColumn>,
    <FlowColumn key="5" title="5 入库" big={`${stored} 条`}>
      <KV
        rows={[
          ['新增条目', String(k.added)],
          ['修订', String(k.revised.length)],
          ['取代', String(k.superseded.length)],
          ['并入已有条目作证据', String(k.merged)],
        ]}
      />
    </FlowColumn>,
  ];

  return (
    <PageMain>
      <PageHeader icon="Pipeline" title="采集与处理" sub="数据从哪来、怎么变成候选、最后有多少成了知识" />
      <Section id="pf-h" title="本周流量" sub="原始证据只追加；处理层只写候选区和索引，从不直接写 git" right={<Stage>持续采集与处理层全量 · 阶段 3</Stage>}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 24px 1fr 24px 1fr 24px 1.1fr 24px 1.1fr', gap: 6, alignItems: 'stretch', overflowX: 'auto' }}>
          {columns.map((col, i) => (
            <Fragment key={i}>
              {i > 0 && <FlowArrow />}
              {col}
            </Fragment>
          ))}
        </div>
      </Section>
      <Row>
        <Col flex="1.6 1 600px">
          <Section id="ps-h" title="来源" sub="入口即标注来源、时间、项目、可见范围、可信度">
            <DataTable minWidth={860} cols={['来源', '采集方式', '设备', '最近同步', '本周', '状态']} rows={p.sources.map((x) => [x.name, x.method, x.device, x.lastSync, x.week, <Chip tone={x.tone}>{x.status}</Chip>])} />
          </Section>
        </Col>
        <Col flex="1 1 320px">
          <Section id="pi-h" title="批量导入" right={<Chip tone={imp.pending ? 'doing' : 'done'}>{imp.pending ? '进行中' : '已完成'}</Chip>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <BarList items={imp.funnel} max={imp.funnel[0][1]} labelWidth={90} />
            </div>
            <p className="muted" style={{ margin: '12px 0 0', fontSize: 12, lineHeight: 1.6 }}>
              {`${imp.name}。已确认 ${confirmed} · 驳回 ${imp.rejected} · 待审 ${imp.pending}。历史数据选择性导入，不整包倒进来`}
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button className="btn" type="button">{`继续审核 ${imp.pending} 条`}</button>
              <button className="btn" type="button">
                新建导入
              </button>
            </div>
          </Section>
        </Col>
      </Row>
      <Section id="pr-h" title="处理运行" sub="每次运行都记录为独立活动：模型、提示词版本、输入。质量出问题时能定位到哪次运行">
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
          <span>{`本月成本 ¥${p.budget.usedYuan} / ¥${p.budget.limitYuan}`}</span>
          <span className="muted">{`本地模型承担 ${Math.round(p.budget.localShare * 100)}% 的运行`}</span>
        </div>
        <div className="bar" role="img" aria-label={`预算已用 ${usedPct}%`}>
          <div className="fill f-doing" style={{ width: `${usedPct}%` }} />
        </div>
        <div style={{ height: 16 }} />
        <DataTable minWidth={900} cols={['编号', '类型', '输入', '模型 · 提示词版本', '用时', '成本', '产出']} rows={p.runs.map((r) => [<span className="mono">{r.id}</span>, r.kind, r.input, r.model, r.time, `¥${r.cost}`, r.output])} />
      </Section>
    </PageMain>
  );
}
