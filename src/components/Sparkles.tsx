"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Dot = {
  top: number;
  left: number;
  size: number;
  delay: number;
  dur: number;
};

/**
 * Twinkling sparkles layer — small white dots that fade in/out at random.
 *
 * Skipped entirely on touch devices and reduced-motion users — these
 * decorative animations were stealing frames during inertial scroll.
 */
export function Sparkles({
  count = 22,
  color = "#ffffff",
  className,
}: {
  count?: number;
  color?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [dots, setDots] = useState<Dot[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only render on hover-capable devices (desktops). On touch screens these
    // were causing frame drops during scroll.
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mql.matches) return;
    setEnabled(true);
    setDots(
      Array.from({ length: count }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 4,
        dur: 2 + Math.random() * 3,
      })),
    );
  }, [count]);

  if (!enabled || reduce) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            background: color,
            boxShadow: `0 0 ${d.size * 4}px ${color}`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.9, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
