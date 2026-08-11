import { getVisiblePageNumbers } from "@/lib";

type CasePaginationProps = Readonly<{
  pageNumber: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onPageChange: (pageNumber: number) => void;
}>;

export function CasePagination({
  pageNumber,
  totalPages,
  hasPrevious,
  hasNext,
  onPageChange,
}: CasePaginationProps) {
  return (
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="시공 사례 페이지 이동">
      {hasPrevious && (
        <button
          type="button"
          className="border-border flex size-11 items-center justify-center border"
          aria-label="이전 페이지"
          onClick={() => onPageChange(pageNumber - 1)}
        >
          ←
        </button>
      )}
      {getVisiblePageNumbers(pageNumber, totalPages).map((visiblePageNumber) => (
        <button
          key={visiblePageNumber}
          type="button"
          className={`flex size-11 items-center justify-center border text-sm font-semibold ${
            visiblePageNumber === pageNumber
              ? "border-accent bg-accent text-white"
              : "border-border bg-surface"
          }`}
          aria-label={`${visiblePageNumber}페이지`}
          aria-current={visiblePageNumber === pageNumber ? "page" : undefined}
          onClick={() => onPageChange(visiblePageNumber)}
        >
          {visiblePageNumber}
        </button>
      ))}
      {hasNext && (
        <button
          type="button"
          className="border-border flex size-11 items-center justify-center border"
          aria-label="다음 페이지"
          onClick={() => onPageChange(pageNumber + 1)}
        >
          →
        </button>
      )}
    </nav>
  );
}
