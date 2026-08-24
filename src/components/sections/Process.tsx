"use client";

import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/data/process";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative border-y border-white/10 bg-[#0c0c0a] py-24 sm:py-36">
      <Container>
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} description={t.process.description} />

        <div className="mt-20 border-t border-white/15">
          {PROCESS_STEPS.map(({ step, id, icon: Icon }, index) => {
            const copy = t.process.steps[id as keyof typeof t.process.steps];
            return (
              <Reveal key={step} delay={index * 0.045}>
                <article className="group grid items-start gap-5 border-b border-white/15 py-7 transition-colors hover:text-accent sm:grid-cols-[4rem_minmax(12rem,.8fr)_minmax(18rem,1fr)_3rem] sm:items-center sm:py-9">
                  <span className="font-mono text-xs tracking-[0.2em] text-white/35 group-hover:text-accent/60">
                    {String(step).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-4">
                    <Icon size={22} strokeWidth={1.35} className="text-accent" />
                    <h3 className="text-2xl font-semibold uppercase tracking-[-0.045em] text-white transition-colors group-hover:text-accent sm:text-3xl">
                      {copy.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-white/48">{copy.description}</p>
                  <ArrowDownRight size={20} className="hidden text-white/28 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-accent sm:block" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
