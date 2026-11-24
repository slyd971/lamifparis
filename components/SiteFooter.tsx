import { brand } from "@/data/laMif";

/**
 * Pied de page du site — copyright + crédit.
 * Rendu hors de `<main>` et de toute `<section>` pour exposer le landmark
 * `contentinfo`. Fond framboise : prolonge visuellement la section Contact
 * qui le précède.
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-cream/20 bg-framboise px-5 py-8 text-xs uppercase tracking-[0.18em] text-cream/90 sm:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3">
        <span>
          {brand.name} — {brand.place} · depuis {brand.since}
        </span>
        <span>
          Press kit organisateur réalisé par{" "}
          <a
            href="https://www.presskit.fr/organisateur"
            target="_blank"
            rel="noopener"
            className="text-cream underline decoration-cream/40 underline-offset-4 transition-opacity hover:opacity-70"
          >
            PressKit For You
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </span>
      </div>
    </footer>
  );
}
