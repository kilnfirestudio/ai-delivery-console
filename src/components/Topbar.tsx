import { useData } from '../data';
import { LineIcon } from '../ui/icons';

export default function Topbar() {
  const { workspace: ws } = useData();
  const n = ws.notifications;
  return (
    <header style={{ height: 56, background: 'rgba(8,9,10,.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '0 32px', boxSizing: 'border-box' }}>
      <div role="search" className="inp" style={{ flex: '0 1 480px', width: 'auto', display: 'flex', alignItems: 'center', gap: 8, minHeight: 38, padding: '0 12px' }}>
        <LineIcon name="Search" color="#8A8F98" />
        <input aria-label="搜索" placeholder="搜索需求、任务、知识、证据，或输入编号跳转" style={{ flex: 1, border: 0, background: 'transparent', fontFamily: 'inherit', fontSize: 14, color: '#EDEEF0', outline: 'none', minWidth: 0 }} />
        <span className="kbd">⌘K</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="muted" style={{ fontSize: 13 }}>{`${ws.weekday} ${ws.today.slice(5).replace('-', '/')} · ${ws.now}`}</span>
        <button className="btn" type="button" aria-label={`通知：即时 ${n.instant} 条，其余在 ${n.digestAt} 合并为摘要`}>
          <LineIcon name="BellPlain" />
          {`即时 ${n.instant}`}
          <span className="muted" style={{ fontWeight: 400 }}>{`· 摘要 ${n.digestAt}`}</span>
        </button>
      </div>
    </header>
  );
}
