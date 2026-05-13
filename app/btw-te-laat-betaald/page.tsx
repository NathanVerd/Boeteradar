import Link from "next/link";

export default function BtwTeLaatBetaaldPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8 text-slate-950">
      <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
          Btw te laat betaald
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Btw te laat betaald?
        </h1>

        <p className="mt-4 text-slate-700">
          Deze pagina werkt. De volledige calculator voegen we hierna terug toe.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block font-bold text-orange-600"
        >
          ← Terug naar homepage
        </Link>
      </section>
    </main>
  );
}