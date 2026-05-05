import { cn } from "@/lib/utils";

type Tone = "flagship" | "dev" | "research";

const tones: Record<Tone, string> = {
  flagship: "bg-gold/20 text-gold ring-1 ring-inset ring-gold/40",
  dev: "bg-coralLight/20 text-coral ring-1 ring-inset ring-coral/40",
  research: "bg-skyLight/20 text-sky ring-1 ring-inset ring-sky/40",
};

export function StatusPill({ children, tone = "dev", className }: { children: React.ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.65rem] tracking-[0.18em] uppercase font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function statusToTone(status: string): Tone {
  if (status.includes("SHIPPING")) return "flagship";
  if (status.includes("RESEARCH")) return "research";
  return "dev";
}
