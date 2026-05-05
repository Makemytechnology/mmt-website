import type { Metadata } from "next";
import { VerticalCard } from "@/components/VerticalCard";
import { Reveal } from "@/components/Reveal";
import { verticals } from "@/content/verticals";

export const metadata: Metadata = {
  title: "MakeMyTechnology — Center of Excellence",
  description:
    "MakeMyTechnology is a deep ed-tech Center of Excellence building independent products across 5G/6G, IoT, AI, drone corridor technology, and quantum-safe security.",
  alternates: { canonical: "/" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MakeMyTechnology",
  url: "https://makemytechnology.com",
  description:
    "MakeMyTechnology is a deep ed-tech Center of Excellence building independent products across 5G/6G, IoT, AI, drone corridor technology, and quantum-safe security.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Tagline header — compact */}
      <section className="bg-navyDeep text-white">
        <div className="container-x py-6 md:py-8 text-center">
          <h1 className="font-display font-bold tracking-tight text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
            A deep ed-tech Center of Excellence.
          </h1>
        </div>
      </section>

      {/* Five verticals grid */}
      <section className="bg-bg pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
            {verticals.map((v, i) => (
              <Reveal key={v.slug} delay={i * 0.06}>
                <VerticalCard v={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
