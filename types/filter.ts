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
