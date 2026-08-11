import { describe, expect, it } from "vitest";

import { getCasePage, getVisiblePageNumbers, getVisibleProductIds } from "@/lib";

const testCases = [
  {
    id: 5,
    title: "다섯 번째",
    tags: ["공장", "크리트"],
    location: "공장",
    description: null,
    productIds: ["크리트"],
    thumbnailIndex: 0,
    images: [],
  },
  {
    id: 4,
    title: "네 번째",
    tags: ["공장", "MMA"],
    location: "공장",
    description: null,
    productIds: ["MMA"],
    thumbnailIndex: 0,
    images: [],
  },
  {
    id: 3,
    title: "세 번째",
    tags: ["주방", "MMA"],
    location: "주방",
    description: null,
    productIds: ["MMA"],
    thumbnailIndex: 0,
    images: [],
  },
  {
    id: 2,
    title: "두 번째",
    tags: ["공장", "크리트"],
    location: "공장",
    description: null,
    productIds: ["크리트"],
    thumbnailIndex: 0,
    images: [],
  },
  {
    id: 1,
    title: "첫 번째",
    tags: ["공장", "크리트"],
    location: "공장",
    description: null,
    productIds: ["크리트"],
    thumbnailIndex: 0,
    images: [],
  },
];

describe("getCasePage", () => {
  it("sorts cases by descending numeric id", () => {
    const page = getCasePage(testCases, [], 1);

    expect(page.content.map((caseItem) => caseItem.id)).toEqual([5, 4, 3, 2]);
  });

  it("requires every selected tag to be present", () => {
    const page = getCasePage(testCases, ["공장", "크리트"], 1);

    expect(page.content.map((caseItem) => caseItem.id)).toEqual([5, 2, 1]);
    expect(page.totalElements).toBe(3);
  });

  it("returns four cases per page and page metadata", () => {
    const page = getCasePage(testCases, [], 2);

    expect(page.content.map((caseItem) => caseItem.id)).toEqual([1]);
    expect(page.pageNumber).toBe(2);
    expect(page.totalPages).toBe(2);
    expect(page.hasPrevious).toBe(true);
    expect(page.hasNext).toBe(false);
  });

  it("keeps an invalid page number inside the available page range", () => {
    expect(getCasePage(testCases, [], 0).pageNumber).toBe(1);
    expect(getCasePage(testCases, [], 99).pageNumber).toBe(2);
  });
});

describe("getVisiblePageNumbers", () => {
  it("returns the current five-page group", () => {
    expect(getVisiblePageNumbers(6, 12)).toEqual([6, 7, 8, 9, 10]);
  });
});

describe("getVisibleProductIds", () => {
  it("returns products from cases that contain every selected product", () => {
    const casesWithMultipleProducts = [
      ...testCases,
      {
        id: 6,
        title: "여섯 번째",
        tags: ["공장", "크리트", "MMA"],
        location: "공장",
        description: null,
        productIds: ["크리트", "MMA"],
        thumbnailIndex: 0,
        images: [],
      },
    ];

    expect(
      getVisibleProductIds(casesWithMultipleProducts, ["크리트", "MMA"], ["크리트", "MMA"]),
    ).toEqual(["크리트", "MMA"]);
  });
});
