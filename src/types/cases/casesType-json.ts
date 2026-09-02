// cases.json의 전체 데이터 구조다.
export type CasesType = {
  id: number;
  title: string;
  tags: string[];
  location: string | null;
  place: string;
  material: string;
  thumbnailIndex: number;
  images: Image[];
};

export type Image = {
  src: string;
  alt: string;
};
