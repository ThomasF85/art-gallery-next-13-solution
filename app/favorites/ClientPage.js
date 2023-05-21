"use client";

import ArtPieces from "@/components/ArtPieces";
import { FavoriteContext } from "@/lib/context/favoriteContext";
import { useContext } from "react";

export default function ClientPage({ pieces }) {
  const { isFavorite } = useContext(FavoriteContext);

  return (
    <ArtPieces pieces={pieces.filter((piece) => isFavorite(piece.slug))} />
  );
}
