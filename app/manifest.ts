import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LA MIF — Presskit",
    short_name: "LA MIF",
    description:
      "LA MIF — un concept de soirée pensé pour les plus de 25 ans, à l'échelle d'un véritable événement.",
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#E34234",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
