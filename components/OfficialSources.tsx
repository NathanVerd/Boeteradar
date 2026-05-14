type Source = {
  label: string;
  href: string;
};

type OfficialSourcesProps = {
  sources: Source[];
  note?: string;
};

export default function OfficialSources({
  sources,
  note = "Laatst inhoudelijk nagekeken: mei 2026. Regels kunnen wijzigen.",
}: OfficialSourcesProps) {
  return (
    <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-black">Officiële bronnen</h2>

      <p className="mt-4 text-slate-700">
        Controleer altijd officiële informatie. BoeteRadar geeft alleen een
        vereenvoudigde indicatie en vervangt geen professioneel advies.
      </p>

      <div className="mt-5 grid gap-3">
        {sources.map((source) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-900 hover:bg-slate-100"
          >
            {source.label}
          </a>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-500">{note}</p>
    </section>
  );
}