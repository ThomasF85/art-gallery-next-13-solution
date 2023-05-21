"use client";

import ArtPieces from "@/components/ArtPieces";
import { useStore } from "@/lib/useStore";

export default function ClientPage({ pieces }) {
  const favorites = useStore((state) => state.favorites);

  return (
    <ArtPieces
      pieces={pieces.filter((piece) => favorites.includes(piece.slug))}
    />
  );
}
