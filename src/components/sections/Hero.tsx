"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Smartphone, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const STATS = [
  { icon: Zap, label: "Швидке виконання" },
  { icon: Sparkles, label: "Сучасний дизайн" },
  { icon: Smartphone, label: "Адаптивність" },
  { icon: Search, label: "SEO" },
];

export function Hero() {
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
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-soft"
          >
            <Sparkles size={16} />
            Веброзробка нового покоління з Claude Code
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gradient max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
          >
            Створюю сучасні вебсайти, які допомагають бізнесу отримувати{" "}
            <span className="text-gradient-accent">більше клієнтів</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            Розробляю швидкі, сучасні та красиві вебсайти для бізнесу за
            допомогою Claude Code. Моя мета — створювати сайти, які не просто
            гарно виглядають, а реально приносять заявки.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#contact" size="lg" icon={<ArrowRight size={18} />}>
              Замовити сайт
            </Button>
            <Button href="#projects" variant="secondary" size="lg">
              Мої роботи
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition-colors duration-300 hover:border-accent/40"
              >
                <Icon size={22} className="text-accent" />
                <span className="text-sm font-medium text-white/70">
                  {label}
                </span>
              </div>
            ))}
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
