// 사례 필터·정렬·페이지 계산 뒤 목록 화면이 사용하는 결과 형태다.
export type CasePage = Readonly<{
  content: readonly import("@/types/content").ConstructionCase[];
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  hasPrevious: boolean;
  hasNext: boolean;
  numberOfElements: number;
  empty: boolean;
}>;
