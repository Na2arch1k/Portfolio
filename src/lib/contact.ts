import { isValidUaPhoneNumber } from "@/lib/phone";
import { SERVICES } from "@/data/services";
import { dictionaries } from "@/lib/i18n/dictionaries";

/**
 * Service values submitted with the form and stored in owner notifications
 * stay in Ukrainian regardless of the visitor's UI language, so the site
 * owner always reads leads in one consistent language.
 */
export const SERVICE_VALUE_BY_ID: Record<string, string> = Object.fromEntries([
  ...SERVICES.map((s) => [
    s.id,
    dictionaries.uk.services.items[s.id as keyof typeof dictionaries.uk.services.items].title,
  ]),
  ["other", dictionaries.uk.contact.form.otherService],
]);

export const SERVICE_OPTIONS = Object.values(SERVICE_VALUE_BY_ID);

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

export type ContactErrorCode =
  | "invalid_request"
  | "invalid_name"
  | "invalid_email"
  | "invalid_phone"
  | "company_too_long"
  | "invalid_service"
  | "message_too_short"
  | "message_too_long";

export type ContactParseResult =
  | { ok: true; payload: ContactPayload }
  | { ok: false; error: ContactErrorCode };

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactPayload(
  data: unknown,
  serviceOptions: readonly string[]
): ContactParseResult {
  if (typeof data !== "object" || data === null) {
    return { ok: false, error: "invalid_request" };
  }

  const record = data as Record<string, unknown>;
  const name = asTrimmedString(record.name);
  const email = asTrimmedString(record.email);
  const phone = asTrimmedString(record.phone);
  const company = asTrimmedString(record.company);
  const service = asTrimmedString(record.service);
  const message = asTrimmedString(record.message);

  if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
    return { ok: false, error: "invalid_name" };
  }
  if (email.length > EMAIL_MAX_LENGTH || !EMAIL_REGEX.test(email)) {
    return { ok: false, error: "invalid_email" };
  }
  if (!isValidUaPhoneNumber(phone)) {
    return { ok: false, error: "invalid_phone" };
  }
  if (company.length > COMPANY_MAX_LENGTH) {
    return { ok: false, error: "company_too_long" };
  }
  if (!serviceOptions.includes(service)) {
    return { ok: false, error: "invalid_service" };
  }
  if (message.length < MESSAGE_MIN_LENGTH) {
    return { ok: false, error: "message_too_short" };
  }
  if (message.length > MESSAGE_MAX_LENGTH) {
    return { ok: false, error: "message_too_long" };
  }

  return {
    ok: true,
    payload: { name, email, phone, company, service, message },
  };
}
