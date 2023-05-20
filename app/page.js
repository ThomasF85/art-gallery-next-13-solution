import Spotlight from "@/components/Spotlight";
import fetchArtPieces from "@/lib/fetchArtPieces";
import { Suspense } from "react";

export const revalidate = 0;

export default function Home() {
  return (
    <>
      <h1>Random Art Piece</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
      </Suspense>
    </>
  );
}

async function PageContent() {
  const pieces = await fetchArtPieces();
  const piece = pieces[Math.floor(Math.random() * pieces.length)];

  return <Spotlight piece={piece} />;
}
