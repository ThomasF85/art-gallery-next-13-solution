import { Suspense } from "react";
import ArtPieceDetails from "../../../components/ArtPieceDetails";
import fetchArtPieces from "@/lib/fetchArtPieces";

export async function generateStaticParams() {
  const pieces = await fetchArtPieces();

  return pieces.map((piece) => ({
    slug: piece.slug,
  }));
}

export default function Page({ params }) {
  return (
    <>
      <header>
        <h1>Majestic Greek Sculpture</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent slug={params.slug} />
      </Suspense>
    </>
  );
}

async function PageContent({ slug }) {
  const pieces = await fetchArtPieces();
  const piece = pieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return <div>Piece not found</div>;
  }

  return <ArtPieceDetails piece={piece} />;
}
