"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ADVANTAGES } from "@/data/advantages";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WhyChooseMe() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start center", "end center"] });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="why-me" className="relative scroll-mt-24 overflow-clip bg-[#efeee8] py-24 text-[#090908] sm:py-36">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="border-t border-black/25 pt-5">
          <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[.18em] text-black/42">
            <span className="flex items-center gap-2 text-[#d73c1b]"><i className="h-1.5 w-1.5 bg-[#d73c1b]" />{t.whyChooseMe.eyebrow}</span>
            <span>Principles / 01—06</span>
          </div>
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div className="self-start lg:sticky lg:top-32">
            <h2 className="max-w-[8ch] text-[clamp(2.8rem,11vw,6.5rem)] font-semibold uppercase leading-[.82] tracking-[-.075em]">{t.whyChooseMe.title}</h2>
            <p className="mt-7 max-w-md border-l border-[#d73c1b] pl-5 text-sm leading-relaxed text-black/58 sm:text-base">{t.whyChooseMe.description}</p>

            <div className="mt-10 hidden items-center gap-4 lg:flex">
              <div className="relative h-28 w-px overflow-hidden bg-black/15"><m.div style={{ scaleY: progressScale, transformOrigin: "top" }} className="absolute inset-0 bg-[#d73c1b]" /></div>
              <div className="font-mono text-[8px] uppercase tracking-[.17em] text-black/38"><span className="block text-[#d73c1b]">Scroll</span><span className="mt-2 block">Quality system</span></div>
            </div>
          </div>

          <div className="border-t border-black/20">
            {ADVANTAGES.map(({ id, icon: Icon }, index) => {
              const copy = t.whyChooseMe.items[id as keyof typeof t.whyChooseMe.items];
              const direction = index % 2 === 0 ? 1 : -1;
              return (
                <m.article
                  key={id}
                  initial={reduceMotion ? false : { opacity: .25, x: direction * 70, y: 34, rotateZ: direction * 1.2 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0 }}
                  viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
                  transition={{ duration: .72, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative grid min-h-52 overflow-hidden border-b border-black/20 px-5 py-7 transition-[background-color,color,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:z-10 hover:-translate-x-2 hover:bg-[#0b0b09] hover:text-white sm:grid-cols-[4rem_1fr_minmax(14rem,.8fr)_3rem] sm:items-center sm:gap-6 sm:px-7 sm:py-9"
                >
                  <span className="absolute inset-y-0 left-0 w-0 bg-[#ff5b33] transition-all duration-500 group-hover:w-1.5" />
                  <span className="font-mono text-[9px] tracking-[.18em] text-black/38 transition-colors group-hover:text-accent">0{index + 1}</span>
                  <div className="mt-8 flex items-center gap-4 sm:mt-0"><span className="grid h-11 w-11 shrink-0 place-items-center border border-black/20 transition-[transform,background-color,color,border-color] duration-500 group-hover:rotate-12 group-hover:border-accent group-hover:bg-accent group-hover:text-black"><Icon size={19} strokeWidth={1.35} /></span><h3 className="text-2xl font-semibold uppercase leading-[.9] tracking-[-.05em] transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">{copy.title}</h3></div>
                  <p className="mt-5 text-sm leading-relaxed text-black/55 transition-colors group-hover:text-white/48 sm:mt-0">{copy.description}</p>
                  <ArrowUpRight size={18} className="mt-7 text-black/25 transition-[transform,color] duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-accent sm:mt-0" />
                  <span className="pointer-events-none absolute -bottom-10 right-16 text-[8rem] font-black leading-none tracking-[-.1em] text-black/[.025] transition-[transform,color] duration-700 group-hover:-translate-y-4 group-hover:text-white/[.025]">0{index + 1}</span>
                </m.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
