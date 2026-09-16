export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute top-[40%] -left-40 h-[420px] w-[420px] rounded-full bg-accent-2/15 blur-[140px] animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[520px] w-[520px] rounded-full bg-accent-3/10 blur-[160px]" />
    </div>
  );
}
