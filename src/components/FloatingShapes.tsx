"use client";

import { motion, useReducedMotion } from "framer-motion";

type ShapeKind = "cube" | "ring" | "prism";

type Shape = {
  kind: ShapeKind;
  size: number;
  top: string;
  left: string;
  dur: number;
  delay: number;
  color: string;
  rotate: number;
};

const defaultShapes: Shape[] = [
  { kind: "cube", size: 60, top: "12%", left: "8%", dur: 12, delay: 0, color: "#E85A4F", rotate: 25 },
  { kind: "ring", size: 90, top: "65%", left: "12%", dur: 16, delay: 1, color: "#4A90C2", rotate: -20 },
  { kind: "prism", size: 70, top: "20%", left: "82%", dur: 14, delay: 0.5, color: "#F2A65A", rotate: 40 },
  { kind: "cube", size: 50, top: "78%", left: "85%", dur: 18, delay: 2, color: "#E85A4F", rotate: -35 },
  { kind: "ring", size: 40, top: "45%", left: "92%", dur: 20, delay: 1.5, color: "#F2A65A", rotate: 10 },
];

function Cube({ size, color }: { size: number; color: string }) {
  const half = size / 2;
  return (
    <div
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        position: "relative",
      }}
    >
      {[
        { tx: 0, ty: 0, tz: half, ry: 0 },
        { tx: 0, ty: 0, tz: -half, ry: 180 },
        { tx: half, ty: 0, tz: 0, ry: 90 },
        { tx: -half, ty: 0, tz: 0, ry: -90 },
        { tx: 0, ty: -half, tz: 0, ry: 0, rx: 90 },
        { tx: 0, ty: half, tz: 0, ry: 0, rx: -90 },
      ].map((f, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            border: `1.5px solid ${color}`,
            background: `${color}10`,
            transform: `translate3d(${f.tx}px, ${f.ty}px, ${f.tz}px) rotateY(${f.ry}deg) rotateX(${f.rx ?? 0}deg)`,
          }}
        />
      ))}
    </div>
  );
}

function Ring({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      <ellipse cx="50" cy="50" rx="42" ry="14" fill="none" stroke={color} strokeWidth="2" opacity="0.7" />
      <ellipse cx="50" cy="50" rx="42" ry="14" fill="none" stroke={color} strokeWidth="1" opacity="0.4" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="14" fill="none" stroke={color} strokeWidth="1" opacity="0.4" transform="rotate(-60 50 50)" />
      <circle cx="50" cy="50" r="4" fill={color} />
    </svg>
  );
}

function Prism({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      <polygon points="50,5 95,80 5,80" fill={`${color}15`} stroke={color} strokeWidth="2" />
      <polygon points="50,5 95,80 50,55" fill={`${color}30`} stroke={color} strokeWidth="1" />
      <line x1="50" y1="5" x2="50" y2="55" stroke={color} strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

export function FloatingShapes({
  shapes = defaultShapes,
  className,
}: {
  shapes?: Shape[];
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden
      style={{ perspective: 1200 }}
    >
      {shapes.map((s, i) => {
        const Shape =
          s.kind === "cube" ? (
            <Cube size={s.size} color={s.color} />
          ) : s.kind === "ring" ? (
            <Ring size={s.size} color={s.color} />
          ) : (
            <Prism size={s.size} color={s.color} />
          );
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.5 }
                : {
                    opacity: [0.35, 0.55, 0.35],
                    y: [0, -20, 0],
                    rotateX: [s.rotate, s.rotate + 360],
                    rotateY: [0, 360],
                  }
            }
            transition={
              reduce
                ? { duration: 0.3 }
                : {
                    duration: s.dur,
                    repeat: Infinity,
                    delay: s.delay,
                    ease: "easeInOut",
                  }
            }
            style={{
              position: "absolute",
              top: s.top,
              left: s.left,
              transformStyle: "preserve-3d",
            }}
          >
            {Shape}
          </motion.div>
        );
      })}
    </div>
  );
}
