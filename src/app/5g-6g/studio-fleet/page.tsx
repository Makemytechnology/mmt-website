import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Server,
  Activity,
  Brain,
  FileSearch,
  GitBranch,
  Cpu,
  Network,
  ListChecks,
  ShieldCheck,
  Search,
  Bell,
  Database,
  Boxes,
  FileText,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { StatusPill } from "@/components/StatusPill";
import { SectionCTA } from "@/components/SectionCTA";
import { Reveal } from "@/components/Reveal";
import { DemoVideo } from "@/components/DemoVideo";

export const metadata: Metadata = {
  title: "Studio Fleet — Multi-Device 5G Test Orchestrator (Flask + Robot)",
  description:
    "Studio Fleet is the orchestration half of MMT COTS: a Python / Flask server with 26 blueprints, 25 services, 8 Robot keyword libraries, and 20+ Robot tests for fleet-scale 5G drive testing.",
  alternates: { canonical: "/5g-6g/studio-fleet" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MMT 5G/6G Studio — Studio Fleet",
  description:
    "Python / Flask orchestration server for fleets of Studio Field devices. 26 blueprints, 25 services, 8 Robot Framework keyword libraries, AI-powered protocol analysis, and in-browser PCAP / NR log viewers.",
  brand: { "@type": "Brand", name: "MakeMyTechnology" },
  category: "Telecom Test Orchestration",
};

const stats = [
  { number: "26", label: "Flask blueprints" },
  { number: "25", label: "Server services" },
  { number: "8", label: "Robot keyword libs" },
];

const capabilities = [
  {
    icon: Server,
    title: "MobileManager fleet registry",
    description:
      "Per-device API client with parallel-op coordination across the entire Studio Field fleet. mDNS + LAN discovery via DiscoveryService.",
  },
  {
    icon: Database,
    title: "LogCollectorService",
    description:
      "Multi-source collection: mobile DLF, base-station PCAP, and 5G core logs. Unified storage and indexing for cross-correlated analysis.",
  },
  {
    icon: ListChecks,
    title: "TestOrchestrator + Robot",
    description:
      "Robot Framework test runner coordinating mobile, BS, core, and traffic. 20+ test cases in smoke (6), regression (14), and stability (3) suites.",
  },
  {
    icon: Brain,
    title: "AI analysis (Ollama / Claude / OpenAI / Gemini)",
    description:
      "AiAnalyzer + AI Assistant. LLM-powered handover, registration, and throughput RCA. Provider-agnostic — runs local or cloud.",
  },
  {
    icon: Activity,
    title: "DiagStreamManager",
    description:
      "Live decoded DIAG stream aggregator across every mobile in the fleet. Real-time L1/L2/L3/NAS view fed by the tshark + 49 Lua dissectors.",
  },
  {
    icon: FileSearch,
    title: "In-browser PCAP viewer",
    description:
      "PcapParser runs tshark over uploaded captures and renders a filterable, time-aligned view directly in the Flask UI — plus a focused NR Log Viewer.",
  },
  {
    icon: GitBranch,
    title: "Multi-UE drive-test campaigns",
    description:
      "MobileFleetCampaign + multi_ue_drive: aggregate KPI rollup across many handsets driving at once. Per-mobile and fleet-wide rollups.",
  },
  {
    icon: Network,
    title: "BS + Core control",
    description:
      "BasestationManager / BsController for RU / DU / CU. CoreNetworkManager / CoreController for AMF / SMF / UPF. RAN + core under one orchestrator.",
  },
  {
    icon: Cpu,
    title: "TrafficEngine",
    description:
      "iPerf3 / HTTP / ping campaign management across the fleet. Drives Studio Field traffic engines remotely with per-mobile policy.",
  },
  {
    icon: Bell,
    title: "OAM + alerts",
    description:
      "Per-feature OAM with KPI engine and fault tracking. NotificationService routes Webhook (Slack / Teams) and email alerts on thresholds.",
  },
  {
    icon: Search,
    title: "Wireshark profile distribution",
    description:
      "WiresharkProfileManager distributes the COTS Wireshark profile + Lua dissectors to engineer workstations for offline analysis.",
  },
  {
    icon: ShieldCheck,
    title: "License + multi-tenant",
    description:
      "Server license manager with per-feature gates (Free / Basic / Pro / Enterprise). PostgreSQL for production, SQLite for local development.",
  },
];

const webSections: string[] = [
  "Dashboard",
  "Base Stations",
  "5G Core",
  "Test Execution",
  "Test Mgmt",
  "Campaigns",
  "Traffic",
  "Drive Test",
  "Log Analysis",
  "AI Analysis",
  "PCAP Viewer",
  "NR Log Viewer",
  "AI Assistant",
  "OAM",
  "System Logs",
  "Configuration",
  "License",
];

const keywordLibs: { id: string; name: string; description: string }[] = [
  { id: "01", name: "mobile", description: "Studio Field device control" },
  { id: "02", name: "traffic", description: "iPerf3 / HTTP / ping flows" },
  { id: "03", name: "AT commands", description: "Modem AT control on COTS" },
  { id: "04", name: "BS", description: "Base station (RU/DU/CU)" },
  { id: "05", name: "core", description: "AMF / SMF / UPF control" },
  { id: "06", name: "DIAG", description: "DIAG socket + log codes" },
  { id: "07", name: "verification", description: "KPI + protocol assertions" },
  { id: "08", name: "common", description: "Shared helpers + fixtures" },
];

const techRows: { tech: string; usedFor: string }[] = [
  { tech: "Python 3.12", usedFor: "Server runtime" },
  { tech: "Flask", usedFor: "26 blueprints, 25 services" },
  { tech: "PostgreSQL · SQLite", usedFor: "Production · dev DB" },
  { tech: "Robot Framework", usedFor: "8 keyword libs, 20+ test cases" },
  { tech: "tshark 4.6 + Lua", usedFor: "Protocol decode, PCAP viewer" },
  { tech: "Ollama / Claude / OpenAI / Gemini", usedFor: "Pluggable AI providers" },
  { tech: "Docker · waitress / gunicorn", usedFor: "Prod packaging" },
  { tech: "GitHub Actions", usedFor: "CI / CD" },
];

export default function StudioFleetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-navyDeep text-white">
        <div className="container-x pt-6 pb-6 md:pt-8 md:pb-8">
          <Link
            href="/5g-6g"
            className="inline-flex items-center gap-2 text-xs text-skyLight/70 hover:text-coral focus-ring rounded mb-4"
          >
            <ArrowLeft size={14} aria-hidden="true" /> Back to 5G/6G Studio
          </Link>
          <div className="text-center">
            <p className="eyebrow mb-3">Studio Fleet · MMT COTS Server</p>
            <h1 className="font-display font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Studio Fleet.
            </h1>
            <p className="mt-3 text-sm md:text-base italic text-coral font-display">
              The control room behind every Studio Field device.
            </p>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-3">
              <StatusPill tone="flagship">Shipping · v1.0</StatusPill>
              <StatusPill tone="dev">Python · Flask</StatusPill>
            </div>
          </div>
        </div>
      </section>

      {/* Demo video — full-width showcase at the top */}
      <section className="bg-navyDeep">
        <div className="container-x pb-12 md:pb-16">
          <Reveal>
            <div className="max-w-5xl mx-auto">
              <DemoVideo src="/studio-fleet-demo.mp4" label="Studio Fleet demo video" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-3xl mx-auto mt-8 text-center">
              <p className="lede text-white/85">
                A Python / Flask orchestration server that manages a fleet of Studio Field
                handsets, collects logs from mobiles + base stations + 5G core, runs Robot
                Framework campaigns, analyses captured data with LLMs, and renders results
                in a browser UI for RF / RAN / core engineers.
              </p>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
                <ButtonLink href="/documents/cots-manual" variant="primary" size="lg">
                  <FileText size={18} aria-hidden="true" /> View the document
                </ButtonLink>
                <ButtonLink
                  href="/contact?vertical=5g-6g&package=studio-fleet"
                  variant="outlineLight"
                  size="lg"
                >
                  Schedule demo
                </ButtonLink>
                <ButtonLink href="/5g-6g/studio-field" variant="outlineLight" size="lg">
                  See Studio Field
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Fleet snapshot — moved below the video as a key-stats strip */}
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
              Studio Fleet wraps 25 backing services behind 26 Flask blueprints —
              fleet registry, log collection, test orchestration, AI analysis, PCAP viewing,
              OAM, and licensing all in one server.
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

      {/* Web UI sections */}
      <section className="bg-bgAlt section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">17 Web UI sections.</h2>
            <p className="mt-2 text-sm text-muted max-w-2xl">
              Every Flask blueprint maps to a browser-native section. Dashboard, RAN, core,
              tests, traffic, drive tests, decoded logs, AI, and OAM — under one URL.
            </p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {webSections.map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-3 rounded-lg bg-white ring-1 ring-line px-3 py-2.5"
              >
                <span className="font-mono text-[0.7rem] text-muted w-6 text-right shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm font-semibold text-navy truncate">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Robot keyword libraries */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">8 Robot Framework keyword libraries.</h2>
            <p className="mt-2 text-sm text-muted max-w-2xl">
              Reusable, fleet-aware keywords that drive the entire 5G stack from a single
              Robot suite. 20+ test cases ship in three suites: smoke, regression, stability.
            </p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {keywordLibs.map((k) => (
              <li
                key={k.id}
                className="rounded-lg bg-white ring-1 ring-line p-4 hover:ring-coral/40 transition"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[0.7rem] text-muted">{k.id}</span>
                  <span className="font-display text-base font-semibold text-navy">
                    {k.name}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-ink2 leading-relaxed">{k.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology stack */}
      <section className="bg-bgAlt section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">Technology stack.</h2>
            <p className="mt-2 text-sm text-muted">
              Open-source by design. Runs on a laptop for dev; scales to PostgreSQL + Docker
              for production.
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

      <SectionCTA headline="Ready to orchestrate your 5G test fleet? Let’s talk." />
    </>
  );
}
