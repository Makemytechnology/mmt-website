"use client";

import type { ReactNode } from "react";

/**
 * Animated gradient text — coral → gold → sky cycling continuously.
 * Pure CSS keyframes, no JS frame work.
 */
export function GradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`mmt-gradient-text bg-clip-text text-transparent ${className ?? ""}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, #E85A4F 0%, #F2A65A 35%, #4A90C2 70%, #E85A4F 100%)",
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </span>
  );
}
