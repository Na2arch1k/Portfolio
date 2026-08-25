"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PRICING_ITEMS } from "@/data/pricing";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const glowX = useTransform(scrollYProgress, [0, 1], [70, -110]);
  const glowY = useTransform(scrollYProgress, [0, 1], [-40, 140]);
  const titleX = useTransform(scrollYProgress, [0, .55, 1], [18, 0, -14]);
  const progressScale = useTransform(scrollYProgress, [.05, .95], [0, 1]);

  return (
    <section ref={sectionRef} id="pricing" className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-[#090908] py-24 sm:py-36">
      <div className="scene-grid pointer-events-none absolute inset-0 opacity-30" />
      <m.div style={reduceMotion ? undefined : { x: glowX, y: glowY }} className="pointer-events-none absolute -right-36 top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,91,51,.12),transparent_66%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/8"><m.div style={{ scaleX: progressScale, transformOrigin: "left" }} className="h-full bg-accent" /></div>

      <Container className="relative px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-t border-white/15 pt-4 font-mono text-[8px] uppercase tracking-[.18em]">
          <span className="inline-flex items-center gap-2 text-accent"><Sparkles size={12} />{t.pricing.eyebrow}</span>
          <span className="text-white/30">USD / 01—05</span>
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
          <m.h2 style={reduceMotion ? undefined : { x: titleX }} className="max-w-[11ch] text-[clamp(2.9rem,11vw,7.2rem)] font-semibold uppercase leading-[.8] tracking-[-.078em]">{t.pricing.title}</m.h2>
          <div className="border-l border-accent pl-5">
            <p className="max-w-xl text-sm leading-relaxed text-white/52 sm:text-base">{t.pricing.description}</p>
            <p className="mt-4 font-mono text-[8px] uppercase leading-relaxed tracking-[.15em] text-white/28">{t.pricing.note}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:mt-20 sm:grid-cols-2 lg:grid-cols-6">
          {PRICING_ITEMS.map(({ id, icon: Icon, index, featured }, itemIndex) => {
            const item = t.pricing.items[id];
            const span = id === "siteEdit" || id === "newWebsite" ? "lg:col-span-3" : itemIndex === 4 ? "sm:col-span-2 lg:col-span-2" : "lg:col-span-2";
            return (
              <m.article
                key={id}
                initial={reduceMotion ? false : { opacity: 0, y: 58, rotateZ: itemIndex % 2 === 0 ? -1.2 : 1.2 }}
                whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                whileTap={{ scale: .985 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: .68, delay: Math.min(itemIndex * .045, .16), ease: [0.16, 1, 0.3, 1] }}
                className={`${span} group relative flex min-h-[24rem] flex-col overflow-hidden border p-5 transition-[transform,border-color,background-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-2 sm:min-h-[27rem] sm:p-7 ${featured ? "border-accent/50 bg-[#12110e] hover:border-accent" : "border-white/14 bg-[#0d0d0b] hover:border-white/30"}`}
              >
                <span className="absolute inset-y-0 left-0 w-1 bg-accent transition-transform duration-700 group-hover:scale-y-110" />
                <span className="pointer-events-none absolute -bottom-12 -right-4 text-[10rem] font-black leading-none tracking-[-.12em] text-white/[.025] transition-transform duration-700 group-hover:-translate-y-4">{index}</span>

                <div className="relative flex items-start justify-between gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[.17em] text-white/34">Price / {index}</span>
                  <span className={`grid h-11 w-11 place-items-center border transition-[transform,background-color,color] duration-500 group-hover:rotate-12 ${featured ? "border-accent/45 bg-accent text-black" : "border-white/15 text-accent group-hover:bg-accent group-hover:text-black"}`}><Icon size={19} strokeWidth={1.35} /></span>
                </div>

                <div className="relative mt-10">
                  <span className="font-mono text-[8px] uppercase tracking-[.16em] text-accent">{item.label}</span>
                  <h3 className="mt-3 max-w-[12ch] text-[2.05rem] font-semibold uppercase leading-[.86] tracking-[-.06em] sm:text-[2.55rem]">{item.title}</h3>
                  <p className="mt-5 text-xs leading-relaxed text-white/48 sm:text-sm">{item.description}</p>
                  <ul className="mt-6 grid gap-2">
                    {item.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-[11px] leading-relaxed text-white/55"><Check size={12} className="mt-0.5 shrink-0 text-accent" />{feature}</li>)}
                  </ul>
                </div>

                <div className="relative mt-auto flex items-end justify-between gap-4 border-t border-white/12 pt-6">
                  <div><span className="font-mono text-[7px] uppercase tracking-[.15em] text-white/26">{t.pricing.fromLabel}</span><strong className="mt-1 block text-3xl font-semibold tracking-[-.055em] text-white sm:text-4xl">{item.price}</strong></div>
                  <a href="#contact" aria-label={`${t.pricing.cta}: ${item.title}`} className="grid h-12 w-12 shrink-0 place-items-center bg-[#efeee8] text-black transition-[transform,background-color] duration-400 hover:-translate-y-1 hover:bg-accent"><ArrowUpRight size={17} /></a>
                </div>
              </m.article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-white/38">{t.pricing.footer}</p>
          <a href="#contact" className="group inline-flex w-fit items-center gap-3 border-b border-accent pb-2 text-[10px] font-bold uppercase tracking-[.1em] text-white">{t.pricing.cta}<ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
        </div>
      </Container>
    </section>
  );
}
