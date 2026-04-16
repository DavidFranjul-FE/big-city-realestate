export function InfoRow({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
      <div className="text-xs font-semibold text-gray-600">{title}</div>
      <div className="mt-1 text-sm font-extrabold text-gray-900">{value}</div>
      {hint ? <div className="mt-1 text-xs text-gray-600">{hint}</div> : null}
    </div>
  );
}
