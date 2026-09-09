import { testimonials } from "@/data/laMif";
import Reveal from "@/components/Reveal";

/**
 * Section témoignages. Masquée tant que `testimonials` est vide dans
 * `data/laMif.ts` — aucun contenu n'est inventé.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="temoignages"
      aria-labelledby="temoignages-title"
      className="bg-charbon text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-jaune">
          <span className="h-px w-10 bg-jaune" />
          Ils en parlent
        </Reveal>
        <Reveal
          as="h2"
          id="temoignages-title"
          className="display mt-6 text-[12vw] leading-[0.9] sm:text-[7vw] lg:text-[5rem]"
        >
          La communauté a le micro
        </Reveal>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={i}
              delay={(i % 2) * 80}
              className="border-t-2 border-vermillon pt-6"
            >
              <blockquote className="text-xl leading-relaxed sm:text-2xl">
                “{t.quote}”
              </blockquote>
              {(t.author || t.context) && (
                <p className="mt-4 text-sm uppercase tracking-[0.14em] text-cream/60">
                  {[t.author, t.context].filter(Boolean).join(" · ")}
                </p>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
