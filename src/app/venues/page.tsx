import Link from "next/link";
import { GlobalNavigation } from "@/components/layout/GlobalNavigation";

export const metadata = {
  title: "Venues | American Dream",
  description:
    "Explore world-class event venues at American Dream — Dream Live PAC and Expo Hall.",
};

export default function VenuesPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)" }}>
      <GlobalNavigation />
      <div
        style={{
          paddingTop: "calc(72px + 4rem)",
          padding: "calc(72px + 4rem) 5vw 4rem",
          maxWidth: "var(--container-xl)",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 300,
            marginBottom: "2rem",
          }}
        >
          Event Venues
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <Link
            href="/venues/performing-arts"
            style={{
              padding: "2rem",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              textDecoration: "none",
              color: "inherit",
              display: "block",
              transition: "border-color 0.2s",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 300,
              }}
            >
              Dream Live PAC
            </h2>
            <p
              style={{
                color: "var(--color-gold)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
                margin: "0.5rem 0",
              }}
            >
              Performing Arts Center
            </p>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.875rem",
                fontFamily: "var(--font-body)",
              }}
            >
              5,000 seats · State-of-the-art acoustics
            </p>
          </Link>
          <Link
            href="/venues/expo-hall"
            style={{
              padding: "2rem",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 300,
              }}
            >
              Expo Hall
            </h2>
            <p
              style={{
                color: "var(--color-gold)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
                margin: "0.5rem 0",
              }}
            >
              Convention & Exhibition
            </p>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "0.875rem",
                fontFamily: "var(--font-body)",
              }}
            >
              48,000 sq ft · Flexible configurations
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
