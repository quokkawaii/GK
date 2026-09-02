import { PagingQuery } from "@/components/pagingQuery/PagingQuery";
import { pageGroupSize } from "@/constants/pagingQueryConstance";
import type { CasesPaginationProps } from "@/types/pagingQueryType";

// 사례 결과에 공용 페이지 번호를 연결한다.
export function CasesPagination({ paging }: CasesPaginationProps) {
  return (
    <PagingQuery
      currentPage={paging.currentPage}
      totalPages={paging.totalPages}
      pageGroupSize={pageGroupSize}
      onPageChange={paging.goToPage}
    />
  );
}
