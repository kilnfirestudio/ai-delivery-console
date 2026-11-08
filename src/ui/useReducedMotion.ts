import { useSyncExternalStore } from 'react';

const RM_QUERY = '(prefers-reduced-motion: reduce)';
const mql = () => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(RM_QUERY) : null);
const subscribe = (cb: () => void) => {
  const m = mql();
  m?.addEventListener('change', cb);
  return () => m?.removeEventListener('change', cb);
};

/**
 * True when the user asked for reduced motion, kept in sync with the media query.
 * CSS `@media (prefers-reduced-motion)` stops our CSS loops, but SVG SMIL
 * (<animate>/<animateMotion>/<animateTransform>) ignores it — the looping SMIL
 * icons drop their <animate> children when this is true.
 */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, () => mql()?.matches ?? false, () => false);
}
