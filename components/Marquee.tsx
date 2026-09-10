type MarqueeProps = {
  text: string;
  className?: string;
  /** Classe couleur du séparateur ✱ (par défaut : corail). */
  markClassName?: string;
  /** Nombre de répétitions par piste (la piste est dupliquée pour la boucle). */
  repeat?: number;
};

/** Bandeau défilant en CSS pur. Figé si `prefers-reduced-motion`. */
export default function Marquee({
  text,
  className = "",
  markClassName = "text-corail",
  repeat = 4,
}: MarqueeProps) {
  const items = Array.from({ length: repeat });
  return (
    <div
      className={`flex overflow-hidden whitespace-nowrap select-none ${className}`}
      aria-hidden="true"
    >
      {[0, 1].map((track) => (
        <div key={track} className="marquee-track flex shrink-0">
          {items.map((_, i) => (
            <span key={i} className="display px-6 text-[clamp(1.5rem,4vw,3rem)]">
              {text}
              <span className={`px-6 ${markClassName}`}>✱</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
