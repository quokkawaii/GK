// 필터 종류를 구분하는 키다.
export type FilterType = "place" | "material";

// 하나의 시공 사례 필터 상태와 변경 함수 구조다.
export type CasesFilterState = {
  type: FilterType;
  value: string;
  handleChange: (value: string) => void;
};

// 페이지 이동 후에도 공유하는 시공 사례 필터 상태다.
export type CasesFilterStore = {
  values: Record<FilterType, string>;
  setFilter: (type: FilterType, value: string) => void;
};

// 시공 사례 필터 전체에 전달하는 상태 구조다.
export type CasesFilterProps = {
  placeFilter: CasesFilterState;
  materialFilter: CasesFilterState;
};

// 하나의 시공 사례 필터 그룹에 전달하는 표시 구조다.
export type CasesFilterGroupProps = {
  label: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
};
