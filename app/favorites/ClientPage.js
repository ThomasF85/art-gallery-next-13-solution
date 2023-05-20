"use client";

import ArtPieces from "@/components/ArtPieces";
import useLocalStorageState from "use-local-storage-state";

export default function ClientPage({ pieces }) {
  // Hook internally synchronizes state for different invocations
  // => effectively acts as global state, no prop drilling required
  const [favorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  return (
    <ArtPieces
      pieces={pieces.filter((piece) => favorites.includes(piece.slug))}
    />
  );
}
