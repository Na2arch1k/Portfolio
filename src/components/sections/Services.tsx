"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const trackX = useTransform(scrollYProgress, [0.04, 0.96], ["0%", "-72%"]);
  const titleX = useTransform(scrollYProgress, [0, 0.9], [0, -180]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="services" className="relative scroll-mt-20 h-[330svh] border-b border-black/20 bg-[#efeee8] text-[#090908] motion-reduce:h-auto">
      <div className="sticky top-0 h-[100svh] overflow-hidden pt-28 motion-reduce:relative motion-reduce:h-auto motion-reduce:overflow-visible motion-reduce:pb-24">
        <div className="pointer-events-none absolute -right-20 top-12 text-[32vw] font-black leading-none tracking-[-.12em] text-black/[.025]">04</div>
        <Container className="relative">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/25 pt-4 font-mono text-[8px] uppercase tracking-[.18em] sm:text-[9px]">
            <span className="inline-flex items-center gap-2 text-[#d73c1b]"><Sparkles size={12} />{t.services.badge}</span>
            <span className="text-black/42">Scroll → 01—04</span>
          </div>
          <div className="mt-8 grid items-end gap-6 md:grid-cols-[1fr_minmax(18rem,28rem)]">
            <m.h2 style={reduceMotion ? undefined : { x: titleX }} className="max-w-[9ch] text-[clamp(3.2rem,6.5vw,6.7rem)] font-semibold uppercase leading-[.8] tracking-[-.075em]">{t.services.title}</m.h2>
            <p className="border-l border-[#d73c1b] pl-5 text-sm leading-relaxed text-black/58">{t.services.description}</p>
          </div>
        </Container>

        <m.div style={reduceMotion ? undefined : { x: trackX }} className="motion-track mt-9 flex w-max gap-[3vw] pl-[max(1.5rem,calc((100vw-90rem)/2))] pr-[18vw] motion-reduce:grid motion-reduce:w-auto motion-reduce:grid-cols-1 motion-reduce:gap-4 motion-reduce:px-6 sm:mt-12">
          {SERVICES.map((service, index) => {
            const copy = t.services.items[service.id];
            const Icon = service.icon;
            return (
              <article key={service.id} className="premium-card group relative flex h-[48vh] min-h-[25rem] w-[82vw] shrink-0 flex-col overflow-hidden border border-black/15 bg-[#0b0b09] p-6 text-white shadow-[0_32px_80px_rgba(0,0,0,.17)] motion-reduce:h-auto motion-reduce:min-h-0 motion-reduce:w-auto sm:h-[50vh] sm:min-h-[29rem] sm:w-[68vw] sm:p-8 lg:w-[48vw] xl:w-[42vw]">
                <div className="scene-grid pointer-events-none absolute inset-0 opacity-35" />
                <div className="pointer-events-none absolute -right-4 -top-12 text-[13rem] font-black tracking-[-.1em] text-white/[.025]">0{index + 1}</div>
                <div className="relative flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center border border-white/15 bg-white/[.04] text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-black sm:h-14 sm:w-14"><Icon size={23} strokeWidth={1.35} /></span>
                  <div className="text-right"><span className="block font-mono text-[7px] uppercase tracking-[.17em] text-white/28">Solution / {service.index}</span>{service.id === "cliniccard" && <span className="mt-2 inline-block border border-accent/40 px-2 py-1 font-mono text-[7px] uppercase tracking-[.14em] text-accent">{t.services.popularBadge}</span>}</div>
                </div>
                <div className="relative mt-auto">
                  <span className="font-mono text-[8px] uppercase tracking-[.17em] text-accent">{copy.tagline}</span>
                  <h3 className="mt-4 text-[clamp(2.8rem,5vw,5.6rem)] font-semibold uppercase leading-[.8] tracking-[-.075em]">{copy.title}</h3>
                  <p className="mt-5 max-w-xl text-xs leading-relaxed text-white/45 sm:text-sm">{copy.description}</p>
                  <ul className="mt-6 grid gap-px bg-white/10 sm:grid-cols-2">{copy.features.map((feature) => <li key={feature} className="flex items-center gap-2 bg-[#0f0f0d] p-3 text-[9px] text-white/55"><Check size={11} className="text-accent" />{feature}</li>)}</ul>
                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/12 pt-5"><div><span className="font-mono text-[7px] uppercase tracking-[.14em] text-white/25">{t.services.investmentLabel}</span><strong className="mt-1 block text-lg uppercase tracking-[-.035em]">{copy.price}</strong></div><a href="#contact" className="grid h-12 w-12 shrink-0 place-items-center bg-[#efeee8] text-black transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-accent" aria-label={copy.cta}><ArrowUpRight size={17} /></a></div>
                </div>
              </article>
            );
          })}
        </m.div>
        <Container className="relative mt-6 flex items-center gap-4"><div className="h-px flex-1 bg-black/15"><m.div style={{ scaleX: progressScale, transformOrigin: "left" }} className="h-full bg-[#d73c1b]" /></div><span className="font-mono text-[7px] uppercase tracking-[.15em] text-black/38">{t.services.trustLine}</span></Container>
      </div>
    </section>
  );
}
