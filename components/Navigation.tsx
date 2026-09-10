"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brand, navLinks, socialLinks } from "@/data/laMif";
import InstagramMark from "@/components/InstagramMark";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
        <nav
          aria-label="Navigation principale"
          className="mx-auto flex h-[var(--header-h)] max-w-[1400px] items-center justify-between px-5 sm:px-8"
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
              <li key={link.href}>
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
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
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
        id="menu-mobile"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-charbon text-cream transition-[opacity,transform] duration-300 ease-out md:hidden ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <nav
          aria-label="Menu"
          className="flex flex-1 flex-col justify-center gap-1 px-6 pt-[var(--header-h)] pb-8"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-cream/10 py-4 transition-colors hover:text-corail"
            >
              <span className="font-sans text-xs tracking-[0.2em] text-cream/40 tabular-nums">
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
