export default function SpotlightGrid({ items }:{ items: {title:string; desc:string}[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((it, idx) => (
        <div key={idx} className="relative rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 transition">
          <h4 className="font-semibold">{it.title}</h4>
          <p className="text-sm text-muted mt-2">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}
