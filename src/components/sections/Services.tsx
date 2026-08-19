"use client";

import { useEffect, useRef, useState } from "react";
import { animate, m, useInView, useReducedMotion } from "framer-motion";
import { Sparkles, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageContext";

/**
 * Counts up from 0 to `value` once the number scrolls into view, instead of
 * just appearing — a small, cheap "premium" touch on the one element of this
 * section people actually linger on (the price). Respects reduced-motion by
 * snapping straight to the final value instead of skipping the number.
 */
function AnimatedNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // Reduced motion: a 0-duration animate() still resolves through the same
    // onUpdate callback (one call, straight to the final value) instead of a
    // synchronous setState in the effect body, which cascading-render lint
    // rules flag — see react-hooks/set-state-in-effect.
    const controls = animate(0, value, {
      duration: reduceMotion ? 0 : 1,
      delay: reduceMotion ? 0 : delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, delay, reduceMotion]);

  return <span ref={ref}>{display}</span>;
}

/**
 * The struck-through "was" price for the one discounted service — a
 * secondary reference next to the real (much bigger) price, not competing
 * with it. The strike is a hand-marked-looking diagonal slash, drawn in on
 * scroll, rather than a perfectly straight typographic line-through.
 */
function StruckPrice({ min, max, delay = 0 }: { min: number; max?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <span ref={ref} className="relative inline-block text-sm font-medium text-white/40 tabular-nums sm:text-base">
      ${min}
      {max !== undefined && <>{"–"}{max}</>}
      <m.span
        className="absolute left-0 top-1/2 h-[2px] w-full origin-center rounded-full bg-rose-400"
        initial={{ scaleX: 0, rotate: 6 }}
        animate={inView ? { scaleX: 1, rotate: 6 } : { rotate: 6 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: delay + 0.5, ease: "easeOut" }}
      />
    </span>
  );
}

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <Container>
        <Reveal className="flex justify-center">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-soft" />
            </span>
            {t.services.badge}
          </div>
        </Reveal>

        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <Reveal delay={0.2} className="flex justify-center">
          <p className="mt-3 flex items-center gap-1.5 text-sm text-white/50">
            <BadgeCheck size={15} className="text-accent-soft" />
            {t.services.trustLine}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ id, icon: Icon, priceMin, priceMax, originalPriceMin, originalPriceMax, popular }, index) => {
            const copy = t.services.items[id as keyof typeof t.services.items];
            const numberDelay = (index % 4) * 0.08 + 0.35;
            const discountPercent = originalPriceMin
              ? Math.round((1 - priceMin / originalPriceMin) * 100)
              : null;

            return (
              <Reveal key={id} delay={(index % 4) * 0.08}>
                <GlassCard
                  className={`flex h-full flex-col ${popular ? "border-accent/40 shadow-[0_20px_48px_-20px_rgba(37,99,235,0.45)]" : ""}`}
                >
                  {popular && (
                    <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-accent-soft">
                      <Sparkles size={11} />
                      {t.services.popularBadge}
                    </span>
                  )}

                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">{copy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{copy.description}</p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    {discountPercent !== null && originalPriceMin !== undefined && (
                      <div className="mb-1.5 flex items-center gap-2">
                        <StruckPrice min={originalPriceMin} max={originalPriceMax} delay={numberDelay} />
                        <span className="rounded-full bg-rose-500/15 px-2 py-0.5 text-xs font-bold text-rose-300">
                          -{discountPercent}%
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      {priceMax === undefined && (
                        <span className="text-sm font-medium text-white/45">{t.services.from}</span>
                      )}
                      <span className="text-gradient-accent text-3xl font-bold tracking-tight tabular-nums">
                        $<AnimatedNumber value={priceMin} delay={numberDelay} />
                        {priceMax !== undefined && (
                          <>
                            {"–"}
                            <AnimatedNumber value={priceMax} delay={numberDelay + 0.12} />
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 flex max-w-2xl items-start gap-2.5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm leading-relaxed text-white/50 sm:items-center sm:text-left">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-accent-soft sm:mt-0" />
            {t.services.priceNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
