import Link from "next/link";

type HelpRequestCtaProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export default function HelpRequestCta({
  title = "Twijfel je nog over je situatie?",
  description = "Als er een termijn, bedrag, brief, boete of officiële beslissing meespeelt, kan het verstandig zijn om je situatie te laten nakijken.",
  buttonLabel = "Hulp aanvragen",
}: HelpRequestCtaProps) {
  return (
    <section className="mt-6 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
      <p className="text-sm font-black uppercase tracking-wide text-orange-700">
        Extra hulp
      </p>

      <h2 className="mt-2 text-2xl font-black">{title}</h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-700">
        {description}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/hulp-aanvragen"
          className="rounded-full bg-orange-600 px-6 py-3 text-center font-black text-white transition hover:bg-orange-700"
        >
          {buttonLabel} →
        </Link>

        <Link
          href="/disclaimer"
          className="rounded-full border border-orange-200 bg-white px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
        >
          Lees eerst de disclaimer
        </Link>
      </div>
    </section>
  );
}