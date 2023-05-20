import Link from "next/link.js";
import styles from "./index.module.css";
import Image from "next/image.js";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecePreview({ piece }) {
  const { imageSource: image, artist, name: title } = piece;

  return (
    <figure className={styles.figure}>
      <div className={styles.imageContainer}>
        <FavoriteButton slug={piece.slug} positionAbsolute />
        <Image
          className={styles.image}
          src={image}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={title}
          aria-labelledby={`caption-${piece.slug}`}
          fill
        />
      </div>
      <figcaption
        id={`caption-${piece.slug}`}
        className={styles.caption}
      >{`${artist}: ${title}`}</figcaption>
      <Link href={`art-pieces/${piece.slug}`} passHref legacyBehavior>
        <a className={styles.anchor}>
          <span className={styles.screenReaderOnly}>More Info</span>
        </a>
      </Link>
    </figure>
  );
}
