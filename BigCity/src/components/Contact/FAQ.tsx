export function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
      <div className="text-sm font-bold text-gray-900">{q}</div>
      <div className="mt-1 text-sm text-gray-600">{a}</div>
    </div>
  );
}
