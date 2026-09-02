// layout.json의 전체 데이터 구조다.
export type LayoutContent = {
  metadata: {
    title: {
      default: string;
      template: string;
    };
    description: string;
    applicationName: string;
    icons: {
      icon: string;
    };
    openGraph: {
      siteName: string;
      locale: string;
      type: string;
    };
  };
};
