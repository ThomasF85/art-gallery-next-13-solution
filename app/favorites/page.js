import fetchArtPieces from "@/lib/fetchArtPieces";
import { Suspense } from "react";
import ClientPage from "./ClientPage";

export default function Page() {
  return (
    <>
      <header>
        <h1>Favorite Art Pieces</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
      </Suspense>
    </>
  );
}

async function PageContent() {
  const pieces = await fetchArtPieces();

  return <ClientPage pieces={pieces} />;
}
