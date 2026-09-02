"use client";

import { useEffect, useState } from "react";

import type { CaseModalProps } from "@/types/cases/caseModalType";

import { CaseModalGallery } from "./CaseModalGallery";
import { CaseModalInfo } from "./CaseModalInfo";
import { PhotoViewer } from "../07.photoViewer/PhotoViewer";

export function CaseModal({ isOpen, caseItem, onClose }: CaseModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(0);
      setIsViewerOpen(false);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, caseItem?.id]);

  if (!isOpen || caseItem === null) {
    return null;
  }

  const moveImage = (step: number) => {
    const nextIndex = (activeImageIndex + step + caseItem.images.length) % caseItem.images.length;

    setActiveImageIndex(nextIndex);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-30 grid place-items-center bg-[rgb(0_12_30_/_64%)] p-6 max-md:items-end max-md:p-0"
        role="presentation"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          className="bg-canvas grid max-h-[calc(100vh-64px)] min-h-[520px] w-full max-w-[1320px] grid-cols-[1.1fr_0.9fr] overflow-auto rounded-md max-md:block max-md:max-h-[90vh] max-md:min-h-0 max-md:rounded-t-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-modal-title"
        >
          <CaseModalGallery
            images={caseItem.images}
            activeImageIndex={activeImageIndex}
            onPrevious={() => moveImage(-1)}
            onNext={() => moveImage(1)}
            onOpenViewer={() => setIsViewerOpen(true)}
          />

          <CaseModalInfo
            title={caseItem.title}
            tags={caseItem.tags}
            location={caseItem.location}
            place={caseItem.place}
            material={caseItem.material}
            onClose={onClose}
          />
        </div>
      </div>

      <PhotoViewer
        isOpen={isViewerOpen}
        images={caseItem.images}
        activeImageIndex={activeImageIndex}
        onClose={() => setIsViewerOpen(false)}
        onPrevious={() => moveImage(-1)}
        onNext={() => moveImage(1)}
        onSelectImage={setActiveImageIndex}
      />
    </>
  );
}
