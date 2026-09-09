import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { brand, socialLinks } from "@/data/laMif";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_DESCRIPTION =
  "LA MIF — un concept de soirée pensé pour les plus de 25 ans : l'esprit d'une soirée appart à l'échelle d'un véritable événement. Jeux de société, karaoké, lives, turn up et une vraie communauté.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LA MIF — Presskit",
    template: "%s — LA MIF",
  },
  description: SITE_DESCRIPTION,
  applicationName: "LA MIF",
  keywords: [
    "LA MIF",
    "soirée",
    "événement",
    "communauté",
    "presskit",
    "house party",
    "karaoké",
    "concept soirée",
    "Paris",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LA MIF — Presskit",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "LA MIF",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/media/video/hero-poster.jpg", width: 720, height: 1280, alt: "LA MIF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LA MIF — Presskit",
    description: SITE_DESCRIPTION,
    images: ["/media/video/hero-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#E34234",
  colorScheme: "dark",
};

/** Données structurées (JSON-LD) : aide les moteurs à identifier la marque,
 *  son lieu et ses réseaux — pas de rendu visuel, aucun impact design. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/media/video/hero-poster.jpg`,
  areaServed: brand.place,
  foundingDate: String(brand.since),
  sameAs: [socialLinks.instagram].filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
