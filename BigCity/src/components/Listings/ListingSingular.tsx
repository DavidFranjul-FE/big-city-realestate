import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatArea, formatNumber } from "../../utils/formatters";
import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";
import { getPropertyGalleryImages } from "../../utils/property";
import { EmptyState, ErrorState, LoadingState } from "../shared/PageState";
import { PropertySpecs } from "../shared/PropertySpecs";
import { SurfaceCard } from "../shared/SurfaceCard";
import { usePropertyBySlug } from "../../hooks/useProperties";

export const ListingSingular = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const formatPrice = useCurrencyFormatter();
  const { data, loading, error } = usePropertyBySlug(slug);
  if (loading) {
    return <LoadingState message={t("listing.loading")} />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!data) {
    return (
      <EmptyState message={t("listing.notFound")}>
        <Link
          to="/listings"
          className="mt-2 inline-block text-blue-600 hover:underline"
        >
          {t("listing.backToListings")}
        </Link>
      </EmptyState>
    );
  }

  const imageUrls = getPropertyGalleryImages(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-10">
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
            <span className={`rounded-full px-3 py-1 text-sm font-semibold text-white ${data.isForRent ? "bg-blue-600" : "bg-green-600"}`}>
              {data.isForRent ? t("listing.forRent") : t("listing.forSale")}
            </span>
          </div>
          <p className="text-gray-500">
            {data.location} |{" "}
            <span className="font-semibold text-gray-900">
              {formatPrice(Math.floor(data.price))}
            </span>
          </p>

          <PropertySpecs property={data} className="mt-2" separator="|" />
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl bg-gray-100">
          {imageUrls.length > 0 ? (
            <>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="overflow-hidden rounded-2xl bg-gray-100 md:col-span-2">
                  <img
                    src={imageUrls[0]}
                    alt={data.title}
                    className="h-[420px] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="grid gap-3">
                  {imageUrls.slice(1, 3).map((src, index) => (
                    <div
                      key={`${src}-${index}`}
                      className="overflow-hidden rounded-2xl bg-gray-100"
                    >
                      <img
                        src={src}
                        alt={`${data.title} ${index + 2}`}
                        className="h-[204px] w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}

                  {imageUrls.length < 2 ? (
                    <div className="h-[204px] rounded-2xl bg-gray-100" />
                  ) : null}
                  {imageUrls.length < 3 ? (
                    <div className="h-[204px] rounded-2xl bg-gray-100" />
                  ) : null}
                </div>
              </div>

              {imageUrls.length > 3 ? (
                <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {imageUrls.slice(3).map((src, index) => (
                    <div
                      key={`${src}-${index + 3}`}
                      className="overflow-hidden rounded-2xl bg-gray-100"
                    >
                      <img
                        src={src}
                        alt={`${data.title} ${index + 4}`}
                        className="h-44 w-full object-cover transition hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </>
          ) : (
            <div className="flex h-[420px] items-center justify-center text-gray-400">
              {t("listing.noImage")}
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <SurfaceCard className="border-gray-200 p-5 md:col-span-2">
            <h3 className="font-semibold text-gray-900">
              {t("listing.overview")}
            </h3>
            <p className="mt-2 wrap-break-word text-gray-600">
              {data.description || ""}
            </p>
          </SurfaceCard>

          <SurfaceCard className="border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900">
              {t("listing.quickFacts")}
            </h3>
            <div className="mt-3 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>{t("listing.bedrooms")}</span>
                <span className="font-semibold">{data.bedrooms}</span>
              </div>
              <div className="flex justify-between">
                <span>{t("listing.bathrooms")}</span>
                <span className="font-semibold">{data.bathrooms}</span>
              </div>
              <div className="flex justify-between">
                <span>{t("listing.size")}</span>
                <span className="font-semibold">
                  {formatArea(
                    Number(formatNumber(data.sqft)),
                    i18n.language,
                  )}{" "}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{t("listing.price")}</span>
                <span className="font-semibold">{formatPrice(data.price)}</span>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </div>
  );
};
