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

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
