import { Link } from 'react-router-dom';
import { R } from '../app/routes';
import { useData, type Agent, type ConsoleData } from '../data';
import { AGENT_ROBOT, AGENT_STATUS_LABEL, AGENT_STATUS_TONE, agentNow, countAgents, findSubtask, nextCheckpoint } from '../data/selectors';
import { AgentTimeline, TIMELINE_LEGEND } from '../ui/charts';
import { Robot } from '../ui/icons';
import { CheckpointBar, Chip, Label, PageHeader, PageMain, Section } from '../ui/primitives';

const EMPTY_CARD = { background: 'transparent', borderStyle: 'dashed', color: '#A1A6B0' } as const;

function ActiveCard({ d, a }: { d: ConsoleData; a: Agent }) {
  const s = a.activeSubtask ? findSubtask(d, a.activeSubtask) : undefined;
  if (!s) {
    return (
      <div className="tc" style={EMPTY_CARD}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          <span className="mono">—</span>
          <span className="muted" style={{ fontSize: 12 }} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.5 }}>{a.idleText}</span>
        <CheckpointBar passed={0} tone="doing" />
        <span style={{ fontSize: 12 }} />
        <span style={{ fontSize: 12, lineHeight: 1.5 }} />
      </div>
    );
  }
  const you = a.status === 'you';
  const project = d.projects.find((p) => p.id === d.requirements.find((r) => r.id === s.requirementId)?.projectId);
  return (
    <Link className="tc" to={R.task} style={you ? { borderColor: 'rgba(227,160,8,.45)', background: 'rgba(227,160,8,.06)' } : undefined}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <span className="mono">{s.id}</span>
        <span className="muted" style={{ fontSize: 12 }}>
          {project?.short}
        </span>
      </div>
      <span style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.5 }}>{s.title}</span>
      <CheckpointBar passed={s.checkpoint} tone={you ? 'you' : 'doing'} label={`${s.id} 检查点 ${s.checkpoint} / 5`} />
      <span style={{ fontSize: 12 }}>{`检查点 ${s.checkpoint} / 5 · ${nextCheckpoint(s)}`}</span>
      <span style={{ fontSize: 12, lineHeight: 1.5, ...(you ? { color: '#F2C14E', fontWeight: 500 } : { color: '#A1A6B0' }) }}>{a.activeNote}</span>
    </Link>
  );
}

function AgentLane({ d, a }: { d: ConsoleData; a: Agent }) {
  return (
    <section className="lane" aria-label={a.name}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Robot state={AGENT_ROBOT[a.status]} size={38} />
            <h2 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{a.name}</h2>
          </div>
          <p className="muted" style={{ margin: '2px 0 0', fontSize: 12 }}>
            {`${a.tool} · ${a.host}${a.local ? ' 本地' : ''}`}
          </p>
        </div>
        <Chip tone={AGENT_STATUS_TONE[a.status]}>{AGENT_STATUS_LABEL[a.status]}</Chip>
      </div>
      <p className="muted" style={{ margin: 0, fontSize: 12, lineHeight: 1.5 }}>
        {`权限：${a.scope}`}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, background: '#16171A', borderRadius: 8, padding: '8px 10px' }}>
        {[
          ['本周完成', a.week.done],
          ['一次通过', a.week.firstPass],
          ['求助', a.week.helps],
        ].map(([k, v]) => (
          <div key={k} className="stat">
            <span className="muted" style={{ fontSize: 11 }}>
              {k}
            </span>
            <span style={{ fontSize: 14, fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
      <Label>正在做</Label>
      <ActiveCard d={d} a={a} />
      <Label>排队</Label>
      {a.queue.length ? (
        a.queue.map((q) => (
          <div key={q.ref} className="tc">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
              <span className="mono">{q.ref}</span>
              <span className="muted" style={{ fontSize: 12 }}>
                {q.project}
              </span>
            </div>
            <span style={{ fontSize: 13, lineHeight: 1.5 }}>{q.title}</span>
          </div>
        ))
      ) : (
        <div className="tc" style={EMPTY_CARD}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
            <span className="mono">—</span>
          </div>
          <span style={{ fontSize: 13, lineHeight: 1.5 }}>暂无</span>
        </div>
      )}
      <Label>今天做完</Label>
      {a.finished.map((f) => (
        <div key={f.ref} className="tc" style={{ background: 'transparent' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
            <span className="mono">{f.ref}</span>
            <Chip tone={f.result === '一次通过' ? 'done' : 'you'}>{f.result}</Chip>
          </div>
          <span className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
            {f.title}
          </span>
        </div>
      ))}
    </section>
  );
}

export default function Agents() {
  const d = useData();
  const c = countAgents(d.agents);
  const sum = (f: (a: Agent) => number) => d.agents.reduce((s, a) => s + f(a), 0);
  const done = sum((a) => a.week.done);
  const firstPass = sum((a) => Number(a.week.firstPass.split(' / ')[0]));
  return (
    <PageMain>
      <PageHeader
        icon="Agents"
        title="Agent 看板"
        sub="每个 agent 一列：正在做的、排队的、今天做完的。身份由网关登记，文件范围由工具 hook 和提交检查执行"
        right={
          <>
            <Chip tone="doing">{`进行中 ${c.doing}`}</Chip>
            <Chip tone="you">{`等待你 ${c.you}`}</Chip>
            <Chip>{`待命或空闲 ${c.idle + c.standby}`}</Chip>
          </>
        }
      />
      <Section id="atl-h" title="今日时间轴" sub="并行情况一眼看清：蓝色在做，橙色在等你，空白是空闲" right={TIMELINE_LEGEND}>
        <AgentTimeline lanes={d.agents.map((a) => ({ agent: a, now: agentNow(d, a) }))} now={d.workspace.now} />
      </Section>
      <section className="card" aria-label="本周汇总" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
        {(
          [
            ['本周完成子任务', done],
            ['一次通过', `${firstPass} / ${done}`],
            ['求助', sum((a) => a.week.helps)],
            ['越界修改被拦下', d.observation.agentWeek.outOfScopeBlocked],
            ['引用核验不一致', d.observation.agentWeek.citationMismatches],
          ] as const
        ).map(([label, value]) => (
          <div key={label} className="stat">
            <span className="muted" style={{ fontSize: 13 }}>
              {label}
            </span>
            <span style={{ fontSize: 24, fontWeight: 600 }}>{value}</span>
          </div>
        ))}
      </section>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, alignItems: 'start' }}>
        {d.agents.map((a) => (
          <AgentLane key={a.id} d={d} a={a} />
        ))}
      </div>
    </PageMain>
  );
}
