import { NavLink } from 'react-router-dom';
import { NAV, R } from '../app/routes';
import { useData } from '../data';
import { attentionIn, reviewQueue } from '../data/selectors';
import { LineIcon } from '../ui/icons';
import { Chip, Led, Stage } from '../ui/primitives';

export default function Sidebar() {
  const d = useData();
  const ws = d.workspace;
  const badges = { review: reviewQueue(d).length, visual: attentionIn(d, '看截图').length };
  return (
    <aside aria-label="侧边导航" style={{ background: 'rgba(11,12,14,.92)', borderRight: '1px solid rgba(255,255,255,.06)', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 18, boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 6px' }}>
        <div aria-hidden="true" style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #8E7CFF, #4F8CFF)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LineIcon name="Sparkles" color="#101113" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#F5F6F7' }}>AI 交付控制台</span>
          <span style={{ fontSize: 12, color: '#8A8F98' }}>{`${ws.name} ▾`}</span>
        </div>
      </div>
      <NavLink to={R.intake} className="btn btn-p" style={({ isActive }) => ({ width: '100%', ...(isActive ? { background: '#F5F6F7', borderColor: '#F5F6F7', boxShadow: '0 0 0 3px rgba(124,108,255,.35)' } : {}) })}>
        <LineIcon name="Plus" />
        登记需求
      </NavLink>
      <nav aria-label="主导航" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {NAV.map(({ group, items }) => (
          <div key={group}>
            <p className="sg">{group}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {items.map((it) => {
                const count = it.badge ? badges[it.badge] : 0;
                return (
                  <NavLink key={it.route} to={R[it.route]} end={it.route === 'overview'} className={({ isActive }) => (isActive ? 'sl sl-on' : 'sl')}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <LineIcon name={it.icon} />
                      <span>{it.label}</span>
                    </span>
                    {count > 0 ? (
                      <span className="cnt" aria-label={`${count} 件`}>
                        {count}
                      </span>
                    ) : (
                      it.stage && <Stage>{it.stage}</Stage>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 10px 0', borderTop: '1px solid rgba(255,255,255,.06)', fontSize: 12, color: '#A1A6B0' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Led tone={ws.gateway.online ? 'g' : 'r'} />
          {`网关${ws.gateway.online ? '在线' : '离线'} · ${ws.gateway.latencyMs} ms`}
        </span>
        <span className="muted" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Led tone={ws.devices.every((x) => x.online) ? 'g' : 'a'} size={6} />
          {`${ws.devices.map((x) => x.name).join(' · ')} ${ws.devices.every((x) => x.online) ? '在线' : '部分离线'}`}
        </span>
        <span className="muted">{`当前阶段：${ws.stage} ${ws.stageLabel}`}</span>
        <Chip style={{ alignSelf: 'flex-start' }}>示例数据</Chip>
      </div>
    </aside>
  );
}
