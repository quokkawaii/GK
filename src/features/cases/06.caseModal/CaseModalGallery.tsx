import type { CaseModalGalleryProps } from "@/types/cases/caseModalType";

export function CaseModalGallery({
  images,
  activeImageIndex,
  onPrevious,
  onNext,
  onOpenViewer,
}: CaseModalGalleryProps) {
  const activeImage = images[activeImageIndex];

  return (
    <div className="bg-foreground relative h-[70vh] max-h-[720px] min-h-[520px] max-md:h-[44vh] max-md:max-h-[520px] max-md:min-h-[280px]">
      <button
        className="block h-full w-full cursor-zoom-in p-0"
        type="button"
        aria-label="사진 크게 보기"
        onClick={onOpenViewer}
      >
        <img className="h-full w-full object-contain" src={activeImage.src} alt={activeImage.alt} />
      </button>

      {images.length > 1 && (
        <>
          <button
            className="bg-foreground/60 absolute top-1/2 left-4 size-10 -translate-y-1/2 rounded-md border border-white/60 text-2xl text-white"
            type="button"
            aria-label="이전 사진"
            onClick={onPrevious}
          >
            ‹
          </button>

          <button
            className="bg-foreground/60 absolute top-1/2 right-4 size-10 -translate-y-1/2 rounded-md border border-white/60 text-2xl text-white"
            type="button"
            aria-label="다음 사진"
            onClick={onNext}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
