import { keyFigures } from "@/data/laMif";
import Reveal from "@/components/Reveal";

export default function KeyFigures() {
  return (
    <section
      id="chiffres"
      aria-label="Chiffres clés"
      className="bg-bordeaux text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal
          as="h2"
          className="display mb-12 text-[13vw] leading-[0.85] text-cream sm:mb-16 sm:text-[8vw] lg:text-7xl"
        >
          En 3 ans,
          <br />
          <span className="text-vermillon">une communauté.</span>
        </Reveal>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {keyFigures.map((fig, i) => (
            <Reveal
              key={fig.label}
              delay={i * 90}
              className="border-t-2 border-cream/25 pt-5"
            >
              <dd className="display text-[16vw] leading-[0.9] text-cream sm:text-[9vw] lg:text-[7.5rem]">
                {fig.value}
              </dd>
              <dt className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-jaune sm:text-base">
                {fig.label}
              </dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
