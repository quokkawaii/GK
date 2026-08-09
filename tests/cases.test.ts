import { describe, expect, it } from "vitest";

import casesContent from "@/content/cases.json";
import { getCasePage, getVisiblePageNumbers } from "@/lib";

describe("getCasePage", () => {
  it("sorts cases by descending numeric id", () => {
    const page = getCasePage(casesContent.content, [], 0);

    expect(page.content.map((caseItem) => caseItem.id)).toEqual([9, 8, 7, 6]);
  });

  it("requires every selected tag to be present", () => {
    const page = getCasePage(casesContent.content, ["공장", "크리트"], 0);

    expect(page.content.map((caseItem) => caseItem.id)).toEqual([6, 5, 4, 1]);
    expect(page.totalElements).toBe(4);
  });

  it("returns four cases per page and page metadata", () => {
    const page = getCasePage(casesContent.content, [], 1);

    expect(page.content.map((caseItem) => caseItem.id)).toEqual([5, 4, 3, 2]);
    expect(page.pageNumber).toBe(1);
    expect(page.totalPages).toBe(3);
    expect(page.hasPrevious).toBe(true);
    expect(page.hasNext).toBe(true);
  });
});

describe("getVisiblePageNumbers", () => {
  it("returns the current five-page group", () => {
    expect(getVisiblePageNumbers(6, 12)).toEqual([5, 6, 7, 8, 9]);
  });
});
