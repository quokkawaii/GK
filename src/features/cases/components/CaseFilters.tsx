type CaseFiltersProps = Readonly<{
  selectedTags: readonly string[];
  locationTags: readonly string[];
  productTags: readonly string[];
  onLocationTagChange: (tag: string) => void;
  onProductTagChange: (tag: string) => void;
  onReset: () => void;
}>;

export function CaseFilters({
  selectedTags,
  locationTags,
  productTags,
  onLocationTagChange,
  onProductTagChange,
  onReset,
}: CaseFiltersProps) {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold">태그 필터</h2>
        <button
          type="button"
          className="border-text min-h-11 border-b text-sm font-semibold"
          onClick={onReset}
        >
          필터 초기화
        </button>
      </div>
      <div className="mt-4 space-y-3">
        <FilterGroup
          label="시공 장소"
          tags={locationTags}
          selectedTags={selectedTags}
          onTagChange={onLocationTagChange}
        />
        <FilterGroup
          label="시공 자재"
          tags={productTags}
          selectedTags={selectedTags}
          onTagChange={onProductTagChange}
        />
      </div>
    </>
  );
}

type FilterGroupProps = Readonly<{
  label: string;
  tags: readonly string[];
  selectedTags: readonly string[];
  onTagChange: (tag: string) => void;
}>;

function FilterGroup({ label, tags, selectedTags, onTagChange }: FilterGroupProps) {
  return (
    <div className="flex gap-3">
      <span className="text-muted w-16 shrink-0 pt-3 text-xs font-semibold">{label}</span>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`min-h-11 shrink-0 border px-4 text-sm font-semibold ${
              selectedTags.includes(tag)
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-surface text-text"
            }`}
            aria-pressed={selectedTags.includes(tag)}
            onClick={() => onTagChange(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
