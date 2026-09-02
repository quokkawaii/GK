// src/hooks/useHeaderScroll.ts

"use client";

import { useEffect, useRef, useState } from "react";

import { updateHeader } from "@/func/scroll/headerFunc-scroll";
import type { HeaderScrollState } from "@/types/header/headerScrollType";

// 헤더 스크롤 상태를 관리한다.
export function useHeaderScroll() {
  const scrollState = useRef<HeaderScrollState>({
    lastScrollY: 0,
    ticking: false,
  });
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollState.current.ticking) return;

      scrollState.current.ticking = true;

      window.requestAnimationFrame(() => {
        const result = updateHeader(scrollState.current, window.scrollY);

        scrollState.current = result.state;
        setIsHidden(result.isHidden);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isHidden;
}
