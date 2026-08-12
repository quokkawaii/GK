"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// 사례 목록에서 탭 단위로 유지할 필터·페이지 상태와 변경 함수다.
type CaseListState = {
  selectedTags: string[];
  currentPage: number;
  chooseLocationTag: (tag: string, locationTags: readonly string[]) => void;
  chooseProductTag: (tag: string, productTags: readonly string[]) => void;
  clearFilters: () => void;
  goToPage: (page: number) => void;
};

// 사례 필터와 페이지를 한 탭에서 기억하고 화면에 필요한 동작만 제공한다.
export const useCaseList = create<CaseListState>()(
  persist(
    (set) => ({
      selectedTags: [],
      currentPage: 1,
      chooseLocationTag: (tag, locationTags) =>
        set((state) => ({
          selectedTags: [
            ...state.selectedTags.filter((selected) => !locationTags.includes(selected)),
            tag,
          ],
          currentPage: 1,
        })),
      chooseProductTag: (tag, productTags) =>
        set((state) => ({
          selectedTags: [
            ...state.selectedTags.filter((selected) => !productTags.includes(selected)),
            tag,
          ],
          currentPage: 1,
        })),
      clearFilters: () => set({ selectedTags: [], currentPage: 1 }),
      goToPage: (page) => set((state) => (page >= 1 ? { currentPage: page } : state)),
    }),
    {
      name: "gk-case-list",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ selectedTags: state.selectedTags, currentPage: state.currentPage }),
    },
  ),
);
