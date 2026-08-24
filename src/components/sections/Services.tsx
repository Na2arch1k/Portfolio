"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SERVICES, type ServiceId } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Services() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<ServiceId>("cliniccard");
  const activeService = SERVICES.find((service) => service.id === activeId) ?? SERVICES[0];
  const activeCopy = t.services.items[activeId];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="relative overflow-hidden border-b border-white/10 bg-[#efeee8] py-24 text-[#090908] sm:py-36">
      <div className="pointer-events-none absolute -right-24 top-20 text-[28vw] font-black leading-none tracking-[-.1em] text-black/[.025]">04</div>
      <Container className="relative">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/25 pt-5 font-mono text-[9px] uppercase tracking-[.18em]">
          <span className="inline-flex items-center gap-2 text-[#d73c1b]"><Sparkles size={12} />{t.services.badge}</span>
          <span className="text-black/42">{t.services.trustLine}</span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[.18em] text-black/42">{t.services.eyebrow}</span>
            <h2 className="mt-7 max-w-[9ch] text-[clamp(3.4rem,7vw,7rem)] font-semibold uppercase leading-[.82] tracking-[-.075em]">{t.services.title}</h2>
            <p className="mt-7 max-w-lg border-l border-[#d73c1b] pl-5 text-sm leading-relaxed text-black/58">{t.services.description}</p>

            <div className="mt-14 border-t border-black/22">
              {SERVICES.map((service) => {
                const copy = t.services.items[service.id];
                const Icon = service.icon;
                const active = service.id === activeId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    onMouseEnter={() => setActiveId(service.id)}
                    aria-pressed={active}
                    className={`group grid w-full grid-cols-[2.5rem_2.2rem_1fr_auto] items-center gap-3 border-b border-black/22 py-5 text-left transition-all duration-300 ${active ? "bg-[#090908] px-4 text-white" : "hover:px-3"}`}
                  >
                    <span className={`font-mono text-[8px] tracking-[.18em] ${active ? "text-accent" : "text-black/40"}`}>{service.index}</span>
                    <Icon size={18} strokeWidth={1.35} className={active ? "text-accent" : "text-black/55"} />
                    <span className="text-lg font-semibold uppercase tracking-[-.035em] sm:text-xl">{copy.title}</span>
                    <ArrowUpRight size={17} className={`transition-transform ${active ? "text-accent" : "text-black/35 group-hover:-translate-y-1 group-hover:translate-x-1"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[38rem] self-end overflow-hidden bg-[#090908] text-white shadow-[0_40px_100px_rgba(0,0,0,.22)]">
            <div className="scene-grid pointer-events-none absolute inset-0 opacity-45" />
            <AnimatePresence mode="wait">
              <m.article
                key={activeId}
                initial={{ opacity: 0, y: 36, rotateX: -5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex min-h-[38rem] flex-col p-6 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center bg-accent text-black"><ActiveIcon size={25} strokeWidth={1.35} /></span>
                  <span className="font-mono text-[8px] uppercase tracking-[.18em] text-white/32">Solution / {activeService.index}</span>
                </div>

                <div className="mt-14">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[8px] uppercase tracking-[.17em] text-accent">{activeCopy.tagline}</span>
                    {activeId === "cliniccard" && <span className="bg-accent px-2 py-1 font-mono text-[7px] uppercase tracking-[.14em] text-black">{t.services.popularBadge}</span>}
                  </div>
                  <h3 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-semibold uppercase leading-[.82] tracking-[-.075em]">{activeCopy.title}</h3>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/48">{activeCopy.description}</p>
                </div>

                <ul className="mt-9 grid gap-px bg-white/12 sm:grid-cols-2">
                  {activeCopy.features.map((feature) => <li key={feature} className="flex items-center gap-3 bg-[#0d0d0b] p-4 text-xs text-white/62"><Check size={13} className="text-accent" />{feature}</li>)}
                </ul>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-6 border-t border-white/14 pt-7">
                  <div><span className="font-mono text-[7px] uppercase tracking-[.15em] text-white/28">{t.services.investmentLabel}</span><strong className="mt-2 block text-2xl uppercase tracking-[-.04em] text-white">{activeCopy.price}</strong></div>
                  <a href="#contact" className="group inline-flex items-center gap-3 bg-[#efeee8] px-5 py-4 text-xs font-bold uppercase tracking-[.08em] text-black transition-colors hover:bg-accent">{activeCopy.cta}<ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
                </div>
              </m.article>
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-8 max-w-3xl font-mono text-[8px] uppercase leading-relaxed tracking-[.14em] text-black/36">* {t.services.priceNote}</p>
      </Container>
    </section>
  );
}
