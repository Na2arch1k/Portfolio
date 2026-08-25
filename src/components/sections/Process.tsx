"use client";

import { m } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PROCESS_STEPS } from "@/data/process";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ProcessRow({ step, id, Icon, index }: { step: number; id: string; Icon: typeof ArrowDownRight; index: number }) {
  const { t } = useLanguage();
  const direction = index % 2 === 0 ? 1 : -1;
  const copy = t.process.steps[id as keyof typeof t.process.steps];

  return (
    <m.article initial={{ opacity: .2, x: direction * 90, y: 34, rotateZ: direction * 1.4 }} whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0 }} viewport={{ once: true, margin: "-10% 0px -10% 0px" }} transition={{ duration: .72, ease: [0.16, 1, 0.3, 1] }} className="group relative grid min-h-44 items-center gap-6 border border-white/14 bg-[#11110f] p-6 shadow-[0_24px_65px_rgba(0,0,0,.22)] transition-[background-color,border-color,transform] duration-500 hover:-translate-y-1 hover:border-accent/45 hover:bg-[#15130f] sm:grid-cols-[5rem_minmax(12rem,.8fr)_minmax(18rem,1fr)_3rem] sm:p-8">
      <span className="font-mono text-xs tracking-[.2em] text-accent">{String(step).padStart(2, "0")}</span>
      <div className="flex items-center gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-accent transition-[transform,background-color,color] duration-500 group-hover:rotate-12 group-hover:bg-accent group-hover:text-black"><Icon size={19} strokeWidth={1.35} /></span><h3 className="text-2xl font-semibold uppercase leading-[.9] tracking-[-.05em] sm:text-3xl">{copy.title}</h3></div>
      <p className="max-w-xl text-sm leading-relaxed text-white/45">{copy.description}</p>
      <ArrowDownRight size={20} className="hidden text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-accent sm:block" />
    </m.article>
  );
}

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="relative overflow-hidden border-y border-white/10 bg-[#0c0c0a] py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(255,91,51,.07),transparent_28%)]" />
      <Container className="relative">
        <div className="grid gap-10 border-t border-white/15 pt-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><span className="font-mono text-[9px] uppercase tracking-[.18em] text-accent">{t.process.eyebrow}</span><h2 className="mt-7 max-w-[9ch] text-[clamp(3.4rem,7vw,7rem)] font-semibold uppercase leading-[.8] tracking-[-.075em]">{t.process.title}</h2></div>
          <p className="max-w-xl border-l border-accent pl-5 text-sm leading-relaxed text-white/46">{t.process.description}</p>
        </div>
        <div className="mt-20 grid gap-4 sm:gap-6">
          {PROCESS_STEPS.map(({ step, id, icon }, index) => <ProcessRow key={step} step={step} id={id} Icon={icon} index={index} />)}
        </div>
      </Container>
    </section>
  );
}
