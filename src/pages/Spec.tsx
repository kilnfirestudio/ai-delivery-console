import { useState, type ReactNode } from 'react';
import { R } from '../app/routes';
import type { Agent } from '../data';
import { AgentTimeline, LineChart, TIMELINE_LEGEND } from '../ui/charts';
import CommandPalette from '../ui/CommandPalette';
import { Checkbox, GuardedSwitch, SubtaskTile, Toggle } from '../ui/controls';
import { GlassIcon, LineIcon, Radar, Robot, Sparkles, type IconName, type RobotState } from '../ui/icons';
import { CheckpointBar, Chip, Col, DataTable, EmptyState, ErrorState, Grid, List, PageHeader, PageMain, Row, Section, SegControl, Skeleton } from '../ui/primitives';
import { useReducedMotion } from '../ui/useReducedMotion';

/*
 * Component spec: every building block of the console with its states. Content here is sample copy that
 * demonstrates the components; it is not read from the data layer.
 */

const ICON_NAMES: [IconName, string][] = [
  ['Main', '全局总览'], ['Review', '待审'], ['Visual', '截图审核'], ['Weekly', '每周复盘'], ['Intake', '登记需求'], ['Breakdown', '需求拆解'], ['Agents', 'Agent'], ['Task', '任务追踪'],
  ['Knowledge', '知识库'], ['Graph', '知识图谱'], ['Clients', '客户'], ['Metrics', '指标'], ['Live', '实时调用'], ['Pipeline', '采集与处理'], ['Distribution', '分发'],
  ['Rules', '决策规则'], ['System', '系统健康'], ['Components', '组件'], ['Bell', '提醒'], ['Trophy', '成就'],
];
const ROBOTS: [RobotState, string, string][] = [
  ['work', '进行中', '右下角转圈、天线闪烁'],
  ['wait', '等待你', '问号跳动、天线琥珀色'],
  ['idle', '空闲', '闭眼、飘出 z'],
  ['stand', '待命', '闭眼、天线熄灭'],
];
const DEMO_AGENT: Agent = {
  id: 'dev-c', name: '开发 C', tool: 'Claude Code', host: 'M5 Pro', status: 'you', scope: '', current: '', queue: [], finished: [], week: { done: 0, firstPass: '0 / 0', helps: 0 },
  today: [
    { from: '09:20', to: '10:30', kind: 'past', label: '已做完' },
    { from: '12:15', to: '15:11', kind: 'work', label: '正在做' },
    { from: '15:11', to: '16:20', kind: 'wait', label: '等你' },
  ],
};
const loop = { repeatCount: 'indefinite' } as const;

function Caption({ title, desc }: { title: string; desc?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ fontSize: 13, fontWeight: 600 }}>{title}</span>
      {desc && (
        <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
          {desc}
        </span>
      )}
    </div>
  );
}

function SpecRow({ name, cells }: { name: string; cells: ReactNode[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `140px repeat(${cells.length}, minmax(0, 1fr))`, gap: 16, alignItems: 'center', padding: '14px 0', borderTop: '1px solid rgba(255,255,255,.06)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0)' }}>
      <span style={{ fontSize: 13, fontWeight: 600 }}>{name}</span>
      {cells.map((c, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
          {c}
        </div>
      ))}
    </div>
  );
}

function Demo({ name, use, children }: { name: string; use: string; children: ReactNode }) {
  return (
    <div className="well" style={{ borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 150 }}>
      <div style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>{children}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>{name}</span>
        <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
          {use}
        </span>
      </div>
    </div>
  );
}

const muted = (text: string) => (
  <span className="muted" style={{ fontSize: 12 }}>
    {text}
  </span>
);
const lbl = (text: string, mb = 12) => (
  <p className="lbl" style={{ marginBottom: mb }}>
    {text}
  </p>
);

function MotionSection() {
  const still = useReducedMotion();
  const loopValues = (from: number, to: number, dur: string) => ({ values: `${from};${to};${to}`, keyTimes: '0;.55;1', dur, ...loop });
  return (
    <Section id="cmo-h" title="动效规范" sub="SVG 动画用原生 SMIL，HTML 动画用 CSS；不依赖脚本，导出和预览里都能播放">
      {lbl('动效样例 · 全部在循环播放')}
      <Grid min={210} gap={16} align="stretch">
        <Demo name="折线绘入 · 1.3s" use="图表进入视野时从左画到右，末点弹出后持续呼吸">
          <svg width="150" height="56" viewBox="0 0 150 56" aria-hidden="true">
            <polyline points="4,46 26,40 48,42 70,30 92,32 114,18 146,10" fill="none" stroke="#9D8FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength={100} strokeDasharray="100">
              {!still && <animate attributeName="stroke-dashoffset" {...loopValues(100, 0, '2.8s')} />}
            </polyline>
            <circle cx="146" cy="10" r="3" fill="#B4A9FF">
              {!still && <animate attributeName="r" values="0;0;4;3;3" keyTimes="0;.5;.6;.66;1" dur="2.8s" {...loop} />}
            </circle>
          </svg>
        </Demo>
        <Demo name="环形分段 · 每段 0.7s" use="按顺序一段段长出，先完成、再进行中、最后排队">
          <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
            <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="8" />
            {(
              [
                ['#3FB950', 48, 0],
                ['#4F8CFF', 16, 50],
                ['#E3A008', 10, 68],
                ['#3A3D44', 20, 80],
              ] as const
            ).map(([c, len, start], k) => (
              <circle key={c} cx="32" cy="32" r="24" fill="none" stroke={c} strokeWidth="8" pathLength={100} strokeDasharray={`${len} 100`} strokeDashoffset={-start} transform="rotate(-90 32 32)">
                {!still && <animate attributeName="stroke-dasharray" values={`0 100;0 100;${len} 100;${len} 100`} keyTimes={`0;${(k * 0.15).toFixed(2)};${(k * 0.15 + 0.3).toFixed(2)};1`} dur="3s" {...loop} />}
              </circle>
            ))}
          </svg>
        </Demo>
        <Demo name="数字滚动 · 1.4s" use="关键计数从 0 滚到当前值，只在进入时播放一次">
          <span className="cu-loop" style={{ ['--to' as string]: 148, fontSize: 34, fontWeight: 600, letterSpacing: '-.02em' }} />
        </Demo>
        <Demo name="进行中光带 · 2.4s 循环" use="时间轴上正在工作的条，光带表示“还在跑”">
          <span className="shim" style={{ display: 'block', width: 150, height: 14, borderRadius: 7 }} />
        </Demo>
        <Demo name="数据包流动 · 1.2–1.5s" use="流水线、架构图、任务溯源：数据从哪来到哪去">
          <svg width="150" height="40" viewBox="0 0 150 40" aria-hidden="true">
            <rect x="2" y="12" width="26" height="16" rx="4" fill="#16171A" stroke="rgba(255,255,255,.12)" />
            <rect x="122" y="12" width="26" height="16" rx="4" fill="#16171A" stroke="rgba(124,108,255,.5)" />
            <line x1="30" y1="20" x2="120" y2="20" stroke="#3A3D44" strokeWidth="1.5" />
            {!still &&
              ['0s', '0.5s', '1s'].map((b) => (
                <circle key={b} r="3" fill="#B4A9FF">
                  <animateMotion dur="1.5s" begin={b} path="M30 20 H120" {...loop} />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="1.5s" begin={b} {...loop} />
                </circle>
              ))}
          </svg>
        </Demo>
        <Demo name="选中涟漪 · 2s 循环" use="图谱里当前选中的节点、风险矩阵里交给你的事项">
          <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
            {!still &&
              ['0s', '0.8s', '1.6s'].map((b) => (
                <circle key={b} cx="36" cy="36" r="10" fill="none" stroke="#B4A9FF" strokeWidth="1.5">
                  <animate attributeName="r" from="10" to="32" dur="2.4s" begin={b} {...loop} />
                  <animate attributeName="opacity" from=".9" to="0" dur="2.4s" begin={b} {...loop} />
                </circle>
              ))}
            <circle cx="36" cy="36" r="9" fill="#7C6CFF" />
          </svg>
        </Demo>
        <Demo name="等待呼吸 · 2.2s 循环" use="等你超过 30 分钟的 agent 和任务，琥珀色光晕">
          <span className="breathe" style={{ display: 'block', width: 120, height: 26, borderRadius: 4, background: 'rgba(227,160,8,.25)', border: '1px solid #E3A008' }} />
        </Demo>
        <Demo name="截图扫描 · 2.8s 循环" use="截图对比时扫描线走过，差异框同步闪动">
          <div style={{ position: 'relative', width: 64, height: 72, borderRadius: 8, background: '#EDEEF0', overflow: 'hidden' }}>
            <span className="diffp" style={{ position: 'absolute', left: 6, right: 6, bottom: 10, height: 14, border: '1.5px solid #F85149', borderRadius: 3 }} />
            <span className="scan" />
          </div>
        </Demo>
        <Demo name="蚂蚁线 · 1s 循环" use="可拖放区域，告诉你这里能放东西">
          <div className="ants" style={{ width: 150, height: 56, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#8A8F98' }}>
            拖入文件
          </div>
        </Demo>
        <Demo name="接力点亮 · 5s 一轮" use="五层策略按顺序点亮，表示决策依次经过各层">
          <div style={{ display: 'flex', gap: 6 }}>
            {[0, 1, 2, 3, 4].map((k) => (
              <span key={k} className="relay" style={{ width: 26, height: 40, borderRadius: 6, background: '#16171A', border: '1px solid rgba(255,255,255,.07)', animationDelay: `${k}s` }} />
            ))}
          </div>
        </Demo>
        <Demo name="机器人状态" use="转圈、眨眼、问号跳动、飘 z，四种状态一眼可分">
          <Robot state="work" size={56} label="进行中" />
        </Demo>
        <Demo name="悬停抬起 · 150ms" use="卡片、节点、按键的即时反馈；按下缩到 97%">
          <div className="card" style={{ width: 150, padding: 12, fontSize: 12, color: '#A1A6B0', textAlign: 'center' }}>
            悬停我：抬起 2px
          </div>
        </Demo>
      </Grid>
      <div style={{ height: 24 }} />
      <Row>
        <Col flex="1.3 1 520px">
          <DataTable
            minWidth={520}
            widths={['120px', '220px', undefined]}
            cols={['名称', '数值', '用在哪里']}
            rows={[
              [<span className="mono">--t-fast</span>, '150 ms', '悬停、按下、切换'],
              [<span className="mono">--t-mid</span>, '480 ms', '页面区块依次上浮进入，每块间隔 60 ms'],
              [<span className="mono">--t-data</span>, '1000–1400 ms', '折线、环形、仪表、进度条、数字滚动'],
              [<span className="mono">循环</span>, '1–6 s', '只用于正在发生的事：进行中、等你、实时流、数据流动'],
              [<span className="mono">--ease</span>, 'cubic-bezier(.2, .8, .2, 1)', '所有入场和数据动画：快出慢停'],
            ]}
          />
        </Col>
        <Col flex="1 1 340px">
          <>
            {lbl('原则', 4)}
            <List
              items={[
                { key: '1', main: '静态数据只动一次', meta: '进入页面时画出来，之后保持不动，方便读数' },
                { key: '2', main: '循环动效 = 有东西在发生', meta: '进行中、等你、实时调用、数据流动。完成的事情不再动' },
                { key: '3', main: '颜色不动，位置动', meta: '状态色固定不闪烁变色，靠光晕、光带、粒子表现活跃' },
                { key: '4', main: '减少动态效果', meta: '上浮、摆动、扫描、粒子停止；呼吸光晕和指示灯保留，避免信息丢失' },
              ]}
            />
          </>
        </Col>
      </Row>
    </Section>
  );
}

function IconSection() {
  const still = useReducedMotion();
  const fx = (content: ReactNode, caption: string) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
      {content}
      {muted(caption)}
    </div>
  );
  return (
    <Section id="ci-h" title="图标与动效">
      {lbl('导航用线条图标 · 16px')}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, color: '#A1A6B0', marginBottom: 24 }}>
        {ICON_NAMES.map(([k, n]) => (
          <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
            <LineIcon name={k} />
            {n}
          </span>
        ))}
      </div>
      {lbl('标题和卡片用玻璃图块')}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(104px, 1fr))', gap: 12 }}>
        {ICON_NAMES.map(([k, n]) => (
          <div key={k} className="well" style={{ borderRadius: 12, padding: '16px 8px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <GlassIcon name={k} size={48} />
            <span style={{ fontSize: 12, color: '#C9CDD4' }}>{n}</span>
          </div>
        ))}
      </div>
      <div style={{ height: 24 }} />
      {lbl('Agent 头像 · 4 种状态')}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28 }}>
        {ROBOTS.map(([st, label, desc]) => (
          <div key={st} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Robot state={st} size={64} label={label} />
            <span style={{ fontSize: 12, color: '#C9CDD4' }}>{label}</span>
            <span className="muted" style={{ fontSize: 11 }}>
              {desc}
            </span>
          </div>
        ))}
      </div>
      <div style={{ height: 24 }} />
      {lbl('循环动效')}
      <Grid min={220} gap={24} align="start">
        {fx(<Radar size={110} />, '雷达扫描：实时调用页')}
        {fx(
          <div style={{ position: 'relative', display: 'inline-flex', padding: '14px 10px 0' }}>
            <GlassIcon name="Trophy" size={56} motion="float" />
            <Sparkles />
          </div>,
          '闪光：指标达成时',
        )}
        {fx(<GlassIcon name="Bell" size={56} motion="swing" />, '摇铃：有阻塞任务时')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <svg width="220" height="60" viewBox="0 0 220 60" aria-hidden="true">
            <path d="M10 50 C80 50 120 10 210 10" fill="none" stroke="#A99CFF" strokeWidth="2" strokeDasharray="5 7">
              {!still && <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" {...loop} />}
            </path>
            {!still && (
              <circle r="3.5" fill="#E9E5FF">
                <animateMotion dur="2s" path="M10 50 C80 50 120 10 210 10" {...loop} />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.88;1" dur="2s" {...loop} />
              </circle>
            )}
          </svg>
          {muted('流动虚线：证据 → 知识 → 产出')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontSize: 13 }}>
            T3 · 检查点 1 / 5
            <span className="typing">
              <i />
              <i />
              <i />
            </span>
          </span>
          {muted('输入中：agent 正在工作')}
        </div>
      </Grid>
      <div style={{ height: 24 }} />
      {lbl('成就与连续记录')}
      <p className="muted" style={{ margin: '-4px 0 14px', fontSize: 12 }}>
        只从真实结果里算，不设打卡任务；进入时奖杯闪一下光，之后保持不动
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
        <div className="badge-pop raised" style={{ padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'center' }}>
          <GlassIcon name="Trophy" size={40} label="成就：连续 3 周零重复错误" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>零重复错误</span>
            <span className="muted" style={{ fontSize: 12 }}>连续 3 周没有同一类错误再次出现</span>
          </div>
        </div>
        <a className="streak" href={R.weekly}>
          <LineIcon name="Trophy" size={14} strokeWidth={2} />
          连续 3 周零重复错误
        </a>
      </div>
      <p className="muted" style={{ margin: '16px 0 0', fontSize: 12 }}>
        线条图标来自开源图标库 Lucide（ISC 许可）。动效用 CSS 和 SVG 原生动画（SMIL）实现，比 GIF 清晰、文件更小。系统开启“减少动态效果”时，所有循环动画停止（含入场动画），状态仍由颜色和阴影静态表达，不丢信息
      </p>
    </Section>
  );
}

function CommandPaletteDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
      <button type="button" className="btn" onClick={() => setOpen(true)} aria-haspopup="dialog">
        打开搜索
        <span className="kbd">⌘K</span>
      </button>
      {muted('顶栏搜索框或 ⌘K / Ctrl+K 唤起，只用键盘即可完成搜索与跳转')}
      <CommandPalette open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default function Spec() {
  const hoverPrimary = { background: '#FAFAFA', borderColor: '#FAFAFA', color: '#08090A' };
  const hoverSecondary = { background: '#222327', borderColor: 'rgba(255,255,255,.18)', color: '#FFFFFF' };
  const led = (tone: string, text: string) => (
    <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center', fontSize: 13 }}>
      <span className={`led led-${tone}`} />
      {text}
    </span>
  );
  const cp = (passed: number, tone: 'doing' | 'you' | 'done', text: string) => (
    <>
      <div style={{ width: 150 }}>
        <CheckpointBar passed={passed} tone={tone} />
      </div>
      {muted(text)}
    </>
  );
  return (
    <PageMain>
      <PageHeader icon="Components" title="组件规范" sub="现代风格：中性近黑底、细边框、大圆角、单一紫蓝强调色、克制的状态色。趣味来自玻璃图标、机器人头像和小动效，不靠满屏发光" right={<Chip>示例数据</Chip>} />
      <MotionSection />
      <IconSection />
      <Section id="cm-h" title="材质与层级">
        <Grid min={150} gap={20}>
          {(
            [
              [<div className="base" style={{ height: 96, borderRadius: 12, border: '1px solid rgba(255,255,255,.06)' }} />, '底座', '近黑 #08090A，顶部淡紫蓝光晕'],
              [<div className="tier1" style={{ height: 96, padding: 0 }} />, '第一级 · 需要你处理', '缓慢流动的渐变描边'],
              [<div className="card" style={{ height: 96, padding: 0 }} />, '第二级 · 标准面板', '#101113，1px 细边框，圆角 14'],
              [<div className="quiet" style={{ height: 76 }} />, '第三级 · 参考信息', '无面板，只有一条分隔线'],
              [<div className="well" style={{ height: 96, borderRadius: 12 }} />, '内嵌区', '更深一层，用于输入框和分组'],
              [<div className="paper" style={{ height: 96, padding: 0 }} />, '单据', '顶部一条强调色细线'],
            ] as [ReactNode, string, string][]
          ).map(([swatch, t, desc]) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {swatch}
              <Caption title={t} desc={desc} />
            </div>
          ))}
        </Grid>
        <p className="muted" style={{ margin: '16px 0 0', fontSize: 12 }}>
          层级靠字号、留白和细边框区分；只有第一级用动效。一页里第一级最多一块
        </p>
      </Section>
      <Section id="ck-h" title="按键" sub="主按键是浅色实底；次按键是深色描边；当前步骤是按下状态">
        <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(4, minmax(0, 1fr))', gap: 16, paddingBottom: 8 }}>
          {['', '默认', '悬停', '按下', '禁用'].map((h, i) => (
            <span key={i} className="lbl">
              {h}
            </span>
          ))}
        </div>
        <SpecRow
          name="主按键"
          cells={[
            <button className="btn btn-p" type="button">登记需求</button>,
            <button className="btn btn-p" type="button" style={hoverPrimary}>登记需求</button>,
            <button className="btn btn-p is-active" type="button">登记需求</button>,
            <button className="btn btn-p is-disabled" type="button" disabled>登记需求</button>,
          ]}
        />
        <SpecRow
          name="次按键"
          cells={[
            <button className="btn" type="button">去看截图</button>,
            <button className="btn" type="button" style={hoverSecondary}>去看截图</button>,
            <button className="btn is-active" type="button">去看截图</button>,
            <button className="btn is-disabled" type="button" disabled>去看截图</button>,
          ]}
        />
        <SpecRow
          name="步骤键"
          cells={[
            <a className="btn" href="#">1 看结果 ✓</a>,
            <a className="btn" href="#" aria-current="step">3 处理知识</a>,
            muted('当前步骤 = 按下并保持'),
            null,
          ]}
        />
      </Section>
      <Section id="cc-h" title="控件">
        <SpecRow name="分段控件" cells={[<SegControl label="示例" options={['全部项目', 'Shopline', 'xuvia']} />, <SegControl label="示例" options={['并排', '叠加', '只看差异']} pressed={1} />, muted('深色轨道 + 浮起的选中块')]} />
        <SpecRow name="输入框" cells={[<input className="inp" aria-label="默认" placeholder="默认" />, <input className="inp is-focus" aria-label="聚焦" defaultValue="聚焦：外圈蓝色柔光" />, <input className="inp" aria-label="禁用" defaultValue="禁用" disabled style={{ opacity: 0.55 }} />]} />
        <SpecRow
          name="开关与复选"
          cells={[
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Toggle on={false} />
              <Toggle on />
            </div>,
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Checkbox on={false} />
              <Checkbox on />
            </div>,
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center', fontSize: 13 }}>
              快捷键 <span className="kbd">⌘</span>
              <span className="kbd">K</span>
            </span>,
          ]}
        />
        <SpecRow
          name="危险操作"
          cells={[
            <GuardedSwitch />,
            <span className="muted" style={{ fontSize: 12, lineHeight: 1.6 }}>
              只用于不可撤回的操作，例如销毁客户数据。先掀开保护盖，再拨动，再输入名称确认
            </span>,
          ]}
        />
      </Section>
      <Section id="cl-h" title="指示灯与状态">
        <SpecRow name="状态徽章" cells={[<Chip tone="done">完成</Chip>, <Chip tone="doing">进行中</Chip>, <Chip tone="you" live>等待你</Chip>, <Chip>排队</Chip>, <Chip tone="risk">冲突</Chip>]} />
        <SpecRow name="在线指示灯" cells={[led('g', '在线'), led('a', '警告'), led('r', '故障'), led('o', '离线'), null]} />
        <SpecRow name="检查点电池格" cells={[cp(0, 'doing', '0 / 5 · 排队'), cp(2, 'doing', '2 / 5 · 进行中'), cp(1, 'you', '1 / 5 · 等待你'), cp(5, 'done', '5 / 5 · 完成'), null]} />
        <SpecRow
          name="子任务键帽"
          cells={[
            <SubtaskTile id="T0" state="done" title="T0 · 完成" to={R.task} />,
            <SubtaskTile id="T1" state="doing" title="T1 · 进行中" to={R.task} />,
            <SubtaskTile id="T2" state="you" title="T2 · 等待你" to={R.task} />,
            <SubtaskTile id="T4" state="queue" title="T4 · 排队" to={R.task} />,
            muted('排队 = 虚线空槽'),
          ]}
        />
        <SpecRow
          name="进度轨道"
          cells={[
            <div className="bar" style={{ width: 180 }}>
              <div className="fill f-doing" style={{ width: '58%' }} />
            </div>,
            <div className="bar" style={{ width: 180 }}>
              <div className="fill f-done" style={{ width: '100%' }} />
            </div>,
            null,
            null,
            null,
          ]}
        />
        <p className="muted" style={{ margin: '12px 0 0', fontSize: 12 }}>
          等待超过 30 分钟的指示灯缓慢呼吸，周期 2 秒；系统开启“减少动态效果”时停止
        </p>
      </Section>
      <Section id="ct-h" title="时间轴" sub="深色轨道 + 圆角条；“现在”是一根红线">
        <AgentTimeline lanes={[{ agent: DEMO_AGENT, now: 'T2 · 已等 69 分钟' }]} now="16:20" />
        <div style={{ marginTop: 12 }}>{TIMELINE_LEGEND}</div>
      </Section>
      <Grid min={320} gap={24} align="start">
        <Section id="cs-h" title="读数屏" sub="实时读数：大号数字，异常值用状态色">
          <div className="screen" style={{ display: 'flex', gap: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingRight: 20 }}>
              <span style={{ fontSize: 12, color: '#A6D8B9' }}>今天调用</span>
              <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 28, fontWeight: 600, color: '#D1FADF', textShadow: '0 0 8px rgba(209,250,223,.35)' }}>1,284</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 20, borderLeft: '1px solid rgba(209,250,223,.12)' }}>
              <span style={{ fontSize: 12, color: '#A6D8B9' }}>拒绝</span>
              <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 28, fontWeight: 600, color: '#FECDCA' }}>2</span>
            </div>
          </div>
        </Section>
        <Section id="cg-h" title="玻璃浮层" sub="下拉、⌘K 搜索结果、悬停详情">
          <div className="well" style={{ position: 'relative', height: 170, borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[80, 64, 72, 50].map((w) => (
                <div key={w} className="raised" style={{ height: 22, width: `${w}%` }} />
              ))}
            </div>
            <div className="glass" role="menu" aria-label="浮层示例" style={{ position: 'absolute', top: 24, left: '44%', width: 200, padding: 6 }}>
              {['跳到 TASK-0412', '跳到 K-027', '跳到 P-0012'].map((t, i) => (
                <div key={t} role="menuitem" style={{ padding: '8px 10px', borderRadius: 8, fontSize: 13, ...(i === 0 ? { background: 'rgba(37,99,235,.10)', color: '#8DB6FF', fontWeight: 600 } : {}) }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section id="cmdk-h" title="⌘K 全局搜索" sub="玻璃浮层，按编号或关键字搜需求 / 子任务 / 知识 / 证据；方向键选择，回车跳转，Esc 关闭">
          <CommandPaletteDemo />
        </Section>
        <Section id="cf-h" title="图表" sub="细线、不做 3D、不加透视，保证读数准确">
          <LineChart values={[50, 54, 51, 53, 58, 61, 66, 70, 72, 75, 77, 78]} labels={['W34', 'W35', 'W36', 'W37', 'W38', 'W39', 'W40', 'W41', 'W42', 'W43', 'W44', 'W45']} base={52} baseLabel="基线 52%" lo={40} hi={90} unit="%" marker={4} markerLabel="阶段 1a" width={420} height={170} desc="扁平图表示例：一次通过率" />
        </Section>
        <Section id="cst-h" title="加载 / 空 / 出错" sub="按区块形状占位，不整页转圈；空和出错都说清原因和下一步。开发模式下用 ?data=loading|empty|error 预览">
          <Grid min={240} gap={16} align="start">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p className="lbl" style={{ margin: 0 }}>加载骨架</p>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Skeleton height={28} width="55%" />
                <Skeleton lines={3} />
                <Skeleton height={64} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p className="lbl" style={{ margin: 0 }}>空状态</p>
              <EmptyState icon="Knowledge" title="还没有知识条目" hint="agent 跑出候选、你确认后，知识会出现在这里。先去登记一个需求开始。" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p className="lbl" style={{ margin: 0 }}>出错</p>
              <ErrorState detail="网关没有响应（示例）。数据源恢复后点重试。" onRetry={() => {}} />
            </div>
          </Grid>
        </Section>
      </Grid>
    </PageMain>
  );
}
