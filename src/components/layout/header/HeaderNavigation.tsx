"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import routeJson from "@/content/routes.json";

// 현재 경로를 표시하는 데스크톱 헤더 네비게이션을 렌더링한다.
export function HeaderNavigation() {
  const pathname = usePathname();

  return (
    <nav className="primary-nav" aria-label="기본 메뉴">
      {routeJson.map((item) => (
        <Link
          key={item.route}
          href={item.route}
          aria-current={pathname === item.route ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
