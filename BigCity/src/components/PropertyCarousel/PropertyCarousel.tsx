import { useTranslation } from "react-i18next";
import { useFeaturedProperties } from "../../hooks/useProperties";
import { LoadingState } from "../shared/PageState";
import { PropertyCard } from "../shared/PropertyCard";
import { useCarousel } from "./hooks/useCarousel";

export default function PropertyCarousel() {
  const { t } = useTranslation();
  const { data, loading, error } = useFeaturedProperties();

  const {
    containerRef,
    isDragging,
    shouldAllowClick,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    onMouseEnter,
  } = useCarousel<HTMLDivElement>({ dragSpeed: 1 });

  if (loading) {
    return <LoadingState message={t("carousel.loading")} />;
  }

  if (error || !data.length) {
    return (
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            {t("carousel.title")}
          </h2>
          <p className="text-gray-500">{t("carousel.noData")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          {t("carousel.title")}
        </h2>

        <div
          ref={containerRef}
          className="flex select-none gap-6 overflow-x-scroll pb-4"
          style={{
            cursor: "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseEnter={onMouseEnter}
        >
          {data.map((property) => (
            <div key={property._id} className="max-w-[280px] min-w-[280px] shrink-0">
              <PropertyCard
                property={property}
                href={`/listing/${property.slug.current}`}
                imageHeightClassName="h-48"
                className={!shouldAllowClick || isDragging ? "pointer-events-none" : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
