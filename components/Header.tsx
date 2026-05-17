import Link from "next/link";

type HeaderProps = {
  label?: string;
  subtitle?: string;
};

const navLinks = [
  {
    label: "Checks",
    href: "/#checks",
  },
  {
    label: "Checklists",
    href: "/#checklists",
  },
  {
    label: "Bronnen",
    href: "/bronnen",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
];

function BoeteRadarLogo() {
  return (
    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.15rem] bg-slate-950 shadow-sm ring-1 ring-slate-900/10 transition group-hover:bg-slate-900">
      <span className="absolute inset-0 rounded-[1.15rem] bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.55),transparent_35%)]" />

      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="relative h-9 w-9"
      >
        <defs>
          <linearGradient id="radarBeam" x1="14" y1="50" x2="50" y2="14">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>

          <linearGradient id="radarRing" x1="10" y1="10" x2="54" y2="54">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>

        <circle
          cx="32"
          cy="32"
          r="23"
          fill="none"
          stroke="url(#radarRing)"
          strokeWidth="4"
          opacity="0.95"
        />

        <circle
          cx="32"
          cy="32"
          r="13"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          opacity="0.5"
        />

        <path
          d="M32 32L49 17"
          stroke="url(#radarBeam)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M32 32L46 39"
          stroke="#fb923c"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
        />

        <circle cx="32" cy="32" r="5" fill="#fb923c" />

        <path
          d="M18 43C21 47 26 50 32 50C38 50 43 47 46 43"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />

        <path
          d="M18 21C21 17 26 14 32 14C38 14 43 17 46 21"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </span>
  );
}

export default function Header({
  label = "Beta MVP",
  subtitle,
}: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white/95 px-5 py-4 text-slate-950 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <BoeteRadarLogo />

              <span>
                <span className="block text-2xl font-black tracking-tight text-slate-950">
                  BoeteRadar
                </span>
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
                  België
                </span>
              </span>
            </Link>

            {subtitle && (
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                {subtitle}
              </p>
            )}
          </div>

          <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-orange-700 md:hidden">
            {label}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <nav className="flex flex-wrap gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden rounded-full bg-orange-100 px-4 py-2 text-sm font-black text-orange-700 md:block">
            {label}
          </div>
        </div>
      </div>
    </header>
  );
}