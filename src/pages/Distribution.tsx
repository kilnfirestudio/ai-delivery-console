import { useData } from '../data';
import { Chip, Col, DataTable, Grid, List, PageHeader, PageMain, Row, Section } from '../ui/primitives';

export default function Distribution() {
  const d = useData();
  const ds = d.distribution;
  const projectName = (id: string) => (id === 'shopline' ? 'bundle 插件' : d.projects.find((p) => p.id === id)?.short ?? id);
  const latest = Object.fromEntries(ds.hotZones.map((h) => [h.projectId, h.version]));
  const behind = ds.sync.flatMap((r) => r.cells.filter((c) => c && c.version !== latest[r.projectId])).length;
  const usedVersions = d.agents
    .map((a) => (a.activeSubtask ? d.subtasks.find((s) => `${s.requirementId}/${s.id}` === a.activeSubtask) : undefined))
    .filter((s) => s !== undefined)
    .map((s) => ({ s, v: latest[d.requirements.find((r) => r.id === s.requirementId)?.projectId ?? ''] }));
  const byVersion = [...new Set(usedVersions.map((x) => x.v))].map((v) => `${usedVersions.filter((x) => x.v === v).map((x) => x.s.id).sort().join('、')} 用 ${v}`);
  const kn = (id: string) => d.knowledge.find((k) => k.id === id);

  return (
    <PageMain>
      <PageHeader icon="Distribution" title="分发" sub="知识通过四种通道到达 agent：热区本地保底，网关远程增强" />
      <Grid min={220}>
        {ds.channels.map((c) => (
          <div key={c.name} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 15, fontWeight: 600 }}>{c.name}</span>
            <span className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
              {c.desc}
            </span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <Chip tone={c.tone}>{`可观测：${c.observable}`}</Chip>
            </div>
          </div>
        ))}
      </Grid>
      <Section id="dh-h" title="热区文件" sub="热区越小越好：它的遵守情况网关看不到">
        <DataTable
          minWidth={700}
          cols={['项目', '版本', '长度', '内容', '生成时间']}
          rows={ds.hotZones.map((h) => [
            projectName(h.projectId),
            <span className="mono">{h.version}</span>,
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 160 }}>
              <div title={`${h.lines} / ${ds.hotZoneLimit} 行`} style={{ height: 8, background: 'rgba(255,255,255,.05)', borderRadius: 4 }}>
                <div className="fill" style={{ width: `${Math.round((h.lines / ds.hotZoneLimit) * 100)}%`, height: 8, background: h.lines > ds.hotZoneWarnAt ? '#DC6803' : '#7C6CFF', borderRadius: 4 }} />
              </div>
              <span style={{ fontSize: 12 }}>{`${h.lines} / ${ds.hotZoneLimit} 行`}</span>
            </div>,
            `红线 ${h.redLines} · 核心约定 ${h.core}`,
            h.generated,
          ])}
        />
        <p className="muted" style={{ margin: '10px 0 0', fontSize: 12 }}>
          {`同一份内容生成 AGENTS.md、CLAUDE.md、GEMINI.md 和 Cursor 规则。超过 ${ds.hotZoneWarnAt} 行时标橙，提醒精简`}
        </p>
      </Section>
      <Row>
        <Col flex="1.4 1 560px">
          <Section id="dm-h" title="设备同步" sub={`任务记录会写明所用热区版本：${byVersion.join('，')}`}>
            <DataTable
              minWidth={640}
              cols={['项目', ...ds.devices]}
              rows={ds.sync.map((r) => [
                projectName(r.projectId),
                ...r.cells.map((c) => {
                  if (!c) return <span className="muted">未使用</span>;
                  const ok = c.version === latest[r.projectId];
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Chip tone={ok ? 'done' : 'risk'}>{`${c.version} · ${ok ? '最新' : '落后'}`}</Chip>
                      <span className="muted" style={{ fontSize: 12 }}>
                        {c.note ?? ''}
                      </span>
                    </div>
                  );
                }),
              ])}
            />
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <button className="btn btn-p" type="button">{`同步落后的 ${behind} 处`}</button>
            </div>
          </Section>
          <Section id="dk-h" title="技能" sub="平时只加载名称和简介，用到时才读全文">
            <List items={ds.skills.map((s) => ({ key: s.name, main: s.name, meta: s.desc, right: <Chip>{`用了 ${s.uses} 次`}</Chip> }))} />
          </Section>
        </Col>
        <Col flex="1 1 380px">
          <Section id="dd-h" title="最近一次变化">
            <pre className="mono well" style={{ margin: 0, padding: 14, borderRadius: 10, fontSize: 12, lineHeight: 1.8, overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
              <span style={{ color: '#A1A6B0' }}>{`${ds.lastChange.project} · ${ds.lastChange.from} → ${ds.lastChange.to} · ${ds.lastChange.at} · ${ds.lastChange.run}`}</span>
              {ds.lastChange.lines.map(([op, id]) => {
                const k = kn(id);
                const text = op === '-' && k?.supersededBy ? `${k.text}（${id}，已被 ${k.supersededBy} 取代）` : `${k?.text}（${id}）`;
                return (
                  <span key={id}>
                    {'\n'}
                    <span style={{ color: op === '+' ? '#56D364' : '#FF7B72' }}>{`${op} ${text}`}</span>
                  </span>
                );
              })}
            </pre>
          </Section>
          <Section id="dc-h" title="客户共享与公开发布" sub="对外的内容一律由你发出">
            <List items={ds.shares.map((s) => ({ key: s.title, main: s.title, meta: s.note, right: <Chip tone={s.tone}>{s.status}</Chip> }))} />
          </Section>
        </Col>
      </Row>
    </PageMain>
  );
}
