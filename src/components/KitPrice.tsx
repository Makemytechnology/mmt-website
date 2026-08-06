"use client";

import { useEffect, useState } from "react";
import {
  currencyFor,
  fetchCountry,
  formatInr,
  formatLocal,
  type LocalCurrency,
} from "@/lib/localCurrency";

/**
 * Renders the kit price (struck original + current) in the VISITOR'S local
 * currency, based on their real location. India / unknown visitors see ₹.
 * Converted amounts are approximate. Test override: ?cc=SG (US, GB, AE, …).
 */
export function KitPrice({
  originalInr,
  priceInr,
}: {
  originalInr: number;
  priceInr: number;
}) {
  const [loc, setLoc] = useState<LocalCurrency | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchCountry().then((country) => {
      if (!cancelled) setLoc(currencyFor(country));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const original = loc ? formatLocal(originalInr, loc) : formatInr(originalInr);
  const price = loc ? formatLocal(priceInr, loc) : formatInr(priceInr);

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
      {loc ? (
        <p className="mt-1 text-[0.65rem] uppercase tracking-wide text-skyLight/45">
          approx. in your local currency
        </p>
      ) : null}
    </>
  );
}
