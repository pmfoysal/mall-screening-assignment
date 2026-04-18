import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "oklch(7% 0.01 264)",
        color: "white",
        gap: "1.5rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "oklch(78% 0.13 75)",
        }}
      >
        404 — Page Not Found
      </p>
      <h1
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(2.5rem, 6vw, 6rem)",
          fontWeight: 300,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        Lost in the Dream
      </h1>
      <p
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "1rem",
          color: "oklch(68% 0.01 264)",
          maxWidth: "44ch",
          lineHeight: 1.6,
        }}
      >
        This page doesn&apos;t exist, but American Dream certainly does — with
        40M+ visitors and 3M sq ft waiting to be explored.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "0.75rem 2rem",
          borderRadius: "9999px",
          background: "oklch(78% 0.13 75)",
          color: "oklch(7% 0.01 264)",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Return to the Experience
      </Link>
    </div>
  );
}
