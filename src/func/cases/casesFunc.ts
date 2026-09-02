import casesJson from "@/content/cases.json";
import type { CasesType } from "@/types/cases/casesType-json";

const cases: CasesType[] = casesJson;

export const findById = (id: number) => cases.find((item) => item.id == id);

export const getCasesLength = () => cases.length;

// cases.json에서 장소·자재 필터 옵션을 생성한다.
export const getCasesFilterOptions = () => ({
  places: ["전체", ...new Set(cases.map((caseItem) => caseItem.place))],
  materials: ["전체", ...new Set(cases.map((caseItem) => caseItem.material))],
});

// 장소와 자재 조건에 맞는 시공 사례를 반환한다.
export const findByPlaceAndMaterial = (
  place: string,
  material: string,
): CasesType[] => {
  return cases.filter(
    (caseItem) =>
      (place === "전체" || caseItem.place === place) &&
      (material === "전체" || caseItem.material === material),
  );
};

// 정렬 조건과 표시 개수에 맞는 시공 사례를 반환한다.
export const getCasesByQuery = (
  sortBy: string,
  direction: string,
  limit: number,
) => {
  const sortedCases = [...cases];

  if (sortBy === "id") {
    sortedCases.sort((firstCase, secondCase) =>
      direction === "desc"
        ? secondCase.id - firstCase.id
        : firstCase.id - secondCase.id,
    );
  }

  return sortedCases.slice(0, limit);
};
