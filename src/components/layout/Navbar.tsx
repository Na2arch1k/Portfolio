"use client";

import { useEffect, useState } from "react";
import { m, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Language } from "@/lib/i18n/dictionaries";

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const options: Language[] = ["uk", "en"];

  return (
    <div className="flex items-center font-mono text-[10px] font-semibold uppercase tracking-[0.16em]" role="group" aria-label="Мова сайту / Site language">
      {options.map((option, index) => (
        <span key={option} className="flex items-center">
          {index > 0 && <span className="mx-1 text-white/20">/</span>}
          <button
            type="button"
            onClick={() => setLanguage(option)}
            aria-pressed={language === option}
            className={cn("px-1 py-2 transition-colors", language === option ? "text-accent" : "text-white/40 hover:text-white")}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 28;
    setScrolled((current) => current === next ? current : next);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <nav
          className={cn(
            "relative flex h-[68px] items-center overflow-hidden border px-4 transition-all duration-500 sm:px-5",
            scrolled ? "border-white/15 bg-[#090908]/96 shadow-2xl shadow-black/30" : "border-white/12 bg-[#090908]/82"
          )}
        >
          <a href="#home" className="group flex min-w-fit items-center gap-3 text-white" aria-label="Nazarii — головна">
            <span className="grid h-8 w-8 place-items-center bg-[#efeee8] text-base font-black tracking-tighter text-black transition-colors group-hover:bg-accent">
              N.
            </span>
            <span className="hidden font-mono text-[10px] uppercase leading-tight tracking-[0.16em] text-white/55 sm:block">
              Nazarii<br />Harasymchuk
            </span>
          </a>

          <div className="mx-auto hidden items-center gap-7 xl:flex">
            {NAV_LINKS.slice(1, 6).map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-white"
              >
                <span className="text-[8px] text-accent/70">0{index + 1}</span>
                <span className="relative py-2">{t.nav[link.key]}<i className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" /></span>
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3 sm:gap-5">
            <LanguageToggle />
            <a
              href="#contact"
              className="hidden items-center gap-2 bg-[#efeee8] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.09em] text-black transition-colors hover:bg-accent lg:inline-flex"
            >
              {t.nav.cta}
              <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center border border-white/15 text-white transition-colors hover:border-accent hover:text-accent xl:hidden"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
          <m.span
            aria-hidden="true"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="absolute inset-x-0 bottom-0 h-[2px] bg-accent"
          />
        </nav>
      </Container>

      {open && (
        <Container>
          <m.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="border-x border-b border-white/15 bg-[#090908]/98 p-4 shadow-2xl xl:hidden"
          >
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between bg-[#0d0d0b] px-5 py-4 text-base font-semibold uppercase tracking-[-0.02em] text-white/75 transition-colors hover:bg-accent hover:text-black"
                >
                  <span>{t.nav[link.key]}</span>
                  <span className="font-mono text-[9px] opacity-45">0{index + 1}</span>
                </a>
              ))}
            </div>
          </m.div>
        </Container>
      )}
      <div className="fixed bottom-5 right-5 hidden items-center gap-3 lg:flex">
        <span className="font-mono text-[7px] uppercase tracking-[.18em] text-white/28 [writing-mode:vertical-rl]">Keep moving</span>
        <m.span style={reduceMotion ? undefined : { rotate: wheelRotate }} className="relative grid h-10 w-10 place-items-center rounded-full border border-white/18 bg-[#090908]/85 shadow-xl">
          <i className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
          <i className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-accent" />
        </m.span>
      </div>
    </header>
  );
}
