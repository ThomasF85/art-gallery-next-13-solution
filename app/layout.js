import Navigation from "@/components/Navigation";
import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import { CommentProvider } from "@/lib/context/commentContext";
import { FavoriteProvider } from "@/lib/context/favoriteContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Art Gallery",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <CommentProvider>
            <FavoriteProvider>{children}</FavoriteProvider>
          </CommentProvider>
        </main>
        <Navigation />
      </body>
    </html>
  );
}
