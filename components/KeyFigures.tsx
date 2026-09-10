import { keyFigures, conceptBadge } from "@/data/laMif";
import Reveal from "@/components/Reveal";

export default function KeyFigures() {
  return (
    <section
      id="chiffres"
      aria-label="Chiffres clés"
      className="bg-framboise text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal
          as="h2"
          className="display mb-12 text-[13vw] leading-[1.12] text-cream sm:mb-16 sm:text-[8vw] lg:text-7xl"
        >
          En 3 ans,
          <br />
          <span className="text-jaune">une communauté.</span>
        </Reveal>

        {/* Les 3 vraies données, alignées et lisibles d'un coup d'œil —
            première preuve de crédibilité. */}
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {keyFigures.map((fig, i) => (
            <Reveal
              key={fig.label}
              delay={i * 90}
              className="border-t-2 border-cream/25 pt-5"
            >
              <dd className="display text-[15vw] leading-[0.9] text-cream sm:text-[7vw] lg:text-[6.5rem]">
                {fig.value}
              </dd>
              <dt className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-jaune sm:text-base">
                {fig.label}
              </dt>
            </Reveal>
          ))}
        </dl>

        {/* Pas une statistique : la nature du concept. Traité en bandeau,
            distinct des chiffres au-dessus. */}
        <Reveal
          delay={270}
          className="mt-10 flex flex-col gap-2 border-t-2 border-jaune/70 pt-5 sm:mt-12 sm:flex-row sm:items-baseline sm:gap-6"
        >
          <span className="display text-[9vw] leading-none text-jaune sm:text-4xl lg:text-5xl">
            {conceptBadge.value}
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-cream/80 sm:text-base">
            {conceptBadge.label}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
