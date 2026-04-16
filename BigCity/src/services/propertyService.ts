import { client } from "../sanity/client";
import type { Property } from "../types/property";

const PROPERTY_FIELDS = `
  _id,
  title,
  slug,
  price,
  location,
  bedrooms,
  bathrooms,
  sqft,
  mainImage,
  gallery,
  description
`;

export async function fetchProperties(options?: { featured?: boolean }) {
  const featuredFilter = options?.featured ? " && featured == true" : "";

  return client.fetch<Property[]>(
    `
      *[_type == "property"${featuredFilter}] | order(_createdAt desc){
        ${PROPERTY_FIELDS}
      }
    `,
  );
}

export async function fetchPropertyBySlug(slug: string) {
  return client.fetch<Property | null>(
    `
      *[_type == "property" && slug.current == $slug][0]{
        ${PROPERTY_FIELDS}
      }
    `,
    { slug },
  );
}
