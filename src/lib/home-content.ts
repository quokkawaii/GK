import casesContent from "@/content/cases.json";
import { getProductCase, getProductIds } from "@/lib/products";

// 홈 최근 사례 영역에 표시할 최신 사례 세 건이다.
export const recentCases = [...casesContent.content]
  .sort((firstCase, secondCase) => secondCase.id - firstCase.id)
  .slice(0, 3);

// 홈 제품 영역에 표시할 제품 세 가지다.
export const homeProducts = Array.from(getProductIds(casesContent.content)).sort().slice(0, 3);

// 홈 제품 카드에 함께 표시할 대표 사례를 찾는다.
export function getHomeProductCase(productId: string) {
  return getProductCase(casesContent.content, productId);
}
