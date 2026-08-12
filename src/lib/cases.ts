import type { CasePage, ConstructionCase } from "@/types";

import { CASES_PER_PAGE, INITIAL_PAGE_NUMBER, PAGE_BUTTON_COUNT } from "@/lib/constants";

// 모든 사례 태그를 중복 없이 추출한다.
export function getAvailableTags(cases: readonly ConstructionCase[]) {
  return Array.from(new Set(cases.flatMap((caseItem) => caseItem.tags)));
}

// 제품 태그를 제외한 장소 태그를 중복 없이 추출한다.
export function getAvailableLocationTags(cases: readonly ConstructionCase[]) {
  return Array.from(
    new Set(
      cases.flatMap((caseItem) =>
        caseItem.tags.filter((tag) => !caseItem.productIds.includes(tag)),
      ),
    ),
  );
}

// 사례에 사용된 제품명을 중복 없이 추출한다.
export function getAvailableProductTags(cases: readonly ConstructionCase[]) {
  return Array.from(new Set(cases.flatMap((caseItem) => caseItem.productIds)));
}

// 선택 태그를 모두 포함한 사례를 최신순으로 정렬하고 한 페이지 분량으로 나눈다.
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
  const validPageNumber =
    totalPages === 0
      ? INITIAL_PAGE_NUMBER
      : Math.min(Math.max(pageNumber, INITIAL_PAGE_NUMBER), totalPages);
  const startIndex = (validPageNumber - INITIAL_PAGE_NUMBER) * CASES_PER_PAGE;
  const content = filteredCases.slice(startIndex, startIndex + CASES_PER_PAGE);

  return {
    content,
    totalElements,
    totalPages,
    pageNumber: validPageNumber,
    pageSize: CASES_PER_PAGE,
    hasPrevious: validPageNumber > INITIAL_PAGE_NUMBER,
    hasNext: validPageNumber < totalPages,
    numberOfElements: content.length,
    empty: content.length === 0,
  };
}

// 현재 페이지가 속한 페이지 번호 묶음을 만든다.
export function getVisiblePageNumbers(pageNumber: number, totalPages: number) {
  const pageGroupStart =
    Math.floor((pageNumber - INITIAL_PAGE_NUMBER) / PAGE_BUTTON_COUNT) * PAGE_BUTTON_COUNT +
    INITIAL_PAGE_NUMBER;

  return Array.from(
    { length: Math.min(PAGE_BUTTON_COUNT, Math.max(totalPages - pageGroupStart, 0)) },
    (_, index) => pageGroupStart + index,
  );
}
