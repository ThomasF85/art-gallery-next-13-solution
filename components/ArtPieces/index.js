import ArtPiecePreview from "@/components/ArtPiecePreview";
import styles from "./index.module.css";

export default function ArtPieces({ pieces }) {
  return (
    <ul className={styles.list}>
      {pieces.map((piece) => (
        <li key={piece.slug} className={styles.item}>
          <ArtPiecePreview piece={piece} />
        </li>
      ))}
    </ul>
  );
}
