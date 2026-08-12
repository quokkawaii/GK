import { Container } from "@/components/ui/Container";
import { HomeCaseCards } from "@/features/home/components/HomeCaseCards";
import type { ConstructionCase } from "@/types";

type HomeRecentCasesProps = Readonly<{ cases: readonly ConstructionCase[] }>;

// 최근 사례 섹션의 제목과 홈 전용 카드 그리드를 조립한다.
export function HomeRecentCases({ cases }: HomeRecentCasesProps) {
  return (
    <section className="bg-surface py-12 md:py-16">
      <Container>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-accent text-xs font-semibold tracking-[0.1em]">
              RECENT CASE STUDIES
            </p>
            <h2 className="mt-1 text-[24px] font-bold tracking-[-0.05em] md:text-[28px]">
              최근 시공 사례
            </h2>
          </div>
          <a href="/cases" className="border-text border-b pb-0.5 text-xs font-semibold">
            시공 사례 보기 →
          </a>
        </div>
        <HomeCaseCards cases={cases} />
      </Container>
    </section>
  );
}
