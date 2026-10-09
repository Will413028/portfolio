import { ImageResponse } from "next/og";

export const alt = "Will Wu — Senior Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#16233b",
        color: "#f3f1ea",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 32,
          color: "#f0b07e",
          letterSpacing: 6,
          textTransform: "uppercase",
        }}
      >
        Senior Backend Engineer
      </div>
      <div style={{ fontSize: 120, fontWeight: 700, marginTop: 12 }}>
        Will Wu
      </div>
      <div style={{ fontSize: 38, color: "#a9b2c6", marginTop: 28 }}>
        Python · Go · TypeScript
      </div>
      <div style={{ fontSize: 30, color: "#a9b2c6", marginTop: 44 }}>
        Taipei · Case studies, dated engineering calls, résumé
      </div>
    </div>,
    { ...size },
  );
}
