"use client";

import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <AnimatedBackground />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.badge}
          </div>

          <h1
            className="animate-fade-up text-gradient max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "60ms" }}
          >
            {t.hero.titleLine}{" "}
            <span className="text-gradient-accent">{t.hero.titleAccent}</span>
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/60 sm:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            {t.hero.description}
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <Button href="#contact" size="lg" icon={<ArrowRight size={18} />}>
              {t.hero.ctaPrimary}
            </Button>
            <Button
              href="#projects"
              variant="secondary"
              size="lg"
              icon={<ArrowDown size={16} />}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <div
            className="animate-fade-up mt-20 w-full max-w-3xl"
            style={{ animationDelay: "240ms" }}
          >
            <div className="glass grid grid-cols-2 divide-white/[0.06] rounded-2xl py-6 sm:grid-cols-4 sm:divide-x">
              {t.hero.stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 px-4 py-3 sm:py-0"
                >
                  <span className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {value}
                  </span>
                  <span className="text-xs font-medium text-white/50 sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div
        className="animate-fade-up absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{ animationDelay: "300ms" }}
      >
        <div className="motion-safe:animate-bounce flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
