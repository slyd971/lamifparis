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
  value: "Notre signature",
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
    "Créée en 2023, La Mif retrouve la spontanéité d'une soirée entre potes. Jeux de société toute la soirée, karaoké ouvert à tous, DJ sets et, selon les éditions, artistes en live : chacun trouve sa manière de participer.",
  ],
  /** Citation mise en exergue. */
  pullQuote: "Sans le côté m'as-tu-vu. Juste la Mif.",
  /** Phrase de clôture, sur la communauté. */
  closing: "On arrive inconnus. On repart en famille.",
  image: {
    src: conceptBio,
    alt: "Quatre membres de la communauté LA MIF réunis devant le mur d'un événement",
    /** Légende créditant l'équipe visible sur la photo. */
    credit: "Team La Mif — Izzy, Sly'D, Sweet & Tya",
  },
} as const;

/* ================================================================== */
/*  04 — L'EXPÉRIENCE LA MIF                                            */
/* ================================================================== */

/** Chapô de la section §04 (rendu dans Experience.tsx). */
export const experienceIntro =
  "Des jeux accessibles toute la soirée, du karaoké, des DJ sets et, selon les éditions, des performances live.";

export const experiences: Experience[] = [
  {
    id: "jeux",
    index: "01",
    title: "Jeux de société",
    text: "Des jeux accessibles toute la soirée pour briser la glace et faire connaissance.",
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
    text: "Le micro passe de main en main : on reprend ses classiques, on chante ensemble et on se prend au jeu.",
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
    text: "Selon les éditions, des artistes prennent le micro pour une performance live au plus près du public.",
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
    text: "Les DJ sets font monter l'énergie et rassemblent tout le monde sur le dancefloor.",
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

/** Chapô de la section §08 (rendu dans Collaborations.tsx). */
export const collaborationsIntro =
  "Une marque, un lieu, un collectif : plusieurs façons de faire équipe avec La Mif.";

export const collaborations: Collaboration[] = [
  {
    id: "sponsors",
    title: "Sponsors & marques",
    text: "Soutenir une édition ou imaginer une activation de marque au cœur de l'expérience La Mif.",
  },
  {
    id: "lieux",
    title: "Lieux",
    text: "Accueillir une édition La Mif et faire de votre lieu le prochain point de rendez-vous.",
  },
  {
    id: "organisateurs",
    title: "Organisateurs & collectifs",
    text: "Co-organiser un événement, réunir nos communautés et créer une édition ensemble.",
  },
];

/* ================================================================== */
/*  07 — IMMERSION / GALERIE                                           */
/* ================================================================== */

// Aperçu recentré sur 6 photos complémentaires (pas de doublon de scène),
// arc resserré : on arrive / on échange / on joue-on chante / on partage /
// on danse. Sélection indépendante de `galleryFull` ci-dessous — aucun
// média n'est retiré du site, seulement de cet aperçu.
export const gallery: GalleryItem[] = [
  { src: g1, alt: "Deux amis complices, bras sur l'épaule, en pleine discussion" },
  { src: g9, alt: "Invitée souriante à table, veste crème, regard complice" },
  { src: g2, alt: "Trois personnes derrière les platines, micro en main" },
  { src: g12, alt: "Invité hilare, bras levé, en plein fou rire" },
  { src: g7, alt: "Portrait rapproché d'une invitée sur le dancefloor, lumières chaudes" },
  { src: g13, alt: "Foule dense et joyeuse, invités qui chantent et dansent ensemble" },
];

/** Galerie complète (§ page /galerie) — tout l'album, sans sélection, dans
 *  l'ordre des fichiers sources. Indépendante de `gallery` : aucune photo
 *  n'est retirée d'ici quand l'aperçu ci-dessus change. */
export const galleryFull: GalleryItem[] = [
  { src: g1, alt: "Deux amis complices, bras sur l'épaule, en pleine discussion" },
  { src: g2, alt: "Trois personnes derrière les platines, micro en main" },
  { src: g3, alt: "Deux amies enlacées et rieuses, verres de vin blanc à la main" },
  { src: g4, alt: "Deux invités complices, l'un tenant un éventail tissé coloré" },
  { src: g5, alt: "Public qui danse serré sur le dancefloor" },
  { src: g6, alt: "Portrait d'une invitée aux cheveux auburn, blouson bicolore rouge et blanc" },
  { src: g7, alt: "Portrait rapproché d'une invitée sur le dancefloor, lumières chaudes" },
  { src: g8, alt: "Portrait d'un invité barbu, bonnet et chemise imprimée, lumière tamisée" },
  { src: g9, alt: "Invitée souriante à table, veste crème, regard complice" },
  { src: g10, alt: "Portrait souriant d'une invitée aux locks, boucles d'oreilles créoles" },
  { src: g11, alt: "Invité faisant le signe de la paix dans la foule, casquette rouge" },
  { src: g12, alt: "Invité hilare, bras levé, en plein fou rire" },
  { src: g13, alt: "Foule dense et joyeuse, invités qui chantent et dansent ensemble" },
  { src: g14, alt: "Invitée souriante derrière un éventail coloré" },
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

/**
 * CTA de collaboration partagé par le Hero et la section Collaborations —
 * même libellé, même destination (#contact).
 */
export const collabCta = "On collab ?";

export const contact = {
  /** Titre — un seul élément ici, mais le tableau autorise plusieurs lignes
   *  display si besoin plus tard. */
  titleLines: ["On fait ça ensemble ?"],
  subtitle:
    "Une marque, un lieu, un collectif ? Parlons de la prochaine édition ensemble.",
  /** Libellé du CTA email. */
  emailCta: "Écrivez-nous",
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
