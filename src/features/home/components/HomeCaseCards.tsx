"use client";

import { useState } from "react";
import Image from "next/image";

import { CaseDetailModal } from "@/features/cases/components/CaseDetailModal";
import type { ConstructionCase } from "@/types";

type HomeCaseCardsProps = Readonly<{
  cases: readonly ConstructionCase[];
}>;

export function HomeCaseCards({ cases }: HomeCaseCardsProps) {
  const [selectedCaseId, setSelectedCaseId] = useState<number | null>(null);
  const selectedCase = cases.find((caseItem) => caseItem.id === selectedCaseId);

  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
        {cases.map((caseItem) => {
          const thumbnail = caseItem.images[caseItem.thumbnailIndex];

          return (
            <button
              key={caseItem.id}
              type="button"
              className="group border-border bg-surface border text-left"
              onClick={() => setSelectedCaseId(caseItem.id)}
              aria-label={`${caseItem.title} 상세 보기`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#85817a]">
                {thumbnail && (
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 767px) 100vw, 33vw"
                  />
                )}
              </div>
              <div className="p-4">
                <p className="text-accent text-xs font-semibold">{caseItem.tags.join(" · ")}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-[-0.04em]">{caseItem.title}</h3>
              </div>
            </button>
          );
        })}
      </div>

      {selectedCase && (
        <CaseDetailModal caseItem={selectedCase} onClose={() => setSelectedCaseId(null)} />
      )}
    </>
  );
}
