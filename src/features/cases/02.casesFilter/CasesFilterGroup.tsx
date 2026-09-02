import type { CasesFilterGroupProps } from "@/types/cases/casesFilterType";

// 하나의 시공 사례 필터 그룹을 표시한다.
export function CasesFilterGroup({
  label,
  options,
  selectedValue,
  onSelect,
}: CasesFilterGroupProps) {
  return (
    <div className="flex items-start gap-4 pt-4 max-md:block">
      <strong className="text-body w-[72px] pt-2 text-sm leading-[21px] max-md:block max-md:w-auto max-md:pb-2">
        {label}
      </strong>

      <div className="flex flex-1 flex-wrap gap-1.5 max-md:flex-nowrap max-md:overflow-x-auto max-md:pb-1">
        {options.map((option) => {
          const isSelected = option === selectedValue;

          return (
            <button
              key={option}
              className={
                isSelected
                  ? "border-primary bg-weak-background text-weak-foreground min-h-10 rounded-md border px-3 py-1.5 text-sm font-semibold"
                  : "border-border bg-canvas text-body min-h-10 rounded-md border px-3 py-1.5 text-sm"
              }
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
