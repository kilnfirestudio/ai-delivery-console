import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../data';
import type { GatewayApi } from '../data/types';
import { findSubtask, formatNumber, taskCode, toMinutes } from '../data/selectors';
import { Radar } from '../ui/icons';
import { Chip, DataTable, List, PageHeader, PageMain, Section } from '../ui/primitives';
import { TINTS } from '../ui/tints';

const clock = (min: number) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, '0')}`;

/** 接口筛选项：短标签 → 网关接口值（空 = 全部）。 */
const API_FILTERS: { label: string; api?: GatewayApi }[] = [
  { label: '全部接口' },
  { label: '查询', api: '查询知识' },
  { label: '引用', api: '登记引用' },
  { label: '候选', api: '提交候选' },
  { label: '求助', api: '求助' },
  { label: '结果', api: '回报结果' },
];
const RESULT_FILTERS = ['全部结果', '只看拒绝与异常'];

/** 分段筛选器：复用 design-system 的 .seg 样式，加上受控选中逻辑。 */
function Seg({ label, options, active, onPick }: { label: string; options: string[]; active: number; onPick: (i: number) => void }) {
  return (
    <div className="seg" role="group" aria-label={label}>
      {options.map((o, i) => (
        <button key={o} type="button" aria-pressed={i === active} onClick={() => onPick(i)}>
          {o}
        </button>
      ))}
    </div>
  );
}

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

  const [apiIdx, setApiIdx] = useState(0);
  const [resultIdx, setResultIdx] = useState(0);
  const pickedApi = API_FILTERS[apiIdx].api;
  const onlyRisk = resultIdx === 1;
  const shown = calls.filter((c) => (!pickedApi || c.api === pickedApi) && (!onlyRisk || c.tone === 'risk'));

  // 读数屏：value 用 .num（#F5F6F7），拒绝/超时用 design-system 状态色（tints），无内联十六进制。
  const readouts: { label: string; value: string | number; note: string; tone?: 'risk' | 'warn' }[] = [
    { label: '今天调用', value: formatNumber(g.calls), note: Object.entries(g.byKind).map(([k, v]) => `${k} ${v}`).join(' · ') },
    { label: '活跃会话', value: g.activeSessions, note: `${d.agents.length} 个身份` },
    { label: 'p95 延迟', value: `${g.p95Ms} ms`, note: `目标 ${g.p95TargetMs} ms 以内` },
    { label: '拒绝', value: g.rejected, note: rejects.map((c) => (c.result.includes('密钥') ? '密钥扫描 1' : '越权 1')).reverse().join(' · '), tone: 'risk' },
    { label: '超时', value: g.timeouts, note: `${g.timeoutWindow} · 计入零调用`, tone: 'warn' },
    { label: '限流', value: g.rateLimited, note: '' },
  ];
  const valueColor = (tone?: 'risk' | 'warn') => (tone === 'risk' ? TINTS.rose.base : tone === 'warn' ? TINTS.amber.base : undefined);

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
                  <span className="muted" style={{ fontSize: 12 }}>{r.label}</span>
                  <span className="num" style={{ fontSize: 28, color: valueColor(r.tone) }}>{r.value}</span>
                  <span className="muted" style={{ fontSize: 11 }}>{r.note}</span>
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
                return <span key={i} className={last ? 'lastbar' : undefined} title={`${clock(start + i)} · ${v} 次`} style={{ flex: 1, height: `${Math.round((v / scaleMax) * 100)}%`, background: last ? TINTS.violet.light : TINTS.violet.base, borderRadius: '2px 2px 0 0', animationDelay: `${i * 14}ms` }} />;
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
          <Seg label="接口" options={API_FILTERS.map((f) => f.label)} active={apiIdx} onPick={setApiIdx} />
          <Seg label="结果" options={RESULT_FILTERS} active={resultIdx} onPick={setResultIdx} />
        </div>
        <DataTable
          minWidth={980}
          rowClass={(i) => (shown.length && i === 0 ? 'flash' : undefined)}
          cols={['时间', '身份', '任务', '接口', '内容', '结果', '延迟']}
          rows={
            shown.length
              ? shown.map((c) => [
                  <span className="mono">{c.time}</span>,
                  <span className="mono">{c.identity}</span>,
                  <span className="mono">{c.task}</span>,
                  c.api,
                  c.content,
                  <Chip tone={c.tone}>{c.result}</Chip>,
                  <span className="mono">{`${c.latencyMs} ms`}</span>,
                ])
              : [[<span className="muted">没有符合当前筛选的调用</span>, '', '', '', '', '', '']]
          }
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
