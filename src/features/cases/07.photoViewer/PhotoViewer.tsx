import type { PhotoViewerProps } from "@/types/cases/caseModalType";

export function PhotoViewer({
  isOpen,
  images,
  activeImageIndex,
  onClose,
  onPrevious,
  onNext,
  onSelectImage,
}: PhotoViewerProps) {
  if (!isOpen) {
    return null;
  }

  const activeImage = images[activeImageIndex];

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col bg-[rgb(0_12_30_/_94%)] text-white"
      role="dialog"
      aria-modal="true"
      aria-label="시공 사진"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex min-h-16 items-center justify-between px-6">
        <span className="text-sm font-semibold">시공 사진</span>

        <button
          className="size-10 rounded-md border border-white/55 text-2xl"
          type="button"
          aria-label="사진 확대 닫기"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-6 py-4">
        <img
          className="h-auto max-h-[calc(100vh-180px)] w-auto max-w-[calc(100vw-48px)] object-contain max-md:max-h-[calc(100vh-160px)] max-md:max-w-[calc(100vw-32px)]"
          src={activeImage.src}
          alt={activeImage.alt}
        />

        {images.length > 1 && (
          <>
            <button
              className="bg-foreground/50 absolute top-1/2 left-6 size-10 -translate-y-1/2 rounded-md border border-white/55 text-2xl"
              type="button"
              aria-label="이전 사진"
              onClick={onPrevious}
            >
              ‹
            </button>

            <button
              className="bg-foreground/50 absolute top-1/2 right-6 size-10 -translate-y-1/2 rounded-md border border-white/55 text-2xl"
              type="button"
              aria-label="다음 사진"
              onClick={onNext}
            >
              ›
            </button>
          </>
        )}
      </div>

      <p className="m-0 border-t border-white/15 px-6 py-4 text-center text-sm text-white/70">
        {activeImageIndex + 1} / {images.length}
      </p>

      <div className="flex justify-center gap-2 overflow-x-auto px-6 pb-6">
        {images.map((image, index) => (
          <button
            className="size-16 overflow-hidden rounded-md border-2 border-transparent"
            type="button"
            key={image.src}
            aria-label={`사진 ${index + 1} 보기`}
            onClick={() => onSelectImage(index)}
          >
            <img className="h-full w-full object-cover" src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
    </div>
  );
}
