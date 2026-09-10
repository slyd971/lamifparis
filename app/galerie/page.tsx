import type { Metadata } from "next";
import Link from "next/link";
import { brand, galleryFull } from "@/data/laMif";
import Navigation from "@/components/Navigation";
import GalleryGrid from "@/components/GalleryGrid";
import Contact from "@/components/Contact";

const description = `${brand.name} — l'album complet des soirées : public, amis, jeux, micro, dancefloor.`;

export const metadata: Metadata = {
  title: "Galerie",
  description,
  alternates: {
    canonical: "/galerie",
  },
  openGraph: {
    title: "Galerie — LA MIF",
    description,
    url: "/galerie",
    siteName: "LA MIF",
    locale: "fr_FR",
    type: "website",
    // Même carte paysage que la home (app/opengraph-image.tsx) — référencée
    // explicitement car un openGraph.* de page n'hérite pas de l'image parente.
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LA MIF" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galerie — LA MIF",
    description,
    images: ["/twitter-image"],
  },
};

export default function GaleriePage() {
  return (
    <>
      <Navigation />

      <main>
        <section className="bg-charbon text-cream">
          <div className="mx-auto max-w-[1500px] px-5 pb-10 pt-[calc(var(--header-h)+2.5rem)] sm:px-8 sm:pb-14">
            <Link
              href="/#galerie"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/60 transition-colors hover:text-cream"
            >
              <span aria-hidden="true">←</span>
              Retour au presskit
            </Link>

            <div className="mt-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-corail">
              <span className="h-px w-10 bg-corail" />
              Immersion
            </div>
            <h1 className="display mt-6 text-[13vw] leading-[0.88] sm:text-[8vw] lg:text-[6rem]">
              La galerie
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              L&rsquo;album complet des soirées LA MIF : public, amis, jeux,
              micro, dancefloor — {galleryFull.length} photos, la communauté
              au centre.
            </p>
          </div>
        </section>

        <section className="bg-charbon text-cream">
          <div className="mx-auto max-w-[1500px] px-5 pb-[var(--section-pad)] sm:px-8">
            <GalleryGrid items={galleryFull} columns="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4" />
          </div>
        </section>
      </main>

      <Contact />
    </>
  );
}
