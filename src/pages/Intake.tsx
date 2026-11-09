import { Fragment, useRef, useState } from 'react';
import { useData } from '../data';
import { Chip, Col, Grid, List, Note, PageHeader, PageMain, Row, Section } from '../ui/primitives';
import { PageState, SkelCard, SkelList, SkelRow, SkelSection } from './_states';

function StepsBar({ names, current, onStep }: { names: string[]; current: number; onStep: (i: number) => void }) {
  return (
    <ol aria-label="步骤" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
      {names.map((n, i) => {
        const now = i === current;
        const [dot, col] = i < current ? [{ background: '#039855', color: '#FFFFFF' }, '#EDEEF0'] : now ? [{ background: '#6E5CF6', color: '#FFFFFF' }, '#8DB6FF'] : [{ background: 'rgba(255,255,255,.08)', color: '#A1A6B0' }, '#A1A6B0'];
        return (
          <Fragment key={n}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <button type="button" onClick={() => onStep(i)} aria-current={now ? 'step' : undefined} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 0, border: 0, background: 'none', cursor: 'pointer', font: 'inherit' }}>
                <span style={{ width: 24, height: 24, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, ...dot }}>{i + 1}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: col }}>{n}</span>
              </button>
            </li>
            {i < names.length - 1 && <li aria-hidden="true" style={{ flex: '0 0 40px', height: 1, background: 'rgba(255,255,255,.14)' }} />}
          </Fragment>
        );
      })}
    </ol>
  );
}

function ShotThumb({ name }: { name: string }) {
  const bar = (h: number, bg = 'rgba(255,255,255,.08)', w?: string) => <span style={{ height: h, background: bg, borderRadius: 2, width: w }} />;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
      <div aria-hidden="true" style={{ width: 72, height: 110, borderRadius: 8, border: '1px solid rgba(255,255,255,.12)', background: '#16171A', padding: 6, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {bar(8)}
        {bar(34, 'rgba(255,255,255,.14)')}
        {bar(6, undefined, '70%')}
        {bar(18)}
      </div>
      <span className="muted" style={{ fontSize: 11 }}>
        {name}
      </span>
    </div>
  );
}

const h3 = (text: string, mb = 8) => <h3 style={{ margin: `0 0 ${mb}px`, fontSize: 15, fontWeight: 600 }}>{text}</h3>;

const SOURCES = ['微信', '邮件', '会议记录', '其他'];

export default function Intake() {
  const d = useData();
  const rec = d.intakeRecords[0];
  const req = d.requirements.find((r) => r.id === rec.requirementId)!;
  const project = d.projects.find((p) => p.id === req.projectId)!;
  const client = d.clients.find((c) => c.id === req.clientId);
  const kn = (id: string) => d.knowledge.find((k) => k.id === id)!;

  const [step, setStep] = useState(0);
  const [projectId, setProjectId] = useState(project.id);
  const [clientId, setClientId] = useState(client?.id);
  const [source, setSource] = useState(Math.max(0, SOURCES.indexOf(rec.source)));
  const [raw, setRaw] = useState(rec.rawText);
  const [expected, setExpected] = useState(rec.expected);
  const [tried, setTried] = useState(false);
  const rawRef = useRef<HTMLTextAreaElement>(null);

  const sel = d.clients.find((c) => c.id === clientId) ?? client;
  const rawEmpty = raw.trim() === '';
  const register = (toDraft: boolean) => {
    if (rawEmpty) {
      setTried(true);
      rawRef.current?.focus();
      return;
    }
    setStep(toDraft ? 1 : 0);
  };

  const form = (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={(e) => e.preventDefault()}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div className="field">
          <label htmlFor="pj">项目</label>
          <select id="pj" className="inp" value={projectId} onChange={(e) => setProjectId(e.target.value as typeof projectId)}>
            {d.projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="cl">客户</label>
          <select id="cl" className="inp" value={clientId ?? ''} onChange={(e) => setClientId((e.target.value || undefined) as typeof clientId)}>
            {d.clients
              .filter((c) => c.projectId === projectId)
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {`${c.name} · ${c.alias.replace(/^某/, '')}`}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="field">
        <span style={{ fontSize: 13, fontWeight: 600 }}>来源</span>
        <div className="seg" role="group" aria-label="来源">
          {SOURCES.map((o, i) => (
            <button key={o} type="button" aria-pressed={i === source} onClick={() => setSource(i)}>
              {o}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label htmlFor="raw">
          客户原话{' '}
          <span className="muted" style={{ fontWeight: 400 }}>
            原样粘贴，不要改写
          </span>
        </label>
        <textarea id="raw" ref={rawRef} className="inp" rows={6} style={{ resize: 'vertical', lineHeight: 1.6 }} value={raw} onChange={(e) => setRaw(e.target.value)} aria-invalid={tried && rawEmpty} aria-describedby={tried && rawEmpty ? 'raw-err' : undefined} />
        {tried && rawEmpty && (
          <span id="raw-err" role="alert" className="overdue" style={{ fontSize: 12, lineHeight: 1.5 }}>
            请先粘贴客户原话，这是登记的证据
          </span>
        )}
      </div>
      <div className="field">
        <span style={{ fontSize: 13, fontWeight: 600 }}>截图与附件</span>
        <div className="ants" style={{ border: '1.5px dashed rgba(255,255,255,.12)', borderRadius: 10, padding: 14, display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
          {rec.attachments.map((a) => (
            <ShotThumb key={a} name={a} />
          ))}
          <span className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>
            拖入截图、文件，或直接粘贴
            <br />
            ⌘V 粘贴剪贴板里的截图
          </span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div className="field">
          <label htmlFor="dl">期望上线</label>
          <input id="dl" className="inp" value={expected} onChange={(e) => setExpected(e.target.value)} />
        </div>
        <div className="field">
          <span style={{ fontSize: 13, fontWeight: 600 }}>可见范围</span>
          <div className="inp muted" style={{ display: 'flex', alignItems: 'center' }}>
            {sel ? `只限${sel.name}（自动）` : '内部'}
          </div>
        </div>
      </div>
      <Note>{`原话和截图会作为证据原样保存，${sel ? `按${sel.name}加密，` : ''}只追加不修改。登记后生成任务编号。`}</Note>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <button className="btn btn-p" type="button" onClick={() => register(true)}>
          登记并起草确认单
        </button>
        <button className="btn" type="button" onClick={() => register(false)}>
          只登记
        </button>
      </div>
    </form>
  );

  const draft = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
        <Chip tone="doing">草稿</Chip>
        <span className="muted" style={{ fontSize: 12 }}>
          {`${rec.drafted.by} ${rec.drafted.at} 起草 · 检索 ${rec.drafted.retrieved} 条 · 引用 ${rec.drafted.cited} 条`}
        </span>
      </div>
      <div>
        {h3('我们理解的需求')}
        <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14, lineHeight: 1.6 }}>
          {rec.understanding.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div>
        {h3(`验收标准 · ${req.acceptance?.length ?? 0}`, 4)}
        <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
          {req.acceptance?.map((c, i) => (
            <li key={c.text} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 10, padding: '8px 0', borderTop: '1px solid rgba(255,255,255,.05)' }}>
              <span className="muted mono" style={{ paddingTop: 2 }}>
                {i + 1}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 14, lineHeight: 1.5 }}>{c.text}</span>
                <span className="muted" style={{ fontSize: 12 }}>
                  {`来源：${rec.criteriaSources[i]}`}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div>
        {h3('本次不包括')}
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.6 }}>
          {rec.excluded.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div>
        {h3(`需要客户回答 · ${rec.questions.length}`)}
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.6 }}>
          {rec.questions.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <button className="btn btn-p" type="button">
          复制确认单文本
        </button>
        <button className="btn" type="button">
          生成客户共享链接
        </button>
        <button className="btn" type="button" onClick={() => setStep(0)}>
          修改
        </button>
      </div>
      <p className="muted" style={{ margin: 0, fontSize: 12, lineHeight: 1.6 }}>
        对外承诺属于后果大的决定，确认单只能由你发出。客户的回复登记回来后，作为证据进入第 2 步。
      </p>
    </div>
  );

  return (
    <PageMain>
      <PageHeader
        title="登记需求"
        icon="Intake"
        sub={`把客户原话交给系统，拆分要等客户确认需求单之后。示例是 ${req.registeredAt} 登记 ${req.id} 时的样子`}
        right={<StepsBar names={['登记', '确认', '拆分']} current={step} onStep={(i) => (i <= step || !rawEmpty ? setStep(i) : (setTried(true), rawRef.current?.focus()))} />}
      />
      <PageState
        emptyTitle="还没有登记记录"
        emptyHint="把客户原话交给系统后，登记表单、确认单草稿和检索到的知识会出现在这里。"
        emptyIcon="Intake"
        skeleton={
          <>
            <SkelRow min={420}>
              <SkelSection><SkelCard title={false} height={320} /></SkelSection>
              <SkelSection><SkelCard title={false} height={320} /></SkelSection>
            </SkelRow>
            <SkelRow min={420}>
              <SkelSection><SkelList rows={3} /></SkelSection>
              <SkelSection><SkelList rows={3} /></SkelSection>
            </SkelRow>
          </>
        }
      >
      <Row>
        <Col flex="1 1 420px">
          <Section id="in-h" title="1 · 客户原话" sub="一次提交同时生成任务和证据">
            {form}
          </Section>
        </Col>
        <Col flex="1.2 1 480px">
          <Section id="cf-h" title="2 · 确认单草稿" sub="发给客户前你要看一遍" variant="paper">
            {draft}
          </Section>
        </Col>
      </Row>
      <Grid min={420} gap={24}>
        <Section id="kc-h" title="用到的已有知识" sub="起草时自动检索，每条都可点开">
          <List
            items={rec.knowledgeUsed.map((u) => {
              const k = kn(u.id);
              return { key: u.id, main: `${k.id} ${k.text}`, meta: [k.scope.replace(/^L\d /, ''), u.use === '冲突' ? undefined : k.level, u.note].filter(Boolean).join(' · '), right: <Chip tone={u.use === '冲突' ? 'risk' : 'done'}>{u.use}</Chip> };
            })}
          />
        </Section>
        <Section id="hs-h" title="相似的历史需求" sub="上次踩过的坑会提前出现在这里">
          <List
            items={rec.similar.map((id) => {
              const p = d.pastRequirements.find((x) => x.id === id)!;
              return { key: id, main: `${p.id} ${p.title}`, meta: `${p.month} · ${p.outcome} · ${p.lesson}`, right: <Chip>{`相似 ${p.similarity.toFixed(2)}`}</Chip> };
            })}
          />
        </Section>
      </Grid>
      </PageState>
    </PageMain>
  );
}
