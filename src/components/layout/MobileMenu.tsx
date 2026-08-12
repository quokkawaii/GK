"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import siteContent from "@/content/site.json";
import { navigationItems } from "@/lib/navigation";

// 작은 화면에서 열고 닫을 수 있는 전체 메뉴를 표시한다.
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* 작은 화면에서만 표시되는 메뉴 열기 버튼이다. */}
      <button
        type="button"
        className="border-border flex size-11 items-center justify-center border text-xl md:hidden"
        aria-label="메뉴 열기"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span aria-hidden="true">☰</span>
      </button>

      {isOpen && (
        /* 배경과 측면 메뉴를 화면 전체에 표시하는 모바일 메뉴 레이어다. */
        <div className="fixed inset-0 z-50 md:hidden">
          {/* 배경을 누르면 모바일 메뉴를 닫는 버튼이다. */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="메뉴 닫기"
            onClick={() => setIsOpen(false)}
          />

          {/* 메뉴 주소와 전화 문의를 담는 오른쪽 측면 메뉴다. */}
          <aside
            id="mobile-menu"
            className="bg-surface absolute top-0 right-0 flex h-full w-[min(86vw,360px)] flex-col p-6 shadow-[-12px_0_28px_rgba(0,0,0,0.12)]"
            aria-label="모바일 메뉴"
          >
            {/* 홈 링크와 닫기 버튼을 나란히 둔 메뉴 머리글이다. */}
            <div className="border-border flex items-center justify-between border-b pb-5">
              <Link
                href="/"
                className="text-[20px] font-bold tracking-[-0.04em]"
                onClick={() => setIsOpen(false)}
              >
                GK <span className="text-accent">산업</span>
              </Link>
              {/* 메뉴를 닫는 명시적인 버튼이다. */}
              <button
                type="button"
                className="border-border flex size-11 items-center justify-center border text-2xl"
                aria-label="메뉴 닫기"
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            {/* 메뉴를 선택하면 측면 메뉴를 닫고 해당 주소로 이동하는 탐색 목록이다. */}
            <nav className="flex flex-col py-6 text-lg font-semibold" aria-label="모바일 기본 메뉴">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-border border-b py-4 first:border-t"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* 메뉴 하단에서 바로 전화할 수 있는 문의 링크다. */}
            <a
              href={`tel:${siteContent.phone.replaceAll("-", "")}`}
              className="bg-accent mt-auto flex min-h-11 items-center justify-center px-4 text-sm font-semibold text-white"
            >
              전화 문의 {siteContent.phone}
            </a>
          </aside>
        </div>
      )}
    </>
  );
}
