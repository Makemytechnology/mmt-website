// Shared local-currency helpers used by the GNU Kit price and the home card.
// Rates are approximate foreign-currency-per-1-INR and easy to update.

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

export type LocalCurrency = { cur: string; rate: number };

/** Returns the local currency for a country, or null for India / unsupported. */
export function currencyFor(country: string): LocalCurrency | null {
  const c = (country || "").toUpperCase();
  if (!c || c === "IN") return null;
  if (EUR_COUNTRIES.has(c)) return EUR;
  return BY_COUNTRY[c] ?? null;
}

/** Resolve the visitor's country: ?cc= override first, then IP geolocation. */
export async function fetchCountry(): Promise<string> {
  try {
    const override = new URLSearchParams(window.location.search).get("cc");
    if (override) return override.toUpperCase();
  } catch {
    /* ignore */
  }
  try {
    const res = await fetch("https://ipwho.is/?fields=country_code", {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      return (data.country_code || "").toUpperCase();
    }
  } catch {
    /* ignore */
  }
  return "";
}

/** Format an INR amount as ₹ (Indian grouping), no decimals. */
export function formatInr(n: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

/** Format an INR amount converted into the given local currency, no decimals. */
export function formatLocal(inrAmount: number, loc: LocalCurrency): string {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: loc.cur,
    maximumFractionDigits: 0,
  }).format(inrAmount * loc.rate);
}
