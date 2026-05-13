import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatusPill, statusToTone } from "./StatusPill";
import { TiltCard } from "./TiltCard";
import type { Vertical } from "@/content/verticals";

/**
 * Vertical card used in the home-page "Five programmes" grid.
 *
 * - The flagship (5G/6G) keeps the coral fill for emphasis.
 * - The other four are navy with a coral top accent.
 * - All five render at exactly the same dimensions — same padding, same
 *   borders, no extra wrappers. Grid `items-stretch` (default) ensures
 *   equal height across the row.
 * - Hover animation is richer than a plain lift:
 *     lift + scale + ring tint + radial coral glow + icon pop/tilt +
 *     bottom underline sweep + arrow advance.
 */
export function VerticalCard({ v }: { v: Vertical }) {
  const Icon = v.icon;
  const isFlagship = v.flagship;
  return (
    <TiltCard className="relative h-full rounded-2xl" intensity={7}>
      <Link
        href={v.href}
        aria-label={`${v.name} — ${v.product}`}
        className={cn(
          "group relative flex flex-col h-full rounded-2xl overflow-hidden focus-ring",
          "ring-1 ring-inset",
          "shadow-lg",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1 hover:scale-[1.015] hover:shadow-xl",
          isFlagship
            ? "bg-coral text-white ring-coral/60 shadow-coral/40 hover:ring-gold/70 hover:shadow-coral/60"
            : "bg-navy text-white ring-white/10 shadow-black/30 hover:ring-coral/50 hover:shadow-coral/40",
        )}
      >
        {/* Top accent stripe — gold for flagship, coral for the rest */}
        <div
          className={cn("h-1.5 w-full", isFlagship ? "bg-gold" : "bg-coral")}
          aria-hidden
        />

        {/* Animated bottom accent line that sweeps in on hover */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out",
            isFlagship ? "bg-gold" : "bg-coral",
          )}
        />

        {/* Subtle radial top glow fades in on hover (different tint per variant) */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: isFlagship
              ? "radial-gradient(60% 70% at 50% 0%, rgba(255,255,255,0.16), transparent 70%)"
              : "radial-gradient(60% 70% at 50% 0%, rgba(232,90,79,0.18), transparent 70%)",
          }}
        />

        <div
          className="relative p-6 md:p-7 flex flex-col grow"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* === Block 1: Icon (fixed height) === */}
          <div className="h-12 mb-5">
            <div
              className={cn(
                "inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-navy shadow-md",
                "transition-transform duration-300 ease-out",
                "group-hover:scale-110 group-hover:-rotate-6",
                isFlagship
                  ? "group-hover:shadow-lg group-hover:shadow-gold/40"
                  : "group-hover:shadow-lg group-hover:shadow-coral/40",
              )}
              aria-hidden
              style={{ transform: "translateZ(40px)" }}
            >
              <Icon size={22} strokeWidth={1.75} />
            </div>
          </div>

          {/* === Block 2: Title + product (fixed height block) === */}
          <div className="min-h-[78px] mb-5">
            <h3 className="font-display text-xl font-semibold text-white leading-tight">
              {v.name}
            </h3>
            <hr className={cn("my-3", isFlagship ? "border-white/25" : "border-white/15")} />
            <p className="text-sm font-bold text-white leading-snug">{v.product}</p>
          </div>

          {/* === Block 3: Status pill (fixed-height row) === */}
          <div className="h-7 mb-5 flex items-center">
            <StatusPill tone={statusToTone(v.status)}>{v.status}</StatusPill>
          </div>

          {/* === Block 4: Tagline (fixed min-height = 4 lines so all cards
                 hit the same vertical position for the Explore link) === */}
          <p
            className={cn(
              "text-sm leading-relaxed min-h-[84px]",
              isFlagship ? "text-white/95" : "text-white/80",
            )}
          >
            {v.tagline}
          </p>

          {/* === Block 5: Explore (always pinned to the bottom) === */}
          <div
            className={cn(
              "mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold",
              "transition-all duration-300 ease-out",
              "group-hover:gap-3 group-hover:translate-x-1",
              isFlagship ? "text-white" : "text-coral",
            )}
          >
            Explore
            <ArrowRight
              size={16}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
