import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "grid gap-8 border-t border-white/15 pt-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,30rem)] lg:gap-16",
        align === "center" && "lg:grid-cols-1 lg:text-center",
        className
      )}
    >
      <div className={cn(align === "center" && "mx-auto")}>
        {eyebrow && (
          <Reveal>
            <span className="mb-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              <span className="h-1.5 w-1.5 bg-accent" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <TextReveal
          as="h2"
          text={title}
          delay={0.06}
          className="max-w-[13ch] text-[clamp(2.9rem,6.5vw,6.8rem)] font-semibold uppercase leading-[0.86] tracking-[-0.065em] text-[#efeee8]"
        />
      </div>
      {description && (
        <Reveal delay={0.14} className={cn("self-end", align === "center" && "mx-auto max-w-2xl")}>
          <p className="border-l border-accent pl-5 text-sm leading-relaxed text-white/58 sm:text-base">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
