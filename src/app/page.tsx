import { HomeHero } from "@/features/home/components/HomeHero";
import { HomeProducts } from "@/features/home/components/HomeProducts";
import { HomeRecentCases } from "@/features/home/components/HomeRecentCases";
import { getHomeProductCase, homeProducts, recentCases } from "@/lib/home-content";

export default function HomePage() {
  const locations = Object.fromEntries(
    homeProducts.map((id) => [id, getHomeProductCase(id)?.location ?? "시공 현장"]),
  );
  return (
    <>
      <HomeHero featuredCase={recentCases[0]} />
      <HomeRecentCases cases={recentCases} />
      <HomeProducts productIds={homeProducts} locations={locations} />
    </>
  );
}
