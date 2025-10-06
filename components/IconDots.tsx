export default function IconDots() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-white/5 blur-xl animate-pulse [animation-delay:700ms]" />
    </div>
  );
}
