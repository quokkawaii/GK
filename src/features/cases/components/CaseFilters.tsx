// 사례 필터 화면이 표시할 태그와 상위 화면의 변경 함수다.
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
      {/* 필터 제목과 모든 선택을 지우는 버튼을 나란히 표시하는 머리글이다. */}
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold">태그 필터</h2>
        {/* 장소·제품 선택과 페이지 번호를 처음 상태로 되돌리는 버튼이다. */}
        <button
          type="button"
          className="border-text min-h-11 border-b text-sm font-semibold"
          onClick={onReset}
        >
          필터 초기화
        </button>
      </div>
      {/* 장소 태그와 제품 태그 버튼 묶음을 세로로 배치하는 영역이다. */}
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

// 한 종류의 태그 버튼 묶음에 표시할 값과 선택 처리 함수다.
type FilterGroupProps = Readonly<{
  label: string;
  tags: readonly string[];
  selectedTags: readonly string[];
  onTagChange: (tag: string) => void;
}>;

// 같은 규칙으로 장소 또는 제품 태그 버튼 묶음을 표시한다.
function FilterGroup({ label, tags, selectedTags, onTagChange }: FilterGroupProps) {
  return (
    /* 태그 종류 이름과 가로 스크롤 가능한 태그 버튼을 묶는 행이다. */
    <div className="flex gap-3">
      <span className="text-muted w-16 shrink-0 pt-3 text-xs font-semibold">{label}</span>
      {/* 작은 화면에서도 모든 태그를 고를 수 있도록 가로 스크롤하는 목록이다. */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tags.map((tag) => (
          /* 태그 하나를 선택하거나 같은 종류의 기존 선택을 교체하는 버튼이다. */
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
