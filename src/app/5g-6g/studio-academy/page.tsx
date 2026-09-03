import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  BookOpen,
  FlaskConical,
  ClipboardCheck,
  Activity,
  BarChart3,
  Server,
  Layers,
  Presentation,
  FileText,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { StatusPill } from "@/components/StatusPill";
import { SectionCTA } from "@/components/SectionCTA";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Studio Academy — AI-Powered 5G & Wireless Learning Platform",
  description:
    "Studio Academy is the AI-powered LMS inside MMT 5G/6G Studio: a Django learning platform with three courses — 5G System Engineering plus GNU Radio & Wireless (Basics and Advanced) — an AI Tutor (Claude, GPT, Gemini, Ollama), slide-and-animation lessons, timed quizzes, and live-equipment labs on real hardware.",
  alternates: { canonical: "/5g-6g/studio-academy" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MMT 5G/6G Studio — Studio Academy",
  description:
    "AI-powered learning management system for 5G and wireless. Django LMS with 11 apps and three courses — 5G System Engineering plus GNU Radio & Wireless (Basics and Advanced) — an AI Tutor spanning Claude, GPT, Gemini and Ollama, a slide-and-animation course player, timed quizzes, and live-equipment labs on real hardware (Studio Core, Studio TestBench, ADALM-Pluto, bladeRF).",
  brand: { "@type": "Brand", name: "MakeMyTechnology" },
  category: "Education Technology Software",
};

const stats = [
  { number: "3", label: "Courses" },
  { number: "24", label: "Chapters" },
  { number: "11", label: "Django apps" },
];

const capabilities: { icon: typeof GraduationCap; title: string; description: string }[] = [
  {
    icon: Sparkles,
    title: "MMT-AI-Tutor",
    description:
      "A built-in AI tutor that answers questions in context, backed by your choice of Claude, GPT, Gemini, or a local Ollama model — no vendor lock-in.",
  },
  {
    icon: Presentation,
    title: "Slide + animation player",
    description:
      "Each chapter plays like a video — narrated, auto-advancing slides followed by an interactive companion animation. Keyboard-navigable, resume where you left off.",
  },
  {
    icon: FlaskConical,
    title: "Live-equipment labs",
    description:
      "Hands-on labs run real robot test suites against Studio Core and Studio TestBench — nothing runs on the learner's laptop. Results report straight back into the lesson.",
  },
  {
    icon: ClipboardCheck,
    title: "Timed quizzes",
    description:
      "Per-chapter quizzes with a countdown timer and per-question marks. Auto-graded, with progress rolled up into the learner's course completion.",
  },
  {
    icon: Activity,
    title: "Protocol Workbench",
    description:
      "Inspect real logs, message-sequence charts, and counters from the Studio stack — turning captured 5G signalling into a teaching surface.",
  },
  {
    icon: BarChart3,
    title: "Progress tracking",
    description:
      "Per-learner progress across modules, chapters, and steps, with a My Progress dashboard and per-module completion percentages.",
  },
  {
    icon: Server,
    title: "Studio runtime aware",
    description:
      "A pre-flight panel shows Studio Core / Tester health and starts the Studio runtime on demand, so labs only run when the stack is up.",
  },
  {
    icon: BookOpen,
    title: "Courses & admin",
    description:
      "Django-backed course catalog with Courses, My Progress, Profile, and Admin — manage learners, content, and credentials from one console.",
  },
  {
    icon: Layers,
    title: "Concept → lab flow",
    description:
      "Every chapter moves from concepts and vocabulary to operations, the 5G core and RAN, signalling procedures, and finally two practical labs.",
  },
];

const courses: {
  code: string;
  title: string;
  meta: string;
  blurb: string;
  chapters: string[];
}[] = [
  {
    code: "MMT-5G-SE",
    title: "5G System Engineering",
    meta: "8 chapters · concepts → live 5G SA lab",
    blurb:
      "A practical, end-to-end path through how 5G networks are designed, built, operated and measured — ending on a hands-on lab against a real 5G Standalone core.",
    chapters: [
      "Foundations",
      "5G Fundamentals",
      "BSS / OSS",
      "5G Core",
      "O-RAN",
      "Call Flows",
      "RF, KPIs & Drive Test",
      "Hands-On Lab",
    ],
  },
  {
    code: "GNU-BASICS",
    title: "GNU Radio & Wireless — Basics",
    meta: "8 chapters · SDR from first principles",
    blurb:
      "Hands-on wireless & communication engineering with GNU Radio and ADALM-Pluto — the Basics track, from SDR fundamentals and DSP through analog/digital modulation to channel models.",
    chapters: [
      "Getting Started: SDR, GNU Radio & ADALM-Pluto",
      "DSP Foundations",
      "RF & Spectrum Analysis",
      "Analog Modulation",
      "Digital Modulation",
      "Synchronization & Estimation",
      "Channel Coding & Error Correction",
      "Channel Models & Propagation",
    ],
  },
  {
    code: "GNU-ADVANCED",
    title: "GNU Radio & Wireless — Advanced",
    meta: "8 chapters · OFDM, MIMO, radar & cognitive radio",
    blurb:
      "The Advanced track — modern multi-carrier and multi-antenna systems, wireless standards (Wi-Fi → 4G/5G/6G), radar & sensing and cognitive radio, all on real SDR hardware.",
    chapters: [
      "OFDM & Multi-Carrier",
      "Spread Spectrum",
      "MIMO & Antenna Systems",
      "Wireless Standards & Protocols (Wi-Fi → 4G/5G/6G)",
      "Radar & Sensing",
      "Adaptive & Cognitive Radio",
      "Audio & Multimedia",
      "Advanced Topics",
    ],
  },
];

const screenshots: { src: string; title: string; caption: string }[] = [
  {
    src: "/studio-academy-modules.jpg",
    title: "Course modules",
    caption:
      "The 8-module 5G System Engineering course — per-chapter progress, steps, and estimated time.",
  },
  {
    src: "/studio-academy-lab.jpg",
    title: "Live-equipment lab",
    caption:
      "Lab E1.1 runs a robot registration test against Studio Core, with a pre-flight health check and sample output to compare against.",
  },
  {
    src: "/studio-academy-quiz.jpg",
    title: "Timed quiz",
    caption:
      "Auto-graded chapter quizzes with a countdown timer and per-question marks.",
  },
];

export default function StudioAcademyPage() {
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
            <p className="eyebrow mb-3">Studio Academy · MMT 5G/6G Studio</p>
            <h1 className="font-display font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Studio Academy.
            </h1>
            <p className="mt-3 text-sm md:text-base italic text-coral font-display">
              An AI-powered platform for 5G &amp; wireless.
            </p>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-3">
              <StatusPill tone="flagship">Shipping · v1.0</StatusPill>
              <StatusPill tone="dev">Django LMS</StatusPill>
              <StatusPill tone="research">AI Tutor</StatusPill>
            </div>
          </div>
        </div>
      </section>

      {/* Hero — course player screenshot + intro */}
      <section className="bg-navyDeep">
        <div className="container-x pb-12 md:pb-16">
          <Reveal>
            <div className="max-w-5xl mx-auto">
              <figure className="overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10 bg-black shadow-2xl">
                <Image
                  src="/studio-academy-player.jpg"
                  alt="Studio Academy — the chapter player: narrated auto-advancing slides with an AI tutor, chapter navigation, and a mark-complete flow."
                  width={1600}
                  height={1400}
                  className="w-full h-auto block"
                  priority
                />
              </figure>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-3xl mx-auto mt-8 text-center">
              <p className="lede text-white/85">
                Studio Academy is the learning half of the MMT 5G/6G Studio — a
                Django LMS that turns the whole Studio stack into a hands-on
                classroom. Three guided courses — 5G System Engineering plus GNU
                Radio &amp; Wireless at Basics and Advanced levels — with narrated
                slide-and-animation lessons, an AI tutor across Claude, GPT, Gemini
                and Ollama, timed quizzes, and live-equipment labs on real hardware.
              </p>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
                <ButtonLink
                  href="/contact?vertical=5g-6g&package=studio-academy"
                  variant="primary"
                  size="lg"
                >
                  Request a demo
                </ButtonLink>
                <ButtonLink
                  href="/documents/5g-system-engineering-syllabus"
                  variant="outlineLight"
                  size="lg"
                >
                  <FileText size={18} aria-hidden="true" /> View syllabus
                </ButtonLink>
                <ButtonLink href="/5g-6g/studio-core" variant="outlineLight" size="lg">
                  Labs run on Studio Core
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Key stats row */}
          <Reveal delay={0.18}>
            <div className="max-w-5xl mx-auto mt-12">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stats.map((s) => (
                  <li
                    key={s.label}
                    className="rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-4 text-center"
                  >
                    <span className="block font-display text-3xl font-bold text-coral leading-none">
                      {s.number}
                    </span>
                    <span className="mt-2 block text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-white/75">
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-xs text-skyLight/70 leading-relaxed">
                AI Tutor across Claude / GPT / Gemini / Ollama · slides + animation ·
                timed quizzes · live-equipment labs on the real Studio stack.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h2 text-navy max-w-3xl">What it does.</h2>
            <p className="mt-4 text-lg text-ink2 max-w-3xl">
              A complete learning platform built on top of the Studio stack — teach
              5G and wireless/SDR from first principles all the way to hands-on labs
              on real hardware.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 3) * 0.05}>
                  <article className="h-full rounded-2xl bg-white ring-1 ring-line p-6 hover:ring-coral/40 hover:shadow-md transition">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-coralLight text-coral">
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink2 leading-relaxed">
                      {c.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* The courses — 3 tracks */}
      <section className="bg-navyDeep text-white section-y">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-gold" aria-hidden="true" />
              <p className="eyebrow !text-gold !mb-0">3 courses · 24 chapters</p>
            </div>
            <h2 className="display-h2 text-white mt-3 max-w-3xl">The courses.</h2>
            <p className="mt-4 text-lg text-skyLight/80 max-w-3xl">
              Three guided tracks on one platform — 5G System Engineering plus GNU
              Radio &amp; Wireless at Basics and Advanced levels. Every chapter moves
              from concepts and animations to a quiz and a hands-on lab.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {courses.map((co, ci) => (
              <Reveal key={co.code} delay={ci * 0.05}>
                <article className="rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-6 md:p-7 hover:ring-coral/40 transition">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-coral/20 text-coral font-mono text-xs font-semibold px-3 py-1">
                      {co.code}
                    </span>
                    <span className="text-[0.7rem] tracking-[0.16em] uppercase font-semibold text-skyLight/60">
                      {co.meta}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold text-white">
                    {co.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-skyLight/80 max-w-3xl leading-relaxed">
                    {co.blurb}
                  </p>
                  <ol className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {co.chapters.map((ch, i) => (
                      <li
                        key={ch}
                        className="flex gap-2.5 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 px-3 py-2.5"
                      >
                        <span className="font-mono text-xs text-coral font-semibold shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-white/85 leading-snug">{ch}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Live-platform CTA — "this is where you take the courses" */}
      <section className="bg-navyDeep">
        <div className="container-x pb-14 md:pb-20">
          <Reveal>
            <div className="rounded-2xl bg-gradient-to-br from-coral/20 via-navy to-navy ring-1 ring-inset ring-coral/30 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <p className="eyebrow !text-coral !mb-1">The live platform</p>
                <h2 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                  This is where you take all the courses.
                </h2>
                <p className="mt-2 text-sm md:text-base text-skyLight/80 max-w-2xl">
                  Sign in to Studio Academy to access every course — 5G System
                  Engineering and GNU Radio &amp; Wireless (Basics &amp; Advanced) —
                  with the AI tutor, quizzes and live-equipment labs.
                </p>
              </div>
              <a
                href="https://studioacademy.makemytechnology.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Studio Academy — the live learning platform"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral/90 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral/30 ring-1 ring-inset ring-white/15 transition focus-ring"
              >
                Visit here
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Screenshot gallery */}
      <section className="bg-bgAlt section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h3 text-navy">Inside the platform.</h2>
            <p className="mt-2 text-sm text-muted max-w-2xl">
              Courses, live-equipment labs, and quizzes — all wired to the real
              Studio stack.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {screenshots.map((s, i) => (
              <Reveal key={s.src} delay={i * 0.06}>
                <figure className="group overflow-hidden rounded-2xl ring-1 ring-line shadow-md bg-black">
                  <Image
                    src={s.src}
                    alt={`${s.title} — ${s.caption}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                  />
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

      <SectionCTA
        headline="Want Studio Academy for your team or campus? Let’s talk."
        href="/contact?vertical=5g-6g&package=studio-academy"
        buttonLabel="Get in touch"
      />
    </>
  );
}
