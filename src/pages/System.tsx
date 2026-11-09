import { useData, type ConsoleData } from '../data';
import { formatNumber, reviewQueue } from '../data/selectors';
import { Chip, DataTable, Grid, List, PageHeader, PageMain, Section } from '../ui/primitives';
import { useReducedMotion } from '../ui/useReducedMotion';

type Health = true | 'warn';

/** Devices with a problem: a capture source not connected to the gateway, or a stale hot zone. */
function warningDevices(d: ConsoleData) {
  const latest = Object.fromEntries(d.distribution.hotZones.map((h) => [h.projectId, h.version]));
  const unconnected = d.pipeline.sources.filter((x) => x.tone === 'you').map((x) => (x.device.includes('云端') ? 'Codex 云端' : x.device));
  const behind = d.distribution.sync.flatMap((r) => r.cells.map((c, i) => (c && c.version !== latest[r.projectId] ? d.distribution.devices[i] : undefined))).filter((x): x is string => !!x);
  return [...new Set([...unconnected, ...behind])];
}

function Box({ x, y, w, h, title, sub, ok = true, fill = 'url(#panel)', stroke = 'rgba(255,255,255,.09)', dashed, lines, still }: { x: number; y: number; w: number; h: number; title: string; sub?: string; ok?: Health; fill?: string; stroke?: string; dashed?: boolean; lines?: string[]; still?: boolean }) {
  const dot = ok === true ? '#12B76A' : '#F79009';
  const dur = ok === 'warn' ? '1.1s' : '2.6s';
  const begin = `-${(((x + y) % 13) / 10).toFixed(1)}s`;
  return (
    <g>
      <title>{`${title} · ${sub ?? ''}`}</title>
      <rect x={x} y={y} width={w} height={h} rx="10" fill={fill} stroke={stroke} strokeDasharray={dashed ? '5 4' : undefined} filter="url(#mod)" />
      <circle cx={x + 16} cy={y + 20} r="7.5" fill={dot} opacity=".22">
        {!still && <animate attributeName="r" values={`5;${ok === 'warn' ? 11 : 8.5};5`} dur={dur} begin={begin} repeatCount="indefinite" />}
        {!still && <animate attributeName="opacity" values=".45;.08;.45" dur={dur} begin={begin} repeatCount="indefinite" />}
      </circle>
      <circle cx={x + 16} cy={y + 20} r="4.5" fill={dot} />
      <circle cx={x + 14.8} cy={y + 18.6} r="1.4" fill="#16171A" opacity=".7" />
      <text x={x + 28} y={y + 24} fontSize="13" fontWeight="600" fill="#EDEEF0">
        {title}
      </text>
      <text x={x + 14} y={y + 44} fontSize="11" fill="#A1A6B0">
        {sub ?? ''}
      </text>
      {lines?.map((l, i) => (
        <text key={l} x={x + 14} y={y + 44 + 16 * i} fontSize="11" fill="#A1A6B0">
          {l}
        </text>
      ))}
    </g>
  );
}

function Link({ x1, y1, x2, y2, still }: { x1: number; y1: number; x2: number; y2: number; still?: boolean }) {
  const b = `${(((x1 * 3 + y1) % 11) / 10).toFixed(1)}s`;
  return (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5C616B" strokeWidth="1.5" markerEnd="url(#sa)" />
      {!still && (
        <circle r="2.8" fill="#B4A9FF">
          <animateMotion dur="1.2s" begin={b} repeatCount="indefinite" path={`M${x1} ${y1} L${x2} ${y2 - 6}`} />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.2;.75;1" dur="1.2s" begin={b} repeatCount="indefinite" />
        </circle>
      )}
    </>
  );
}

/** Architecture status map; mirrors the architecture diagram in the design doc. */
function ArchMap({ d }: { d: ConsoleData }) {
  const still = useReducedMotion();
  const g = d.observation.gatewayToday;
  const sources = d.pipeline.sources;
  const srcWarn = sources.filter((s) => s.tone === 'you');
  const zeroCall = d.observation.gatewayAlerts.filter((a) => a.kind === '零调用任务').length;
  const latest = Object.fromEntries(d.distribution.hotZones.map((h) => [h.projectId, h.version]));
  const behindDevices = [...new Set(d.distribution.sync.flatMap((r) => r.cells.map((c, i) => (c && c.version !== latest[r.projectId] ? d.distribution.devices[i] : undefined)).filter((x): x is string => !!x)))];
  const usedPct = Math.round((d.pipeline.budget.usedYuan / d.pipeline.budget.limitYuan) * 100);
  const shots = d.attention.filter((a) => a.group === '看截图').length;
  const brief = d.system.storageBrief;
  const bw = (960 - 32 - 6 * 10) / brief.length;
  const health = (bad: boolean): Health => (bad ? 'warn' : true);
  return (
    <svg viewBox="0 0 1000 470" width="100%" role="img" aria-label={`架构状态图：除 ${srcWarn.map((s) => s.device.split(' · ').pop()).join('、')}未接网关、${behindDevices.filter((x) => x !== 'Codex 云端').join('、')} 热区落后外，其余组件正常`} style={{ display: 'block', fontFamily: "Inter, 'Noto Sans SC', system-ui, sans-serif" }}>
      <defs>
        <marker id="sa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L10 5L0 10z" fill="#5C616B" />
        </marker>
        <filter id="mod" x="-10%" y="-20%" width="120%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity=".12" />
        </filter>
        <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#18191C" />
          <stop offset="1" stopColor="#121315" />
        </linearGradient>
        <linearGradient id="gw" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#17142B" />
          <stop offset=".5" stopColor="#2A2452">
            {!still && <animate attributeName="offset" values="0;1;0" dur="6s" repeatCount="indefinite" />}
          </stop>
          <stop offset="1" stopColor="#17142B" />
        </linearGradient>
      </defs>
      <Box x={20} y={10} w={300} h={60} title="你 · UI" sub={`网页控制台 · 待审 ${reviewQueue(d).length} · 截图 ${shots}`} still={still} />
      <Box x={350} y={10} w={300} h={60} title="采集层" sub={`${sources.length - 2} 类来源 · ${srcWarn.length} 个警告：Codex 云端`} ok={health(srcWarn.length > 0)} still={still} />
      <Box x={680} y={10} w={300} h={60} title={`Agent · ${d.agents.length} 个身份`} sub={`活跃会话 ${g.activeSessions} · 零调用任务 ${zeroCall}`} ok={health(zeroCall > 0)} still={still} />
      <Link x1={170} y1={72} x2={170} y2={106} still={still} />
      <Link x1={500} y1={72} x2={500} y2={106} still={still} />
      <Link x1={830} y1={72} x2={830} y2={106} still={still} />
      <Box x={20} y={110} w={960} h={60} title="网关 · VPS" sub={`${d.workspace.gateway.online ? '在线' : '离线'} · p95 ${g.p95Ms} ms · 今天 ${formatNumber(g.calls)} 次调用 · 拒绝 ${g.rejected} · 超时 ${g.timeouts}（${g.timeoutWindow}）`} fill="url(#gw)" stroke="rgba(124,108,255,.5)" still={still} />
      <Link x1={500} y1={172} x2={500} y2={196} still={still} />
      <rect x="20" y="200" width="960" height="150" rx="14" fill="rgba(255,255,255,.02)" stroke="rgba(255,255,255,.08)" />
      <line x1="34" y1="350.5" x2="966" y2="350.5" stroke="#101113" />
      <text x="36" y="222" fontSize="12" fontWeight="600" fill="#A1A6B0">
        存储层
      </text>
      {brief.map(([name, ...lines], i) => (
        <Box key={name} x={36 + i * (bw + 10)} y={236} w={bw} h={96} title={name} dashed={name === '索引'} lines={lines} still={still} />
      ))}
      <Link x1={250} y1={352} x2={250} y2={386} still={still} />
      <Link x1={750} y1={352} x2={750} y2={386} still={still} />
      <Box x={20} y={390} w={460} h={60} title="处理层" sub={`${d.system.processing.runsToday} 次运行 · 预算已用 ${usedPct}% · ${d.system.processing.note}`} still={still} />
      <Box x={520} y={390} w={460} h={60} title="分发" sub={`热区 ${d.distribution.hotZones.length} 个项目 · ${behindDevices.length} 处落后：${behindDevices.join('、')}`} ok={health(behindDevices.length > 0)} still={still} />
    </svg>
  );
}

export default function System() {
  const d = useData();
  const s = d.system;
  const warnings = warningDevices(d).length;
  const block = (id: string, title: string, items: typeof s.recovery) => (
    <Section id={id} title={title}>
      <List items={items.map((x) => ({ key: x.title, main: x.title, meta: x.detail, right: <Chip tone={x.tone}>{x.status}</Chip> }))} />
    </Section>
  );
  return (
    <PageMain>
      <PageHeader icon="System" title="系统健康" sub="VPS 承载网关、UI 和处理层。这一页只在出问题时需要看" right={warnings ? <Chip tone="you">{`${warnings} 个警告`}</Chip> : <Chip tone="done">正常</Chip>} />
      <Section id="sa-h" title="架构状态" sub="和文档里的架构图一一对应；橙点是警告，悬停看详情">
        <ArchMap d={d} />
      </Section>
      <Section id="ss-h" title="存储" sub="git 和客户库是判断的原件；只有索引可以丢弃，其余都异地备份">
        <DataTable minWidth={960} cols={['组件', '存什么', '规模', '备份', '校验', '状态']} rows={s.storage.map((x) => [x.name, x.holds, x.size, x.backup, x.check, <Chip tone={x.tone}>{x.status}</Chip>])} />
      </Section>
      <Grid min={300} gap={24} align="start">
        {block('sw-h', '写入冲突', s.writeConflicts)}
        {block('sr-h', '恢复演练', s.recovery)}
        {block('sv-h', '格式版本', s.formats)}
      </Grid>
    </PageMain>
  );
}
