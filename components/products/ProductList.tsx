"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Container } from "@/components/ui/Container";
import { getProductCase, getProductIds } from "@/lib/products";
import { useContentStore } from "@/store/contentStore";

export function ProductList() {
  const cases = useContentStore((state) => state.cases);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const productIds = useMemo(() => getProductIds(cases), [cases]);
  const visibleProductIds = selectedProduct ? [selectedProduct] : productIds;

  return (
    <main>
      <section className="border-border bg-surface border-b py-12 md:py-16">
        <Container>
          <p className="text-accent text-xs font-semibold tracking-[0.1em]">PRODUCTS USED</p>
          <h1 className="mt-2 text-[28px] font-bold tracking-[-0.05em] md:text-[32px]">
            시공 시 사용 제품
          </h1>
          <p className="text-muted mt-3 max-w-[620px] text-sm leading-6">
            시공 사례에 기록된 자재명과 해당 자재가 사용된 현장 정보를 확인해 보세요.
          </p>
        </Container>
      </section>

      <section className="py-8 md:py-12">
        <Container>
          <section className="border-border border bg-[#f8f8f6] p-4" aria-label="자재 필터">
            <div className="border-border flex items-center gap-3 border-b pb-3">
              <h2 className="text-sm font-semibold">자재 필터</h2>
              {selectedProduct && (
                <button
                  type="button"
                  className="border-text min-h-11 border-b text-xs font-semibold"
                  onClick={() => setSelectedProduct(null)}
                >
                  필터 초기화
                </button>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto pt-3 pb-2">
              <button
                type="button"
                className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${
                  selectedProduct === null
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border bg-surface text-text"
                }`}
                aria-pressed={selectedProduct === null}
                onClick={() => setSelectedProduct(null)}
              >
                전체
              </button>
              {productIds.map((productId) => (
                <button
                  key={productId}
                  type="button"
                  className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${
                    selectedProduct === productId
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border bg-surface text-text"
                  }`}
                  aria-pressed={selectedProduct === productId}
                  onClick={() => setSelectedProduct(productId)}
                >
                  {productId}
                </button>
              ))}
            </div>
          </section>

          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {visibleProductIds.map((productId) => {
              const productCase = getProductCase(cases, productId);

              return (
                <article key={productId} className="border-border border bg-white text-[#242424]">
                  <div className="flex aspect-[4/3] items-center justify-center bg-[#e8e5df] text-center text-sm text-[#5f5d59]">
                    죄송합니다.
                    <br />
                    이미지는 준비 중입니다.
                  </div>
                  <div className="p-4">
                    <p className="text-accent text-xs font-semibold">시공 자재</p>
                    <h2 className="mt-1 text-lg font-semibold tracking-[-0.04em]">{productId}</h2>
                    <p className="mt-2 text-sm text-[#606060]">
                      적합 현장: {productCase?.location ?? "확인 중"}
                    </p>
                    <Link
                      href={`/cases?tag=${encodeURIComponent(productId)}`}
                      className="bg-dark mt-4 flex min-h-11 items-center justify-center px-4 text-sm font-semibold !text-white"
                    >
                      시공 사례 보기
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="text-muted mt-5 bg-[#f3f1ef] p-4 text-sm">
            `시공 사례 보기`를 누르면 선택한 자재가 적용된 시공 사례 목록으로 이동합니다.
          </p>
        </Container>
      </section>
    </main>
  );
}
