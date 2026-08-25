"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HEADER_NAVIGATION_ITEMS } from "@/constants/navigation";

// 현재 경로를 표시하는 데스크톱 헤더 네비게이션을 렌더링한다.
export function HeaderNavigation() {
  const pathname = usePathname();

  return (
    <nav className="primary-nav" aria-label="기본 메뉴">
      {HEADER_NAVIGATION_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
