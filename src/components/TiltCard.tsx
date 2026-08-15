import { type ReactNode } from "react";

/**
 * Card container with a subtle hover "pop" — a gentle lift on hover, no
 * cursor-follow tilt (that shaky 3D effect was removed by request). The
 * `intensity` / `glare` props are accepted for backward compatibility but
 * intentionally ignored.
 */
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  return (
    <div
      className={`group ${className ?? ""} relative transition-transform duration-300 ease-out hover:-translate-y-1`}
    >
      {children}
    </div>
  );
}
