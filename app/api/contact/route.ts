import { Resend } from "resend";
import { NextRequest } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.subject === "string" &&
    b.subject.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return Response.json(
      { error: "All fields are required and email must be valid." },
      { status: 422 }
    );
  }

  const { name, email, subject, message } = body;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const from = process.env.RESEND_FROM_ADDRESS;
  const apiKey = process.env.RESEND_API_KEY;

  if (!recipient || !from || !apiKey) {
    console.error("[contact route] Missing env vars");
    return Response.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from,
    to: [recipient],
    replyTo: email,
    subject: `Portfolio contact: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p><strong>Subject:</strong> ${subject}</p><hr/><p>${message.replace(/\n/g, "<br/>")}</p>`,
  });

  if (error) {
    console.error("[contact route] Resend error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }

  return Response.json({ id: data?.id }, { status: 200 });
}
