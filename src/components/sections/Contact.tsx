"use client";

import { useState, type FormEvent } from "react";
import { m } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";
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
import { SERVICES } from "@/data/services";
import { toUaE164 } from "@/lib/phone";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  MESSAGE_MIN_LENGTH,
  SERVICE_VALUE_BY_ID,
  SERVICE_OPTIONS,
  parseContactPayload,
} from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent/60 focus:bg-white/[0.05] disabled:opacity-60";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  const isLoading = status === "loading";

  const CONTACT_INFO = [
    { icon: Send, label: t.contact.telegramLabel, value: SITE.telegramHandle, href: SITE.telegram },
    { icon: Mail, label: t.contact.emailLabel, value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: t.contact.locationLabel, value: SITE.location, href: undefined },
  ];

  function localizeError(code: string): string {
    const errors = t.contact.errors as Record<string, string>;
    return errors[code] ?? errors.generic;
  }

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

    const parsed = parseContactPayload(payload, SERVICE_OPTIONS);
    if (!parsed.ok) {
      setStatus("error");
      setError(localizeError(parsed.error));
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
        setError(localizeError(result.error ?? "generic"));
        return;
      }

      setStatus("success");
      sendGAEvent("event", "generate_lead", { service: parsed.payload.service });
    } catch {
      setStatus("error");
      setError(t.contact.errors.network);
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass flex h-full flex-col justify-between rounded-2xl p-8">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {t.contact.infoHeading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {t.contact.infoSubheading}
                </p>
              </div>

              <ul className="mt-8 flex flex-col gap-5">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={20} aria-hidden="true" />
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
              <m.div
                key="success"
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass flex h-full min-h-[420px] flex-col items-center justify-center gap-5 rounded-2xl p-10 text-center"
              >
                <m.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                  className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/30"
                >
                  <CheckCircle2 size={32} />
                </m.div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{t.contact.form.successTitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {t.contact.form.successBody}
                    <br />
                    {t.contact.form.successBody2}
                  </p>
                  <p className="mt-3 text-xs text-white/40">
                    {t.contact.form.successNote}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setStatus("idle")}
                >
                  {t.contact.form.sendAnother}
                </Button>
              </m.div>
            ) : (
              <m.form
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
                        {t.contact.form.name}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder={t.contact.form.namePlaceholder}
                        className={inputClasses}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-white/70">
                        {t.contact.form.phone}
                      </label>
                      <PhoneInput
                        id="phone"
                        name="phone"
                        required
                        errorLabel={t.contact.form.phoneError}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/70">
                        {t.contact.form.email}
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
                        {t.contact.form.company}{" "}
                        <span className="font-normal text-white/40">{t.contact.form.companyOptional}</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        maxLength={150}
                        placeholder={t.contact.form.companyPlaceholder}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-white/70">
                      {t.contact.form.service}
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
                          {t.contact.form.selectService}
                        </option>
                        {SERVICES.map((service) => (
                          <option
                            key={service.id}
                            value={SERVICE_VALUE_BY_ID[service.id]}
                            className="bg-surface text-white"
                          >
                            {t.services.items[service.id as keyof typeof t.services.items].title}
                          </option>
                        ))}
                        <option value={SERVICE_VALUE_BY_ID.other} className="bg-surface text-white">
                          {t.contact.form.otherService}
                        </option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/70">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={MESSAGE_MIN_LENGTH}
                      maxLength={3000}
                      rows={5}
                      placeholder={t.contact.form.messagePlaceholder}
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
                    {isLoading ? t.contact.form.submitting : t.contact.form.submit}
                  </Button>
                </fieldset>

                {status === "error" && error && (
                  <m.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3"
                  >
                    <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-400" />
                    <p className="text-sm leading-relaxed text-red-300">{error}</p>
                  </m.div>
                )}
              </m.form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
