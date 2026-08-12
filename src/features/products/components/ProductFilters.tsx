"use client";

import { useProductList } from "@/features/products/state/useProductList";

type ProductFiltersProps = Readonly<{ productIds: readonly string[] }>;

// 제품 선택 화면에서 선택·해제·전체 동작을 제공한다.
export function ProductFilters({ productIds }: ProductFiltersProps) {
  const selected = useProductList((state) => state.selectedProductIds);
  const choose = useProductList((state) => state.chooseProduct);
  const clear = useProductList((state) => state.clearProducts);
  return (
    <section className="border-border border bg-[#f8f8f6] p-4" aria-label="자재 필터">
      <div className="border-border flex items-center gap-3 border-b pb-3">
        <h2 className="text-sm font-semibold">자재 필터</h2>
      </div>
      <div className="flex gap-2 overflow-x-auto pt-3 pb-2">
        <button
          type="button"
          className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${selected.length === 0 ? "border-accent bg-accent-soft text-accent" : "border-border bg-surface text-text"}`}
          aria-pressed={selected.length === 0}
          onClick={clear}
        >
          전체
        </button>
        {productIds.map((id) => (
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
