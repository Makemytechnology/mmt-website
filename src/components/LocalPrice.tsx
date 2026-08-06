"use client";

import { useEffect, useState } from "react";

/**
 * Shows the kit price in the visitor's local currency, based on their REAL
 * location (IP geolocation via ipwho.is). Indian / unknown visitors see ₹ only
 * (the base price shown alongside). Converted values are approximate.
 *
 * Test override: add ?cc=US (or GB, AE, …) to any URL to force a country.
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

export function LocalPrice({ inr }: { inr: number }) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      let country = "";

      // Test override — ?cc=US
      try {
        country = (
          new URLSearchParams(window.location.search).get("cc") || ""
        ).toUpperCase();
      } catch {
        /* ignore */
      }

      // Real location via IP geolocation
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

      if (cancelled) return;
      const match = currencyFor(country);
      if (!match) return;

      try {
        const value = inr * match.rate;
        const formatted = new Intl.NumberFormat(undefined, {
          style: "currency",
          currency: match.cur,
          maximumFractionDigits: 0,
        }).format(value);
        if (!cancelled) setText(formatted);
      } catch {
        /* leave hidden */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [inr]);

  if (!text) return null;

  return (
    <p className="mt-1.5 text-sm font-semibold text-gold">
      ≈ {text}{" "}
      <span className="text-[0.6rem] uppercase tracking-wide text-skyLight/50">
        approx. in your currency
      </span>
    </p>
  );
}
