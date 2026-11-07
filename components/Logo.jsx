import Link from "next/link";

export function LogoMark({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 300 301" className={className} aria-hidden="true">
      <g transform="translate(0 301) scale(.1 -.1)" fill="currentColor">
        <path d="M682 2446 c2 -8 84 -136 183 -285 l180 -271 639 0 c547 0 637 2 633 14 -3 8 -87 136 -186 285 l-181 271 -636 0 c-537 0 -635 -2 -632 -14z" />
        <path d="M462 938 l3 -693 929 -3 c800 -2 927 0 923 12 -3 8 -87 136 -186 285 l-181 271 -460 0 -460 0 0 130 0 130 375 0 375 0 -188 280 -187 280 -473 0 -472 0 2 -692z" />
      </g>
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-1.5 ${className}`}
      aria-label="Enov8 Technologies home"
    >
      {/* Original brand treatment: the bare mark in brand blue (white in dark
          mode) followed by the name on one line. */}
      <LogoMark className="size-9 text-brand-bright transition-colors dark:text-white" />
      <span className="text-base font-medium text-fg">Enov8 Technologies</span>
    </Link>
  );
}
