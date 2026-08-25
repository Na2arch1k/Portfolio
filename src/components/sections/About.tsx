"use client";

import Image from "next/image";
import { Check, Send, UserRound, CalendarDays, BarChart3 } from "lucide-react";
import { m, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ClinicVisual() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-[8%] border border-white/12 bg-[#11110f] p-5 shadow-[0_50px_110px_rgba(0,0,0,.7)] sm:p-7">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="font-mono text-[8px] uppercase tracking-[.18em] text-accent">ClinicCard / Live</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="bg-accent p-4 text-black"><CalendarDays size={18} /><strong className="mt-7 block text-3xl tracking-[-.06em]">14</strong><span className="text-[8px] uppercase tracking-[.14em] text-black/55">записів сьогодні</span></div>
          <div className="border border-white/10 p-4"><BarChart3 size={18} className="text-accent" /><strong className="mt-7 block text-3xl tracking-[-.06em]">92%</strong><span className="text-[8px] uppercase tracking-[.14em] text-white/35">завантаження</span></div>
        </div>
        <div className="mt-3 border border-white/10 p-4">
          {["09:30 · Олена Коваль", "11:00 · Марія Бондар", "12:30 · Андрій Лев"].map((item, index) => <div key={item} className="flex items-center justify-between border-b border-white/8 py-2 text-[9px] text-white/55 last:border-0"><span>{item}</span><Check size={11} className={index === 0 ? "text-accent" : "text-white/20"} /></div>)}
        </div>
      </div>
      <div className="scene-float absolute right-2 top-[12%] border border-white/12 bg-[#efeee8] px-4 py-3 text-black shadow-xl sm:right-0"><span className="font-mono text-[7px] uppercase tracking-[.15em]">Нове нагадування</span><strong className="mt-1 block text-sm">Надіслано пацієнту</strong></div>
    </div>
  );
}

function WebsiteVisual() {
  return (
    <div className="relative h-full w-full [perspective:1100px]">
      <div className="absolute left-[3%] top-[11%] h-[66%] w-[72%] -rotate-6 overflow-hidden border border-white/15 bg-[#161612] shadow-2xl">
        <Image src="/projects/structure.jpg" alt="" fill sizes="40vw" className="object-cover object-top opacity-65" />
      </div>
      <div className="absolute bottom-[8%] right-[2%] h-[70%] w-[76%] rotate-3 overflow-hidden border-4 border-[#efeee8] bg-[#11110f] shadow-[0_45px_100px_rgba(0,0,0,.75)]">
        <Image src="/projects/dental.jpg" alt="" fill sizes="40vw" className="object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-5 pt-20"><span className="font-mono text-[8px] uppercase tracking-[.16em] text-accent">Design × Motion × Conversion</span></div>
      </div>
    </div>
  );
}

function BotVisual() {
  return (
    <div className="relative mx-auto flex h-full max-w-lg flex-col justify-center px-5">
      <div className="border border-white/12 bg-[#11110f] p-5 shadow-[0_40px_100px_rgba(0,0,0,.65)]">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4"><span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-black"><Send size={16} /></span><div><strong className="block text-sm">Business Assistant</strong><span className="text-[8px] text-emerald-400">● online</span></div></div>
        <div className="mt-5 space-y-3 text-xs">
          <div className="max-w-[78%] bg-white/[.06] p-3 text-white/65">Вітаю! Чим можу допомогти?</div>
          <div className="ml-auto max-w-[72%] bg-accent p-3 text-black">Хочу записатися на консультацію</div>
          <div className="max-w-[82%] bg-white/[.06] p-3 text-white/65">Чудово. Оберіть зручний день — вільні години вже синхронізовані.</div>
        </div>
        <div className="mt-5 flex gap-2"><span className="flex-1 border border-white/10 p-3 text-[9px] text-white/25">Введіть повідомлення...</span><span className="grid h-10 w-10 place-items-center bg-accent text-black"><Send size={14} /></span></div>
      </div>
      <div className="scene-float-delayed absolute right-2 top-[15%] border border-accent/35 bg-[#0c0c0a] px-4 py-3 sm:-right-2"><span className="font-mono text-[7px] uppercase tracking-[.14em] text-white/35">Automation</span><strong className="mt-1 block text-sm text-accent">24/7 response</strong></div>
    </div>
  );
}

function CrmVisual() {
  const columns = [
    ["Нові", "Dent Art", "Nova Lab"],
    ["У роботі", "Green Clinic", "Forma"],
    ["Угода", "Axis Group", "Atelier"],
  ];
  return (
    <div className="relative flex h-full items-center">
      <div className="w-full border border-white/12 bg-[#11110f] p-4 shadow-[0_45px_110px_rgba(0,0,0,.7)] sm:p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-[8px] uppercase tracking-[.16em] text-accent">CRM / Sales pipeline</span><UserRound size={16} className="text-white/35" /></div>
        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {columns.map(([title, ...cards], columnIndex) => <div key={title} className="min-w-0 bg-white/[.025] p-2 sm:p-3"><div className="flex items-center justify-between text-[8px] uppercase tracking-[.12em] text-white/35"><span>{title}</span><span>{cards.length}</span></div><div className="mt-3 space-y-2">{cards.map((card, cardIndex) => <div key={card} className="border border-white/9 bg-[#0b0b09] p-2.5"><strong className="block truncate text-[9px] text-white/65">{card}</strong><span className={`mt-3 block h-1 ${columnIndex === 2 ? "bg-emerald-400" : cardIndex === 0 ? "bg-accent" : "bg-white/15"}`} /></div>)}</div></div>)}
        </div>
      </div>
    </div>
  );
}

const VISUALS = [WebsiteVisual, ClinicVisual, BotVisual, CrmVisual];

type JourneyItem = { label: string; title: string; kicker: string; description: string; points: string[] };

function JourneyScene({ item, index, progress }: { item: JourneyItem; index: number; progress: MotionValue<number> }) {
  const ranges = index === 0 ? [0, 0.18, 0.28] : index === 3 ? [0.66, 0.76, 1] : [index * 0.24 - 0.08, index * 0.24, index * 0.24 + 0.17, index * 0.24 + 0.27];
  const opacityValues = index === 0 ? [1, 1, 0] : index === 3 ? [0, 1, 1] : [0, 1, 1, 0];
  const yValues = index === 0 ? [0, 0, -160] : index === 3 ? [180, 0, 0] : [180, 0, 0, -160];
  const scaleValues = index === 0 ? [1, 1, 0.82] : index === 3 ? [0.82, 1, 1] : [0.82, 1, 1, 0.84];
  const opacity = useTransform(progress, ranges, opacityValues);
  const y = useTransform(progress, ranges, yValues);
  const scale = useTransform(progress, ranges, scaleValues);
  const Visual = VISUALS[index];

  return (
    <m.article style={{ opacity, y, scale }} className="absolute inset-0 grid items-center gap-4 overflow-hidden bg-[#080807] pt-16 sm:gap-8 sm:overflow-visible sm:bg-transparent sm:pt-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 lg:pt-28">
      <div>
        <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.18em] text-accent"><span>0{index + 1}</span><span className="h-px w-10 bg-accent/50" /><span>{item.label}</span></div>
        <h3 className="mt-3 text-[clamp(2.2rem,8vw,8rem)] font-semibold uppercase leading-[.85] tracking-[-.065em] text-white sm:mt-6 sm:leading-[.8] sm:tracking-[-.075em]">{item.title}</h3>
        <p className="mt-3 max-w-md text-base font-medium uppercase leading-tight tracking-[-.02em] text-white/78 sm:mt-6 sm:text-lg sm:tracking-[-.025em] lg:text-2xl">{item.kicker}</p>
        <p className="mt-2 max-w-lg text-xs leading-relaxed text-white/46 sm:mt-5 sm:text-sm">{item.description}</p>
        <ul className="mt-3 hidden gap-2 font-mono text-[8px] uppercase tracking-[.14em] text-white/42 sm:mt-7 sm:grid sm:grid-cols-3">{item.points.map((point) => <li key={point} className="flex items-center gap-2 border-t border-white/12 pt-2"><Check size={10} className="text-accent" />{point}</li>)}</ul>
      </div>
      <div className="h-[24vh] min-h-48 sm:h-[40vh] sm:min-h-72 lg:h-[50vh]"><Visual /></div>
    </m.article>
  );
}

export function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], [80, -1250]);

  return (
    <section ref={sectionRef} id="about" className="relative scroll-mt-20 h-[360svh] border-b border-white/10 bg-[#080807]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="scene-grid pointer-events-none absolute inset-0" />
        <m.div style={{ x: backgroundX }} className="pointer-events-none absolute bottom-[8%] left-0 whitespace-nowrap text-[19vw] font-black uppercase leading-none tracking-[-.09em] text-white/[.018]">
          Websites · Products · Bots · CRM · Websites · Products
        </m.div>
        <Container className="relative h-full">
          <div className="absolute inset-x-6 top-5 z-20 flex items-center justify-between border-t border-white/15 pt-4 lg:inset-x-8">
            <span className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">{t.about.eyebrow}</span>
            <span className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">Scroll / 01—04</span>
          </div>
          {t.about.journey.map((item: JourneyItem, index: number) => <JourneyScene key={item.title} item={item} index={index} progress={scrollYProgress} />)}
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/8"><m.div style={{ scaleX: progressScale, transformOrigin: "left" }} className="h-full bg-accent" /></div>
        <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 xl:flex">{t.about.journey.map((item: JourneyItem) => <span key={item.title} className="font-mono text-[7px] uppercase tracking-[.16em] text-white/25">0{t.about.journey.indexOf(item) + 1}</span>)}</div>
      </div>
    </section>
  );
}
