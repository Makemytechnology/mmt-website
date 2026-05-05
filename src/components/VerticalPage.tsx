import { Layers, Lightbulb } from "lucide-react";
import { ButtonLink } from "./Button";
import { StatusPill, statusToTone } from "./StatusPill";
import { SectionCTA } from "./SectionCTA";
import { Reveal } from "./Reveal";
import { GeometricBlocks } from "./GeometricBlocks";
import type { VerticalDetail } from "@/content/verticals-detail";

export function VerticalPage({ d }: { d: VerticalDetail }) {
  const ctaHref = `/contact?vertical=${d.slug}`;
  return (
    <>
      {/* 1 — Hero */}
      <section className="relative bg-navyDeep text-white overflow-hidden min-h-[68vh] flex items-center">
        <div className="container-x relative pt-20 pb-20 md:pt-28 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">{d.vertical} Vertical · MMT CoE</p>
            <h1 className="display-h1 text-white">{d.product}</h1>
            <p className="mt-6 text-2xl md:text-3xl italic text-coral font-display max-w-3xl">
              {d.heroSubhead}
            </p>
            <div className="mt-6">
              <StatusPill tone={statusToTone(d.status)}>{d.status}</StatusPill>
            </div>
            <p className="mt-6 max-w-2xl text-sm md:text-base italic text-skyLight/70 leading-relaxed">
              Part of the MMT Center of Excellence. Early access available to design-partner customers.
            </p>
            <div className="mt-10">
              <ButtonLink href={ctaHref} variant="primary" size="lg">
                Request early access
              </ButtonLink>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <GeometricBlocks className="w-full max-w-[360px] ml-auto" />
          </div>
        </div>
      </section>

      {/* 2 — What we're building */}
      <section className="bg-bg section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h2 text-navy max-w-3xl">What we&rsquo;re building.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <Reveal>
              <div>
                <p className="eyebrow !text-muted">Problem</p>
                <div className="mt-5 space-y-5 text-ink2 leading-relaxed">
                  {d.problem.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <p className="eyebrow !text-coral">Solution — {d.product}</p>
                <div className="mt-5 space-y-5 text-ink2 leading-relaxed">
                  {d.solution.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 — Product spec */}
      <section className="bg-navyDeep text-white section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h2 text-white max-w-3xl">Product spec.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.specCards.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.05}>
                <article className="h-full rounded-2xl bg-navyLight/40 ring-1 ring-inset ring-white/10 p-6 hover:ring-coral/40 transition">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-coral/15 text-coral">
                    <Layers size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-skyLight/85 leading-relaxed">{c.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Use cases */}
      <section className="bg-bgAlt section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="display-h2 text-navy max-w-3xl">Use cases.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.06}>
                <article className="h-full rounded-2xl bg-white ring-1 ring-line p-6 border-t-4 border-coral hover:shadow-md transition">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-coralLight text-coral">
                    <Lightbulb size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">{u.title}</h3>
                  <p className="mt-2 text-sm text-ink2 leading-relaxed">{u.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CTA */}
      <SectionCTA
        headline={`Interested in shaping ${d.product}? Join our design partner programme.`}
        href={ctaHref}
        buttonLabel="Get in touch"
      />
    </>
  );
}
