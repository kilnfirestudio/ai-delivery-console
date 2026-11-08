import { useEffect, useRef, useState } from 'react';
import { useData } from '../data';
import CommandPalette from '../ui/CommandPalette';
import { LineIcon } from '../ui/icons';

export default function Topbar() {
  const { workspace: ws } = useData();
  const n = ws.notifications;
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // ⌘K / Ctrl+K opens the palette from anywhere, except while typing in a field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        if ((e.target as HTMLElement).closest('input, textarea, select')) return;
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Closing returns focus to the trigger, so keyboard users land back where they started.
  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header style={{ height: 56, background: 'rgba(8,9,10,.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '0 32px', boxSizing: 'border-box' }}>
      <button ref={triggerRef} type="button" onClick={() => setOpen(true)} role="search" className="inp" aria-haspopup="dialog" aria-label="搜索需求、任务、知识、证据，或输入编号跳转" style={{ flex: '0 1 480px', width: 'auto', display: 'flex', alignItems: 'center', gap: 8, minHeight: 38, padding: '0 12px', cursor: 'text', textAlign: 'left' }}>
        <LineIcon name="Search" color="#8A8F98" />
        <span style={{ flex: 1, fontSize: 14, color: '#6B7079', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>搜索需求、任务、知识、证据，或输入编号跳转</span>
        <span className="kbd">⌘K</span>
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="muted" style={{ fontSize: 13 }}>{`${ws.weekday} ${ws.today.slice(5).replace('-', '/')} · ${ws.now}`}</span>
        <button className="btn" type="button" aria-label={`通知：即时 ${n.instant} 条，其余在 ${n.digestAt} 合并为摘要`}>
          <LineIcon name="BellPlain" />
          {`即时 ${n.instant}`}
          <span className="muted" style={{ fontWeight: 400 }}>{`· 摘要 ${n.digestAt}`}</span>
        </button>
      </div>
      <CommandPalette open={open} onClose={close} />
    </header>
  );
}
