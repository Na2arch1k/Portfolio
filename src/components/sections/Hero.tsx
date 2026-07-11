"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <AnimatedBackground />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gradient max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
          >
            {t.hero.titleLine}{" "}
            <span className="text-gradient-accent">{t.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-20 w-full max-w-3xl"
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
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
