import { cn } from "@/lib/utils";

export function StatCard({
  number,
  label,
  className,
}: {
  number: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-8 md:p-10 text-center",
        className,
      )}
    >
      <div className="font-display text-5xl md:text-6xl font-bold text-coral leading-none">
        {number}
      </div>
      <div className="mt-3 text-xs md:text-sm tracking-[0.18em] uppercase font-semibold text-white/75">
        {label}
      </div>
    </div>
  );
}
