"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Pre-computed wheel-spoke endpoints. We bake these to a fixed precision
 * once at module load so React's server-rendered string ("2.598") and the
 * client-rendered string match exactly — otherwise tiny floating-point
 * differences between Node.js and the browser cause a hydration warning.
 */
const SPOKE_ENDS: { x: number; y: number }[] = [0, 60, 120, 180, 240, 300].map(
  (deg) => {
    const r = 3;
    const rad = (deg * Math.PI) / 180;
    return {
      x: Number((Math.cos(rad) * r).toFixed(3)),
      y: Number((Math.sin(rad) * r).toFixed(3)),
    };
  },
);

/**
 * Realistic 5G cell tower — flat-vector illustration style with proper
 * proportions, mast detailing, and lighting:
 *  - Tapered triangular lattice steel tower with full X-bracing
 *  - Top platform with 3 sector antenna panels (120° apart) + RRH units
 *  - Lightning rod + pulsing aviation warning beacon at the apex
 *  - Side-mounted parabolic microwave backhaul dish
 *  - Climbing ladder with safety cage hoops up the right leg
 *  - Vertical cable tray bundle running down the back
 *  - Concrete foundation pad with three anchor blocks
 *  - Equipment shelter cabinet at the base
 *  - Smartphone + connected vehicle as receiving UEs with reception arcs
 *  - Three sector beams + concentric wavefronts + data packets from the top
 */
export function BaseStationTower({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  // Tower geometry
  const apex = -260;        // top of lattice
  const baseY = 230;        // bottom of lattice (where legs meet pad)
  const baseHalf = 64;      // half-width at base
  const topHalf = 11;       // half-width at top
  const platformY = apex + 4;
  const platformHalf = 28;  // mounting platform width above lattice
  const beaconY = apex - 84;

  const xAt = (y: number, side: 1 | -1) => {
    const t = (y - apex) / (baseY - apex);
    return side * (topHalf + (baseHalf - topHalf) * t);
  };

  // X-bracing levels
  const levels: number[] = [];
  for (let y = baseY - 12; y > apex + 14; y -= 26) levels.push(y);

  return (
    <div
      className={className}
      style={{ perspective: 1400, transformStyle: "preserve-3d" }}
      aria-hidden
    >
      <svg
        viewBox="-280 -360 560 640"
        className="w-full h-auto block"
      >
        <defs>
          {/* Steel beam — bright face */}
          <linearGradient id="bs-steel-front" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A3344" />
            <stop offset="35%" stopColor="#A8B6C9" />
            <stop offset="55%" stopColor="#D6E0EC" />
            <stop offset="100%" stopColor="#1A2230" />
          </linearGradient>
          {/* Steel beam — back/dim */}
          <linearGradient id="bs-steel-back" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A2230" />
            <stop offset="50%" stopColor="#5A6F8A" />
            <stop offset="100%" stopColor="#0E141E" />
          </linearGradient>
          {/* Cross brace strut — dimmer */}
          <linearGradient id="bs-brace" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3D4F6A" />
            <stop offset="50%" stopColor="#8FA3BF" />
            <stop offset="100%" stopColor="#2A3344" />
          </linearGradient>
          {/* White antenna panel */}
          <linearGradient id="bs-panel-front" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8D2E0" />
            <stop offset="40%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#A8B6C9" />
          </linearGradient>
          <linearGradient id="bs-panel-side" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5A6F8A" />
            <stop offset="100%" stopColor="#3D4F6A" />
          </linearGradient>
          {/* RRH (Remote Radio Head) box — small dark grey unit beneath each antenna */}
          <linearGradient id="bs-rrh" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A2230" />
            <stop offset="50%" stopColor="#3D4F6A" />
            <stop offset="100%" stopColor="#0E141E" />
          </linearGradient>
          {/* Glow halo */}
          <radialGradient id="bs-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E85A4F" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#E85A4F" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#E85A4F" stopOpacity="0" />
          </radialGradient>
          {/* Sector beams */}
          <linearGradient id="bs-beam-coral" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E85A4F" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#E85A4F" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="bs-beam-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F2A65A" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F2A65A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="bs-beam-sky" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A90C2" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4A90C2" stopOpacity="0" />
          </linearGradient>
          {/* Parabolic dish */}
          <radialGradient id="bs-dish" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#C8D2E0" />
            <stop offset="100%" stopColor="#5A6F8A" />
          </radialGradient>
          {/* Foundation pad */}
          <linearGradient id="bs-pad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5A6F8A" />
            <stop offset="100%" stopColor="#1A2230" />
          </linearGradient>
          {/* Ground reflection */}
          <linearGradient id="bs-ground" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B1F3A" stopOpacity="0" />
            <stop offset="50%" stopColor="#0B1F3A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
          {/* Phone screen */}
          <linearGradient id="bs-phone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B1F3A" />
            <stop offset="100%" stopColor="#1E3A5F" />
          </linearGradient>
          {/* Soft blur for shadows */}
          <filter id="bs-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.4" />
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* GROUND + propagation rings                                    */}
        {/* ============================================================ */}
        <ellipse cx="0" cy="250" rx="240" ry="14" fill="url(#bs-ground)" />
        <ellipse cx="0" cy="250" rx="160" ry="9" fill="#000" opacity="0.55" />
        {!reduce ? (
          <motion.ellipse
            cx="0"
            cy="250"
            rx="60"
            ry="8"
            fill="none"
            stroke="#E85A4F"
            strokeWidth="1.5"
            initial={{ opacity: 0.6, scale: 0.3 }}
            animate={{ opacity: 0, scale: 3.4 }}
            transition={{
              duration: 3.8,
              ease: "easeOut",
              repeat: Infinity,
            }}
            style={{ transformOrigin: "0px 250px" }}
          />
        ) : null}

        {/* ============================================================ */}
        {/* FOUNDATION PAD                                               */}
        {/* ============================================================ */}
        <g>
          {/* Pad face (front) */}
          <path d="M -88 230 L 88 230 L 76 254 L -76 254 Z" fill="url(#bs-pad)" stroke="#0E141E" strokeWidth="0.8" />
          {/* Pad top */}
          <path d="M -88 230 L 88 230 L 86 223 L -86 223 Z" fill="#6E7E95" />
          {/* Anchor blocks where each leg meets the pad */}
          {[-baseHalf, 0, baseHalf].map((bx, i) => (
            <g key={i} transform={`translate(${bx}, 226)`}>
              <rect x="-5" y="-4" width="10" height="8" rx="0.8" fill="#1A2230" stroke="#0E141E" strokeWidth="0.5" />
              <rect x="-6" y="0" width="12" height="3" fill="#2A3344" />
              <circle cx="0" cy="-2" r="0.8" fill="#5A6F8A" />
            </g>
          ))}
          {/* Pad shadow */}
          <ellipse cx="0" cy="256" rx="98" ry="4" fill="#000" opacity="0.45" filter="url(#bs-soft)" />
        </g>

        {/* ============================================================ */}
        {/* TOWER — three lattice legs                                   */}
        {/* ============================================================ */}
        <g>
          {/* Back centre leg (dimmer, in perspective) */}
          <path
            d={`M -2 ${apex + 12} L 2 ${apex + 12} L 3 ${baseY} L -3 ${baseY} Z`}
            fill="url(#bs-steel-back)"
            opacity="0.9"
          />

          {/* Left front leg */}
          <path
            d={`M ${xAt(apex + 12, -1) - 1.8} ${apex + 12} L ${xAt(apex + 12, -1) + 1.8} ${apex + 12} L ${xAt(baseY, -1) + 4} ${baseY} L ${xAt(baseY, -1) - 4} ${baseY} Z`}
            fill="url(#bs-steel-front)"
          />

          {/* Right front leg */}
          <path
            d={`M ${xAt(apex + 12, 1) - 1.8} ${apex + 12} L ${xAt(apex + 12, 1) + 1.8} ${apex + 12} L ${xAt(baseY, 1) + 4} ${baseY} L ${xAt(baseY, 1) - 4} ${baseY} Z`}
            fill="url(#bs-steel-front)"
          />

          {/* X-bracing + horizontal belts at each level */}
          <g stroke="url(#bs-brace)" strokeWidth="1.4" strokeLinecap="round" fill="none">
            {levels.map((y, i) => {
              const yN = levels[i + 1];
              if (!yN) return null;
              return (
                <g key={i}>
                  {/* Diagonal X on the front face */}
                  <line x1={xAt(y, -1)} y1={y} x2={xAt(yN, 1)} y2={yN} />
                  <line x1={xAt(y, 1)} y1={y} x2={xAt(yN, -1)} y2={yN} />
                  {/* Horizontal belt */}
                  <line x1={xAt(y, -1)} y1={y} x2={xAt(y, 1)} y2={y} opacity="0.8" />
                  {/* Subtle back-leg perspective braces (dimmer) */}
                  <line x1={xAt(y, -1)} y1={y} x2="0" y2={y} opacity="0.25" stroke="url(#bs-steel-back)" />
                  <line x1={xAt(y, 1)} y1={y} x2="0" y2={y} opacity="0.25" stroke="url(#bs-steel-back)" />
                </g>
              );
            })}
          </g>

          {/* Cable tray running down the back centre */}
          <g>
            <path
              d={`M -2 ${apex + 30} Q -4 0 -2 200 Q -1 ${baseY - 10} 0 ${baseY - 6}`}
              stroke="#0E141E"
              strokeWidth="3.6"
              fill="none"
              opacity="0.7"
            />
            <path
              d={`M -2 ${apex + 30} Q -4 0 -2 200 Q -1 ${baseY - 10} 0 ${baseY - 6}`}
              stroke="#3D4F6A"
              strokeWidth="0.9"
              fill="none"
              opacity="0.55"
            />
          </g>

          {/* Climbing ladder on the right leg with safety cage hoops */}
          <g stroke="#1A2230" strokeWidth="0.9" fill="none">
            <line x1={xAt(apex + 30, 1) - 8} y1={apex + 30} x2={xAt(baseY - 20, 1) - 8} y2={baseY - 20} />
            <line x1={xAt(apex + 30, 1) - 4} y1={apex + 30} x2={xAt(baseY - 20, 1) - 4} y2={baseY - 20} />
            {/* Rungs */}
            {Array.from({ length: 30 }).map((_, i) => {
              const y = apex + 36 + i * 16;
              if (y > baseY - 24) return null;
              const t = (y - apex) / (baseY - apex);
              const xR = topHalf + (baseHalf - topHalf) * t;
              return <line key={i} x1={xR - 8.5} y1={y} x2={xR - 3.5} y2={y} />;
            })}
            {/* Safety cage hoops every ~70 px */}
            {[apex + 80, apex + 150, apex + 220, apex + 290].map((y, i) => {
              if (y > baseY - 30) return null;
              const t = (y - apex) / (baseY - apex);
              const xR = topHalf + (baseHalf - topHalf) * t;
              return (
                <ellipse
                  key={i}
                  cx={xR - 6}
                  cy={y}
                  rx="6"
                  ry="3"
                  stroke="#3D4F6A"
                  strokeWidth="0.7"
                  opacity="0.8"
                />
              );
            })}
          </g>
        </g>

        {/* ============================================================ */}
        {/* TOP PLATFORM (where antennas mount)                          */}
        {/* ============================================================ */}
        <g>
          {/* Platform ellipse (top deck) */}
          <ellipse cx="0" cy={platformY} rx={platformHalf} ry="8" fill="#3D4F6A" stroke="#0E141E" strokeWidth="0.8" />
          <ellipse cx="0" cy={platformY - 1.5} rx={platformHalf - 2} ry="6" fill="#5A6F8A" />
          {/* Catwalk grating pattern (thin lines) */}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={i}
              x1={-platformHalf + 4 + i * 8}
              y1={platformY - 4.5}
              x2={-platformHalf + 4 + i * 8}
              y2={platformY + 1.5}
              stroke="#0E141E"
              strokeWidth="0.4"
              opacity="0.5"
            />
          ))}
          {/* Front rail */}
          <line x1={-platformHalf + 4} y1={platformY + 2} x2={platformHalf - 4} y2={platformY + 2} stroke="#0E141E" strokeWidth="0.5" />
        </g>

        {/* Halo glow behind antennas */}
        <circle cx="0" cy={apex - 24} r="110" fill="url(#bs-halo)" />

        {/* ============================================================ */}
        {/* CENTRAL MAST above platform                                  */}
        {/* ============================================================ */}
        <g>
          <rect x="-3" y={apex - 50} width="6" height={platformY - apex + 50} fill="url(#bs-steel-front)" />
          <rect x="-3" y={apex - 50} width="2" height={platformY - apex + 50} fill="#FFFFFF" opacity="0.3" />
        </g>

        {/* ============================================================ */}
        {/* 3 SECTOR ANTENNA PANELS (proper 120° spacing)                */}
        {/* ============================================================ */}
        <g transform={`translate(0, ${apex - 24})`}>
          {/* Mounting collar around mast */}
          <ellipse cx="0" cy="0" rx="14" ry="4" fill="#1A2230" stroke="#0E141E" strokeWidth="0.7" />
          <ellipse cx="0" cy="-2" rx="13" ry="3" fill="#3D4F6A" />

          {/* LEFT antenna panel (tilted out left) */}
          <g transform="translate(-26, 8) rotate(-22)">
            {/* Side depth */}
            <path d="M 10 -34 L 13 -32 L 13 22 L 10 24 Z" fill="url(#bs-panel-side)" />
            <rect x="-10" y="-34" width="20" height="58" rx="2" fill="url(#bs-panel-front)" stroke="#5A6F8A" strokeWidth="0.6" />
            <rect x="-8" y="-32" width="16" height="54" rx="1" fill="none" stroke="#B5C0D0" strokeWidth="0.4" opacity="0.55" />
            {/* Dipole columns */}
            <line x1="-3" y1="-29" x2="-3" y2="19" stroke="#8FA3BF" strokeWidth="0.4" opacity="0.55" />
            <line x1="3" y1="-29" x2="3" y2="19" stroke="#8FA3BF" strokeWidth="0.4" opacity="0.55" />
            {/* Top highlight strip */}
            <rect x="-8" y="-33" width="16" height="1.4" fill="#FFFFFF" opacity="0.7" rx="0.6" />
            {/* MMT branded strip at bottom */}
            <rect x="-10" y="20" width="20" height="4.5" fill="#0B1F3A" />
            <text x="0" y="23.4" textAnchor="middle" fontSize="3.4" fontWeight="800" fill="#FFFFFF" letterSpacing="0.8" fontFamily="system-ui">
              MMT 5G
            </text>
            {/* Mount arm to mast */}
            <line x1="10" y1="-4" x2="22" y2="-4" stroke="#3D4F6A" strokeWidth="1.4" />
            {/* RRH unit mounted just below antenna */}
            <g transform="translate(0, 30)">
              <rect x="-9" y="-3" width="18" height="10" rx="1.2" fill="url(#bs-rrh)" stroke="#5A6F8A" strokeWidth="0.5" />
              <rect x="-7" y="-2" width="14" height="2" fill="#0E141E" />
              <text x="0" y="-0.5" textAnchor="middle" fontSize="2" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="700">
                RRH
              </text>
              {/* Heatsink fins */}
              {Array.from({ length: 5 }).map((_, j) => (
                <line key={j} x1={-7 + j * 3.5} y1="1" x2={-7 + j * 3.5} y2="6.5" stroke="#1A2230" strokeWidth="0.7" />
              ))}
            </g>
          </g>

          {/* CENTRE antenna (facing viewer) */}
          <g>
            {/* Side depth */}
            <path d="M 13 -42 L 16 -40 L 16 26 L 13 28 Z" fill="url(#bs-panel-side)" />
            <rect x="-13" y="-42" width="26" height="70" rx="2.5" fill="url(#bs-panel-front)" stroke="#5A6F8A" strokeWidth="0.7" />
            <rect x="-11" y="-40" width="22" height="66" rx="1.4" fill="none" stroke="#B5C0D0" strokeWidth="0.5" opacity="0.55" />
            {/* Dipole columns */}
            <line x1="-5" y1="-36" x2="-5" y2="22" stroke="#8FA3BF" strokeWidth="0.5" opacity="0.55" />
            <line x1="0" y1="-36" x2="0" y2="22" stroke="#8FA3BF" strokeWidth="0.5" opacity="0.55" />
            <line x1="5" y1="-36" x2="5" y2="22" stroke="#8FA3BF" strokeWidth="0.5" opacity="0.55" />
            {/* Dipole element ticks */}
            {Array.from({ length: 6 }).map((_, i) => (
              <g key={i} opacity="0.35">
                <line x1="-7" y1={-30 + i * 10} x2="-3" y2={-30 + i * 10} stroke="#8FA3BF" strokeWidth="0.4" />
                <line x1="-2" y1={-30 + i * 10} x2="2" y2={-30 + i * 10} stroke="#8FA3BF" strokeWidth="0.4" />
                <line x1="3" y1={-30 + i * 10} x2="7" y2={-30 + i * 10} stroke="#8FA3BF" strokeWidth="0.4" />
              </g>
            ))}
            {/* Top highlight */}
            <rect x="-11" y="-41" width="22" height="1.5" fill="#FFFFFF" opacity="0.75" rx="0.6" />
            {/* MMT 5G strip */}
            <rect x="-13" y="24" width="26" height="5.5" fill="#0B1F3A" />
            <text x="0" y="28.2" textAnchor="middle" fontSize="3.8" fontWeight="800" fill="#FFFFFF" letterSpacing="1" fontFamily="system-ui">
              MMT 5G
            </text>
            {/* Status LED (static — was animated, dropped for scroll perf) */}
            <circle cx="9" cy="-38" r="1.3" fill="#22c55e" />
            {/* Mounting arms back to mast */}
            <line x1="-13" y1="-6" x2="-2" y2="-6" stroke="#3D4F6A" strokeWidth="1.4" />
            {/* RRH unit below */}
            <g transform="translate(0, 34)">
              <rect x="-11" y="-3" width="22" height="11" rx="1.4" fill="url(#bs-rrh)" stroke="#5A6F8A" strokeWidth="0.5" />
              <rect x="-9" y="-2" width="18" height="2.4" fill="#0E141E" />
              <text x="0" y="-0.3" textAnchor="middle" fontSize="2.2" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="800">
                RRH
              </text>
              {Array.from({ length: 6 }).map((_, j) => (
                <line key={j} x1={-8 + j * 3.3} y1="1.5" x2={-8 + j * 3.3} y2="7.5" stroke="#1A2230" strokeWidth="0.7" />
              ))}
            </g>
          </g>

          {/* RIGHT antenna panel (tilted out right) */}
          <g transform="translate(26, 8) rotate(22)">
            <path d="M 10 -34 L 13 -32 L 13 22 L 10 24 Z" fill="url(#bs-panel-side)" />
            <rect x="-10" y="-34" width="20" height="58" rx="2" fill="url(#bs-panel-front)" stroke="#5A6F8A" strokeWidth="0.6" />
            <rect x="-8" y="-32" width="16" height="54" rx="1" fill="none" stroke="#B5C0D0" strokeWidth="0.4" opacity="0.55" />
            <line x1="-3" y1="-29" x2="-3" y2="19" stroke="#8FA3BF" strokeWidth="0.4" opacity="0.55" />
            <line x1="3" y1="-29" x2="3" y2="19" stroke="#8FA3BF" strokeWidth="0.4" opacity="0.55" />
            <rect x="-8" y="-33" width="16" height="1.4" fill="#FFFFFF" opacity="0.7" rx="0.6" />
            <rect x="-10" y="20" width="20" height="4.5" fill="#0B1F3A" />
            <text x="0" y="23.4" textAnchor="middle" fontSize="3.4" fontWeight="800" fill="#FFFFFF" letterSpacing="0.8" fontFamily="system-ui">
              MMT 5G
            </text>
            <line x1="-22" y1="-4" x2="-10" y2="-4" stroke="#3D4F6A" strokeWidth="1.4" />
            <g transform="translate(0, 30)">
              <rect x="-9" y="-3" width="18" height="10" rx="1.2" fill="url(#bs-rrh)" stroke="#5A6F8A" strokeWidth="0.5" />
              <rect x="-7" y="-2" width="14" height="2" fill="#0E141E" />
              <text x="0" y="-0.5" textAnchor="middle" fontSize="2" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="700">
                RRH
              </text>
              {Array.from({ length: 5 }).map((_, j) => (
                <line key={j} x1={-7 + j * 3.5} y1="1" x2={-7 + j * 3.5} y2="6.5" stroke="#1A2230" strokeWidth="0.7" />
              ))}
            </g>
          </g>
        </g>

        {/* ============================================================ */}
        {/* TOP MAST + AVIATION BEACON + LIGHTNING ROD                   */}
        {/* ============================================================ */}
        <g>
          {/* Vertical mast extension from antenna collar up */}
          <line x1="0" y1={apex - 60} x2="0" y2={beaconY + 6} stroke="url(#bs-steel-front)" strokeWidth="3.5" strokeLinecap="round" />
          {/* Beacon housing */}
          <circle cx="0" cy={beaconY} r="6" fill="#1A2230" stroke="#0E141E" strokeWidth="0.6" />
          {/* Beacon lens */}
          <circle cx="0" cy={beaconY} r="4.5" fill="#E85A4F" stroke="#0B1018" strokeWidth="0.4">
            {!reduce ? (
              <animate attributeName="opacity" values="1;0.25;1" dur="1.4s" repeatCount="indefinite" />
            ) : null}
          </circle>
          {/* Pulsing halo around beacon */}
          {!reduce ? (
            <circle cx="0" cy={beaconY} r="4.5" fill="none" stroke="#E85A4F" strokeWidth="0.7">
              <animate attributeName="r" values="4.5;14;4.5" dur="1.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.85;0;0.85" dur="1.4s" repeatCount="indefinite" />
            </circle>
          ) : null}
          {/* Lightning rod (thin spike) above beacon */}
          <line x1="0" y1={beaconY - 6} x2="0" y2={beaconY - 24} stroke="#1A2230" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="0" cy={beaconY - 24} r="1.2" fill="#3D4F6A" />
        </g>

        {/* ============================================================ */}
        {/* SIDE-MOUNTED MICROWAVE BACKHAUL DISH                         */}
        {/* ============================================================ */}
        <g transform={`translate(${xAt(apex + 120, -1) - 14}, ${apex + 120})`}>
          {/* Mount arm */}
          <line x1="14" y1="0" x2="0" y2="0" stroke="#3D4F6A" strokeWidth="2" />
          <rect x="11" y="-2" width="4" height="4" rx="0.6" fill="#1A2230" />
          {/* Dish cone (back) */}
          <ellipse cx="-2" cy="0" rx="3.5" ry="12" fill="#3D4F6A" />
          {/* Dish face */}
          <ellipse cx="-4" cy="0" rx="5" ry="16" fill="url(#bs-dish)" stroke="#3D4F6A" strokeWidth="0.8" />
          <ellipse cx="-4" cy="0" rx="2.5" ry="12" fill="none" stroke="#B5C0D0" strokeWidth="0.4" opacity="0.55" />
          {/* Feed horn */}
          <line x1="-4" y1="0" x2="-16" y2="0" stroke="#1A2230" strokeWidth="1.4" />
          <rect x="-18" y="-2" width="3" height="4" rx="0.4" fill="#0E141E" />
          {/* Support struts */}
          <line x1="-12" y1="-9" x2="-16" y2="0" stroke="#1A2230" strokeWidth="0.6" />
          <line x1="-12" y1="9" x2="-16" y2="0" stroke="#1A2230" strokeWidth="0.6" />
        </g>

        {/* ============================================================ */}
        {/* SECTOR BEAMS — three cones, static fills + one shared pulse  */}
        {/* (Was three independent pulses — collapsed to one for perf.)  */}
        {/* ============================================================ */}
        <g transform={`translate(0, ${apex - 14})`} opacity="0.85">
          {/* Static side beams */}
          <g transform="rotate(-55)">
            <path d="M 24 0 L 240 -42 Q 252 0 240 42 Z" fill="url(#bs-beam-coral)" opacity="0.45" />
          </g>
          <g transform="rotate(55)">
            <path d="M 24 0 L 240 -42 Q 252 0 240 42 Z" fill="url(#bs-beam-sky)" opacity="0.45" />
          </g>
          {/* Centre beam — single shared pulse animation */}
          {!reduce ? (
            <motion.path
              d="M 24 0 L 240 -42 Q 252 0 240 42 Z"
              fill="url(#bs-beam-gold)"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.75, 0.3] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : (
            <path d="M 24 0 L 240 -42 Q 252 0 240 42 Z" fill="url(#bs-beam-gold)" opacity="0.55" />
          )}
        </g>

        {/* Concentric wavefronts — reduced from 4 to 2 for perf */}
        {!reduce
          ? [0, 1].map((i) => (
              <motion.circle
                key={i}
                cx="0"
                cy={apex - 14}
                r="60"
                fill="none"
                stroke="#E85A4F"
                strokeWidth="1.2"
                strokeDasharray="2 4"
                initial={{ opacity: 0.7, scale: 0.3 }}
                animate={{ opacity: 0, scale: 3 }}
                transition={{ duration: 4, ease: "easeOut", repeat: Infinity, delay: i * 2 }}
                style={{ transformOrigin: `0px ${apex - 14}px` }}
              />
            ))
          : null}

        {/* Data packets along beams — reduced from 3 to 1 (centre beam only) */}
        {!reduce ? (
          <g transform={`translate(0, ${apex - 14})`}>
            <motion.circle
              r="3"
              fill="#F2A65A"
              initial={{ cx: 28, opacity: 0 }}
              animate={{ cx: [28, 230], opacity: [0, 1, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          </g>
        ) : null}

        {/* ============================================================ */}
        {/* EQUIPMENT SHELTER at the base                                */}
        {/* ============================================================ */}
        <g transform="translate(-138, 196)">
          {/* Shadow */}
          <rect x="-30" y="-28" width="60" height="58" rx="2" fill="#000" opacity="0.4" transform="translate(2,3)" filter="url(#bs-soft)" />
          {/* Sloped roof */}
          <path d="M -32 -28 L -25 -36 L 25 -36 L 32 -28 Z" fill="#0E141E" stroke="#5A6F8A" strokeWidth="0.5" />
          <path d="M -25 -36 L 25 -36 L 23 -34 L -23 -34 Z" fill="#3D4F6A" opacity="0.6" />
          {/* Body */}
          <rect x="-30" y="-28" width="60" height="58" rx="2" fill="#1A2230" stroke="#5A6F8A" strokeWidth="0.7" />
          {/* Label strip */}
          <rect x="-30" y="-28" width="60" height="9" fill="#0B1F3A" />
          <text x="0" y="-22" textAnchor="middle" fontSize="5" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="800" letterSpacing="0.8">
            MMT BBU
          </text>
          {/* Door split */}
          <line x1="0" y1="-19" x2="0" y2="30" stroke="#3D4F6A" strokeWidth="0.6" />
          {/* Door handles */}
          <rect x="-6" y="6" width="3" height="1.6" rx="0.4" fill="#8FA3BF" />
          <rect x="3" y="6" width="3" height="1.6" rx="0.4" fill="#8FA3BF" />
          {/* Vents on each door */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`vl-${i}`} x1="-26" y1={-12 + i * 5} x2="-4" y2={-12 + i * 5} stroke="#5A6F8A" strokeWidth="0.45" opacity="0.7" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`vr-${i}`} x1="4" y1={-12 + i * 5} x2="26" y2={-12 + i * 5} stroke="#5A6F8A" strokeWidth="0.45" opacity="0.7" />
          ))}
          {/* Front status LEDs (static — dropped pulse for scroll perf) */}
          <g transform="translate(-22, 24)">
            <circle cx="0" cy="0" r="1.1" fill="#22c55e" />
            <circle cx="5" cy="0" r="1.1" fill="#F2A65A" />
            <circle cx="10" cy="0" r="1.1" fill="#E85A4F" />
          </g>
          {/* AC unit on roof */}
          <rect x="6" y="-44" width="14" height="8" rx="0.6" fill="#1A2230" stroke="#5A6F8A" strokeWidth="0.4" />
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1={7 + i * 2} y1="-43" x2={7 + i * 2} y2="-37" stroke="#5A6F8A" strokeWidth="0.3" />
          ))}
        </g>

        {/* ============================================================ */}
        {/* DRONE — hovering aerial UE, integrated into the tower scene  */}
        {/* (Replaces the previous fixed-position floating drone.)       */}
        {/* ============================================================ */}
        <g transform="translate(-180, -110)">
          {/* Arms — 4 thin spokes from body to motor pods */}
          <g stroke="#3D4F6A" strokeWidth="1.6" strokeLinecap="round">
            <line x1="-12" y1="-6" x2="-24" y2="-14" />
            <line x1="12" y1="-6" x2="24" y2="-14" />
            <line x1="-12" y1="6" x2="-24" y2="14" />
            <line x1="12" y1="6" x2="24" y2="14" />
          </g>

          {/* 4 propellers — CSS-spun, alternating CW / CCW like a real quadcopter */}
          {[
            { cx: -24, cy: -14, cw: true },
            { cx: 24, cy: -14, cw: false },
            { cx: -24, cy: 14, cw: false },
            { cx: 24, cy: 14, cw: true },
          ].map((m, i) => (
            <g key={i} transform={`translate(${m.cx}, ${m.cy})`}>
              {/* Static motion-blur disc */}
              <ellipse cx="0" cy="0" rx="11" ry="1.6" fill="#5A6F8A" opacity="0.25" />
              {/* Spinning blades — CSS keyframe, no JS per frame */}
              <g className={reduce ? "" : m.cw ? "mmt-rotor-cw" : "mmt-rotor-ccw"}>
                <ellipse cx="0" cy="0" rx="11" ry="0.9" fill="#1A2230" />
                <ellipse cx="0" cy="0" rx="9" ry="0.6" fill="#E85A4F" opacity="0.7" />
                <ellipse cx="0" cy="0" rx="0.9" ry="11" fill="#1A2230" opacity="0.5" />
              </g>
              {/* Motor hub */}
              <circle cx="0" cy="0" r="2.4" fill="#1A2230" stroke="#0E141E" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="1" fill="#8FA3BF" />
            </g>
          ))}

          {/* Drone body — silver, sleek */}
          <ellipse cx="0" cy="0" rx="14" ry="8" fill="#3D4F6A" stroke="#0B1018" strokeWidth="0.6" />
          <ellipse cx="0" cy="-1.5" rx="12" ry="5" fill="#5A6F8A" />
          {/* Top highlight */}
          <ellipse cx="0" cy="-3" rx="9" ry="2" fill="#A8B6C9" opacity="0.6" />
          {/* Coral nose-light stripe */}
          <rect x="-6" y="3" width="12" height="1.6" rx="0.5" fill="#E85A4F" opacity="0.85" />

          {/* Nav LEDs (port green / starboard red) */}
          <circle cx="-8" cy="0" r="1.1" fill="#22c55e" />
          <circle cx="8" cy="0" r="1.1" fill="#E85A4F" />

          {/* Gimbal camera underneath */}
          <rect x="-3" y="5" width="6" height="3" rx="0.7" fill="#1A2230" stroke="#5A6F8A" strokeWidth="0.4" />
          <circle cx="0" cy="9" r="2.4" fill="#0B1018" stroke="#5A6F8A" strokeWidth="0.5" />
          <circle cx="0" cy="9" r="1.6" fill="#0B1F3A" />
          <circle cx="-0.5" cy="8.4" r="0.5" fill="#FFFFFF" opacity="0.5" />

          {/* Top antenna with red beacon */}
          <line x1="0" y1="-7" x2="0" y2="-13" stroke="#1A2230" strokeWidth="0.9" strokeLinecap="round" />
          <circle cx="0" cy="-13" r="1.1" fill="#E85A4F" />

          {/* Telemetry uplink arcs going UP towards the tower's antennas */}
          <g stroke="#4A90C2" strokeLinecap="round" fill="none" opacity="0.75">
            <path d="M 18 -2 Q 60 -40 130 -130" strokeWidth="1.1" />
            <path d="M 20 4 Q 70 -30 130 -130" strokeWidth="1.1" opacity="0.55" strokeDasharray="3 4" />
          </g>

          {/* Drone label */}
          <text
            x="0"
            y="28"
            textAnchor="middle"
            fontSize="6"
            fill="#FFFFFF"
            fontFamily="ui-monospace,monospace"
            fontWeight="700"
            letterSpacing="0.5"
            opacity="0.85"
          >
            Aerial UE
          </text>
        </g>

        {/* ============================================================ */}
        {/* PERSON — engineer / user standing near the tower, phone up   */}
        {/* ============================================================ */}
        <g transform="translate(170, 130)">
          {/* Ground shadow */}
          <ellipse cx="0" cy="80" rx="22" ry="3.5" fill="#000" opacity="0.45" filter="url(#bs-soft)" />

          {/* Legs (front + back) */}
          <path d="M -5 78 L -7 38 L -1 38 L -2 78 Z" fill="#1E3A5F" stroke="#0B1018" strokeWidth="0.4" />
          <path d="M 5 78 L 7 38 L 1 38 L 2 78 Z" fill="#0B1F3A" stroke="#0B1018" strokeWidth="0.4" />
          {/* Belt highlight */}
          <rect x="-9" y="37" width="18" height="3" rx="0.4" fill="#2A3344" />

          {/* Torso (jacket) */}
          <path
            d="M -11 38 L -10 16 Q -10 8 -3 6 L 3 6 Q 10 8 10 16 L 11 38 Z"
            fill="#3D4F6A"
            stroke="#0B1018"
            strokeWidth="0.5"
          />
          {/* Jacket shading on the right */}
          <path d="M 11 38 L 10 16 Q 10 8 3 6 L 1 6 L 4 38 Z" fill="#2A3344" opacity="0.6" />
          {/* Coral safety stripe across chest */}
          <rect x="-11" y="20" width="22" height="2.5" fill="#E85A4F" opacity="0.85" />
          {/* MMT badge on chest */}
          <text x="-4.5" y="29" fontSize="3.6" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="800" letterSpacing="0.4">
            MMT
          </text>

          {/* Neck */}
          <rect x="-2.5" y="4" width="5" height="4" fill="#D6A07A" />

          {/* Head */}
          <circle cx="0" cy="-1" r="6.5" fill="#E8B98F" stroke="#3D3D3D" strokeWidth="0.4" />
          {/* Hair (back top of head) */}
          <path d="M -6 -3 Q -3 -8 0 -8 Q 4 -8 6 -3 Q 4 -4 0 -4 Q -3 -4 -6 -3 Z" fill="#2A2018" />
          {/* Eyes */}
          <circle cx="-2" cy="-1" r="0.5" fill="#0B1018" />
          <circle cx="2" cy="-1" r="0.5" fill="#0B1018" />
          {/* Smile */}
          <path d="M -1.5 2 Q 0 3.2 1.5 2" stroke="#0B1018" strokeWidth="0.5" fill="none" strokeLinecap="round" />
          {/* Ear */}
          <circle cx="6.2" cy="0" r="1" fill="#D6A07A" />

          {/* Right arm holding phone up — bent at elbow */}
          <path
            d="M 10 14 L 16 8 L 17 4 Q 18 2 17 0 L 14 2 L 9 9 Z"
            fill="#3D4F6A"
            stroke="#0B1018"
            strokeWidth="0.4"
          />
          {/* Hand */}
          <ellipse cx="16" cy="1" rx="2.2" ry="2.8" fill="#D6A07A" />

          {/* Phone in hand — cleaner modern design */}
          <g transform="translate(16, -4)">
            <rect x="-4.5" y="-10" width="9" height="16" rx="1.6" fill="#000" opacity="0.5" transform="translate(0.6,0.8)" />
            <rect x="-4.5" y="-10" width="9" height="16" rx="1.6" fill="#0E141E" stroke="#3D3D3D" strokeWidth="0.4" />
            <rect x="-3.6" y="-9.2" width="7.2" height="14.4" rx="1" fill="url(#bs-phone)" />
            {/* Camera notch */}
            <rect x="-1" y="-9.4" width="2" height="0.7" rx="0.3" fill="#0E141E" />
            {/* 5G label */}
            <text x="-2.6" y="-6" fontSize="1.8" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="800">
              5G
            </text>
            {/* Signal bars */}
            <rect x="1" y="-7.4" width="0.5" height="1" fill="#22c55e" rx="0.1" />
            <rect x="1.8" y="-7.8" width="0.5" height="1.4" fill="#22c55e" rx="0.1" />
            <rect x="2.6" y="-8.2" width="0.5" height="1.8" fill="#22c55e" rx="0.1" />
            {/* Speed reading on screen */}
            <text x="0" y="-1" textAnchor="middle" fontSize="2.4" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="800">
              912
            </text>
            <text x="0" y="1.8" textAnchor="middle" fontSize="1.4" fill="#22c55e" fontFamily="ui-monospace,monospace" fontWeight="700">
              Mbps
            </text>
            {/* Throughput chart */}
            <polyline points="-3,4.5 -1.5,3 0,4.2 1.5,2.4 3,3.6" fill="none" stroke="#22c55e" strokeWidth="0.4" />
            {/* Home bar */}
            <rect x="-1.6" y="5.2" width="3.2" height="0.5" rx="0.25" fill="#3D3D3D" />
          </g>

          {/* Reception arcs from the phone going up toward the tower */}
          <g stroke="#F2A65A" strokeLinecap="round" fill="none">
            <path d="M 12 -8 Q 6 -12 0 -16" strokeWidth="1.2" opacity="0.9" />
            <path d="M 16 -10 Q 8 -16 -2 -22" strokeWidth="1.2" opacity="0.55" />
          </g>

          {/* Left arm at side */}
          <path
            d="M -10 14 L -12 36 L -8 38 L -8 16 Z"
            fill="#3D4F6A"
            stroke="#0B1018"
            strokeWidth="0.4"
          />
          {/* Left hand */}
          <ellipse cx="-10" cy="38" rx="1.6" ry="2.2" fill="#D6A07A" />
        </g>

        {/* ============================================================ */}
        {/* CONNECTED VEHICLE — cleaner modern SUV silhouette            */}
        {/* ============================================================ */}
        <g transform="translate(185, 200)">
          {/* Ground shadow */}
          <ellipse cx="0" cy="20" rx="34" ry="4" fill="#000" opacity="0.45" filter="url(#bs-soft)" />

          {/* Lower body — chassis */}
          <path
            d="M -32 12 L -28 4 L -22 4 L -15 -4 L 16 -4 L 22 4 L 28 4 L 32 12 L 30 16 L -30 16 Z"
            fill="#1E3A5F"
            stroke="#0E141E"
            strokeWidth="0.7"
            strokeLinejoin="round"
          />
          {/* Lower body highlight */}
          <path
            d="M -28 4 L -22 4 L -15 -4 L 16 -4 L 22 4 L 28 4 L 28 6 L -28 6 Z"
            fill="#2A4A6E"
          />

          {/* Cabin / roof */}
          <path
            d="M -13 -4 L -8 -13 L 12 -13 L 17 -4 Z"
            fill="#0B1F3A"
            stroke="#0E141E"
            strokeWidth="0.6"
          />
          {/* Roof highlight */}
          <path d="M -8 -13 L 12 -13 L 12 -12 L -8 -12 Z" fill="#3D4F6A" opacity="0.7" />

          {/* Front windshield */}
          <path d="M -12 -4 L -7 -12 L 0 -12 L 0 -4 Z" fill="#4A90C2" opacity="0.6" stroke="#0B1018" strokeWidth="0.3" />
          {/* Rear windshield */}
          <path d="M 0 -4 L 0 -12 L 10 -12 L 16 -4 Z" fill="#4A90C2" opacity="0.45" stroke="#0B1018" strokeWidth="0.3" />

          {/* Door divisions */}
          <line x1="0" y1="-4" x2="0" y2="15" stroke="#0E141E" strokeWidth="0.4" />
          <line x1="-12" y1="-4" x2="-12" y2="15" stroke="#0E141E" strokeWidth="0.3" opacity="0.4" />
          <line x1="12" y1="-4" x2="12" y2="15" stroke="#0E141E" strokeWidth="0.3" opacity="0.4" />

          {/* Door handles */}
          <rect x="-9" y="3" width="3" height="0.8" rx="0.3" fill="#8FA3BF" />
          <rect x="6" y="3" width="3" height="0.8" rx="0.3" fill="#8FA3BF" />

          {/* Headlight (front-left, gold) */}
          <ellipse cx="-28" cy="2" rx="2.6" ry="1.8" fill="#F2A65A" />
          <ellipse cx="-28" cy="2" rx="1.4" ry="0.8" fill="#FFFFFF" opacity="0.8" />
          {/* Headlight glow (static gradient — dropped animate for perf) */}
          <ellipse cx="-34" cy="2" rx="6" ry="3" fill="#F2A65A" opacity="0.22" />

          {/* Taillight (rear-right, coral) */}
          <rect x="26" y="0" width="4" height="3" rx="0.6" fill="#E85A4F" />
          <rect x="27" y="0.4" width="2" height="2.2" rx="0.4" fill="#FFCFCC" opacity="0.7" />

          {/* Grille details */}
          <line x1="-26" y1="6" x2="-22" y2="6" stroke="#0E141E" strokeWidth="0.5" />
          <line x1="-26" y1="8" x2="-22" y2="8" stroke="#0E141E" strokeWidth="0.5" />

          {/* Front wheel */}
          <g transform="translate(-16, 16)">
            <circle r="6" fill="#0B1018" stroke="#0E141E" strokeWidth="0.6" />
            <circle r="3.5" fill="#3D4F6A" />
            <circle r="2.5" fill="#5A6F8A" />
            <circle r="0.8" fill="#0E141E" />
            {/* Spokes */}
            {SPOKE_ENDS.map((s, i) => (
              <line
                key={i}
                x1="0"
                y1="0"
                x2={s.x}
                y2={s.y}
                stroke="#0E141E"
                strokeWidth="0.4"
              />
            ))}
          </g>
          {/* Rear wheel */}
          <g transform="translate(16, 16)">
            <circle r="6" fill="#0B1018" stroke="#0E141E" strokeWidth="0.6" />
            <circle r="3.5" fill="#3D4F6A" />
            <circle r="2.5" fill="#5A6F8A" />
            <circle r="0.8" fill="#0E141E" />
            {SPOKE_ENDS.map((s, i) => (
              <line
                key={i}
                x1="0"
                y1="0"
                x2={s.x}
                y2={s.y}
                stroke="#0E141E"
                strokeWidth="0.4"
              />
            ))}
          </g>

          {/* V2X roof antenna (shark fin style) */}
          <path d="M 0 -13 L -2 -16 L 2 -16 Z" fill="#0E141E" stroke="#1A2230" strokeWidth="0.3" />
          {/* Antenna tip (static — dropped pulse for scroll perf) */}
          <circle cx="0" cy="-17" r="1" fill="#E85A4F" />

          {/* Reception arcs from antenna */}
          <g stroke="#E85A4F" strokeLinecap="round" fill="none">
            <path d="M 4 -16 Q 10 -22 4 -28" strokeWidth="1.2" opacity="0.9" />
            <path d="M 8 -18 Q 16 -24 8 -32" strokeWidth="1.2" opacity="0.55" />
          </g>
        </g>

        {/* ============================================================ */}
        {/* Frequency badge floating at the top                          */}
        {/* ============================================================ */}
        <g transform={`translate(0, ${apex - 130})`}>
          <rect x="-66" y="-12" width="132" height="22" rx="11" fill="#0B1F3A" stroke="#E85A4F" strokeWidth="1.3" />
          <circle cx="-52" cy="-1" r="2.6" fill="#E85A4F">
            {!reduce ? <animate attributeName="opacity" values="1;0.3;1" dur="1.3s" repeatCount="indefinite" /> : null}
          </circle>
          <text x="6" y="3" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="1.2">
            MMT 5G · N78 · 100 MHz
          </text>
        </g>
      </svg>
    </div>
  );
}
