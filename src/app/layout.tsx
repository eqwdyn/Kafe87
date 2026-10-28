import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@widgets/Footer";

const playfair = Playfair_Display({
  subsets: ["cyrillic", "latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Кафе 87 — уютное место для завтраков и кофе",
  description:
    "Кафе 87 — уютное место для завтраков и кофе в мягкой пастельной атмосфере",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
