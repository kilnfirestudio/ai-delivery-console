import { Link } from 'react-router-dom';
import { R } from '../app/routes';
import { useData } from '../data';
import { LEVEL_TONE } from '../data/selectors';
import { GuardedSwitch } from '../ui/controls';
import { Chip, Col, DataTable, Grid, List, PageHeader, PageMain, Row, Section } from '../ui/primitives';

export default function Clients() {
  const d = useData();
  const selected = 'A';
  const client = d.clients.find((c) => c.id === selected)!;
  const prof = d.clientProfiles.find((p) => p.clientId === selected)!;
  const kn = (id: string) => d.knowledge.find((k) => k.id === id)!;
  const candidates = (id: string) => d.knowledge.filter((k) => k.lifecycle === '候选' && k.scope === `L3 ${d.clients.find((c) => c.id === id)?.name}`).length;
  const active = (id: string) => d.requirements.filter((r) => r.clientId === id && !r.deliveredAt).length;
  const history = [
    ...d.requirements.filter((r) => r.clientId === selected).map((r) => ({ key: r.id, main: `${r.id} ${r.title}`, meta: r.deliveredAt ? `${r.deliveredAt} 验收` : `确认单 ${r.specVersion} ${r.registeredAt} 客户已确认 · 开发中`, done: !!r.deliveredAt })),
    ...d.pastRequirements.filter((p) => p.clientId === selected).map((p) => ({ key: p.id, main: `${p.id} ${p.title}`, meta: `${p.acceptedAt} 验收 · ${p.outcome}`, done: true })),
  ];

  return (
    <PageMain>
      <PageHeader icon="Clients" title="客户" sub="客户层的知识和证据按客户加密隔离；合作结束可以整体销毁，不影响 git" />
      <Grid min={260}>
        {d.clientProfiles.map((p) => {
          const c = d.clients.find((x) => x.id === p.clientId)!;
          const sel = p.clientId === selected;
          const dead = p.status === '已销毁';
          const cand = candidates(c.id);
          const rows: [string, string][] = dead
            ? p.remains ?? []
            : [
                ['客户层知识', `${p.knowledgeCount} 条${cand ? ` + 候选 ${cand}` : ''}`],
                ['证据', `${p.evidenceCount} 份`],
                ['需求', `${p.requirementCount} 个 · 进行中 ${active(c.id)}`],
                ['返工率', p.rework ?? '—'],
              ];
          return (
            <Link key={c.id} to={R.clients} className={dead ? 'card well' : 'card'} aria-current={sel ? 'true' : 'false'} style={{ ...(sel ? { borderColor: '#6E5CF6', boxShadow: '0 0 0 1px #6E5CF6' } : {}), textDecoration: 'none', color: '#EDEEF0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{c.name}</span>
                <Chip tone={dead ? 'queue' : 'doing'}>{p.status}</Chip>
              </div>
              <span className="muted" style={{ fontSize: 13 }}>
                {p.summary}
              </span>
              <div>
                {rows.map(([a, b]) => (
                  <div key={a} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '4px 0' }}>
                    <span className="muted">{a}</span>
                    <span style={{ fontWeight: 500 }}>{b}</span>
                  </div>
                ))}
              </div>
            </Link>
          );
        })}
      </Grid>
      <Row>
        <Col flex="1.6 1 560px">
          <Section id="ck-h" title={`${client.name} 的知识 · ${prof.knowledgeCount} 条`} sub={`特别优先：客户层的条目在${client.name} 的任务里优先于上层；覆盖上层时必须写理由`}>
            <DataTable
              minWidth={560}
              widths={['34%', '64px', '80px', undefined]}
              cols={['条目', '约束', '可信度', '与上层的关系']}
              rows={(prof.knowledgeShown ?? []).map(({ id, relation }) => {
                const k = kn(id);
                const cand = k.lifecycle === '候选';
                return [
                  <>
                    <span className="mono">{k.id}</span> {k.short}
                  </>,
                  <Chip tone={cand ? 'doing' : LEVEL_TONE[k.level]}>{cand ? '候选' : k.level}</Chip>,
                  k.credibility,
                  relation ?? '—',
                ];
              })}
            />
            <Link to={R.knowledge} style={{ display: 'inline-block', marginTop: 12, fontSize: 13 }}>
              {`查看全部 ${prof.knowledgeCount} 条`}
            </Link>
          </Section>
          <Section id="ch-h" title="确认单与验收">
            <List items={history.map((h) => ({ key: h.key, main: h.main, meta: h.meta, right: <Chip tone={h.done ? 'done' : 'doing'}>{h.done ? '已交付' : '进行中'}</Chip> }))} />
          </Section>
          <Section id="cd-h" title="结束合作" style={{ borderColor: 'rgba(248,81,73,.45)' }}>
            <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.6 }}>{`销毁${client.name} 的密钥后：客户库、证据、索引分区一并删除；事件日志只剩 ID 和哈希；git 里没有客户内容，不受影响；已经去标识上提的知识保留。`}</p>
            <div className="field" style={{ maxWidth: 360 }}>
              <label htmlFor="cn">{`输入“${client.name}”确认`}</label>
              <input id="cn" className="inp" placeholder={client.name} />
            </div>
            <GuardedSwitch />
          </Section>
        </Col>
        <Col flex="1 1 360px">
          <Section id="cp-h" title="客户档案">
            <List items={(prof.profile ?? []).map(([a, b]) => ({ key: a, main: a, meta: b }))} />
          </Section>
          <Section id="ci-h" title="隔离状态">
            <List items={(prof.isolation ?? []).map((x) => ({ key: x.label, main: x.label, meta: x.detail, right: <Chip tone={x.ok ? 'done' : 'risk'}>{x.ok ? '正常' : '已拦截'}</Chip> }))} />
          </Section>
        </Col>
      </Row>
    </PageMain>
  );
}
