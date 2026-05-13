"use client";

import { useReducedMotion } from "framer-motion";

/**
 * High-detail cartoon-vector drone in 3/4 perspective.
 *
 * DJI-Mavic style folding-arm quadcopter with:
 *  - Light silver/grey body in soft gradient (not silhouette)
 *  - Coral-tipped propeller blades on four motors
 *  - Coral-tipped landing legs splayed outward
 *  - Front-mounted gimbal camera with prominent dark lens
 *  - Subtle vent + panel detailing for a polished consumer-drone look
 */
export function Drone({ className, size = 260 }: { className?: string; size?: number }) {
  const reduce = useReducedMotion();

  /**
   * A spinning propeller. The blade group is drawn relative to local (0,0)
   * and the whole group is translated into place — so rotation around
   * (0,0) "just works" without any transform-origin gymnastics, in every
   * browser. Rotation itself is driven by a pure CSS keyframe (cheap GPU
   * compositor work — no per-frame JS).
   */
  const Propeller = ({
    cx,
    cy,
    rx,
    direction,
  }: {
    cx: number;
    cy: number;
    rx: number;
    direction: 1 | -1;
  }) => {
    const tip = 8;
    const klass = reduce ? "" : direction === 1 ? "mmt-rotor-cw" : "mmt-rotor-ccw";
    return (
      <g transform={`translate(${cx}, ${cy})`}>
        {/* Static motion-blur disc */}
        <ellipse cx="0" cy="0" rx={rx} ry="3.4" fill="#5A6F8A" opacity="0.22" />

        {/* CSS-spun blade group — drawn around local (0,0) so rotation
            naturally happens around the motor hub */}
        <g className={klass}>
          <path
            d={`M ${-rx + tip} -1.6
               Q ${-rx / 2} -3 0 -1.2
               Q ${-rx / 2} 1.2 ${-rx + tip} 1.6 Z`}
            fill="#2A3344"
          />
          <path
            d={`M ${-rx} -1.3
               Q ${-rx + tip} -2.6 ${-rx + tip + 2} -1.4
               L ${-rx + tip + 2} 1.4
               Q ${-rx + tip} 2.6 ${-rx} 1.3 Z`}
            fill="#E85A4F"
          />
          <path
            d={`M ${rx - tip} -1.6
               Q ${rx / 2} -3 0 -1.2
               Q ${rx / 2} 1.2 ${rx - tip} 1.6 Z`}
            fill="#2A3344"
          />
          <path
            d={`M ${rx} -1.3
               Q ${rx - tip} -2.6 ${rx - tip - 2} -1.4
               L ${rx - tip - 2} 1.4
               Q ${rx - tip} 2.6 ${rx} 1.3 Z`}
            fill="#E85A4F"
          />
        </g>

        {/* Central motor cap */}
        <circle cx="0" cy="0" r="3.5" fill="#1A2230" stroke="#0B1018" strokeWidth="0.6" />
        <circle cx="0" cy="0" r="1.6" fill="#8FA3BF" />
      </g>
    );
  };

  return (
    <svg
      viewBox="-260 -150 520 320"
      width={size}
      className={className}
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Body main — soft silver gradient */}
        <linearGradient id="body-main" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D6E0EC" />
          <stop offset="45%" stopColor="#A8B6C9" />
          <stop offset="100%" stopColor="#5A6F8A" />
        </linearGradient>
        {/* Body underside — darker */}
        <linearGradient id="body-under" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A6F8A" />
          <stop offset="100%" stopColor="#2A3344" />
        </linearGradient>
        {/* Arm gradient */}
        <linearGradient id="arm" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8FA3BF" />
          <stop offset="100%" stopColor="#3D4F6A" />
        </linearGradient>
        {/* Dark arm (for back arms in shadow) */}
        <linearGradient id="arm-back" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A6F8A" />
          <stop offset="100%" stopColor="#1A2230" />
        </linearGradient>
        {/* Motor housing */}
        <linearGradient id="motor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A4658" />
          <stop offset="100%" stopColor="#0B1018" />
        </linearGradient>
        {/* Lens */}
        <radialGradient id="lens" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#3A4658" />
          <stop offset="40%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        {/* Drop shadow */}
        <radialGradient id="ground-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="0" cy="148" rx="170" ry="14" fill="url(#ground-shadow)" />

      {/* ============================================ */}
      {/* ===== BACK ARMS (behind body for depth) ===== */}
      {/* ============================================ */}
      {/* Back-left arm */}
      <g>
        <path
          d="M -38 -22 L -158 -56 L -148 -48 L -32 -14 Z"
          fill="url(#arm-back)"
          stroke="#0B1018"
          strokeWidth="0.5"
        />
        {/* Arm joint at body */}
        <circle cx="-38" cy="-22" r="6" fill="#3D4F6A" stroke="#0B1018" strokeWidth="0.6" />
        <circle cx="-38" cy="-22" r="2.5" fill="#1A2230" />
      </g>

      {/* Back-right arm */}
      <g>
        <path
          d="M 38 -22 L 158 -56 L 148 -48 L 32 -14 Z"
          fill="url(#arm-back)"
          stroke="#0B1018"
          strokeWidth="0.5"
        />
        <circle cx="38" cy="-22" r="6" fill="#3D4F6A" stroke="#0B1018" strokeWidth="0.6" />
        <circle cx="38" cy="-22" r="2.5" fill="#1A2230" />
      </g>

      {/* Back motor pods */}
      {[-1, 1].map((s, i) => (
        <g key={i} transform={`translate(${158 * s}, -56)`}>
          <ellipse cx="0" cy="6" rx="12" ry="3" fill="#000" opacity="0.45" />
          <ellipse cx="0" cy="0" rx="11" ry="3.6" fill="#3A4658" stroke="#0B1018" strokeWidth="0.6" />
          <rect x="-11" y="0" width="22" height="10" fill="url(#motor)" />
          <ellipse cx="0" cy="10" rx="11" ry="3.4" fill="#0B1018" stroke="#000" strokeWidth="0.5" />
          {/* LED stripe */}
          <rect x="-4" y="3" width="8" height="2" fill={i === 0 ? "#22c55e" : "#E85A4F"} rx="0.5" />
          {/* Landing skid attached to motor */}
          <path
            d={`M ${s * -3} 10 Q ${s * -8} 38 ${s * -14} 70`}
            stroke="#3D4F6A"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Orange tip */}
          <ellipse cx={s * -14} cy="70" rx="5" ry="1.8" fill="#E85A4F" stroke="#0B1018" strokeWidth="0.4" />
          <rect x={s * -14 - 4} y="64" width="8" height="6" rx="1.5" fill="#1A2230" />
          <rect x={s * -14 - 4} y="64" width="8" height="2" fill="#E85A4F" />
        </g>
      ))}

      {/* Back propellers */}
      <Propeller cx={-158} cy={-64} rx={60} direction={1} />
      <Propeller cx={158} cy={-64} rx={60} direction={-1} />

      {/* ============================== */}
      {/* ===== MAIN BODY ============== */}
      {/* ============================== */}
      <g>
        {/* Body shadow underneath */}
        <ellipse cx="0" cy="34" rx="80" ry="14" fill="#000" opacity="0.3" />

        {/* Lower body — darker underside, slightly wider */}
        <path
          d="M -76 0
             Q -86 24 -50 32
             L 50 32
             Q 86 24 76 0
             Q 60 -8 0 -8
             Q -60 -8 -76 0 Z"
          fill="url(#body-under)"
          stroke="#0B1018"
          strokeWidth="0.7"
        />

        {/* Front coral nose-light strip */}
        <rect x="-26" y="24" width="52" height="3.5" rx="1.5" fill="#E85A4F" opacity="0.85" />
        <rect x="-22" y="24" width="44" height="1.2" rx="0.5" fill="#FFFFFF" opacity="0.55" />

        {/* Upper body — main fuselage, light silver */}
        <path
          d="M -64 -16
             Q -76 -34 -38 -38
             L 38 -38
             Q 76 -34 64 -16
             Q 56 0 0 0
             Q -56 0 -64 -16 Z"
          fill="url(#body-main)"
          stroke="#0B1018"
          strokeWidth="0.7"
        />

        {/* Top canopy highlight */}
        <path
          d="M -52 -30
             Q -24 -38 0 -38
             Q 24 -38 52 -30
             Q 28 -34 0 -34
             Q -28 -34 -52 -30 Z"
          fill="#FFFFFF"
          opacity="0.4"
        />

        {/* Subtle stripe along the side */}
        <path
          d="M -58 -10 Q -32 -16 0 -16 Q 32 -16 58 -10 Q 32 -14 0 -14 Q -32 -14 -58 -10 Z"
          fill="#3A4658"
          opacity="0.5"
        />

        {/* Vent slits on top */}
        {Array.from({ length: 4 }).map((_, i) => (
          <rect
            key={i}
            x={-20 + i * 12}
            y="-26"
            width="6"
            height="2.5"
            rx="0.6"
            fill="#1A2230"
            opacity="0.7"
          />
        ))}

        {/* Body seam line */}
        <line x1="-58" y1="-2" x2="58" y2="-2" stroke="#0B1018" strokeWidth="0.5" opacity="0.5" />

        {/* Front status LED (green) */}
        <circle cx="-20" cy="14" r="1.6" fill="#22c55e">
          {!reduce ? <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" /> : null}
        </circle>
        {/* Front status LED (red) */}
        <circle cx="20" cy="14" r="1.6" fill="#E85A4F">
          {!reduce ? <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" begin="0.7s" /> : null}
        </circle>
      </g>

      {/* ============================== */}
      {/* ===== FRONT ARMS ============== */}
      {/* ============================== */}
      {/* Front-left arm */}
      <g>
        <path
          d="M -30 18 L -154 64 L -142 78 L -22 30 Z"
          fill="url(#arm)"
          stroke="#0B1018"
          strokeWidth="0.5"
        />
        {/* Top highlight on arm */}
        <path
          d="M -30 18 L -154 64 L -150 60 L -28 16 Z"
          fill="#D6E0EC"
          opacity="0.45"
        />
        {/* Joint hub */}
        <circle cx="-30" cy="18" r="6.5" fill="#3D4F6A" stroke="#0B1018" strokeWidth="0.6" />
        <circle cx="-30" cy="18" r="2.5" fill="#1A2230" />
      </g>

      {/* Front-right arm */}
      <g>
        <path
          d="M 30 18 L 154 64 L 142 78 L 22 30 Z"
          fill="url(#arm)"
          stroke="#0B1018"
          strokeWidth="0.5"
        />
        <path
          d="M 30 18 L 154 64 L 150 60 L 28 16 Z"
          fill="#D6E0EC"
          opacity="0.45"
        />
        <circle cx="30" cy="18" r="6.5" fill="#3D4F6A" stroke="#0B1018" strokeWidth="0.6" />
        <circle cx="30" cy="18" r="2.5" fill="#1A2230" />
      </g>

      {/* Front motor pods */}
      {[-1, 1].map((s, i) => (
        <g key={i} transform={`translate(${154 * s}, 64)`}>
          <ellipse cx="0" cy="8" rx="14" ry="3.6" fill="#000" opacity="0.5" />
          <ellipse cx="0" cy="0" rx="13" ry="4.4" fill="#3A4658" stroke="#0B1018" strokeWidth="0.7" />
          <rect x="-13" y="0" width="26" height="12" fill="url(#motor)" />
          <ellipse cx="0" cy="12" rx="13" ry="4" fill="#0B1018" stroke="#000" strokeWidth="0.5" />
          {/* Side highlight */}
          <rect x="-11" y="1" width="2" height="11" fill="#8FA3BF" opacity="0.45" rx="0.6" />
          {/* Nav LED — green on left (port), red on right (starboard) */}
          <rect x="-4" y="3" width="8" height="2.4" fill={i === 0 ? "#22c55e" : "#E85A4F"} rx="0.5" />
          {/* Landing skid */}
          <path
            d={`M ${s * 2} 12 Q ${s * 10} 38 ${s * 18} 72`}
            stroke="#3D4F6A"
            strokeWidth="3.4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Orange foot */}
          <rect x={s * 18 - 5} y="66" width="10" height="8" rx="2" fill="#1A2230" stroke="#0B1018" strokeWidth="0.5" />
          <rect x={s * 18 - 5} y="66" width="10" height="3" rx="1" fill="#E85A4F" />
          <ellipse cx={s * 18} cy="74" rx="6" ry="2" fill="#000" opacity="0.6" />
        </g>
      ))}

      {/* Front propellers */}
      <Propeller cx={-154} cy={56} rx={68} direction={-1} />
      <Propeller cx={154} cy={56} rx={68} direction={1} />

      {/* ============================== */}
      {/* ===== GIMBAL CAMERA (front-mounted) ===== */}
      {/* ============================== */}
      <g transform="translate(0, 28)">
        {/* Mount bracket */}
        <rect x="-13" y="0" width="26" height="6" rx="1.5" fill="#1A2230" stroke="#0B1018" strokeWidth="0.5" />
        {/* Gimbal yoke arms — coming down on both sides */}
        <path
          d="M -10 6 L -10 16 Q -10 22 -4 22"
          stroke="#1A2230"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 10 6 L 10 16 Q 10 22 4 22"
          stroke="#1A2230"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Camera body */}
        <rect x="-12" y="14" width="24" height="20" rx="2.5" fill="#1A2230" stroke="#0B1018" strokeWidth="0.7" />
        {/* Camera top accent */}
        <rect x="-10" y="14" width="20" height="3" fill="#3A4658" />
        {/* Side details */}
        <line x1="-10" y1="20" x2="-10" y2="32" stroke="#3A4658" strokeWidth="0.5" />
        <line x1="10" y1="20" x2="10" y2="32" stroke="#3A4658" strokeWidth="0.5" />
        {/* Lens housing — large circular */}
        <circle cx="0" cy="24" r="10" fill="#0B1018" stroke="#0B1018" strokeWidth="0.7" />
        {/* Lens metal ring */}
        <circle cx="0" cy="24" r="9" fill="none" stroke="#5A6F8A" strokeWidth="0.6" />
        {/* Inner ring */}
        <circle cx="0" cy="24" r="7.5" fill="none" stroke="#3A4658" strokeWidth="0.5" />
        {/* Lens glass */}
        <circle cx="0" cy="24" r="6.5" fill="url(#lens)" />
        {/* Lens reflection highlight */}
        <ellipse cx="-2" cy="21.5" rx="2.8" ry="1.8" fill="#FFFFFF" opacity="0.45" />
        {/* Inner aperture ring */}
        <circle cx="0" cy="24" r="3.5" fill="none" stroke="#5A6F8A" strokeWidth="0.5" />
        {/* REC red dot */}
        <circle cx="0" cy="24" r="1" fill="#E85A4F">
          {!reduce ? <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" /> : null}
        </circle>
        {/* Small accessory antenna on top */}
        <line x1="0" y1="0" x2="0" y2="-6" stroke="#E85A4F" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="0" cy="-7" r="1.3" fill="#E85A4F">
          {!reduce ? <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" /> : null}
        </circle>
      </g>
    </svg>
  );
}
