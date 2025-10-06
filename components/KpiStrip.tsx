import Badge from "./Badge";

export default function KpiStrip({ items }: { items: string[] }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap gap-3 justify-center">
      {items.map((it) => (
        <Badge key={it}>{it}</Badge>
      ))}
    </div>
  );
}
