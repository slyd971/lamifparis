"use client";

import { useEffect, useRef, useState } from "react";
import { brand, heroVideo, socialLinks } from "@/data/laMif";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enableVideo, setEnableVideo] = useState(false);

  useEffect(() => {
    // Vidéo de fond activée par défaut, mobile comme desktop. On s'en passe
    // seulement si l'utilisateur demande moins d'animations, active
    // l'économie de données, ou est sur une connexion très lente.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const saveData = conn?.saveData === true;
    const slow =
      conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g";

    // Détection de capacités au montage (impossible côté serveur).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!reduced && !saveData && !slow) setEnableVideo(true);
  }, []);

  useEffect(() => {
    if (!enableVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => void video.play().catch(() => undefined);

    // `load()` force le démarrage du téléchargement (utile avec preload bas),
    // puis on tente la lecture dès que possible + au cas où via `canplay`.
    video.load();
    tryPlay();
    video.addEventListener("canplay", tryPlay);
    return () => video.removeEventListener("canplay", tryPlay);
  }, [enableVideo]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-vermillon text-cream"
    >
      {enableVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center sm:object-top"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={heroVideo.webm} type="video/webm" />
          <source src={heroVideo.mp4} type="video/mp4" />
        </video>
      )}

      {/* Voile léger, seulement pour la lisibilité du texte (haut/bas) — la vidéo reste visible au centre */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-bordeaux/55 via-bordeaux/10 to-bordeaux/85"
      />

      <div className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-8 pt-[calc(var(--header-h)+2rem)] sm:px-8">
        <p className="mb-6 text-sm font-semibold uppercase leading-relaxed tracking-[0.18em] text-cream">
          {brand.place} · depuis {brand.since}
        </p>

        <h1 className="display text-[26vw] leading-[0.82] sm:text-[20vw] lg:text-[15rem]">
          {brand.name}
        </h1>

        {/* Le nom "LA MIF" est déjà affiché juste au-dessus (h1) — on n'en
            garde que le reste ici pour éviter la répétition. */}
        <p className="display mt-4 text-[10vw] text-jaune sm:text-[7vw] lg:text-[5.5rem]">
          {brand.slogan.replace(brand.name, "").trim()}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream sm:text-lg">
          {brand.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex min-w-[10.5rem] items-center justify-center gap-2 bg-cream px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-bordeaux transition-colors hover:bg-jaune"
          >
            Contact
          </a>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[10.5rem] items-center justify-center gap-2 border border-cream/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          )}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-cream/20 px-5 py-4 text-xs uppercase tracking-[0.2em] sm:px-8">
        <span className="text-cream/70">Presskit</span>
        <a
          href="#chiffres"
          className="group inline-flex items-center gap-2 transition-opacity hover:opacity-70"
        >
          Découvrir
          <span
            aria-hidden="true"
            className="inline-block transition-transform group-hover:translate-y-0.5"
          >
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
