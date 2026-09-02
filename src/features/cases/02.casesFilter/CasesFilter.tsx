import { getCasesFilterOptions } from "@/func/cases/casesFunc";
import { getCasesFilter } from "@/func/cases/casesPageFunc-json";
import type { CasesFilterProps } from "@/types/cases/casesFilterType";

import { CasesFilterGroup } from "./CasesFilterGroup";

const casesFilterJson = getCasesFilter();
const filterOptions = getCasesFilterOptions();

// 장소·자재 필터를 조립한다.
export function CasesFilter({ placeFilter, materialFilter }: CasesFilterProps) {
  return (
    <section
      className="bg-canvas border-border rounded-md border p-6 max-md:p-4"
      aria-label="시공 사례 필터"
    >
      <h2 className="border-border m-0 border-b pb-4 text-2xl leading-9 font-semibold">
        {casesFilterJson.title}
      </h2>

      <CasesFilterGroup
        label={casesFilterJson.locationLabel}
        options={filterOptions.places}
        selectedValue={placeFilter.value}
        onSelect={placeFilter.handleChange}
      />

      <CasesFilterGroup
        label={casesFilterJson.materialLabel}
        options={filterOptions.materials}
        selectedValue={materialFilter.value}
        onSelect={materialFilter.handleChange}
      />
    </section>
  );
}
