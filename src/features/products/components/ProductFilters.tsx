"use client";

import { useProductList } from "@/features/products/state/useProductList";

// 제품 필터에 표시할 전체 제품명 목록이다.
type ProductFiltersProps = Readonly<{ productIds: readonly string[] }>;

// 제품 선택 화면에서 선택·해제·전체 동작을 제공한다.
export function ProductFilters({ productIds }: ProductFiltersProps) {
  const selected = useProductList((state) => state.selectedProductIds);
  const choose = useProductList((state) => state.chooseProduct);
  const clear = useProductList((state) => state.clearProducts);
  return (
    /* 제품 선택 버튼을 담는 필터 섹션이다. */
    <section className="border-border border bg-[#f8f8f6] p-4" aria-label="자재 필터">
      {/* 필터 목적을 알려 주는 제목 영역이다. */}
      <div className="border-border flex items-center gap-3 border-b pb-3">
        <h2 className="text-sm font-semibold">자재 필터</h2>
      </div>
      {/* 전체와 개별 제품을 고를 수 있도록 가로 스크롤하는 버튼 목록이다. */}
      <div className="flex gap-2 overflow-x-auto pt-3 pb-2">
        {/* 모든 제품 선택을 해제하고 전체 결과를 표시하는 버튼이다. */}
        <button
          type="button"
          className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${selected.length === 0 ? "border-accent bg-accent-soft text-accent" : "border-border bg-surface text-text"}`}
          aria-pressed={selected.length === 0}
          onClick={clear}
        >
          전체
        </button>
        {productIds.map((id) => (
          /* 해당 제품을 선택하거나 해제하는 필터 버튼이다. */
          <button
            key={id}
            type="button"
            className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${selected.includes(id) ? "border-accent bg-accent-soft text-accent" : "border-border bg-surface text-text"}`}
            aria-pressed={selected.includes(id)}
            onClick={() => choose(id)}
          >
            {id}
          </button>
        ))}
      </div>
    </section>
  );
}
