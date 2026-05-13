"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Drone } from "./Drone";

/**
 * Stationary drone that sits in a fixed corner of the home page.
 * The drone itself doesn't move — only its propellers rotate (driven by
 * pure CSS keyframes inside the Drone component). No scroll handling,
 * no spring, no banking, no transforms tied to scroll.
 */
export function FlyingDrone() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: "12vh",
        right: "4vw",
        zIndex: 5,
        pointerEvents: "none",
        // Tiny GPU-cheap shadow (was drop-shadow filter — that costs a repaint
        // every scroll frame on touch devices).
        opacity: reduce ? 0.85 : 1,
      }}
      className="hidden md:block"
    >
      <Drone size={220} />
    </div>
  );
}
