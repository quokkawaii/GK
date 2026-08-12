import type { ConstructionCase } from "@/types";

// 모든 사례에 기록된 제품명을 중복 없이 추출한다.
export function getProductIds(cases: readonly ConstructionCase[]) {
  return Array.from(new Set(cases.flatMap((caseItem) => caseItem.productIds)));
}

// 제품 카드에 표시할 대표 사례 한 건을 찾는다.
export function getProductCase(cases: readonly ConstructionCase[], productId: string) {
  return cases.find((caseItem) => caseItem.productIds.includes(productId));
}

// 선택한 제품을 모두 사용한 사례에서 계속 표시할 제품명만 고른다.
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
