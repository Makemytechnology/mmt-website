import type { ReactNode } from "react";
import { GeometricBlocks } from "./GeometricBlocks";
import { cn } from "@/lib/utils";

export function SectionHero({
  eyebrow,
  title,
  subhead,
  description,
  children,
  className,
  showBlocks = true,
  minH = "min-h-[70vh] md:min-h-[80vh]",
}: {
  eyebrow?: string;
  title: ReactNode;
  subhead?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  showBlocks?: boolean;
  minH?: string;
}) {
  return (
    <section className={cn("relative bg-navyDeep text-white overflow-hidden", minH, className)}>
      <div className="container-x relative pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
            <h1 className="display-h1 text-white">{title}</h1>
            {subhead && (
              <p className="mt-6 text-2xl md:text-3xl italic text-coral font-display">{subhead}</p>
            )}
            {description && (
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-skyLight/90 leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-10 flex flex-wrap items-center gap-4">{children}</div>}
          </div>
          {showBlocks && (
            <div className="hidden lg:block lg:col-span-5">
              <GeometricBlocks className="w-full max-w-[420px] ml-auto" />
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
    </section>
  );
}
