import type { CaseCardProps } from "@/types/cases/caseCardType";

// 시공 사례 하나를 카드 형태로 표시한다.
export function CaseCard({ caseItem, onSelect }: CaseCardProps) {
  const thumbnail = caseItem.images[caseItem.thumbnailIndex];

  if (!thumbnail) {
    return null;
  }

  return (
    <button
      className="border-border bg-canvas w-full overflow-hidden rounded-xl border text-left"
      type="button"
      onClick={() => onSelect(caseItem)}
    >
      <img className="aspect-[4/3] w-full object-cover" src={thumbnail.src} alt={thumbnail.alt} />

      <div className="p-4">
        <h3 className="m-0 text-lg font-semibold tracking-[-0.04em]">{caseItem.title}</h3>

        <p className="text-body mt-1.5 mb-0 text-sm">{caseItem.tags.join(" · ")}</p>
      </div>
    </button>
  );
}
