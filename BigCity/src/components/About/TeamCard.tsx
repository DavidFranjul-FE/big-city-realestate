import { SurfaceCard } from "../shared/SurfaceCard";

export function TeamCard({ name, role }: { name: string; role: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <SurfaceCard className="p-6">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-100 font-extrabold text-blue-700">
          {initials}
        </div>
        <div>
          <div className="text-sm font-extrabold text-gray-900">{name}</div>
          <div className="text-xs font-semibold text-gray-600">{role}</div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        Focused on making the search experience feel fast, clear, and premium.
      </p>
    </SurfaceCard>
  );
}
