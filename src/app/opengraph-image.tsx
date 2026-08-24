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
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#090908",
          backgroundImage: "linear-gradient(90deg, rgba(239,238,232,.08) 1px, transparent 1px), linear-gradient(rgba(239,238,232,.08) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          padding: 54,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            fontSize: 20,
            fontWeight: 700,
            color: "#ff5b33",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>{SITE.name}</span>
          <span style={{ color: "rgba(239,238,232,.45)" }}>DESIGN × CODE × MOTION</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#efeee8",
            textAlign: "left",
            lineHeight: 0.95,
            letterSpacing: -4,
            maxWidth: 1040,
            textTransform: "uppercase",
          }}
        >
          CLINICCARD — КЛІНІКА ПІД КОНТРОЛЕМ
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-end",
            background: "#ff5b33",
            padding: "14px 20px",
            fontSize: 18,
            color: "#090908",
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Clinic OS · Сайти · Чат-боти · CRM
        </div>
      </div>
    ),
    size
  );
}
