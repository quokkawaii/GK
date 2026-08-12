"use client";

import Image from "next/image";
import { useState } from "react";
import { useImageGallery } from "@/hooks/useImageGallery";
import type { CaseImage } from "@/types";

// 사례 또는 제품 상세에서 표시할 사진 배열이다.
type ImageGalleryProps = Readonly<{ images: readonly CaseImage[] }>;

// 이미지 배열을 받아 사진 선택·이전·다음·큰 사진 보기를 제공한다.
export function ImageGallery({ images }: ImageGalleryProps) {
  const gallery = useImageGallery(images.length);
  const [viewerOpen, setViewerOpen] = useState(false);
  const current = images[gallery.currentIndex];
  if (!current)
    return (
      /* 사진 데이터가 없을 때 갤러리 영역 대신 표시하는 안내다. */
      <div className="bg-dark flex min-h-[240px] items-center justify-center text-sm text-white">
        이미지가 없습니다
      </div>
    );
  return (
    /* 현재 사진, 사진 이동, 큰 사진 보기를 관리하는 갤러리 전체 영역이다. */
    <div>
      {/* 현재 선택한 사진과 이전·다음 버튼을 겹쳐 표시하는 무대 영역이다. */}
      <div className="bg-dark relative flex min-h-[240px] items-center justify-center md:min-h-[420px]">
        {/* 현재 사진을 큰 사진 보기로 여는 버튼이다. */}
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
            {/* 이전 사진으로 순환 이동하는 버튼이다. */}
            <button
              type="button"
              className="absolute top-1/2 left-3 size-11 -translate-y-1/2 bg-black/60 text-xl text-white"
              aria-label="이전 사진"
              onClick={gallery.previous}
            >
              ←
            </button>
            {/* 다음 사진으로 순환 이동하는 버튼이다. */}
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
        /* 사진 수와 원하는 사진 선택 버튼을 함께 표시하는 갤러리 하단 영역이다. */
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-muted text-sm">
            {gallery.currentIndex + 1} / {images.length}
          </span>
          {/* 작은 화면에서도 모든 사진을 고를 수 있도록 가로 스크롤하는 썸네일 목록이다. */}
          <div className="flex gap-2 overflow-x-auto">
            {images.map((image, index) => (
              /* 해당 순서의 사진을 현재 사진으로 바꾸는 썸네일 버튼이다. */
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
        /* 현재 사진을 화면 전체에 확대해 표시하는 사진 뷰어다. */
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="사진 뷰어"
        >
          {/* 뷰어 바깥을 누르면 큰 사진 보기를 닫는 배경 버튼이다. */}
          <button
            type="button"
            className="absolute inset-0"
            aria-label="사진 뷰어 닫기"
            onClick={() => setViewerOpen(false)}
          />
          {/* 원본 비율을 유지해 확대 표시하는 현재 사진이다. */}
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="z-10 object-contain"
            sizes="100vw"
          />
          {/* 큰 사진 보기를 닫는 명시적인 닫기 버튼이다. */}
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
