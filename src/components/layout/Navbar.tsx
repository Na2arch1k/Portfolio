"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Language } from "@/lib/i18n/dictionaries";

function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const options: Language[] = ["uk", "en"];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-semibold",
        className
      )}
      role="group"
      aria-label="Мова сайту / Site language"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors duration-200",
            language === option ? "bg-accent text-white" : "text-white/50 hover:text-white"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <Container>
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
            scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
          )}
        >
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Nazar<span className="text-accent">.dev</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageToggle />
            <Button href="#contact" size="md">
              {t.nav.cta}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <button
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full text-white"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mx-6 mt-3 lg:hidden"
        >
          <div className="glass-strong flex flex-col gap-1 rounded-2xl p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <div className="mt-2 px-4">
              <Button href="#contact" className="w-full" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
