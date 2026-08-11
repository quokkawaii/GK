import { create } from "zustand";

import { INITIAL_PAGE_NUMBER } from "@/lib/constants";

type CasePaginationState = {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  resetPageNumber: () => void;
};

export const useCasePaginationStore = create<CasePaginationState>((set) => ({
  pageNumber: INITIAL_PAGE_NUMBER,
  setPageNumber: (pageNumber) =>
    set((state) => (pageNumber < INITIAL_PAGE_NUMBER ? state : { pageNumber })),
  resetPageNumber: () => set({ pageNumber: INITIAL_PAGE_NUMBER }),
}));
