"use client";

export default function VenuesError({ reset }: { reset: () => void }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <p>Failed to load venues.</p>
      <button onClick={reset}>Try again</button>
      <a href="/">← Back</a>
    </div>
  );
}
