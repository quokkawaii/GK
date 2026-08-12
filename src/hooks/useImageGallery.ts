"use client";

import { useState } from "react";

// 이미지 배열에서 현재 사진과 앞뒤 이동 동작을 제공한다.
export function useImageGallery(imageCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const move = (offset: number) =>
    setCurrentIndex((current) => (imageCount ? (current + offset + imageCount) % imageCount : 0));
  return {
    currentIndex,
    selectImage: setCurrentIndex,
    previous: () => move(-1),
    next: () => move(1),
  };
}
