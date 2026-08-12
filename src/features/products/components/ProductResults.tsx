"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import { useProductList } from "@/features/products/state/useProductList";
import { getProductCase, getVisibleProductIds } from "@/lib/products";
import type { ConstructionCase } from "@/types";

// 제품 결과 카드에 필요한 사례 데이터와 표시할 제품명 목록이다.
type ProductResultsProps = Readonly<{
  cases: readonly ConstructionCase[];
  productIds: readonly string[];
}>;

// 선택된 제품 조건에 맞는 공용 제품 카드를 표시한다.
export function ProductResults({ cases, productIds }: ProductResultsProps) {
  const selected = useProductList((state) => state.selectedProductIds);
  const visible = getVisibleProductIds(cases, productIds, selected);
  return (
    <>
      {/* 선택한 조건에 맞는 제품 카드를 표시하는 결과 목록이다. */}
      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {visible.map((id) => (
          <ProductCard
            key={id}
            productId={id}
            location={getProductCase(cases, id)?.location ?? "확인 중"}
          />
        ))}
      </div>
      {/* 제품 카드가 연결하는 시공 사례 목록을 설명하는 안내 문구다. */}
      <p className="text-muted mt-5 bg-[#f3f1ef] p-4 text-sm">
        `시공 사례 보기`를 누르면 선택한 자재가 적용된 시공 사례 목록으로 이동합니다.
      </p>
    </>
  );
}
