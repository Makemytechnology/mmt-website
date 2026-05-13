"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated illustration for the "Complete 5G Network" package showing
 * a real mobile-to-mobile call across the MMT 5G setup.
 *
 * Topology (static):
 *   - Studio gNB on the left (with antennas)
 *   - UE-1 (Caller) showing a green "Calling UE-2" screen
 *   - UE-2 (Callee) showing a coral "Incoming UE-1" ringing screen
 *   - MMT SIM cards inserted in the back of each UE (gold)
 *   - Studio Core rack on the right with a UDM badge holding the SIM profiles
 *
 * Runtime call flow — 4 numbered, sequenced "trombone" arrows:
 *   ① UE-1 → gNB     : caller's voice/data uplink (coral)
 *   ② gNB  → UPF     : N3 GTP-U uplink to the Core (sky)
 *   ③ UPF  → gNB     : N3 GTP-U downlink — UPF routes the call back (sky)
 *   ④ gNB  → UE-2    : callee receives the radio downlink (coral)
 */
export function FiveGSetupAnimation({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="-280 -130 560 260"
      className={className}
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="pkg1-server" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D4F6A" />
          <stop offset="100%" stopColor="#0E141E" />
        </linearGradient>
        <linearGradient id="pkg1-panel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8D2E0" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#A8B6C9" />
        </linearGradient>
        <linearGradient id="pkg1-tower" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2A3344" />
          <stop offset="50%" stopColor="#8FA3BF" />
          <stop offset="100%" stopColor="#1A2230" />
        </linearGradient>
        <radialGradient id="pkg1-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E85A4F" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E85A4F" stopOpacity="0" />
        </radialGradient>
        {/* Arrowheads for the 5G attach call flow */}
        <marker
          id="arr-coral"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#E85A4F" />
        </marker>
        <marker
          id="arr-sky"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#4A90C2" />
        </marker>
        <marker
          id="arr-gold"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#F2A65A" />
        </marker>
      </defs>

      {/* Ground line */}
      <line x1="-260" y1="95" x2="260" y2="95" stroke="#3D4F6A" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.5" />

      {/* ====== LEFT: gNB TOWER ====== */}
      <g transform="translate(-200, 0)">
        {/* Halo */}
        <circle cx="0" cy="-50" r="44" fill="url(#pkg1-halo)" />
        {/* Tripod */}
        <line x1="0" y1="20" x2="-20" y2="80" stroke="url(#pkg1-tower)" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="20" x2="20" y2="80" stroke="url(#pkg1-tower)" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="20" x2="0" y2="80" stroke="url(#pkg1-tower)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <ellipse cx="-20" cy="83" rx="4" ry="1.5" fill="#0E141E" />
        <ellipse cx="20" cy="83" rx="4" ry="1.5" fill="#0E141E" />
        <ellipse cx="0" cy="83" rx="4" ry="1.5" fill="#0E141E" />
        {/* Pole */}
        <rect x="-2.5" y="-32" width="5" height="52" fill="url(#pkg1-tower)" />
        {/* Panel antenna */}
        <rect x="-14" y="-78" width="28" height="48" rx="2" fill="url(#pkg1-panel)" stroke="#5A6F8A" strokeWidth="0.6" />
        <rect x="-11" y="-75" width="22" height="42" rx="1" fill="none" stroke="#B5C0D0" strokeWidth="0.4" opacity="0.5" />
        <line x1="-5" y1="-72" x2="-5" y2="-36" stroke="#8FA3BF" strokeWidth="0.4" opacity="0.5" />
        <line x1="5" y1="-72" x2="5" y2="-36" stroke="#8FA3BF" strokeWidth="0.4" opacity="0.5" />
        <rect x="-14" y="-36" width="28" height="4" fill="#0B1F3A" />
        <text x="0" y="-33" textAnchor="middle" fontSize="3" fontWeight="800" fill="#FFFFFF" letterSpacing="0.6">MMT 5G</text>
        {/* 3 rod antennas */}
        <line x1="-8" y1="-78" x2="-8" y2="-94" stroke="#1A2230" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="0" y1="-78" x2="0" y2="-100" stroke="#1A2230" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="-78" x2="8" y2="-94" stroke="#1A2230" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="0" cy="-100" r="1.5" fill="#E85A4F">
          {!reduce ? <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" /> : null}
        </circle>
        {/* Label */}
        <text x="0" y="106" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.6">
          Studio gNB
        </text>
      </g>

      {/* ====== 2 UEs in a call: UE-1 = caller, UE-2 = callee ====== */}
      {[-40, 40].map((cx, idx) => {
        const isCaller = idx === 0;
        return (
          <g key={idx} transform={`translate(${cx}, 18)`}>
            {/* Shadow */}
            <rect x="-12" y="-30" width="24" height="56" rx="4.5" fill="#000" opacity="0.4" transform="translate(2,3)" />
            {/* Body */}
            <rect x="-12" y="-30" width="24" height="56" rx="4.5" fill="#1A1A1A" stroke="#3D3D3D" strokeWidth="0.7" />
            {/* Screen */}
            <rect x="-10" y="-28" width="20" height="50" rx="2.5" fill="#0B1F3A" />
            {/* Notch */}
            <rect x="-3" y="-27" width="6" height="1.4" rx="0.7" fill="#0E141E" />
            {/* 5G label */}
            <text x="-7" y="-22" fontSize="3" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="800">5G</text>
            {/* Signal bars */}
            <rect x="0" y="-25" width="1.2" height="2" fill="#22c55e" rx="0.2" />
            <rect x="2" y="-26" width="1.2" height="3" fill="#22c55e" rx="0.2" />
            <rect x="4" y="-27" width="1.2" height="4" fill="#22c55e" rx="0.2" />
            <rect x="6" y="-28" width="1.2" height="5" fill="#22c55e" rx="0.2" />

            {/* ===== Call UI on the screen ===== */}
            {isCaller ? (
              <g>
                {/* Caller screen — green outline, "Calling…" UI */}
                <rect x="-9" y="-17" width="18" height="34" rx="1.5" fill="#0B1018" stroke="#22c55e" strokeWidth="0.6" />
                {/* Avatar circle */}
                <circle cx="0" cy="-10" r="3.6" fill="#22c55e" opacity="0.85" />
                <text x="0" y="-9" textAnchor="middle" fontSize="3.4" fontFamily="ui-monospace,monospace" fontWeight="800" fill="#0B1018">
                  U2
                </text>
                {/* "Calling…" text */}
                <text x="0" y="-2.5" textAnchor="middle" fontSize="2.4" fill="#22c55e" fontFamily="ui-monospace,monospace" fontWeight="700">
                  CALLING
                </text>
                <text x="0" y="1" textAnchor="middle" fontSize="2.2" fill="#FFFFFF" fontFamily="ui-monospace,monospace" opacity="0.7">
                  UE-2
                </text>
                {/* Green call button */}
                <circle cx="0" cy="11" r="3.4" fill="#22c55e" />
                {/* Phone-up icon */}
                <path d="M -1.5 11.5 L 1.5 8.5 L 0.4 8 L 1.6 7 L 2.4 9 L 0.6 10.4 Z" fill="#0B1018" />
              </g>
            ) : (
              <g>
                {/* Callee screen — coral outline, ringing UI */}
                <rect x="-9" y="-17" width="18" height="34" rx="1.5" fill="#0B1018" stroke="#E85A4F" strokeWidth="0.6" />
                {/* Avatar */}
                <circle cx="0" cy="-10" r="3.6" fill="#E85A4F" opacity="0.85" />
                <text x="0" y="-9" textAnchor="middle" fontSize="3.4" fontFamily="ui-monospace,monospace" fontWeight="800" fill="#0B1018">
                  U1
                </text>
                {/* "Incoming…" */}
                <text x="0" y="-2.5" textAnchor="middle" fontSize="2.4" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="700">
                  INCOMING
                </text>
                <text x="0" y="1" textAnchor="middle" fontSize="2.2" fill="#FFFFFF" fontFamily="ui-monospace,monospace" opacity="0.7">
                  UE-1
                </text>
                {/* Pulsing ring animation around avatar */}
                {!reduce ? (
                  <circle cx="0" cy="-10" r="3.6" fill="none" stroke="#E85A4F" strokeWidth="0.6">
                    <animate attributeName="r" values="3.6;7;3.6" dur="1.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                ) : null}
                {/* Accept (green) + decline (red) buttons */}
                <circle cx="-4" cy="11" r="2.8" fill="#22c55e" />
                <circle cx="4" cy="11" r="2.8" fill="#E85A4F" />
              </g>
            )}

            {/* Home bar */}
            <rect x="-4" y="20" width="8" height="1.2" rx="0.5" fill="#3D3D3D" />
            {/* Side button */}
            <rect x="12" y="-18" width="0.6" height="7" fill="#3D3D3D" />

            {/* ===== SIM card peeking out from the back of the UE ===== */}
            <g transform="translate(-13, 8) rotate(-20)">
              <rect x="-8" y="-5" width="14" height="10" rx="1.2" fill="#F2A65A" stroke="#0E141E" strokeWidth="0.4" />
              <rect x="-6" y="-3" width="6" height="6" rx="0.6" fill="#D6A356" stroke="#0E141E" strokeWidth="0.3" />
              <line x1="-6" y1="-1" x2="0" y2="-1" stroke="#0E141E" strokeWidth="0.3" />
              <line x1="-6" y1="1" x2="0" y2="1" stroke="#0E141E" strokeWidth="0.3" />
              <line x1="-3" y1="-3" x2="-3" y2="3" stroke="#0E141E" strokeWidth="0.3" />
              <text x="3" y="3" fontSize="2.2" fontWeight="800" fill="#0E141E">M</text>
            </g>

            {/* Role label under each UE */}
            <text
              x="0"
              y="32"
              textAnchor="middle"
              fontSize="5.2"
              fill={isCaller ? "#22c55e" : "#E85A4F"}
              fontFamily="ui-monospace,monospace"
              fontWeight="800"
              letterSpacing="0.5"
            >
              {isCaller ? "UE-1 · CALLER" : "UE-2 · CALLEE"}
            </text>
          </g>
        );
      })}

      {/* Bottom caption */}
      <text x="0" y="68" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.6">
        Mobile-to-mobile call
      </text>

      {/* ============================================================
          UE-1 → UE-2 MOBILE-TO-MOBILE CALL FLOW
          The "trombone" path: voice/data goes up from UE-1, through the
          gNB to the Core's UPF, the UPF routes it back to the gNB, and
          it comes down to UE-2. 4 numbered steps light up in sequence.

          ① UE-1 → gNB    : uplink radio (caller's voice/data)
          ② gNB  → UPF    : N3 uplink GTP-U tunnel
          ③ UPF  → gNB    : N3 downlink GTP-U tunnel (routed to UE-2)
          ④ gNB  → UE-2   : downlink radio (callee receives the call)
          ============================================================ */}
      {(() => {
        // Common animation cycle for the flow (4 steps, ~1s each).
        const cycle = 4; // seconds
        const dashed = "3 4";

        // Helper to render a flow arrow + label + numbered badge.
        const FlowArrow = ({
          d,
          stroke,
          marker,
          delay,
          step,
          labelX,
          labelY,
          label,
        }: {
          d: string;
          stroke: string;
          marker: string;
          delay: number;
          step: number;
          labelX: number;
          labelY: number;
          label: string;
        }) => (
          <g>
            {/* Static dashed underlay so the path is always visible */}
            <path
              d={d}
              fill="none"
              stroke={stroke}
              strokeWidth="1.1"
              strokeDasharray={dashed}
              strokeLinecap="round"
              opacity="0.35"
            />
            {/* Solid arrow drawing in on each cycle */}
            {!reduce ? (
              <motion.path
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth="1.8"
                strokeLinecap="round"
                markerEnd={`url(#${marker})`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: cycle,
                  times: [0, 0.15, 0.6, 1],
                  repeat: Infinity,
                  delay,
                  ease: "easeOut",
                }}
              />
            ) : (
              <path
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth="1.6"
                strokeLinecap="round"
                markerEnd={`url(#${marker})`}
              />
            )}
            {/* Step badge */}
            <g transform={`translate(${labelX}, ${labelY})`}>
              <circle cx="0" cy="0" r="7" fill="#0B1018" stroke={stroke} strokeWidth="1" />
              <text
                x="0"
                y="2.6"
                textAnchor="middle"
                fontSize="7"
                fill={stroke}
                fontFamily="ui-monospace,monospace"
                fontWeight="800"
              >
                {step}
              </text>
              {/* Label */}
              <text
                x="11"
                y="2"
                fontSize="6"
                fill="#FFFFFF"
                fontFamily="ui-monospace,monospace"
                fontWeight="700"
                opacity="0.85"
                letterSpacing="0.4"
              >
                {label}
              </text>
            </g>
          </g>
        );

        return (
          <>
            {/* ① UE-1 → gNB (caller sends voice/data uplink) */}
            <FlowArrow
              d="M -52 4 Q -130 -26 -188 -54"
              stroke="#E85A4F"
              marker="arr-coral"
              delay={0}
              step={1}
              labelX={-140}
              labelY={-34}
              label="UE-1 UPLINK"
            />

            {/* ② gNB → Core / UPF (N3 GTP-U uplink) */}
            <FlowArrow
              d="M -180 -8 Q 0 -52 168 -22"
              stroke="#4A90C2"
              marker="arr-sky"
              delay={1}
              step={2}
              labelX={-30}
              labelY={-42}
              label="N3 UPLINK"
            />

            {/* ③ Core / UPF → gNB (N3 GTP-U downlink — UPF routes call back) */}
            <FlowArrow
              d="M 168 14 Q 0 56 -180 8"
              stroke="#4A90C2"
              marker="arr-sky"
              delay={2}
              step={3}
              labelX={30}
              labelY={48}
              label="N3 DOWNLINK"
            />

            {/* ④ gNB → UE-2 (callee receives downlink radio) */}
            <FlowArrow
              d="M -188 -54 Q -90 -16 28 4"
              stroke="#E85A4F"
              marker="arr-coral"
              delay={3}
              step={4}
              labelX={-80}
              labelY={-20}
              label="UE-2 DOWNLINK"
            />
          </>
        );
      })()}

      {/* ====== RIGHT: CORE SERVER ====== */}
      <g transform="translate(200, 0)">
        {/* Server rack */}
        <rect x="-40" y="-50" width="80" height="80" rx="3" fill="url(#pkg1-server)" stroke="#5A6F8A" strokeWidth="0.8" />
        {/* Top vent */}
        <rect x="-40" y="-50" width="80" height="6" fill="#0E141E" />
        <text x="0" y="-46" textAnchor="middle" fontSize="3.5" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="800" letterSpacing="0.6">
          MMT STUDIO CORE
        </text>
        {/* Rack units */}
        {Array.from({ length: 4 }).map((_, i) => (
          <g key={i} transform={`translate(0, ${-32 + i * 14})`}>
            <rect x="-36" y="0" width="72" height="10" rx="1" fill="#0B1018" stroke="#3D4F6A" strokeWidth="0.4" />
            {/* LEDs */}
            <circle cx="-30" cy="5" r="0.9" fill="#22c55e">
              {!reduce ? (
                <animate attributeName="opacity" values="1;0.3;1" dur={`${1.4 + i * 0.2}s`} repeatCount="indefinite" />
              ) : null}
            </circle>
            <circle cx="-26" cy="5" r="0.9" fill="#F2A65A" />
            <circle cx="-22" cy="5" r="0.9" fill={i === 1 ? "#E85A4F" : "#3D4F6A"} />
            {/* Drive bays */}
            {Array.from({ length: 4 }).map((_, j) => (
              <rect
                key={j}
                x={-12 + j * 11}
                y="2"
                width="9"
                height="6"
                rx="0.5"
                fill="#1A2230"
                stroke="#3D4F6A"
                strokeWidth="0.3"
              />
            ))}
            {/* Slot label */}
            <text x="32" y="6" textAnchor="end" fontSize="2.5" fill="#5A6F8A" fontFamily="ui-monospace,monospace">
              {["AMF", "SMF", "UPF", "AUSF"][i]}
            </text>
          </g>
        ))}
        {/* Bottom ports */}
        <rect x="-36" y="24" width="72" height="4" fill="#0E141E" />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={-32 + i * 8} y="25" width="5" height="2" fill="#3D4F6A" />
        ))}

        {/* ===== UDM badge with embedded SIM showing the SIM profile is
                 pre-loaded in the core — paired with the SIMs in the UEs ===== */}
        <g transform="translate(30, -56)">
          {/* Badge background */}
          <rect x="-16" y="-9" width="32" height="18" rx="2" fill="#0B1018" stroke="#F2A65A" strokeWidth="0.8" />
          {/* Mini SIM card icon */}
          <rect x="-13" y="-6" width="10" height="12" rx="1" fill="#F2A65A" stroke="#0E141E" strokeWidth="0.4" />
          <rect x="-11" y="-4" width="6" height="6" rx="0.6" fill="#D6A356" stroke="#0E141E" strokeWidth="0.3" />
          {/* Label */}
          <text x="-1" y="-1" fontSize="3.4" fill="#F2A65A" fontFamily="ui-monospace,monospace" fontWeight="800" letterSpacing="0.4">
            UDM
          </text>
          <text x="-1" y="5" fontSize="2.4" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="600" opacity="0.75">
            profile
          </text>
          {/* Pulsing ring to draw attention */}
          {!reduce ? (
            <circle cx="-8" cy="0" r="6" fill="none" stroke="#F2A65A" strokeWidth="0.6">
              <animate attributeName="r" values="6;9;6" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2.6s" repeatCount="indefinite" />
            </circle>
          ) : null}
        </g>

        {/* Label */}
        <text x="0" y="48" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.6">
          Studio Core
        </text>
      </g>
    </svg>
  );
}

/**
 * Animated illustration for the "Integrated 5G Lab" package (Package 3):
 * Studio Academy LMS at the top orchestrates everything from Packages 1 + 2.
 *
 * Topology:
 *   - Studio Academy LMS (laptop with course/lab UI) — top centre
 *   - Three control branches going down:
 *       ① Studio Fleet (orchestrator)  ② Studio Core (5G SA core)  ③ Studio gNB
 *   - 2× UEs at the bottom centre — driven by Studio Fleet over the wired LAN
 *   - SIMs stay inside the UEs and pre-loaded into the Core's UDM
 *
 * Animated flows:
 *   - Gold "control" packets flowing down from LMS to each product
 *   - Sky "telemetry" packets flowing up from each product back to LMS
 *   - Coral radio link gNB ↔ UEs (the live data plane carrying lab traffic)
 */
export function IntegratedLabAnimation({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  // Small reusable animated packet helper — moves along an offset path.
  const Packet = ({
    path,
    color,
    delay,
    duration = 2.6,
    radius = 2.8,
  }: {
    path: string;
    color: string;
    delay: number;
    duration?: number;
    radius?: number;
  }) => {
    if (reduce) return null;
    return (
      <motion.circle
        r={radius}
        fill={color}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          offsetDistance: ["0%", "100%"],
        }}
        transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
        style={{
          offsetPath: `path('${path}')`,
          filter: `drop-shadow(0 0 5px ${color})`,
        }}
      />
    );
  };

  return (
    <svg
      viewBox="-300 -160 600 320"
      className={className}
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="pkg3-laptop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D4F6A" />
          <stop offset="100%" stopColor="#0E141E" />
        </linearGradient>
        <linearGradient id="pkg3-card" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E2632" />
          <stop offset="100%" stopColor="#0B1018" />
        </linearGradient>
        <linearGradient id="pkg3-panel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8D2E0" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#A8B6C9" />
        </linearGradient>
        <radialGradient id="pkg3-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F2A65A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F2A65A" stopOpacity="0" />
        </radialGradient>
        {/* Arrowheads */}
        <marker id="pkg3-arr-gold" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#F2A65A" />
        </marker>
        <marker id="pkg3-arr-sky" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#4A90C2" />
        </marker>
        <marker id="pkg3-arr-coral" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#E85A4F" />
        </marker>
      </defs>

      {/* Ground line */}
      <line x1="-280" y1="148" x2="280" y2="148" stroke="#3D4F6A" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.5" />

      {/* ===================== TOP: STUDIO ACADEMY LMS ===================== */}
      <g transform="translate(0, -110)">
        {/* Halo */}
        <ellipse cx="0" cy="0" rx="120" ry="40" fill="url(#pkg3-halo)" />

        {/* Laptop lid */}
        <rect x="-92" y="-32" width="184" height="60" rx="3" fill="#1A2230" stroke="#5A6F8A" strokeWidth="0.8" />
        <rect x="-86" y="-28" width="172" height="52" rx="2" fill="url(#pkg3-laptop)" stroke="#0B1018" strokeWidth="0.4" />
        {/* Title bar */}
        <rect x="-86" y="-28" width="172" height="9" fill="#0E141E" />
        <circle cx="-80" cy="-23" r="1.2" fill="#E85A4F" />
        <circle cx="-75" cy="-23" r="1.2" fill="#F2A65A" />
        <circle cx="-70" cy="-23" r="1.2" fill="#22c55e" />
        <text x="0" y="-21" textAnchor="middle" fontSize="3.4" fill="#F2A65A" fontFamily="ui-monospace,monospace" fontWeight="800" letterSpacing="0.5">
          MMT STUDIO ACADEMY · LAB CONTROL
        </text>

        {/* Three "Lab" tile cards on the LMS screen */}
        {[
          { x: -70, label: "LAB 1", text: "5G ATTACH", colour: "#22c55e" },
          { x: -10, label: "LAB 2", text: "VoNR CALL", colour: "#E85A4F" },
          { x: 50, label: "LAB 3", text: "DRIVE-TEST", colour: "#4A90C2" },
        ].map((t, i) => (
          <g key={i} transform={`translate(${t.x}, -10)`}>
            <rect x="0" y="0" width="32" height="22" rx="1.5" fill="url(#pkg3-card)" stroke={t.colour} strokeWidth="0.6" />
            <text x="3" y="5.5" fontSize="2.6" fill={t.colour} fontFamily="ui-monospace,monospace" fontWeight="800">
              {t.label}
            </text>
            <text x="3" y="11" fontSize="2.4" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="600" opacity="0.85">
              {t.text}
            </text>
            {/* Mini KPI bars */}
            {Array.from({ length: 5 }).map((_, j) => (
              <motion.rect
                key={j}
                x={3 + j * 5.5}
                y={20}
                width="3.6"
                rx="0.3"
                fill={t.colour}
                opacity="0.7"
                initial={{ height: 1, y: 20 }}
                animate={reduce ? undefined : { height: [1, 3 + Math.random() * 6, 1, 4 + Math.random() * 5, 1], y: [20, 20 - (3 + Math.random() * 6), 20, 20 - (4 + Math.random() * 5), 20] }}
                transition={{ duration: 3.2 + i * 0.4, delay: j * 0.12, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </g>
        ))}

        {/* Hinge */}
        <rect x="-96" y="28" width="192" height="3" fill="#0E141E" />
        {/* Base */}
        <path d="M -110 31 L 110 31 L 122 50 L -122 50 Z" fill="url(#pkg3-laptop)" stroke="#0B1018" strokeWidth="0.7" strokeLinejoin="round" />
        <path d="M -110 31 L 110 31 L 110 33 L -110 33 Z" fill="#5A6F8A" opacity="0.5" />
        {/* Trackpad */}
        <rect x="-22" y="40" width="44" height="6" rx="1" fill="#1A2230" stroke="#3D4F6A" strokeWidth="0.3" />
        {/* AI Tutor badge on base */}
        <text x="0" y="44.5" textAnchor="middle" fontSize="3" fill="#F2A65A" fontFamily="ui-monospace,monospace" fontWeight="800" letterSpacing="0.5" opacity="0.6">
          AI TUTOR
        </text>

        {/* Label */}
        <text x="0" y="68" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.6">
          Studio Academy LMS
        </text>
      </g>

      {/* ===================== BOTTOM ROW: 3 controlled products ===================== */}

      {/* --- Studio Fleet (left) --- */}
      <g transform="translate(-200, 80)">
        <rect x="-44" y="-30" width="88" height="60" rx="3" fill="url(#pkg3-card)" stroke="#5A6F8A" strokeWidth="0.7" />
        <rect x="-44" y="-30" width="88" height="8" fill="#0E141E" />
        <text x="0" y="-24.5" textAnchor="middle" fontSize="3" fill="#4A90C2" fontFamily="ui-monospace,monospace" fontWeight="800" letterSpacing="0.4">
          STUDIO FLEET
        </text>
        {/* KPI rows */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0, ${-15 + i * 12})`}>
            <rect x="-40" y="0" width="80" height="9" rx="1" fill="#0B1018" stroke="#3D4F6A" strokeWidth="0.3" />
            <circle cx="-36" cy="4.5" r="1" fill={i === 0 ? "#22c55e" : i === 1 ? "#F2A65A" : "#E85A4F"}>
              {!reduce && i === 0 ? <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" /> : null}
            </circle>
            <text x="-30" y="6" fontSize="2.4" fill="#FFFFFF" fontFamily="ui-monospace,monospace" opacity="0.75">
              {["UE-01 attached", "UE-02 attached", "Run · Lab 2"][i]}
            </text>
          </g>
        ))}
        <text x="0" y="44" textAnchor="middle" fontSize="6" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.5">
          Studio Fleet
        </text>
      </g>

      {/* --- Studio gNB (centre) --- */}
      <g transform="translate(0, 84)">
        {/* Tripod */}
        <line x1="0" y1="20" x2="-14" y2="58" stroke="#5A6F8A" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="0" y1="20" x2="14" y2="58" stroke="#5A6F8A" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="0" y1="20" x2="0" y2="58" stroke="#5A6F8A" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        <ellipse cx="-14" cy="60" rx="3" ry="1.2" fill="#0E141E" />
        <ellipse cx="14" cy="60" rx="3" ry="1.2" fill="#0E141E" />
        <ellipse cx="0" cy="60" rx="3" ry="1.2" fill="#0E141E" />
        {/* Pole */}
        <rect x="-2" y="-20" width="4" height="40" fill="#5A6F8A" />
        {/* Panel */}
        <rect x="-12" y="-50" width="24" height="34" rx="1.5" fill="url(#pkg3-panel)" stroke="#5A6F8A" strokeWidth="0.5" />
        <rect x="-10" y="-48" width="20" height="30" rx="1" fill="none" stroke="#B5C0D0" strokeWidth="0.3" opacity="0.5" />
        <rect x="-12" y="-18" width="24" height="3" fill="#0B1F3A" />
        <text x="0" y="-15.7" textAnchor="middle" fontSize="2.2" fontWeight="800" fill="#FFFFFF" letterSpacing="0.4">MMT 5G</text>
        {/* 3 rod antennas */}
        <line x1="-7" y1="-50" x2="-7" y2="-60" stroke="#1A2230" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="0" y1="-50" x2="0" y2="-64" stroke="#1A2230" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7" y1="-50" x2="7" y2="-60" stroke="#1A2230" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="0" cy="-64" r="1.2" fill="#E85A4F">
          {!reduce ? <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" /> : null}
        </circle>
        <text x="0" y="74" textAnchor="middle" fontSize="6" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.5">
          Studio gNB
        </text>
      </g>

      {/* --- Studio Core (right) --- */}
      <g transform="translate(200, 80)">
        <rect x="-44" y="-30" width="88" height="60" rx="3" fill="url(#pkg3-card)" stroke="#5A6F8A" strokeWidth="0.7" />
        <rect x="-44" y="-30" width="88" height="8" fill="#0E141E" />
        <text x="0" y="-24.5" textAnchor="middle" fontSize="3" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="800" letterSpacing="0.4">
          STUDIO CORE
        </text>
        {/* Rack rows */}
        {["AMF", "SMF", "UPF", "AUSF"].map((nf, i) => (
          <g key={nf} transform={`translate(0, ${-19 + i * 11})`}>
            <rect x="-40" y="0" width="80" height="8" rx="0.8" fill="#0B1018" stroke="#3D4F6A" strokeWidth="0.3" />
            <circle cx="-36" cy="4" r="0.9" fill="#22c55e">
              {!reduce && i === 0 ? <animate attributeName="opacity" values="1;0.3;1" dur={`${1.4 + i * 0.2}s`} repeatCount="indefinite" /> : null}
            </circle>
            <circle cx="-33" cy="4" r="0.9" fill="#F2A65A" />
            {/* Drive bays */}
            {Array.from({ length: 4 }).map((_, j) => (
              <rect key={j} x={-26 + j * 12} y="1.6" width="9" height="5" rx="0.4" fill="#1A2230" stroke="#3D4F6A" strokeWidth="0.2" />
            ))}
            <text x="36" y="5.2" textAnchor="end" fontSize="2.2" fill="#5A6F8A" fontFamily="ui-monospace,monospace">
              {nf}
            </text>
          </g>
        ))}
        {/* UDM mini-badge */}
        <g transform="translate(22, 23)">
          <rect x="0" y="0" width="20" height="6" rx="1" fill="#0B1018" stroke="#F2A65A" strokeWidth="0.5" />
          <text x="10" y="4.4" textAnchor="middle" fontSize="2.6" fill="#F2A65A" fontFamily="ui-monospace,monospace" fontWeight="800">
            UDM · SIM
          </text>
        </g>
        <text x="0" y="44" textAnchor="middle" fontSize="6" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.5">
          Studio Core
        </text>
      </g>

      {/* --- 2 UEs (under the gNB) --- */}
      {[-22, 22].map((cx, idx) => (
        <g key={idx} transform={`translate(${cx}, 50)`}>
          <rect x="-8" y="-12" width="16" height="28" rx="2.5" fill="#1A1A1A" stroke="#3D3D3D" strokeWidth="0.5" />
          <rect x="-6.5" y="-10" width="13" height="25" rx="1.5" fill="#0B1F3A" />
          <rect x="-2" y="-9.5" width="4" height="0.9" rx="0.4" fill="#0E141E" />
          <text x="-4.5" y="-6" fontSize="2.2" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="800">5G</text>
          <rect x="0" y="-7.5" width="0.7" height="1.4" fill="#22c55e" rx="0.1" />
          <rect x="1.2" y="-8" width="0.7" height="1.9" fill="#22c55e" rx="0.1" />
          <rect x="2.4" y="-8.5" width="0.7" height="2.4" fill="#22c55e" rx="0.1" />
          <rect x="3.6" y="-9" width="0.7" height="2.9" fill="#22c55e" rx="0.1" />
          {/* call status */}
          <rect x="-5" y="-3" width="10" height="14" rx="1" fill="#0B1018" stroke={idx === 0 ? "#22c55e" : "#E85A4F"} strokeWidth="0.4" />
          <circle cx="0" cy="2" r="2" fill={idx === 0 ? "#22c55e" : "#E85A4F"} opacity="0.85" />
          {/* SIM */}
          <rect x="-10" y="6" width="6" height="4" rx="0.6" fill="#F2A65A" stroke="#0E141E" strokeWidth="0.3" transform={`translate(0,0) rotate(-15 ${-7} 8)`} />
        </g>
      ))}
      <text x="0" y="84" textAnchor="middle" fontSize="6" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.5">
        2× UE handsets
      </text>

      {/* ===================== CONTROL CHANNELS (LMS → each product) ===================== */}
      {/* Static dashed underlay */}
      <g stroke="#F2A65A" strokeWidth="1" strokeDasharray="3 4" strokeLinecap="round" fill="none" opacity="0.4">
        <path d="M -38 -30 Q -120 0 -200 48" />
        <path d="M 0 -30 Q 0 0 0 22" />
        <path d="M 38 -30 Q 120 0 200 48" />
      </g>

      {/* Animated gold control packets going DOWN from LMS to each product */}
      <Packet path="M -38 -30 Q -120 0 -200 48" color="#F2A65A" delay={0} />
      <Packet path="M 0 -30 Q 0 0 0 22" color="#F2A65A" delay={0.4} />
      <Packet path="M 38 -30 Q 120 0 200 48" color="#F2A65A" delay={0.8} />

      {/* Animated sky telemetry packets going UP from each product to LMS */}
      <Packet path="M -200 48 Q -120 0 -38 -30" color="#4A90C2" delay={1.6} duration={2.4} radius={2.4} />
      <Packet path="M 0 22 Q 0 0 0 -30" color="#4A90C2" delay={2.0} duration={2.4} radius={2.4} />
      <Packet path="M 200 48 Q 120 0 38 -30" color="#4A90C2" delay={2.4} duration={2.4} radius={2.4} />

      {/* Fleet ↔ UEs (Wi-Fi LAN: orchestrates phones via Studio Field) */}
      <g stroke="#4A90C2" strokeWidth="0.9" strokeDasharray="2 3" strokeLinecap="round" fill="none" opacity="0.45">
        <path d="M -156 60 Q -90 56 -38 54" />
      </g>
      <Packet path="M -156 60 Q -90 56 -38 54" color="#4A90C2" delay={0.6} duration={2.4} radius={2.2} />

      {/* gNB ↔ Core (N2/N3 wired backhaul) */}
      <g stroke="#4A90C2" strokeWidth="0.9" strokeDasharray="2 3" strokeLinecap="round" fill="none" opacity="0.45">
        <path d="M 14 60 Q 90 70 156 60" />
      </g>
      <Packet path="M 14 60 Q 90 70 156 60" color="#4A90C2" delay={1.2} duration={2.4} radius={2.2} />

      {/* Live radio link gNB ↔ UEs (coral) */}
      {!reduce ? (
        <>
          <motion.circle
            cx="0"
            cy="20"
            r="14"
            fill="none"
            stroke="#E85A4F"
            strokeWidth="0.9"
            strokeDasharray="2 4"
            initial={{ opacity: 0.6, scale: 0.6 }}
            animate={{ opacity: 0, scale: 1.7 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: "0px 20px" }}
          />
          <motion.circle
            cx="0"
            cy="20"
            r="14"
            fill="none"
            stroke="#E85A4F"
            strokeWidth="0.9"
            strokeDasharray="2 4"
            initial={{ opacity: 0.6, scale: 0.6 }}
            animate={{ opacity: 0, scale: 1.7 }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "0px 20px" }}
          />
        </>
      ) : null}

      {/* Caption */}
      <text x="0" y="138" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.6">
        LMS-orchestrated integrated lab
      </text>
    </svg>
  );
}

/**
 * Animated illustration for the "5G Test & Drive-test Suite" package:
 * Multiple phones running Studio Field, orchestrated by Studio Fleet
 * (dashboard server), with live KPI streams flowing.
 */
export function FleetAndroidAnimation({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="-280 -130 560 260"
      className={className}
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id="pkg2-server" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D4F6A" />
          <stop offset="100%" stopColor="#0E141E" />
        </linearGradient>
        <radialGradient id="pkg2-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4A90C2" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4A90C2" stopOpacity="0" />
        </radialGradient>
        {/* Brushed-aluminium laptop base gradient (chamfered top, dark underside) */}
        <linearGradient id="pkg2-laptop-base" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A6F8A" />
          <stop offset="35%" stopColor="#3D4F6A" />
          <stop offset="100%" stopColor="#0B1018" />
        </linearGradient>
        {/* Soft shadow filter for the laptop base */}
        <filter id="pkg2-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      {/* Ground line */}
      <line x1="-260" y1="95" x2="260" y2="95" stroke="#3D4F6A" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.5" />

      {/* ====== LEFT: 3 phones (drive-test fleet) ====== */}
      {[-1, 0, 1].map((i) => {
        const cx = -200 + i * 50;
        const cy = i === 0 ? -10 : 0;
        return (
          <g key={i} transform={`translate(${cx}, ${cy})`}>
            <rect x="-12" y="-30" width="24" height="56" rx="4" fill="#000" opacity="0.4" transform="translate(2,3)" />
            <rect x="-12" y="-30" width="24" height="56" rx="4" fill="#1A1A1A" stroke="#3D3D3D" strokeWidth="0.6" />
            <rect x="-10" y="-28" width="20" height="50" rx="2.5" fill="#0B1F3A" />
            {/* Top notch */}
            <rect x="-3" y="-27" width="6" height="1.4" rx="0.7" fill="#0E141E" />
            {/* 5G label */}
            <text x="-7" y="-22" fontSize="3" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="800">5G</text>
            <rect x="0" y="-25" width="1.2" height="2" fill="#22c55e" rx="0.2" />
            <rect x="2" y="-26" width="1.2" height="3" fill="#22c55e" rx="0.2" />
            <rect x="4" y="-27" width="1.2" height="4" fill="#22c55e" rx="0.2" />
            <rect x="6" y="-28" width="1.2" height="5" fill="#22c55e" rx="0.2" />
            {/* KPI bars on screen */}
            <rect x="-8" y="-17" width="16" height="2" fill="#E85A4F" opacity="0.8" rx="0.4" />
            <rect x="-8" y="-13" width="12" height="2" fill="#F2A65A" opacity="0.8" rx="0.4" />
            <rect x="-8" y="-9" width="14" height="2" fill="#4A90C2" opacity="0.8" rx="0.4" />
            {/* Live throughput chart */}
            <polyline
              points="-8,2 -5,-2 -2,2 1,-4 4,0 7,-3"
              fill="none"
              stroke="#22c55e"
              strokeWidth="0.8"
            />
            <rect x="-8" y="8" width="16" height="1.4" fill="#3D4F6A" rx="0.3" />
            <rect x="-8" y="12" width="16" height="1.4" fill="#3D4F6A" rx="0.3" />
            {/* Home indicator */}
            <rect x="-4" y="21" width="8" height="1.2" rx="0.5" fill="#3D3D3D" />
          </g>
        );
      })}

      {/* Phones label */}
      <text x="-200" y="56" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.6">
        Studio Field × N
      </text>

      {/* ====== TELEMETRY uplink streams from each phone to Fleet ====== */}
      {!reduce
        ? [-1, 0, 1].map((i) => {
            const cx = -200 + i * 50;
            const cy = i === 0 ? -10 : 0;
            return (
              <g key={i}>
                {[0, 1].map((j) => (
                  <motion.path
                    key={j}
                    d={`M ${cx + 12} ${cy} Q ${cx + 100} ${cy - 20} 160 ${0}`}
                    fill="none"
                    stroke="#4A90C2"
                    strokeWidth="1.2"
                    strokeDasharray="3 4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.7, 0] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      delay: i * 0.3 + j * 1,
                      ease: "easeOut",
                    }}
                  />
                ))}
                <motion.circle
                  r="2.6"
                  fill="#4A90C2"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    offsetDistance: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    offsetPath: `path('M ${cx + 12} ${cy} Q ${cx + 100} ${cy - 20} 160 ${0}')`,
                    filter: "drop-shadow(0 0 4px #4A90C2)",
                  }}
                />
              </g>
            );
          })
        : null}

      {/* ====== RIGHT: Studio Fleet on a laptop with the real COTS screenshot ====== */}
      <g transform="translate(195, 0)">
        {/* Halo */}
        <circle cx="0" cy="0" r="100" fill="url(#pkg2-halo)" />

        {/* Define a clip path matching the inner screen so the dashboard image
            doesn't bleed past the bezel corners. */}
        <defs>
          <clipPath id="pkg2-screen-clip">
            <rect x="-66" y="-58" width="132" height="100" rx="2" />
          </clipPath>
        </defs>

        {/* ===== Laptop lid (open, facing viewer) ===== */}
        {/* Lid back — soft outer bezel */}
        <rect x="-78" y="-72" width="156" height="124" rx="4" fill="#1A2230" stroke="#3D4F6A" strokeWidth="0.7" />
        {/* Inner lid panel */}
        <rect x="-74" y="-68" width="148" height="116" rx="3" fill="#0B1018" />
        {/* Webcam at top centre */}
        <circle cx="0" cy="-64" r="0.9" fill="#1A2230" stroke="#3D4F6A" strokeWidth="0.3" />
        <circle cx="0" cy="-64" r="0.35" fill="#5A6F8A" />

        {/* ===== Screen (with the real COTS dashboard image) ===== */}
        <rect x="-66" y="-58" width="132" height="100" rx="2" fill="#FFFFFF" />
        <image
          href="/fleet-dashboard.png"
          x="-66"
          y="-58"
          width="132"
          height="100"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#pkg2-screen-clip)"
        />
        {/* Subtle gloss / reflection across the top of the screen */}
        <rect
          x="-66"
          y="-58"
          width="132"
          height="22"
          fill="url(#pkg2-server)"
          opacity="0.1"
          clipPath="url(#pkg2-screen-clip)"
        />
        {/* Live indicator overlay in bottom-left corner of screen */}
        <g>
          <rect x="-62" y="34" width="32" height="6" rx="3" fill="#0B1018" opacity="0.7" />
          <circle cx="-58" cy="37" r="1.1" fill="#22c55e">
            {!reduce ? <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" /> : null}
          </circle>
          <text x="-54" y="38.4" fontSize="2.7" fill="#22c55e" fontFamily="ui-monospace,monospace" fontWeight="700">
            LIVE
          </text>
        </g>

        {/* ===== Hinge between lid and base ===== */}
        <rect x="-78" y="52" width="156" height="3" fill="#0E141E" />
        <line x1="-78" y1="53.5" x2="78" y2="53.5" stroke="#3D4F6A" strokeWidth="0.4" opacity="0.55" />

        {/* ===== Laptop base / keyboard (trapezoid in 3-D perspective) ===== */}
        {/* Shadow under base */}
        <path
          d="M -86 58 L 86 58 L 96 82 L -96 82 Z"
          fill="#000"
          opacity="0.4"
          transform="translate(2,4)"
          filter="url(#pkg2-shadow)"
        />
        {/* Base body */}
        <path
          d="M -84 55 L 84 55 L 94 80 L -94 80 Z"
          fill="url(#pkg2-laptop-base)"
          stroke="#0B1018"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        {/* Top edge bright highlight (where light hits the chamfered edge) */}
        <path d="M -84 55 L 84 55 L 84 56.6 L -84 56.6 Z" fill="#8FA3BF" opacity="0.6" />
        {/* Keyboard inset (perspective trapezoid) */}
        <path
          d="M -70 60 L 70 60 L 78 75 L -78 75 Z"
          fill="#0B1018"
          stroke="#3D4F6A"
          strokeWidth="0.4"
        />
        {/* Three rows of keys (perspective-aware) */}
        {Array.from({ length: 3 }).map((_, row) => (
          <g key={row}>
            {Array.from({ length: 14 }).map((_, col) => {
              const t = row / 2; // 0 at top, 1 at bottom
              const y = 61.5 + row * 4.2;
              const leftEdge = -68 - t * 7;
              const rowWidth = 136 + t * 14;
              const colW = rowWidth / 14;
              return (
                <rect
                  key={col}
                  x={leftEdge + col * colW + 0.4}
                  y={y}
                  width={colW - 0.8}
                  height={2.4}
                  rx="0.4"
                  fill="#1A2230"
                  stroke="#3D4F6A"
                  strokeWidth="0.2"
                />
              );
            })}
          </g>
        ))}
        {/* Trackpad with subtle inner highlight */}
        <rect x="-20" y="76" width="40" height="3.2" rx="0.7" fill="#1A2230" stroke="#3D4F6A" strokeWidth="0.3" />
        <rect x="-19" y="76.3" width="38" height="0.6" rx="0.3" fill="#3D4F6A" opacity="0.5" />

        {/* MMT brand mark on the palm-rest area */}
        <text x="0" y="73" textAnchor="middle" fontSize="2.2" fill="#E85A4F" fontFamily="ui-monospace,monospace" fontWeight="800" letterSpacing="0.7" opacity="0.5">
          MMT
        </text>

        {/* Front rubber feet hint */}
        <ellipse cx="-66" cy="82" rx="6" ry="1.4" fill="#000" opacity="0.35" />
        <ellipse cx="66" cy="82" rx="6" ry="1.4" fill="#000" opacity="0.35" />

        {/* Label */}
        <text x="0" y="100" textAnchor="middle" fontSize="9" fill="#FFFFFF" fontFamily="ui-monospace,monospace" fontWeight="700" letterSpacing="0.6">
          Studio Fleet
        </text>
      </g>
    </svg>
  );
}
