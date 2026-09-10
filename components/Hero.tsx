"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { brand, contact, heroVideo, socialLinks } from "@/data/laMif";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enableVideo, setEnableVideo] = useState(false);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

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

    const tryPlay = () => {
      if (pausedRef.current) return;
      void video.play().catch(() => undefined);
    };

    // La vidéo se termine par un cartouche logo + fondu au noir (~49,5 s).
    // On reboucle avant pour ne montrer que le plateau.
    const LOOP_BEFORE = 48.7;
    const onTimeUpdate = () => {
      if (video.currentTime >= LOOP_BEFORE) {
        video.currentTime = 0;
      }
    };

    // `load()` force le démarrage du téléchargement (utile avec preload bas),
    // puis on tente la lecture dès que possible + au cas où via `canplay`.
    video.load();
    tryPlay();
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [enableVideo]);

  // Bouton lecture / pause de la vidéo d'arrière-plan (WCAG 2.2.2).
  useEffect(() => {
    pausedRef.current = paused;
    const video = videoRef.current;
    if (!video || !enableVideo) return;
    if (paused) video.pause();
    else void video.play().catch(() => undefined);
  }, [paused, enableVideo]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-vermillon text-cream"
    >
      {/* Image d'attente : toujours rendue, sous la vidéo. Évite le hero vide
          en reduced-motion / Save-Data / connexion lente / temps de buffer. */}
      <Image
        src={heroVideo.poster}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center sm:object-top"
      />

      {enableVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center sm:object-top"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroVideo.poster}
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
        className="absolute inset-0 bg-gradient-to-b from-framboise/75 via-framboise/40 to-framboise/95"
      />

      <div className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-8 pt-[calc(var(--header-h)+2rem)] sm:px-8">
        <p className="mb-6 text-sm font-semibold uppercase leading-relaxed tracking-[0.18em] text-cream/90">
          {brand.place} · depuis {brand.since}
        </p>

        <h1 className="display text-[26vw] leading-[0.82] sm:text-[20vw] lg:text-[15rem]">
          {brand.name}
        </h1>

        {/* Signature : les temps forts, en display jaune — juste sous le nom.
            Chaque terme garde son séparateur (jamais de « · » en début de
            ligne) ; la coupure se fait sur l'espace entre deux termes. */}
        <p className="display mt-3 text-[7vw] leading-[1.02] text-jaune sm:text-[4vw] lg:text-[3rem]">
          {brand.signature.split(" · ").map((item, i, arr) => (
            <span key={item}>
              {i > 0 ? " " : ""}
              <span className="whitespace-nowrap">
                {item}
                {i < arr.length - 1 && (
                  <span aria-hidden="true" className="text-jaune/40">{" ·"}</span>
                )}
              </span>
            </span>
          ))}
        </p>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/90 sm:text-base">
          {brand.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex min-w-[10.5rem] items-center justify-center gap-2 bg-cream px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-framboise transition-colors hover:bg-jaune hover:text-charbon"
          >
            {contact.cta}
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
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="text-cream/90">Presskit</span>
          {enableVideo && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="inline-flex items-center gap-1.5 text-cream/70 transition-colors hover:text-cream"
            >
              <span aria-hidden="true" className="text-[0.9em] leading-none">
                {paused ? "▶" : "❚❚"}
              </span>
              {paused ? "Lecture" : "Pause"}
              <span className="sr-only"> de la vidéo d’arrière-plan</span>
            </button>
          )}
        </div>
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
