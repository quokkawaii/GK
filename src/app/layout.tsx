import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/header/Header";
import { SideContact } from "@/components/layout/SideContact";
import layoutMetadata from "@/content/layout.json";

import "./globals.css";

// layout.json의 공통 메타데이터를 Next.js 루트 레이아웃에 연결한다.
export const metadata: Metadata = layoutMetadata.metadata;

// 모든 공개 페이지에 공통 레이아웃을 적용한다.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <SideContact />
        <Footer />
      </body>
    </html>
  );
}
