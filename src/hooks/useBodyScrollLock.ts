"use client";

import { useEffect } from "react";

// 팝업이 열려 있는 동안 배경 스크롤을 잠그고 닫히면 원래 상태로 되돌린다.
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
