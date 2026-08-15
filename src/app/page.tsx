import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrainFront, Shield, Building2, Zap, Anchor, Pickaxe, ChevronRight, Download, ArrowRight } from "lucide-react";
import { VerticalCard } from "@/components/VerticalCard";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { SectionCTA } from "@/components/SectionCTA";
import { Marquee } from "@/components/Marquee";
import { verticals } from "@/content/verticals";

const industryVerticals = [
  { name: "Railways", icon: TrainFront },
  { name: "Defence", icon: Shield },
  { name: "Smart City", icon: Building2 },
  { name: "Energy", icon: Zap },
  { name: "Ports", icon: Anchor },
  { name: "Mining", icon: Pickaxe },
];

export const metadata: Metadata = {
  title: "MakeMyTechnology",
  description:
    "Deep Edu-Tech Center of Excellence with six platforms — 5G/6G Studio, IoT Fabric, GNU Radio Kit, Cognify, QGuard, and Robotics Solutions — serving Railways, Defence, Smart City, Energy, Ports, and Mining. Spec-faithful engineering. Production-ready software and hardware.",
  alternates: { canonical: "/" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MakeMyTechnology",
  url: "https://makemytechnology.com",
  email: "info@makemytechnology.com",
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

      {/* PLATFORMS — first section of the page */}
      <section className="bg-bg pt-8 pb-20 md:pt-10 md:pb-28">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Reveal className="lg:col-span-7">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-coral">
                Deep Edu-Tech Center of Excellence
              </p>
              <p className="eyebrow text-navy/60 mt-6">Six platforms</p>
              <h1 className="display-h2 text-navy mt-3">
                Independent platforms. Shared engineering culture.
              </h1>
              <p className="mt-4 text-lg text-ink2">
                Each platform has its own product family and roadmap. 5G/6G Studio is
                flagship and shipping today; the others are in active development with
                design partners.
              </p>
            </Reveal>

            {/* Free & open-source Studio — download card (fills the hero's right space) */}
            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl p-px bg-gradient-to-br from-coral/70 via-gold/40 to-sky/50 shadow-xl shadow-black/20">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d2340] via-[#0A1526] to-[#0A1526] p-6 md:p-7">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-coral/25 blur-3xl"
                  />
                  <span className="relative inline-flex items-center gap-2 rounded-full bg-coral/15 ring-1 ring-inset ring-coral/50 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-coral">
                    Free &amp; open-source
                  </span>
                  <h2 className="relative mt-3 font-display text-xl md:text-2xl font-bold text-white leading-tight">
                    The MMT 5G/6G Studio is free to download.
                  </h2>
                  <p className="relative mt-2 text-sm text-skyLight/80">
                    A full 5G Standalone core plus the SA Tester software — open source. Run
                    an end-to-end 5G network on commodity hardware, today.
                  </p>
                  <div className="relative mt-5">
                    <Link
                      href="/5g-6g/studio-core"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral text-white font-semibold px-6 py-3 text-sm shadow-lg shadow-coral/40 ring-1 ring-white/15 hover:bg-coral/90 hover:brightness-110 transition"
                    >
                      <Download size={17} aria-hidden="true" /> Download the free Studio Core
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {verticals.map((v, i) => (
              <Reveal key={v.slug} delay={i * 0.06}>
                <VerticalCard v={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE — we're on YouTube */}
      <section className="bg-navyDeep">
        <div className="container-x py-12 md:py-16">
          <Reveal>
            {/* gradient border wrapper */}
            <div className="rounded-[1.75rem] p-px bg-gradient-to-r from-coral/70 via-white/10 to-sky/60 shadow-2xl shadow-black/50">
              <div className="relative overflow-hidden rounded-[1.7rem] bg-[#0A1526]">
                {/* red glow (left) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-coral/25 blur-3xl"
                />
                {/* halftone dots (right) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 right-0 w-2/3"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.14) 1.1px, transparent 1.1px)",
                    backgroundSize: "15px 15px",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 85%)",
                    maskImage: "linear-gradient(to right, transparent, black 85%)",
                  }}
                />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-8 px-6 py-8 md:px-10 md:py-9">
                  {/* Glossy YouTube play mark with halo */}
                  <div className="relative shrink-0 mx-auto md:mx-0">
                    <div
                      aria-hidden
                      className="absolute inset-0 -m-5 rounded-full bg-coral/30 blur-2xl"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 -m-3 rounded-full ring-1 ring-white/10"
                    />
                    <span className="relative inline-flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-[1.5rem] bg-gradient-to-b from-[#ff4136] to-[#c81e14] shadow-lg shadow-coral/40 ring-1 ring-white/25">
                      {/* top gloss */}
                      <span
                        aria-hidden
                        className="absolute inset-x-1 top-1 h-1/2 rounded-t-[1.2rem] bg-gradient-to-b from-white/30 to-transparent"
                      />
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="white"
                        aria-hidden="true"
                        className="relative drop-shadow"
                      >
                        <path d="M9 6.5v11l9-5.5z" />
                      </svg>
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0 text-center md:text-left">
                    <p className="text-[0.7rem] md:text-xs font-bold uppercase tracking-[0.28em] text-coral">
                      We&rsquo;re on YouTube
                    </p>
                    <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                      See MMT in action.
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-skyLight/70 max-w-xl mx-auto md:mx-0">
                      Demos, live setups, and deep-dives across our 5G/6G Studio, GNU
                      Radio Kit, and more — straight from our lab.
                    </p>
                  </div>

                  {/* Divider */}
                  <div
                    aria-hidden
                    className="hidden md:block h-20 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
                  />

                  {/* Glossy button */}
                  <a
                    href="https://www.youtube.com/@bixbisystemspvtltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group shrink-0 mx-auto md:mx-0 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#ff4136] to-[#d21e14] text-white font-semibold px-7 py-3.5 text-base shadow-lg shadow-coral/40 ring-1 ring-white/20 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-navyDeep transition"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      aria-hidden="true"
                    >
                      <path d="M9 6.5v11l9-5.5z" />
                    </svg>
                    Visit our channel
                    <ChevronRight
                      size={18}
                      aria-hidden="true"
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VERTICALS — industries we serve */}
      <section className="bg-white section-y border-t border-line">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-coral">Verticals we serve</p>
            <h2 className="display-h2 text-navy mt-3 max-w-3xl">
              Built for mission-critical industries.
            </h2>
            <p className="mt-4 text-lg text-ink2 max-w-3xl">
              Our platforms power deployments across the sectors where reliability,
              security, and spec-faithful engineering are non-negotiable.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {industryVerticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.name} delay={i * 0.05}>
                  <div className="group relative h-full rounded-xl bg-bg ring-1 ring-line p-5 md:p-6 text-center hover:ring-coral/40 hover:shadow-md transition">
                    <div className="mx-auto w-12 h-12 rounded-full bg-coral/10 ring-1 ring-coral/20 flex items-center justify-center group-hover:bg-coral/15 transition">
                      <Icon className="w-6 h-6 text-coral" strokeWidth={1.75} />
                    </div>
                    <div className="mt-3 font-display font-semibold text-navy text-sm md:text-base">
                      {v.name}
                    </div>
                  </div>
                </Reveal>
              );
            })}
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

      {/* About / contact card */}
      <section className="bg-white section-y border-t border-line">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="w-full rounded-2xl bg-bg ring-1 ring-line p-6 md:p-8">
                <p className="eyebrow text-coral">About MakeMyTechnology</p>
                <h2 className="display-h2 text-navy mt-3">Deep Edu-Tech Center of Excellence.</h2>
                <p className="mt-4 text-base text-ink2 leading-relaxed">
                  MakeMyTechnology is a Deep Edu-Tech Center of Excellence providing
                  complete 5G lab setups, the Advanced GNU Radio Kit, M2M / IoT sensor
                  platforms, and Studio Academy — our LMS-based learning management
                  software built for students.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-ink2">
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden />
                    <span><span className="font-semibold text-navy">5G Lab Setup</span> — complete teaching and research lab</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden />
                    <span>
                      <Link href="/gnu-radio" className="font-semibold text-navy hover:text-coral transition">
                        Advanced GNU Radio Kit
                      </Link>{" "}
                      — 210 hands-on SDR experiments on real radios
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden />
                    <span><span className="font-semibold text-navy">M2M / IoT Sensors</span> — oneM2M multi-tenant edge platform</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden />
                    <span><span className="font-semibold text-navy">Studio Academy LMS</span> — learning management software for students</span>
                  </li>
                </ul>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden />
                    <span className="text-ink2">
                      <span className="block font-semibold text-navy mb-0.5">Phone</span>
                      <a href="tel:+916361031970" className="hover:text-coral transition">
                        +91 63610 31970
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden />
                    <span className="text-ink2">
                      <span className="block font-semibold text-navy mb-0.5">Email</span>
                      <a href="mailto:info@makemytechnology.com" className="hover:text-coral transition">
                        info@makemytechnology.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionCTA headline="Building deep-tech worth shipping? Let’s talk." />
    </>
  );
}
