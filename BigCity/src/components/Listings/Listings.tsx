import { useTranslation } from "react-i18next";
import { useAllProperties } from "../../hooks/useProperties";
import { ErrorState, LoadingState } from "../shared/PageState";
import { PropertyCard } from "../shared/PropertyCard";
import { SectionHeading } from "../shared/SectionHeading";

export const ListingsPage = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useAllProperties();

  if (loading) {
    return <LoadingState message={t("listings.loading")} />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-14">
        <SectionHeading
          title={t("listings.title")}
          description={t("listings.description")}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
              href={`/listing/${property.slug.current}`}
              priceOverlay
            />
          ))}
        </div>
      </div>
    </div>
  );
};
