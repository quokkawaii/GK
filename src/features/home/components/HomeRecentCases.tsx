import { Container } from "@/components/ui/Container";
import { HomeCaseCards } from "@/features/home/components/HomeCaseCards";
import type { ConstructionCase } from "@/types";

// 홈 최근 사례 영역에 표시할 사례 목록이다.
type HomeRecentCasesProps = Readonly<{ cases: readonly ConstructionCase[] }>;

// 최근 사례 섹션의 제목과 홈 전용 카드 그리드를 조립한다.
export function HomeRecentCases({ cases }: HomeRecentCasesProps) {
  return (
    /* 최근 사례 제목과 카드 목록을 보여 주는 홈 섹션이다. */
    <section className="toss-section bg-surface">
      <Container>
        {/* 섹션 제목과 전체 사례 이동 링크를 나란히 배치하는 머리글이다. */}
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-accent text-xs font-semibold tracking-[0.1em]">
              RECENT CASE STUDIES
            </p>
            <h2 className="toss-section-title mt-1 font-bold">최근 시공 사례</h2>
          </div>
          {/* 전체 시공 사례 목록으로 이동하는 보조 링크다. */}
          <a href="/cases" className="text-sm font-semibold text-[#1b64da]">
            시공 사례 보기 →
          </a>
        </div>
        {/* 최근 사례를 선택해 상세 팝업을 열 수 있는 카드 목록이다. */}
        <HomeCaseCards cases={cases} />
      </Container>
    </section>
  );
}
