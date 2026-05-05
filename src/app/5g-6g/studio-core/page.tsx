import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { StatusPill } from "@/components/StatusPill";
import { SectionCTA } from "@/components/SectionCTA";
import { Reveal } from "@/components/Reveal";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { dnns } from "@/content/dnns";
import { coreNfs, companionServices } from "@/content/nfs";

export const metadata: Metadata = {
  title: "Studio Core — 5G SA Core in Go + C/DPDK",
  description:
    "Studio Core is the 5G Standalone core inside MMT 5G/6G Studio: 15+ NFs, 8 DNN service domains, Go control plane, C/DPDK data plane.",
  alternates: { canonical: "/5g-6g/studio-core" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MMT 5G/6G Studio — Studio Core",
  description:
    "5G Standalone core with 15+ network functions, 8 DNN service domains, Go control plane, and C/DPDK line-rate data plane.",
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

      {/* Hero */}
      <section className="bg-navyDeep text-white">
        <div className="container-x pt-16 pb-16 md:pt-24 md:pb-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Link
              href="/5g-6g"
              className="inline-flex items-center gap-2 text-sm text-skyLight/70 hover:text-coral focus-ring rounded mb-6"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Back to 5G/6G Studio
            </Link>
            <p className="eyebrow mb-6">Studio Core · MMT 5G/6G Studio</p>
            <h1 className="display-h1 text-white">Studio Core.</h1>
            <p className="mt-6 text-2xl md:text-3xl italic text-coral font-display">
              Go control plane. C/DPDK data plane.
            </p>
            <p className="mt-6 max-w-2xl lede">
              A complete 5G Standalone core: 15+ network functions, 8 DNN service domains, single-binary deploy.
            </p>
            <div className="mt-6">
              <StatusPill tone="flagship">Shipping · v1.0</StatusPill>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/5g-6g-studio-core.pdf" variant="primary" size="lg" external>
                Download solution doc
              </ButtonLink>
              <ButtonLink href="/contact?vertical=5g-6g" variant="outlineLight" size="lg">
                Schedule demo
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <ArchitectureDiagram />
            </Reveal>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h2 text-navy max-w-3xl">At a glance.</h2>
            <p className="mt-4 text-lg text-ink2 max-w-3xl">
              One repo, one binary. Goroutine concurrency on the control plane; line-rate forwarding on a C/DPDK
              user plane through libupf_dp.so.
            </p>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-12 gap-8">
            {/* NFs */}
            <Reveal className="lg:col-span-7">
              <div className="rounded-2xl bg-bgAlt ring-1 ring-line p-6 md:p-8 h-full">
                <h3 className="font-display text-xl font-semibold text-navy">
                  15+ network functions
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Full 5G SA core plus companion services in a single Go binary.
                </p>

                <div className="mt-6">
                  <div className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-navyLight mb-3">
                    5G Core
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
                    Companion services
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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

      <SectionCTA headline="Ready to deploy Studio Core? Let’s talk." href="/contact?vertical=5g-6g" />
    </>
  );
}
