// casesPage.json의 페이지 메타데이터 구조다.
export type CasesPageMetadata = {
  title: string;
};

// casesPage.json의 사례 페이지 히어로 구조다.
export type CasesPageHero = {
  eyebrow: string;
  title: string;
  description: string;
};

// casesPage.json의 사례 필터 문구 구조다.
export type CasesPageFilter = {
  title: string;
  locationLabel: string;
  materialLabel: string;
};

// casesPage.json의 사례 상세 모달 문구 구조다.
export type CasesPageModal = {
  descriptionLabel: string;
  productLabel: string;
  descriptionFallback: string;
};

// casesPage.json의 전체 데이터 구조다.
export type CasesPageJson = {
  metadata: CasesPageMetadata;
  hero: CasesPageHero;
  filter: CasesPageFilter;
  emptyMessage: string;
  modal: CasesPageModal;
};
