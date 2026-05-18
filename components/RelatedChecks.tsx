import Link from "next/link";

type RelatedChecksProps = {
  title?: string;
  subtitle?: string;
  excludeHref?: string;
};

const checks = [
  {
    title: "Btw-aangifte te laat",
    href: "/btw-aangifte-te-laat",
  },
  {
    title: "Btw te laat betaald",
    href: "/btw-te-laat-betaald",
  },
  {
    title: "Brief van FOD Financiën ontvangen",
    href: "/brief-fod-financien-ontvangen",
  },
  {
    title: "Personenbelasting te laat",
    href: "/personenbelasting-te-laat",
  },
  {
    title: "Autokeuring vervallen",
    href: "/autokeuring-vervallen",
  },
  {
    title: "Student te veel gewerkt",
    href: "/student-te-veel-gewerkt",
  },
];

export default function RelatedChecks({
  title = "Nog een administratieve fout checken?",
  subtitle = "Alle eerste fase-checks zijn nu actief.",
  excludeHref,
}: RelatedChecksProps) {
  const visibleChecks = checks.filter((check) => check.href !== excludeHref);

  return (
    <section className="mt-6 rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-orange-400">
        Andere populaire checks
      </p>

      <h2 className="mt-2 text-2xl font-black">{title}</h2>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {visibleChecks.map((check) => (
          <Link
            key={check.href}
            href={check.href}
            className="rounded-2xl bg-white/10 p-4 font-bold transition hover:bg-white/15"
          >
            {check.title} →
          </Link>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-300">{subtitle}</p>
    </section>
  );
}