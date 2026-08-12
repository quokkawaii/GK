import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { ConstructionCase } from "@/types";

type HomeHeroProps = Readonly<{ featuredCase: ConstructionCase }>;

// 대표 사례와 사례 목록 이동을 홈 첫 화면에 표시한다.
export function HomeHero({ featuredCase }: HomeHeroProps) {
  const image = featuredCase.images[featuredCase.thumbnailIndex];
  return (
    <section className="text-white">
      <Container className="bg-dark grid overflow-hidden md:grid-cols-[1.04fr_0.96fr]">
        <div className="flex flex-col justify-center gap-5 px-6 py-9 md:gap-6 md:px-10 md:py-12 md:pr-11">
          <p className="text-xs font-semibold tracking-[0.13em] text-[#ef875d]">GK INDUSTRY</p>
          <h1 className="text-[32px] leading-tight font-bold tracking-[-0.06em] md:text-[40px]">
            현장에 맞는
            <br />
            바닥 시공
          </h1>
          <Link
            href="/cases"
            className="bg-accent flex min-h-11 w-fit items-center px-4 text-sm font-semibold text-white"
          >
            시공 사례 보기
          </Link>
        </div>
        <div className="relative min-h-[180px] overflow-hidden bg-[#5d5a55] md:min-h-[280px]">
          {image && (
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
