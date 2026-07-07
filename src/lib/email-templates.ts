import { SITE } from "@/lib/constants";
import type { ContactPayload } from "@/lib/contact";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatKyivDateTime(date: Date): string {
  return new Intl.DateTimeFormat("uk-UA", {
    timeZone: "Europe/Kyiv",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

const ACCENT = "#2563eb";
const ACCENT_SOFT = "#60a5fa";

function emailShell(preheader: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="dark" />
<meta name="supported-color-schemes" content="dark" />
</head>
<body style="margin:0;padding:0;background-color:#030304;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#030304;">
<tr>
<td align="center" style="padding:40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
<tr>
<td style="padding:0 8px 24px;">
<span style="font-size:15px;font-weight:600;letter-spacing:-0.01em;color:#ffffff;">${escapeHtml(SITE.name)}</span>
<span style="font-size:13px;color:rgba(255,255,255,0.45);"> · ${escapeHtml(SITE.role)}</span>
</td>
</tr>
<tr>
<td style="background-color:#0a0a0d;border:1px solid rgba(255,255,255,0.09);border-radius:20px;overflow:hidden;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="height:3px;background:linear-gradient(90deg,${ACCENT_SOFT} 0%,${ACCENT} 55%,#1d4ed8 100%);font-size:0;line-height:0;">&nbsp;</td></tr>
<tr><td style="padding:36px 36px 40px;">
${content}
</td></tr>
</table>
</td>
</tr>
<tr>
<td style="padding:24px 8px 0;text-align:center;">
<p style="margin:0;font-size:12px;line-height:1.6;color:rgba(255,255,255,0.35);">
${escapeHtml(SITE.name)} · <a href="${SITE.url}" style="color:${ACCENT_SOFT};text-decoration:none;">${SITE.url.replace("https://", "")}</a> · ${escapeHtml(SITE.location)}
</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

function detailRow(label: string, value: string, options?: { href?: string }): string {
  const safeValue = escapeHtml(value);
  const rendered = options?.href
    ? `<a href="${options.href}" style="color:${ACCENT_SOFT};text-decoration:none;">${safeValue}</a>`
    : `<span style="color:#f5f5f7;">${safeValue}</span>`;
  return `<tr>
<td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.08);vertical-align:top;width:130px;">
<span style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.4);">${escapeHtml(label)}</span>
</td>
<td style="padding:14px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;line-height:1.5;">
${rendered}
</td>
</tr>`;
}

export function buildOwnerEmail(payload: ContactPayload, submittedAt: Date): {
  subject: string;
  html: string;
  text: string;
} {
  const dateTime = formatKyivDateTime(submittedAt);

  const rows = [
    detailRow("Ім'я", payload.name),
    detailRow("Email", payload.email, { href: `mailto:${escapeHtml(payload.email)}` }),
    detailRow("Телефон", payload.phone, { href: `tel:${escapeHtml(payload.phone)}` }),
    payload.company ? detailRow("Компанія", payload.company) : "",
    detailRow("Послуга", payload.service),
    detailRow("Дата і час", dateTime),
  ].join("");

  const content = `
<p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${ACCENT_SOFT};">Нова заявка з сайту</p>
<h1 style="margin:0 0 28px;font-size:24px;font-weight:700;letter-spacing:-0.02em;line-height:1.25;color:#ffffff;">${escapeHtml(payload.name)} хоче обговорити проєкт</h1>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
${rows}
</table>
<p style="margin:0 0 10px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.4);">Повідомлення</p>
<div style="padding:20px 22px;background-color:rgba(37,99,235,0.07);border:1px solid rgba(37,99,235,0.25);border-radius:14px;">
<p style="margin:0;font-size:14px;line-height:1.7;color:#f5f5f7;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
</div>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
<tr>
<td style="border-radius:999px;background:linear-gradient(110deg,#2563eb 0%,#3b82f6 45%,#1d4ed8 100%);">
<a href="mailto:${escapeHtml(payload.email)}" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:500;color:#ffffff;text-decoration:none;">Відповісти ${escapeHtml(payload.name)}</a>
</td>
</tr>
</table>`;

  const text = [
    "Нова заявка з сайту",
    "",
    `Ім'я: ${payload.name}`,
    `Email: ${payload.email}`,
    `Телефон: ${payload.phone}`,
    payload.company ? `Компанія: ${payload.company}` : null,
    `Послуга: ${payload.service}`,
    `Дата і час: ${dateTime}`,
    "",
    "Повідомлення:",
    payload.message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return {
    subject: `Нова заявка від ${payload.name} — ${payload.service}`,
    html: emailShell(`Нова заявка від ${payload.name} (${payload.service})`, content),
    text,
  };
}

export function buildVisitorEmail(payload: ContactPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const firstName = payload.name.split(/\s+/)[0];

  const content = `
<p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:${ACCENT_SOFT};">Заявку отримано</p>
<h1 style="margin:0 0 20px;font-size:24px;font-weight:700;letter-spacing:-0.02em;line-height:1.25;color:#ffffff;">Дякую за звернення, ${escapeHtml(firstName)}!</h1>
<p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.75);">
Я отримав вашу заявку щодо послуги «${escapeHtml(payload.service)}» і вже переглядаю деталі.
</p>
<p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.75);">
Зазвичай я відповідаю протягом <span style="color:#ffffff;font-weight:600;">одного робочого дня</span>. Якщо питання термінове — пишіть у Telegram, там я відповідаю найшвидше.
</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
<tr>
<td style="border-radius:999px;background:linear-gradient(110deg,#2563eb 0%,#3b82f6 45%,#1d4ed8 100%);">
<a href="${SITE.telegram}" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:500;color:#ffffff;text-decoration:none;">Написати в Telegram</a>
</td>
</tr>
</table>
<div style="padding:18px 22px;background-color:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:14px;">
<p style="margin:0;font-size:13px;line-height:1.7;color:rgba(255,255,255,0.55);">
Це автоматичне підтвердження — на цей лист відповідати не потрібно. Якщо хочете щось додати до заявки, напишіть на
<a href="mailto:${SITE.email}" style="color:${ACCENT_SOFT};text-decoration:none;">${SITE.email}</a>.
</p>
</div>`;

  const text = [
    `Дякую за звернення, ${firstName}!`,
    "",
    `Я отримав вашу заявку щодо послуги «${payload.service}» і вже переглядаю деталі.`,
    "Зазвичай я відповідаю протягом одного робочого дня.",
    "",
    `Якщо питання термінове — пишіть у Telegram: ${SITE.telegram}`,
    "",
    "Це автоматичне підтвердження — на цей лист відповідати не потрібно.",
    `Щоб щось додати до заявки, напишіть на ${SITE.email}.`,
  ].join("\n");

  return {
    subject: "Дякуємо за вашу заявку!",
    html: emailShell("Вашу заявку отримано — відповім протягом одного робочого дня.", content),
    text,
  };
}
