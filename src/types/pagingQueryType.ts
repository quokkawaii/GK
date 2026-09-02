export type PagingQueryState = {
  currentPage: number;
  totalPages: number;
  offset: number;
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
};

export type PagingQueryProps = {
  currentPage: number;
  totalPages: number;
  pageGroupSize: number;
  onPageChange: (page: number) => void;
};

export type CasesPaginationProps = {
  paging: PagingQueryState;
};
