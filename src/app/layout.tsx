import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yims Shop",
  description: "Une boutique en ligne pour les vêtements et accessoires prestigieux pour hommes. Découvrez notre collection de vêtements de qualité supérieure, conçus pour allier style et confort. Que vous recherchiez des costumes élégants, des chemises raffinées ou des accessoires tendance, notre boutique en ligne offre une sélection soigneusement choisie pour répondre à vos besoins de mode masculine. Explorez notre catalogue dès aujourd'hui et trouvez les pièces parfaites pour compléter votre garde-robe avec sophistication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rendu du layout racine de l'application
  return (
    <html lang="fr ">
      {/* Application des polices et du style global */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Affichage des enfants (pages) */}
        {children}
      </body>
    </html>
  );
}
