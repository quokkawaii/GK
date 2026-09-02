import type { CaseModalInfoProps } from "@/types/cases/caseModalType";

export function CaseModalInfo({
  title,
  tags,
  location,
  place,
  material,
  onClose,
}: CaseModalInfoProps) {
  return (
    <div className="relative p-8 max-md:order-1 max-md:flex-none max-md:p-6">
      <button
        className="border-border bg-canvas absolute top-4 right-4 size-10 rounded-md border text-2xl"
        type="button"
        aria-label="상세 닫기"
        onClick={onClose}
      >
        ×
      </button>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            className="bg-weak-background text-weak-foreground rounded-md px-2 py-1 text-sm"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="mt-10 mb-2 text-3xl font-semibold" id="case-modal-title">
        {title}
      </h2>

      <p className="text-body m-0">
        {location ? `${location} · ` : ""}
        {place}
      </p>

      <dl className="border-border mt-8 grid gap-2 border-t pt-4 text-sm">
        <div className="flex gap-4">
          <dt className="text-muted w-16">시공 자재</dt>
          <dd className="text-body m-0">{material}</dd>
        </div>
      </dl>
    </div>
  );
}
