"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { SITE } from "@/lib/constants";
import { toUaE164 } from "@/lib/phone";
import {
  MESSAGE_MIN_LENGTH,
  SERVICE_OPTIONS,
  parseContactPayload,
} from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";

const CONTACT_INFO = [
  { icon: Send, label: "Telegram", value: SITE.telegramHandle, href: SITE.telegram },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Локація", value: SITE.location, href: undefined },
];

const inputClasses =
  "rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent/60 focus:bg-white/[0.05] disabled:opacity-60";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const isLoading = status === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const phoneDigits = String(formData.get("phone") ?? "").replace(/\D/g, "");
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: phoneDigits ? toUaE164(phoneDigits) : "",
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const parsed = parseContactPayload(payload);
    if (!parsed.ok) {
      setStatus("error");
      setError(parsed.error);
      return;
    }

    setStatus("loading");

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
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass flex h-full min-h-[420px] flex-col items-center justify-center gap-5 rounded-2xl p-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                  className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/30"
                >
                  <CheckCircle2 size={32} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Дякуємо!</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    Вашу заявку успішно отримано.
                    <br />
                    Я зв&apos;яжуся з вами найближчим часом.
                  </p>
                  <p className="mt-3 text-xs text-white/40">
                    Лист-підтвердження вже прямує на вашу пошту.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setStatus("idle")}
                >
                  Надіслати ще одну заявку
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onSubmit={handleSubmit}
                className="glass flex h-full flex-col gap-5 rounded-2xl p-8"
              >
                <fieldset disabled={isLoading} className="contents">
                  {/* Honeypot: hidden from people, tempting for bots. */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-px w-px overflow-hidden"
                  >
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

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
                        maxLength={100}
                        placeholder="Ваше ім'я"
                        className={inputClasses}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-white/70">
                        Телефон
                      </label>
                      <PhoneInput id="phone" name="phone" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                        className={inputClasses}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-sm font-medium text-white/70">
                        Компанія{" "}
                        <span className="font-normal text-white/40">(необов&apos;язково)</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        maxLength={150}
                        placeholder="Назва компанії"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-white/70">
                      Послуга
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className={`${inputClasses} w-full appearance-none pr-10 invalid:text-white/30`}
                      >
                        <option value="" disabled className="bg-surface text-white/50">
                          Оберіть послугу
                        </option>
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option} className="bg-surface text-white">
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/70">
                      Повідомлення
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={MESSAGE_MIN_LENGTH}
                      maxLength={3000}
                      rows={5}
                      placeholder="Розкажіть коротко про ваш проєкт..."
                      className={`${inputClasses} flex-1 resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    icon={
                      isLoading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )
                    }
                    className="w-full sm:w-auto sm:self-start"
                  >
                    {isLoading ? "Надсилання..." : "Надіслати заявку"}
                  </Button>
                </fieldset>

                {status === "error" && error && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3"
                  >
                    <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-400" />
                    <p className="text-sm leading-relaxed text-red-300">{error}</p>
                  </motion.div>
                )}
              </motion.form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
