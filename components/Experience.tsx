import Image from "next/image";
import { experiences, type Experience as ExperienceType } from "@/data/laMif";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";

function Media({ media }: { media: ExperienceType["media"] }) {
  if (!media) {
    return (
      <Frame tone="light">
        <span className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-cream/60">
          Média à venir
        </span>
      </Frame>
    );
  }

  if (media.kind === "video") {
    return (
      <Frame tone="light" ratio="4/5">
        <video
          className="h-full w-full object-cover"
          poster={media.poster}
          controls
          playsInline
          preload="none"
        >
          <source src={media.src} type="video/mp4" />
        </video>
      </Frame>
    );
  }

  return (
    <Frame tone="light" ratio="4/5">
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 22vw"
        placeholder="blur"
        loading="lazy"
        className="object-cover"
      />
    </Frame>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-framboise text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-jaune">
          <span className="h-px w-10 bg-jaune" />
          L&apos;expérience
        </Reveal>
        <Reveal
          as="h2"
          id="experience-title"
          className="display mt-6 max-w-[16ch] text-[11vw] leading-[1.12] sm:text-[6vw] sm:leading-[1.08] lg:text-[4rem]"
        >
          Une seule soirée, plusieurs manières d&apos;en profiter.
        </Reveal>
        <Reveal
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg"
        >
          Jeux, karaoké, live et turn up : quatre temps forts d&apos;une même
          soirée, du premier verre jusqu&apos;au dancefloor.
        </Reveal>

        <ol className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:mt-16 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-6">
          {experiences.map((xp, i) => (
            <Reveal
              as="li"
              key={xp.id}
              delay={(i % 4) * 70}
              className={i % 2 === 1 ? "lg:mt-14" : ""}
            >
              <Media media={xp.media} />
              <div className="mt-4 flex items-baseline gap-2.5">
                <span className="text-sm font-semibold text-jaune">
                  {xp.index}
                </span>
                <h3 className="display text-xl leading-none sm:text-2xl">
                  {xp.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-cream/90">
                {xp.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
