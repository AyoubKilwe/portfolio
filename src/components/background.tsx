/* Static gradient background: no CSS filters or animations, so it costs nothing to paint on phones. */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 50% -8%, rgba(14,165,233,0.22), transparent 70%)," +
            "radial-gradient(420px 420px at 0% 45%, rgba(167,139,250,0.14), transparent 70%)," +
            "radial-gradient(520px 520px at 100% 100%, rgba(244,114,182,0.10), transparent 70%)",
        }}
      />
    </div>
  );
}
