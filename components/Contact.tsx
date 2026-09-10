import Image from "next/image";
import { brand, contact, socialLinks } from "@/data/laMif";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import InstagramMark from "@/components/InstagramMark";

export default function Contact() {
  const emailHref = socialLinks.email ? `mailto:${socialLinks.email}` : undefined;
  // Le numéro n'est jamais affiché en clair, seulement encodé dans le lien.
  const whatsappHref = socialLinks.whatsapp
    ? `https://wa.me/${socialLinks.whatsapp.replace(/\D/g, "")}`
    : undefined;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-framboise text-cream"
    >
      <Marquee
        text={brand.slogan}
        className="bg-vermillon py-4 text-cream"
      />

      <div className="mx-auto max-w-[1400px] px-5 py-[var(--section-pad)] sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
          {/* Colonne de gauche : titre, texte, CTA. */}
          <div className="max-w-xl">
            <Reveal
              as="h2"
              id="contact-title"
              className="display text-[11vw] leading-[1.12] sm:text-[6.5vw] sm:leading-[1.05] lg:text-[5rem]"
            >
              {contact.titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </Reveal>

            <Reveal
              as="p"
              className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-cream/80 sm:text-base"
            >
              {contact.subtitle}
            </Reveal>

            {/* CTA principal — très identifiable. */}
            {emailHref && (
              <Reveal className="mt-8">
                <a
                  href={emailHref}
                  className="flex w-full items-center justify-center gap-2 bg-cream px-9 py-4 text-base font-semibold uppercase tracking-[0.14em] text-framboise transition-colors hover:bg-jaune sm:inline-flex sm:w-auto"
                >
                  {contact.cta}
                </a>
              </Reveal>
            )}

            {/* Canaux secondaires — uniquement ceux réellement disponibles. */}
            <Reveal className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 border border-cream/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream hover:bg-cream/10 sm:inline-flex sm:w-auto sm:min-w-[10.5rem]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#25D366]" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.41-1.42a9.87 9.87 0 0 0 4.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.37-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .9 2.14.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.38-.24.64-.15.26.1 1.68.79 1.97.94.29.15.48.22.55.34.07.13.07.75-.17 1.43Z" />
                  </svg>
                  WhatsApp
                </a>
              )}

              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 border border-cream/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream hover:bg-cream/10 sm:inline-flex sm:w-auto sm:min-w-[10.5rem]"
                >
                  <InstagramMark className="h-[1.15rem] w-[1.15rem]" id="ig-mark-contact" />
                  Instagram
                </a>
              )}
            </Reveal>
          </div>

          {/* Colonne de droite : photo, alignée sur le haut du titre. */}
          <Reveal delay={80} className="w-full max-w-sm shrink-0 lg:w-[28rem] lg:max-w-none">
            <div className="border border-cream/20 bg-cream/[0.05] p-1.5 sm:p-2">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={contact.image.src}
                  alt={contact.image.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 448px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-cream/20 px-5 py-8 text-xs uppercase tracking-[0.18em] text-cream/70 sm:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3">
          <span>
            {brand.name} — {brand.place} · depuis {brand.since}
          </span>
          <span>
            Powered by{" "}
            <a
              href="https://presskit.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream transition-opacity hover:opacity-70"
            >
              presskit.fr
            </a>
          </span>
        </div>
      </footer>
    </section>
  );
}
