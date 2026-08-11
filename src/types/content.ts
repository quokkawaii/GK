export type CaseImage = Readonly<{
  src: string;
  alt: string;
}>;

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

export type SiteContent = Readonly<{
  companyName: string;
  phone: string | null;
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
