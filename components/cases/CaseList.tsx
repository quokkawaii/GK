"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { CaseCard } from "@/components/cases/CaseCard";
import { CaseDetailModal } from "@/components/cases/CaseDetailModal";
import { Container } from "@/components/ui/Container";
import {
  getAvailableLocationTags,
  getAvailableProductTags,
  getCasePage,
  getVisiblePageNumbers,
} from "@/lib";
import { useCaseFilterStore } from "@/store/caseFilterStore";
import { useCasePaginationStore } from "@/store/casePaginationStore";
import { useContentStore } from "@/store/contentStore";

export function CaseList() {
  const cases = useContentStore((state) => state.cases);
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
      <main>
        <section className="border-border bg-surface border-b py-12 md:py-16">
          <Container>
            <p className="text-accent text-xs font-semibold tracking-[0.1em]">CASE STUDIES</p>
            <h1 className="mt-2 text-[28px] font-bold tracking-[-0.05em] md:text-[32px]">
              시공 사례
            </h1>
            <p className="text-muted mt-3 max-w-[620px] text-sm leading-6">
              GK 산업이 진행한 바닥 시공 사례를 현장과 공법 태그로 확인해 보세요.
            </p>
          </Container>
        </section>

        <section className="py-8 md:py-12">
          <Container>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-base font-semibold">태그 필터</h2>
              <button
                type="button"
                className="border-text min-h-11 border-b text-sm font-semibold"
                onClick={() => {
                  clearSelectedTags();
                  resetPageNumber();
                }}
              >
                필터 초기화
              </button>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex gap-3">
                <span className="text-muted w-16 shrink-0 pt-3 text-xs font-semibold">
                  시공 장소
                </span>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {availableLocationTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${
                        selectedTags.includes(tag)
                          ? "border-accent bg-accent-soft text-accent"
                          : "border-border bg-surface text-text"
                      }`}
                      aria-pressed={selectedTags.includes(tag)}
                      onClick={() => handleLocationTagChange(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-muted w-16 shrink-0 pt-3 text-xs font-semibold">
                  시공 자재
                </span>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {availableProductTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${
                        selectedTags.includes(tag)
                          ? "border-accent bg-accent-soft text-accent"
                          : "border-border bg-surface text-text"
                      }`}
                      aria-pressed={selectedTags.includes(tag)}
                      onClick={() => handleProductTagChange(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

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
              <nav
                className="mt-8 flex items-center justify-center gap-2"
                aria-label="시공 사례 페이지 이동"
              >
                {casePage.hasPrevious && (
                  <button
                    type="button"
                    className="border-border flex size-11 items-center justify-center border"
                    aria-label="이전 페이지"
                    onClick={() => handlePageChange(casePage.pageNumber - 1)}
                  >
                    ←
                  </button>
                )}
                {getVisiblePageNumbers(casePage.pageNumber, casePage.totalPages).map(
                  (visiblePageNumber) => (
                    <button
                      key={visiblePageNumber}
                      type="button"
                      className={`flex size-11 items-center justify-center border text-sm font-semibold ${
                        visiblePageNumber === casePage.pageNumber
                          ? "border-accent bg-accent text-white"
                          : "border-border bg-surface"
                      }`}
                      aria-label={`${visiblePageNumber + 1}페이지`}
                      aria-current={visiblePageNumber === casePage.pageNumber ? "page" : undefined}
                      onClick={() => handlePageChange(visiblePageNumber)}
                    >
                      {visiblePageNumber + 1}
                    </button>
                  ),
                )}
                {casePage.hasNext && (
                  <button
                    type="button"
                    className="border-border flex size-11 items-center justify-center border"
                    aria-label="다음 페이지"
                    onClick={() => handlePageChange(casePage.pageNumber + 1)}
                  >
                    →
                  </button>
                )}
              </nav>
            )}
          </Container>
        </section>
      </main>

      {selectedCase && (
        <CaseDetailModal caseItem={selectedCase} onClose={() => setSelectedCaseId(null)} />
      )}
    </>
  );
}
