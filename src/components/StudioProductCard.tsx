import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { TiltCard } from "./TiltCard";
import { BeamBorder } from "./BeamBorder";
import type { StudioProduct } from "@/content/studio-products";

export function StudioProductCard({ p }: { p: StudioProduct }) {
  const Icon = p.icon;
  const linkable = Boolean(p.href);
  const isFlagship = Boolean(p.flagship);

  const base = cn(
    "group relative flex flex-col h-full rounded-2xl overflow-hidden ring-1 ring-inset transition-shadow duration-300",
    isFlagship
      ? "bg-coral text-white ring-coral/60 shadow-lg shadow-coral/20 hover:shadow-coral/40"
      : "bg-navy text-white ring-white/10 shadow-lg shadow-black/20 hover:shadow-coral/30",
  );

  const inner = (
    <>
      <div
        className={cn("h-1.5 w-full", isFlagship ? "bg-gold" : "bg-coral")}
        aria-hidden="true"
      />
      <div
        className="p-6 md:p-7 flex flex-col grow gap-5"
        style={{ transform: "translateZ(30px)" }}
      >
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-navy shadow-md"
          aria-hidden="true"
          style={{ transform: "translateZ(45px)" }}
        >
          <Icon size={22} strokeWidth={1.75} />
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
          <hr className="my-3 border-white/15" />
          <p className="text-xs uppercase tracking-wider text-white/90 font-semibold">
            {p.sub}
          </p>
        </div>

        <ul
          className={cn("space-y-2 text-sm", isFlagship ? "text-white/95" : "text-white/85")}
        >
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span
                className={cn(
                  "mt-2 inline-block w-1 h-1 rounded-full shrink-0",
                  isFlagship ? "bg-white" : "bg-coral",
                )}
                aria-hidden="true"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-2 flex items-center justify-between gap-3">
          {linkable && p.href ? (
            <Link
              href={p.href}
              aria-label={`${p.title} — ${p.sub}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition focus-ring rounded after:absolute after:inset-0 after:content-['']"
            >
              Explore
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ) : (
            <span className="inline-flex items-center text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-white/55">
              Coming soon
            </span>
          )}

          <div className="flex items-center gap-2 shrink-0">
            {p.visit ? (
              <a
                href={p.visit.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.title} — ${p.visit.label} (opens the live site)`}
                className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-coral hover:bg-coral/90 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-inset ring-white/20 shadow-sm shadow-coral/30 transition focus-ring"
              >
                {p.visit.label}
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ) : null}
            {p.doc ? (
              <a
                href={p.doc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${p.title} ${p.doc.label}`}
                className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-inset ring-white/20 transition focus-ring"
              >
                <FileText size={13} aria-hidden="true" />
                {p.doc.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );

  const card = <article className={base}>{inner}</article>;

  const tilt = (
    <TiltCard className="relative h-full rounded-2xl" intensity={8}>
      {card}
    </TiltCard>
  );

  if (isFlagship) {
    return (
      <BeamBorder className="h-full" innerClassName="bg-navy">
        {tilt}
      </BeamBorder>
    );
  }
  return tilt;
}
