"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * 3D-feeling animated network: a sphere of orbiting nodes with connecting lines.
 * Pure SVG + framer-motion. No three.js. Renders crisp at any size.
 */
export function OrbitNetwork({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  // Three concentric orbits at different tilts
  const orbits = [
    { rx: 180, ry: 64, tilt: -18, dur: 24, count: 6, color: "#E85A4F" },
    { rx: 140, ry: 50, tilt: 22, dur: 30, count: 5, color: "#F2A65A" },
    { rx: 200, ry: 72, tilt: 6, dur: 36, count: 7, color: "#4A90C2" },
  ];

  return (
    <div
      className={className}
      style={{ perspective: 900, transformStyle: "preserve-3d" }}
      aria-hidden
    >
      <svg
        viewBox="-260 -180 520 360"
        className="w-full h-auto block drop-shadow-[0_0_30px_rgba(232,90,79,0.25)]"
      >
        {/* Soft glow center */}
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E85A4F" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#E85A4F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E85A4F" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Glow center */}
        <circle r="60" fill="url(#core)" />
        <circle r="6" fill="#fff" />

        {/* Orbits */}
        {orbits.map((o, i) => {
          const nodes = Array.from({ length: o.count });
          return (
            <g key={i} transform={`rotate(${o.tilt})`}>
              <ellipse
                rx={o.rx}
                ry={o.ry}
                fill="none"
                stroke={o.color}
                strokeOpacity="0.25"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              {/* Rotating group */}
              <motion.g
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{
                  duration: o.dur,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ transformOrigin: "0px 0px" }}
              >
                {nodes.map((_, n) => {
                  const angle = (n / o.count) * Math.PI * 2;
                  const cx = Math.cos(angle) * o.rx;
                  const cy = Math.sin(angle) * o.ry;
                  // pseudo-depth: nodes at the "back" become smaller / dimmer
                  const depth = (Math.sin(angle) + 1) / 2; // 0..1
                  const r = 3 + depth * 4;
                  return (
                    <g key={n} transform={`translate(${cx} ${cy})`}>
                      <circle r={r + 4} fill={o.color} opacity={depth * 0.25} />
                      <circle r={r} fill="url(#node)" stroke={o.color} strokeWidth="1.2" />
                    </g>
                  );
                })}
              </motion.g>
            </g>
          );
        })}

        {/* Pulse rings */}
        {!reduce ? (
          <>
            <motion.circle
              r="40"
              fill="none"
              stroke="#E85A4F"
              strokeWidth="1"
              initial={{ opacity: 0.8, scale: 0.5 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle
              r="40"
              fill="none"
              stroke="#F2A65A"
              strokeWidth="1"
              initial={{ opacity: 0.6, scale: 0.5 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.7,
              }}
            />
          </>
        ) : null}
      </svg>
    </div>
  );
}
