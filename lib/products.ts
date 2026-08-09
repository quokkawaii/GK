import type { ConstructionCase } from "@/types";

export function getProductIds(cases: readonly ConstructionCase[]) {
  return Array.from(new Set(cases.flatMap((caseItem) => caseItem.productIds)));
}

export function getProductCase(cases: readonly ConstructionCase[], productId: string) {
  return cases.find((caseItem) => caseItem.productIds.includes(productId));
}
