"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import siteContent from "@/content/site.json";
import { navigationItems } from "@/lib/navigation";

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
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="메뉴 닫기"
            onClick={() => setIsOpen(false)}
          />

          <aside
            id="mobile-menu"
            className="bg-surface absolute top-0 right-0 flex h-full w-[min(86vw,360px)] flex-col p-6 shadow-[-12px_0_28px_rgba(0,0,0,0.12)]"
            aria-label="모바일 메뉴"
          >
            <div className="border-border flex items-center justify-between border-b pb-5">
              <Link
                href="/"
                className="text-[20px] font-bold tracking-[-0.04em]"
                onClick={() => setIsOpen(false)}
              >
                GK <span className="text-accent">산업</span>
              </Link>
              <button
                type="button"
                className="border-border flex size-11 items-center justify-center border text-2xl"
                aria-label="메뉴 닫기"
                onClick={() => setIsOpen(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

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
