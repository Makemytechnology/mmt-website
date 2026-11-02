"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function timeLeft(targetMs: number): TimeLeft {
  const totalSeconds = Math.max(0, Math.floor((targetMs - Date.now()) / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

/**
 * Live countdown to a fixed target date.
 *
 * Renders Days · Hours · Minutes · Seconds tiles styled for dark backgrounds.
 * Hydration-safe: shows "--" until mounted on the client, then ticks every
 * second. When the target passes it shows a "now live" message.
 */
export function CountdownTimer({
  target,
  size = "md",
  className,
}: {
  target: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const targetMs = new Date(target).getTime();
  const [mounted, setMounted] = useState(false);
  const [left, setLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setLeft(timeLeft(targetMs));
    const id = setInterval(() => setLeft(timeLeft(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const done = mounted && targetMs - Date.now() <= 0;

  if (done) {
    return (
      <p className={cn("font-display font-semibold text-coral", className)}>
        🎉 Now live — the new courses have launched!
      </p>
    );
  }

  const pad = (n: number) => String(n).padStart(2, "0");
  const units: { label: string; value: number }[] = [
    { label: "Days", value: left.days },
    { label: "Hours", value: left.hours },
    { label: "Mins", value: left.minutes },
    { label: "Secs", value: left.seconds },
  ];

  const box =
    size === "sm" ? "min-w-[2.9rem] px-2 py-1.5" : "min-w-[3.75rem] md:min-w-[4.25rem] px-3 py-2.5";
  const num = size === "sm" ? "text-lg md:text-xl" : "text-2xl md:text-3xl";
  const sep = size === "sm" ? "text-base md:text-lg" : "text-xl md:text-2xl";

  return (
    <div
      role="timer"
      aria-label="Time remaining until the new courses launch"
      className={cn("flex items-start gap-1.5 md:gap-2", className)}
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex items-start gap-1.5 md:gap-2">
          <div
            className={cn(
              "flex flex-col items-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15 text-white",
              box,
            )}
          >
            <span className={cn("font-display font-bold tabular-nums leading-none", num)}>
              {mounted ? pad(u.value) : "--"}
            </span>
            <span className="mt-1 text-[0.5rem] md:text-[0.55rem] uppercase tracking-[0.16em] font-semibold text-white/55">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 ? (
            <span className={cn("font-display font-bold text-white/25 leading-none pt-1.5", sep)} aria-hidden>
              :
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
