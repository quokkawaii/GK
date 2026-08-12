import { Container } from "@/components/ui/Container";

// 공통 첫 화면 영역에 표시할 문구다.
type PageHeroProps = Readonly<{
  eyebrow: string;
  title: string;
  description?: string;
}>;

// 여러 안내 페이지가 같은 첫 영역을 사용하도록 문구만 받아 표시한다.
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    /* 제목·설명으로 각 안내 페이지를 시작하는 공통 히어로 섹션이다. */
    <section className="!text-white">
      {/* 히어로 문구를 화면 너비 안에서 세로 중앙에 배치하는 영역이다. */}
      <Container className="bg-dark flex min-h-[240px] flex-col justify-center px-6 py-12 md:px-10 md:py-16">
        <p className="text-accent text-xs font-semibold tracking-[0.1em]">{eyebrow}</p>
        <h1 className="mt-3 max-w-[620px] text-[30px] font-bold tracking-[-0.06em] md:text-[40px]">
          {title}
        </h1>
        {description && (
          /* 해당 페이지에 전달된 경우에만 표시하는 보조 설명이다. */
          <p className="mt-3 max-w-[620px] text-sm leading-6 text-[#dddddd]">{description}</p>
        )}
      </Container>
    </section>
  );
}
