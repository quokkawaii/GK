"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import type { ConstructionCase } from "@/types";

type CaseDetailModalProps = Readonly<{
  caseItem: ConstructionCase;
  onClose: () => void;
}>;

export function CaseDetailModal({ caseItem, onClose }: CaseDetailModalProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const closeViewerButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const viewerPreviousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;

    return () => previousFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (isViewerOpen) {
        setIsViewerOpen(false);
      } else {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isViewerOpen, onClose]);

  useEffect(() => {
    const container = isViewerOpen ? viewerRef.current : dialogRef.current;

    if (!container) {
      return;
    }

    if (isViewerOpen) {
      closeViewerButtonRef.current?.focus();
    } else if (viewerPreviousFocusRef.current) {
      viewerPreviousFocusRef.current.focus();
      viewerPreviousFocusRef.current = null;
    } else {
      dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    }

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        container.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    container.addEventListener("keydown", handleTab);

    return () => container.removeEventListener("keydown", handleTab);
  }, [isViewerOpen]);

  const currentImage = caseItem.images[imageIndex];
  const hasMultipleImages = caseItem.images.length > 1;

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center md:inset-0 md:items-center md:p-[72px]">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="상세 팝업 닫기"
        onClick={onClose}
      />

      <section
        ref={dialogRef}
        className="bg-surface relative z-10 flex max-h-[92vh] w-full flex-col overflow-y-auto md:h-full md:max-w-[1180px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`case-title-${caseItem.id}`}
      >
        <header className="border-border bg-surface sticky top-0 z-10 flex items-center justify-between border-b px-5 py-4 md:px-8">
          <h2 id={`case-title-${caseItem.id}`} className="text-lg font-semibold tracking-[-0.04em]">
            {caseItem.title}
          </h2>
          <button
            type="button"
            className="border-border flex size-11 items-center justify-center border text-2xl"
            aria-label="상세 팝업 닫기"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="p-5 md:p-8">
          <div className="bg-dark relative flex min-h-[240px] items-center justify-center md:min-h-[420px]">
            {currentImage ? (
              <button
                type="button"
                className="relative h-[280px] w-full md:h-[480px]"
                aria-label="사진 크게 보기"
                onClick={() => {
                  viewerPreviousFocusRef.current = document.activeElement as HTMLElement | null;
                  setIsViewerOpen(true);
                }}
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </button>
            ) : (
              <p className="text-sm text-white">이미지가 없습니다</p>
            )}

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center bg-black/60 text-xl text-white"
                  aria-label="이전 사진"
                  onClick={() =>
                    setImageIndex(
                      (currentIndex) =>
                        (currentIndex - 1 + caseItem.images.length) % caseItem.images.length,
                    )
                  }
                >
                  ←
                </button>
                <button
                  type="button"
                  className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center bg-black/60 text-xl text-white"
                  aria-label="다음 사진"
                  onClick={() =>
                    setImageIndex((currentIndex) => (currentIndex + 1) % caseItem.images.length)
                  }
                >
                  →
                </button>
              </>
            )}
          </div>

          {hasMultipleImages && (
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-muted text-sm">
                {imageIndex + 1} / {caseItem.images.length}
              </span>
              <div className="flex gap-2 overflow-x-auto">
                {caseItem.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={`relative h-14 w-20 shrink-0 overflow-hidden border-2 ${
                      imageIndex === index ? "border-accent" : "border-transparent"
                    }`}
                    aria-label={`${index + 1}번째 사진 보기`}
                    onClick={() => setImageIndex(index)}
                  >
                    <Image src={image.src} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_280px]">
            <div>
              {caseItem.description && (
                <div>
                  <h3 className="text-base font-semibold">시공 내용</h3>
                  <p className="text-muted mt-2 text-sm leading-6 whitespace-pre-line">
                    {caseItem.description}
                  </p>
                </div>
              )}
            </div>
            <dl className="border-border border-t text-sm">
              <div className="border-border grid grid-cols-[88px_1fr] gap-4 border-b py-3">
                <dt className="font-semibold">장소</dt>
                <dd className="text-muted">{caseItem.location}</dd>
              </div>
              <div className="border-border grid grid-cols-[88px_1fr] gap-4 border-b py-3">
                <dt className="font-semibold">시공 자재</dt>
                <dd className="text-muted">{caseItem.productIds.join(" · ")}</dd>
              </div>
              <div className="border-border grid grid-cols-[88px_1fr] gap-4 border-b py-3">
                <dt className="font-semibold">태그</dt>
                <dd className="text-muted">{caseItem.tags.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {isViewerOpen && currentImage && (
        <div
          ref={viewerRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="사진 뷰어"
        >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="사진 뷰어 닫기"
            onClick={() => {
              setIsViewerOpen(false);
              viewerPreviousFocusRef.current?.focus();
            }}
          />
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="z-10 object-contain"
            sizes="100vw"
          />
          <button
            ref={closeViewerButtonRef}
            type="button"
            className="absolute top-5 right-5 z-20 flex size-11 items-center justify-center border border-white text-2xl text-white"
            aria-label="사진 뷰어 닫기"
            onClick={() => setIsViewerOpen(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
