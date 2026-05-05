import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { StudioProductCard } from "@/components/StudioProductCard";
import { studioProducts } from "@/content/studio-products";

export const metadata: Metadata = {
  title: "MMT 5G/6G Studio — Core, Test, Field, Fleet, Learn",
  description:
    "MMT 5G/6G Studio is a complete 5G product family: Studio Core, TestBench, IoT, Field, Fleet, and Academy.",
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
