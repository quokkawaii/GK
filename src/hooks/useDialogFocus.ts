"use client";

import { RefObject, useEffect } from "react";

// 다이얼로그 안에 키보드 초점을 가두고 Escape와 닫힌 뒤 복귀를 처리한다.
export function useDialogFocus(
  containerRef: RefObject<HTMLElement | null>,
  onClose: () => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled || !containerRef.current) return;
    const container = containerRef.current;
    const previous = document.activeElement as HTMLElement | null;
    const focusables = () =>
      Array.from(
        container.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));
    focusables()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    container.addEventListener("keydown", onKeyDown);
    return () => {
      container.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [containerRef, onClose, enabled]);
}
