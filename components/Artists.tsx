import Image from "next/image";
import { artists } from "@/data/laMif";
import Reveal from "@/components/Reveal";

/**
 * « Ils ont fait partie de LA MIF ».
 * Tant qu'aucun artiste n'est renseigné dans `data/laMif.ts`, la section
 * ne s'affiche pas. Il suffit d'ajouter une entrée pour l'activer.
 */
export default function Artists() {
  if (artists.length === 0) return null;

  return (
    <section
      id="artistes"
      aria-labelledby="artistes-title"
      className="bg-charbon text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-jaune">
          <span className="h-px w-10 bg-jaune" />
          Line-up
        </Reveal>
        <Reveal
          as="h2"
          id="artistes-title"
          className="display mt-6 text-[12vw] leading-[0.9] sm:text-[7vw] lg:text-[5rem]"
        >
          Ils ont fait partie de LA MIF
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {artists.map((artist, i) => (
            <Reveal as="li" key={`${artist.name}-${i}`} delay={(i % 4) * 70}>
              <div className="relative aspect-square overflow-hidden border border-cream/15 bg-white/5">
                {artist.photo ? (
                  <Image
                    src={artist.photo}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                    loading="lazy"
                    className="object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="display absolute inset-0 flex items-center justify-center text-4xl opacity-20"
                  >
                    {artist.name.slice(0, 1)}
                  </span>
                )}
              </div>
              <p className="mt-3 text-base font-semibold uppercase tracking-wide">
                {artist.name}
              </p>
              {artist.role ? (
                <p className="text-sm text-cream/60">{artist.role}</p>
              ) : null}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
