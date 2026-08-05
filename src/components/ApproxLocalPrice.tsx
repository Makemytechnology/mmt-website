"use client";

import { useEffect, useState } from "react";

/**
 * Shows an APPROXIMATE local-currency equivalent of an INR price, based on the
 * viewer's browser locale/region. Indian visitors (or unknown regions) see
 * nothing — the ₹ price shown alongside stays authoritative.
 *
 * Rates are approximate foreign-currency-per-1-INR and easy to update. The
 * value is always labelled "approx." so it's never read as a firm quote.
 */

// region (ISO country) -> { currency, INR->currency rate }
const RATES: Record<string, { cur: string; rate: number }> = {
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
};

// Eurozone countries -> EUR
const EUR_REGIONS = new Set([
  "DE", "FR", "ES", "IT", "NL", "IE", "BE", "AT", "PT", "FI", "GR", "LU",
  "SK", "SI", "EE", "LV", "LT", "CY", "MT", "HR",
]);
const EUR = { cur: "EUR", rate: 0.011 };

export function ApproxLocalPrice({ inr }: { inr: number }) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    try {
      const lang = navigator.language || "";
      const region =
        new Intl.Locale(lang).maximize().region ||
        lang.split("-")[1]?.toUpperCase();
      if (!region || region === "IN") return; // ₹ stays the shown price in India

      const match = EUR_REGIONS.has(region) ? EUR : RATES[region];
      if (!match) return;

      const value = inr * match.rate;
      const formatted = new Intl.NumberFormat(lang, {
        style: "currency",
        currency: match.cur,
        maximumFractionDigits: 0,
      }).format(value);
      setText(formatted);
    } catch {
      /* leave hidden on any error */
    }
  }, [inr]);

  if (!text) return null;

  return (
    <p className="mt-1.5 text-xs text-skyLight/60">
      ≈ {text}{" "}
      <span className="uppercase tracking-wide text-[0.6rem] text-skyLight/40">approx.</span>
    </p>
  );
}
