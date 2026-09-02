// about.json의 회사 소개 데이터 구조다.
export type AboutJson = {
  metadata: {
    title: string;
  };
  titleLines: string[];
  paragraphs: string[];
  contactMessage: {
    before: string;
    emphasis: string;
    after: string;
  };
  signature: string;
};
