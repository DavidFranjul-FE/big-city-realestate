export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
      <div className="text-lg font-extrabold text-gray-900">{value}</div>
      <div className="mt-1 text-xs font-semibold text-gray-600">{label}</div>
    </div>
  );
}
