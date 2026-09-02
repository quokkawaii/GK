import type { CasesType, Image } from "./casesType-json";

export type CaseModalProps = {
  isOpen: boolean;
  caseItem: CasesType | null;
  onClose: () => void;
};

export type CaseModalGalleryProps = {
  images: Image[];
  activeImageIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onOpenViewer: () => void;
};

export type CaseModalInfoProps = {
  title: string;
  tags: string[];
  location: string | null;
  place: string;
  material: string;
  onClose: () => void;
};

export type PhotoViewerProps = {
  isOpen: boolean;
  images: Image[];
  activeImageIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSelectImage: (index: number) => void;
};
