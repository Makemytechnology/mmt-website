"use client";

import { useEffect, useState } from "react";

/**
 * Renders the kit price (struck original + current) in the VISITOR'S local
 * currency, based on their real location (IP geolocation via ipwho.is).
 * Indian / unknown visitors see ₹. Converted amounts are approximate.
 *
 * Test override: add ?cc=SG (or US, GB, AE, …) to force a country.
 */

// country (ISO) -> { currency, INR -> currency rate }
const BY_COUNTRY: Record<string, { cur: string; rate: number }> = {
  US: { cur: "USD", rate: 0.012 },
  GB: { cur: "GBP", rate: 0.0094 },
  AE: { cur: "AED", rate: 0.044 },
  SG: { cur: "SGD", rate: 0.016 },
  AU: { cur: "AUD", rate: 0.018 },
  CA: { cur: "CAD", rate: 0.016 },
  JP: { cur: "JPY", rate: 1.8 },
  CH: { cur: "CHF", rate: 0.0105 },
  SA: { cur: "SAR", rate: 0.045 },
  ZA: { cur: "ZAR", rate: 0.22 },
  NZ: { cur: "NZD", rate: 0.02 },
  MY: { cur: "MYR", rate: 0.056 },
  QA: { cur: "QAR", rate: 0.044 },
  KW: { cur: "KWD", rate: 0.0037 },
  NG: { cur: "NGN", rate: 18 },
  BD: { cur: "BDT", rate: 1.4 },
  LK: { cur: "LKR", rate: 3.6 },
};

const EUR = { cur: "EUR", rate: 0.011 };
const EUR_COUNTRIES = new Set([
  "DE", "FR", "ES", "IT", "NL", "IE", "BE", "AT", "PT", "FI", "GR", "LU",
  "SK", "SI", "EE", "LV", "LT", "CY", "MT", "HR",
]);

function currencyFor(country: string) {
  if (!country || country === "IN") return null;
  if (EUR_COUNTRIES.has(country)) return EUR;
  return BY_COUNTRY[country] ?? null;
}

const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export function KitPrice({
  originalInr,
  priceInr,
}: {
  originalInr: number;
  priceInr: number;
}) {
  const [loc, setLoc] = useState<{ cur: string; rate: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      let country = "";
      try {
        country = (
          new URLSearchParams(window.location.search).get("cc") || ""
        ).toUpperCase();
      } catch {
        /* ignore */
      }
      if (!country) {
        try {
          const res = await fetch("https://ipwho.is/?fields=country_code", {
            cache: "no-store",
          });
          if (res.ok) {
            const data = await res.json();
            country = (data.country_code || "").toUpperCase();
          }
        } catch {
          /* ignore */
        }
      }
      if (!cancelled) setLoc(currencyFor(country));
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  let original = inr(originalInr);
  let price = inr(priceInr);
  let approx = false;

  if (loc) {
    try {
      const fmt = (n: number) =>
        new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: loc.cur,
          maximumFractionDigits: 0,
        }).format(n);
      original = fmt(originalInr * loc.rate);
      price = fmt(priceInr * loc.rate);
      approx = true;
    } catch {
      /* fall back to ₹ */
    }
  }

  return (
    <>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display text-lg md:text-xl font-semibold text-white/40 line-through">
          {original}
        </span>
        <span className="font-display text-4xl md:text-5xl font-bold text-gold leading-none">
          {price}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
          / kit
        </span>
      </div>
      {approx ? (
        <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-skyLight/45">
          approx. in your local currency
        </p>
      ) : null}
    </>
  );
}
