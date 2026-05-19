import { redirect } from "next/navigation";
import { Resend } from "resend";

function clean(value: FormDataEntryValue | null) {
  return String(value || "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const situation = clean(formData.get("situation"));
  const profile = clean(formData.get("profile"));
  const deadline = clean(formData.get("deadline"));
  const amountMentioned = clean(formData.get("amountMentioned"));
  const message = clean(formData.get("message"));
  const email = clean(formData.get("email"));
  const phone = clean(formData.get("phone"));
  const consent = clean(formData.get("consent"));

  if (
    !situation ||
    !profile ||
    !deadline ||
    !amountMentioned ||
    !message ||
    !email ||
    !consent
  ) {
    redirect("/hulp-aanvragen?fout=ontbrekende-gegevens");
  }

  if (message.length < 20) {
    redirect("/hulp-aanvragen?fout=bericht-te-kort");
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const leadToEmail = process.env.LEAD_TO_EMAIL;

  if (!resendApiKey || !leadToEmail) {
    console.error("Missing RESEND_API_KEY or LEAD_TO_EMAIL");
    redirect("/hulp-aanvragen?fout=configuratie");
  }

  const resend = new Resend(resendApiKey);

  const submittedAt = new Date().toLocaleString("nl-BE", {
    timeZone: "Europe/Brussels",
  });

  const safeSituation = escapeHtml(situation);
  const safeProfile = escapeHtml(profile);
  const safeDeadline = escapeHtml(deadline);
  const safeAmountMentioned = escapeHtml(amountMentioned);
  const safeMessage = escapeHtml(message);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Niet ingevuld");
  const safeSubmittedAt = escapeHtml(submittedAt);

  await resend.emails.send({
    from: "BoeteRadar <hulp@boeteradar.be>",
    to: leadToEmail,
    replyTo: email,
    subject: `Nieuwe hulpaanvraag: ${situation}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h1>Nieuwe hulpaanvraag via BoeteRadar</h1>

        <p><strong>Ingediend op:</strong> ${safeSubmittedAt}</p>

        <hr />

        <p><strong>Situatie:</strong><br />${safeSituation}</p>
        <p><strong>Profiel:</strong><br />${safeProfile}</p>
        <p><strong>Deadline:</strong><br />${safeDeadline}</p>
        <p><strong>Bedrag vermeld:</strong><br />${safeAmountMentioned}</p>

        <hr />

        <p><strong>Beschrijving:</strong></p>
        <p>${safeMessage.replaceAll("\n", "<br />")}</p>

        <hr />

        <p><strong>E-mail:</strong><br />${safeEmail}</p>
        <p><strong>Telefoon:</strong><br />${safePhone}</p>

        <hr />

        <p style="font-size: 13px; color: #64748b;">
          De gebruiker bevestigde dat BoeteRadar geen officiële instantie is en dat er geen gevoelige gegevens mogen worden doorgestuurd.
        </p>
      </div>
    `,
  });

  redirect("/hulp-aanvragen/bedankt");
}