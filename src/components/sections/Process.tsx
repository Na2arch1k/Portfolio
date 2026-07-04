"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Процес роботи"
          title="Прозорий шлях від ідеї до запуску"
          description="Кожен проєкт проходить шість чітких етапів, щоб результат відповідав очікуванням."
        />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {PROCESS_STEPS.map(({ step, icon: Icon, title, description }, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative flex items-start gap-6 sm:justify-center"
              >
                <div className="glass relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border-accent/40 text-accent sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <Icon size={20} />
                </div>

                <div
                  className={
                    "glass w-full rounded-2xl p-6 transition-colors duration-300 hover:border-accent/40 sm:w-[calc(50%-2.5rem)] " +
                    (index % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto")
                  }
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent-soft">
                    Крок {step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
