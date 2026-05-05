import type { Metadata } from "next";
import { SectionCTA } from "@/components/SectionCTA";
import { GeometricBlocks } from "@/components/GeometricBlocks";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — MakeMyTechnology",
  description: "MakeMyTechnology is a deep ed-tech Center of Excellence treating each vertical as an independent programme.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-navyDeep text-white overflow-hidden">
        <div className="container-x relative pt-24 pb-20 md:pt-32 md:pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">About MMT</p>
            <h1 className="display-h1 text-white">MakeMyTechnology — a deep ed-tech CoE.</h1>
            <p className="mt-6 max-w-3xl lede">
              We are a Center of Excellence building independent product families across five frontier technology
              tracks. We ship products, not slide decks.
            </p>
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <GeometricBlocks className="w-full max-w-[360px] ml-auto" />
          </div>
        </div>
      </section>

      <section className="bg-bg section-y">
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="display-h2 text-navy">Why a CoE.</h2>
            <p className="mt-6 text-lg text-ink2 leading-relaxed">
              MMT was founded on the conviction that deep ed-tech progress requires patient, focused engineering — not
              the constant context-switching of a generalist consultancy. We organise as a Center of Excellence so
              each vertical can move at its own pace while sharing the engineering culture that makes serious
              products possible.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h3 className="display-h3 text-navy mt-14">Five independent programmes.</h3>
            <p className="mt-4 text-lg text-ink2 leading-relaxed">
              Our 5G/6G, IoT, AI, drone corridor, and quantum-safe programmes each have their own product, their
              own customer profile, and their own roadmap. The 5G/6G vertical is the first to ship — MMT 5G/6G
              Studio is in production with operators and enterprise customers. The other four are in active
              development with design-partner customers.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h3 className="display-h3 text-navy mt-14">Built for deployment, not demo.</h3>
            <p className="mt-4 text-lg text-ink2 leading-relaxed">
              Every product MMT ships has to survive contact with a real operator, a real factory, or a real
              regulator. That bias toward deployable engineering — spec-faithful, performance-honest, and
              security-first — runs through every vertical we work on.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionCTA headline="Want to work with the MMT Center of Excellence? Let’s talk." />
    </>
  );
}
