import type { CaseCardProps } from "@/types/cases/caseCardType";

// 시공 사례 하나를 카드 형태로 표시한다.
export function CaseCard({ caseItem, onSelect }: CaseCardProps) {
  const thumbnail = caseItem.images[caseItem.thumbnailIndex];

  return (
    <button
      className="border-border bg-canvas w-full overflow-hidden rounded-xl border text-left"
      type="button"
      onClick={() => onSelect(caseItem)}
    >
      <img className="aspect-[4/3] w-full object-cover" src={thumbnail.src} alt={thumbnail.alt} />

      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {caseItem.tags.map((tag) => (
            <span
              className="bg-weak-background text-weak-foreground rounded-full px-2.5 py-1 text-xs"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="m-0 text-lg font-semibold">{caseItem.title}</h3>

        <p className="text-body mt-1.5 mb-0 text-sm">
          {caseItem.location ? `${caseItem.location} · ` : ""}
          {caseItem.place}
        </p>
      </div>
    </button>
  );
}
