"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SERVICES, type Service } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getStoryMotion } from "@/lib/story-motion";

function ServiceCard({ service, index, mobile = false }: { service: Service; index: number; mobile?: boolean }) {
  const { t } = useLanguage();
  const copy = t.services.items[service.id];
  const Icon = service.icon;

  return (
    <m.article
      whileTap={mobile ? { scale: .985 } : undefined}
      className={`premium-card group relative flex overflow-hidden border border-black/15 bg-[#0b0b09] text-white shadow-[0_28px_80px_rgba(0,0,0,.18)] ${mobile ? "mobile-service-card h-full w-full p-5" : "h-[32rem] w-[min(42rem,48vw)] shrink-0 p-8"}`}
    >
      <div className="scene-grid pointer-events-none absolute -inset-y-8 inset-x-0 opacity-35" />
      <div className="scene-float pointer-events-none absolute -right-4 -top-12 text-[11rem] font-black tracking-[-.1em] text-white/[.025] sm:text-[13rem]">0{index + 1}</div>
      <div className="relative flex w-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-11 w-11 place-items-center border border-white/15 bg-white/[.04] text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-black sm:h-14 sm:w-14"><Icon size={22} strokeWidth={1.35} /></span>
          <div className="text-right"><span className="block font-mono text-[7px] uppercase tracking-[.17em] text-white/28">Solution / {service.index}</span>{service.id === "cliniccard" && <span className="mt-2 inline-block border border-accent/40 px-2 py-1 font-mono text-[7px] uppercase tracking-[.14em] text-accent">{t.services.popularBadge}</span>}</div>
        </div>

        <div className={`mt-auto ${mobile ? "pt-5" : "pt-10"}`}>
          <span className="font-mono text-[8px] uppercase tracking-[.17em] text-accent">{copy.tagline}</span>
          <h3 className="mt-3 text-[clamp(2.2rem,9.5vw,3.4rem)] font-semibold uppercase leading-[.82] tracking-[-.07em] sm:mt-4 sm:text-[3.8rem]">{copy.title}</h3>
          <p className="mobile-service-description mt-4 max-w-xl text-xs leading-relaxed text-white/52 sm:mt-5 sm:text-sm">{copy.description}</p>
          <ul className="mobile-service-features mt-5 grid grid-cols-2 gap-px bg-white/10 sm:mt-6">
            {copy.features.map((feature) => <li key={feature} className="flex min-h-12 items-center gap-2 bg-[#0f0f0d] p-2.5 text-[9px] leading-snug text-white/58 sm:p-3"><Check size={11} className="shrink-0 text-accent" />{feature}</li>)}
          </ul>
          <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/12 pt-5 sm:mt-6">
            <div><span className="font-mono text-[7px] uppercase tracking-[.14em] text-white/28">{t.services.investmentLabel}</span><strong className="mt-1 block text-xl uppercase tracking-[-.045em] sm:text-2xl">{copy.price}</strong></div>
            <a href="#contact" className="grid h-12 w-12 shrink-0 place-items-center bg-[#efeee8] text-black transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-accent" aria-label={copy.cta}><ArrowUpRight size={17} /></a>
          </div>
        </div>
      </div>
    </m.article>
  );
}

function MobileServiceScene({ service, index, progress }: { service: Service; index: number; progress: MotionValue<number> }) {
  const story = getStoryMotion(index, SERVICES.length, 180);
  const opacity = useTransform(progress, story.range, story.opacity);
  const y = useTransform(progress, story.range, story.y);
  const x = useTransform(progress, story.range, story.x);
  const scale = useTransform(progress, story.range, story.scale);
  const rotateZ = useTransform(progress, story.range, story.rotate);
  const pointerEvents = useTransform(opacity, (value) => value > .8 ? "auto" : "none");

  return <m.div style={{ opacity, y, x, scale, rotateZ, pointerEvents }} className="absolute inset-0"><ServiceCard service={service} index={index} mobile /></m.div>;
}

function ServicesHeading({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/25 pt-4 font-mono text-[8px] uppercase tracking-[.18em] sm:text-[9px]">
        <span className="inline-flex items-center gap-2 text-[#d73c1b]"><Sparkles size={12} />{t.services.badge}</span>
        <span className="text-black/42">{compact ? "01—04" : "Scroll → 01—04"}</span>
      </div>
      <div className="mt-8 grid items-end gap-6 md:grid-cols-[1fr_minmax(18rem,28rem)]">
        <h2 className="max-w-[9ch] text-[clamp(2.8rem,11vw,6.7rem)] font-semibold uppercase leading-[.8] tracking-[-.075em]">{t.services.title}</h2>
        <p className="border-l border-[#d73c1b] pl-5 text-sm leading-relaxed text-black/60">{t.services.description}</p>
      </div>
    </>
  );
}

export function Services() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const { scrollYProgress: mobileProgress } = useScroll({ target: mobileRef, offset: ["start start", "end end"] });
  const trackX = useTransform(scrollYProgress, [0.04, 0.96], ["0%", "-72%"]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const mobileProgressScale = useTransform(mobileProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="services" className="relative scroll-mt-20 border-b border-black/20 bg-[#efeee8] text-[#090908] md:h-[320svh] motion-reduce:h-auto">
      <div className="relative overflow-hidden pb-12 pt-24 md:hidden">
        <div className="pointer-events-none absolute -right-20 top-12 text-[55vw] font-black leading-none tracking-[-.12em] text-black/[.025]">04</div>
        <Container className="relative px-4">
          <ServicesHeading compact />
        </Container>
      </div>

      <div ref={mobileRef} className="relative h-[420svh] md:hidden">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <div className="pointer-events-none absolute -right-20 top-12 text-[55vw] font-black leading-none tracking-[-.12em] text-black/[.025]">04</div>
          <Container className="relative flex h-full flex-col px-4 pb-5 pt-24">
            <div className="flex items-center justify-between border-t border-black/20 pt-3 font-mono text-[8px] uppercase tracking-[.18em] text-black/42"><span className="text-[#d73c1b]">Swipe through solutions</span><span>01—04</span></div>
            <div className="relative mt-4 min-h-0 flex-1">
              {SERVICES.map((service, index) => <MobileServiceScene key={service.id} service={service} index={index} progress={mobileProgress} />)}
            </div>
            <div className="mt-4 flex items-center gap-3"><div className="h-px flex-1 bg-black/15"><m.div style={{ scaleX: mobileProgressScale, transformOrigin: "left" }} className="h-full bg-[#d73c1b]" /></div><span className="font-mono text-[7px] uppercase tracking-[.15em] text-black/45">{t.services.trustLine}</span></div>
          </Container>
        </div>
      </div>

      <div className="sticky top-0 hidden h-[100svh] overflow-hidden pt-28 md:block motion-reduce:relative motion-reduce:h-auto motion-reduce:overflow-visible motion-reduce:pb-24">
        <div className="pointer-events-none absolute -right-20 top-12 text-[32vw] font-black leading-none tracking-[-.12em] text-black/[.025]">04</div>
        <Container className="relative"><ServicesHeading /></Container>
        <m.div style={reduceMotion ? undefined : { x: trackX }} className="motion-track mt-12 flex w-max gap-[3vw] pl-[max(1.5rem,calc((100vw-90rem)/2))] pr-[18vw] motion-reduce:grid motion-reduce:w-auto motion-reduce:grid-cols-2 motion-reduce:gap-4 motion-reduce:px-6">
          {SERVICES.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}
        </m.div>
        <Container className="relative mt-6 flex items-center gap-4"><div className="h-px flex-1 bg-black/15"><m.div style={{ scaleX: progressScale, transformOrigin: "left" }} className="h-full bg-[#d73c1b]" /></div><span className="font-mono text-[7px] uppercase tracking-[.15em] text-black/38">{t.services.trustLine}</span></Container>
      </div>
    </section>
  );
}
