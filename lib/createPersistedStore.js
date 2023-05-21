import { persist } from "zustand/middleware";
import { create } from "zustand";
import { useEffect } from "react";

export function createPersistedStore(createStore, persistOptions) {
  const usePersistedStore = create(persist(createStore, persistOptions));

  const useMounted = create(() => false);

  const initialState = createStore(
    () => {},
    () => createStore(() => {})
  );

  const useStore = (selector, compare) => {
    const store = usePersistedStore(selector, compare);
    const mounted = useMounted();

    useEffect(() => {
      if (!mounted) {
        useMounted.setState(true);
      }
    }, []);

    return mounted ? store : selector(initialState);
  };

  useStore.getState = usePersistedStore.getState;
  useStore.setState = usePersistedStore.setState;

  return useStore;
}
