import { Link } from 'react-router-dom';
import { useData } from '../data';
import { findSubtask, formatNumber, taskCode, toMinutes } from '../data/selectors';
import { Radar } from '../ui/icons';
import { Chip, DataTable, List, PageHeader, PageMain, Section, SegControl } from '../ui/primitives';

const clock = (min: number) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, '0')}`;

export default function Live() {
  const d = useData();
  const g = d.observation.gatewayToday;
  const calls = d.observation.gatewayCalls;
  const now = toMinutes(d.workspace.now);
  const perMin = g.lastHour;
  const start = now - perMin.length;
  const peak = Math.max(...perMin);
  const avg = Math.round(perMin.reduce((a, b) => a + b, 0) / perMin.length);
  const scaleMax = Math.ceil(peak / 10) * 10 + 10;
  const rejects = calls.filter((c) => c.result.startsWith('拒绝'));
  const readouts = [
    { label: '今天调用', value: formatNumber(g.calls), note: Object.entries(g.byKind).map(([k, v]) => `${k} ${v}`).join(' · '), color: '#F5F6F7' },
    { label: '活跃会话', value: g.activeSessions, note: `${d.agents.length} 个身份`, color: '#F5F6F7' },
    { label: 'p95 延迟', value: `${g.p95Ms} ms`, note: `目标 ${g.p95TargetMs} ms 以内`, color: '#F5F6F7' },
    { label: '拒绝', value: g.rejected, note: rejects.map((c) => (c.result.includes('密钥') ? '密钥扫描 1' : '越权 1')).reverse().join(' · '), color: '#FF7B72' },
    { label: '超时', value: g.timeouts, note: `${g.timeoutWindow} · 计入零调用`, color: '#F2C14E' },
    { label: '限流', value: g.rateLimited, note: '', color: '#F5F6F7' },
  ];

  return (
    <PageMain>
      <PageHeader
        icon="Live"
        title="实时调用"
        sub="所有 agent 对网关的读写，按时间倒序。每次调用都带身份和任务编号，规则与证据分开返回"
        right={
          <Chip tone="done" live>
            实时 · 每 5 秒刷新
          </Chip>
        }
      />
      <Section id="lv-h" title="现在">
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <Radar size={116} />
          <div className="screen" role="group" aria-label="实时读数" style={{ flex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px 0', marginLeft: -16 }}>
              {readouts.map((r) => (
                <div key={r.label} style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '4px 16px', borderLeft: '1px solid rgba(255,255,255,.06)' }}>
                  <span style={{ fontSize: 12, color: '#8A8F98' }}>{r.label}</span>
                  <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-.02em', color: r.color }}>{r.value}</span>
                  <span style={{ fontSize: 11, color: '#8A8F98' }}>{r.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div role="img" aria-label={`近 60 分钟每分钟调用量，平均约 ${avg} 次，${clock(start + perMin.indexOf(peak))} 出现峰值 ${peak} 次`} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div className="vbars" style={{ height: 90, display: 'flex', alignItems: 'flex-end', gap: 2, borderBottom: '1px solid rgba(255,255,255,.12)' }}>
              {perMin.map((v, i) => {
                const last = i === perMin.length - 1;
                return <span key={i} className={last ? 'lastbar' : undefined} title={`${clock(start + i)} · ${v} 次`} style={{ flex: 1, height: `${Math.round((v / scaleMax) * 100)}%`, background: last ? '#B4A9FF' : '#6E5CF6', borderRadius: '2px 2px 0 0', animationDelay: `${i * 14}ms` }} />;
              })}
            </div>
            <div className="muted" style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
              <span>{clock(start)}</span>
              <span>{clock(start + perMin.length / 2)}</span>
              <span>{d.workspace.now}</span>
            </div>
          </div>
        </div>
      </Section>
      <Section id="la-h" title="需要注意" sub="网关看不到的地方，用反向指标补上" style={{ borderColor: 'rgba(227,160,8,.45)' }}>
        <List
          items={d.observation.gatewayAlerts.map((a) => ({
            key: a.title,
            main: (
              <>
                <Chip tone="you">{a.kind}</Chip> {a.title}
              </>
            ),
            meta: a.detail,
            right: (
              <Link to={a.link[1]} style={{ fontSize: 13 }}>
                {a.link[0]}
              </Link>
            ),
          }))}
        />
      </Section>
      <Section id="ls-h" title="调用流水">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
          <SegControl label="接口" options={['全部接口', '查询', '引用', '候选', '求助', '结果']} />
          <SegControl label="结果" options={['全部结果', '只看拒绝与异常']} />
        </div>
        <DataTable
          minWidth={980}
          rowClass={(i) => (i === 0 ? 'flash' : undefined)}
          cols={['时间', '身份', '任务', '接口', '内容', '结果', '延迟']}
          rows={calls.map((c) => [
            <span className="mono">{c.time}</span>,
            <span className="mono">{c.identity}</span>,
            <span className="mono">{c.task}</span>,
            c.api,
            c.content,
            <Chip tone={c.tone}>{c.result}</Chip>,
            <span className="mono">{`${c.latencyMs} ms`}</span>,
          ])}
        />
      </Section>
      <Section id="li-h" title="身份与权限" sub="每个 agent 独立身份，按任务类型限制可读范围和写权限（最小权限）">
        <DataTable
          minWidth={900}
          cols={['身份', '角色', '工具 · 设备', '可读', '可写', '当前任务', '最近调用']}
          rows={d.observation.identities.map((idn) => {
            const a = d.agents.find((x) => x.id === idn.agentId)!;
            const s = a.activeSubtask ? findSubtask(d, a.activeSubtask) : undefined;
            return [<span className="mono">{idn.agentId}</span>, idn.role, `${a.tool} · ${a.host}`, idn.reads, idn.writes, s ? taskCode(s) : '—', idn.lastCall];
          })}
        />
      </Section>
    </PageMain>
  );
}
