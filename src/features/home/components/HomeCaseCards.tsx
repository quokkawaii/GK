"use client";

import { useState } from "react";
import Image from "next/image";

import { CaseDetailModal } from "@/features/cases/components/CaseDetailModal";
import type { ConstructionCase } from "@/types";

// 홈 전용 사례 카드 목록에 표시할 최근 사례다.
type HomeCaseCardsProps = Readonly<{
  cases: readonly ConstructionCase[];
}>;

// 홈에서 사례 카드를 표시하고 선택한 사례의 상세 팝업을 연다.
export function HomeCaseCards({ cases }: HomeCaseCardsProps) {
  const [selectedCaseId, setSelectedCaseId] = useState<number | null>(null);
  const selectedCase = cases.find((caseItem) => caseItem.id === selectedCaseId);

  return (
    <>
      {/* 최근 사례를 클릭 가능한 카드로 표시하는 홈 전용 목록이다. */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
        {cases.map((caseItem) => {
          const thumbnail = caseItem.images[caseItem.thumbnailIndex];

          return (
            /* 선택한 사례의 상세 팝업을 여는 카드 버튼이다. */
            <button
              key={caseItem.id}
              type="button"
              className="toss-card group text-left"
              onClick={() => setSelectedCaseId(caseItem.id)}
              aria-label={`${caseItem.title} 상세 보기`}
            >
              {/* 대표 사진을 표시하는 카드 이미지 영역이다. */}
              <div className="toss-card-image relative overflow-hidden bg-[#dce7f2]">
                {thumbnail && (
                  /* 사례 데이터의 thumbnailIndex가 가리키는 사진이다. */
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 767px) 100vw, 33vw"
                  />
                )}
              </div>
              {/* 태그와 사례명을 표시하는 카드 정보 영역이다. */}
              <div className="p-4">
                <p className="text-accent text-xs font-semibold">{caseItem.tags.join(" · ")}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-[-0.04em]">{caseItem.title}</h3>
              </div>
            </button>
          );
        })}
      </div>

      {selectedCase && (
        /* 클릭한 최근 사례의 상세 정보를 표시하는 팝업이다. */
        <CaseDetailModal caseItem={selectedCase} onClose={() => setSelectedCaseId(null)} />
      )}
    </>
  );
}
