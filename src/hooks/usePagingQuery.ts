"use client";

import { useEffect, useState } from "react";

import { pageHeight, pageWidth } from "@/constants/pagingQueryConstance";
import type { PagingQueryState } from "@/types/pagingQueryType";

export function usePagingQuery(totalItems: number, filterKey: string): PagingQueryState {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCapacity = pageWidth * pageHeight;
  const totalPages = Math.ceil(totalItems / pageCapacity);
  const offset = (currentPage - 1) * pageCapacity;

  useEffect(() => {
    setCurrentPage(1);
  }, [filterKey]);

  const goToPage = (page: number) => {
    const lastPage = Math.max(totalPages, 1);
    const nextPage = Math.min(Math.max(page, 1), lastPage);

    setCurrentPage(nextPage);
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const previousPage = () => {
    goToPage(currentPage - 1);
  };

  return {
    currentPage,
    totalPages,
    offset,
    goToPage,
    nextPage,
    previousPage,
  };
}
