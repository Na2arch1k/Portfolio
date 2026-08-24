"use client";

import { ArrowDownRight, ArrowUpRight, CalendarDays, Users, Activity, Check } from "lucide-react";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ClinicCardPreview() {
  return (
    <div className="clinic-preview relative h-full w-full overflow-hidden border border-white/15 bg-[#11110f] shadow-[0_50px_140px_rgba(0,0,0,.75)]">
      <div className="grid h-full grid-cols-[3.3rem_1fr] sm:grid-cols-[4.5rem_1fr]">
        <aside className="flex flex-col items-center border-r border-white/10 bg-[#0b0b09] py-4">
          <span className="grid h-8 w-8 place-items-center bg-accent text-sm font-black text-black">C.</span>
          <div className="mt-8 flex flex-col gap-3">
            {[Activity, CalendarDays, Users].map((Icon, index) => (
              <span key={index} className={`grid h-8 w-8 place-items-center ${index === 0 ? "bg-white text-black" : "text-white/28"}`}>
                <Icon size={14} />
              </span>
            ))}
          </div>
        </aside>
        <div className="min-w-0 p-4 sm:p-6">
          <header className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="font-mono text-[7px] uppercase tracking-[.18em] text-accent">ClinicCard / Dashboard</span>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">Добрий ранок, Назарію</p>
            </div>
            <span className="hidden font-mono text-[7px] uppercase tracking-[.14em] text-white/30 sm:block">Пн, 24 серпня</span>
          </header>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
            {[
              ["14", "Записів"],
              ["8", "Пацієнтів"],
              ["92%", "Завантаження"],
            ].map(([value, label], index) => (
              <div key={label} className={`${index === 0 ? "bg-accent text-black" : "border border-white/10 bg-white/[.025] text-white"} p-3 sm:p-4`}>
                <strong className="block text-lg tracking-[-.05em] sm:text-2xl">{value}</strong>
                <span className={`mt-2 block font-mono text-[6px] uppercase tracking-[.12em] ${index === 0 ? "text-black/55" : "text-white/30"}`}>{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-[1.15fr_.85fr]">
            <div className="border border-white/10 p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] uppercase tracking-[.15em] text-white/40">Найближчі записи</span>
                <span className="text-[8px] text-accent">Сьогодні</span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  ["09:30", "Олена Коваль", "Консультація"],
                  ["11:00", "Марія Бондар", "Діагностика"],
                  ["12:30", "Андрій Лев", "Повторний візит"],
                ].map(([time, name, type], index) => (
                  <div key={time} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-2 border-t border-white/8 pt-2 text-[8px]">
                    <span className="font-mono text-accent">{time}</span>
                    <span className="truncate text-white/70">{name}</span>
                    <span className="hidden text-white/24 sm:block">{type}</span>
                    {index === 0 && <span className="absolute" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden border border-white/10 p-4 sm:block">
              <span className="font-mono text-[7px] uppercase tracking-[.15em] text-white/40">Статус клініки</span>
              <div className="mt-5 grid place-items-center">
                <div className="grid aspect-square w-20 place-items-center rounded-full border-[7px] border-accent border-r-white/10">
                  <strong className="text-xl">92%</strong>
                </div>
              </div>
              <p className="mt-4 flex items-center justify-center gap-1 text-[8px] text-white/45"><Check size={10} className="text-accent" /> Усі процеси активні</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const copyY = useTransform(scrollYProgress, [0, 0.78], [0, -210]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.62, 0.95], [1, 0.9, 0]);
  const deviceY = useTransform(scrollYProgress, [0, 1], [0, -170]);
  const deviceScale = useTransform(scrollYProgress, [0, 1], [0.82, 1.22]);
  const deviceRotate = useTransform(scrollYProgress, [0, 1], [5, -2]);
  const sideX = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={sectionRef} id="home" className="hero-stage relative h-[165svh] border-b border-white/10">
      <div className="sticky top-0 min-h-[100svh] overflow-hidden pt-28">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-accent/70" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-4 w-px -translate-x-1/2 bg-accent" />
        <div className="pointer-events-none absolute left-[9%] top-[28%] h-72 w-72 rounded-full bg-accent/12 blur-[90px]" />

        <Container className="relative flex min-h-[calc(100svh-7rem)] flex-col pb-7">
          <div className="flex items-start justify-between gap-8 font-mono text-[9px] uppercase tracking-[0.18em] text-white/42 sm:text-[10px]">
            <div><span className="text-accent">Product—001</span><span className="ml-3 hidden sm:inline">Clinic operating system</span></div>
            <div className="text-right"><span>{t.hero.badge}</span><span className="ml-3 inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_16px_var(--accent)]" /></div>
          </div>

          <m.div style={{ y: copyY, opacity: copyOpacity }} className="relative z-20 mt-[7vh] max-w-[76rem]">
            <h1 className="hero-title text-[clamp(3.6rem,9.5vw,9.2rem)] font-semibold uppercase leading-[0.8] tracking-[-0.078em] text-[#efeee8]">
              <span className="block overflow-hidden"><m.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }} className="block">{t.hero.titleLine}</m.span></span>
              <span className="block overflow-hidden text-accent"><m.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="block">{t.hero.titleAccent}</m.span></span>
            </h1>
          </m.div>

          <m.div
            style={{ y: deviceY, scale: deviceScale, rotateZ: deviceRotate }}
            initial={{ opacity: 0, y: 90, rotateX: 16 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
            className="absolute left-[26%] top-[48%] z-10 h-[clamp(18rem,39vw,31rem)] w-[clamp(26rem,59vw,55rem)] origin-center [perspective:1200px] max-sm:left-[7%] max-sm:top-[46%]"
          >
            <ClinicCardPreview />
          </m.div>

          <m.div style={{ x: sideX }} className="absolute right-5 top-[52%] z-30 hidden w-48 border border-white/13 bg-[#0d0d0b]/90 p-4 backdrop-blur-md lg:block">
            <span className="font-mono text-[7px] uppercase tracking-[.16em] text-accent">Live status</span>
            <strong className="mt-3 block text-2xl tracking-[-.06em]">+28%</strong>
            <p className="mt-1 text-[9px] leading-relaxed text-white/38">Менше пропущених записів після автоматизації нагадувань</p>
          </m.div>

          <div className="relative z-40 mt-auto grid items-end gap-8 sm:grid-cols-[1fr_minmax(18rem,30rem)]">
            <a href="#about" className="group hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white sm:inline-flex">
              <span className="grid h-10 w-10 place-items-center border border-white/20 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-black"><ArrowDownRight size={16} /></span>
              {t.hero.ctaSecondary}
            </a>
            <div className="border-l border-white/15 pl-5 sm:pl-8">
              <p className="max-w-lg text-balance text-sm leading-relaxed text-white/60">{t.hero.description}</p>
              <a href="#contact" className="group mt-5 inline-flex items-center gap-3 border-b border-accent pb-2 text-xs font-semibold uppercase tracking-[0.09em] text-white">
                {t.hero.ctaPrimary}<ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
