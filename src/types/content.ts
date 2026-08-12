// 사례와 제품 상세 화면이 함께 사용하는 사진 JSON 항목의 형태다.
export type CaseImage = Readonly<{
  src: string;
  alt: string;
}>;

// cases.json에서 읽어 사례 목록과 상세 화면에 전달하는 한 건의 형태다.
export type ConstructionCase = Readonly<{
  id: number;
  title: string;
  tags: readonly string[];
  location: string;
  description: string | null;
  productIds: readonly string[];
  thumbnailIndex: number;
  images: readonly CaseImage[];
}>;

// site.json에서 읽어 공통 레이아웃과 회사 소개 화면에 전달하는 형태다.
export type SiteContent = Readonly<{
  companyName: string;
  phone: string;
  serviceArea: string | null;
  address: string | null;
  businessInfo: string | null;
  social: Readonly<{
    youtube: string | null;
    instagram: string | null;
  }>;
  keywords: readonly string[];
  serviceScopes: readonly Readonly<{
    name: string;
    description: string;
  }>[];
  about: Readonly<{
    title: string;
    lead: string;
    body: readonly string[];
    closing: string;
  }>;
}>;
