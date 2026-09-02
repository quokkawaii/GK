"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import routeJson from "@/content/routes.json";

// 모바일 헤더의 메뉴 열기·닫기와 네비게이션을 관리한다.
export function HeaderMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? "×" : "☰"}
      </button>
      {isOpen ? (
        <div className="mobile-menu-panel">
          <nav className="mobile-nav" aria-label="모바일 기본 메뉴">
            {routeJson.map((item) => (
              <Link
                key={item.route}
                href={item.route}
                aria-current={pathname === item.route ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
