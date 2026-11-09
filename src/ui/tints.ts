import type { IconName } from './iconPaths';

export type Tint = 'violet' | 'blue' | 'cyan' | 'green' | 'amber' | 'rose' | 'teal' | 'indigo';

/** Base hue and light end of the glyph gradient for each glass-tile tint. */
export const TINTS: Record<Tint, { base: string; light: string }> = {
  violet: { base: '#8E7CFF', light: '#D6D0FF' },
  blue: { base: '#4F8CFF', light: '#C7DAFF' },
  cyan: { base: '#38BDF8', light: '#C6ECFD' },
  green: { base: '#3FB950', light: '#C8F0CF' },
  amber: { base: '#E3A008', light: '#FBE7B0' },
  rose: { base: '#F85149', light: '#FFD2CF' },
  teal: { base: '#2DD4BF', light: '#BFF3EC' },
  indigo: { base: '#6366F1', light: '#C7CBFB' },
};

/**
 * Tint used for each page's title tile and other named tiles.
 * Mapping matches the v20 组件规范 board (Components.dc.html): one hue per page,
 * with Breakdown→indigo and Pipeline→teal taking the two tints added in F-07.
 */
export const ICON_TINT: Partial<Record<IconName, Tint>> = {
  Main: 'violet', Review: 'amber', Visual: 'cyan', Weekly: 'teal', Intake: 'green', Breakdown: 'indigo', Agents: 'violet',
  Task: 'indigo', Knowledge: 'blue', Graph: 'violet', Clients: 'cyan', Metrics: 'green', Live: 'amber', Pipeline: 'teal',
  Distribution: 'blue', Rules: 'violet', System: 'green', Components: 'violet', Bell: 'amber', Trophy: 'amber',
};
