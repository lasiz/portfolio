import { ImageResponse } from "next/og";
import { profile } from "@/constant/profile";

export const runtime = "edge";

export const alt = `${profile.name} - ${profile.jobTitle}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0d0f12",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #1f242d 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1f242d 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            backgroundColor: "#171b22",
            padding: "8px 20px",
            borderRadius: "9999px",
            border: "1px solid #2d333b",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
            }}
          />
          <span style={{ fontSize: 20, color: "#9ca3af", letterSpacing: "0.5px" }}>
            {profile.location} • Since {profile.experienceSince}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              margin: 0,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1.1,
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              fontSize: 34,
              margin: 0,
              color: "#38bdf8",
              fontWeight: 600,
            }}
          >
            {profile.jobTitle}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #21262d",
            paddingTop: "32px",
          }}
        >
          <span style={{ fontSize: 24, color: "#8b949e" }}>
            {profile.siteUrl.replace(/^https?:\/\//, "")}
          </span>
          <span style={{ fontSize: 24, color: "#8b949e" }}>
            {profile.education.split(",")[0]}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

