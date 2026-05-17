"use client";

import BackHomeLink from "@/components/BackHomeLink";
import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import RelatedChecks from "@/components/RelatedChecks";
import { useState } from "react";

export default function AutokeuringVervallenPage() {
  const [daysExpired, setDaysExpired] = useState(7);
  const [stillDriving, setStillDriving] = useState("yes");
  const [appointmentMade, setAppointmentMade] = useState("no");
  const [calculated, setCalculated] = useState(false);

  const safeDays = Math.max(0, Number(daysExpired));

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let advice = "Maak een afspraak en bewaar je bevestiging.";

  if (safeDays >= 1) {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    advice =
      "Maak zo snel mogelijk een keuringsafspraak en vermijd onnodige ritten.";
  }

  if (safeDays >= 30 || stillDriving === "yes" || appointmentMade === "no") {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Maak meteen een afspraak, beperk je ritten en bewaar je afspraakbewijs.";
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header label="Autokeuring" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Autokeuring vervallen
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Autokeuring vervallen? Dit regel je eerst.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Is je technische keuring verlopen? Check wat je best meteen regelt,
            wanneer je extra voorzichtig moet zijn en welk bewijs je bewaart.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#check"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-black text-white transition hover:bg-slate-800"
            >
              Start de check
            </a>

            <a
              href="#bronnen"
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
            >
              Bekijk bronnen
            </a>
          </div>

          <DisclaimerBox text="BoeteRadar geeft informatie en eenvoudige inschattingen. Dit is geen juridisch, verzekerings- of verkeersadvies. Controleer altijd officiële bronnen of vraag professioneel advies bij twijfel." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Maak een afspraak</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Plan zo snel mogelijk een nieuwe technische keuring.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Beperk je ritten</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Rij niet onnodig zolang je keuring vervallen is.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar je afspraakbevestiging en keuringsdocumenten.
              </p>
            </div>
          </div>
        </div>

        <div
          id="check"
          className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8"
        >
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Snelle check
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Hoe dringend is je situatie?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            Vul je situatie in. De uitkomst is een hulpmiddel, geen officiële
            beoordeling.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel dagen is je keuring al vervallen?
              <input
                type="number"
                min="0"
                max="1000"
                value={daysExpired}
                onChange={(e) => setDaysExpired(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Rij je nog met de auto?
              <select
                value={stillDriving}
                onChange={(e) => setStillDriving(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <label className="font-bold">
              Heb je al een keuringsafspraak?
              <select
                value={appointmentMade}
                onChange={(e) => setAppointmentMade(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <button
              onClick={() => setCalculated(true)}
              className="rounded-xl bg-slate-950 px-5 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Toon mijn indicatie
            </button>
          </div>

          {calculated && (
            <div className={`mt-6 rounded-2xl border p-5 ${riskColor}`}>
              <h3 className="text-xl font-black">Jouw indicatie</h3>

              <p className="mt-3">
                <strong>Risiconiveau:</strong> {risk}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Deze inschatting kijkt naar hoe lang je keuring vervallen is, of
                je nog rijdt en of je al een afspraak hebt. De echte gevolgen
                hangen af van je concrete situatie.
              </p>

              <p className="mt-3 font-bold">Wat nu? {advice}</p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat kan meespelen?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Hoe lang je keuring al vervallen is.</li>
              <li>Of je nog met de auto rijdt.</li>
              <li>Of je al een afspraak hebt gemaakt.</li>
              <li>Of er controle, schade of een ongeval is.</li>
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat doe je nu best?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Maak zo snel mogelijk een afspraak voor de keuring.</li>
              <li>Rij niet onnodig rond met een vervallen keuring.</li>
              <li>Bewaar je afspraakbevestiging.</li>
              <li>Controleer je verzekering bij twijfel.</li>
              <li>Bewaar je keuringsbewijs zodra je opnieuw gekeurd bent.</li>
            </ol>
          </section>
        </div>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Extra opletten
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Rijden met een vervallen keuring kan problemen geven.
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je rijdt nog dagelijks</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Hoe meer je rijdt, hoe groter de kans op controle of problemen
                bij een ongeval.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je hebt nog geen afspraak</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Maak zo snel mogelijk een afspraak en bewaar de bevestiging.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je keuring is lang vervallen</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Hoe langer je wacht, hoe belangrijker het wordt om snel actie te
                nemen.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Autokeuring vervallen: veelgestelde vragen
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat moet ik doen als mijn autokeuring vervallen is?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Maak zo snel mogelijk een afspraak bij een keuringscentrum en
                vermijd onnodige ritten.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Mag ik nog rijden met een vervallen keuring?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dat kan risico geven bij controle, ongeval of verzekering.
                Controleer officiële informatie en beperk je ritten.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Is een afspraakbewijs genoeg?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Nee. Het toont dat je actie hebt ondernomen, maar het vervangt
                geen geldig keuringsbewijs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Wat met mijn verzekering?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Contacteer je verzekeraar of makelaar bij twijfel, zeker na een
                ongeval of schadegeval.
              </p>
            </div>
          </div>
        </section>

        <div id="bronnen">
          <OfficialSources
            sources={[
              {
                label: "Vlaanderen.be — Technische keuring",
                href: "https://www.vlaanderen.be/auto-en-motor/technische-keuring-van-voertuigen",
              },
              {
                label: "GOCA Vlaanderen — Keuringscentra",
                href: "https://www.gocavlaanderen.be",
              },
            ]}
          />
        </div>

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Laatst inhoudelijk nagekeken
          </p>

          <h2 className="mt-2 text-2xl font-black">Mei 2026</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Regels, controleprocedures en verzekeringsgevolgen kunnen wijzigen.
            Controleer altijd officiële bronnen of vraag professioneel advies.
          </p>
        </section>

        <RelatedChecks excludeHref="/autokeuring-vervallen" />

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}