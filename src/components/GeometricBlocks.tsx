import { cn } from "@/lib/utils";

export function GeometricBlocks({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none select-none", className)} aria-hidden="true">
      <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="180" y="10" width="120" height="120" fill="#E85A4F" />
        <rect x="220" y="60" width="80" height="80" fill="#F2A65A" />
        <rect x="60" y="120" width="120" height="100" fill="#1E3A5F" stroke="#4A90C2" strokeWidth="2" />
        <rect x="40" y="60" width="40" height="40" fill="#4A90C2" />
        <rect x="270" y="170" width="40" height="40" fill="#F2A65A" />
        <line x1="0" y1="180" x2="320" y2="180" stroke="#4A90C2" strokeOpacity="0.3" strokeWidth="1" />
        <line x1="180" y1="0" x2="180" y2="240" stroke="#4A90C2" strokeOpacity="0.2" strokeWidth="1" />
      </svg>
    </div>
  );
}
