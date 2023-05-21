"use client";

import { createContext, useCallback, useMemo } from "react";
import useLocalStorageState from "use-local-storage-state";

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  const toggleFavorite = useCallback(
    (slug) =>
      setFavorites((prev) =>
        prev.includes(slug)
          ? prev.filter((favorite) => favorite !== slug)
          : [...prev, slug]
      ),
    [setFavorites]
  );

  const isFavorite = useCallback(
    (slug) => favorites.includes(slug),
    [favorites]
  );

  const context = useMemo(
    () => ({ isFavorite, toggleFavorite }),
    [isFavorite, toggleFavorite]
  );

  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
}
