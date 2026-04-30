export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

// sqft input: returns m² for English, sqft for Spanish
export function formatArea(sqft: number, locale: string) {
  if (locale === "en") {
    const sqm = sqft * 0.092903;
    return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(sqm)} m²`;
  }
  return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(sqft)} sqft`;
}
