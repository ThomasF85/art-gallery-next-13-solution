import fetchArtPieces from "@/lib/fetchArtPieces";
import { Suspense } from "react";
import ArtPieces from "@/components/ArtPieces";

export default function Page() {
  return (
    <>
      <header>
        <h1>Art Pieces</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
      </Suspense>
    </>
  );
}

async function PageContent() {
  const pieces = await fetchArtPieces();

  return <ArtPieces pieces={pieces} />;
}
