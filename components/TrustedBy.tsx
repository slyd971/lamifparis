import { venues } from "@/data/laMif";
import Reveal from "@/components/Reveal";

/**
 * « Ils nous ont fait confiance » — preuve sociale courte.
 * Uniquement les lieux réellement validés (data/laMif.ts → venues).
 * Traitement typographique, pas de grille de logos corporate.
 */
export default function TrustedBy() {
  if (venues.length === 0) return null;

  return (
    <section
      id="references"
      aria-labelledby="references-title"
      className="bg-framboise text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-corail">
          <span className="h-px w-10 bg-corail" />
          Références
        </Reveal>
        <Reveal
          as="h2"
          id="references-title"
          className="display mt-6 max-w-[18ch] text-[10vw] leading-[1.12] sm:text-[6vw] sm:leading-[1.08] lg:text-[3.75rem]"
        >
          Ils nous ont fait confiance
        </Reveal>
        <Reveal
          as="p"
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          Des lieux qui ont déjà accueilli La Mif.
        </Reveal>

        <ol className="mt-12 border-t border-cream/15 sm:mt-16">
          {venues.map((venue, i) => (
            <Reveal
              as="li"
              key={venue.name}
              delay={i * 80}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-2 border-b border-cream/15 py-6 sm:gap-x-8 sm:py-8"
            >
              <span className="text-sm font-semibold text-corail sm:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display text-[10vw] leading-[1] transition-colors duration-300 group-hover:text-corail sm:text-[6vw] lg:text-[4.5rem]">
                {venue.name}
              </span>
              <span className="col-start-2 text-sm leading-relaxed text-cream/70 sm:text-base">
                {venue.detail}
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
