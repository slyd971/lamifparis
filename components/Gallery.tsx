import Link from "next/link";
import { gallery } from "@/data/laMif";
import Reveal from "@/components/Reveal";
import GalleryGrid from "@/components/GalleryGrid";

export default function Gallery() {
  return (
    <section
      id="galerie"
      aria-labelledby="galerie-title"
      className="bg-charbon text-cream"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-[var(--section-pad)] sm:px-8">
        <div className="mb-12 sm:mb-16">
          <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-jaune">
            <span className="h-px w-10 bg-jaune" />
            Immersion
          </Reveal>
          <Reveal
            as="h2"
            id="galerie-title"
            className="display mt-6 text-[13vw] leading-[1] sm:text-[8vw] lg:text-[5.5rem]"
          >
            La Mif en images
          </Reveal>
          <Reveal
            as="p"
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            On arrive, on discute, on joue, on chante, on partage — et on finit
            par danser.
          </Reveal>
        </div>

        <GalleryGrid items={gallery} />

        <div className="mt-10 flex justify-center sm:mt-14">
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 border border-cream/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            Voir toute la galerie
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
