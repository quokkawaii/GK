import type { ConstructionCase } from "@/types";

// 사례 상세 정보 영역에 표시할 한 건의 사례 데이터다.
type CaseInformationProps = Readonly<{ caseItem: ConstructionCase }>;

// 사례의 시공 내용과 현장 정보를 표시한다.
export function CaseInformation({ caseItem }: CaseInformationProps) {
  return (
    /* 시공 설명과 구조화된 현장 정보를 두 열로 배치하는 상세 영역이다. */
    <div className="mt-8 grid gap-8 md:grid-cols-[1fr_280px]">
      {/* 선택된 사례에 설명이 있을 때만 표시하는 시공 내용 영역이다. */}
      <div>
        {caseItem.description && (
          /* 제목과 여러 줄 설명을 함께 표시하는 시공 내용 묶음이다. */
          <div>
            <h3 className="text-base font-semibold">시공 내용</h3>
            <p className="text-muted mt-2 text-sm leading-6 whitespace-pre-line">
              {caseItem.description}
            </p>
          </div>
        )}
      </div>
      {/* 장소·사용 제품·태그를 항목명과 값으로 표시하는 정의 목록이다. */}
      <dl className="border-border border-t text-sm">
        {/* 사례가 진행된 장소를 표시하는 정보 행이다. */}
        <div className="border-border grid grid-cols-[88px_1fr] gap-4 border-b py-3">
          <dt className="font-semibold">장소</dt>
          <dd className="text-muted">{caseItem.location}</dd>
        </div>
        {/* 사례에 적용된 제품을 표시하는 정보 행이다. */}
        <div className="border-border grid grid-cols-[88px_1fr] gap-4 border-b py-3">
          <dt className="font-semibold">사용 자재</dt>
          <dd className="text-muted">{caseItem.productIds.join(" · ")}</dd>
        </div>
        {/* 사례 분류에 사용하는 태그를 표시하는 정보 행이다. */}
        <div className="border-border grid grid-cols-[88px_1fr] gap-4 border-b py-3">
          <dt className="font-semibold">태그</dt>
          <dd className="text-muted">{caseItem.tags.join(" · ")}</dd>
        </div>
      </dl>
    </div>
  );
}
