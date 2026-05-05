import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatusPill, statusToTone } from "./StatusPill";
import type { Vertical } from "@/content/verticals";

export function VerticalCard({ v }: { v: Vertical }) {
  const Icon = v.icon;
  const isFlagship = v.flagship;
  return (
    <Link
      href={v.href}
      aria-label={`${v.name} — ${v.product}`}
      className={cn(
        "group relative flex flex-col h-full rounded-2xl overflow-hidden focus-ring transition-transform duration-300",
        "ring-1 ring-inset",
        isFlagship
          ? "bg-coral text-white ring-coral/60 hover:-translate-y-1"
          : "bg-navy text-white ring-white/10 hover:-translate-y-1",
      )}
    >
      <div className={cn("h-1.5 w-full", isFlagship ? "bg-gold" : "bg-coral")} aria-hidden="true" />
      <div className="p-6 md:p-7 flex flex-col grow gap-5">
        <div
          className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-navy shadow-sm",
          )}
          aria-hidden="true"
        >
          <Icon size={22} strokeWidth={1.75} />
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-white">{v.name}</h3>
          <hr className="my-3 border-white/15" />
          <p className="text-sm font-bold text-white">{v.product}</p>
        </div>

        <StatusPill tone={statusToTone(v.status)}>{v.status}</StatusPill>

        <p className={cn("text-sm leading-relaxed", isFlagship ? "text-white/95" : "text-white/80")}>
          {v.tagline}
        </p>

        <div className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition">
          Explore
          <ArrowRight size={16} aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
