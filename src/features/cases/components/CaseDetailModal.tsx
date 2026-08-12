"use client";

import { useRef } from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useDialogFocus } from "@/hooks/useDialogFocus";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { CaseInformation } from "@/features/cases/components/CaseInformation";
import type { ConstructionCase } from "@/types";

// 상세 팝업에 표시할 사례와 팝업 닫기 함수다.
type CaseDetailModalProps = Readonly<{ caseItem: ConstructionCase; onClose: () => void }>;

// 사례 상세 팝업의 자식 화면을 배치하고 공용 팝업 기능을 연결한다.
export function CaseDetailModal({ caseItem, onClose }: CaseDetailModalProps) {
  const dialogRef = useRef<HTMLElement>(null);
  useBodyScrollLock(true);
  useDialogFocus(dialogRef, onClose);
  return (
    /* 상세 팝업과 배경을 화면 전체에 겹쳐 표시하는 영역이다. */
    <div className="fixed inset-0 z-40 flex items-end justify-center md:inset-0 md:items-center md:p-[72px]">
      {/* 배경을 누르면 사례 상세 팝업을 닫는 버튼이다. */}
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="상세 팝업 닫기"
        onClick={onClose}
      />
      {/* 선택한 사례의 사진과 정보를 담는 접근 가능한 상세 팝업이다. */}
      <section
        ref={dialogRef}
        className="bg-surface relative z-10 flex max-h-[92vh] w-full flex-col overflow-y-auto md:h-full md:max-w-[1180px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`case-title-${caseItem.id}`}
      >
        {/* 제목과 닫기 버튼이 스크롤 중에도 보이도록 고정한 팝업 머리글이다. */}
        <header className="border-border bg-surface sticky top-0 z-10 flex items-center justify-between border-b px-5 py-4 md:px-8">
          <h2 id={`case-title-${caseItem.id}`} className="text-lg font-semibold tracking-[-0.04em]">
            {caseItem.title}
          </h2>
          {/* 마우스·키보드로 팝업을 닫는 명시적인 닫기 버튼이다. */}
          <button
            type="button"
            className="border-border flex size-11 items-center justify-center border text-2xl"
            aria-label="상세 팝업 닫기"
            onClick={onClose}
          >
            ×
          </button>
        </header>
        {/* 사진 갤러리와 시공 정보를 순서대로 표시하는 팝업 본문이다. */}
        <div className="p-5 md:p-8">
          <ImageGallery images={caseItem.images} />
          <CaseInformation caseItem={caseItem} />
        </div>
      </section>
    </div>
  );
}
