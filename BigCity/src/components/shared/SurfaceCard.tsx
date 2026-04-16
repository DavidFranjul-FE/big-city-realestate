type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className = "" }: SurfaceCardProps) {
  return (
    <div className={`rounded-2xl border border-gray-100 bg-white shadow-sm ${className}`.trim()}>
      {children}
    </div>
  );
}
