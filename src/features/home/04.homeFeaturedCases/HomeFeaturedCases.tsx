"use client";

import { useState } from "react";

import { getHomeContent } from "@/func/home/homeFunc-json";
import { getCasesByQuery } from "@/func/cases/casesFunc";
import type { CasesType } from "@/types/cases/casesType-json";

import { CaseModal } from "@/features/cases/06.caseModal/CaseModal";

import { CaseCard } from "./CaseCard";

// 홈 대표 시공 사례 영역을 표시한다.
export function HomeFeaturedCases() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CasesType | null>(null);
  const { title, description, casesQuery } = getHomeContent().featuredCases;

  const featuredCases = getCasesByQuery(casesQuery.sortBy, casesQuery.direction, casesQuery.limit);

  const openCaseDetail = (caseItem: CasesType) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const closeCaseDetail = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        className="bg-canvas px-6 py-[88px] max-md:px-4 max-md:py-14"
        id="cases"
        aria-labelledby="cases-title"
      >
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-9 max-w-[650px]">
            <h2
              id="cases-title"
              className="m-0 text-[36px] leading-[1.25] tracking-[-0.06em] max-md:text-[29px]"
            >
              {title}
            </h2>

            <p className="text-body mt-3 mb-0 break-keep">{description}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
            {featuredCases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} onSelect={openCaseDetail} />
            ))}
          </div>
        </div>
      </section>

      <CaseModal isOpen={isModalOpen} caseItem={selectedCase} onClose={closeCaseDetail} />
    </>
  );
}
