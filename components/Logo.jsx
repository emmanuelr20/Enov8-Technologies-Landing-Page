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
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Enov8 Technologies — home"
    >
      <span className="relative grid size-9 place-items-center rounded-xl bg-brand-bright text-white transition-transform duration-500 ease-out-expo group-hover:rotate-[-8deg] group-hover:scale-105">
        <LogoMark className="size-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-semibold tracking-[-0.04em]">
          enov8
        </span>
        <span className="text-[0.62rem] uppercase tracking-[0.28em] text-muted">
          technologies
        </span>
      </span>
    </Link>
  );
}
