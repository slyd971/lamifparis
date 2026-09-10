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

const SITE_TITLE = "La Mif Paris — Presskit";
const SITE_DESCRIPTION =
  "La Mif, la soirée entre potes à grande échelle : jeux, karaoké, lives et DJ sets pour une communauté 25+. Plus de 20 soirées et 5 000 participants depuis 2023.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — LA MIF",
  },
  description: SITE_DESCRIPTION,
  applicationName: "LA MIF",
  keywords: [
    "LA MIF",
    "La Mif Paris",
    "soirée appart",
    "concept soirée",
    "soirée entre potes",
    "soirée jeux de société",
    "karaoké Paris",
    "DJ set Paris",
    "live artistes",
    "Fête de la Musique",
    "afterwork Paris",
    "soirée 25 ans et plus",
    "événementiel",
    "activation de marque",
    "communauté",
    "presskit",
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "LA MIF",
    locale: "fr_FR",
    type: "website",
    // og:image : fourni par app/opengraph-image.tsx (paysage 1200×630).
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
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
  keywords:
    "soirée entre potes, jeux de société, karaoké, live artistes, DJ sets, communauté 25+, Paris",
  knowsAbout: [
    "Soirées communautaires",
    "Karaoké",
    "DJ sets",
    "Jeux de société",
    "Programmation artistique",
    "Événementiel",
  ],
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
