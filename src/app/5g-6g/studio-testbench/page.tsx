import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  KeyRound,
  Network,
  PhoneCall,
  Gauge,
  Shuffle,
  Layers,
  MapPin,
  Radio,
  Satellite,
  FileText,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { StatusPill } from "@/components/StatusPill";
import { SectionCTA } from "@/components/SectionCTA";
import { Reveal } from "@/components/Reveal";
import { DemoVideo } from "@/components/DemoVideo";

export const metadata: Metadata = {
  title: "Studio TestBench — 5G SA Core Network Tester",
  description:
    "Studio TestBench (SA Tester) emulates gNBs and UEs against a 5G SA Core: NAS/NGAP, GTP-U, IMS/VoNR/ViNR, handover, slicing, positioning, IoT, NTN.",
  alternates: { canonical: "/5g-6g/studio-testbench" },
};

const stats = [
  { number: "202", label: "Protocol test cases" },
  { number: "19", label: "Robot Framework suites" },
  { number: "9+", label: "Feature areas" },
];

const capabilities = [
  {
    icon: KeyRound,
    title: "5G NAS / NGAP",
    description:
      "Registration, 5G-AKA authentication, Security Mode, and PDU Session flows per TS 24.501 and TS 38.413.",
  },
  {
    icon: Network,
    title: "GTP-U data plane",
    description:
      "TUN interfaces, QoS classification, per-UE policy routing. Real-time data-plane verification against TS 29.281.",
  },
  {
    icon: PhoneCall,
    title: "IMS · VoNR · ViNR",
    description:
      "SIP REGISTER, INVITE, re-INVITE, REFER, BYE with IMS-AKA. Conference calls up to 6-way via MRFP (TS 24.147).",
  },
  {
    icon: Gauge,
    title: "Traffic engine",
    description:
      "iperf3 UL/DL throughput, RTP audio (AMR-WB), RTP video (H.264). AMBR, MBR, and GBR policy enforcement.",
  },
  {
    icon: Shuffle,
    title: "Handover & mobility",
    description:
      "N2 handover with GTP-U tunnel switching. CM-IDLE, paging, Service Request, and UE context release flows.",
  },
  {
    icon: Layers,
    title: "Network slicing",
    description:
      "eMBB, URLLC, and MIoT slice testing. Multi-DNN sessions with slice-aware policy and routing.",
  },
  {
    icon: MapPin,
    title: "Positioning",
    description:
      "E-CID, Multi-RTT, DL-TDOA, A-GNSS, and geofencing per TS 23.273 and TS 38.305.",
  },
  {
    icon: Radio,
    title: "IoT",
    description:
      "NB-IoT PSM/eDRX, CP CIoT, NIDD/SCEF, and Ambient IoT tags per TS 23.401 and TS 22.369.",
  },
  {
    icon: Satellite,
    title: "NTN",
    description:
      "Satellite constellation, coverage, timing advance, TAI, and feeder links per TS 38.821.",
  },
];

const suites: { id: string; name: string; tests: number }[] = [
  { id: "01", name: "Registration", tests: 6 },
  { id: "02", name: "PDU Session", tests: 4 },
  { id: "03", name: "Protocol Analysis", tests: 5 },
  { id: "04", name: "Stress", tests: 16 },
  { id: "05", name: "NG Setup", tests: 16 },
  { id: "06", name: "Authentication", tests: 12 },
  { id: "07", name: "Traffic", tests: 13 },
  { id: "08", name: "IMS", tests: 17 },
  { id: "09", name: "Multi-Traffic", tests: 12 },
  { id: "10", name: "IMS Scale", tests: 16 },
  { id: "11", name: "Multi-DNN", tests: 6 },
  { id: "12", name: "Handover", tests: 6 },
  { id: "13", name: "Jumbo Frames", tests: 6 },
  { id: "14", name: "Release", tests: 12 },
  { id: "15", name: "Idle Mode", tests: 8 },
  { id: "16", name: "Slicing", tests: 10 },
  { id: "17", name: "Positioning", tests: 10 },
  { id: "18", name: "IoT", tests: 15 },
  { id: "19", name: "NTN", tests: 12 },
];

export default function StudioTestbenchPage() {
  return (
    <>
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
            <p className="eyebrow mb-3">Studio TestBench · MMT 5G/6G Studio</p>
            <h1 className="font-display font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Studio TestBench.
            </h1>
            <p className="mt-3 text-sm md:text-base italic text-coral font-display">
              5G SA Core network tester — 202 test cases, 19 Robot suites.
            </p>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-3">
              <StatusPill tone="flagship">Shipping · v1.0</StatusPill>
              <StatusPill tone="dev">Python · Robot Framework</StatusPill>
            </div>
          </div>
        </div>
      </section>

      {/* Demo video — full-width showcase at the top (pending since no MP4 yet) */}
      <section className="bg-navyDeep">
        <div className="container-x pb-12 md:pb-16">
          <Reveal>
            <div className="max-w-5xl mx-auto">
              <DemoVideo
                src="/studio-core-demo.mp4"
                label="Studio TestBench demo video"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-3xl mx-auto mt-8 text-center">
              <p className="lede text-white/85">
                Studio TestBench (SA Tester) emulates gNBs and UEs against any 5G
                Standalone Core. Strictly 3GPP / IMS / RFC compliant — tests fail on
                non-spec responses. 202 test cases across 19 Robot Framework suites cover
                NAS/NGAP, GTP-U, IMS, slicing, mobility, positioning, IoT, and NTN.
              </p>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
                <ButtonLink href="/documents/studio-5g-manual" variant="primary" size="lg">
                  <FileText size={18} aria-hidden="true" /> View the document
                </ButtonLink>
                <ButtonLink
                  href="/contact?vertical=5g-6g&package=studio-testbench"
                  variant="outlineLight"
                  size="lg"
                >
                  Schedule demo
                </ButtonLink>
                <ButtonLink href="/5g-6g/studio-core" variant="outlineLight" size="lg">
                  See Studio Core
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Key-stats strip — moved below the video as a row */}
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

      {/* Capabilities grid — 9 features */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h2 text-navy max-w-3xl">What it tests.</h2>
            <p className="mt-4 text-lg text-ink2 max-w-3xl">
              Nine feature areas, each backed by Robot Framework suites that drive emulated
              gNBs and UEs against a target 5G SA core. Strictly spec-compliant — tests
              fail on non-3GPP behaviour.
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

      {/* 19 Test Suites — compact list */}
      <section className="bg-bgAlt section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">19 Robot Framework suites.</h2>
            <p className="mt-2 text-sm text-muted">
              202 test cases in total. Strictly 3GPP / IMS / RFC compliant — tests fail on
              non-spec responses.
            </p>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {suites.map((s) => (
              <li
                key={s.id}
                className="flex items-center gap-3 rounded-lg bg-white ring-1 ring-line px-3 py-2.5"
              >
                <span className="font-mono text-[0.7rem] text-muted w-6 text-right shrink-0">
                  {s.id}
                </span>
                <span className="flex-1 text-sm font-semibold text-navy truncate">
                  {s.name}
                </span>
                <span className="font-mono text-xs text-coral font-semibold shrink-0">
                  {s.tests}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionCTA headline="Ready to validate your 5G core? Let’s talk." />
    </>
  );
}
