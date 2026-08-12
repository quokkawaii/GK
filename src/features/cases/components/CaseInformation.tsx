import type { ConstructionCase } from "@/types";

type CaseInformationProps = Readonly<{ caseItem: ConstructionCase }>;

// 사례의 시공 내용과 현장 정보를 표시한다.
export function CaseInformation({ caseItem }: CaseInformationProps) {
  return (
    <div className="mt-8 grid gap-8 md:grid-cols-[1fr_280px]">
      <div>
        {caseItem.description && (
          <div>
            <h3 className="text-base font-semibold">시공 내용</h3>
            <p className="text-muted mt-2 text-sm leading-6 whitespace-pre-line">
              {caseItem.description}
            </p>
          </div>
        )}
      </div>
      <dl className="border-border border-t text-sm">
        <div className="border-border grid grid-cols-[88px_1fr] gap-4 border-b py-3">
          <dt className="font-semibold">장소</dt>
          <dd className="text-muted">{caseItem.location}</dd>
        </div>
        <div className="border-border grid grid-cols-[88px_1fr] gap-4 border-b py-3">
          <dt className="font-semibold">사용 자재</dt>
          <dd className="text-muted">{caseItem.productIds.join(" · ")}</dd>
        </div>
        <div className="border-border grid grid-cols-[88px_1fr] gap-4 border-b py-3">
          <dt className="font-semibold">태그</dt>
          <dd className="text-muted">{caseItem.tags.join(" · ")}</dd>
        </div>
      </dl>
    </div>
  );
}
