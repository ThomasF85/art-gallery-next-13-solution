"use client";

import Image from "next/image.js";
import styles from "./index.module.css";
import useLocalStorageState from "use-local-storage-state";

export default function FavoriteButton({ slug, positionAbsolute = false }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });

  const isFavorite = favorites.find((favorite) => favorite === slug);

  function toggleFavorite() {
    if (isFavorite) {
      setFavorites((prev) => prev.filter((favorite) => favorite !== slug));
    } else {
      setFavorites((prev) => [...prev, slug]);
    }
  }

  return (
    <button
      className={`${styles.button} ${positionAbsolute ? styles.absolute : ""} ${
        isFavorite ? styles.favorite : ""
      }`}
      type="button"
      onClick={toggleFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
