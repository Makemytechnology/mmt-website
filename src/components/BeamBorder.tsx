"use client";

import { type ReactNode } from "react";

/**
 * Animated beam-border wrapper. A conic-gradient layer is rotated continuously
 * around the card, masked to only show on the perimeter.
 *
 * Works on every modern browser — pure CSS @keyframes, no @property required.
 */
export function BeamBorder({
  children,
  className,
  rounded = "rounded-2xl",
  innerClassName = "bg-navy",
  thickness = 1.5,
}: {
  children: ReactNode;
  className?: string;
  rounded?: string;
  innerClassName?: string;
  thickness?: number;
}) {
  return (
    <div
      className={`relative ${rounded} ${className ?? ""} overflow-hidden`}
      style={{ padding: thickness }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-[50%] mmt-beam-spin"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(232,90,79,0.95) 40deg, rgba(242,166,90,0.95) 90deg, rgba(74,144,194,0.95) 140deg, transparent 200deg, transparent 360deg)",
          filter: "blur(2px)",
        }}
      />
      <div className={`relative ${rounded} ${innerClassName}`}>{children}</div>
    </div>
  );
}
