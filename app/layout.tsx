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
    // og:image : fourni par app/opengraph-image.tsx (paysage 1200×630).
  },
  twitter: {
    card: "summary_large_image",
    title: "LA MIF — Presskit",
    description: SITE_DESCRIPTION,
    // twitter:image : fourni par app/twitter-image.tsx (paysage 1200×630).
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
  alternateName: "LA MIF Paris",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  slogan: brand.slogan,
  foundingDate: String(brand.since),
  areaServed: brand.place,
  address: {
    "@type": "PostalAddress",
    addressLocality: brand.place,
    addressCountry: "FR",
  },
  email: socialLinks.email || undefined,
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
