// home.json의 전체 데이터 구조다.
export type HomeContent = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    titleLines: string[];
    description: string;
    casesQuery: {
      sortBy: string;
      direction: string;
      limit: number;
      display: string;
    };
  };
  about: {
    titleLines: string[];
    lead: string;
    paragraphs: string[];
  };
  spaces: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  featuredCases: {
    title: string;
    description: string;
    casesQuery: {
      sortBy: string;
      direction: string;
      limit: number;
      display: string;
    };
  };
};
