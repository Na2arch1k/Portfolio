import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";
import { parseContactPayload } from "@/lib/contact";
import { buildOwnerEmail, buildVisitorEmail } from "@/lib/email-templates";
import { isRateLimited } from "@/lib/rate-limit";
import { sendTelegramNotification } from "@/lib/telegram";

const RATE_LIMIT = { limit: 5, windowMs: 10 * 60 * 1000 };

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request), RATE_LIMIT)) {
    return NextResponse.json(
      { error: "Забагато запитів. Спробуйте, будь ласка, трохи пізніше." },
      { status: 429 }
    );
  }

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Некоректний запит." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this field. Pretend success so
  // bots don't learn they were filtered out.
  const honeypot = (data as Record<string, unknown> | null)?.website;
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = parseContactPayload(data);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
  const payload = parsed.payload;
  const submittedAt = new Date();

  await sendTelegramNotification(payload, submittedAt);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY не задано — лист не надіслано. Заявка:", payload);
      return NextResponse.json({ ok: true });
    }
    console.error("[contact] RESEND_API_KEY відсутній у production-оточенні.");
    return NextResponse.json(
      { error: "Сервіс тимчасово недоступний. Спробуйте пізніше." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    `${SITE.name} <onboarding@resend.dev>`;
  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;

  const ownerEmail = buildOwnerEmail(payload, submittedAt);
  const { error: ownerError } = await resend.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject: ownerEmail.subject,
    html: ownerEmail.html,
    text: ownerEmail.text,
  });

  if (ownerError) {
    console.error("[contact] Не вдалося надіслати лист власнику:", ownerError);
    return NextResponse.json(
      { error: "Не вдалося надіслати заявку. Спробуйте пізніше." },
      { status: 502 }
    );
  }

  // Auto-reply is best-effort: the lead is already delivered, so a
  // failure here must not surface as an error to the visitor.
  const visitorEmail = buildVisitorEmail(payload);
  const { error: visitorError } = await resend.emails.send({
    from,
    to: payload.email,
    replyTo: to,
    subject: visitorEmail.subject,
    html: visitorEmail.html,
    text: visitorEmail.text,
  });
  if (visitorError) {
    console.error("[contact] Не вдалося надіслати автовідповідь:", visitorError);
  }

  return NextResponse.json({ ok: true });
}
