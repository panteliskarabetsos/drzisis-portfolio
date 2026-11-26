import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Dr. Marios Zisis, Resident Doctor and Aspiring Cardiologist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/profile-img.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#11110f",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 56, height: 2, background: "#22d3ee" }} />
            <div
              style={{
                fontSize: 20,
                letterSpacing: 4,
                whiteSpace: "nowrap",
                textTransform: "uppercase",
                color: "#67e8f9",
              }}
            >
              Medicine · Cardiology · Prevention
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: -4,
            }}
          >
            <span>Dr. Marios</span>
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Zisis.</span>
          </div>

          <div style={{ marginTop: 40, fontSize: 30, color: "#d6d3d1" }}>
            Resident Doctor &amp; Aspiring Cardiologist
          </div>

          <div style={{ marginTop: 56, fontSize: 22, color: "#78716c" }}>
            drzisis.com
          </div>
        </div>

        <img
          src={photoSrc}
          alt=""
          width={360}
          height={404}
          style={{
            borderRadius: 32,
            objectFit: "cover",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        />
      </div>
    ),
    size
  );
}
