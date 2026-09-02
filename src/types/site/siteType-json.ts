// site.json의 전체 데이터 구조다.
export type SiteContent = {
  company: {
    name: string;
    representative: string;
    address: string;
    serviceArea: string;
    representativePhone: {
      label: string;
      number: string;
      href: string;
    };
  };
  inquiry: {
    label: string;
    number: string;
    href: string;
  };
  social: {
    instagram: {
      url: string;
      img: string;
      label: string;
    };
    youtube: {
      url: string;
      img: string;
      label: string;
    };
  };
  copyright: {
    year: number;
    holder: string;
  };
};
