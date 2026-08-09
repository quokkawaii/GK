import type { CasePage, ConstructionCase } from "@/types";

import { CASES_PER_PAGE, PAGE_BUTTON_COUNT } from "@/lib/constants";

export function getAvailableTags(cases: readonly ConstructionCase[]) {
  return Array.from(new Set(cases.flatMap((caseItem) => caseItem.tags)));
}

export function getAvailableLocationTags(cases: readonly ConstructionCase[]) {
  return Array.from(
    new Set(
      cases.flatMap((caseItem) =>
        caseItem.tags.filter((tag) => !caseItem.productIds.includes(tag)),
      ),
    ),
  );
}

export function getAvailableProductTags(cases: readonly ConstructionCase[]) {
  return Array.from(new Set(cases.flatMap((caseItem) => caseItem.productIds)));
}

export function getCasePage(
  cases: readonly ConstructionCase[],
  selectedTags: readonly string[],
  pageNumber: number,
): CasePage {
  const filteredCases = cases
    .filter((caseItem) => selectedTags.every((tag) => caseItem.tags.includes(tag)))
    .toSorted((firstCase, secondCase) => secondCase.id - firstCase.id);
  const totalElements = filteredCases.length;
  const totalPages = Math.ceil(totalElements / CASES_PER_PAGE);
  const validPageNumber = totalPages === 0 ? 0 : Math.min(pageNumber, totalPages - 1);
  const startIndex = validPageNumber * CASES_PER_PAGE;
  const content = filteredCases.slice(startIndex, startIndex + CASES_PER_PAGE);

  return {
    content,
    totalElements,
    totalPages,
    pageNumber: validPageNumber,
    pageSize: CASES_PER_PAGE,
    hasPrevious: validPageNumber > 0,
    hasNext: validPageNumber < totalPages - 1,
    numberOfElements: content.length,
    empty: content.length === 0,
  };
}

export function getVisiblePageNumbers(pageNumber: number, totalPages: number) {
  const pageGroupStart = Math.floor(pageNumber / PAGE_BUTTON_COUNT) * PAGE_BUTTON_COUNT;

  return Array.from(
    { length: Math.min(PAGE_BUTTON_COUNT, Math.max(totalPages - pageGroupStart, 0)) },
    (_, index) => pageGroupStart + index,
  );
}
