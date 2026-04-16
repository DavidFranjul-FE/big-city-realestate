import { SurfaceCard } from "../shared/SurfaceCard";

export function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <SurfaceCard className="p-6">
      <h3 className="text-base font-extrabold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
    </SurfaceCard>
  );
}
