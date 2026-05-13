import type { Metadata } from "next";
import Image from "next/image";
import { VerticalCard } from "@/components/VerticalCard";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { SectionCTA } from "@/components/SectionCTA";
import { Marquee } from "@/components/Marquee";
import { verticals } from "@/content/verticals";

export const metadata: Metadata = {
  title: "MakeMyTechnology — Deep ed-tech Center of Excellence",
  description:
    "MakeMyTechnology builds independent deep-tech products across 5G/6G, IoT, AI, robotics, and quantum-safe security. Spec-faithful engineering. Production-ready software and hardware.",
  alternates: { canonical: "/" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MakeMyTechnology",
  url: "https://makemytechnology.com",
  email: "info@makemytechnology.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Visvesvaraya Technological University Regional Center, 1st Main Rd, RHCS Layout, Annapoorneshwari Nagar, Naagarabhaavi",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560091",
    addressCountry: "IN",
  },
  description:
    "MakeMyTechnology builds independent deep-tech products across 5G/6G, IoT, AI, robotics, and quantum-safe security.",
};

const stats = [
  { to: 6, suffix: "", label: "Studio products shipping" },
  { to: 202, suffix: "", label: "Protocol test cases" },
  { to: 49, suffix: "", label: "Lua dissectors" },
  { to: 26, suffix: "", label: "Flask blueprints" },
  { to: 8, suffix: "", label: "DNN service domains" },
  { to: 15, suffix: "+", label: "5G network functions" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* VERTICALS — first section of the page */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-coral">Five programmes</p>
            <h2 className="display-h2 text-navy mt-3 max-w-3xl">
              Independent verticals. Shared engineering culture.
            </h2>
            <p className="mt-4 text-lg text-ink2 max-w-3xl">
              Each programme has its own product family and roadmap. 5G/6G is flagship and
              shipping today; the others are in active development with design partners.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
            {verticals.map((v, i) => (
              <Reveal key={v.slug} delay={i * 0.06}>
                <VerticalCard v={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-navy text-white border-t border-white/5">
        <div className="container-x py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.04}>
                <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 md:p-5 text-center hover:bg-white/10 hover:ring-coral/30 transition">
                  <div className="font-display text-3xl md:text-4xl font-bold text-coral leading-none">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[0.6rem] md:text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-white/75">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section
        className="relative bg-navyDeep border-t border-white/5 overflow-hidden"
        style={{ ["--marquee-bg" as string]: "#061428" } as React.CSSProperties}
      >
        <Marquee speed={45}>
          {[
            "3GPP Rel-17",
            "Python · C/DPDK UPF",
            "Kotlin · Jetpack Compose",
            "WASM · Compose Multiplatform",
            "Python · Flask",
            "Robot Framework · 202 tests",
            "tshark · 49 Lua dissectors",
            "Ktor :8080 · REST/SSE/WS",
            "Ollama · Claude · GPT · Gemini",
            "5G-AKA · IMS-AKA · IPsec",
            "VoNR · ViNR · MCPTT",
            "PostgreSQL · SQLite · Room",
            "Docker · GitHub Actions",
          ].map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-xs md:text-sm font-mono text-white/85 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-coral" aria-hidden />
              {s}
            </span>
          ))}
        </Marquee>
      </section>

      {/* FROM THE FIELD — real setup showcase */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow text-coral">From the field</p>
              <h2 className="display-h2 text-navy mt-3">
                Live, on real hardware.
              </h2>
              <p className="mt-6 text-lg text-ink2 leading-relaxed">
                MMT 5G/6G Studio running end-to-end at a customer workshop —
                <span className="font-semibold text-navy"> Studio Core</span> serving live
                NAS / NGAP traffic on the monitor,
                <span className="font-semibold text-navy"> Studio Field</span> on the COTS
                Android handsets, and
                <span className="font-semibold text-navy"> Studio Fleet</span> dashboard
                aggregating KPIs on the laptop.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink2">
                <li className="flex gap-3">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden />
                  <span>Single-binary Go core + C/DPDK data plane on the test rig</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden />
                  <span>Multi-UE drive-test from two phones, KPIs streamed to the fleet</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden />
                  <span>Full RAN + core stack on commodity laptops — no special hardware</span>
                </li>
              </ul>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.08}>
              <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-line shadow-xl bg-black">
                <Image
                  src="/setup.jpg"
                  alt="MMT 5G/6G Studio running end-to-end at a customer workshop — monitor with Studio Core terminal, two Android phones running Studio Field, and a laptop dashboard from Studio Fleet."
                  width={1600}
                  height={1200}
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent text-white px-6 py-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-[0.6rem] tracking-[0.22em] uppercase font-bold text-gold">
                      Live deployment
                    </span>
                    <span className="text-[0.6rem] tracking-[0.22em] uppercase font-bold text-white/60">
                      ·
                    </span>
                    <span className="text-[0.6rem] tracking-[0.22em] uppercase font-bold text-white/80">
                      MMT 5G/6G Studio workshop
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium">
                    Studio Core · Studio Field · Studio Fleet running end-to-end.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionCTA headline="Building deep-tech worth shipping? Let’s talk." />
    </>
  );
}
