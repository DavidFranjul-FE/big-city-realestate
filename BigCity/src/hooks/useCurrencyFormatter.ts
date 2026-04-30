import { useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";

let cachedRate: number | null = null;
let pending: Promise<void> | null = null;

function ensureDOPRate(): Promise<void> {
  if (cachedRate !== null) return Promise.resolve();
  if (pending) return pending;
  pending = fetch("https://open.er-api.com/v6/latest/USD")
    .then((r) => r.json())
    .then((data: { rates: Record<string, number> }) => {
      cachedRate = data.rates.DOP;
    })
    .catch(() => {
      pending = null;
    });
  return pending;
}

export function useCurrencyFormatter() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === "es";
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    if (!isSpanish || cachedRate !== null) return;
    ensureDOPRate().then(() => forceUpdate());
  }, [isSpanish]);

  return (value: number): string => {
    if (isSpanish && cachedRate !== null) {
      return new Intl.NumberFormat("es-DO", {
        style: "currency",
        currency: "DOP",
        maximumFractionDigits: 0,
      }).format(value * cachedRate);
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "code",
      maximumFractionDigits: 0,
    }).format(value);
  };
}
