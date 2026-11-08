import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../data';
import { searchConsole, type SearchKind, type SearchResult } from '../data/selectors';
import { LineIcon } from './icons';
import { Chip } from './primitives';
import type { Tone } from '../data/types';

const KIND_TONE: Record<SearchKind, Tone> = { 需求: 'doing', 子任务: 'you', 知识: 'done', 证据: 'queue' };

export interface CommandPaletteProps {
  open: boolean;
  /** Called to close; the palette restores focus to the trigger itself. */
  onClose: () => void;
}

/**
 * ⌘K global search overlay. Searches requirements, subtasks, knowledge and evidence from `src/data`,
 * by ID or keyword. Arrow keys move the selection, Enter jumps via the existing `?item=`/`?id=` deep
 * links, Esc closes and returns focus to the trigger. Keyboard-only use is a hard requirement.
 */
export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const d = useData();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => searchConsole(d, query), [d, query]);

  // Reset state and move focus into the field each time the palette opens.
  useEffect(() => {
    if (!open) return;
    setQuery('');
    setActive(0);
    inputRef.current?.focus();
  }, [open]);

  // Keep the active index in range as results change.
  useEffect(() => {
    setActive((i) => (results.length === 0 ? 0 : Math.min(i, results.length - 1)));
  }, [results.length]);

  // Keep the active row scrolled into view.
  useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  if (!open) return null;

  const go = (r: SearchResult) => {
    onClose();
    navigate(r.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (results.length === 0 ? 0 : (i + 1) % results.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (results.length === 0 ? 0 : (i - 1 + results.length) % results.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const r = results[active];
      if (r) go(r);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const listId = 'cmdk-list';
  const activeId = results[active] ? `cmdk-opt-${active}` : undefined;

  return (
    <div
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(8,9,10,.6)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '12vh 16px 16px', boxSizing: 'border-box' }}
    >
      <div className="glass" role="dialog" aria-modal="true" aria-label="全局搜索" style={{ width: 'min(640px, 100%)', padding: 8, display: 'flex', flexDirection: 'column', gap: 8, maxHeight: '70vh', boxSizing: 'border-box' }}>
        <div role="search" className="inp" style={{ display: 'flex', alignItems: 'center', gap: 8, minHeight: 44 }}>
          <LineIcon name="Search" color="#8A8F98" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={activeId}
            aria-label="搜索需求、任务、知识、证据"
            placeholder="搜索需求、子任务、知识、证据，或输入编号跳转"
            style={{ flex: 1, border: 0, background: 'transparent', fontFamily: 'inherit', fontSize: 15, color: '#EDEEF0', outline: 'none', minWidth: 0 }}
          />
          <span className="kbd">Esc</span>
        </div>
        {results.length === 0 ? (
          <p className="muted" style={{ margin: 0, padding: '16px 12px', fontSize: 13 }}>
            没有匹配的结果
          </p>
        ) : (
          <ul ref={listRef} id={listId} role="listbox" aria-label="搜索结果" style={{ listStyle: 'none', margin: 0, padding: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {results.map((r, i) => {
              const selected = i === active;
              return (
                <li
                  key={`${r.kind}-${r.id}`}
                  id={`cmdk-opt-${i}`}
                  role="option"
                  aria-selected={selected}
                  onMouseMove={() => setActive(i)}
                  onClick={() => go(r)}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, cursor: 'pointer', background: selected ? 'rgba(124,108,255,.16)' : 'transparent' }}
                >
                  <span className="mono" style={{ flex: 'none', width: 92, color: selected ? '#C9CDD4' : '#8A8F98' }}>
                    {r.id}
                  </span>
                  <span style={{ flex: 1, minWidth: 0, fontSize: 14, color: '#EDEEF0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={`${r.title} · ${r.meta}`}>
                    {r.title}
                    <span className="muted" style={{ marginLeft: 8, fontSize: 12 }}>
                      {r.meta}
                    </span>
                  </span>
                  <Chip tone={KIND_TONE[r.kind]}>{r.kind}</Chip>
                </li>
              );
            })}
          </ul>
        )}
        <div className="muted" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '4px 12px 2px', fontSize: 12, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span className="kbd">↑</span>
            <span className="kbd">↓</span>
            选择
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span className="kbd">↵</span>
            跳转
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span className="kbd">Esc</span>
            关闭
          </span>
        </div>
      </div>
    </div>
  );
}
