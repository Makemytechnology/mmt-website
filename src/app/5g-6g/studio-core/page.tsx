import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, Youtube, FileText } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { StatusPill } from "@/components/StatusPill";
import { SectionCTA } from "@/components/SectionCTA";
import { Reveal } from "@/components/Reveal";
import { DemoVideo } from "@/components/DemoVideo";
import { dnns } from "@/content/dnns";
import { coreNfs, companionServices } from "@/content/nfs";

export const metadata: Metadata = {
  title: "Studio Core — 5G SA Core in Python + C/DPDK",
  description:
    "Studio Core is the 5G Standalone core inside MMT 5G/6G Studio: 13 NFs implemented natively in Python plus IMS, MCX, MEC, eSIM and V2X services. C/DPDK UPF data plane for wire-speed packet processing.",
  alternates: { canonical: "/5g-6g/studio-core" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MMT 5G/6G Studio — Studio Core",
  description:
    "Self-contained 5G Standalone core. All NFs implemented natively in Python; UPF data plane in C/DPDK for wire-speed packet processing. Includes IMS (P/I/S-CSCF, HSS, MMTEL), MCX (PTT/Video/Data), MEC, eSIM and V2X.",
  brand: { "@type": "Brand", name: "MakeMyTechnology" },
  category: "Telecom Network Software",
};

export default function StudioCorePage() {
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
            <p className="eyebrow mb-3">Studio Core · MMT 5G/6G Studio</p>
            <h1 className="font-display font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Studio Core.
            </h1>
            <p className="mt-3 text-sm md:text-base italic text-coral font-display">
              Python control plane. C/DPDK data plane.
            </p>
            <div className="mt-4 flex justify-center">
              <StatusPill tone="flagship">Shipping · v1.0</StatusPill>
            </div>
          </div>
        </div>
      </section>

      {/* Demo video — full-width showcase at the top */}
      <section className="bg-navyDeep">
        <div className="container-x pb-12 md:pb-16">
          <Reveal>
            <div className="max-w-5xl mx-auto">
              <DemoVideo src="/studio-core-demo.mp4" label="Studio Core demo video" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-3xl mx-auto mt-8 text-center">
              <p className="lede text-white/85">
                Fully self-contained 5G SA core: 13 network functions natively in Python
                plus IMS, MCX, MEC, eSIM and V2X. Wire-speed UPF in C/DPDK. Starts with a
                single <code className="font-mono text-coral">./run.sh</code>.
              </p>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
                <ButtonLink href="/documents/studio-5g-manual" variant="primary" size="lg">
                  <FileText size={18} aria-hidden="true" /> View the document
                </ButtonLink>
                <ButtonLink
                  href="/contact?vertical=5g-6g&package=studio-core"
                  variant="outlineLight"
                  size="lg"
                >
                  Schedule demo
                </ButtonLink>
              </div>
              <div className="mt-4 flex flex-wrap justify-center items-center gap-4">
                <ButtonLink
                  href="https://github.com/Makemytechnology/mmt-studio-5g6g.git"
                  variant="outlineLight"
                  size="lg"
                  external
                >
                  <Github size={18} aria-hidden="true" /> View on GitHub
                </ButtonLink>
                <ButtonLink
                  href="https://youtu.be/SxSrm2ETy0Q?si=VG7IzJ3oVmFxVl0_"
                  variant="outlineLight"
                  size="lg"
                  external
                >
                  <Youtube size={18} aria-hidden="true" /> Watch on YouTube
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h2 text-navy max-w-3xl">At a glance.</h2>
            <p className="mt-4 text-lg text-ink2 max-w-3xl">
              One repo, one entry point. Python control plane with full 5GMM / 5GSM state
              machines, 5G-AKA, NAS security and IMS-AKA. C/DPDK user plane handles GTP-U
              encap/decap, QoS enforcement and SDF filtering at wire-speed.
            </p>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-12 gap-8">
            {/* NFs */}
            <Reveal className="lg:col-span-7">
              <div className="rounded-2xl bg-bgAlt ring-1 ring-line p-6 md:p-8 h-full">
                <h3 className="font-display text-xl font-semibold text-navy">
                  13 NFs + higher-layer services
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Full 5G SA core in Python plus IMS, MCX, MEC, eSIM and V2X.
                </p>

                <div className="mt-6">
                  <div className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-navyLight mb-3">
                    5G Core network functions
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {coreNfs.map((nf) => (
                      <div
                        key={nf}
                        className="rounded-md bg-white px-3 py-2 text-center font-mono text-xs font-semibold text-navy ring-1 ring-line"
                      >
                        {nf}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-navyLight mb-3">
                    Higher-layer services
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {companionServices.map((s) => (
                      <div
                        key={s}
                        className="rounded-md bg-coralLight px-3 py-2 text-center font-mono text-xs font-semibold text-navy ring-1 ring-coral/30"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-xs text-muted leading-relaxed">
                  Working end-to-end: SUCI → 5G-AKA → Security Mode → Registration · PDU
                  Session (internet + IMS DNNs) · dedicated bearers for VoNR voice / video
                  · paging + Service Request · UE deregistration · MCPTT / MCVideo / MCData
                  with floor control.
                </p>
              </div>
            </Reveal>

            {/* DNNs */}
            <Reveal className="lg:col-span-5" delay={0.06}>
              <div className="rounded-2xl bg-bgAlt ring-1 ring-line p-6 md:p-8 h-full">
                <h3 className="font-display text-xl font-semibold text-navy">
                  8 service domains
                </h3>
                <p className="mt-2 text-sm text-muted">
                  One SMF/UPF carries them all simultaneously.
                </p>
                <ul className="mt-6 space-y-2">
                  {dnns.map((d) => (
                    <li
                      key={d.name}
                      className="flex items-center gap-3 rounded-md bg-white ring-1 ring-line px-3 py-2 border-l-4"
                      style={{ borderLeftColor: d.accent }}
                    >
                      <span className="font-mono text-xs font-bold text-navy w-20 shrink-0">
                        {d.name}
                      </span>
                      <span className="text-sm text-ink2">{d.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionCTA headline="Ready to deploy Studio Core? Let’s talk." />
    </>
  );
}
