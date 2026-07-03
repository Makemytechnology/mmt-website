"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Auto-advancing slide deck (e.g. an exported PowerPoint). Plays on its own
 * with a fixed gap between slides — no click required — and pauses while the
 * pointer is over it so a viewer can read a slide. Prev/next arrows and a
 * counter allow manual control.
 */
export function SlideDeck({
  slides,
  interval = 2000,
  label = "Slide deck",
}: {
  slides: string[];
  interval?: number;
  label?: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const go = useCallback(
    (n: number) => setActive((n + total) % total),
    [total],
  );

  // stable ref so the interval always advances from the latest slide
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    if (total <= 1 || paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, interval);
    return () => clearInterval(id);
  }, [total, interval, paused]);

  return (
    <figure
      className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl bg-black aspect-video"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={label}
    >
      {slides.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`${label} — slide ${idx + 1} of ${total}`}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority={idx === 0}
          className={`object-contain transition-opacity duration-500 ease-in-out ${
            idx === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Prev / next controls (appear on hover) */}
      <button
        type="button"
        onClick={() => go(active - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white ring-1 ring-white/20 opacity-0 group-hover:opacity-100 hover:bg-black/70 transition"
      >
        <ChevronLeft size={20} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(active + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white ring-1 ring-white/20 opacity-0 group-hover:opacity-100 hover:bg-black/70 transition"
      >
        <ChevronRight size={20} aria-hidden="true" />
      </button>

      {/* Slide counter */}
      <div className="absolute bottom-3 right-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
        {active + 1} / {total}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {slides.map((src, idx) => (
          <button
            key={src}
            type="button"
            onClick={() => go(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === active ? "w-5 bg-coral" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </figure>
  );
}
