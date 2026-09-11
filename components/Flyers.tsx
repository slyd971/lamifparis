"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { flyers } from "@/data/laMif";
import Reveal from "@/components/Reveal";

/**
 * « À chaque édition, son affiche. » Affiches réelles des éditions La Mif
 * (data/laMif.ts → flyers). Tant que le tableau est vide, la section (et
 * son lien de nav) reste masquée. Max 6 affiches, les plus récentes
 * d'abord (voir README « 🎫 Flyers des éditions »).
 *
 * Agrandissement au clic : mini-lightbox maison (pas de système existant à
 * réutiliser dans le projet) — Échap ferme, focus piégé dans la boîte de
 * dialogue, focus rendu à l'affiche d'origine à la fermeture.
 */
export default function Flyers() {
  const visible = flyers.slice(0, 6);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastIndexRef = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  // Ouverture : focus dans la boîte de dialogue, piège au clavier, Échap
  // ferme. Fermeture : le focus revient sur l'affiche qui l'a déclenchée.
  useEffect(() => {
    if (openIndex !== null) {
      lastIndexRef.current = openIndex;
      closeRef.current?.focus();
    } else if (lastIndexRef.current !== null) {
      triggerRefs.current[lastIndexRef.current]?.focus();
    }
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const dialog = dialogRef.current;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
        return;
      }
      if (e.key !== "Tab" || !dialog) return;
      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || !dialog.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  if (visible.length === 0) return null;

  const open = openIndex !== null ? visible[openIndex] : null;

  return (
    <section
      id="flyers"
      aria-labelledby="flyers-title"
      className="bg-charbon text-cream"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <Reveal className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-jaune">
          <span className="h-px w-10 bg-jaune" />
          Une sélection de nos éditions
        </Reveal>
        <Reveal
          as="h2"
          id="flyers-title"
          className="display mt-6 max-w-[16ch] text-[11vw] leading-[1.05] sm:text-[6.5vw] lg:text-[4rem]"
        >
          À chaque édition, son affiche.
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          {visible.map((flyer, i) => (
            <Reveal as="li" key={flyer.alt} delay={(i % 3) * 80}>
              <button
                type="button"
                ref={(el) => {
                  triggerRefs.current[i] = el;
                }}
                onClick={() => setOpenIndex(i)}
                aria-label={`Agrandir l'affiche « ${flyer.edition} »`}
                className="group block w-full border border-cream/10 bg-cream/[0.03] p-1.5 text-left transition-colors hover:border-cream/25 sm:p-2"
              >
                <span className="block overflow-hidden">
                  <Image
                    src={flyer.src}
                    alt={flyer.alt}
                    sizes="(max-width: 640px) 45vw, 30vw"
                    placeholder="blur"
                    loading="lazy"
                    className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </span>
                <span className="mt-3 block text-sm leading-snug">
                  <span className="block font-semibold text-cream">
                    {flyer.edition}
                  </span>
                  <span className="block text-cream/60">
                    {flyer.date} · {flyer.venue}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Affiche — ${open.edition}`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charbon/95 p-4 sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenIndex(null);
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Fermer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-cream transition-opacity hover:opacity-70 sm:right-6 sm:top-6"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <figure className="flex max-h-full max-w-full flex-col items-center">
            <Image
              src={open.src}
              alt={open.alt}
              sizes="100vw"
              className="max-h-[80vh] w-auto max-w-full"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/80">
              <span className="font-semibold text-cream">{open.edition}</span>
              {" — "}
              {open.date} · {open.venue}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
