"use client";

import Link from "next/link";
import { useState } from "react";

export default function AutokeuringVervallenPage() {
  const [daysExpired, setDaysExpired] = useState(7);
  const [stillDriving, setStillDriving] = useState("yes");
  const [appointmentMade, setAppointmentMade] = useState("no");
  const [calculated, setCalculated] = useState(false);

  const safeDays = Math.max(0, Number(daysExpired));

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let advice = "Maak zo snel mogelijk een afspraak en bewaar je bewijs.";

  if (safeDays >= 1) {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    advice =
      "Maak onmiddellijk een afspraak voor de keuring en vermijd onnodige ritten.";
  }

  if (safeDays >= 30 || stillDriving === "yes" || appointmentMade === "no") {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Maak onmiddellijk een keuringsafspraak, beperk je ritten en bewaar bewijs van je afspraak.";
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-6 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="font-black text-white">
            BoeteRadar België
          </Link>

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold">
            Autokeuring
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-orange-600">
            Autokeuring vervallen
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Autokeuring vervallen? Check wat je nu best doet.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Deze checker geeft een eerste indicatie van je risico als je
            technische keuring verlopen is en je nog met de auto rijdt.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-4 text-sm text-slate-700">
            Dit is een informatieve tool met vereenvoudigde inschattingen. Het is
            geen juridisch, verzekerings- of verkeersadvies. Controleer altijd
            officiële bronnen of vraag professioneel advies bij twijfel.
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 1</p>
              <h3 className="mt-1 font-black">Maak afspraak</h3>
              <p className="mt-2 text-sm text-slate-700">
                Plan zo snel mogelijk een nieuwe technische keuring.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 2</p>
              <h3 className="mt-1 font-black">Beperk ritten</h3>
              <p className="mt-2 text-sm text-slate-700">
                Vermijd onnodig rijden zolang je keuring vervallen is.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm text-slate-700">
                Bewaar je afspraakbevestiging en keuringsdocumenten.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Snelle autokeuring-check</h2>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel dagen is je keuring al vervallen?
              <input
                type="number"
                min="0"
                max="1000"
                value={daysExpired}
                onChange={(e) => setDaysExpired(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Rij je nog met de auto?
              <select
                value={stillDriving}
                onChange={(e) => setStillDriving(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <label className="font-bold">
              Heb je al een keuringsafspraak gemaakt?
              <select
                value={appointmentMade}
                onChange={(e) => setAppointmentMade(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
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

              <p className="mt-3 text-sm text-slate-700">
                Deze inschatting kijkt naar hoe lang je keuring vervallen is, of
                je nog rijdt en of je al een afspraak hebt gemaakt.
              </p>

              <p className="mt-3 font-bold">Beste actie: {advice}</p>
            </div>
          )}
        </div>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Wat moet je nu doen?</h2>

          <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
            <li>Maak zo snel mogelijk een afspraak voor technische keuring.</li>
            <li>Rij niet onnodig rond met een vervallen keuring.</li>
            <li>Bewaar je afspraakbevestiging.</li>
            <li>Controleer je verzekeringssituatie bij twijfel.</li>
            <li>Neem je keuringsbewijs mee zodra je opnieuw gekeurd bent.</li>
          </ol>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vragen over een vervallen autokeuring
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat moet ik doen als mijn autokeuring vervallen is?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Maak zo snel mogelijk een afspraak bij een keuringscentrum en
                vermijd onnodige ritten tot je opnieuw gekeurd bent.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Mag ik nog rijden met een vervallen keuring?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Dat kan risico’s geven bij controle, ongeval of verzekering.
                Controleer officiële informatie en beperk je ritten.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Is een afspraakbewijs nuttig?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Ja. Een afspraakbewijs toont dat je actie hebt ondernomen, maar
                het vervangt geen geldig keuringsbewijs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat met mijn verzekering?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Bij twijfel contacteer je best je verzekeraar of makelaar. Zeker
                als je betrokken bent bij een ongeval.
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
              href="https://www.vlaanderen.be/auto-en-motor/technische-keuring-van-voertuigen"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-900 hover:bg-slate-100"
            >
              Vlaanderen.be — Technische keuring
            </a>

            <a
              href="https://www.gocavlaanderen.be"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-900 hover:bg-slate-100"
            >
              GOCA Vlaanderen — Keuringscentra
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
              href="/"
              className="rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              Personenbelasting te laat →
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
        © 2026 BoeteRadar België — Informatieve tool, geen juridisch advies.
      </footer>
    </main>
  );
}