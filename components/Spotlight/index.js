import styles from "./index.module.css";
import Image from "next/image.js";
import FavoriteButton from "@/components/FavoriteButton";

export default function Spotlight({ piece }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <FavoriteButton slug={piece.slug} positionAbsolute={true} />
        <Image
          className={styles.image}
          src={piece.imageSource}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`spotlight: ${piece.artist}`}
        />
      </div>
      <h2>{piece.artist}</h2>
    </div>
  );
}
