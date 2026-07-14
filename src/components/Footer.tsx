export function Footer() {
  return (
    <footer className="px-6 pb-12 pt-[72px] text-center md:px-12">
      <div
        className="font-serif leading-none"
        style={{
          fontSize: "clamp(48px, 12vw, 88px)",
          letterSpacing: "0.3em",
          marginLeft: "0.3em",
          color: "rgba(33,29,23,.16)",
        }}
      >
        SAMAR
      </div>
      <div
        className="mt-3 text-[10px] uppercase"
        style={{ letterSpacing: "0.28em", color: "rgba(33,29,23,.4)" }}
      >
        © 2026 Maison Samar · Como — Paris — Tokyo
      </div>
    </footer>
  );
}
