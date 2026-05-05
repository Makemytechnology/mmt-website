import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Stub: log to server console; real email/CRM wiring lands later.
  console.log("[contact]", JSON.stringify(payload));

  return NextResponse.json({ ok: true });
}
