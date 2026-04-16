import { useCallback, useEffect, useRef, useState } from "react";

type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

/**
 * Generic async hook with:
 * - loading/error handling
 * - cancellation protection on unmount
 * - refetch support
 */
export function useAsync<T>(
  fn: () => Promise<T>,
  deps: React.DependencyList = [],
  options?: { immediate?: boolean; initialData?: T | null },
): AsyncState<T> {
  const { immediate = true, initialData = null } = options ?? {};
  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState<boolean>(immediate);
  const [error, setError] = useState<string | null>(null);

  const cancelledRef = useRef(false);

  const run = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fn();
      if (!cancelledRef.current) setData(result);
    } catch (e: unknown) {
      const message =
        e instanceof Error
          ? e.message
          : typeof e === "string"
            ? e
            : "Unknown error";
      if (!cancelledRef.current) setError(message);
    } finally {
      if (!cancelledRef.current) setLoading(false);
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    cancelledRef.current = false;
    if (immediate) run();

    return () => {
      cancelledRef.current = true;
    };
  }, [run, immediate]);

  return { data, loading, error, refetch: run };
}
