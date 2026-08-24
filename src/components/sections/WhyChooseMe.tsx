"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { ADVANTAGES } from "@/data/advantages";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WhyChooseMe() {
  const { t } = useLanguage();

  return (
    <section id="why-me" className="bg-[#efeee8] py-24 text-[#090908] sm:py-36">
      <Container>
        <div className="grid gap-12 border-t border-black/25 pt-5 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#d73c1b]">
              <span className="h-1.5 w-1.5 bg-[#d73c1b]" /> {t.whyChooseMe.eyebrow}
            </span>
            <TextReveal
              as="h2"
              text={t.whyChooseMe.title}
              delay={0.05}
              className="mt-7 max-w-[10ch] text-[clamp(3.2rem,7vw,7rem)] font-semibold uppercase leading-[0.83] tracking-[-0.07em]"
            />
          </div>
          <div className="self-end">
            <Reveal>
              <p className="max-w-xl border-l border-[#d73c1b] pl-5 text-sm leading-relaxed text-black/60 sm:text-base">
                {t.whyChooseMe.description}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid border-l border-t border-black/20 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map(({ id, icon: Icon }, index) => {
            const copy = t.whyChooseMe.items[id as keyof typeof t.whyChooseMe.items];
            return (
              <Reveal key={id} delay={(index % 3) * 0.06}>
                <article className="group flex min-h-64 flex-col border-b border-r border-black/20 p-6 transition-colors hover:bg-[#ff5b33] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-black/42">NO—00{index + 1}</span>
                    <Icon size={21} strokeWidth={1.4} />
                  </div>
                  <div className="mt-auto pt-16">
                    <h3 className="text-xl font-semibold uppercase tracking-[-0.035em] sm:text-2xl">{copy.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/58">{copy.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
