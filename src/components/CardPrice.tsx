"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  currencyFor,
  fetchCountry,
  formatInr,
  formatLocal,
  type LocalCurrency,
} from "@/lib/localCurrency";

/**
 * Compact price for the home platform cards — shows the struck original +
 * current price in the visitor's local currency (₹ for India / unsupported).
 */
export function CardPrice({
  originalInr,
  priceInr,
  isFlagship,
}: {
  originalInr: number;
  priceInr: number;
  isFlagship?: boolean;
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

  const was = loc ? formatLocal(originalInr, loc) : formatInr(originalInr);
  const now = loc ? formatLocal(priceInr, loc) : formatInr(priceInr);

  return (
    <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
      <span
        className={cn(
          "text-[0.65rem] line-through",
          isFlagship ? "text-white/60" : "text-white/45",
        )}
      >
        {was}
      </span>
      <span className="font-display text-lg font-bold text-gold leading-none">
        {now}
      </span>
      <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-white/60">
        / kit
      </span>
    </div>
  );
}
