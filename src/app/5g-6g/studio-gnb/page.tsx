import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  RadioTower,
  Antenna,
  Signal,
  Cpu,
  Layers,
  Boxes,
  Gauge,
  Move,
  ShieldCheck,
  Plug,
  FileText,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { StatusPill } from "@/components/StatusPill";
import { SectionCTA } from "@/components/SectionCTA";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Studio gNB — Portable 5G Standalone Base Station",
  description:
    "Studio gNB is the 5G Standalone base station inside MMT 5G/6G Studio: N78 (3.3–3.8 GHz), 100 MHz TDD, 4×4 MIMO, 2× 24 dBm PA output, Rel-17 compliant. Tripod-portable RU + gNB that pairs with Studio Core and Studio TestBench.",
  alternates: { canonical: "/5g-6g/studio-gnb" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MMT 5G/6G Studio — Studio gNB",
  description:
    "Portable 5G Standalone base station (gNB). N78 band (3.3–3.8 GHz), 100 MHz TDD carrier, 4×4 MIMO, 2× 24 dBm PA output, 3GPP Rel-17 compliant. Tripod-mounted radio unit that pairs with Studio Core (5G SA core) and Studio TestBench.",
  brand: { "@type": "Brand", name: "MakeMyTechnology" },
  category: "Telecom Radio Access Network Hardware",
};

const specs: { label: string; value: string }[] = [
  { label: "Band", value: "N78 · 3.3–3.8 GHz" },
  { label: "Bandwidth", value: "100 MHz TDD" },
  { label: "MIMO", value: "4×4" },
  { label: "PA output", value: "2× 24 dBm" },
  { label: "Release", value: "3GPP Rel-17" },
  { label: "Mode", value: "5G Standalone (SA)" },
];

const capabilities: { icon: typeof RadioTower; title: string; description: string }[] = [
  {
    icon: Antenna,
    title: "N78 mid-band radio",
    description:
      "3.3–3.8 GHz TDD radio with a 100 MHz carrier — the core mid-band spectrum for 5G Standalone deployments and private networks.",
  },
  {
    icon: Layers,
    title: "4×4 MIMO",
    description:
      "Four spatial streams for higher spectral efficiency and throughput, with 2× 24 dBm power-amplifier output driving the antenna array.",
  },
  {
    icon: Boxes,
    title: "Pairs with Studio Core",
    description:
      "Connects straight to Studio Core over N2/N3 — the Python control plane and C/DPDK UPF — for a complete gNB-to-core 5G SA stack.",
  },
  {
    icon: Signal,
    title: "Full SA call flow",
    description:
      "SSB / SIB broadcast, RACH, RRC setup, and PDU-session bearers so COTS UEs and Studio Field handsets camp, register, and pass traffic end-to-end.",
  },
  {
    icon: Cpu,
    title: "Rel-17 compliant",
    description:
      "3GPP Release 17 signalling across NGAP, RRC and the NR physical layer, verified against the 202 test cases in Studio TestBench.",
  },
  {
    icon: Move,
    title: "Tripod-portable",
    description:
      "The whole radio mounts on a field tripod and runs off a single DC supply — carry a live 5G cell into a lab, classroom, or demo floor in minutes.",
  },
  {
    icon: Gauge,
    title: "Lab + field ready",
    description:
      "Bring-up a private 5G network for throughput, mobility, VoNR, and slicing trials without a base-station room or vendor lock-in.",
  },
  {
    icon: Plug,
    title: "One-box RU + gNB",
    description:
      "Radio unit, antennas, and baseband in a single enclosure — no fronthaul cabling to integrate. Power it, point it, and it's on air.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor-agnostic interop",
    description:
      "Standards-based N2/N3 interfaces mean it interoperates with third-party cores and UEs for conformance and interop labs.",
  },
];

export default function StudioGnbPage() {
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
            <p className="eyebrow mb-3">Studio gNB · MMT 5G/6G Studio</p>
            <h1 className="font-display font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Studio gNB.
            </h1>
            <p className="mt-3 text-sm md:text-base italic text-coral font-display">
              A portable 5G Standalone base station.
            </p>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-3">
              <StatusPill tone="flagship">Shipping · v1.0</StatusPill>
              <StatusPill tone="dev">N78 · 100 MHz</StatusPill>
              <StatusPill tone="research">5G SA · Rel-17</StatusPill>
            </div>
          </div>
        </div>
      </section>

      {/* Hero — base station image + intro */}
      <section className="bg-navyDeep">
        <div className="container-x pb-12 md:pb-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <figure className="relative overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] shadow-2xl">
              <Image
                src="/studio-gnb.png"
                alt="MMT Studio gNB — a portable 5G Standalone base station: a panel radio unit with four antennas mounted on a field tripod."
                width={1448}
                height={2048}
                className="w-full h-auto block max-h-[560px] object-contain mx-auto"
                priority
              />
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <p className="lede text-white/85">
              Studio gNB is the radio access half of the MMT 5G/6G Studio — a
              tripod-portable 5G Standalone base station. An N78 mid-band radio
              (3.3–3.8 GHz) with a 100 MHz TDD carrier, 4×4 MIMO and 2× 24 dBm PA
              output, it broadcasts a live 5G SA cell that COTS UEs and Studio Field
              handsets camp on, register through, and pass traffic across.
            </p>
            <p className="mt-4 text-sm md:text-base text-skyLight/80 leading-relaxed">
              It plugs straight into Studio Core over the N2/N3 interfaces for a
              complete gNB-to-core stack, and every call flow is verified against the
              202 test cases in Studio TestBench. No base-station room, no fronthaul
              cabling, no vendor lock-in — power it, point it, and it&rsquo;s on air.
            </p>

            {/* Headline specs */}
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 px-4 py-3"
                >
                  <dt className="text-[0.6rem] tracking-[0.18em] uppercase font-semibold text-white/55">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-mono text-sm font-semibold text-coral">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                href="/contact?vertical=5g-6g&package=studio-gnb"
                variant="primary"
                size="lg"
              >
                Request a demo
              </ButtonLink>
              <ButtonLink
                href="/documents/gnb-specifications"
                variant="outlineLight"
                size="lg"
              >
                <FileText size={18} aria-hidden="true" /> View spec sheet
              </ButtonLink>
              <ButtonLink href="/5g-6g/studio-core" variant="outlineLight" size="lg">
                Pairs with Studio Core
              </ButtonLink>
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
              A complete radio unit and gNB in one enclosure — the on-air end of a
              full 5G Standalone network you can carry into any lab, classroom, or
              demo floor.
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
                    <p className="mt-2 text-sm text-ink2 leading-relaxed">
                      {c.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spec table */}
      <section className="bg-bgAlt section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">RF &amp; system specification.</h2>
            <p className="mt-2 text-sm text-muted max-w-2xl">
              Mid-band 5G Standalone radio, tuned for private networks, interop labs,
              and hands-on 5G training.
            </p>
          </Reveal>
          <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-line bg-white">
            <table className="w-full text-sm">
              <thead className="bg-bgAlt text-navy">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold w-1/3">Parameter</th>
                  <th className="text-left px-4 py-3 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((s) => (
                  <tr key={s.label} className="border-t border-line">
                    <td className="px-4 py-3 font-mono text-xs text-navy font-semibold">
                      {s.label}
                    </td>
                    <td className="px-4 py-3 text-ink2 font-mono">{s.value}</td>
                  </tr>
                ))}
                <tr className="border-t border-line">
                  <td className="px-4 py-3 font-mono text-xs text-navy font-semibold">
                    Interfaces
                  </td>
                  <td className="px-4 py-3 text-ink2 font-mono">
                    N2 (NGAP) · N3 (GTP-U) to Studio Core
                  </td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-4 py-3 font-mono text-xs text-navy font-semibold">
                    Form factor
                  </td>
                  <td className="px-4 py-3 text-ink2 font-mono">
                    Tripod-portable RU + gNB · single DC supply
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-muted">
            Verified against the 202 test cases in{" "}
            <Link
              href="/5g-6g/studio-testbench"
              className="text-coral hover:underline font-semibold"
            >
              Studio TestBench
            </Link>{" "}
            and paired with{" "}
            <Link
              href="/5g-6g/studio-core"
              className="text-coral hover:underline font-semibold"
            >
              Studio Core
            </Link>{" "}
            for a complete 5G SA network.
          </p>
        </div>
      </section>

      <SectionCTA
        headline="Want a live 5G cell in your lab? Let’s set up a demo."
        href="/contact?vertical=5g-6g&package=studio-gnb"
        buttonLabel="Get in touch"
      />
    </>
  );
}
