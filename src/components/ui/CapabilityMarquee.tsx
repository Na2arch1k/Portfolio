import { cn } from "@/lib/utils";

interface CapabilityMarqueeProps {
  items: string[];
  className?: string;
}

/**
 * An infinite horizontal ticker of capability keywords — the kind of
 * always-moving strip that makes a page feel like it's running, not just
 * sitting there. Pure CSS (translateX keyframe on a doubled item list, the
 * classic seamless-marquee trick), so it costs nothing on the main thread
 * and keeps animating even while Lenis is mid-scroll-ease.
 */
export function CapabilityMarquee({ items, className }: CapabilityMarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden border-y border-white/[0.06] py-5", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
      <div className="animate-marquee flex w-max items-center gap-8 motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 text-lg font-medium tracking-tight text-white/35 sm:text-2xl"
          >
            {item}
            <span className="text-accent-soft/50" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
