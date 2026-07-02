import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { StudioProductCard } from "@/components/StudioProductCard";
import { SetupSlideshow } from "@/components/SetupSlideshow";
import { studioProducts } from "@/content/studio-products";

export const metadata: Metadata = {
  title: "MMT 5G/6G Studio — Core, Test, Field, Fleet, Learn",
  description:
    "MMT 5G/6G Studio is a complete 5G product family: Studio Core, TestBench, gNB, Field, Fleet, and Academy.",
  alternates: { canonical: "/5g-6g" },
};

export default function StudioOverviewPage() {
  return (
    <>
      {/* Compact tagline header */}
      <section className="bg-navyDeep text-white">
        <div className="container-x py-6 md:py-8 text-center">
          <h1 className="font-display font-bold tracking-tight text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
            MMT 5G/6G Studio.
          </h1>
          <p className="mt-2 text-sm md:text-base italic text-coral font-display">
            A complete 5G product family — core, test, field, fleet, learn.
          </p>
        </div>
      </section>

      {/* Live setup showcase */}
      <section className="bg-navy text-white border-t border-white/5">
        <div className="container-x py-10 md:py-14">
          <Reveal>
            <div className="max-w-5xl mx-auto">
              <SetupSlideshow
                interval={3000}
                slides={[
                  {
                    src: "/setup.jpg",
                    alt: "MMT 5G/6G Studio running end-to-end at a customer workshop — monitor with Studio Core terminal, two Android phones running Studio Field, and a laptop dashboard from Studio Fleet.",
                    eyebrow: "Live workshop",
                    tag: "Studio Core · Field · Fleet",
                    caption: "The full 5G/6G Studio running end-to-end on commodity hardware.",
                  },
                  {
                    src: "/setup-pes.jpg",
                    alt: "MMT 5G/6G Studio deployed at PES University — a portable MMT unit with antennas beside a monitor, running Studio Core with COTS phones.",
                    eyebrow: "Live deployment · PES University",
                    tag: "Studio Core · gNB",
                    caption: "A portable MMT 5G/6G Studio deployed on campus at PES University.",
                  },
                ]}
              />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
                  <span className="text-coral font-semibold">Monitor</span>
                  <span className="text-white/75"> — Studio Core (Go + C/DPDK)</span>
                </div>
                <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
                  <span className="text-coral font-semibold">Phones</span>
                  <span className="text-white/75"> — Studio Field on COTS Android</span>
                </div>
                <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm">
                  <span className="text-coral font-semibold">Laptops</span>
                  <span className="text-white/75"> — Studio Fleet orchestrator</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Studio products grid */}
      <section className="bg-bg pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {studioProducts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.05}>
                <StudioProductCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
