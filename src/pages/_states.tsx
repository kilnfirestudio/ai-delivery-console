import type { CSSProperties, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDataState } from '../data';
import { EmptyState, ErrorState, Grid, Skeleton } from '../ui/primitives';
import type { IconName } from '../ui/icons';

/**
 * F-09b 页面接入的共用胶水（不是通用 UI 组件，故放在 pages/ 而非 src/ui/）。
 * 页面照常渲染 PageHeader，再把正文交给 <PageState>：加载中出按区块形状的骨架、
 * 出错出 ErrorState、空出 EmptyState、就绪照常。骨架用 F-09a 的 <Skeleton>，
 * 动效由 .skel 统一在 reduced-motion 下关闭。
 */

/** 退一步重试：清掉开发模式的 `?data=` 覆盖（生产环境则是重新渲染当前路由）。 */
function useRetry() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return () => nav(pathname, { replace: true });
}

export function PageState({
  skeleton,
  emptyTitle,
  emptyHint,
  emptyIcon,
  emptyAction,
  isEmpty = false,
  children,
}: {
  /** 贴合本页区块形状的加载骨架。 */
  skeleton: ReactNode;
  emptyTitle: string;
  emptyHint?: string;
  emptyIcon?: IconName;
  emptyAction?: ReactNode;
  /** 主数据数组为空时也走空状态（status 之外的补充判断）。 */
  isEmpty?: boolean;
  children: ReactNode;
}) {
  const { status, error } = useDataState();
  const retry = useRetry();
  if (status === 'loading') return <>{skeleton}</>;
  if (status === 'error') return <ErrorState detail={error} onRetry={retry} />;
  if (status === 'empty' || isEmpty) return <EmptyState title={emptyTitle} hint={emptyHint} icon={emptyIcon} action={emptyAction} />;
  return <>{children}</>;
}

// ───────────────────────── 骨架积木（按区块拼） ─────────────────────────

/** 一个卡片盒：可选标题条 + 正文（文本条或整块）。 */
export function SkelCard({ title = true, lines, height, style }: { title?: boolean; lines?: number; height?: number; style?: CSSProperties }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      {title && <Skeleton height={14} width="45%" />}
      {height !== undefined ? <Skeleton height={height} /> : <Skeleton lines={lines ?? 3} />}
    </div>
  );
}

/** 自适应网格排布的同形卡片骨架。 */
export function SkelCards({ count = 4, min = 220, lines, height }: { count?: number; min?: number; lines?: number; height?: number }) {
  return (
    <Grid min={min}>
      {Array.from({ length: count }, (_, i) => (
        <SkelCard key={i} lines={lines} height={height} />
      ))}
    </Grid>
  );
}

/** 卡片式区块：标题条 + 自定义正文骨架。 */
export function SkelSection({ children, titleWidth = '35%', style }: { children: ReactNode; titleWidth?: number | string; style?: CSSProperties }) {
  return (
    <section className="card" style={style}>
      <Skeleton height={18} width={titleWidth} style={{ marginBottom: 16 }} />
      {children}
    </section>
  );
}

/** 表格骨架：一行表头 + 若干行。 */
export function SkelTable({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  const gtc = `repeat(${cols}, 1fr)`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: gtc, gap: 12 }}>
        {Array.from({ length: cols }, (_, i) => (
          <Skeleton key={i} height={12} width="70%" />
        ))}
      </div>
      {Array.from({ length: rows }, (_, r) => (
        <div key={r} style={{ display: 'grid', gridTemplateColumns: gtc, gap: 12 }}>
          {Array.from({ length: cols }, (_, c) => (
            <Skeleton key={c} height={12} />
          ))}
        </div>
      ))}
    </div>
  );
}

/** 指标磁贴行骨架：标签 + 数值 + 备注三条。 */
export function SkelStats({ count = 5, min = 170 }: { count?: number; min?: number }) {
  return (
    <Grid min={min}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Skeleton height={12} width="55%" />
          <Skeleton height={24} width="40%" />
          <Skeleton height={10} width="70%" />
        </div>
      ))}
    </Grid>
  );
}

/** 并排骨架块（自适应换行），替代页面里的 Row/Grid 布局。 */
export function SkelRow({ children, min = 320 }: { children: ReactNode; min?: number }) {
  return <Grid min={min}>{children}</Grid>;
}

/** 列表骨架：若干条「主行 + 次行」。 */
export function SkelList({ rows = 5 }: { rows?: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 0', borderTop: i ? '1px solid rgba(255,255,255,.05)' : undefined }}>
          <Skeleton height={14} width="55%" />
          <Skeleton height={10} width="80%" />
        </div>
      ))}
    </div>
  );
}
