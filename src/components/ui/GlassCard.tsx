"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
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
    <motion.div
      className={cn(
        "glass group relative overflow-hidden rounded-2xl p-6 sm:p-8",
        hover &&
          "transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.5)]",
        className
      )}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props}
    >
      {hover && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-accent/[0.06] group-hover:via-transparent group-hover:to-transparent group-hover:opacity-100" />
      )}
      {children}
    </motion.div>
  );
}
