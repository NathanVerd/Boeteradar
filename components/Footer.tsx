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
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950">
                BR
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

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdndgj220iZG4IBmJCSqDwY5vf_kZZWTAbVd99zzVCafsdaAQ/viewform"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                Feedback geven
              </a>
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