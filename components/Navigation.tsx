"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { brand, navLinks } from "@/data/laMif";

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
          className="display text-xl leading-none tracking-tight sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          {brand.name}
          <span className="text-vermillon">.</span>
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
          className="relative z-50 flex h-11 w-11 items-center justify-center md:hidden"
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

      {/* Menu mobile plein écran, volontairement minimal */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-0 z-40 bg-vermillon text-cream md:hidden"
      >
        <ul className="flex h-full flex-col items-start justify-center gap-2 px-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="display block py-2 text-[13vw] leading-tight"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
