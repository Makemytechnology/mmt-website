"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

/**
 * Card with a radial spotlight that follows the cursor. The spotlight reveals
 * a coral glow on the card's surface, popular on 21st.dev-style sites.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(232,90,79,0.20)",
  innerClassName = "bg-navy",
  rounded = "rounded-2xl",
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  innerClassName?: string;
  rounded?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);

  const bg = useMotionTemplate`radial-gradient(360px circle at ${mx}px ${my}px, ${spotlightColor}, transparent 60%)`;

  const handle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };
  const reset = () => {
    mx.set(-9999);
    my.set(-9999);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={reset}
      className={`group relative ${rounded} ${innerClassName} ${className ?? ""} ring-1 ring-inset ring-white/10 overflow-hidden`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: bg }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
