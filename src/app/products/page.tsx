import type { Metadata } from "next";

import { ProductList } from "@/features/products/components/ProductList";

export const metadata: Metadata = {
  title: "시공 시 사용 제품",
  description: "GK 산업의 시공 사례에 사용된 제품과 적용 현장을 확인해 보세요.",
};

export default function ProductsPage() {
  return <ProductList />;
}
