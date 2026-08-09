import { create } from "zustand";

type CasePaginationState = {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  resetPageNumber: () => void;
};

export const useCasePaginationStore = create<CasePaginationState>((set) => ({
  pageNumber: 0,
  setPageNumber: (pageNumber) => set({ pageNumber }),
  resetPageNumber: () => set({ pageNumber: 0 }),
}));
