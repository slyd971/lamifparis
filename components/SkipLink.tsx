/**
 * Lien d'évitement — premier élément focusable de chaque page.
 * Invisible jusqu'au focus clavier, puis épinglé en haut à gauche.
 * Cible : le `<main id="contenu">` de la page.
 */
export default function SkipLink() {
  return (
    <a
      href="#contenu"
      className="sr-only rounded-sm bg-charbon px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
    >
      Aller au contenu
    </a>
  );
}
