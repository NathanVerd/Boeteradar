"use client";

import BackHomeLink from "@/components/BackHomeLink";
import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HelpRequestCta from "@/components/HelpRequestCta";
import OfficialSources from "@/components/OfficialSources";
import RelatedChecks from "@/components/RelatedChecks";
import Link from "next/link";
import { useState } from "react";

export default function PersonenbelastingTeLaatClient() {
  const [daysLate, setDaysLate] = useState(7);
  const [submitted, setSubmitted] = useState("no");
  const [myMinfinStatus, setMyMinfinStatus] = useState("open");
  const [messageReceived, setMessageReceived] = useState("none");
  const [hasAccountant, setHasAccountant] = useState("no");
  const [taxProfile, setTaxProfile] = useState("employee");
  const [previousProblems, setPreviousProblems] = useState("no");
  const [documentsReady, setDocumentsReady] = useState("partly");
  const [simplifiedProposal, setSimplifiedProposal] = useState("no");
  const [calculated, setCalculated] = useState(false);

  const safeDays = Math.max(0, Number(daysLate));

  const delayLabel =
    safeDays === 0
      ? "Niet te laat"
      : safeDays < 14
        ? "Korte vertraging"
        : safeDays < 30
          ? "Duidelijke vertraging"
          : "Lange vertraging";

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let resultTitle = "Controleer je status";
  let consequenceText =
    "Als je aangifte correct ingediend is en er geen bericht openstaat, lijkt de situatie voorlopig beperkter.";
  let actionText =
    "Controleer MyMinfin, bewaar je bevestiging en hou eventuele berichten in de gaten.";
  let myMinfinText =
    "MyMinfin is de eerste plaats om te controleren of je aangifte openstaat, verzonden is of dat er een bericht klaarstaat.";
  let accountantText =
    "Als je geen boekhouder hebt, zorg dan dat je zelf de indiening en bevestiging bewaart.";
  let documentText =
    "Bewaar je bewijs van indiening, fiscale fiches, attesten en eventuele communicatie met FOD Financiën.";
  let profileText =
    "Voor een gewone loontrekkende is de aangifte vaak eenvoudiger dan bij zelfstandige inkomsten, buitenlandse inkomsten of meerdere inkomensbronnen.";

  if (safeDays >= 1 || submitted === "no" || myMinfinStatus === "open") {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    resultTitle = "Onderneem snel actie";
    consequenceText =
      "Een laattijdige of ontbrekende aangifte kan aanleiding geven tot opvolging, herinneringen, sancties of extra controle.";
    actionText =
      "Log in op MyMinfin en dien je aangifte zo snel mogelijk alsnog in als ze nog openstaat.";
  }

  if (
    safeDays >= 30 ||
    submitted === "no" ||
    myMinfinStatus === "open" ||
    messageReceived === "reminder" ||
    messageReceived === "change-notice" ||
    previousProblems === "yes"
  ) {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    resultTitle = "Laat dit niet liggen";
    consequenceText =
      "Bij een ontbrekende of laattijdige aangifte kunnen boetes, belastingverhoging of een aanslag van ambtswege mogelijk worden.";
    actionText =
      "Controleer MyMinfin vandaag nog, dien in wat nog openstaat en contacteer je boekhouder of FOD Financiën bij twijfel.";
  }

  if (messageReceived === "assessment-ex-officio") {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    resultTitle = "Aanslag van ambtswege vraagt extra aandacht";
    consequenceText =
      "Als er sprake is van een aanslag van ambtswege, kan de bewijslast zwaarder bij jou liggen. Laat dit zo snel mogelijk controleren.";
    actionText =
      "Verzamel bewijsstukken en contacteer een boekhouder, fiscalist of FOD Financiën voordat je reageert.";
  }

  if (
    taxProfile === "self-employed" ||
    taxProfile === "side-business" ||
    taxProfile === "mixed"
  ) {
    profileText =
      "Omdat je zelfstandige inkomsten, bijberoep of meerdere inkomensbronnen hebt, is je aangifte gevoeliger voor ontbrekende documenten of fouten.";
    if (risk !== "Hoog") {
      risk = "Middelmatig";
      riskColor = "border-orange-300 bg-orange-50";
      resultTitle = "Controleer je dossier extra goed";
    }
  }

  if (documentsReady === "no") {
    documentText =
      "Je documenten zijn nog niet klaar. Verzamel eerst je fiscale fiches, attesten, kosten, bewijsstukken en eventuele berichten.";
    if (risk !== "Hoog") {
      risk = "Middelmatig";
      riskColor = "border-orange-300 bg-orange-50";
    }
  }

  if (hasAccountant === "yes") {
    accountantText =
      "Omdat je via een boekhouder werkt, is de belangrijkste stap: vraag vandaag of de aangifte verzonden is en vraag bewijs van indiening.";
    if (submitted === "no" || myMinfinStatus === "open") {
      actionText =
        "Contacteer je boekhouder vandaag nog en vraag of de aangifte al verzonden werd. Bewaar die communicatie.";
    }
  }

  if (simplifiedProposal === "yes-not-checked") {
    consequenceText =
      "Als je een voorstel van vereenvoudigde aangifte kreeg maar het niet controleerde, moet je nagaan of je akkoord ging, moest reageren of nog iets moest aanpassen.";
    if (risk === "Laag") {
      risk = "Middelmatig";
      riskColor = "border-orange-300 bg-orange-50";
      resultTitle = "Controleer je voorstel";
    }
  }

  if (submitted === "yes" && myMinfinStatus === "submitted") {
    myMinfinText =
      "Als MyMinfin toont dat je aangifte verzonden is, bewaar dan de bevestiging en controleer later je aanslagbiljet.";
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header label="Personenbelasting" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Personenbelasting te laat
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Belastingaangifte te laat? Check wat nu telt.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Is je aangifte personenbelasting te laat, nog open of onzeker?
            BoeteRadar helpt je inschatten wat je eerst controleert in MyMinfin,
            welke berichten belangrijk zijn en wanneer je beter hulp vraagt.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#check"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-black text-white transition hover:bg-slate-800"
            >
              Start de check
            </a>

            <Link
              href="/checklists/personenbelasting-noodchecklist"
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
            >
              Open noodchecklist
            </Link>

            <a
              href="/downloads/personenbelasting-noodchecklist.pdf"
              download
              className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-center font-black text-slate-900 transition hover:bg-slate-100"
            >
              Download PDF
            </a>
          </div>

          <DisclaimerBox text="BoeteRadar geeft informatie en indicatieve inschattingen. Dit is geen juridisch, fiscaal of boekhoudkundig advies. Controleer altijd officiële bronnen of vraag advies aan je boekhouder, fiscalist of FOD Financiën." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Check MyMinfin</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk of je aangifte openstaat, verzonden is of dat er een
                bericht klaarstaat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Reageer snel</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Staat er nog iets open of kreeg je een bericht? Wacht dan niet
                langer.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar bevestigingen, berichten, fiches, attesten en
                communicatie.
              </p>
            </div>
          </div>
        </div>

        <div
          id="check"
          className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8"
        >
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Uitgebreide personenbelastingcheck
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vul je situatie zo precies mogelijk in
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            De uitkomst is geen officiële beslissing, maar helpt je wel bepalen
            wat je nu eerst moet controleren.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel dagen ben je ongeveer te laat?
              <input
                type="number"
                min="0"
                max="1000"
                value={daysLate}
                onChange={(e) => setDaysLate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Is je aangifte ondertussen ingediend?
              <select
                value={submitted}
                onChange={(e) => setSubmitted(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
                <option value="unknown">Ik weet het niet</option>
              </select>
            </label>

            <label className="font-bold">
              Wat zie je in MyMinfin?
              <select
                value={myMinfinStatus}
                onChange={(e) => setMyMinfinStatus(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="open">Aangifte staat nog open</option>
                <option value="submitted">Aangifte lijkt verzonden</option>
                <option value="message">Er staat een bericht klaar</option>
                <option value="unknown">Ik weet het niet / niet gekeken</option>
              </select>
            </label>

            <label className="font-bold">
              Heb je al een bericht ontvangen?
              <select
                value={messageReceived}
                onChange={(e) => setMessageReceived(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="none">Nee</option>
                <option value="reminder">Ja, herinnering of waarschuwing</option>
                <option value="change-notice">Ja, bericht van wijziging</option>
                <option value="assessment-ex-officio">
                  Ja, aanslag van ambtswege
                </option>
                <option value="unknown">Ik weet het niet</option>
              </select>
            </label>

            <label className="font-bold">
              Werk je via een boekhouder?
              <select
                value={hasAccountant}
                onChange={(e) => setHasAccountant(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <label className="font-bold">
              Wat past het best bij je situatie?
              <select
                value={taxProfile}
                onChange={(e) => setTaxProfile(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="employee">Vooral loon als werknemer</option>
                <option value="student">Studentenjob / beperkt inkomen</option>
                <option value="pension">Pensioen</option>
                <option value="side-business">Zelfstandige in bijberoep</option>
                <option value="self-employed">Zelfstandige hoofdberoep</option>
                <option value="mixed">Meerdere inkomstenbronnen</option>
              </select>
            </label>

            <label className="font-bold">
              Had je eerder al problemen met je aangifte?
              <select
                value={previousProblems}
                onChange={(e) => setPreviousProblems(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <label className="font-bold">
              Heb je je documenten klaar?
              <select
                value={documentsReady}
                onChange={(e) => setDocumentsReady(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja, grotendeels</option>
                <option value="partly">Deels</option>
                <option value="no">Nee, nog niet</option>
              </select>
            </label>

            <label className="font-bold">
              Kreeg je een voorstel van vereenvoudigde aangifte?
              <select
                value={simplifiedProposal}
                onChange={(e) => setSimplifiedProposal(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes-correct">Ja, en het klopte</option>
                <option value="yes-not-checked">
                  Ja, maar ik controleerde het niet
                </option>
                <option value="not-sure">Ik weet het niet</option>
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
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-slate-600">
                    Jouw overzicht
                  </p>

                  <h3 className="mt-1 text-2xl font-black">{resultTitle}</h3>

                  <p className="mt-3">
                    <strong>Risiconiveau:</strong> {risk}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4 md:min-w-56">
                  <p className="text-sm font-bold text-slate-700">
                    Vertraging
                  </p>
                  <p className="mt-1 text-3xl font-black">{delayLabel}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {safeDays} dag(en) ingevuld.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Mogelijk gevolg</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {consequenceText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">MyMinfin</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {myMinfinText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Boekhouder</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {accountantText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Documenten</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {documentText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Profiel</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {profileText}
                  </p>
                </div>
              </div>

              <p className="mt-5 font-bold">Wat nu? {actionText}</p>

              <p className="mt-3 text-xs leading-5 text-slate-600">
                Deze inschatting is geen officiële beslissing. De echte gevolgen
                hangen af van je dossier, inkomsten, documenten, eerdere
                aangiften, berichten van FOD Financiën en de beoordeling door de
                administratie.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat rekent BoeteRadar mee?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Of je aangifte al dan niet ingediend is.</li>
              <li>Hoe lang je ongeveer te laat bent.</li>
              <li>Wat je ziet in MyMinfin.</li>
              <li>Of je al een bericht of herinnering kreeg.</li>
              <li>Of je via een boekhouder werkt.</li>
              <li>Of je documenten klaar zijn.</li>
              <li>Of je inkomstenprofiel extra aandacht vraagt.</li>
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat doe je nu best?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Log in op MyMinfin en controleer de status.</li>
              <li>Dien je aangifte zo snel mogelijk alsnog in als ze openstaat.</li>
              <li>Bewaar bewijs van verzending of bevestiging.</li>
              <li>Controleer berichten, eBox en communicatie van FOD Financiën.</li>
              <li>Contacteer je boekhouder of FOD Financiën bij twijfel.</li>
            </ol>
          </section>
        </div>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Boekhouder voorbereiden
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Stuur meteen de juiste info door.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Dan kan je boekhouder sneller zien wat er nog moet gebeuren.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Aanslagjaar</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Over welk aanslagjaar of inkomstenjaar gaat het?
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Status van indiening</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Is de aangifte al ingediend, staat ze nog open of weet je het
                niet?
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Berichten van FOD Financiën</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Voeg brieven, meldingen, eBox-berichten of screenshots toe.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Bewijsstukken</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Verzamel fiches, attesten, bewijs van indiening en relevante
                documenten.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-bold">Voorbeeldbericht</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              “Hallo, mijn aangifte personenbelasting voor [aanslagjaar] is
              mogelijk te laat. In MyMinfin zie ik [status]. Ik heb [wel/geen]
              bericht ontvangen en mijn documenten zijn [klaar/nog niet klaar].
              Kan je nakijken wat ik nu best doe?”
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-700">
            Gratis hulpmiddel
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Personenbelasting noodchecklist
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Gebruik de checklist om MyMinfin, documenten en communicatie sneller
            op orde te krijgen.
          </p>

          <ul className="mt-5 grid gap-2 leading-7 text-slate-700 md:grid-cols-2">
            <li>✓ MyMinfin-status controleren</li>
            <li>✓ Bewijs van indiening bewaren</li>
            <li>✓ Fiscale fiches verzamelen</li>
            <li>✓ Boekhouder contacteren</li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/downloads/personenbelasting-noodchecklist.pdf"
              download
              className="rounded-xl bg-slate-950 px-5 py-3 text-center font-bold text-white transition hover:bg-slate-800"
            >
              Download PDF →
            </a>

            <Link
              href="/checklists/personenbelasting-noodchecklist"
              className="rounded-xl border border-orange-200 bg-white px-5 py-3 text-center font-bold text-orange-700 transition hover:bg-orange-100"
            >
              Open checklist →
            </Link>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Personenbelasting te laat: veelgestelde vragen
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat moet ik doen als mijn belastingaangifte te laat is?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Log in op MyMinfin, controleer of de aangifte nog openstaat en
                dien ze zo snel mogelijk alsnog in.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Kan ik een boete krijgen?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dat kan bij een laattijdige of ontbrekende aangifte. De echte
                gevolgen hangen af van je concrete situatie en beoordeling door
                de administratie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Wat is een aanslag van ambtswege?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dat is een situatie waarbij de administratie je belasting kan
                vaststellen op basis van beschikbare gegevens. Dan is bewijs
                extra belangrijk.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Wat als mijn boekhouder te laat is?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vraag meteen of de aangifte al verzonden werd en bewaar die
                communicatie.
              </p>
            </div>
          </div>
        </section>

        <OfficialSources
          sources={[
            {
              label: "FOD Financiën — Tax-on-web",
              href: "https://financien.belgium.be/nl/E-services/Tax-on-web",
            },
            {
              label: "FOD Financiën — MyMinfin",
              href: "https://financien.belgium.be/nl/E-services/MyMinfin",
            },
            {
              label: "FOD Financiën — Na de aangifte",
              href: "https://fin.belgium.be/nl/particulieren/belastingaangifte/na-aangifte",
            },
            {
              label: "FOD Financiën — Indieningstermijnen aangiften",
              href: "https://financien.belgium.be/nl/experten_partners/economische-beroepen/indieningstermijnen-aangiften",
            },
          ]}
        />

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Laatst inhoudelijk nagekeken
          </p>

          <h2 className="mt-2 text-2xl font-black">Mei 2026</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Regels, termijnen en procedures kunnen wijzigen. Controleer altijd
            officiële bronnen of vraag professioneel advies.
          </p>
        </section>

        <HelpRequestCta
          title="Wil je hulp bij je personenbelasting?"
          description="Bij een openstaande aangifte, bericht in MyMinfin, aanslag van ambtswege of onzekerheid over je documenten kan het verstandig zijn om hulp te vragen."
          buttonLabel="Hulp bij personenbelasting aanvragen"
        />

        <RelatedChecks excludeHref="/personenbelasting-te-laat" />

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}