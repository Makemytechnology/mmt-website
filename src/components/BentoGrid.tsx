"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Container for an uneven bento layout. Children pass `span` props for
 * column / row spans on >=md screens. Single column on mobile.
 */
export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[180px] gap-4 md:gap-5 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function BentoCell({
  children,
  className,
  colSpan = 6,
  rowSpan = 2,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  colSpan?: 3 | 4 | 6 | 8 | 12;
  rowSpan?: 1 | 2 | 3 | 4;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const colClass: Record<number, string> = {
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    6: "lg:col-span-6",
    8: "lg:col-span-8",
    12: "lg:col-span-12",
  };
  const rowClass: Record<number, string> = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
  };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`relative md:col-span-6 ${colClass[colSpan]} ${rowClass[rowSpan]} ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
