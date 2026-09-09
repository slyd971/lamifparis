import Image from "next/image";
import type { GalleryItem } from "@/data/laMif";

/**
 * Mosaïque en colonnes (masonry) partagée par l'aperçu (§07 Gallery) et la
 * page /galerie complète. Chaque photo garde son format portrait d'origine,
 * aucun recadrage. Toutes les tuiles ont le même poids : un portrait centré
 * en breakout pleine largeur laisse de grandes bandes vides disgracieuses.
 */
export default function GalleryGrid({
  items,
  columns = "columns-2 gap-3 sm:columns-3 sm:gap-4",
}: {
  items: GalleryItem[];
  columns?: string;
}) {
  return (
    <ul className={columns}>
      {items.map((item, i) => (
        <li
          key={i}
          className="group relative mb-3 overflow-hidden border border-cream/10 bg-cream/[0.03] break-inside-avoid sm:mb-4"
        >
          <Image
            src={item.src}
            alt={item.alt}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            placeholder="blur"
            loading="lazy"
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </li>
      ))}
    </ul>
  );
}
