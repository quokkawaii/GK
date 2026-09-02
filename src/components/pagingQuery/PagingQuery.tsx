import type { PagingQueryProps } from "@/types/pagingQueryType";

// 공용 페이지 번호를 표시한다.
export function PagingQuery({
  currentPage,
  totalPages,
  pageGroupSize,
  onPageChange,
}: PagingQueryProps) {
  if (totalPages === 0) {
    return null;
  }

  const groupStart = Math.floor((currentPage - 1) / pageGroupSize) * pageGroupSize + 1;
  const groupEnd = Math.min(groupStart + pageGroupSize - 1, totalPages);
  const pageNumbers = Array.from(
    { length: groupEnd - groupStart + 1 },
    (_, index) => groupStart + index,
  );

  return (
    <nav className="mt-8 flex justify-center gap-1.5" aria-label="페이지 이동">
      {currentPage > 1 && (
        <button
          className="border-border text-body bg-canvas min-h-10 rounded-md border px-3 py-2 text-sm"
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
        >
          이전
        </button>
      )}

      {pageNumbers.map((page) => {
        const isCurrent = page === currentPage;

        return (
          <button
            className={
              isCurrent
                ? "bg-primary min-h-10 min-w-10 rounded-md px-3 py-2 text-sm font-semibold text-white"
                : "border-border text-body bg-canvas min-h-10 min-w-10 rounded-md border px-3 py-2 text-sm"
            }
            key={page}
            type="button"
            aria-current={isCurrent ? "page" : "false"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}

      {currentPage < totalPages && (
        <button
          className="border-border text-body bg-canvas min-h-10 rounded-md border px-3 py-2 text-sm"
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
        >
          다음
        </button>
      )}
    </nav>
  );
}
