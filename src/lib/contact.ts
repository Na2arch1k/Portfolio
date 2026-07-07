import { SERVICES } from "@/data/services";
import { isValidUaPhoneNumber } from "@/lib/phone";

export const SERVICE_OPTIONS = [
  ...SERVICES.map((service) => service.title),
  "Інше",
] as const;

export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 100;
export const COMPANY_MAX_LENGTH = 150;
export const MESSAGE_MIN_LENGTH = 10;
export const MESSAGE_MAX_LENGTH = 3000;
export const EMAIL_MAX_LENGTH = 254;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export type ContactParseResult =
  | { ok: true; payload: ContactPayload }
  | { ok: false; error: string };

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactPayload(data: unknown): ContactParseResult {
  if (typeof data !== "object" || data === null) {
    return { ok: false, error: "Некоректний запит." };
  }

  const record = data as Record<string, unknown>;
  const name = asTrimmedString(record.name);
  const email = asTrimmedString(record.email);
  const phone = asTrimmedString(record.phone);
  const company = asTrimmedString(record.company);
  const service = asTrimmedString(record.service);
  const message = asTrimmedString(record.message);

  if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
    return { ok: false, error: "Вкажіть, будь ласка, ваше ім'я." };
  }
  if (email.length > EMAIL_MAX_LENGTH || !EMAIL_REGEX.test(email)) {
    return { ok: false, error: "Вкажіть коректну email-адресу." };
  }
  if (!isValidUaPhoneNumber(phone)) {
    return { ok: false, error: "Вкажіть коректний український номер телефону." };
  }
  if (company.length > COMPANY_MAX_LENGTH) {
    return { ok: false, error: "Назва компанії занадто довга." };
  }
  if (!SERVICE_OPTIONS.includes(service as (typeof SERVICE_OPTIONS)[number])) {
    return { ok: false, error: "Оберіть послугу зі списку." };
  }
  if (message.length < MESSAGE_MIN_LENGTH) {
    return { ok: false, error: "Повідомлення закоротке — розкажіть трохи більше." };
  }
  if (message.length > MESSAGE_MAX_LENGTH) {
    return { ok: false, error: "Повідомлення занадто довге." };
  }

  return {
    ok: true,
    payload: { name, email, phone, company, service, message },
  };
}
