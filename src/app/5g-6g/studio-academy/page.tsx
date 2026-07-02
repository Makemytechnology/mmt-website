import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
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
  title: "Studio Academy — AI-Powered 5G Learning Platform",
  description:
    "Studio Academy is the AI-powered LMS inside MMT 5G/6G Studio: a Django learning platform with an AI Tutor (Claude, GPT, Gemini, Ollama), slide-and-animation courses, timed quizzes, and live-equipment labs that run robot tests against Studio Core and Studio TestBench.",
  alternates: { canonical: "/5g-6g/studio-academy" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MMT 5G/6G Studio — Studio Academy",
  description:
    "AI-powered learning management system for 5G. Django LMS with 11 apps, an AI Tutor spanning Claude, GPT, Gemini and Ollama, a slide-and-animation course player, timed quizzes, and live-equipment labs that execute robot tests against Studio Core and Studio TestBench.",
  brand: { "@type": "Brand", name: "MakeMyTechnology" },
  category: "Education Technology Software",
};

const stats = [
  { number: "11", label: "Django apps" },
  { number: "8", label: "Course modules" },
  { number: "16 hrs", label: "Guided curriculum" },
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

const chapters: { n: string; title: string; note: string }[] = [
  { n: "01", title: "Foundations", note: "Apps drive innovation · 1G→5G · baseband · standards bodies" },
  { n: "02", title: "5G Fundamentals", note: "Spectrum, numerology, the NR air interface" },
  { n: "03", title: "BSS / OSS", note: "Business & operations support systems" },
  { n: "04", title: "5G Core", note: "NFs, service-based architecture, PDU sessions" },
  { n: "05", title: "O-RAN", note: "Disaggregated RAN, RU / DU / CU, interfaces" },
  { n: "06", title: "Call Flows", note: "Registration, session setup, mobility signalling" },
  { n: "07", title: "RF, KPIs & Drive Test", note: "Measuring a live network with COTS phones" },
  { n: "08", title: "Hands-On Lab", note: "Build and test your own 5G SA network" },
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
              An AI-powered 5G learning platform.
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
                classroom. Narrated slide-and-animation courses, an AI tutor across
                Claude, GPT, Gemini and Ollama, timed quizzes, and live-equipment
                labs that run real robot tests against Studio Core and Studio
                TestBench.
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
              5G from first principles to a passing test run on a real 5G core.
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

      {/* Flagship course — 8 modules */}
      <section className="bg-navyDeep text-white section-y">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-gold" aria-hidden="true" />
              <p className="eyebrow !text-gold !mb-0">MMT-5G-SE · 16 hours · 8 modules</p>
            </div>
            <h2 className="display-h2 text-white mt-3 max-w-3xl">
              5G System Engineering.
            </h2>
            <p className="mt-4 text-lg text-skyLight/80 max-w-3xl">
              An eight-part course for engineers and students who want a practical,
              end-to-end understanding of how 5G networks are designed, built,
              operated and measured. Each chapter is a self-contained 2-hour lab —
              slides, an interactive animation, a quiz, and a hands-on lab.
            </p>
          </Reveal>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapters.map((ch, i) => (
              <Reveal key={ch.n} delay={(i % 2) * 0.04}>
                <li className="flex gap-4 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10 px-4 py-4 hover:ring-coral/40 transition">
                  <span className="font-mono text-sm text-coral font-semibold shrink-0 w-8">
                    {ch.n}
                  </span>
                  <div>
                    <div className="font-display text-base font-semibold text-white">
                      {ch.title}
                    </div>
                    <p className="mt-0.5 text-sm text-skyLight/70 leading-snug">
                      {ch.note}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
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
