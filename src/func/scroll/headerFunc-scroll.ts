import { HEADER_SCROLL_THRESHOLD } from "@/constants/headerConstance";
import type { HeaderScrollState } from "@/types/headerScrollType";

// 현재 스크롤 위치와 이전 위치를 비교해 헤더 숨김 상태를 계산한다.
export function updateHeader(state: HeaderScrollState, currentScrollY: number) {
  const isHidden =
    currentScrollY > HEADER_SCROLL_THRESHOLD && currentScrollY > state.lastScrollY;

  state.lastScrollY = currentScrollY;
  state.ticking = false;

  return {
    state,
    isHidden,
  };
}
