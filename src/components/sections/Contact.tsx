"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { SITE } from "@/lib/constants";
import { toUaE164 } from "@/lib/phone";

type Status = "idle" | "loading" | "success" | "error";

const CONTACT_INFO = [
  { icon: Send, label: "Telegram", value: SITE.telegramHandle, href: SITE.telegram },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Локація", value: SITE.location, href: undefined },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const phoneDigits = String(formData.get("phone") ?? "").replace(/\D/g, "");
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: phoneDigits ? toUaE164(phoneDigits) : "",
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setError(result.error ?? "Щось пішло не так. Спробуйте ще раз.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Не вдалося з'єднатися з сервером. Перевірте інтернет-з'єднання.");
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Контакти"
          title="Готові обговорити ваш проєкт?"
          description="Залиште заявку — я звʼяжусь з вами протягом одного робочого дня."
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass flex h-full flex-col justify-between rounded-2xl p-8">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Контактна інформація
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Оберіть зручний спосіб зв&apos;язку — відповідаю швидко.
                </p>
              </div>

              <ul className="mt-8 flex flex-col gap-5">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-white hover:text-accent-soft"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass flex h-full flex-col gap-5 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/70">
                    Ім&apos;я
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Ваше ім'я"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent/60 focus:bg-white/[0.05]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/70">
                    Телефон
                  </label>
                  <PhoneInput id="phone" name="phone" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent/60 focus:bg-white/[0.05]"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/70">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={5}
                  placeholder="Розкажіть коротко про ваш проєкт..."
                  className="flex-1 resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent/60 focus:bg-white/[0.05]"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                icon={<Send size={16} />}
                className="w-full sm:w-auto sm:self-start"
              >
                {status === "loading" ? "Надсилання..." : "Надіслати заявку"}
              </Button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-400"
                >
                  <CheckCircle2 size={16} />
                  Дякую! Ваша заявка надіслана, я скоро звʼяжусь з вами.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle size={16} />
                  {error}
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
