"use client";

import { useEffect, useRef, useState } from "react";

import { HEADER_SCROLL_THRESHOLD } from "@/constants/headerConstance";

// SideContact 스크롤 상태를 관리한다.
export function useSideContact() {
  const scrollState = useRef({
    ticking: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (scrollState.current.ticking) return;

      scrollState.current.ticking = true;

      window.requestAnimationFrame(() => {
        const isVisible = window.scrollY > HEADER_SCROLL_THRESHOLD;

        scrollState.current.ticking = false;
        setIsVisible(isVisible);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isVisible;
}
