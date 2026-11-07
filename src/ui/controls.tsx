import { Link } from 'react-router-dom';
import type { SubtaskState } from '../data/types';

/** Destroy switch under a hinged guard cover: lift the cover, then flip. */
export function GuardedSwitch() {
  return (
    <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
      <div role="group" aria-label="带保护盖的销毁开关" style={{ position: 'relative', width: 120, height: 64, borderRadius: 4, background: '#0C0D0F', border: '1px solid rgba(248,81,73,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span aria-hidden="true" style={{ width: 64, height: 30, borderRadius: 15, background: '#1E293B', boxShadow: 'inset 0 1px 3px rgba(0,0,0,.6)', position: 'relative' }}>
          <span style={{ position: 'absolute', left: 3, top: 3, width: 24, height: 24, borderRadius: 12, background: 'linear-gradient(180deg, #CBD5E1, #64748B)', boxShadow: '0 1px 3px rgba(0,0,0,.5)' }} />
        </span>
        <span aria-hidden="true" style={{ position: 'absolute', inset: 4, borderRadius: 9, background: 'linear-gradient(180deg, rgba(248,81,73,.26), rgba(248,81,73,.12))', border: '1px solid rgba(248,81,73,.6)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.14)' }} />
        <span aria-hidden="true" style={{ position: 'absolute', left: 10, right: 10, top: 2, height: 3, borderRadius: 2, background: '#F85149' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <button className="btn btn-d" type="button">
          掀开保护盖
        </button>
        <span className="muted" style={{ fontSize: 12 }}>
          掀盖后拨动开关才会执行，期间可随时取消
        </span>
      </div>
    </div>
  );
}


export function Toggle({ on, label }: { on: boolean; label?: string }) {
  return (
    <span role="switch" aria-checked={on} aria-label={label} style={{ display: 'inline-block', position: 'relative', width: 44, height: 24, borderRadius: 12, background: on ? '#7C6CFF' : '#2A2C31', boxShadow: 'inset 0 1px 3px rgba(16,24,40,.3)' }}>
      <span style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 18, height: 18, borderRadius: 9, background: '#F5F6F7', boxShadow: '0 1px 2px rgba(0,0,0,.4)' }} />
    </span>
  );
}

export function Checkbox({ on, label }: { on: boolean; label?: string }) {
  return (
    <span role="checkbox" aria-checked={on} aria-label={label} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 6, boxSizing: 'border-box', ...(on ? { background: '#7C6CFF' } : { background: '#0C0D0F', border: '1px solid rgba(255,255,255,.18)' }) }}>
      {on && (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#101113" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5 9-10" />
        </svg>
      )}
    </span>
  );
}

const STATE_LABEL: Record<SubtaskState, string> = { done: '完成', doing: '进行中', you: '等待你', queue: '排队' };

/** Subtask key cap: one per subtask, coloured by state; queue is a dashed empty slot. */
export function SubtaskTile({ id, state, title, to }: { id: string; state: SubtaskState; title: string; to: string }) {
  return (
    <Link className={`tile tile-${state}`} to={to} title={title} aria-label={`${id} ${STATE_LABEL[state]}`} style={{ minWidth: 40, width: 'auto', padding: '0 7px' }}>
      {id}
    </Link>
  );
}
