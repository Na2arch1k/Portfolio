"use client";

import { ArrowUp, ArrowUpRight, Mail, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/12 bg-[#070706]">
      <Container className="py-10 sm:py-14">
        <div className="flex items-start justify-between gap-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-[#efeee8] text-lg font-black text-black">N.</span>
            <span className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-white/45">Independent<br />digital creator</span>
          </a>
          <a href="#home" aria-label="Вгору" className="grid h-11 w-11 place-items-center border border-white/18 text-white/55 transition-colors hover:border-accent hover:bg-accent hover:text-black">
            <ArrowUp size={17} />
          </a>
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/12 pt-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <p className="max-w-sm text-sm leading-relaxed text-white/42">{t.footer.description}</p>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-accent">{t.nav[link.key]}</a>)}
          </nav>
          <div className="flex flex-col items-start gap-3 font-mono text-[9px] uppercase tracking-[0.14em]">
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-white/48 hover:text-accent"><Mail size={13} />{SITE.email}</a>
            <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/48 hover:text-accent"><Send size={13} />Telegram <ArrowUpRight size={11} /></a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/12 pt-6 font-mono text-[8px] uppercase tracking-[0.18em] text-white/28">
          <span>© {year} {SITE.name}. {t.footer.rights}</span>
          <span>{SITE.location} · 49.8397° N / 24.0297° E</span>
        </div>
      </Container>
    </footer>
  );
}
