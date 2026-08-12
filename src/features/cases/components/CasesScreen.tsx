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

// 사례 페이지 전체에 전달되는 정적 사례 데이터다.
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
      {/* 사례 목록의 목적을 안내하는 페이지 첫 영역이다. */}
      <PageHero
        eyebrow="CASE STUDIES"
        title="시공 사례"
        description="GK 산업이 진행한 바닥 시공 사례를 현장과 공법 태그로 확인해 보세요."
      />
      {/* 필터, 결과 목록, 페이지 이동을 담는 사례 목록 본문이다. */}
      <section className="py-8 md:py-12">
        <Container>
          {/* 장소와 제품 조건을 고르는 필터 화면이다. */}
          <CaseFilters
            selectedTags={selectedTags}
            locationTags={locations}
            productTags={products}
            onLocationTagChange={(tag) => chooseLocation(tag, locations)}
            onProductTagChange={(tag) => chooseProduct(tag, products)}
            onReset={clearFilters}
          />
          {/* 필터 적용 뒤 전체 건수와 현재 페이지를 안내하는 요약 영역이다. */}
          <div className="text-muted mt-8 flex items-center justify-between text-sm">
            <p>전체 {page.totalElements}건</p>
            <p>
              {page.totalPages > 0 ? `${page.pageNumber} / ${page.totalPages} 페이지` : "결과 없음"}
            </p>
          </div>
          {/* 페이지 변경 뒤 다시 이동할 수 있는 사례 카드 목록 영역이다. */}
          <div
            ref={listRef}
            className="mt-4 min-h-[220px] scroll-mt-24 md:min-h-[360px] lg:min-h-[540px]"
          >
            {page.empty ? (
              /* 선택한 조건에 맞는 사례가 없을 때 목록 대신 표시하는 안내 영역이다. */
              <div className="border-border bg-surface text-muted flex min-h-[220px] items-center justify-center border px-5 text-center text-sm md:min-h-[360px] lg:min-h-[540px]">
                선택한 태그에 해당하는 시공 사례가 없습니다.
              </div>
            ) : (
              /* 현재 페이지의 사례를 두 열 카드 목록으로 표시하는 영역이다. */
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {page.content.map((item) => (
                  <CaseCard key={item.id} caseItem={item} onOpen={() => setSelectedId(item.id)} />
                ))}
              </div>
            )}
          </div>
          {page.totalPages > 1 && (
            /* 두 페이지 이상일 때만 목록 위치로 이동하는 페이지네이션을 표시한다. */
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
        /* 사용자가 선택한 사례의 사진과 정보를 팝업으로 표시한다. */
        <CaseDetailModal
          caseItem={cases.find((item) => item.id === selectedId)!}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
