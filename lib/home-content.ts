import casesContent from "@/content/cases.json";

export const recentCases = [...casesContent.content]
  .sort((firstCase, secondCase) => secondCase.id - firstCase.id)
  .slice(0, 3);

export const homeProducts = Array.from(
  new Set(casesContent.content.flatMap((caseItem) => caseItem.productIds)),
).slice(0, 3);

export function getProductCase(productId: string) {
  return casesContent.content.find((caseItem) => caseItem.productIds.includes(productId));
}
