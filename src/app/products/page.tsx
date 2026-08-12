import type { Metadata } from "next";

import casesContent from "@/content/cases.json";
import { ProductsScreen } from "@/features/products/components/ProductsScreen";

export const metadata: Metadata = {
  title: "시공 시 사용 제품",
  description: "GK 산업의 시공 사례에 사용된 제품과 적용 현장을 확인해 보세요.",
};

// 정적 사례 데이터를 제품 목록 화면에 전달한다.
export default function ProductsPage() {
  // 제품 필터와 제품 카드 목록을 포함한 제품 기능 화면이다.
  return <ProductsScreen cases={casesContent.content} />;
}
