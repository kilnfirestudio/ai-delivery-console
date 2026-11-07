import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { R } from '../app/routes';
import { useData, type ConsoleData } from '../data';
import { formatNumber } from '../data/selectors';
import { BarList } from '../ui/charts';
import { FlowArrow } from '../ui/icons';
import { Chip, Col, DataTable, Grid, Legend, List, PageHeader, PageMain, Row, Section } from '../ui/primitives';

const FONT = "Inter, 'Noto Sans SC', system-ui, sans-serif";

/** Consequence × uncertainty matrix with this week's decision counts and the items routed to you. */
function RiskMatrix({ d }: { d: ConsoleData }) {
  const { quadrants, routed } = d.rules;
  const [W, H, L, T, S] = [560, 400, 60, 20, 170];
  const total = quadrants.reduce((s, q) => s + q.count, 0);
  const must = routed.filter((x) => x.mustYou).length;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label={`风险路由矩阵：本周 ${formatNumber(total)} 次决策中，${routed.length} 件交给你；其中 ${must} 件因为属于必须由你确认的类别，不论落在哪个象限都交给你`} style={{ display: 'block', fontFamily: FONT }}>
      <defs>
        <radialGradient id="pin" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#FDB022" />
          <stop offset=".6" stopColor="#DC6803" />
          <stop offset="1" stopColor="#93370D" />
        </radialGradient>
        <filter id="ps" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.6" floodColor="#000000" floodOpacity=".35" />
        </filter>
        <linearGradient id="tray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#121316" />
          <stop offset="1" stopColor="#0E0F11" />
        </linearGradient>
        <linearGradient id="tray-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1C1709" />
          <stop offset="1" stopColor="#141108" />
        </linearGradient>
      </defs>
      {quadrants.map((q) => {
        const cx = q.uncertainty === '高' ? 1 : 0;
        const cy = q.consequence === '高' ? 0 : 1;
        const x = L + 20 + cx * (S + 60);
        const y = T + cy * (S + 10);
        const amber = cx === 1 && cy === 0;
        return (
          <g key={`${q.consequence}${q.uncertainty}`}>
            <rect x={x} y={y} width={S + 50} height={S} rx="12" fill={`url(#${amber ? 'tray-a' : 'tray'})`} stroke={amber ? 'rgba(227,160,8,.45)' : 'rgba(255,255,255,.08)'} />
            <line x1={x + 12} y1={y + S + 0.5} x2={x + S + 38} y2={y + S + 0.5} stroke="#101113" />
            <text x={x + 12} y={y + 22} fontSize="12" fontWeight="600" fill="#EDEEF0">{`${q.consequence}后果 · ${q.uncertainty}不确定`}</text>
            <text x={x + 12} y={y + 40} fontSize="11" fill="#A1A6B0">{`任务：${q.task}`}</text>
            <text x={x + 12} y={y + 56} fontSize="11" fill="#A1A6B0">{`知识：${q.knowledge}`}</text>
            <text x={x + S + 38} y={y + S - 14} fontSize="20" fontWeight="600" fill="#EDEEF0" textAnchor="end">
              {formatNumber(q.count)}
            </text>
          </g>
        );
      })}
      <text x={L - 8} y={T + S / 2 + 4} fontSize="11" fill="#A1A6B0" textAnchor="end">
        高
      </text>
      <text x={L - 8} y={T + S + 10 + S / 2 + 4} fontSize="11" fill="#A1A6B0" textAnchor="end">
        低
      </text>
      <text x="16" y={T + S + 5} fontSize="12" fill="#A1A6B0" transform={`rotate(-90 16 ${T + S + 5})`} textAnchor="middle">
        后果
      </text>
      <text x={L + 20 + (S + 50) / 2} y={H - 10} fontSize="11" fill="#A1A6B0" textAnchor="middle">
        低
      </text>
      <text x={L + 20 + S + 60 + (S + 50) / 2} y={H - 10} fontSize="11" fill="#A1A6B0" textAnchor="middle">
        高
      </text>
      <text x={L + 20 + S + 55} y={H - 10} fontSize="12" fill="#A1A6B0" textAnchor="middle">
        不确定性
      </text>
      {routed.map((p, j) => {
        const dl = 0.3 + j * 0.18;
        const tot = dl + 0.55;
        const k1 = (dl / tot).toFixed(3);
        const k2 = ((dl + 0.4) / tot).toFixed(3);
        return (
          <g key={p.title}>
            <title>{p.title}</title>
            {!p.mustYou && (
              <circle cx={p.x} cy={p.y} r="9" fill="none" stroke="#F2C14E" strokeWidth="1.5">
                <animate attributeName="r" from="9" to="22" dur="1.8s" begin={`${tot.toFixed(2)}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;.85;0" keyTimes="0;.05;1" dur="1.8s" begin={`${tot.toFixed(2)}s`} repeatCount="indefinite" />
              </circle>
            )}
            {p.mustYou ? (
              <>
                <rect x={p.x - 8} y={p.y - 8} width="16" height="16" rx="3" fill="#16171A" stroke="#B54708" strokeWidth="2.5" filter="url(#ps)" />
                <rect x={p.x - 3} y={p.y - 3} width="6" height="6" rx="1" fill="#DC6803" />
              </>
            ) : (
              <>
                <circle cx={p.x} cy={p.y} r="8" fill="url(#pin)" filter="url(#ps)" />
                <ellipse cx={p.x - 2.5} cy={p.y - 3.2} rx="3" ry="1.8" fill="#16171A" opacity=".6" />
              </>
            )}
            <animateTransform attributeName="transform" type="translate" values="0 -34;0 -34;0 3;0 0" keyTimes={`0;${k1};${k2};1`} dur={`${tot.toFixed(2)}s`} fill="freeze" />
            <animate attributeName="opacity" values="0;0;1" keyTimes={`0;${k1};1`} dur={`${tot.toFixed(2)}s`} fill="freeze" />
          </g>
        );
      })}
    </svg>
  );
}

export default function Rules() {
  const d = useData();
  const r = d.rules;
  const met = r.ideals.filter((x) => x.met).length;
  const conflicts = r.conflictOrder.reduce((s, [, n]) => s + n, 0);
  const current = r.delegation.history.find((h) => h.current);
  return (
    <PageMain>
      <PageHeader icon="Rules" title="决策规则" sub="五层组合：约束保底、规则裁决冲突、风险分配决策权、结果更新知识、元层慢速调参" />
      <section className="tier1" aria-labelledby="ri-h">
        <h2 id="ri-h" style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 600 }}>
          {`理想状态 · ${met} / ${r.ideals.length}`}
        </h2>
        <p className="muted" style={{ margin: '0 0 16px', fontSize: 13 }}>
          五个可检验的条件。它们之间有张力：自动化越多，注意力越省，红线风险也越大
        </p>
        <Grid min={320} gap={14}>
          {r.ideals.map((x) => (
            <div key={x.text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <Chip tone={x.met ? 'done' : 'risk'}>{x.met ? '满足' : '不满足'}</Chip>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{x.text}</span>
                <span className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                  {x.evidence}
                </span>
              </div>
            </div>
          ))}
        </Grid>
      </section>
      <Section id="rl-h" title="五层策略 · 本周" sub="快的层追求稳定和可预测，慢的层调整快层的规则">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 24px 1fr 24px 1fr 24px 1fr 24px 1fr', gap: 4, alignItems: 'stretch', overflowX: 'auto' }}>
          {r.layers.map((l, i) => (
            <Fragment key={l.name}>
              {i > 0 && <FlowArrow />}
              <div className="raised relay" style={{ ...(i === r.layers.length - 1 ? { borderColor: 'rgba(124,108,255,.5)' } : {}), animationDelay: `${i}s`, padding: 12, display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{l.name}</span>
                <span className="muted" style={{ fontSize: 12 }}>
                  {l.role}
                </span>
                <span style={{ fontSize: 12, lineHeight: 1.5 }}>{l.week}</span>
                <span className="stage" style={{ alignSelf: 'flex-start' }}>
                  {l.cadence}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </Section>
      <Row>
        <Col flex="1.3 1 520px">
          <Section id="rm-h" title="风险路由" sub="后果 = 影响范围、能否撤回；不确定性 = 知识覆盖、可信度。数字是本周的决策数">
            <RiskMatrix d={d} />
            <Legend
              items={[
                [{ background: 'radial-gradient(circle at 35% 30%, #FDB022, #DC6803 60%, #93370D)', borderRadius: 6 }, '按象限交给你'],
                [{ background: '#16171A', border: '2.5px solid #B54708', boxShadow: '0 1px 2px rgba(16,24,40,.3)' }, '必须由你确认的类别（红线、跨项目上提、客户层、取代已验证）'],
              ]}
            />
          </Section>
        </Col>
        <Col flex="1 1 340px">
          <Section id="ro-h" title={`冲突裁决 · 本周 ${conflicts} 次`}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <BarList items={r.conflictOrder} max={Math.max(...r.conflictOrder.map(([, n]) => n))} labelWidth={96} />
            </div>
            <p className="muted" style={{ margin: '12px 0 0', fontSize: 12, lineHeight: 1.6 }}>
              上位：红线 &gt; 默认 &gt; 建议 &gt; 参考。特别：客户层 &gt; 项目层 &gt; 领域层 &gt; 全局层。同样的冲突永远得到同样的裁决
            </p>
          </Section>
          <Section id="rn-h" title="通知分级">
            <List items={r.notifications.map((n) => ({ key: n.tier, main: n.tier, meta: n.when, right: <Chip tone={n.tone}>{n.channel}</Chip> }))} />
          </Section>
        </Col>
      </Row>
      <Row>
        <Col flex="1.4 1 560px">
          <Section id="rd-h" title={`委托规则 · ${current?.version}`}>
            <DataTable minWidth={600} widths={['80px', undefined, undefined]} cols={['规则', '适用条件', '处理']} rows={r.delegation.rules.map((x) => [x.id, x.when, x.then])} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '14px 0 6px' }}>
              <Link className="btn" to={R.knowledge}>{`查看 ${current?.version} 放行的 ${r.delegation.passedByCurrent} 条`}</Link>
              <Link className="btn" to={R.weekly}>
                v4 提议
              </Link>
            </div>
            <p className="muted" style={{ margin: '0 0 8px', fontSize: 12 }}>
              委托规则本身是 L0 知识，只能由你确认和取代。每次放行都记录规则版本，规则写错时能批量找出它放行过的条目
            </p>
            <List items={r.delegation.history.map((h) => ({ key: h.version, main: `${h.version} · ${h.date}`, meta: h.note, right: <Chip tone={h.current ? 'doing' : 'queue'}>{h.current ? '当前' : '已取代'}</Chip> }))} />
          </Section>
        </Col>
        <Col flex="1 1 360px">
          <Section id="rt-h" title="阈值" sub="由元层每月调整">
            <DataTable minWidth={360} cols={['阈值', '当前值', '上次调整']} rows={r.thresholds} />
          </Section>
        </Col>
      </Row>
    </PageMain>
  );
}
