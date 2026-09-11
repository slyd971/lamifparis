"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brand, navLinks, socialLinks } from "@/data/laMif";
import InstagramMark from "@/components/InstagramMark";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Menu ouvert : dialogue modale — focus dans le panneau, piège au clavier,
  // Échap ferme.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    const focusables = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      );

    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || !panel.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !panel.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // À la fermeture, on rend le focus au bouton qui a ouvert le menu.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !open) toggleRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "bg-charbon/95 text-cream backdrop-blur-sm border-b border-cream/10"
            : "bg-transparent text-cream"
        }`}
      >
        {/* Voile de lisibilité pour la nav posée sur la vidéo du Hero
            (avant scroll). S'efface dès que le fond plein prend le relais. */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 h-[160%] bg-gradient-to-b from-charbon/75 via-charbon/25 to-transparent transition-opacity duration-300 ${
            scrolled || open ? "opacity-0" : "opacity-100"
          }`}
        />
        <nav
          aria-label="Navigation principale"
          className="relative z-10 mx-auto flex h-[var(--header-h)] max-w-[1400px] items-center justify-between px-5 sm:px-8"
        >
          <Link
            href="/"
            aria-label={`${brand.name} — accueil`}
            className="inline-flex items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <ul className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.14em] md:flex">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={link.wideOnly ? "hidden lg:block" : undefined}
              >
                <a
                  href={link.href}
                  className="inline-block py-2 transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-haspopup="dialog"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Menu mobile plein écran — panneau opaque, hors du <header> pour que
          `position: fixed` se cale sur le viewport (le backdrop-filter du
          header créerait sinon un bloc conteneur qui l'écrase). */}
      <div
        ref={panelRef}
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-charbon text-cream transition-[opacity,transform] duration-300 ease-out md:hidden ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <nav className="flex flex-1 flex-col justify-center gap-1 px-6 pt-[var(--header-h)] pb-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-cream/10 py-4 transition-colors hover:text-jaune"
            >
              <span className="font-sans text-xs tracking-[0.2em] text-cream/55 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display block text-[2.75rem] leading-none">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 border-t border-cream/10 px-6 pb-[max(2rem,calc(env(safe-area-inset-bottom)+1rem))] pt-5 text-xs font-medium uppercase tracking-[0.16em] text-cream/60">
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-1 transition-colors hover:text-cream"
            >
              <InstagramMark className="h-4 w-4" id="ig-mark-menu" />
              Instagram
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          )}
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              className="py-1 lowercase transition-colors hover:text-cream"
            >
              {socialLinks.email}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
