"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

/**
 * 3D tilt card — follows the user's cursor with CSS perspective.
 * Uses transform-style: preserve-3d so children can sit at different depths
 * via `style={{ transform: 'translateZ(40px)' }}`.
 */
export function TiltCard({
  children,
  className,
  intensity = 10,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs smooth the rotation so it doesn't feel twitchy
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 220,
    damping: 24,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 220,
    damping: 24,
    mass: 0.6,
  });

  // Highlight position for the glare overlay
  const glareXPct = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareYPct = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glareBg = useMotionTemplate`radial-gradient(220px circle at ${glareXPct}% ${glareYPct}%, rgba(255,255,255,0.35), transparent 60%)`;

  const handle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      className={`group ${className ?? ""} relative`}
    >
      <div className="relative" style={{ transformStyle: "preserve-3d" }}>
        {children}
        {glare ? (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: glareBg }}
          />
        ) : null}
      </div>
    </motion.div>
  );
}
