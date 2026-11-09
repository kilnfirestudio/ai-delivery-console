import { useState } from 'react';
import { Link } from 'react-router-dom';
import { R } from '../app/routes';
import { useData } from '../data';
import { LEVEL_TONE } from '../data/selectors';
import { Chip, Col, DataTable, Grid, List, PageHeader, PageMain, Row, Section } from '../ui/primitives';
import { PageState, SkelCards, SkelList, SkelRow, SkelSection, SkelTable } from './_states';

export default function Clients() {
  const d = useData();
  const selected = 'A';
  const client = d.clients.find((c) => c.id === selected)!;
  const prof = d.clientProfiles.find((p) => p.clientId === selected)!;
  const kn = (id: string) => d.knowledge.find((k) => k.id === id)!;
  const candidates = (id: string) => d.knowledge.filter((k) => k.lifecycle === '候选' && k.scope === `L3 ${d.clients.find((c) => c.id === id)?.name}`).length;
  const active = (id: string) => d.requirements.filter((r) => r.clientId === id && !r.deliveredAt).length;
  const history = [
    ...d.requirements.filter((r) => r.clientId === selected).map((r) => ({ key: r.id, main: `${r.id} ${r.title}`, meta: r.deliveredAt ? `${r.deliveredAt} 验收` : `确认单 ${r.specVersion} ${r.registeredAt} 客户已确认 · 开发中`, done: !!r.deliveredAt, date: r.deliveredAt ?? r.registeredAt })),
    ...d.pastRequirements.filter((p) => p.clientId === selected).map((p) => ({ key: p.id, main: `${p.id} ${p.title}`, meta: `${p.acceptedAt} 验收 · ${p.outcome}`, done: true, date: p.acceptedAt })),
  ].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

  return (
    <PageMain>
      <PageHeader icon="Clients" title="客户" sub="客户层的知识和证据按客户加密隔离；合作结束可以整体销毁，不影响 git" />
      <PageState
        emptyTitle="还没有客户"
        emptyHint="登记带客户的需求后，客户档案、知识和隔离状态会出现在这里。"
        emptyIcon="Clients"
        skeleton={
          <>
            <SkelCards count={3} min={260} lines={5} />
            <SkelRow min={360}>
              <SkelSection><SkelTable rows={4} cols={4} /></SkelSection>
              <SkelSection><SkelList rows={4} /></SkelSection>
            </SkelRow>
          </>
        }
      >
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
            <Link key={c.id} to={R.clients} className={dead ? 'card well' : 'card'} aria-current={sel ? 'true' : 'false'} style={{ ...(sel ? { borderColor: '#6E5CF6', boxShadow: '0 0 0 1px #6E5CF6' } : {}), textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', gap: 10 }}>
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
            <EndCooperation name={client.name} />
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
      </PageState>
    </PageMain>
  );
}

/**
 * 结束合作的销毁开关：带铰链保护盖。
 * 必须先掀开保护盖、并输入客户名称确认，拨动开关才会执行；期间可随时盖回取消。
 * 纯前端示例，不触发真实销毁。
 */
function EndCooperation({ name }: { name: string }) {
  const [text, setText] = useState('');
  const [lifted, setLifted] = useState(false);
  const [done, setDone] = useState(false);
  const match = text.trim() === name;
  const armed = lifted && match && !done;

  const flip = () => {
    if (armed) setDone(true);
  };
  const toggleCover = () => {
    if (done) return;
    setLifted((v) => !v);
  };

  return (
    <>
      <div className="field" style={{ maxWidth: 360 }}>
        <label htmlFor="cn">{`输入“${name}”确认`}</label>
        <input id="cn" className="inp" placeholder={name} value={text} onChange={(e) => setText(e.target.value)} disabled={done} />
      </div>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div
          role="group"
          aria-label="带保护盖的销毁开关"
          style={{ position: 'relative', width: 120, height: 64, borderRadius: 4, background: '#0C0D0F', border: '1px solid rgba(248,81,73,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* 物理开关：掀盖且输入正确后才可拨动 */}
          <button
            type="button"
            role="switch"
            aria-checked={done}
            aria-disabled={!armed}
            aria-label={`拨动销毁开关（${done ? '已执行' : armed ? '可拨动' : '先掀开保护盖并输入名称'}）`}
            onClick={flip}
            style={{
              width: 64,
              height: 30,
              padding: 0,
              borderRadius: 15,
              border: 0,
              background: done ? 'rgba(248,81,73,.9)' : '#1E293B',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,.6)',
              position: 'relative',
              cursor: armed ? 'pointer' : 'not-allowed',
              transition: 'background 150ms',
            }}
          >
            <span
              aria-hidden="true"
              style={{ position: 'absolute', top: 3, left: done ? 37 : 3, width: 24, height: 24, borderRadius: 12, background: 'linear-gradient(180deg, #CBD5E1, #64748B)', boxShadow: '0 1px 3px rgba(0,0,0,.5)', transition: 'left 150ms' }}
            />
          </button>
          {/* 保护盖：掀开后抬起让位 */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 4,
              borderRadius: 9,
              background: 'linear-gradient(180deg, rgba(248,81,73,.26), rgba(248,81,73,.12))',
              border: '1px solid rgba(248,81,73,.6)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,.14)',
              transformOrigin: 'top center',
              transform: lifted ? 'translateY(-14px) rotateX(78deg)' : 'none',
              opacity: lifted ? 0 : 1,
              pointerEvents: 'none',
              transition: 'transform 220ms ease, opacity 220ms ease',
            }}
          />
          <span aria-hidden="true" style={{ position: 'absolute', left: 10, right: 10, top: 2, height: 3, borderRadius: 2, background: '#F85149' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {done ? (
            <>
              <Chip tone="risk">已执行销毁（示例）</Chip>
              <span className="muted" style={{ fontSize: 12 }}>
                {`${name} 的客户库、证据与索引分区已在示例中标记删除。`}
              </span>
            </>
          ) : (
            <>
              <button className={lifted ? 'btn' : 'btn btn-d'} type="button" onClick={toggleCover}>
                {lifted ? '盖上保护盖' : '掀开保护盖'}
              </button>
              <span className="muted" style={{ fontSize: 12 }}>
                {lifted && !match
                  ? `先输入“${name}”才能拨动开关，期间可随时取消`
                  : lifted
                    ? '拨动开关即执行，期间可随时盖回取消'
                    : '掀盖后拨动开关才会执行，期间可随时取消'}
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
