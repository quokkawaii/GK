"use client";

import Image from "next/image";
import { useState } from "react";
import { useImageGallery } from "@/hooks/useImageGallery";
import type { CaseImage } from "@/types";

type ImageGalleryProps = Readonly<{ images: readonly CaseImage[] }>;

// 이미지 배열을 받아 사진 선택·이전·다음·큰 사진 보기를 제공한다.
export function ImageGallery({ images }: ImageGalleryProps) {
  const gallery = useImageGallery(images.length);
  const [viewerOpen, setViewerOpen] = useState(false);
  const current = images[gallery.currentIndex];
  if (!current)
    return (
      <div className="bg-dark flex min-h-[240px] items-center justify-center text-sm text-white">
        이미지가 없습니다
      </div>
    );
  return (
    <div>
      <div className="bg-dark relative flex min-h-[240px] items-center justify-center md:min-h-[420px]">
        <button
          type="button"
          className="relative h-[280px] w-full md:h-[480px]"
          aria-label="사진 크게 보기"
          onClick={() => setViewerOpen(true)}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </button>
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="absolute top-1/2 left-3 size-11 -translate-y-1/2 bg-black/60 text-xl text-white"
              aria-label="이전 사진"
              onClick={gallery.previous}
            >
              ←
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-3 size-11 -translate-y-1/2 bg-black/60 text-xl text-white"
              aria-label="다음 사진"
              onClick={gallery.next}
            >
              →
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-muted text-sm">
            {gallery.currentIndex + 1} / {images.length}
          </span>
          <div className="flex gap-2 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`relative h-14 w-20 shrink-0 overflow-hidden border-2 ${gallery.currentIndex === index ? "border-accent" : "border-transparent"}`}
                aria-label={`${index + 1}번째 사진 보기`}
                onClick={() => gallery.selectImage(index)}
              >
                <Image src={image.src} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>
      )}
      {viewerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="사진 뷰어"
        >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="사진 뷰어 닫기"
            onClick={() => setViewerOpen(false)}
          />
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="z-10 object-contain"
            sizes="100vw"
          />
          <button
            type="button"
            className="absolute top-5 right-5 z-20 size-11 border border-white text-2xl text-white"
            aria-label="사진 뷰어 닫기"
            onClick={() => setViewerOpen(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
