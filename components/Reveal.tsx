"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type RevealOwnProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Décalage en ms avant l'apparition (effet de cascade). */
  delay?: number;
};

type RevealProps = RevealOwnProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof RevealOwnProps>;

/**
 * Enrobe son contenu d'un léger fondu + translation au scroll.
 * - Sans JS : le contenu reste visible (voir `@media (scripting: none)`).
 * - `prefers-reduced-motion` : apparition instantanée (géré en CSS).
 * Double sécurité : IntersectionObserver + repli sur écoute du scroll,
 * pour qu'aucun contenu ne reste jamais masqué.
 */
export default function Reveal({
  children,
  as,
  className = "",
  delay = 0,
  style,
  ...rest
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;
    let done = false;

    const check = () => {
      if (done) return;
      const { top, bottom } = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (top >= vh * 0.92 || bottom <= 0) return;
      done = true;
      el.dataset.visible = "true";
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      observer?.disconnect();
    };

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(check, {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0,
      });
      observer.observe(el);
    }

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      observer?.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-visible="false"
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
