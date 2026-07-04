import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030304",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.4), transparent 55%), radial-gradient(circle at 80% 80%, rgba(29,78,216,0.3), transparent 50%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 32,
            fontWeight: 600,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 32,
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 960,
          }}
        >
          Створюю сучасні вебсайти, які приносять більше клієнтів
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            color: "#60a5fa",
            fontWeight: 600,
          }}
        >
          Розробка з Claude Code
        </div>
      </div>
    ),
    size
  );
}
