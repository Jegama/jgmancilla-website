import { useSyncExternalStore } from 'react';

// `subscribe` never fires: hydration happens exactly once and never reverts.
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Returns `false` on the server and during the hydration render, then `true`
 * once React has hydrated on the client.
 *
 * Use this instead of the `useState(false)` + `useEffect(() => setState(true))`
 * mount guard: it produces the same two-pass render without calling setState
 * synchronously inside an effect.
 */
export function useIsHydrated(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
