import type { IconName } from './iconPaths';

export type Tint = 'violet' | 'blue' | 'cyan' | 'green' | 'amber' | 'rose';

/** Base hue and light end of the glyph gradient for each glass-tile tint. */
export const TINTS: Record<Tint, { base: string; light: string }> = {
  violet: { base: '#8E7CFF', light: '#D6D0FF' },
  blue: { base: '#4F8CFF', light: '#C7DAFF' },
  cyan: { base: '#38BDF8', light: '#C6ECFD' },
  green: { base: '#3FB950', light: '#C8F0CF' },
  amber: { base: '#E3A008', light: '#FBE7B0' },
  rose: { base: '#F85149', light: '#FFD2CF' },
};

/** Tint used for each page's title tile and other named tiles. */
export const ICON_TINT: Partial<Record<IconName, Tint>> = {
  Main: 'violet', Review: 'amber', Visual: 'cyan', Weekly: 'rose', Intake: 'green', Breakdown: 'blue', Agents: 'violet',
  Task: 'rose', Knowledge: 'blue', Graph: 'violet', Clients: 'cyan', Metrics: 'green', Live: 'amber', Pipeline: 'cyan',
  Distribution: 'blue', Rules: 'violet', System: 'green', Components: 'violet', Bell: 'amber', Trophy: 'amber',
};
