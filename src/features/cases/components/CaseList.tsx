"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import casesContent from "@/content/cases.json";
import { CaseCard } from "@/features/cases/components/CaseCard";
import { CaseDetailModal } from "@/features/cases/components/CaseDetailModal";
import { CaseFilters } from "@/features/cases/components/CaseFilters";
import { CasePagination } from "@/features/cases/components/CasePagination";
import { useCaseFilterStore } from "@/features/cases/store/caseFilterStore";
import { useCasePaginationStore } from "@/features/cases/store/casePaginationStore";
import { getAvailableLocationTags, getAvailableProductTags, getCasePage } from "@/lib";

export function CaseList() {
  const cases = casesContent.content;
  const selectedTags = useCaseFilterStore((state) => state.selectedTags);
  const replaceSelectedTags = useCaseFilterStore((state) => state.replaceSelectedTags);
  const clearSelectedTags = useCaseFilterStore((state) => state.clearSelectedTags);
  const pageNumber = useCasePaginationStore((state) => state.pageNumber);
  const setPageNumber = useCasePaginationStore((state) => state.setPageNumber);
  const resetPageNumber = useCasePaginationStore((state) => state.resetPageNumber);
  const [selectedCaseId, setSelectedCaseId] = useState<number | null>(null);
  const caseListRef = useRef<HTMLDivElement>(null);

  const availableLocationTags = useMemo(() => getAvailableLocationTags(cases), [cases]);
  const availableProductTags = useMemo(() => getAvailableProductTags(cases), [cases]);
  const casePage = useMemo(
    () => getCasePage(cases, selectedTags, pageNumber),
    [cases, pageNumber, selectedTags],
  );
  const selectedCase = cases.find((caseItem) => caseItem.id === selectedCaseId);

  useEffect(() => {
    const productTag = new URLSearchParams(window.location.search).get("tag");

    if (productTag && availableProductTags.includes(productTag)) {
      const frameId = window.requestAnimationFrame(() => {
        replaceSelectedTags([productTag]);
        resetPageNumber();
      });

      return () => window.cancelAnimationFrame(frameId);
    }
  }, [availableProductTags, replaceSelectedTags, resetPageNumber]);

  useEffect(() => {
    const caseIdFromHash = Number(window.location.hash.replace("#case-", ""));

    if (caseIdFromHash <= 0 || !cases.some((caseItem) => caseItem.id === caseIdFromHash)) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => setSelectedCaseId(caseIdFromHash));

    return () => window.cancelAnimationFrame(frameId);
  }, [cases]);

  const handleLocationTagChange = (tag: string) => {
    replaceSelectedTags([
      ...selectedTags.filter((selectedTag) => !availableLocationTags.includes(selectedTag)),
      tag,
    ]);
    resetPageNumber();
  };

  const handleProductTagChange = (tag: string) => {
    replaceSelectedTags([
      ...selectedTags.filter((selectedTag) => !availableProductTags.includes(selectedTag)),
      tag,
    ]);
    resetPageNumber();
  };

  const handlePageChange = (nextPageNumber: number) => {
    setPageNumber(nextPageNumber);
    window.requestAnimationFrame(() => {
      caseListRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <div>
        <section className="!text-white">
          <Container className="bg-dark flex min-h-[240px] flex-col justify-center px-6 py-12 md:px-10 md:py-16">
            <p className="text-accent text-xs font-semibold tracking-[0.1em]">CASE STUDIES</p>
            <h1 className="mt-3 text-[30px] font-bold tracking-[-0.06em] md:text-[40px]">
              시공 사례
            </h1>
            <p className="mt-3 max-w-[620px] text-sm leading-6 text-[#dddddd]">
              GK 산업이 진행한 바닥 시공 사례를 현장과 공법 태그로 확인해 보세요.
            </p>
          </Container>
        </section>

        <section className="py-8 md:py-12">
          <Container>
            <CaseFilters
              selectedTags={selectedTags}
              locationTags={availableLocationTags}
              productTags={availableProductTags}
              onLocationTagChange={handleLocationTagChange}
              onProductTagChange={handleProductTagChange}
              onReset={() => {
                clearSelectedTags();
                resetPageNumber();
              }}
            />

            <div className="text-muted mt-8 flex items-center justify-between text-sm">
              <p>전체 {casePage.totalElements}건</p>
              <p>
                {casePage.totalPages > 0
                  ? `${casePage.pageNumber + 1} / ${casePage.totalPages} 페이지`
                  : "결과 없음"}
              </p>
            </div>

            <div
              ref={caseListRef}
              className="mt-4 min-h-[220px] scroll-mt-24 md:min-h-[360px] lg:min-h-[540px]"
            >
              {casePage.empty ? (
                <div className="border-border bg-surface text-muted flex min-h-[220px] items-center justify-center border px-5 text-center text-sm md:min-h-[360px] lg:min-h-[540px]">
                  선택한 태그에 해당하는 시공 사례가 없습니다.
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {casePage.content.map((caseItem) => (
                    <CaseCard
                      key={caseItem.id}
                      caseItem={caseItem}
                      onOpen={() => setSelectedCaseId(caseItem.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {casePage.totalPages > 1 && (
              <CasePagination
                pageNumber={casePage.pageNumber}
                totalPages={casePage.totalPages}
                hasPrevious={casePage.hasPrevious}
                hasNext={casePage.hasNext}
                onPageChange={handlePageChange}
              />
            )}
          </Container>
        </section>
      </div>

      {selectedCase && (
        <CaseDetailModal caseItem={selectedCase} onClose={() => setSelectedCaseId(null)} />
      )}
    </>
  );
}
