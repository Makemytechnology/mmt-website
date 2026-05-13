"use client";

import type { ReactNode } from "react";

/**
 * Infinite horizontally-scrolling marquee. Duplicates children twice and
 * animates -50% to give a seamless loop. Pure CSS keyframes.
 */
export function Marquee({
  children,
  speed = 40,
  direction = "left",
  className,
}: {
  children: ReactNode;
  speed?: number; // seconds for one full loop
  direction?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={`mmt-marquee relative overflow-hidden ${className ?? ""}`}
      style={
        {
          ["--marquee-duration" as string]: `${speed}s`,
          ["--marquee-direction" as string]: direction === "right" ? "reverse" : "normal",
        } as React.CSSProperties
      }
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--marquee-bg,theme(colors.navyDeep))] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--marquee-bg,theme(colors.navyDeep))] to-transparent z-10" />

      <div className="mmt-marquee-track flex w-max items-center gap-8 py-4">
        <div className="flex items-center gap-8">{children}</div>
        <div className="flex items-center gap-8" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
