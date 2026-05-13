import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    linkable ? "focus-ring" : "",
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

        {linkable ? (
          <div className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-white opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition">
            Explore
            <ArrowRight size={16} aria-hidden="true" />
          </div>
        ) : (
          <div className="mt-auto pt-2 inline-flex items-center text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-white/55">
            Coming soon
          </div>
        )}
      </div>
    </>
  );

  const card =
    linkable && p.href ? (
      <Link href={p.href} className={base} aria-label={`${p.title} — ${p.sub}`}>
        {inner}
      </Link>
    ) : (
      <article className={base}>{inner}</article>
    );

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
