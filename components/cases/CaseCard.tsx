import Image from "next/image";

import type { ConstructionCase } from "@/types";

type CaseCardProps = Readonly<{
  caseItem: ConstructionCase;
  onOpen: () => void;
}>;

export function CaseCard({ caseItem, onOpen }: CaseCardProps) {
  const thumbnail = caseItem.images[caseItem.thumbnailIndex];

  return (
    <button
      type="button"
      className="group border-border bg-surface border text-left"
      onClick={onOpen}
      aria-label={`${caseItem.title} 상세 보기`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#85817a]">
        {thumbnail ? (
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 767px) 50vw, 25vw"
          />
        ) : (
          <span className="flex h-full items-center justify-center text-sm text-white">
            이미지가 없습니다
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-accent text-xs font-semibold">{caseItem.tags.join(" · ")}</p>
        <h2 className="mt-1 text-lg font-semibold tracking-[-0.04em]">{caseItem.title}</h2>
        <p className="text-muted mt-1 text-sm">{caseItem.location}</p>
      </div>
    </button>
  );
}
