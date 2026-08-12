"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CaseCard } from "@/features/cases/components/CaseCard";
import { CaseDetailModal } from "@/features/cases/components/CaseDetailModal";
import { CaseFilters } from "@/features/cases/components/CaseFilters";
import { CasePagination } from "@/features/cases/components/CasePagination";
import { useCaseList } from "@/features/cases/state/useCaseList";
import { getAvailableLocationTags, getAvailableProductTags, getCasePage } from "@/lib";
import type { ConstructionCase } from "@/types";

type CasesScreenProps = Readonly<{ cases: readonly ConstructionCase[] }>;

// 사례 페이지의 필터·결과·페이지·상세 화면을 조립하고 주소 입력을 연결한다.
export function CasesScreen({ cases }: CasesScreenProps) {
  const selectedTags = useCaseList((state) => state.selectedTags);
  const currentPage = useCaseList((state) => state.currentPage);
  const chooseLocation = useCaseList((state) => state.chooseLocationTag);
  const chooseProduct = useCaseList((state) => state.chooseProductTag);
  const clearFilters = useCaseList((state) => state.clearFilters);
  const goToPage = useCaseList((state) => state.goToPage);
  const locations = useMemo(() => getAvailableLocationTags(cases), [cases]);
  const products = useMemo(() => getAvailableProductTags(cases), [cases]);
  const page = useMemo(
    () => getCasePage(cases, selectedTags, currentPage),
    [cases, selectedTags, currentPage],
  );
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tag = new URLSearchParams(window.location.search).get("tag");
    const hash = Number(window.location.hash.replace("#case-", ""));
    const frame = window.requestAnimationFrame(() => {
      if (tag && products.includes(tag)) chooseProduct(tag, products);
      if (hash > 0 && cases.some((item) => item.id === hash)) setSelectedId(hash);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [cases, chooseProduct, products]);
  const changePage = (next: number) => {
    goToPage(next);
    window.requestAnimationFrame(() =>
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };
  return (
    <>
      <PageHero
        eyebrow="CASE STUDIES"
        title="시공 사례"
        description="GK 산업이 진행한 바닥 시공 사례를 현장과 공법 태그로 확인해 보세요."
      />
      <section className="py-8 md:py-12">
        <Container>
          <CaseFilters
            selectedTags={selectedTags}
            locationTags={locations}
            productTags={products}
            onLocationTagChange={(tag) => chooseLocation(tag, locations)}
            onProductTagChange={(tag) => chooseProduct(tag, products)}
            onReset={clearFilters}
          />
          <div className="text-muted mt-8 flex items-center justify-between text-sm">
            <p>전체 {page.totalElements}건</p>
            <p>
              {page.totalPages > 0 ? `${page.pageNumber} / ${page.totalPages} 페이지` : "결과 없음"}
            </p>
          </div>
          <div
            ref={listRef}
            className="mt-4 min-h-[220px] scroll-mt-24 md:min-h-[360px] lg:min-h-[540px]"
          >
            {page.empty ? (
              <div className="border-border bg-surface text-muted flex min-h-[220px] items-center justify-center border px-5 text-center text-sm md:min-h-[360px] lg:min-h-[540px]">
                선택한 태그에 해당하는 시공 사례가 없습니다.
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {page.content.map((item) => (
                  <CaseCard key={item.id} caseItem={item} onOpen={() => setSelectedId(item.id)} />
                ))}
              </div>
            )}
          </div>
          {page.totalPages > 1 && (
            <CasePagination
              pageNumber={page.pageNumber}
              totalPages={page.totalPages}
              hasPrevious={page.hasPrevious}
              hasNext={page.hasNext}
              onPageChange={changePage}
            />
          )}
        </Container>
      </section>
      {selectedId !== null && cases.find((item) => item.id === selectedId) && (
        <CaseDetailModal
          caseItem={cases.find((item) => item.id === selectedId)!}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
