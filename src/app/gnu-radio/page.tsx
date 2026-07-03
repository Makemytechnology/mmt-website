import type { Metadata } from "next";
import Image from "next/image";
import {
  Radio,
  Activity,
  GraduationCap,
  Trophy,
  Cpu,
  Boxes,
  FlaskConical,
  ExternalLink,
  FileText,
  Download,
  Presentation,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { StatusPill, statusToTone } from "@/components/StatusPill";
import { SectionCTA } from "@/components/SectionCTA";
import { SlideDeck } from "@/components/SlideDeck";
import {
  gnuCategories,
  gnuChapters,
  gnuLessonFlow,
  gnuStats,
} from "@/content/gnu-radio";

export const metadata: Metadata = {
  title: "MMT GNU Radio Kit — Wireless Experiments Platform",
  description:
    "MMT GNU Radio Kit: a hands-on Wireless & Communication Engineering learning platform with 210 SDR experiments across 15 categories, running on real ADALM-Pluto and bladeRF hardware. Powered by GNU Radio.",
  alternates: { canonical: "/gnu-radio" },
};

const ctaHref = "/contact?vertical=gnu-radio";

// Exported MMT-GNU overview deck (12 slides) — auto-plays on the page.
const overviewSlides = Array.from(
  { length: 12 },
  (_, i) => `/gnu-slides/slide-${String(i + 1).padStart(2, "0")}.png`,
);

// Hardware / platform facts (mmt-gnu README + catalog)
const platformFacts: { icon: typeof Radio; label: string; detail: string }[] = [
  { icon: Radio, label: "ADALM-Pluto · bladeRF", detail: "Real SDR · TX→RX loopback" },
  { icon: Activity, label: "183 / 210 hardware-real", detail: "176 SISO + 7 MIMO (bladeRF 2×2)" },
  { icon: Cpu, label: "Simulation fallback", detail: "Built-in AWGN / fading channel" },
  { icon: Boxes, label: "GNU Radio Companion", detail: "Generated .grc per experiment" },
  { icon: GraduationCap, label: "Course → Chapter → Exp", detail: "16-chapter guided curriculum" },
  { icon: FlaskConical, label: "PyQt5 desktop LMS", detail: "Per-device connectors" },
];

const screenshots: { src: string; title: string; caption: string }[] = [
  {
    src: "/gnu-experiments.png",
    title: "Experiment library",
    caption:
      "All 210 experiments across 15 categories — DSP, modulation, OFDM, MIMO, channel coding and more, filterable and searchable.",
  },
  {
    src: "/gnu-hardware.png",
    title: "Hardware & radios",
    caption:
      "The TX→RX loopback signal chain with live device detection — ADALM-Pluto, bladeRF 2×2, and the built-in channel simulator.",
  },
  {
    src: "/gnu-runlab.png",
    title: "Run Lab · live spectrum",
    caption:
      "Each experiment's workbench — tune parameters and run on real SDR or simulation, with live spectrum and constellation plots.",
  },
  {
    src: "/gnu-foxhunt.png",
    title: "Spectrum Fox Hunt",
    caption:
      "A gamified spectrum + waterfall challenge — find the hidden tone and dial in its offset for points.",
  },
  {
    src: "/gnu-grc.png",
    title: "GRC Lab",
    caption:
      "Generate a runnable GNU Radio Companion .grc flowgraph for any experiment, or upload one to inspect it.",
  },
  {
    src: "/gnu-profile.png",
    title: "Profile & resume",
    caption:
      "Per-student XP, levels and badges, with a built-in resume builder that turns completed labs into skills.",
  },
];

export default function GnuRadioPage() {
  return (
    <>
      {/* 1 — Hero */}
      <section className="relative bg-navyDeep text-white overflow-hidden">
        <div className="container-x relative pt-16 pb-16 md:pt-20 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6">GNU Radio Vertical · MMT CoE</p>
            <h1 className="display-h1 text-white">MMT-GNU Kit</h1>
            <p className="mt-6 text-2xl md:text-3xl italic text-coral font-display max-w-2xl">
              210 wireless experiments on real software-defined radio.
            </p>
            <div className="mt-6">
              <StatusPill tone={statusToTone("SHIPPING")}>SHIPPING</StatusPill>
            </div>
            <p className="mt-6 max-w-2xl text-sm md:text-base text-skyLight/80 leading-relaxed">
              A hands-on Wireless &amp; Communication Engineering learning platform. Every
              experiment ships with theory, an inline animation, a slide deck, a hands-on lab, a
              quiz and an auto-graded challenge — and runs on real SDR hardware
              (ADALM-Pluto, bladeRF) through a TX→RX loopback, falling back to a built-in channel
              simulator when no radio is attached.
            </p>

            {/* Academic price — surfaced up top */}
            <div className="mt-7 rounded-2xl bg-white/5 ring-1 ring-inset ring-gold/30 px-5 py-4 inline-block">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-gold">
                Special academic price · for institutions
              </p>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="font-display text-lg md:text-xl font-semibold text-white/40 line-through">
                  ₹1,00,000
                </span>
                <span className="font-display text-4xl md:text-5xl font-bold text-gold leading-none">
                  ₹50,000
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
                  / kit
                </span>
              </div>
              <p className="mt-1.5 text-xs text-skyLight/70">Advanced Communication Lab Kit</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href={ctaHref} variant="primary" size="lg">
                Request a demo
              </ButtonLink>
              <ButtonLink href="/documents/gnu-manual" variant="outlineLight" size="lg">
                <FileText size={18} aria-hidden="true" /> View the manual
              </ButtonLink>
              <a
                href="https://www.gnuradio.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition"
              >
                Powered by GNU Radio — gnuradio.org
                <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <figure className="overflow-hidden rounded-2xl ring-1 ring-inset ring-white/15 bg-black shadow-2xl">
                <Image
                  src="/gnu-course.png"
                  alt="MMT-GNU Kit — the Wireless & Communication Engineering course home, showing the guided chapter list and 210-experiment catalog."
                  width={1200}
                  height={547}
                  className="w-full h-auto block"
                  priority
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 1b — Auto-playing overview deck */}
      <section className="bg-navyDeep text-white border-t border-white/5">
        <div className="container-x pb-14 md:pb-20">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <Presentation size={18} className="text-coral" aria-hidden="true" />
              <p className="eyebrow text-coral !mb-0">Overview · auto-playing deck</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="max-w-5xl mx-auto">
              <SlideDeck
                slides={overviewSlides}
                interval={2000}
                label="MMT-GNU Kit overview"
              />
              <p className="mt-3 text-center text-xs text-skyLight/60">
                Slides advance automatically every 2 seconds · hover to pause, or use the
                arrows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — Headline stats */}
      <section className="bg-navy text-white border-t border-white/5">
        <div className="container-x py-10 md:py-12">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {gnuStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.04}>
                <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 md:p-5 text-center hover:bg-white/10 hover:ring-coral/30 transition">
                  <div className="font-display text-3xl md:text-4xl font-bold text-coral leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[0.6rem] md:text-[0.7rem] tracking-[0.12em] uppercase font-semibold text-white/75 leading-snug">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 — Platform facts */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-coral">Device-agnostic, hardware-real</p>
            <h2 className="display-h2 text-navy mt-3 max-w-3xl">
              One experiment library. Per-device connectors.
            </h2>
            <p className="mt-4 text-lg text-ink2 max-w-3xl">
              The same catalog runs on any supported radio — only the connector differs. Adding an
              SDR is one file plus a config profile.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platformFacts.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.label} delay={(i % 3) * 0.05}>
                  <article className="h-full rounded-2xl bg-white ring-1 ring-line p-6 border-t-4 border-coral hover:shadow-md transition">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-coralLight text-coral">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy">{f.label}</h3>
                    <p className="mt-1.5 text-sm text-ink2 font-mono">{f.detail}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 — Experiment categories */}
      <section className="bg-navyDeep text-white section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow !text-gold">15 categories · 210 experiments</p>
            <h2 className="display-h2 text-white mt-3 max-w-3xl">The experiment catalog.</h2>
            <p className="mt-4 text-lg text-skyLight/80 max-w-3xl">
              From DSP fundamentals to MIMO, OFDM, radar and modern wireless standards
              (Wi-Fi, 4G/5G/6G, LoRa). Every category is a self-contained set of labs.
            </p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {gnuCategories.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.04}>
                <li className="flex items-center justify-between gap-3 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10 px-4 py-3.5 hover:ring-coral/40 transition">
                  <span className="text-sm md:text-base text-white/90">{c.name}</span>
                  <span className="inline-flex items-center justify-center min-w-[2.25rem] h-7 px-2 rounded-full bg-coral/20 text-coral font-mono text-sm font-semibold shrink-0">
                    {c.count}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 — Guided course */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-coral" aria-hidden="true" />
              <p className="eyebrow text-coral !mb-0">16-chapter guided course</p>
            </div>
            <h2 className="display-h2 text-navy mt-3 max-w-3xl">
              Wireless &amp; Communication Engineering.
            </h2>
            <p className="mt-4 text-lg text-ink2 max-w-3xl">
              A curriculum layered on top of the experiment catalog — start at the radio basics and
              work up to 5G/6G. Each lesson is a full stepped flow.
            </p>
          </Reveal>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
            {gnuChapters.map((ch, i) => (
              <Reveal key={ch} delay={(i % 2) * 0.04}>
                <li className="flex gap-4 py-3 border-b border-line">
                  <span className="font-mono text-sm text-coral font-semibold shrink-0 w-8 text-right">
                    {String(i).padStart(2, "0")}
                  </span>
                  <span className="text-base text-ink leading-snug">{ch}</span>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Lesson flow */}
          <Reveal>
            <div className="mt-12 rounded-2xl bg-navy text-white ring-1 ring-inset ring-white/10 p-6 md:p-8">
              <div className="flex items-center gap-2 text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-gold">
                <Cpu size={14} strokeWidth={2} aria-hidden="true" />
                Every experiment ships with
              </div>
              <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                {gnuLessonFlow.map((step, i) => (
                  <li key={step} className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10 px-3 py-2 text-sm font-medium text-white/90">
                      {step}
                    </span>
                    {i < gnuLessonFlow.length - 1 && (
                      <span className="text-white/30" aria-hidden="true">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-skyLight/75 leading-relaxed max-w-3xl">
                MathJax HTML lessons, inline canvas animations, and a generated{" "}
                <span className="font-mono">.grc</span> flowgraph you can open in GNU Radio
                Companion. Self-contained experiment directories keep code, theory, lesson,
                flowgraph and slides together.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — Gamified + screenshots */}
      <section className="bg-bgAlt section-y">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-coral" aria-hidden="true" />
              <p className="eyebrow text-coral !mb-0">Built for the classroom</p>
            </div>
            <h2 className="display-h2 text-navy mt-3 max-w-3xl">Gamified, auto-graded, live.</h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { t: "XP, levels & badges", d: "Per-student profiles track progress across the full course." },
              { t: "64 auto-graded challenges", d: "EVM / BER / SNR challenges scored automatically against targets." },
              { t: "Leaderboard & Fox Hunt", d: "A class leaderboard and a live Spectrum Fox Hunt mini-game." },
            ].map((g, i) => (
              <Reveal key={g.t} delay={i * 0.06}>
                <article className="h-full rounded-2xl bg-white ring-1 ring-line p-6 border-t-4 border-coral">
                  <h3 className="font-display text-lg font-semibold text-navy">{g.t}</h3>
                  <p className="mt-2 text-sm text-ink2 leading-relaxed">{g.d}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Screenshot gallery */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {screenshots.map((s, i) => (
              <Reveal key={s.src} delay={i * 0.06}>
                <figure className="group overflow-hidden rounded-2xl ring-1 ring-line shadow-md bg-black">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <Image
                      src={s.src}
                      alt={`${s.title} — ${s.caption}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <figcaption className="bg-white px-4 py-3">
                    <div className="text-[0.6rem] tracking-[0.18em] uppercase font-bold text-coral">
                      {s.title}
                    </div>
                    <p className="mt-1 text-sm text-ink2 leading-snug">{s.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6b — Flyer */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-coral" aria-hidden="true" />
              <p className="eyebrow text-coral !mb-0">Kit flyer</p>
            </div>
            <h2 className="display-h3 text-navy mt-3">The MMT GNU Radio Kit, on one page.</h2>
            <p className="mt-2 text-sm text-muted max-w-2xl">
              A quick-reference flyer for the kit — hand it to faculty, labs, or procurement.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden ring-1 ring-line bg-white shadow-md">
                <iframe
                  src="/docs/mmt-gnu-flyer.pdf#view=FitH"
                  title="MMT GNU Radio Kit flyer"
                  className="w-full h-[70vh] min-h-[520px] block border-0"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <ButtonLink href="/docs/mmt-gnu-flyer.pdf" variant="outlineDark" size="lg" external>
                  <Download size={18} aria-hidden="true" /> Download flyer
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7 — CTA */}
      <SectionCTA
        headline="Want the GNU Radio Kit in your lab? Let's set up a demo."
        href={ctaHref}
        buttonLabel="Get in touch"
      />
    </>
  );
}
