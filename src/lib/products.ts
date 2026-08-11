import type { ConstructionCase } from "@/types";

export function getProductIds(cases: readonly ConstructionCase[]) {
  return Array.from(new Set(cases.flatMap((caseItem) => caseItem.productIds)));
}

export function getProductCase(cases: readonly ConstructionCase[], productId: string) {
  return cases.find((caseItem) => caseItem.productIds.includes(productId));
}

export function getVisibleProductIds(
  cases: readonly ConstructionCase[],
  productIds: readonly string[],
  selectedProductIds: readonly string[],
) {
  if (selectedProductIds.length === 0) {
    return productIds;
  }

  const matchingCases = cases.filter((caseItem) =>
    selectedProductIds.every((productId) => caseItem.productIds.includes(productId)),
  );

  return productIds.filter((productId) =>
    matchingCases.some((caseItem) => caseItem.productIds.includes(productId)),
  );
}
