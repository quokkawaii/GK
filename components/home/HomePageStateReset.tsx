"use client";

import { useEffect } from "react";

import { useCaseFilterStore } from "@/store/caseFilterStore";
import { useCasePaginationStore } from "@/store/casePaginationStore";

export function HomePageStateReset() {
  const clearSelectedTags = useCaseFilterStore((state) => state.clearSelectedTags);
  const resetPageNumber = useCasePaginationStore((state) => state.resetPageNumber);

  useEffect(() => {
    clearSelectedTags();
    resetPageNumber();
  }, [clearSelectedTags, resetPageNumber]);

  return null;
}
