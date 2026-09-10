import Image from "next/image";
import { concept } from "@/data/laMif";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";

export default function Concept() {
  return (
    <section
      id="concept"
      className="bg-charbon text-cream"
      aria-labelledby="concept-title"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-jaune">
          <span className="h-px w-10 bg-jaune" />
          {concept.kicker}
        </Reveal>

        <Reveal
          as="h2"
          id="concept-title"
          className="display mt-6 max-w-[22ch] text-[7.5vw] leading-[1.15] sm:text-[5vw] sm:leading-[1.1] lg:text-[4.25rem]"
        >
          {concept.statement}
        </Reveal>

        <div className="mt-12 grid gap-x-16 gap-y-10 sm:mt-16 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          {/* Flux éditorial — court, scannable, aéré. */}
          <div className="max-w-[54ch] space-y-6 text-base leading-relaxed sm:text-lg">
            {concept.paragraphs.map((p) => (
              <Reveal as="p" key={p.slice(0, 24)}>
                {p}
              </Reveal>
            ))}

            {/* Image intercalée sur mobile uniquement. */}
            <Reveal className="lg:hidden">
              <ConceptImage />
            </Reveal>

            <Reveal className="py-2">
              <span className="block text-base leading-relaxed text-cream/70">
                {concept.pullLead}
              </span>
              <span className="display mt-2 block text-[9vw] leading-[1.05] text-framboise sm:text-[2.8rem] lg:text-[3.2rem]">
                {concept.pullQuote}
              </span>
            </Reveal>

            <Reveal>
              <p className="border-t-2 border-framboise pt-6 text-xl font-medium leading-snug text-cream sm:text-[1.5rem]">
                {concept.closing}
              </p>
            </Reveal>
          </div>

          {/* Image desktop — suit la lecture pour ne pas laisser de vide. */}
          <Reveal className="hidden lg:block lg:sticky lg:top-28">
            <ConceptImage />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ConceptImage() {
  return (
    <Frame tone="light" ratio="4/5">
      <Image
        src={concept.image.src}
        alt={concept.image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        placeholder="blur"
        className="object-cover"
      />
    </Frame>
  );
}
