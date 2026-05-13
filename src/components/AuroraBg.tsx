"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Aurora gradient background — slowly shifts hue and position.
 * Sits absolutely inside a relative + overflow-hidden parent.
 *
 * Motion is disabled on touch devices and reduced-motion users — those are
 * exactly the contexts where the per-frame background-string interpolation
 * was costing frames during scroll. Static gradient is still visible.
 */
export function AuroraBg({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Only animate on devices that have a real cursor (i.e. desktops) — touch
    // devices stutter when this is animating during inertial scroll.
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setAnimate(mql.matches);
    const handler = (e: MediaQueryListEvent) => setAnimate(e.matches);
    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, []);

  const shouldAnimate = animate && !reduce;
  const staticBg =
    "radial-gradient(40% 60% at 20% 30%, rgba(232,90,79,0.40), transparent 60%), radial-gradient(50% 60% at 75% 60%, rgba(74,144,194,0.35), transparent 60%), radial-gradient(40% 50% at 50% 90%, rgba(242,166,90,0.28), transparent 60%)";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        className="absolute -inset-[10%]"
        animate={
          shouldAnimate
            ? {
                background: [
                  "radial-gradient(40% 60% at 20% 30%, rgba(232,90,79,0.45), transparent 60%), radial-gradient(50% 60% at 75% 60%, rgba(74,144,194,0.40), transparent 60%), radial-gradient(40% 50% at 50% 90%, rgba(242,166,90,0.30), transparent 60%)",
                  "radial-gradient(40% 60% at 75% 30%, rgba(232,90,79,0.45), transparent 60%), radial-gradient(50% 60% at 20% 70%, rgba(74,144,194,0.40), transparent 60%), radial-gradient(40% 50% at 60% 10%, rgba(242,166,90,0.30), transparent 60%)",
                  "radial-gradient(40% 60% at 50% 60%, rgba(232,90,79,0.45), transparent 60%), radial-gradient(50% 60% at 80% 20%, rgba(74,144,194,0.40), transparent 60%), radial-gradient(40% 50% at 20% 90%, rgba(242,166,90,0.30), transparent 60%)",
                  "radial-gradient(40% 60% at 20% 30%, rgba(232,90,79,0.45), transparent 60%), radial-gradient(50% 60% at 75% 60%, rgba(74,144,194,0.40), transparent 60%), radial-gradient(40% 50% at 50% 90%, rgba(242,166,90,0.30), transparent 60%)",
                ],
              }
            : undefined
        }
        transition={
          shouldAnimate
            ? { duration: 14, ease: "easeInOut", repeat: Infinity }
            : undefined
        }
        style={{
          filter: "blur(40px)",
          opacity: 0.6,
          background: shouldAnimate ? undefined : staticBg,
        }}
      />
      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
