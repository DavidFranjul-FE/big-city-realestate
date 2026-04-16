import { Link } from "react-router-dom";
import type { Property } from "../../types/property";
import { buildPropertyImageUrl } from "../../utils/property";
import { formatCurrency } from "../../utils/formatters";
import { PropertySpecs } from "./PropertySpecs";

type PropertyCardProps = {
  property: Property;
  href: string;
  imageHeightClassName?: string;
  className?: string;
  priceOverlay?: boolean;
};

export function PropertyCard({
  property,
  href,
  imageHeightClassName = "h-52",
  className = "",
  priceOverlay = false,
}: PropertyCardProps) {
  const imageUrl = buildPropertyImageUrl(property.mainImage, 900, 600);

  return (
    <Link
      to={href}
      className={`block overflow-hidden rounded-xl bg-white text-left shadow-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`.trim()}
    >
      <div className={`relative overflow-hidden bg-gray-100 ${imageHeightClassName}`.trim()}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={property.title}
            className="h-full w-full object-cover transition duration-300 hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
            No image
          </div>
        )}

        {priceOverlay ? (
          <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white">
            {formatCurrency(property.price)}
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
        <p className="text-sm text-gray-500">{property.location}</p>

        {!priceOverlay ? (
          <p className="mt-3 text-xl font-bold text-green-600">
            {formatCurrency(property.price)}
          </p>
        ) : null}

        <PropertySpecs
          property={property}
          className="mt-3"
          separator={priceOverlay ? "•" : undefined}
        />
      </div>
    </Link>
  );
}
