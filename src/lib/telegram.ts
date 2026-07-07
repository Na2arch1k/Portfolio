import type { ContactPayload } from "@/lib/contact";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
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

/*
  Best-effort side channel: a visitor never has a Telegram chat with us,
  so "replying" here just means one tap to email or call them. Any
  failure is logged, never surfaced to the visitor — the lead is
  already delivered by email.
*/
export async function sendTelegramNotification(
  payload: ContactPayload,
  submittedAt: Date
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const lines = [
    "📩 <b>Нова заявка з сайту</b>",
    "",
    `👤 <b>Ім'я:</b> ${escapeHtml(payload.name)}`,
    `✉️ <b>Email:</b> ${escapeHtml(payload.email)}`,
    `📞 <b>Телефон:</b> ${escapeHtml(payload.phone)}`,
    payload.company ? `🏢 <b>Компанія:</b> ${escapeHtml(payload.company)}` : null,
    `🛠 <b>Послуга:</b> ${escapeHtml(payload.service)}`,
    `🕒 <b>Дата:</b> ${escapeHtml(formatKyivDateTime(submittedAt))}`,
    "",
    `💬 ${escapeHtml(payload.message)}`,
  ].filter((line): line is string => line !== null);

  try {
    // Telegram's inline keyboard button "url" field only accepts http(s)
    // or tg:// links — both "tel:" and "mailto:" come back as
    // BUTTON_URL_INVALID and fail the whole sendMessage call. The email
    // and phone are already in the message text above, where Telegram
    // auto-links them for tap-to-email / tap-to-call.
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      console.error("[contact] Telegram API повернув помилку:", await response.text());
    }
  } catch (err) {
    console.error("[contact] Не вдалося надіслати сповіщення в Telegram:", err);
  }
}
