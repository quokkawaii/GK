"use client";

import { useEffect, useState } from "react";

import { HERO_SLIDE_INTERVAL } from "@/constants/homeConstance";
import { getCasesLength } from "@/func/cases/casesFunc";

// 현재 시공 사례 id를 일정 시간마다 증가시킨다.
export function useHeroCaseSlider(): number {
  const [currentId, setCurrentId] = useState(1);
  const casesLength = getCasesLength();

  useEffect(() => {
    if (casesLength <= 1) {
      return;
    }

    const timerId = window.setInterval(() => {
      setCurrentId((id) => (id >= casesLength ? 1 : id + 1));
    }, HERO_SLIDE_INTERVAL);

    return () => {
      window.clearInterval(timerId);
    };
  }, [casesLength]);

  return currentId;
}
