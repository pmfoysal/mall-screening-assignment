"use client";

export default function VenueError({ reset }: { reset: () => void }) {
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
      <p>Failed to load venue page.</p>
      <button onClick={reset}>Try again</button>
      <a href="/venues">← Back to Venues</a>
    </div>
  );
}
