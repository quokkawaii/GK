import { getVisiblePageNumbers } from "@/lib";

// 사례 목록 페이지 이동에 필요한 현재 상태와 변경 함수다.
type CasePaginationProps = Readonly<{
  pageNumber: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onPageChange: (pageNumber: number) => void;
}>;

// 현재 페이지를 기준으로 이전·다음과 번호 이동 버튼을 표시한다.
export function CasePagination({
  pageNumber,
  totalPages,
  hasPrevious,
  hasNext,
  onPageChange,
}: CasePaginationProps) {
  return (
    /* 사례 목록의 현재 페이지를 바꾸는 페이지네이션 탐색 영역이다. */
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="시공 사례 페이지 이동">
      {hasPrevious && (
        /* 첫 페이지가 아닐 때만 이전 페이지로 이동하는 버튼이다. */
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
        /* 현재 묶음 안의 특정 페이지로 이동하는 번호 버튼이다. */
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
        /* 마지막 페이지가 아닐 때만 다음 페이지로 이동하는 버튼이다. */
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
