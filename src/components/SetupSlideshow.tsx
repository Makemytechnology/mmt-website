"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type SetupSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  tag: string;
  caption: string;
};

/**
 * Auto-advancing image slideshow for the 5G/6G Studio "live setup" showcase.
 * Cross-fades between slides on a fixed interval (default 3s) and exposes
 * clickable dot indicators.
 */
export function SetupSlideshow({
  slides,
  interval = 3000,
}: {
  slides: SetupSlide[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl bg-black aspect-[4/3] md:aspect-[16/10]">
      {slides.map((s, idx) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority={idx === 0}
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            idx === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Caption for the active slide */}
      <figcaption className="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black/85 via-black/55 to-transparent text-white px-6 py-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[0.6rem] tracking-[0.22em] uppercase font-bold text-gold">
            {slides[active].eyebrow}
          </span>
          <span className="text-[0.6rem] tracking-[0.22em] uppercase font-bold text-white/60">
            ·
          </span>
          <span className="text-[0.6rem] tracking-[0.22em] uppercase font-bold text-white/80">
            {slides[active].tag}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-white/95">{slides[active].caption}</p>
      </figcaption>

      {/* Dot indicators */}
      {slides.length > 1 ? (
        <div className="absolute top-4 right-4 z-10 flex gap-1.5">
          {slides.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Show slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === active ? "w-5 bg-coral" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      ) : null}
    </figure>
  );
}
