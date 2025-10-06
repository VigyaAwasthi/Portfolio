export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-24">
      <div className="mx-auto max-w-6xl px-4 text-xs text-muted flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Vigya Awasthi</p>
        <p>Built with Next.js, Tailwind & Framer Motion • Deployed on Vercel</p>
      </div>
    </footer>
  );
}
