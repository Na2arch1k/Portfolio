import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(data: Partial<ContactPayload>): data is ContactPayload {
  return Boolean(
    data.name &&
      data.name.trim().length >= 2 &&
      data.phone &&
      data.phone.trim().length >= 7 &&
      data.email &&
      EMAIL_REGEX.test(data.email) &&
      data.message &&
      data.message.trim().length >= 10
  );
}

export async function POST(request: Request) {
  let data: Partial<ContactPayload>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Некоректний запит." }, { status: 400 });
  }

  if (!isValidPayload(data)) {
    return NextResponse.json(
      { error: "Будь ласка, заповніть усі поля коректно." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Сайт ${SITE.name} <noreply@${new URL(SITE.url).hostname}>`,
        to: SITE.email,
        reply_to: data.email,
        subject: `Нова заявка від ${data.name}`,
        text: `Ім'я: ${data.name}\nТелефон: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Не вдалося надіслати заявку. Спробуйте пізніше." },
        { status: 502 }
      );
    }
  } else {
    console.info("[contact] Нова заявка:", data);
  }

  return NextResponse.json({ ok: true });
}
