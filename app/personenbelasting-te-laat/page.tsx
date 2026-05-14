"use client";

import Link from "next/link";
import { useState } from "react";

export default function PersonenbelastingTeLaatPage() {
  const [daysLate, setDaysLate] = useState(7);
  const [submitted, setSubmitted] = useState("no");
  const [reminderReceived, setReminderReceived] = useState("no");
  const [hasAccountant, setHasAccountant] = useState("no");
  const [calculated, setCalculated] = useState(false);

  const safeDays = Math.max(0, Number(daysLate));

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let advice = "Controleer je aangifte en bewaar je bewijs van indiening.";
  let possibleConsequence =
    "Beperkt risico als alles tijdig of bijna tijdig werd rechtgezet.";

  if (safeDays >= 1 || submitted === "no") {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    advice =
      "Dien je aangifte zo snel mogelijk in via MyMinfin/Tax-on-web en bewaar je bewijs.";
    possibleConsequence =
      "Er kan een risico ontstaan op een administratieve boete of extra controle.";
  }

  if (safeDays >= 30 || reminderReceived === "yes" || submitted === "no") {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Dien onmiddellijk in, contacteer je boekhouder of FOD Financiën en bewaar alle communicatie.";
    possibleConsequence =
      "Bij laattijdige of ontbrekende aangifte kunnen boetes, belastingverhoging of aanslag van ambtswege mogelijk worden.";
  }

  if (hasAccountant === "yes" && submitted === "no") {
    advice =
      "Contacteer je boekhouder vandaag nog en vraag expliciet of je aangifte al werd ingediend.";
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-6 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="font-black text-white">
            BoeteRadar België
          </Link>

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold">
            Personenbelasting
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-orange-600">
            Personenbelasting te laat
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Personenbelasting te laat ingediend? Check wat je nu best doet.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Deze checker geeft een eerste indicatie van je risico als je
            belastingaangifte te laat is, nog niet ingediend werd of je een
            herinnering kreeg.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-4 text-sm text-slate-700">
            Dit is een informatieve tool met vereenvoudigde inschattingen. Het is
            geen juridisch, fiscaal of boekhoudkundig advies. Controleer altijd
            officiële bronnen of vraag advies aan je boekhouder.
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 1</p>
              <h3 className="mt-1 font-black">Check MyMinfin</h3>
              <p className="mt-2 text-sm text-slate-700">
                Kijk na of je aangifte al ingediend is of nog openstaat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 2</p>
              <h3 className="mt-1 font-black">Dien alsnog in</h3>
              <p className="mt-2 text-sm text-slate-700">
                Als je aangifte nog niet ingediend is, doe dit zo snel mogelijk.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm text-slate-700">
                Bewaar bewijs van indiening, herinneringen en communicatie.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">
            Snelle personenbelasting-check
          </h2>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel dagen ben je ongeveer te laat?
              <input
                type="number"
                min="0"
                max="1000"
                value={daysLate}
                onChange={(e) => setDaysLate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Is je aangifte ondertussen ingediend?
              <select
                value={submitted}
                onChange={(e) => setSubmitted(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <label className="font-bold">
              Heb je al een herinnering of bericht ontvangen?
              <select
                value={reminderReceived}
                onChange={(e) => setReminderReceived(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <label className="font-bold">
              Werk je via een boekhouder?
              <select
                value={hasAccountant}
                onChange={(e) => setHasAccountant(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <button
              onClick={() => setCalculated(true)}
              className="rounded-xl bg-slate-950 px-5 py-4 font-bold text-white hover:bg-slate-800"
            >
              Bereken risico
            </button>
          </div>

          {calculated && (
            <div className={`mt-6 rounded-2xl border p-5 ${riskColor}`}>
              <h3 className="text-xl font-black">Jouw indicatie</h3>

              <p className="mt-3">
                <strong>Risiconiveau:</strong> {risk}
              </p>

              <p className="mt-3">
                <strong>Mogelijk gevolg:</strong> {possibleConsequence}
              </p>

              <p className="mt-3 text-sm text-slate-700">
                Deze inschatting kijkt naar vertraging, indieningsstatus en of je
                al een herinnering kreeg. De echte gevolgen hangen af van je
                concrete situatie.
              </p>

              <p className="mt-3 font-bold">Beste actie: {advice}</p>
            </div>
          )}
        </div>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Wat moet je nu doen?</h2>

          <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
            <li>Log in op MyMinfin en controleer je aangifte.</li>
            <li>Dien je aangifte zo snel mogelijk alsnog in.</li>
            <li>Bewaar bewijs van verzending of bevestiging.</li>
            <li>Controleer of je een herinnering of bericht kreeg.</li>
            <li>Contacteer je boekhouder als je twijfelt.</li>
          </ol>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Boekhouder voorbereiden
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Wat stuur je best naar je boekhouder?
          </h2>

          <p className="mt-3 max-w-2xl text-slate-700">
            Stuur meteen duidelijke info door, zodat je boekhouder sneller kan
            inschatten wat er nog moet gebeuren.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">1. Aanslagjaar</h3>
              <p className="mt-2 text-sm text-slate-700">
                Zeg duidelijk over welk aanslagjaar of inkomstenjaar het gaat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">2. Status van indiening</h3>
              <p className="mt-2 text-sm text-slate-700">
                Meld of je aangifte al ingediend is of nog openstaat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">3. Berichten van FOD</h3>
              <p className="mt-2 text-sm text-slate-700">
                Voeg screenshots of brieven toe als je een herinnering kreeg.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">4. Bewijsstukken</h3>
              <p className="mt-2 text-sm text-slate-700">
                Verzamel fiches, attesten, bewijs van kosten en eerdere aangiftes.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-bold">Voorbeeldbericht:</p>
            <p className="mt-2 text-sm text-slate-700">
              “Hallo, ik denk dat mijn aangifte personenbelasting voor
              [aanslagjaar] te laat is. Ze is [wel/niet] ingediend en ik heb
              [wel/geen] herinnering ontvangen. Kan je controleren wat ik nu best
              doe?”
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-orange-200 bg-orange-50 p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Gratis hulpmiddel
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Belastingaangifte noodchecklist
          </h2>

          <p className="mt-3 max-w-2xl text-slate-700">
            Gebruik deze checklist om snel te verzamelen wat je nodig hebt als je
            aangifte te laat is of nog moet worden ingediend.
          </p>

          <ul className="mt-5 grid gap-2 text-slate-700 md:grid-cols-2">
            <li>✓ MyMinfin status controleren</li>
            <li>✓ Bewijs van indiening bewaren</li>
            <li>✓ Fiscale fiches verzamelen</li>
            <li>✓ Boekhouder contacteren</li>
          </ul>

          <button
            disabled
            className="mt-6 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white opacity-60"
          >
            PDF-download binnenkort
          </button>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vragen over personenbelasting te laat
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat moet ik doen als mijn belastingaangifte te laat is?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Log in op MyMinfin, controleer de status van je aangifte en dien
                ze zo snel mogelijk alsnog in.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Kan ik een boete krijgen als ik te laat ben?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Bij laattijdige of ontbrekende aangifte kunnen administratieve
                sancties mogelijk worden. De exacte gevolgen hangen af van je
                concrete situatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat als mijn boekhouder te laat is?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Contacteer je boekhouder meteen en vraag expliciet of de aangifte
                al verzonden werd. Bewaar alle communicatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Is deze checker exact?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Nee. BoeteRadar gebruikt een vereenvoudigde risico-inschatting.
                Controleer altijd FOD Financiën of vraag professioneel advies.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Officiële bronnen</h2>

          <p className="mt-4 text-slate-700">
            Controleer altijd officiële informatie. BoeteRadar geeft alleen een
            vereenvoudigde indicatie.
          </p>

          <div className="mt-5 grid gap-3">
            <a
              href="https://financien.belgium.be/nl/E-services/Tax-on-web"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-900 hover:bg-slate-100"
            >
              FOD Financiën — Tax-on-web
            </a>

            <a
              href="https://financien.belgium.be/nl/E-services/MyMinfin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-900 hover:bg-slate-100"
            >
              FOD Financiën — MyMinfin
            </a>

            <a
              href="https://financien.belgium.be/nl/experten_partners/economische-beroepen/indieningstermijnen-aangiften"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-900 hover:bg-slate-100"
            >
              FOD Financiën — Indieningstermijnen aangiften
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Laatst inhoudelijk nagekeken: mei 2026. Regels kunnen wijzigen.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-400">
            Andere populaire checks
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Nog een administratieve fout checken?
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <Link
              href="/btw-aangifte-te-laat"
              className="rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              Btw-aangifte te laat →
            </Link>

            <Link
              href="/btw-te-laat-betaald"
              className="rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              Btw te laat betaald →
            </Link>

            <Link
              href="/autokeuring-vervallen"
              className="rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              Autokeuring vervallen →
            </Link>

            <Link
              href="/"
              className="rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              Student te veel gewerkt →
            </Link>
          </div>

          <p className="mt-4 text-sm text-slate-300">
            Deze checks worden stap voor stap actief gemaakt.
          </p>
        </section>

        <div className="mt-8">
          <Link
            href="/"
            className="font-bold text-slate-700 hover:text-slate-950"
          >
            ← Terug naar alle checks
          </Link>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
  <p>© 2026 BoeteRadar België — Informatieve tool, geen juridisch advies.</p>

  <Link
    href="/disclaimer"
    className="mt-2 inline-block font-bold text-slate-600 hover:text-slate-950"
  >
    Disclaimer
  </Link>
</footer>
    </main>
  );
}