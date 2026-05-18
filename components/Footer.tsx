import Link from "next/link";

const checkLinks = [
  {
    label: "Btw-aangifte te laat",
    href: "/btw-aangifte-te-laat",
  },
  {
    label: "Btw te laat betaald",
    href: "/btw-te-laat-betaald",
  },
  {
    label: "Personenbelasting te laat",
    href: "/personenbelasting-te-laat",
  },
  {
    label: "Autokeuring vervallen",
    href: "/autokeuring-vervallen",
  },
  {
    label: "Student te veel gewerkt",
    href: "/student-te-veel-gewerkt",
  },
];

const checklistLinks = [
  {
    label: "Btw-deadline checklist",
    href: "/checklists/btw-deadline-checklist",
  },
  {
    label: "Personenbelasting noodchecklist",
    href: "/checklists/personenbelasting-noodchecklist",
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.7fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] bg-white shadow-sm">
                <span className="absolute inset-0 rounded-[1rem] bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.35),transparent_38%)]" />

                <svg
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  className="relative h-8 w-8"
                >
                  <defs>
                    <linearGradient
                      id="footerRadarBeam"
                      x1="14"
                      y1="50"
                      x2="50"
                      y2="14"
                    >
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>

                    <linearGradient
                      id="footerRadarRing"
                      x1="10"
                      y1="10"
                      x2="54"
                      y2="54"
                    >
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="32"
                    cy="32"
                    r="23"
                    fill="none"
                    stroke="url(#footerRadarRing)"
                    strokeWidth="4"
                    opacity="0.95"
                  />

                  <circle
                    cx="32"
                    cy="32"
                    r="13"
                    fill="none"
                    stroke="#0f172a"
                    strokeWidth="3"
                    opacity="0.35"
                  />

                  <path
                    d="M32 32L49 17"
                    stroke="url(#footerRadarBeam)"
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
                    stroke="#0f172a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.65"
                  />

                  <path
                    d="M18 21C21 17 26 14 32 14C38 14 43 17 46 21"
                    fill="none"
                    stroke="#0f172a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.25"
                  />
                </svg>
              </span>

              <span>
                <span className="block text-2xl font-black tracking-tight">
                  BoeteRadar
                </span>
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
                  België
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              Houvast bij Belgische administratieve fouten. Geen officieel of
              juridisch advies, wel een duidelijk startpunt.
            </p>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Controleer altijd de officiële bronnen of vraag professioneel
              advies voor je concrete situatie.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-wide text-orange-300">
              Checks
            </h2>

            <div className="mt-4 grid gap-3">
              {checkLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-wide text-orange-300">
              Checklists
            </h2>

            <div className="mt-4 grid gap-3">
              {checklistLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-wide text-orange-300">
              Info
            </h2>

            <div className="mt-4 grid gap-3">
              <Link
                href="/over"
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                Over BoeteRadar
              </Link>

              <Link
                href="/bronnen"
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                Bronnen
              </Link>

              <Link
                href="/disclaimer"
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                Disclaimer
              </Link>

              <Link
                href="/feedback"
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                Feedback geven
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BoeteRadar België. Alle rechten voorbehouden.</p>

          <p>Informatieve tool. Geen juridisch, fiscaal of sociaal advies.</p>
        </div>
      </div>
    </footer>
  );
}