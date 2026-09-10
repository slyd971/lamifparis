/**
 * URL canonique du site.
 *
 * Par défaut : le domaine de production (lamifparis.presskit.fr). C'est cette
 * valeur qui alimente <link rel="canonical">, les balises Open Graph / Twitter,
 * robots.txt et sitemap.xml — tous en https et sur le même domaine.
 *
 * Surchargeable via NEXT_PUBLIC_SITE_URL (ex. environnement de préproduction).
 * En développement local, `next dev` sert malgré tout depuis http://localhost:3000
 * mais les URL absolues des métadonnées pointeront vers la prod — c'est voulu.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lamifparis.presskit.fr"
).replace(/\/$/, "");
