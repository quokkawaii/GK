import Image from "next/image";

import type { ConstructionCase } from "@/types";

// 사례 카드에 표시할 데이터와 상세 열기 함수다.
type CaseCardProps = Readonly<{
  caseItem: ConstructionCase;
  onOpen: () => void;
}>;

// 대표 사진과 핵심 정보를 가진 사례 카드 한 건을 표시한다.
export function CaseCard({ caseItem, onOpen }: CaseCardProps) {
  const thumbnail = caseItem.images[caseItem.thumbnailIndex];

  return (
    /* 사례 상세 팝업을 여는 목록 카드 전체 버튼이다. */
    <button
      type="button"
      className="toss-card group text-left"
      onClick={onOpen}
      aria-label={`${caseItem.title} 상세 보기`}
    >
      {/* 대표 사진 또는 사진 없음 안내를 표시하는 카드 이미지 영역이다. */}
      <div className="toss-card-image relative overflow-hidden bg-[#dce7f2]">
        {thumbnail ? (
          /* cases.json의 thumbnailIndex가 가리키는 대표 사진이다. */
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 767px) 50vw, 25vw"
          />
        ) : (
          /* 사진 데이터가 없을 때 카드 크기를 유지하는 안내 문구다. */
          <span className="flex h-full items-center justify-center text-sm text-white">
            이미지가 없습니다
          </span>
        )}
      </div>
      {/* 태그·사례명·장소를 표시하는 카드 정보 영역이다. */}
      <div className="p-4">
        <p className="text-accent text-xs font-semibold">{caseItem.tags.join(" · ")}</p>
        <h2 className="mt-1 text-lg font-semibold tracking-[-0.04em]">{caseItem.title}</h2>
        <p className="text-muted mt-1 text-sm">{caseItem.location}</p>
      </div>
    </button>
  );
}
