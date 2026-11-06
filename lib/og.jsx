import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Branded 1200×630 social card, rendered at build time.
export function renderOg({ eyebrow, title, subtitle }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#06070b",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(0,112,243,0.55), transparent 45%), radial-gradient(circle at 95% 30%, rgba(255,95,31,0.35), transparent 40%), radial-gradient(circle at 50% 120%, rgba(0,87,209,0.35), transparent 45%)",
          color: "#f4f5f7",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: "#0070f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="38" height="38" viewBox="0 0 300 301">
                <g transform="translate(0 301) scale(.1 -.1)" fill="#fff">
                  <path d="M682 2446 c2 -8 84 -136 183 -285 l180 -271 639 0 c547 0 637 2 633 14 -3 8 -87 136 -186 285 l-181 271 -636 0 c-537 0 -635 -2 -632 -14z" />
                  <path d="M462 938 l3 -693 929 -3 c800 -2 927 0 923 12 -3 8 -87 136 -186 285 l-181 271 -460 0 -460 0 0 130 0 130 375 0 375 0 -188 280 -187 280 -473 0 -472 0 2 -692z" />
                </g>
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 34, letterSpacing: -1.5 }}>enov8</span>
              <span style={{ fontSize: 14, letterSpacing: 6, color: "#8d92a0" }}>TECHNOLOGIES</span>
            </div>
          </div>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: 20,
                letterSpacing: 3,
                color: "#c3c7d1",
              }}
            >
              {eyebrow.toUpperCase()}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: title.length > 28 ? 76 : 96, lineHeight: 1, letterSpacing: -4, maxWidth: 1000 }}>
            {title}
          </div>
          {subtitle ? (
            <div style={{ fontSize: 28, lineHeight: 1.35, color: "#c3c7d1", maxWidth: 900 }}>{subtitle}</div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#8d92a0",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 26,
          }}
        >
          <span>enov8technologies.com</span>
          <span style={{ color: "#ff5f1f" }}>Lagos · Nigeria · Worldwide</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
