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
import flyerFeteMusique from "@/assets/flyers/lamif-fete-musique-21juin.jpg";
import flyerSe3Ep1 from "@/assets/flyers/lamif-se3ep1-041025.jpg";
import flyerOutsidePt2 from "@/assets/flyers/lamif-outside-pt2-130625.jpg";
import flyerBirthday from "@/assets/flyers/lamif-2ans-birthday-030525.jpg";
import flyerOldSchool from "@/assets/flyers/lamif-old-school-040425.jpg";
import flyerChocolateFactory from "@/assets/flyers/lamif-chocolate-factory-091124.jpg";

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

export type Flyer = {
  src: StaticImageData;
  alt: string;
  /** Nom de l'édition, tel qu'imprimé sur l'affiche. */
  edition: string;
  /** Date confirmée, formatée pour l'affichage (ex. "13 juin 2025"). */
  date: string;
  /** Lieu confirmé — reprend le nom utilisé dans `venues`. */
  venue: string;
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
  /** Signature courte : les temps forts d'une soirée. */
  signature: "Jeux · Food · Karaoké · Live · DJ Sets",
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
  { value: "+20", label: "soirées organisées en 3 ans" },
  { value: "+5 000", label: "participants réunis" },
  { value: "25+", label: "cœur de cible" },
];

/** Traité à part des chiffres : ce n'est pas une donnée statistique mais la
 *  nature du concept. Affiché avec un style distinct dans la section. */
export const conceptBadge = {
  value: "Concept unique",
  label: "L'esprit d'une soirée appart",
} as const;

/* ================================================================== */
/*  03 — LE CONCEPT                                                    */
/* ================================================================== */

export const concept = {
  kicker: "Le concept",
  statement:
    "On ne vient pas seulement à La Mif pour danser. On vient pour vivre quelque chose ensemble.",
  paragraphs: [
    "Créée en 2023, La Mif retrouve la spontanéité d'une soirée entre potes — à l'échelle d'un véritable événement.",
    "Jeux de société toute la soirée, karaoké ouvert à tous, artistes en live, DJ sets : on joue, on discute, on chante, on rencontre du monde, et on finit par danser.",
  ],
  /** Amorce + citation du bloc « turn up » (mis en exergue). */
  pullLead: "Et quand vient le moment de turn up, La Mif sait faire.",
  pullQuote: "Sans le côté m'as-tu-vu. Juste la Mif.",
  /** Phrase de clôture, sur la communauté. */
  closing: "On arrive inconnus. On repart en famille.",
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
    text: "Des jeux accessibles toute la soirée pour briser la glace, provoquer les rencontres et retrouver l'ambiance d'une soirée entre potes.",
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
    text: "Le micro passe de main en main. Reprises, fous rires, personne ne juge — tout le monde y passe.",
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
    text: "Sur certaines dates, de vrais lives montent sur scène. Pas un simple DJ set : une performance à part entière.",
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
    text: "L'énergie grimpe, la playlist s'intensifie, le dancefloor se remplit. L'envie collective de danser, sans la course au paraître.",
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
  /** Image d'attente — affichée immédiatement, avant/à la place de la vidéo
   *  (reduced-motion, Save-Data, connexion lente, temps de buffer). */
  poster: "/media/video/hero-poster.jpg",
} as const;

/* ================================================================== */
/*  06 bis — ILS NOUS ONT FAIT CONFIANCE                               */
/*  Uniquement les lieux réellement validés, avec un détail confirmé   */
/*  (nombre d'éditions, temps fort, période). Ne rien ajouter sans     */
/*  confirmation.                                                      */
/* ================================================================== */

export type Venue = {
  name: string;
  /** Détail court et confirmé : nombre d'éditions, temps fort, période. */
  detail: string;
};

export const venues: Venue[] = [
  {
    name: "Nakama",
    detail:
      "Plus d'une quinzaine d'éditions — un rendez-vous mensuel de 2023 à 2025",
  },
  { name: "Velvet Bar", detail: "Fête de la Musique 2024, 2025 & 2026" },
  { name: "Bateau Phare", detail: "4 éditions estivales" },
];

/* ================================================================== */
/*  06 ter — FLYERS DES ÉDITIONS                                       */
/*  Uniquement des affiches réelles. Nom d'édition, date et lieu       */
/*  proviennent du texte imprimé sur l'affiche elle-même — jamais      */
/*  déduits. Ordre : éditions les plus récentes en premier. Rien ne    */
/*  s'affiche tant que le tableau est vide (voir §_Contenus à fournir_).*/
/* ================================================================== */

export const flyers: Flyer[] = [
  {
    src: flyerFeteMusique,
    alt: "Affiche « Fête de la Musique — Open Air Party » : typographie colorée aux couleurs rouge, jaune, vert sur fond de motifs africains",
    edition: "Fête de la Musique — Open Air Party",
    // Année non imprimée sur l'affiche (événement récurrent au Velvet Bar,
    // voir `venues`) — on ne garde que ce qui est confirmé : le jour et le
    // mois. La plus récente édition d'après le retour terrain.
    date: "Dimanche 21 juin",
    venue: "Velvet Bar",
  },
  {
    src: flyerSe3Ep1,
    alt: "Affiche « SE3.EP1 » : portrait souriant en noir et blanc, grillz aux dents",
    edition: "SE3.EP1",
    date: "4 octobre 2025",
    venue: "Nakama",
  },
  {
    src: flyerOutsidePt2,
    alt: "Affiche « Outside Pt2 Edition » : illustration d'un bateau et d'un phare sur fond de Paris",
    edition: "Outside Pt2 Edition",
    date: "13 juin 2025",
    venue: "Bateau Phare",
  },
  {
    src: flyerBirthday,
    alt: "Affiche « 2-Years Birthday Bash » : portrait d'un DJ à lunettes de soleil",
    edition: "2-Years Birthday Bash",
    date: "3 mai 2025",
    venue: "Nakama",
  },
  {
    src: flyerOldSchool,
    alt: "Affiche « Old School Edition » : illustration rétro avec radio-cassette vintage",
    edition: "Old School Edition",
    date: "4 avril 2025",
    venue: "Nakama",
  },
  {
    src: flyerChocolateFactory,
    alt: "Affiche « Chocolate Factory Edition » : portrait sur fond chocolat",
    edition: "Chocolate Factory Edition",
    date: "9 novembre 2024",
    venue: "Nakama",
  },
];

/* ================================================================== */
/*  08 — LA MIF × VOUS  (pistes de collaboration B2B)                  */
/* ================================================================== */

export type Collaboration = {
  id: string;
  title: string;
  text: string;
};

export const collaborations: Collaboration[] = [
  {
    id: "lieux",
    title: "Lieux",
    text: "Accueillir une édition La Mif et créer un véritable rendez-vous communautaire.",
  },
  {
    id: "marques",
    title: "Marques",
    text: "Imaginer une activation intégrée naturellement à l'expérience La Mif.",
  },
  {
    id: "artistes",
    title: "Artistes",
    text: "Créer des showcases, performances et collaborations au cœur de l'événement.",
  },
  {
    id: "evenements",
    title: "Événements",
    text: "Adapter l'expérience La Mif à une programmation ou un événement existant.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    text: "Co-produire un événement pour créer des expériences uniques et mutualiser les communautés.",
  },
];

/* ================================================================== */
/*  07 — IMMERSION / GALERIE                                           */
/* ================================================================== */

// Ordre pensé pour raconter l'arc d'une soirée : on arrive / on échange /
// on joue-on chante / on partage / on danse. (Aucun média retiré.)
export const gallery: GalleryItem[] = [
  { src: g1, alt: "Deux amis complices, bras sur l'épaule, en pleine discussion" },
  { src: g9, alt: "Invitée souriante à table, veste crème, regard complice" },
  { src: g12, alt: "Invité hilare, bras levé, en plein fou rire" },
  { src: g2, alt: "Trois personnes derrière les platines, micro en main" },
  { src: g14, alt: "Invitée souriante derrière un éventail coloré" },
  { src: g11, alt: "Invité faisant le signe de la paix dans la foule, casquette rouge" },
  { src: g7, alt: "Portrait rapproché d'une invitée sur le dancefloor, lumières chaudes" },
  { src: g5, alt: "Public qui danse serré sur le dancefloor" },
  { src: g13, alt: "Foule dense et joyeuse, invités qui chantent et dansent ensemble" },
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
  /** Titre en deux temps (rendu sur deux lignes display). */
  titleLines: ["Vous avez le lieu.", "On ramène la Mif."],
  subtitle: "Accueillir une édition · Collaboration · Partenariat marque.",
  /** Libellé du CTA principal. */
  cta: "Parlons-en",
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

export type NavLink = {
  href: string;
  label: string;
  /**
   * Lien ajouté au menu mobile dans tous les cas ; réservé aux écrans très
   * larges (`lg`) en desktop pour ne jamais serrer/chevaucher la nav
   * horizontale existante.
   */
  wideOnly?: boolean;
};

export const navLinks: NavLink[] = [
  { href: "/#concept", label: "Concept" },
  { href: "/#experience", label: "Expérience" },
  ...(flyers.length > 0
    ? [{ href: "/#flyers", label: "Flyers", wideOnly: true }]
    : []),
  { href: "/#galerie", label: "Galerie" },
  { href: "/#collab", label: "Collab" },
  { href: "/#contact", label: "Contact" },
];
