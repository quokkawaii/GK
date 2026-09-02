"use client";

import { useCasesFilter } from "@/hooks/cases/useCasesFilter";

import { CasesHero } from "./01.casesHero/CasesHero";
import { CasesFilter } from "./02.casesFilter/CasesFilter";
import { CasesResult } from "./03.casesResult/CasesResult";

// 시공 사례 화면을 표시한다.
export function Cases() {
  const placeFilter = useCasesFilter("place");
  const materialFilter = useCasesFilter("material");

  return (
    <div className="bg-canvas">
      <CasesHero />
      <div className="mx-auto w-[calc(100%_-_48px)] max-w-[1180px] py-8 max-md:w-[calc(100%_-_32px)] max-md:py-6">
        <CasesFilter placeFilter={placeFilter} materialFilter={materialFilter} />
        <CasesResult place={placeFilter.value} material={materialFilter.value} />
      </div>
    </div>
  );
}
