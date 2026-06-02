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
        background: "#0a0a0b",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 32,
          color: "#7dd3fc",
          letterSpacing: 6,
          textTransform: "uppercase",
        }}
      >
        Senior Backend Engineer
      </div>
      <div style={{ fontSize: 92, fontWeight: 700, marginTop: 12 }}>
        Will Wu
      </div>
      <div style={{ fontSize: 38, color: "#a1a1aa", marginTop: 28 }}>
        Python · Go · TypeScript
      </div>
      <div style={{ fontSize: 30, color: "#71717a", marginTop: 44 }}>
        2M+ MAU systems · 80% latency cuts · zero-downtime migrations
      </div>
    </div>,
    { ...size },
  );
}
