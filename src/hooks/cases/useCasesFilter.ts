"use client";

import { create } from "zustand";

import type { CasesFilterState, CasesFilterStore, FilterType } from "@/types/cases/casesFilterType";

const useCasesFilterStore = create<CasesFilterStore>((set) => ({
  values: {
    place: "전체",
    material: "전체",
  },
  setFilter: (type, value) =>
    set((state) => ({
      values: {
        ...state.values,
        [type]: value,
      },
    })),
}));

// 하나의 필터 값만 관리한다.
export function useCasesFilter(type: FilterType): CasesFilterState {
  const value = useCasesFilterStore((state) => state.values[type]);
  const setFilter = useCasesFilterStore((state) => state.setFilter);

  return {
    type,
    value,
    handleChange: (nextValue) => setFilter(type, nextValue),
  };
}
