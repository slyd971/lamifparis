# LA MIF — Presskit digital

Landing page / presskit **one-page** de LA MIF.
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

> Slogan officiel : **LA MIF C'EST ÇA**
> Aucune information sur le collectif n'est inventée : ce qui n'est pas connu est laissé vide (voir §_Contenus à fournir_).

---

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # sert le build
npm run lint     # ESLint
```

Node ≥ 20 recommandé.

### Version « artefact » autonome

`la-mif-presskit.html` — copie **un seul fichier** (HTML + CSS + JS + médias en base64, ~9 Mo),
publiée comme Artifact Claude pour partage rapide. Images et vidéos y sont fortement
compressées et les 2 vidéos raccourcies (~26 s). La **version de production** reste le projet Next.js.
Pour la régénérer : voir `scratchpad/build-artifact.mjs` (script de build hors dépôt).

### URL de base du site

Domaine de production : **https://lamifparis.presskit.fr** — valeur par défaut
codée dans [`lib/site.ts`](lib/site.ts). Elle alimente `<link rel="canonical">`,
les balises Open Graph / Twitter, `robots.txt` et `sitemap.xml` (tous en https,
même domaine).

Surcharge possible via une variable d'environnement (préproduction, autre
domaine) :

```
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
```

---

## Structure

```
app/
  layout.tsx        Fonts (Anton + Inter), <head>, métadonnées, OpenGraph
  page.tsx          Assemble toutes les sections dans l'ordre
  globals.css       Design system : palette, typo, animations, reduced-motion
  icon.png          Favicon / icône (logo LA MIF sur pastille vermillon)
  favicon.ico       Favicon multi-tailles (16/32/48/64)
  apple-icon.png    Icône iOS 180×180
  galerie/page.tsx  Page /galerie — album complet (galleryFull), pas de crop
components/
  Navigation.tsx    Nav sticky minimale + menu mobile
  Hero.tsx          01 — Hero (vidéo de fond desktop / poster mobile) + CTA Contact/Expérience
  KeyFigures.tsx    02 — Chiffres clés (fond framboise)
  Concept.tsx       03 — Le concept (mise en page éditoriale, fond noir)
  Experience.tsx    04 — L'expérience (4 univers en frise, fond framboise)
  Frame.tsx         Passe-partout partagé des photos/vidéos (filet + fond teinté, angles vifs)
  Artists.tsx       05 — Line-up (masqué tant que vide, fond noir)
  VideoSection.tsx  06 — Vidéos 9:16 (carrousel swipe mobile / grille desktop, fond noir)
  Gallery.tsx       07 — Galerie immersive, aperçu (fond noir) + bouton vers /galerie
  GalleryGrid.tsx   Mosaïque en colonnes partagée par Gallery.tsx et app/galerie/page.tsx
  Testimonials.tsx  08 — Témoignages (masqué tant que vide, fond noir)
  Contact.tsx       09 — Contact (fond framboise + marquee corail) — inclut le footer du site
  Reveal.tsx        Apparition au scroll (IntersectionObserver + repli scroll)
  Marquee.tsx       Bandeau défilant CSS
data/
  laMif.ts          ⭐ TOUS les contenus éditoriaux centralisés ici
assets/gallery/     Images de la galerie (import statique = dimensions + blur auto)
assets/logo/        Logo source
public/media/
  video/            Vidéos + posters (hero, reel-1, reel-2, reel-3)
```

Identité visuelle : fond **noir** (`charbon`) majoritaire, en alternance avec des sections **framboise** ; le vermillon reste réservé au Hero, le corail aux accents (kickers, chiffres, hovers).

---

## Palette (design system)

| Rôle | Token Tailwind | Hex |
|---|---|---|
| Fond principal (majoritaire) | `charbon` | `#171717` |
| Sections en alternance | `framboise` | `#B31942` |
| Couleur signature (Hero) | `vermillon` | `#E34234` |
| Texte sur fond sombre / accent clair | `cream` | `#F3EBDD` |
| Accent ponctuel | `corail` | `#FF9E83` |

Modifiables dans `app/globals.css` (bloc `@theme`).
Typographies : **Anton** (titres XXL, `.display`) + **Inter** (texte), auto-hébergées via `next/font`.

---

## Où ajouter / remplacer les contenus

**Tout se passe dans [`data/laMif.ts`](data/laMif.ts).** Les composants ne contiennent aucun contenu en dur.

### 📷 Photos de la galerie (§07)

1. Déposer les fichiers dans `assets/gallery/`.
2. Dans `data/laMif.ts` :
   ```ts
   import gXX from "@/assets/gallery/mon-image.jpg";
   // ...
   export const gallery: GalleryItem[] = [
     { src: gXX, alt: "Description accessible de l'image" },
   ];
   ```
   Mosaïque en colonnes (masonry), toutes les tuiles au même poids : chaque
   photo garde son format portrait d'origine, **aucun recadrage**. (Un
   portrait centré en breakout pleine largeur laisse de grandes bandes
   vides disgracieuses — évité volontairement.)
   Garder une sélection courte (8-10 photos) pour un aperçu qui reste lisible —
   c'est une mosaïque de preview, pas la galerie complète.
   Les dimensions et le flou de chargement sont générés automatiquement (import statique).

   **Galerie complète** (`galleryFull` dans `data/laMif.ts`, page `/galerie`) :
   toutes les photos de l'album, pas de sélection. Ajouter une photo à
   `galleryFull` (elle peut aussi figurer dans `gallery` pour l'aperçu, ou pas).
   Le bouton « Voir toute la galerie » en bas de l'aperçu y renvoie.

### 🖼️ Photo du concept (§03)

`concept.image` dans `data/laMif.ts` (import statique + `alt`).
Photo actuelle : `assets/gallery/concept-bio.jpg` (source `CONCEPT/bio-concept.jpg`, redressée en portrait).

### 🔶 Logo

`brand.logo` dans `data/laMif.ts` → `assets/logo/logo-la-mif.png` (marges transparentes rognées).
Non affiché sur la page actuellement (retiré de la section Contact). Disponible dans les données si besoin ailleurs. À réserver aux fonds sombres (logo blanc + glitch cyan/magenta).

### 🎬 Vidéos verticales (§06)

1. Déposer les `.mp4` (format **9:16**) dans `public/media/video/`.
2. Générer un poster (image d'attente) par vidéo, ex. avec ffmpeg :
   ```bash
   ffmpeg -ss 8 -i public/media/video/ma-video.mp4 -frames:v 1 -q:v 3 public/media/video/ma-video-poster.jpg
   ```
3. Déclarer dans `data/laMif.ts` :
   ```ts
   export const videos: VideoItem[] = [
     { id: "reel-3", src: "/media/video/ma-video.mp4", poster: "/media/video/ma-video-poster.jpg", label: "légende optionnelle" },
   ];
   ```
Chargement différé (`preload="none"`), lecture au clic, une seule vidéo à la fois, pause hors écran.

### 🎥 Vidéo du hero (§01)

`heroVideo` dans `data/laMif.ts` → `public/media/video/hero.mp4` + `hero.webm` + `hero-poster.jpg`.
Lecture en boucle, muette, `autoplay` + `playsinline`. Repli sur le poster seul (léger)
si `prefers-reduced-motion`, économie de données activée, ou connexion très lente (2g).

### 🎤 Artistes / line-up (§05)

Section **masquée automatiquement** tant que le tableau est vide.
```ts
export const artists: Artist[] = [
  { name: "Nom de l'artiste", role: "DJ", photo: "/media/artists/nom.jpg" },
];
```
Créer `public/media/artists/` pour les photos (format carré conseillé). `role` et `photo` sont optionnels.

### 💬 Témoignages (§08)

Section **masquée automatiquement** tant que le tableau est vide.
```ts
export const testimonials: Testimonial[] = [
  { quote: "Le message…", author: "Prénom", context: "partenaire / cliente habituée / lieu…" },
];
```

### 📱 Contact & réseaux (§09)

```ts
export const socialLinks: SocialLinks = {
  instagram: "https://instagram.com/…",
  email: "contact@…",
  booking: "https://… ou email",
};
```
Un lien laissé vide s'affiche en « Lien à venir » (désactivé). `booking` ajoute une 3ᵉ carte si renseigné.

### Chiffres clés / concept / expérience

`keyFigures`, `concept`, `experiences` dans `data/laMif.ts`.
⚠️ Les chiffres du brief ne doivent pas être modifiés (`+15`, `+5 000`, `25+`, `Concept unique`).

---

## Éléments encore à fournir

- [ ] Médias définitifs (photos, vidéos)
- [ ] Noms / photos des artistes (§05)
- [ ] Témoignages (§08)
- [x] Instagram — https://www.instagram.com/lamifparis2.0/
- [x] Email contact — lamifparis2.0@gmail.com (§09) · booking encore à fournir
- [x] URL de production — https://lamifparis.presskit.fr (défaut dans `lib/site.ts`)

Tant que ces éléments ne sont pas fournis, les sections concernées sont soit masquées, soit affichées avec un placeholder technique — **aucune donnée fictive n'est présente**.

---

## Accessibilité & performance

- HTML sémantique, `lang="fr"`, lien d'évitement, focus visibles, navigation clavier.
- `prefers-reduced-motion` respecté (animations neutralisées).
- Images : `next/image` (AVIF/WebP, lazy, dimensions explicites, pas de CLS).
- Vidéos : `playsInline`, `preload="none"`, poster, chargement à la demande.
- Mobile-first, testé à 375 / 390 / 430 px.
