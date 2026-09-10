"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { videos } from "@/data/laMif";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";

export default function VideoSection() {
  const containerRef = useRef<HTMLUListElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);

  const playOnly = useCallback((index: number) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.play().catch(() => undefined);
      } else {
        v.pause();
      }
    });
    setActive(index);
  }, []);

  // Met en pause toute vidéo qui sort du champ de vision.
  useEffect(() => {
    const nodes = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting && !(entry.target as HTMLVideoElement).paused) {
            (entry.target as HTMLVideoElement).pause();
          }
        }
      },
      { threshold: 0.5 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  if (videos.length === 0) return null;

  return (
    <section
      id="videos"
      aria-labelledby="videos-title"
      className="bg-charbon text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-corail">
          <span className="h-px w-10 bg-corail" />
          En vidéo
        </Reveal>
        <Reveal
          as="h2"
          id="videos-title"
          className="display mt-6 max-w-[24ch] text-[10vw] leading-[1.12] sm:text-[6.5vw] sm:leading-[1.08] lg:text-[3.75rem]"
        >
          La Mif, ça s&apos;explique. Mais surtout, ça se vit.
        </Reveal>

        <ul
          ref={containerRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6 lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {videos.map((video, i) => (
            <li
              key={video.id}
              className="w-[78vw] shrink-0 snap-center sm:w-[46vw] lg:w-auto"
            >
              <Frame tone="light" ratio="9/16">
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  className="h-full w-full object-cover"
                  poster={video.poster}
                  preload="none"
                  playsInline
                  controls={active === i}
                  onClick={() => {
                    if (active !== i) playOnly(i);
                  }}
                  onPlay={() => setActive(i)}
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                {active !== i && (
                  <button
                    type="button"
                    onClick={() => playOnly(i)}
                    aria-label={`Lire la vidéo ${i + 1}`}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent transition-colors hover:from-black/60"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-vermillon text-cream shadow-lg">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 translate-x-0.5 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                )}
              </Frame>
              {video.label ? (
                <p className="mt-3 text-sm uppercase tracking-[0.14em] text-cream/70">
                  {video.label}
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-cream/70 lg:hidden">
          Faites glisser →
        </p>
      </div>
    </section>
  );
}
