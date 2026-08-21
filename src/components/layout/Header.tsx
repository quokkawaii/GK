"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import siteContent from "@/content/site.json";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { navigationItems } from "@/lib/navigation";

// 공통 메뉴·전화 문의·모바일 메뉴를 헤더에 표시한다.
export function Header() {
  const pathname = usePathname();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    /* 모든 주소에서 상단에 고정되는 공통 헤더다. */
    <>
      <div className="toss-notice px-5 py-2">
        <strong>GK 산업</strong> · 실제 시공 사례와 사용 제품을 확인해보세요.
      </div>
      <header className="toss-header sticky top-0 z-30 border-b">
        <Container className="flex h-[62px] items-center justify-between md:h-16">
          {/* 홈으로 이동하는 회사명 링크다. */}
          <Link href="/" className="text-[20px] font-bold tracking-[-0.04em] md:text-[23px]">
            GK <span className="text-accent">산업</span>
          </Link>

          {/* 데스크톱에서만 표시하는 주요 주소 이동 메뉴다. */}
          <nav
            className="hidden items-center gap-8 text-[13px] font-semibold md:flex"
            aria-label="기본 메뉴"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 소셜 링크, 전화 문의, 모바일 메뉴를 모은 우측 기능 영역이다. */}
          <div className="flex items-center gap-3">
            {/* 데스크톱에서만 표시하는 소셜 링크 묶음이다. */}
            <div className="hidden md:block">
              <SocialLinks />
            </div>
            {/* JSON의 전화번호로 바로 연결하는 주요 문의 링크다. */}
            <a
              href={`tel:${siteContent.phone.replaceAll("-", "")}`}
              className="bg-accent flex min-h-11 items-center rounded-[7px] px-3 text-[12px] font-semibold text-white"
            >
              <span className="md:hidden">전화 문의</span>
              <span className="hidden md:inline">전화 문의 {siteContent.phone}</span>
            </a>
            <MobileMenu />
          </div>
        </Container>
      </header>
    </>
  );
}
