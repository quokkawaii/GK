import HomeHeroLeft from "./homeLeft/HomeHeroLeft";
import HomeHeroRight from "./homeRight/HomeHeroRight";

// 홈 첫 화면의 전체 히어로 영역을 배치한다.
export default function HomeHero() {
  return (
    <section className="bg-canvas m-0 w-full" aria-labelledby="hero-title">
      <div className="mx-auto grid min-h-[520px] w-[calc(100%_-_48px)] max-w-[1180px] grid-cols-2 items-center gap-16 py-[72px] pb-[88px] max-md:flex max-md:min-h-0 max-md:flex-col max-md:gap-9 max-md:py-[84px] max-md:pb-16">
        <HomeHeroLeft />
        <HomeHeroRight />
      </div>
    </section>
  );
}
