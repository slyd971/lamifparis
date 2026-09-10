import type { StaticImageData } from "next/image";

import g1 from "@/assets/gallery/gallery-mif1.jpg";
import g2 from "@/assets/gallery/gallery-mif2.jpg";
import g3 from "@/assets/gallery/gallery-mif3.jpg";
import g4 from "@/assets/gallery/gallery-mif4.jpg";
import g5 from "@/assets/gallery/gallery-mif5.jpg";
import g6 from "@/assets/gallery/gallery-mif6.jpg";
import g7 from "@/assets/gallery/gallery-mif7.jpg";
import g8 from "@/assets/gallery/gallery-mif8.jpg";
import g9 from "@/assets/gallery/gallery-mif9.jpg";
import g10 from "@/assets/gallery/gallery-mif10.jpg";
import g11 from "@/assets/gallery/gallery-mif11.jpg";
import g12 from "@/assets/gallery/gallery-mif12.jpg";
import g13 from "@/assets/gallery/gallery-mif13.jpg";
import g14 from "@/assets/gallery/gallery-mif14.jpg";
import g15 from "@/assets/gallery/gallery-mif15.jpg";
import conceptBio from "@/assets/gallery/concept-bio.jpg";
import contactTeam from "@/assets/contact/team.jpg";
import logoLaMif from "@/assets/logo/logo-la-mif-mark.png";

/* ================================================================== */
/*  TYPES                                                              */
/* ================================================================== */

export type KeyFigure = {
  /** Valeur affichée en XXL (peut être un nombre ou une expression). */
  value: string;
  /** Libellé court sous la valeur. */
  label: string;
};

export type Experience = {
  id: string;
  /** Numéro d'ordre affiché (01, 02, …). */
  index: string;
  title: string;
  text: string;
  /**
   * Média illustrant cet univers. Remplacer librement par une vraie
   * photo / vidéo LA MIF (voir README « Où ajouter les médias »).
   */
  media?: MediaSlot;
};

export type MediaSlot =
  | { kind: "image"; src: StaticImageData; alt: string }
  | { kind: "video"; src: string; poster: string; alt: string };

export type Artist = {
  name: string;
  /** Rôle éventuel : DJ, chanteur·se, performeur·se… */
  role?: string;
  /** Chemin public (ex: "/media/artists/nom.jpg") ou import statique. */
  photo?: string | StaticImageData;
};

export type VideoItem = {
  id: string;
  /** Fichier .mp4 dans /public/media/video (format vertical 9:16). */
  src: string;
  /** Image d'attente affichée avant lecture. */
  poster: string;
  /** Légende courte optionnelle. */
  label?: string;
};

export type GalleryItem = {
  src: StaticImageData;
  alt: string;
};

export type Testimonial = {
  quote: string;
  author?: string;
  /** Contexte : « partenaire », « cliente habituée », lieu… */
  context?: string;
};

export type SocialLinks = {
  instagram?: string;
  email?: string;
  /** Lien ou contact booking / programmation. */
  booking?: string;
  /** Numéro WhatsApp au format international, ex. "+33663907888". */
  whatsapp?: string;
};

/* ================================================================== */
/*  IDENTITÉ                                                           */
/* ================================================================== */

export const brand = {
  name: "LA MIF",
  place: "Paris",
  since: 2023,
  slogan: "LA MIF C'EST ÇA",
  intro:
    "Un concept de soirée pensé pour les plus de 25 ans : l'esprit d'une soirée appart, à l'échelle d'un véritable événement.",
  /** Logo officiel — wordmark « LA MIF' / PARIS » détouré (fond transparent,
   *  à afficher sur fond sombre). Source brute : LOGO/LOGO LA MIF.png. */
  logo: logoLaMif,
} as const;

/* ================================================================== */
/*  02 — CHIFFRES CLÉS  (ne rien modifier)                             */
/* ================================================================== */

export const keyFigures: KeyFigure[] = [
  { value: "+15", label: "Soirées en 3 ans" },
  { value: "+5 000", label: "Clients réunis" },
  { value: "25+", label: "Cœur de cible" },
  { value: "Concept unique", label: "Comme une soirée appart" },
];

/* ================================================================== */
/*  03 — LE CONCEPT                                                    */
/* ================================================================== */

export const concept = {
  kicker: "Le concept",
  statement:
    "Retrouver l'esprit d'une soirée appart, mais dans un véritable événement.",
  paragraphs: [
    "Créée en 2023, La Mif est un concept de soirée pensé pour les plus de 25 ans, avec une envie simple : retrouver l'esprit d'une soirée appart, mais dans un véritable événement.",
    "Ici, on vient pour faire la fête, mais surtout pour partager un moment ensemble. Des jeux de société sont disponibles toute la soirée, le karaoké permet à chacun de prendre le micro et des artistes live viennent compléter l'expérience.",
    "Et quand il est temps de faire monter l'ambiance, La Mif sait aussi turn up. Mais sans le côté m'as-tu-vu.",
    "Depuis le début, La Mif veut sortir des codes traditionnels des clubs et des boîtes de nuit : les tables, les promos et cette logique où certains viennent davantage pour se montrer que pour réellement profiter de leur soirée.",
    "La Mif propose une autre manière de sortir : une soirée plus conviviale, plus spontanée, où l'on peut jouer, chanter, profiter d'un live, danser et faire la fête dans un même événement.",
    "L'objectif est surtout de fédérer une véritable communauté. Créer des rendez-vous où les gens se retrouvent, rencontrent de nouvelles personnes et finissent par avoir le sentiment de faire partie d'une même famille.",
  ],
  pullQuote: "Mais sans le côté m'as-tu-vu.",
  image: {
    src: conceptBio,
    alt: "Quatre membres de la communauté LA MIF réunis devant le mur d'un événement",
  },
} as const;

/* ================================================================== */
/*  04 — L'EXPÉRIENCE LA MIF                                            */
/* ================================================================== */

export const experiences: Experience[] = [
  {
    id: "jeux",
    index: "01",
    title: "Jeux de société",
    text: "Des tables dédiées, disponibles toute la soirée pour briser la glace, lancer des défis entre inconnus et rire fort avant même que la piste ne s'anime.",
    media: {
      kind: "image",
      src: g12,
      alt: "Invité en plein fou rire pendant la soirée LA MIF",
    },
  },
  {
    id: "karaoke",
    index: "02",
    title: "Karaoké",
    text: "Le micro circule et la scène appartient à tout le monde : reprises connues, fous rires collectifs — seul compte le plaisir de chanter ensemble, sans jugement.",
    media: {
      kind: "image",
      src: g2,
      alt: "Invités derrière les platines, micro en main, sourire aux lèvres",
    },
  },
  {
    id: "live",
    index: "03",
    title: "Live artistes",
    text: "Sur certaines dates, des artistes montent sur scène pour une vraie performance live, entre deux ambiances — pas un simple DJ set, une proposition artistique à part entière.",
    media: {
      kind: "image",
      src: g13,
      alt: "Foule dense et joyeuse, invités qui chantent ensemble",
    },
  },
  {
    id: "turnup",
    index: "04",
    title: "Turn up",
    text: "Puis l'énergie grimpe naturellement, la playlist s'intensifie et le dancefloor se remplit — sans jamais basculer dans la course au paraître, juste l'envie collective de danser.",
    media: {
      kind: "image",
      src: g5,
      alt: "Public qui danse serré sur le dancefloor d'une soirée LA MIF",
    },
  },
];

/* ================================================================== */
/*  05 — ARTISTES / LINE-UP                                            */
/*  Laisser vide tant que les noms ne sont pas confirmés.              */
/*  Exemple : { name: "…", role: "DJ", photo: "/media/artists/x.jpg" } */
/*  Dès qu'au moins un artiste est renseigné, la section s'affiche.    */
/* ================================================================== */

export const artists: Artist[] = [];

/* ================================================================== */
/*  06 — VIDÉOS  (verticales 9:16, dans /public/media/video)           */
/* ================================================================== */

export const videos: VideoItem[] = [
  {
    id: "reel-1",
    src: "/media/video/reel-1.mp4",
    poster: "/media/video/reel-1-poster.jpg",
  },
  {
    id: "reel-2",
    src: "/media/video/reel-2.mp4",
    poster: "/media/video/reel-2-poster.jpg",
  },
  {
    id: "reel-3",
    src: "/media/video/reel-3.mp4",
    poster: "/media/video/reel-3-poster.jpg",
  },
];

export const heroVideo = {
  mp4: "/media/video/hero.mp4",
  webm: "/media/video/hero.webm",
} as const;

/* ================================================================== */
/*  07 — IMMERSION / GALERIE                                           */
/* ================================================================== */

export const gallery: GalleryItem[] = [
  { src: g13, alt: "Foule dense et joyeuse, invités qui chantent et dansent ensemble" },
  { src: g12, alt: "Invité hilare, bras levé, en plein fou rire" },
  { src: g5, alt: "Public qui danse serré sur le dancefloor" },
  { src: g2, alt: "Trois personnes derrière les platines, micro en main" },
  { src: g1, alt: "Deux amis complices, bras sur l'épaule, en pleine discussion" },
  { src: g11, alt: "Invité faisant le signe de la paix dans la foule, casquette rouge" },
  { src: g7, alt: "Portrait rapproché d'une invitée sur le dancefloor, lumières chaudes" },
  { src: g14, alt: "Invitée souriante derrière un éventail coloré" },
  { src: g9, alt: "Invitée souriante à table, veste crème, regard complice" },
];

/** Galerie complète (§ page /galerie) — tout l'album, sans sélection. */
export const galleryFull: GalleryItem[] = [
  ...gallery,
  { src: g3, alt: "Deux amies enlacées et rieuses, verres de vin blanc à la main" },
  { src: g4, alt: "Deux invités complices, l'un tenant un éventail tissé coloré" },
  { src: g6, alt: "Portrait d'une invitée aux cheveux auburn, blouson bicolore rouge et blanc" },
  { src: g8, alt: "Portrait d'un invité barbu, bonnet et chemise imprimée, lumière tamisée" },
  { src: g10, alt: "Portrait souriant d'une invitée aux locks, boucles d'oreilles créoles" },
  { src: g15, alt: "Invités au bar, verres à la main, ambiance festive" },
];

/* ================================================================== */
/*  08 — TÉMOIGNAGES                                                   */
/*  Laisser vide : la section reste masquée tant qu'il n'y a rien.     */
/*  Exemple : { quote: "…", author: "…", context: "partenaire" }       */
/* ================================================================== */

export const testimonials: Testimonial[] = [];

/* ================================================================== */
/*  09 — CONTACT                                                       */
/*  Renseigner les liens réels quand ils sont disponibles.             */
/*  Un lien vide n'est pas affiché.                                    */
/* ================================================================== */

export const contact = {
  title: "Construire la prochaine expérience La Mif",
  subtitle:
    "Pour accueillir une édition, imaginer une collaboration ou connecter une marque à la communauté La Mif.",
  image: {
    src: contactTeam,
    alt: "L'équipe LA MIF réunie, portrait de groupe en noir et blanc",
  },
} as const;

export const socialLinks: SocialLinks = {
  instagram: "https://www.instagram.com/lamifparis2.0/",
  email: "lamifparis2.0@gmail.com",
  booking: "",
  whatsapp: "+33663907888",
};

/* ================================================================== */
/*  NAVIGATION                                                         */
/* ================================================================== */

export const navLinks = [
  { href: "/#concept", label: "Concept" },
  { href: "/#experience", label: "Expérience" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#contact", label: "Contact" },
];
