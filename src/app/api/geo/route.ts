import { NextResponse } from "next/server";

// Reads the visitor's country from Vercel's geolocation header (IP-based).
// Returns "" locally / when unavailable, so the client can fall back gracefully.
export const runtime = "edge";
export const dynamic = "force-dynamic";

export function GET(req: Request) {
  const country = (req.headers.get("x-vercel-ip-country") || "").toUpperCase();
  return NextResponse.json(
    { country },
    { headers: { "cache-control": "no-store" } },
  );
}
