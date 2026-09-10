/**
 * Logo Instagram aux couleurs officielles (dégradé sud-ouest → nord-est).
 * `id` doit être unique par instance rendue simultanément (le dégradé SVG
 * est référencé par cet identifiant).
 */
export default function InstagramMark({
  className = "h-4 w-4",
  id = "ig-mark",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient
          id={id}
          x1="2"
          y1="22"
          x2="22"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#feda75" />
          <stop offset="0.25" stopColor="#fa7e1e" />
          <stop offset="0.5" stopColor="#d62976" />
          <stop offset="0.75" stopColor="#962fbf" />
          <stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill={`url(#${id})`} />
      <rect
        x="6.4"
        y="6.4"
        width="11.2"
        height="11.2"
        rx="3.4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
      />
      <circle cx="16.1" cy="7.9" r="1.05" fill="#fff" />
    </svg>
  );
}
