import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GK 산업 | 바닥 시공",
    template: "%s | GK 산업",
  },
  description:
    "GK 산업의 바닥 시공 사례와 사용 제품 정보를 확인하고 전화로 시공 상담을 받아보세요.",
};

// 모든 주소의 공통 레이아웃 안에 배치할 페이지 내용이다.
type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

// 공통 메타데이터와 헤더·본문·푸터를 모든 페이지에 배치한다.
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    /* 한국어 문서와 공통 레이아웃을 정의하는 최상위 HTML 요소다. */
    <html lang="ko">
      {/* 헤더·페이지 본문·푸터를 공통으로 배치하는 문서 본문이다. */}
      <body>
        {/* 모든 주소에서 공통으로 표시되는 사이트 헤더다. */}
        <Header />
        {/* 주소별 페이지 컴포넌트를 표시하는 주 콘텐츠 영역이다. */}
        <main className="main-container">{children}</main>
        {/* 모든 주소에서 공통으로 표시되는 사이트 푸터다. */}
        <Footer />
      </body>
    </html>
  );
}
