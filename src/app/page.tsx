import { HomeHero } from "@/features/home/components/HomeHero";
import { HomeProducts } from "@/features/home/components/HomeProducts";
import { HomeRecentCases } from "@/features/home/components/HomeRecentCases";
import { getHomeProductCase, homeProducts, recentCases } from "@/lib/home-content";

// 홈에 필요한 최근 사례와 제품 데이터를 준비해 각 화면 섹션에 전달한다.
export default function HomePage() {
  const locations = Object.fromEntries(
    homeProducts.map((id) => [id, getHomeProductCase(id)?.location ?? "시공 현장"]),
  );
  return (
    <>
      {/* 대표 사례와 사례 목록 이동을 안내하는 홈 첫 화면이다. */}
      <HomeHero featuredCase={recentCases[0]} />
      {/* 최신 사례 카드와 상세 팝업을 제공하는 홈 사례 영역이다. */}
      <HomeRecentCases cases={recentCases} />
      {/* 주요 사용 제품과 제품 목록 이동을 제공하는 홈 제품 영역이다. */}
      <HomeProducts productIds={homeProducts} locations={locations} />
    </>
  );
}
