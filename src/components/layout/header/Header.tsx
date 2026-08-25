"use client";

import { HeaderBrand } from "@/components/layout/header/HeaderBrand";
import { HeaderContact } from "@/components/layout/header/HeaderContact";
import { HeaderMobileMenu } from "@/components/layout/header/HeaderMobileMenu";
import { HeaderNavigation } from "@/components/layout/header/HeaderNavigation";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";

// 공통 헤더 영역을 표시한다.
export function Header() {
  const isHidden = useHeaderScroll();

  return (
    <header className={isHidden ? "site-header is-hidden" : "site-header"}>
      <div className="header-inner">
        <HeaderBrand />
        <HeaderNavigation />
        <HeaderContact />
        <HeaderMobileMenu />
      </div>
    </header>
  );
}
