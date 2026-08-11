"use client";

import { useEffect } from "react";

import { useCaseFilterStore } from "@/features/cases/store/caseFilterStore";
import { useCasePaginationStore } from "@/features/cases/store/casePaginationStore";

export function HomePageStateReset() {
  const clearSelectedTags = useCaseFilterStore((state) => state.clearSelectedTags);
  const resetPageNumber = useCasePaginationStore((state) => state.resetPageNumber);

  useEffect(() => {
    clearSelectedTags();
    resetPageNumber();
  }, [clearSelectedTags, resetPageNumber]);

  return null;
}
