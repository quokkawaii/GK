import { getCasesHero } from "@/func/cases/casesPageFunc-json";

const casesHeroJson = getCasesHero();

// 시공 사례 페이지의 히어로 영역을 표시한다.
export function CasesHero() {
  const { eyebrow, title, description } = casesHeroJson;

  return (
    <section
      className="border-border bg-canvas border-b"
      aria-labelledby="cases-title"
    >
      <div className="relative mx-auto min-h-[220px] w-[calc(100%_-_48px)] max-w-[1180px] py-11 pb-[42px] max-md:min-h-0 max-md:w-[calc(100%_-_32px)] max-md:py-9">
        <p className="text-primary m-0 mb-2 text-sm leading-[21px] font-semibold">
          {eyebrow}
        </p>
        <h1
          id="cases-title"
          className="m-0 max-w-[720px] text-[40px] leading-[1.2] font-bold tracking-[-0.07em] max-md:text-[34px]"
        >
          {title}
        </h1>
        <p className="text-body m-0 mt-3 max-w-[560px] text-base leading-[25px]">
          {description}
        </p>
      </div>
    </section>
  );
}
