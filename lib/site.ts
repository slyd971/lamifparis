/** URL canonique du site — à surcharger via NEXT_PUBLIC_SITE_URL en prod. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");
