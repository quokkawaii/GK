import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { ConstructionCase } from "@/types";

// 홈 첫 화면에 사용할 대표 사례다.
type HomeHeroProps = Readonly<{ featuredCase: ConstructionCase }>;

// 대표 사례와 사례 목록 이동을 홈 첫 화면에 표시한다.
export function HomeHero({ featuredCase }: HomeHeroProps) {
  const image = featuredCase.images[featuredCase.thumbnailIndex];
  return (
    /* 대표 사례와 목록 이동을 보여 주는 홈 첫 화면 영역이다. */
    <section className="text-white">
      {/* 소개 문구와 대표 사진을 두 영역으로 배치하는 화면 너비 컨테이너다. */}
      <Container className="bg-dark grid overflow-hidden md:grid-cols-[1.04fr_0.96fr]">
        {/* 서비스 소개 문구와 사례 목록 이동 버튼을 담는 영역이다. */}
        <div className="flex flex-col justify-center gap-5 px-6 py-9 md:gap-6 md:px-10 md:py-12 md:pr-11">
          <p className="text-xs font-semibold tracking-[0.13em] text-[#ef875d]">GK INDUSTRY</p>
          <h1 className="text-[32px] leading-tight font-bold tracking-[-0.06em] md:text-[40px]">
            현장에 맞는
            <br />
            바닥 시공
          </h1>
          {/* 전체 시공 사례 목록으로 이동하는 주요 버튼이다. */}
          <Link
            href="/cases"
            className="bg-accent flex min-h-11 w-fit items-center px-4 text-sm font-semibold text-white"
          >
            시공 사례 보기
          </Link>
        </div>
        {/* 대표 사례의 thumbnailIndex 사진을 표시하는 이미지 영역이다. */}
        <div className="relative min-h-[180px] overflow-hidden bg-[#5d5a55] md:min-h-[280px]">
          {image && (
            /* 정적 사례 데이터에서 선택한 대표 사진이다. */
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
