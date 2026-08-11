import casesContent from "@/content/cases.json";
import { getProductCase, getProductIds } from "@/lib/products";

export const recentCases = [...casesContent.content]
  .sort((firstCase, secondCase) => secondCase.id - firstCase.id)
  .slice(0, 3);

export const homeProducts = Array.from(getProductIds(casesContent.content)).sort().slice(0, 3);

export function getHomeProductCase(productId: string) {
  return getProductCase(casesContent.content, productId);
}
