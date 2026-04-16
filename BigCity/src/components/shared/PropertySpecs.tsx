import { getPropertySpecs } from "../../utils/property";
import type { Property } from "../../types/property";

type PropertySpecsProps = {
  property: Pick<Property, "bedrooms" | "bathrooms" | "sqft">;
  className?: string;
  separator?: string;
};

export function PropertySpecs({
  property,
  className = "",
  separator,
}: PropertySpecsProps) {
  const specs = getPropertySpecs(property);

  return (
    <div className={`flex items-center gap-3 text-sm text-gray-600 ${className}`.trim()}>
      {specs.map((spec, index) => (
        <span key={spec} className="contents">
          {index > 0 && separator ? <span>{separator}</span> : null}
          <span>{spec}</span>
        </span>
      ))}
    </div>
  );
}
