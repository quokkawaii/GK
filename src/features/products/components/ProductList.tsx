"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Container } from "@/components/ui/Container";
import casesContent from "@/content/cases.json";
import { getProductCase, getProductIds, getVisibleProductIds } from "@/lib/products";

export function ProductList() {
  const cases = casesContent.content;
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const productIds = useMemo(() => getProductIds(cases), [cases]);
  const visibleProductIds = useMemo(
    () => getVisibleProductIds(cases, productIds, selectedProductIds),
    [cases, productIds, selectedProductIds],
  );

  const toggleProduct = (productId: string) => {
    setSelectedProductIds((currentProductIds) =>
      currentProductIds.includes(productId)
        ? currentProductIds.filter((currentProductId) => currentProductId !== productId)
        : [...currentProductIds, productId],
    );
  };

  return (
    <div>
      <section className="!text-white">
        <Container className="bg-dark flex min-h-[240px] flex-col justify-center px-6 py-12 md:px-10 md:py-16">
          <p className="text-accent text-xs font-semibold tracking-[0.1em]">PRODUCTS USED</p>
          <h1 className="mt-3 text-[30px] font-bold tracking-[-0.06em] md:text-[40px]">
            시공 시 사용 제품
          </h1>
          <p className="mt-3 max-w-[620px] text-sm leading-6 text-[#dddddd]">
            시공 사례에 기록된 자재명과 해당 자재가 사용된 현장 정보를 확인해 보세요.
          </p>
        </Container>
      </section>

      <section className="py-8 md:py-12">
        <Container>
          <section className="border-border border bg-[#f8f8f6] p-4" aria-label="자재 필터">
            <div className="border-border flex items-center gap-3 border-b pb-3">
              <h2 className="text-sm font-semibold">자재 필터</h2>
            </div>
            <div className="flex gap-2 overflow-x-auto pt-3 pb-2">
              <button
                type="button"
                className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${
                  selectedProductIds.length === 0
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border bg-surface text-text"
                }`}
                aria-pressed={selectedProductIds.length === 0}
                onClick={() => setSelectedProductIds([])}
              >
                전체
              </button>
              {productIds.map((productId) => (
                <button
                  key={productId}
                  type="button"
                  className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${
                    selectedProductIds.includes(productId)
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border bg-surface text-text"
                  }`}
                  aria-pressed={selectedProductIds.includes(productId)}
                  onClick={() => toggleProduct(productId)}
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
    </div>
  );
}
