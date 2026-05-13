import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Smartphone,
  Signal,
  MapPin,
  FileCode,
  Server,
  Radio,
  Activity,
  Layers,
  Compass,
  Cpu,
  Globe,
  Database,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { StatusPill } from "@/components/StatusPill";
import { SectionCTA } from "@/components/SectionCTA";
import { Reveal } from "@/components/Reveal";
import { DemoVideo } from "@/components/DemoVideo";

export const metadata: Metadata = {
  title: "Studio Field — MMT COTS Mobile (Kotlin / Jetpack Compose)",
  description:
    "Studio Field is the Android half of the MMT COTS platform: a Kotlin / Jetpack Compose app with 19 screens, 12 ViewModels, 25 Kotlin decoders + 49 Lua dissectors, and an embedded Ktor REST/SSE/WebSocket server on port 8080.",
  alternates: { canonical: "/5g-6g/studio-field" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MMT 5G/6G Studio — Studio Field",
  description:
    "Kotlin / Jetpack Compose Android app for 5G RF engineers and drive-test operators. Captures Qualcomm DIAG logs in real time, runs iPerf/ping/HTTP/voice/QoS tests, and exposes the dataset over Ktor REST/SSE/WebSocket on port 8080. Pairs with Studio Fleet.",
  brand: { "@type": "Brand", name: "MakeMyTechnology" },
  category: "Telecom Drive-Test Software",
};

const stats = [
  { number: "19", label: "Compose screens" },
  { number: "34", label: "Ktor REST routes" },
  { number: "25+49", label: "Kotlin + Lua dissectors" },
];

const capabilities = [
  {
    icon: Signal,
    title: "Pro RF measurement",
    description:
      "Per-cell RSRP / RSRQ, per-beam RSRP, per-carrier SNR (up to 4 NR carriers), DL/UL MCS, BLER, CQI, PHR, TB size — sampled in real time from the DIAG socket.",
  },
  {
    icon: FileCode,
    title: "25 Kotlin + 49 Lua dissectors",
    description:
      "25 KMP Kotlin dissectors extract KPIs into GPS-stamped JSONL. 49 Lua dissectors run under tshark for full L1/L2/L3/NAS protocol decode — RRC, NAS, MAC, PDCP, RLC, IMS SIP.",
  },
  {
    icon: Activity,
    title: "3-path DIAG pipeline",
    description:
      "PATH 1: KPI JSONL via Kotlin dissectors. PATH 2: Raw DLF (1 GB rotation) + UDP broadcast for QCAT / Wireshark. PATH 3: tshark + Lua for human-readable logs.",
  },
  {
    icon: MapPin,
    title: "Drive-test with 6 campaigns",
    description:
      "Quick, Standard, Throughput, QoS Voice, Idle. GPS map with RSRP-coloured route, event timeline, KPI panel. Export: CSV, XLSX, KML, JSONL, HTML report, DLF.",
  },
  {
    icon: Server,
    title: "Embedded Ktor server",
    description:
      "Kotlin Ktor CIO server on the handset, port 8080. 34 REST route files for remote control, log pull, dissector reload, and live KPI streaming to Studio Fleet.",
  },
  {
    icon: Globe,
    title: "Compose Multiplatform + WASM",
    description:
      "Same Kotlin codebase ships to Android and a 32 MB WASM browser bundle, served by the on-device Ktor server. Real-time dashboard from any browser on the LAN.",
  },
  {
    icon: Radio,
    title: "Voice + video QoS",
    description:
      "20 5QI profiles (TS 23.501) + 9 QCI profiles (TS 23.203). Latency vs PDB, loss vs PER, throughput scoring. PASS / MARGINAL / FAIL verdict with weighted composite.",
  },
  {
    icon: Layers,
    title: "Protocol tracker",
    description:
      "RRC state machine, NAS tracking, SIBs, PDU sessions, measurement config, timers. NR + LTE + IMS message identification per TS 38.331 / 24.501 / 24.229.",
  },
  {
    icon: Compass,
    title: "Indoor map + route replay",
    description:
      "Floorplan upload with tap-to-pin RF measurements. Replay saved drive-test routes, compare two sessions side-by-side, band-lock via AT commands.",
  },
  {
    icon: Cpu,
    title: "12 ViewModels + engines",
    description:
      "Traffic engine, tshark engine, AT command engine, KPI engine, drive-test engine, dissector registry, log rotator, DIAG broadcaster — composed via DI behind 12 Compose ViewModels.",
  },
  {
    icon: Database,
    title: "Room SQLite persistence",
    description:
      "On-device Room database for sessions, routes, measurements, license, and AI chats. Storage breakdown UI surfaces per-feature usage with cleanup actions.",
  },
  {
    icon: ShieldCheck,
    title: "License — Free / Pro / Enterprise",
    description:
      "License manager with HMAC-SHA256 device binding. 7-day Pro trial on first launch. Per-feature gates: Pro unlocks Protocol / Indoor Map / Auto Test / Web API / Excel; Enterprise adds Band Lock / Route Replay / QoS SLA / Voice.",
  },
];

const bottomNav: { name: string; description: string; root?: boolean }[] = [
  { name: "Home", description: "Serving cell, neighbours, CA/SCell, MIMO RI/PMI, speed test, RSRP chart, cell scanner" },
  { name: "Log Config", description: "NR / LTE / IMS log code selection, multi-RAT mask, DIAG socket management", root: true },
  { name: "Logs", description: "Live protocol logs via tshark + Lua (L1/L2/L3/RRC/NAS), layer filtering", root: true },
  { name: "Drive Test", description: "6 campaign profiles, GPS map, RSRP route, events, KPIs, 6 export formats" },
  { name: "KPI Charts", description: "DL / UL throughput, BLER, MCS, CQI, PHR charts on Compose Canvas" },
];

const apiRoutes: { method: string; path: string; description: string }[] = [
  { method: "GET", path: "/api/v1/status", description: "Device + APK health" },
  { method: "GET", path: "/api/v1/rf", description: "Live RF KPIs (stream)" },
  { method: "GET", path: "/api/v1/gps", description: "Current GPS fix" },
  { method: "POST", path: "/api/v1/drive/start", description: "Begin a drive-test run" },
  { method: "POST", path: "/api/v1/drive/stop", description: "End the current run" },
  { method: "GET", path: "/api/v1/logs", description: "Pull NAS / NGAP / RRC logs" },
  { method: "POST", path: "/api/v1/dissectors", description: "Reload Lua dissectors" },
  { method: "GET", path: "/api/v1/ims/calls", description: "VoNR / ViNR call history" },
  { method: "GET", path: "/web/", description: "Full WASM dashboard" },
  { method: "GET", path: "/connect", description: "QR code pairing page" },
];

const techRows: { tech: string; usedFor: string }[] = [
  { tech: "Kotlin 2.1.0 + KMP", usedFor: "Shared module (commonMain) across Android + WASM" },
  { tech: "Compose Multiplatform 1.7.3", usedFor: "Shared UI for Android + browser" },
  { tech: "Jetpack Compose + Material 3", usedFor: "Android-specific composables" },
  { tech: "Ktor CIO", usedFor: "Embedded REST + WASM server on :8080" },
  { tech: "Room (SQLite)", usedFor: "On-device persistence" },
  { tech: "tshark 4.6 + Lua", usedFor: "Protocol decode (Path 3)" },
  { tech: "AGP 8.10.1 · Gradle", usedFor: "Mobile + WASM build" },
  { tech: "Ollama / Claude / OpenAI / Gemini", usedFor: "On-device AI chat" },
];

export default function StudioFieldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Compact tagline header */}
      <section className="bg-navyDeep text-white">
        <div className="container-x pt-6 pb-6 md:pt-8 md:pb-8">
          <Link
            href="/5g-6g"
            className="inline-flex items-center gap-2 text-xs text-skyLight/70 hover:text-coral focus-ring rounded mb-4"
          >
            <ArrowLeft size={14} aria-hidden="true" /> Back to 5G/6G Studio
          </Link>
          <div className="text-center">
            <p className="eyebrow mb-3">Studio Field · MMT COTS Mobile</p>
            <h1 className="font-display font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Studio Field.
            </h1>
            <p className="mt-3 text-sm md:text-base italic text-coral font-display">
              A COTS phone, turned pro drive-test tool.
            </p>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-3">
              <StatusPill tone="flagship">Shipping · v1.0</StatusPill>
              <StatusPill tone="dev">Android 11+</StatusPill>
              <StatusPill tone="research">WASM Web</StatusPill>
            </div>
          </div>
        </div>
      </section>

      {/* Demo video — full-width showcase at the top */}
      <section className="bg-navyDeep">
        <div className="container-x pb-12 md:pb-16">
          <Reveal>
            <div className="max-w-5xl mx-auto">
              <DemoVideo
                src="/studio-field-demo.mp4"
                label="Studio Field demo video"
                pending
                pendingMessage="Demo video will appear here once it's added. Drop the .mp4 into /public/studio-field-demo.mp4 to enable autoplay."
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-3xl mx-auto mt-8 text-center">
              <p className="lede text-white/85">
                Kotlin / Jetpack Compose Android app for 5G RF engineers and drive-test
                operators. 19 screens · 12 ViewModels · 25 Kotlin decoders · 49 Lua
                dissectors via tshark. Embedded Ktor REST / SSE / WebSocket server on
                port 8080 with a 32 MB Compose-Multiplatform WASM dashboard.
              </p>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white/60 font-semibold px-7 py-3.5 text-base ring-1 ring-inset ring-white/15 cursor-not-allowed select-none"
                  title="The APK will be available here once the public build is signed and released."
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M12 3v12" />
                    <polyline points="7 10 12 15 17 10" />
                    <path d="M5 21h14" />
                  </svg>
                  Download APK
                  <span className="ml-2 text-[0.6rem] tracking-[0.18em] uppercase font-bold bg-gold/20 text-gold ring-1 ring-inset ring-gold/30 px-2 py-0.5 rounded-full">
                    Coming soon
                  </span>
                </button>
                <ButtonLink
                  href="/contact?vertical=5g-6g&package=studio-field-apk"
                  variant="primary"
                  size="lg"
                >
                  Request early access
                </ButtonLink>
              </div>

              {/* 7-day free Pro trial badge */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral/15 text-coral ring-1 ring-inset ring-coral/40 px-4 py-2 text-xs font-semibold">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>
                  Includes <strong className="text-white">7-day Pro trial</strong> — auto
                  activates on first launch, no card required
                </span>
              </div>

              <p className="mt-3 text-xs text-white/55">
                Android 11+ · Snapdragon-based handsets recommended · Root required for
                DIAG-socket features
              </p>
            </div>
          </Reveal>

          {/* On-the-handset key stats — moved below the video as a row */}
          <Reveal delay={0.18}>
            <div className="max-w-5xl mx-auto mt-12">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stats.map((s) => (
                  <li
                    key={s.label}
                    className="rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-4 text-center"
                  >
                    <span className="block font-display text-3xl font-bold text-coral leading-none">
                      {s.number}
                    </span>
                    <span className="mt-2 block text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-white/75">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-xs text-skyLight/70 leading-relaxed">
                20 5QI + 9 QCI QoS profiles · 6 drive-test campaigns · 6 export formats · 32
                MB WASM dashboard.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h2 text-navy max-w-3xl">What it does.</h2>
            <p className="mt-4 text-lg text-ink2 max-w-3xl">
              A full 5G drive-test instrument on a phone you already own. KMP + Compose ship
              the same Kotlin code to Android and a browser-served WASM dashboard.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 3) * 0.05}>
                  <article className="h-full rounded-2xl bg-white ring-1 ring-line p-6 hover:ring-coral/40 hover:shadow-md transition">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-coralLight text-coral">
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink2 leading-relaxed">{c.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom nav screens */}
      <section className="bg-bgAlt section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">Five primary screens.</h2>
            <p className="mt-2 text-sm text-muted max-w-2xl">
              Plus a side drawer with 12 more for Traffic Tools, Log Summary, Protocol,
              Device Info, Utilities, Indoor Map, Auto Test, Band Lock, Route Replay,
              Compare, AI Chat, and Settings.
            </p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {bottomNav.map((n) => (
              <li
                key={n.name}
                className="rounded-lg bg-white ring-1 ring-line p-4 hover:ring-coral/40 transition"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-base font-semibold text-navy">
                    {n.name}
                  </span>
                  {n.root ? (
                    <span className="text-[0.6rem] tracking-[0.18em] uppercase font-semibold bg-coralLight text-coral px-1.5 py-0.5 rounded">
                      root
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-xs text-ink2 leading-relaxed">{n.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REST API surface */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">Embedded Ktor REST server.</h2>
            <p className="mt-2 text-sm text-muted max-w-2xl">
              34 REST routes on the handset itself, plus the WASM dashboard served from{" "}
              <code className="font-mono text-xs bg-bgAlt px-1.5 py-0.5 rounded">/web/</code>{" "}
              on port 8080. Automate drives, pull logs, or stream KPIs straight to Studio Fleet.
            </p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {apiRoutes.map((r) => (
              <li
                key={`${r.method}-${r.path}`}
                className="flex items-center gap-3 rounded-lg bg-white ring-1 ring-line px-4 py-3"
              >
                <span
                  className={`font-mono text-[0.65rem] font-bold px-2 py-1 rounded shrink-0 ${
                    r.method === "GET" ? "bg-sky/10 text-sky" : "bg-coralLight text-coral"
                  }`}
                >
                  {r.method}
                </span>
                <span className="font-mono text-xs text-navy font-semibold shrink-0">
                  {r.path}
                </span>
                <span className="text-xs text-ink2 ml-auto text-right">{r.description}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted">
            + 24 additional routes for dissector control, slice selection, IMS, AT commands,
            license, AI chat, and fleet telemetry.
          </p>
        </div>
      </section>

      {/* Technology stack */}
      <section className="bg-bgAlt section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">Technology stack.</h2>
            <p className="mt-2 text-sm text-muted">
              Kotlin Multiplatform with Compose Multiplatform — one codebase, two targets
              (Android + WASM).
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-line bg-white">
            <table className="w-full text-sm">
              <thead className="bg-bgAlt text-navy">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold w-1/3">Technology</th>
                  <th className="text-left px-4 py-3 font-semibold">Used for</th>
                </tr>
              </thead>
              <tbody>
                {techRows.map((r) => (
                  <tr key={r.tech} className="border-t border-line">
                    <td className="px-4 py-3 font-mono text-xs text-navy font-semibold">
                      {r.tech}
                    </td>
                    <td className="px-4 py-3 text-ink2">{r.usedFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SectionCTA headline="Ready to drive-test 5G from a phone? Let’s talk." />
    </>
  );
}
