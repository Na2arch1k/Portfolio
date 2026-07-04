export const UA_PHONE_PREFIX = "+380";
export const UA_PHONE_DIGITS_LENGTH = 9;

const UA_OPERATOR_CODES = [
  "39", "50", "63", "66", "67", "68", "73",
  "91", "92", "93", "94", "95", "96", "97", "98", "99",
] as const;

export function sanitizeUaPhoneDigits(raw: string): string {
  return raw.replace(/\D/g, "").slice(0, UA_PHONE_DIGITS_LENGTH);
}

export function formatUaPhoneDigits(digits: string): string {
  const groups = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)];
  return groups.filter(Boolean).join(" ");
}

export function isValidUaPhoneDigits(digits: string): boolean {
  if (!/^\d{9}$/.test(digits)) return false;
  return UA_OPERATOR_CODES.includes(digits.slice(0, 2) as (typeof UA_OPERATOR_CODES)[number]);
}

export function isValidUaPhoneNumber(value: string): boolean {
  if (!value.startsWith(UA_PHONE_PREFIX)) return false;
  return isValidUaPhoneDigits(value.slice(UA_PHONE_PREFIX.length));
}

export function toUaE164(digits: string): string {
  return `${UA_PHONE_PREFIX}${digits}`;
}
