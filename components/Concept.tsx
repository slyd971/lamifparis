import Image from "next/image";
import { concept } from "@/data/laMif";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";

export default function Concept() {
  const [p0, p1, p2, p3, p4, p5] = concept.paragraphs;
  const pullLead = p2.replace(concept.pullQuote, "").trim();

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
          className="display mt-6 max-w-[20ch] text-[8vw] leading-[1] sm:text-[5vw] lg:text-[4.25rem]"
        >
          {concept.statement}
        </Reveal>

        <div className="mt-12 grid gap-x-16 gap-y-10 sm:mt-16 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          {/* Flux éditorial */}
          <div className="max-w-[62ch] space-y-6 text-lg leading-relaxed">
            <Reveal as="p">{p0}</Reveal>
            <Reveal as="p">{p1}</Reveal>

            {/* Image intercalée sur mobile, masquée ici sur desktop */}
            <Reveal className="lg:hidden">
              <ConceptImage />
            </Reveal>

            <Reveal className="py-3">
              <span className="block text-base leading-relaxed text-cream/70">
                {pullLead}
              </span>
              <span className="display mt-2 block text-[10vw] leading-[1] text-vermillon sm:text-[3rem] lg:text-[3.4rem]">
                {concept.pullQuote}
              </span>
            </Reveal>

            <Reveal as="p">{p3}</Reveal>
            <Reveal as="p">{p4}</Reveal>

            <Reveal>
              <p className="border-t-2 border-vermillon pt-6 text-xl font-medium leading-snug text-jaune sm:text-[1.6rem]">
                {p5}
              </p>
            </Reveal>
          </div>

          {/* Image sur desktop, collée en haut de colonne */}
          <Reveal className="hidden lg:block lg:pt-2">
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
        sizes="(max-width: 1024px) 100vw, 42vw"
        placeholder="blur"
        className="object-cover"
      />
    </Frame>
  );
}
