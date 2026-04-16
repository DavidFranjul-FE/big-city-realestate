import { fetchProperties, fetchPropertyBySlug } from "../services/propertyService";
import { useAsync } from "./useAsync";

export function useProperties(options?: { featured?: boolean }) {
  const asyncState = useAsync(
    () => fetchProperties(options),
    [options?.featured],
    { immediate: true, initialData: [] },
  );

  return {
    ...asyncState,
    data: asyncState.data ?? [],
  };
}

export function useAllProperties() {
  return useProperties();
}

export function useFeaturedProperties() {
  return useProperties({ featured: true });
}

export function usePropertyBySlug(slug?: string) {
  return useAsync(
    () => (slug ? fetchPropertyBySlug(slug) : Promise.resolve(null)),
    [slug],
    { immediate: true, initialData: null },
  );
}
