export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "oklch(7% 0.01 264)",
        zIndex: 9999,
      }}
      aria-live="polite"
      aria-label="Loading American Dream"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.2rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "oklch(78% 0.13 75)",
          }}
        >
          American Dream
        </div>
        <div
          style={{
            width: "40px",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, oklch(78% 0.13 75), transparent)",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}
