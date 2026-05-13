import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Validates the payload, then accepts the submission.
 *
 * In production you should wire this up to an email service (e.g. Resend,
 * Postmark, SendGrid) or a CRM. For now it logs to the server console and
 * returns a success response so the form UI works end-to-end.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const vertical = typeof body.vertical === "string" ? body.vertical.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 });
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long" }, { status: 400 });
  }

  // TODO: forward to your email service / CRM here.
  // Example: await sendEmail({ to: "info@makemytechnology.com", subject: ..., body: ... });
  // For now, log to the server console so submissions are visible during dev.
  console.log("[contact] new submission", {
    name,
    email,
    company,
    vertical,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
