import { cn } from "@/lib/utils";

interface CapabilityMarqueeProps {
  items: string[];
  className?: string;
}

export function CapabilityMarquee({ items, className }: CapabilityMarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden border-b border-black/20 bg-accent py-4 text-black sm:py-5", className)}>
      <div className="animate-marquee flex w-max items-center gap-7 motion-reduce:animate-none sm:gap-10">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-7 whitespace-nowrap text-lg font-black uppercase tracking-[-0.04em] sm:gap-10 sm:text-2xl"
          >
            {item}
            <span className="font-mono text-xs font-medium tracking-normal" aria-hidden>
              [ {String((index % items.length) + 1).padStart(2, "0")} ]
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
