import casesPageJson from "@/content/casesPage.json";
import type {
  CasesPageFilter,
  CasesPageHero,
  CasesPageJson,
  CasesPageMetadata,
  CasesPageModal,
} from "@/types/cases/casesPageType-json";

const casesPage: CasesPageJson = casesPageJson;

// casesPage.json의 페이지 메타데이터를 반환한다.
export const getCasesMetadata = (): CasesPageMetadata => casesPage.metadata;

// casesPage.json의 사례 페이지 히어로 데이터를 반환한다.
export const getCasesHero = (): CasesPageHero => casesPage.hero;

// casesPage.json의 사례 필터 문구를 반환한다.
export const getCasesFilter = (): CasesPageFilter => casesPage.filter;

// casesPage.json의 빈 결과 문구를 반환한다.
export const getCasesEmptyMessage = (): string => casesPage.emptyMessage;

// casesPage.json의 사례 상세 모달 문구를 반환한다.
export const getCasesModal = (): CasesPageModal => casesPage.modal;
