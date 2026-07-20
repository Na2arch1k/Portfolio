"use client";

import { m, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  hover?: boolean;
  children?: ReactNode;
}

export function GlassCard({
  className,
  hover = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <m.div
      className={cn(
        "glass group relative overflow-hidden rounded-2xl p-6 sm:p-8",
        hover &&
          "transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.06] hover:shadow-[0_20px_48px_-16px_rgba(37,99,235,0.5)]",
        className
      )}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {hover && (
        <>
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-accent/[0.09] group-hover:via-transparent group-hover:to-transparent group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-soft/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </>
      )}
      {children}
    </m.div>
  );
}
