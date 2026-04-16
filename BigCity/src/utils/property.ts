import { urlFor } from "../sanity/imageBuilder";
import type { Property, SanityImageRef } from "../types/property";
import { formatNumber } from "./formatters";

export function buildPropertyImageUrl(
  image: SanityImageRef | undefined,
  width: number,
  height: number,
) {
  if (!image) {
    return "";
  }

  return urlFor(image).width(width).height(height).fit("crop").url();
}

export function getPropertyGalleryImages(property: Property) {
  return [property.mainImage, ...(property.gallery ?? [])]
    .filter((image): image is SanityImageRef => Boolean(image))
    .map((image) => buildPropertyImageUrl(image, 1400, 1000));
}

export function getPropertySpecs(property: Pick<Property, "bedrooms" | "bathrooms" | "sqft">) {
  return [
    `${property.bedrooms} bd`,
    `${property.bathrooms} ba`,
    `${formatNumber(property.sqft)} sqft`,
  ];
}
