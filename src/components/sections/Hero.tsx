"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Blocks, Globe2, Sparkles } from "lucide-react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ProjectFrame({ image, label, className, priority = false }: { image: string; label: string; className: string; priority?: boolean }) {
  return (
    <div className={`group/frame absolute overflow-hidden border border-white/15 bg-[#10100e] shadow-[0_35px_100px_rgba(0,0,0,.62)] transition-[transform,border-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-3 hover:border-accent/55 ${className}`}>
      <Image src={image} alt="" fill priority={priority} sizes="(max-width: 768px) 80vw, 48vw" className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover/frame:scale-[1.055]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
      <span className="pointer-events-none absolute inset-y-[-20%] left-[-35%] w-[22%] rotate-12 bg-gradient-to-r from-transparent via-white/12 to-transparent blur-sm transition-transform duration-1000 group-hover/frame:translate-x-[650%]" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 font-mono text-[7px] uppercase tracking-[.16em] text-white/55 sm:p-5 sm:text-[8px]">
        <span>{label}</span>
        <ArrowUpRight size={14} className="text-accent" />
      </div>
    </div>
  );
}

function HeroTitle({ t }: { t: ReturnType<typeof useLanguage>["t"] }) {
  const reduceMotion = useReducedMotion();
  return (
    <h1 className="hero-title text-[clamp(2.85rem,11vw,7.4rem)] font-semibold uppercase leading-[.8] tracking-[-.075em] text-[#efeee8]">
      <span className="block overflow-hidden"><m.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: .9, ease: [0.16, 1, 0.3, 1], delay: .06 }} className="block">{t.hero.titleLine}</m.span></span>
      <span className="block overflow-hidden text-accent"><m.span initial={reduceMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: .9, ease: [0.16, 1, 0.3, 1], delay: .17 }} className="block">{t.hero.titleAccent}</m.span></span>
    </h1>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const titleY = useTransform(scrollYProgress, [0, 0.74], [0, -190]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.62, 0.92], [1, 0.9, 0]);
  const stageY = useTransform(scrollYProgress, [0, 1], [30, -160]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.08]);
  const backX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const backRotate = useTransform(scrollYProgress, [0, 1], [-8, -14]);
  const frontX = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const frontRotate = useTransform(scrollYProgress, [0, 1], [5, 11]);
  const chipX = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <section ref={sectionRef} id="home" className="hero-stage relative scroll-mt-20 h-[220svh] sm:h-[185svh] border-b border-white/10">
      <div className="sticky top-0 min-h-[100svh] overflow-hidden pt-28">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-accent/70" />
        <div className="pointer-events-none absolute left-[12%] top-24 h-4 w-px bg-accent" />
        <div className="pointer-events-none absolute right-[12%] top-24 h-4 w-px bg-accent" />
        <Container className="relative flex min-h-[calc(100svh-7rem)] flex-col pb-7">
          <div className="flex items-start justify-between gap-5 font-mono text-[8px] uppercase tracking-[.18em] text-white/42 sm:text-[9px]">
            <span><span className="text-accent">Independent developer</span><span className="ml-3 hidden md:inline">Websites × Systems × Automation</span></span>
            <span className="flex items-center gap-2 text-right"><i className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />{t.hero.badge}</span>
          </div>
          <m.div style={reduceMotion ? undefined : { y: titleY, opacity: titleOpacity }} className="relative z-20 mt-[5vh] max-w-[82rem] sm:mt-[7vh]">
            <HeroTitle t={t} />
          </m.div>
          {/*
            In normal flow on mobile (own slot between title and the
            description below) instead of absolutely positioned — the
            scroll-driven y/scale transform still animates it via
            `transform`, which doesn't affect layout, so the parallax
            survives. Only the *positioning* differs from sm: up, where
            there's enough vertical room for it to float free without
            colliding with the description block sitting below it.
          */}
          <m.div style={reduceMotion ? undefined : { y: stageY, scale: stageScale }} className="relative z-10 mt-7 h-[34vh] min-h-56 w-full sm:absolute sm:right-[2%] sm:top-[43%] sm:mt-0 sm:h-[43vh] sm:min-h-[19rem] sm:w-[69%]">
            <m.div style={reduceMotion ? undefined : { x: backX, rotateZ: backRotate }} className="absolute inset-0">
              <ProjectFrame image="/projects/structure.jpg" label="Architecture / Web experience" className="left-[1%] top-[4%] h-[68%] w-[58%] -rotate-[8deg] opacity-55" />
            </m.div>
            <m.div style={reduceMotion ? undefined : { x: frontX, rotateZ: frontRotate }} className="absolute inset-0">
              <ProjectFrame image="/projects/dental.jpg" label="Dental / Digital presence" priority className="bottom-[2%] right-[4%] h-[78%] w-[64%] rotate-[4deg]" />
            </m.div>
            <m.div style={reduceMotion ? undefined : { x: chipX }} className="scene-float absolute left-[2%] top-[56%] z-20 hidden min-w-48 border border-white/15 bg-[#0c0c0a]/95 p-4 shadow-2xl sm:block">
              <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[.16em] text-accent"><Blocks size={12} /> {t.hero.ownProductLabel}</span>
              <strong className="mt-2 block text-lg uppercase tracking-[-.04em]">ClinicCard</strong>
              <span className="mt-1 block text-[8px] text-white/35">{t.hero.clinicCardLabel}</span>
            </m.div>
            <div className="scene-float-delayed absolute right-1 top-1 z-20 border border-black/15 bg-[#efeee8] px-3 py-2.5 text-black sm:right-0 sm:top-0 sm:px-5 sm:py-4">
              <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[.15em]"><Sparkles size={11} /> {t.hero.motionLabel}</span>
            </div>
          </m.div>
          <div className="relative z-30 mt-7 grid items-end gap-6 sm:mt-auto sm:grid-cols-[auto_1fr_minmax(18rem,31rem)]">
            <a href="#projects" className="group hidden items-center gap-3 font-mono text-[8px] uppercase tracking-[.18em] text-white/50 transition-colors hover:text-white sm:inline-flex"><span className="grid h-10 w-10 place-items-center border border-white/20 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-black"><ArrowDownRight size={16} /></span>{t.hero.ctaSecondary}</a>
            <div className="hidden items-center justify-center gap-5 lg:flex">{t.hero.stats.slice(0, 2).map((stat) => <div key={stat.label} className="border-l border-white/15 pl-4"><strong className="block text-xl tracking-[-.05em]">{stat.value}</strong><span className="font-mono text-[7px] uppercase tracking-[.14em] text-white/30">{stat.label}</span></div>)}</div>
            <div className="border-l border-white/15 pl-5 sm:pl-7"><p className="max-w-lg text-balance text-xs leading-relaxed text-white/58 sm:text-sm">{t.hero.description}</p><a href="#contact" className="group mt-4 inline-flex items-center gap-3 border-b border-accent pb-2 text-[10px] font-semibold uppercase tracking-[.09em] text-white sm:text-xs">{t.hero.ctaPrimary}<ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a></div>
          </div>
          <Globe2 size={18} className="absolute bottom-9 right-0 hidden text-white/20 xl:block" />
        </Container>
      </div>
    </section>
  );
}
