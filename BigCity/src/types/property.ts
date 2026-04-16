export type SanitySlug = {
  _type: "slug";
  current: string;
};

export type SanityImageRef = {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
};

export type Property = {
  _id: string;
  title: string;
  slug: SanitySlug;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  mainImage?: SanityImageRef;
  gallery?: SanityImageRef[];
  description?: string;
};
