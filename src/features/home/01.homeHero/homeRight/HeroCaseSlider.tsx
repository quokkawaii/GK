"use client";

import { useEffect, useState } from "react";

import { findById } from "@/func/cases/casesFunc";
import { useHeroCaseSlider } from "@/hooks/useHeroCaseSlider";
import type { CasesType } from "@/types/cases/casesType-json";

// 시공 사례 이미지를 자동 슬라이드와 캡션으로 표시한다.
export default function HeroCaseSlider() {
  const currentId = useHeroCaseSlider();
  const [caseItem, setCaseItem] = useState<CasesType | null>(() => findById(1) ?? null);

  useEffect(() => {
    setCaseItem(findById(currentId) ?? null);
  }, [currentId]);

  if (!caseItem) {
    return null;
  }

  const thumbnail = caseItem.images[caseItem.thumbnailIndex] ?? null;

  if (!thumbnail) {
    return null;
  }

  return (
    <figure className="bg-foreground relative min-h-[400px] overflow-hidden rounded-2xl max-md:min-h-[260px]">
      <img
        className="block h-[400px] w-full object-cover max-md:h-[260px]"
        src={thumbnail.src}
        alt={thumbnail.alt}
      />
      <figcaption className="bg-foreground text-on-primary absolute right-5 bottom-5 m-0 px-3 py-2 text-[13px]">
        {caseItem.title}
      </figcaption>
    </figure>
  );
}
