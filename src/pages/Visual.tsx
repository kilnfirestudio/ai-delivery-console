import { useData, type ScreenshotDiff } from '../data';
import { agentById, findSubtask } from '../data/selectors';
import { Chip, Col, List, PageHeader, PageMain, Row, Section, SegControl } from '../ui/primitives';

const VERDICT = { 预期: ['done', '#8DB6FF'], 意外: ['risk', '#FF7B72'], 噪声: ['queue', '#A1A6B0'] } as const;
const block = (h: number, bg = 'rgba(255,255,255,.14)') => <span style={{ height: h, background: bg, borderRadius: 4 }} />;

function Badge({ n, color }: { n: number; color: string }) {
  return <span style={{ position: 'absolute', top: -10, left: -10, width: 20, height: 20, borderRadius: 10, background: color, color: '#FFFFFF', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</span>;
}

/** Stylised phone screenshot; `diffs` marks the changed regions of the new version. */
function Phone({ label, diffs }: { label: string; diffs?: ScreenshotDiff[] }) {
  const changed = !!diffs;
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
      <div style={{ width: 200, height: 380, padding: 8, boxSizing: 'border-box', borderRadius: 32, background: 'linear-gradient(145deg, #34373D, #121417)', boxShadow: '0 16px 32px rgba(16,24,40,.28), 0 2px 4px rgba(16,24,40,.2), inset 0 1px 0 rgba(255,255,255,.15)' }}>
        <div style={{ position: 'relative', height: '100%', borderRadius: 24, background: '#16171A', padding: '14px 12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>
          <span style={{ height: 12, width: '60%', background: 'rgba(255,255,255,.08)', borderRadius: 3 }} />
          {block(70, 'rgba(255,255,255,.08)')}
          {changed ? (
            <span style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {block(60)}
              {block(60)}
              {block(60)}
              {block(60)}
            </span>
          ) : (
            <span style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {block(60)}
              {block(60)}
            </span>
          )}
          <span style={{ marginTop: changed ? 22 : 30, height: 30, background: 'rgba(255,255,255,.05)', borderRadius: 4 }} />
          {changed && (
            <>
              <span title={`差异 1：${diffs[0]?.text}`} style={{ position: 'absolute', left: 6, right: 6, top: 118, height: 132, border: '2px solid #6E5CF6', borderRadius: 4, background: 'rgba(37,99,235,0.06)' }}>
                <Badge n={1} color="#6E5CF6" />
              </span>
              <span className="diffp" title={`差异 2：${diffs[1]?.text}`} style={{ position: 'absolute', left: 6, right: 6, top: 296, height: 46, border: '2px solid #D92D20', borderRadius: 4, background: 'rgba(217,45,32,0.08)' }}>
                <Badge n={2} color="#D92D20" />
              </span>
              <span className="scan" aria-hidden="true" />
            </>
          )}
          <span aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(115deg, rgba(255,255,255,.35) 0%, rgba(255,255,255,0) 32%)' }} />
        </div>
      </div>
      <figcaption style={{ fontSize: 13, fontWeight: 500 }}>{label}</figcaption>
    </figure>
  );
}

export default function Visual() {
  const d = useData();
  const pending = d.visualReviews.find((v) => v.status === '待你看');
  const s = pending?.subtask ? findSubtask(d, pending.subtask) : undefined;
  const a = agentById(d, s?.agentId);
  const req = d.requirements.find((r) => r.id === s?.requirementId);
  const project = d.projects.find((p) => p.id === req?.projectId);
  const waited = d.attention.find((x) => x.kind === '看截图' && x.refs?.subtask === pending?.subtask)?.waitedMin;

  return (
    <PageMain>
      <PageHeader icon="Visual" title="截图审核" sub="看每个子任务的截图，以及合并后的回归差异。差异区域自动框出，你只需要判断“是不是预期的”" />
      <Row>
        <Col flex="0 1 340px">
          <Section id="vq-h" title="队列" sub="你的两个检查点：子任务截图、合并后的回归差异">
            <List
              items={d.visualReviews.map((v) => ({
                key: v.id,
                main: (
                  <>
                    <Chip tone={v.status === '待你看' ? 'you' : 'done'}>{v.status}</Chip> {v.subject}
                  </>
                ),
                meta: `${v.by} · ${v.meta}`,
                right: (
                  <span className="muted" style={{ fontSize: 12 }}>
                    {v.status === '待你看' && waited ? `已等 ${waited} 分钟` : '今天'}
                  </span>
                ),
              }))}
            />
          </Section>
          {pending?.acceptance && (
            <Section id="va-h" title="本任务验收标准">
              <List items={pending.acceptance.map((c) => ({ key: c.text, main: c.text, meta: c.note, right: <Chip tone={c.met ? 'done' : 'risk'}>{c.met ? '满足' : '不满足'}</Chip> }))} />
            </Section>
          )}
        </Col>
        {pending && s && (
          <Col flex="1 1 640px">
            <Section id="vm-h" title={`${s.id} · ${s.title}`} sub={`${project?.short} · ${a?.name} · ${a?.tool} · 文件范围 ${s.files?.join(' ')} · 检查点 ${s.checkpoint} / 5`} right={<Chip tone="you">待你看</Chip>}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'space-between', marginBottom: 18 }}>
                <SegControl label="设备" options={pending.devices?.map((x) => `${x.name} · ${x.diffPct}%`) ?? []} />
                <SegControl label="比对方式" options={['并排', '叠加', '只看差异']} />
              </div>
              <div className="well" style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'center', padding: 24, borderRadius: 12 }}>
                <Phone label={`基准 · ${pending.baseline}`} />
                <Phone label={`本次 · ${s.id}`} diffs={pending.diffs} />
              </div>
            </Section>
            <Section id="vd-h" title={`差异 · ${pending.diffs?.length ?? 0} 处`} sub="按“是否在文件范围内”自动初判，最终由你决定">
              <List
                items={(pending.diffs ?? []).map((x, i) => ({
                  key: x.text,
                  main: (
                    <>
                      <span className="mono" style={{ color: VERDICT[x.verdict][1], fontWeight: 600 }}>
                        {i + 1}
                      </span>{' '}
                      {x.text}
                    </>
                  ),
                  meta: x.note,
                  right: <Chip tone={VERDICT[x.verdict][0]}>{x.verdict}</Chip>,
                }))}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 16 }}>
                <label htmlFor="bk" style={{ fontSize: 13, fontWeight: 600 }}>
                  退回说明
                </label>
                <textarea id="bk" className="inp" rows={2} style={{ resize: 'vertical' }} defaultValue={pending.suggestedReturnNote} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  <button className="btn btn-p" type="button">
                    {`退回并附上差异 ${(pending.diffs ?? []).findIndex((x) => x.verdict === '意外') + 1}`}
                  </button>
                  <button className="btn" type="button">
                    通过，记录“你看过截图”
                  </button>
                </div>
                <p className="muted" style={{ margin: 0, fontSize: 12 }}>
                  通过后进入检查点 5：合并回归。退回会计入返工轮数
                </p>
              </div>
            </Section>
          </Col>
        )}
      </Row>
    </PageMain>
  );
}
