import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brand } from "@/data/laMif";

/**
 * Carte de partage social — format paysage 1200×630 (le ratio attendu par
 * Facebook, WhatsApp, LinkedIn, Twitter/X). Générée au build, elle remplace
 * l'ancien poster vidéo vertical (720×1280) qui s'affichait mal recadré.
 *
 * Le même rendu sert aussi de `twitter-image` (voir app/twitter-image.tsx).
 */

export const alt = "LA MIF — presskit officiel · un concept de soirée à Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Lu une seule fois, au chargement du module (pas de dépendance à la requête).
const logo = await readFile(
  join(process.cwd(), "assets/logo/logo-la-mif-mark.png"),
);
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          background:
            "linear-gradient(135deg, #541C25 0%, #3a131a 55%, #171717 100%)",
          color: "#F3EBDD",
          fontFamily: "sans-serif",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Filet signature en haut */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: "#E34234",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 48,
            left: 80,
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "rgba(243,235,221,0.6)",
            display: "flex",
          }}
        >
          Presskit
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={420} />

        <div
          style={{
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#F4B942",
            textAlign: "center",
            display: "flex",
          }}
        >
          {brand.signature}
        </div>
      </div>
    ),
    { ...size },
  );
}
