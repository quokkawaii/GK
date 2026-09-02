"use client";

import { useEffect, useRef, useState } from "react";

import { pageHeight, pageWidth } from "@/constants/pagingQueryConstance";
import { findByPlaceAndMaterial } from "@/func/cases/casesFunc";
import { getCasesEmptyMessage } from "@/func/cases/casesPageFunc-json";
import { usePagingQuery } from "@/hooks/usePagingQuery";
import type { CasesType } from "@/types/cases/casesType-json";
import type { CasesResultProps } from "@/types/cases/casesResultType";

import { CaseCard } from "./CaseCard";
import { CasesPagination } from "../05.casesPagination/CasesPagination";
import { CaseModal } from "../06.caseModal/CaseModal";

// 필터 조건에 맞는 시공 사례 결과를 표시한다.
export function CasesResult({ place, material }: CasesResultProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CasesType | null>(null);
  const resultSummaryRef = useRef<HTMLParagraphElement>(null);
  const resultCases = findByPlaceAndMaterial(place, material);
  const filterKey = `${place}-${material}`;
  const paging = usePagingQuery(resultCases.length, filterKey);
  const currentCases = resultCases.slice(paging.offset, paging.offset + pageWidth * pageHeight);

  const openCaseDetail = (caseItem: CasesType) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const closeCaseDetail = () => {
    setIsModalOpen(false);
  };

  const previousPageRef = useRef(paging.currentPage); // 홈 -> 시공 사례 이동시 "전체 n건"으로 이동 방지

  useEffect(() => {
    if (previousPageRef.current === paging.currentPage) {
      return;
    }

    previousPageRef.current = paging.currentPage;

    if (resultSummaryRef.current) {
      resultSummaryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [paging.currentPage]);

  return (
    <>
      <section className="mt-8" aria-label="시공 사례 결과">
        <p className="text-body m-0 scroll-mt-24 text-sm" ref={resultSummaryRef}>
          전체 <strong className="text-foreground">{resultCases.length}건</strong>
        </p>

        {resultCases.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4">
            {currentCases.map((caseItem) => (
              <CaseCard caseItem={caseItem} key={caseItem.id} onSelect={openCaseDetail} />
            ))}
          </div>
        )}

        {resultCases.length > 0 && <CasesPagination paging={paging} />}

        {resultCases.length === 0 && (
          <p className="border-border text-body mt-4 rounded-md border p-8 text-center">
            {getCasesEmptyMessage()}
          </p>
        )}
      </section>

      <CaseModal isOpen={isModalOpen} caseItem={selectedCase} onClose={closeCaseDetail} />
    </>
  );
}
