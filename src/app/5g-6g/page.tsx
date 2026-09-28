import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { StudioProductCard } from "@/components/StudioProductCard";
import { SetupSlideshow } from "@/components/SetupSlideshow";
import { studioProducts } from "@/content/studio-products";
import { wirelessGroupProducts } from "@/content/wireless-group";

export const metadata: Metadata = {
  title: "Wireless & Networks — MMT 5G/6G Studio, GNU Radio Kit, USRP, OAI",
  description:
    "The Wireless & Networks group: MMT 5G/6G Studio (Studio Core, TestBench, gNB, Field, Fleet, Academy), the MMT-GNU Kit, and USRP and OpenAirInterface tracks. The radio link or the network itself is the deliverable.",
  alternates: { canonical: "/5g-6g" },
};

export default function StudioOverviewPage() {
  return (
    <>
      {/* Compact tagline header */}
      <section className="bg-navyDeep text-white">
        <div className="container-x py-6 md:py-8 text-center">
          <p className="eyebrow !mb-3">Wireless &amp; Networks · MMT CoE</p>
          <h1 className="font-display font-bold tracking-tight text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
            MMT 5G/6G Studio.
          </h1>
          <p className="mt-2 text-sm md:text-base italic text-coral font-display">
            A complete 5G product family — core, test, field, fleet, learn.
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-xs md:text-sm text-skyLight/70">
            Flagship of the Wireless &amp; Networks group, where the radio link or the
            network itself is the deliverable. The MMT-GNU Kit and the USRP and
            OpenAirInterface tracks sit alongside it below.
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
                  {
                    src: "/setup-sona.jpg",
                    alt: "MMT 5G/6G Studio deployed at Sona College of Technology — a tripod-mounted MMT unit between MMT and Sona-branded monitors with a server rack.",
                    eyebrow: "Live deployment · Sona College of Technology",
                    tag: "Studio Core · gNB",
                    caption: "A full MMT 5G/6G Studio lab set up at Sona College of Technology.",
                  },
                  {
                    src: "/setup-nit.jpg",
                    alt: "MMT 5G/6G Studio demonstrated at the NIT Warangal conference — a tripod-mounted MMT unit with a terminal, a drone, and a laptop showing a live map.",
                    eyebrow: "Conference · NIT Warangal",
                    tag: "Studio Core · gNB · Drone",
                    caption: "MMT 5G/6G Studio demonstrated at the NIT Warangal conference.",
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

      {/* Rest of the Wireless & Networks group */}
      <section className="bg-bgAlt pt-12 pb-20 md:pt-16 md:pb-24 border-t border-line">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-coral">Also in Wireless &amp; Networks</p>
            <h2 className="display-h2 text-navy mt-2 max-w-3xl">
              GNU Radio, USRP and OpenAirInterface.
            </h2>
            <p className="mt-4 max-w-2xl text-ink2">
              Same group, same rule: you finish with a working radio or network. The
              GNU Kit ships today on ADALM-Pluto and bladeRF hardware; the USRP and
              OpenAirInterface tracks are in development in Studio Academy.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {wirelessGroupProducts.map((p, i) => (
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
