import { collabCta, collaborations, collaborationsIntro } from "@/data/laMif";
import Reveal from "@/components/Reveal";

/**
 * « LA MIF × VOUS » — pistes de collaboration B2B (lieux, marques, artistes,
 * événements). Présentation éditoriale en liste, pas de cards SaaS.
 */
export default function Collaborations() {
  return (
    <section
      id="collab"
      aria-labelledby="collab-title"
      className="bg-charbon text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-jaune">
          <span className="h-px w-10 bg-jaune" />
          Collaborer
        </Reveal>
        <Reveal
          as="h2"
          id="collab-title"
          className="display mt-6 text-[13vw] leading-[1] sm:text-[8vw] lg:text-[5.5rem]"
        >
          La Mif <span className="text-jaune">×</span> vous
        </Reveal>
        <Reveal
          as="p"
          className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl"
        >
          {collaborationsIntro}
        </Reveal>

        <ul className="mt-12 border-t border-cream/15 sm:mt-16">
          {collaborations.map((c, i) => (
            <Reveal
              as="li"
              key={c.id}
              delay={(i % 4) * 70}
              className="group grid grid-cols-1 gap-x-8 gap-y-2 border-b border-cream/15 py-7 sm:grid-cols-[0.9fr_1.1fr] sm:py-9"
            >
              <div className="flex items-baseline gap-4">
                <span aria-hidden="true" className="text-sm font-semibold text-jaune">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-3xl leading-none transition-colors duration-300 group-hover:text-jaune sm:text-4xl lg:text-5xl">
                  {c.title}
                </h3>
              </div>
              <p className="max-w-[46ch] text-base leading-relaxed text-cream/80 sm:text-lg">
                {c.text}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-jaune transition-opacity hover:opacity-70"
          >
            {collabCta}
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
