import type { CSSProperties, ReactNode } from "react";

type FrameProps = {
  children: ReactNode;
  /** "light" : filet clair sur fond sombre — "dark" : filet sombre sur fond crème. */
  tone?: "light" | "dark";
  /** Ratio d'image (ex. "4/5", "3/2", "9/16"). */
  ratio?: string;
  className?: string;
};

/**
 * Passe-partout minimal : un filet fin + un fond à peine teinté, angles vifs.
 * Donne aux photos une assise sur les aplats de couleur sans effet « card ».
 */
export default function Frame({
  children,
  tone = "dark",
  ratio = "4/5",
  className = "",
}: FrameProps) {
  const skin =
    tone === "light"
      ? "border-cream/20 bg-cream/[0.05]"
      : "border-charbon/15 bg-charbon/[0.03]";
  return (
    <div className={`border ${skin} p-1.5 sm:p-2 ${className}`}>
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: ratio } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
