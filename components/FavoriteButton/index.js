"use client";

import Image from "next/image.js";
import styles from "./index.module.css";
import { useStore } from "@/lib/useStore";

export default function FavoriteButton({ slug, positionAbsolute = false }) {
  const isFavorite = useStore((state) => state.favorites.includes(slug));
  const toggleFavorite = useStore((state) => state.toggleFavorite);

  return (
    <button
      className={`${styles.button} ${positionAbsolute ? styles.absolute : ""} ${
        isFavorite ? styles.favorite : ""
      }`}
      type="button"
      onClick={() => toggleFavorite(slug)}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
