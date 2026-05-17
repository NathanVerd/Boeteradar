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
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white shadow-sm transition group-hover:bg-orange-600">
                BR
              </span>

              <span>
                <span className="block text-2xl font-black tracking-tight text-slate-950">
                  BoeteRadar
                </span>
                <span className="block text-xs font-bold uppercase tracking-wide text-orange-600">
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