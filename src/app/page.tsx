import HomeHero from "@/features/home/01.homeHero/HomeHero";
import HomeAbout from "@/features/home/02.homeAbout/HomeAbout";
import HomeSpaces from "@/features/home/03.homeSpaces/HomeSpaces";
import { HomeFeaturedCases } from "@/features/home/04.homeFeaturedCases/HomeFeaturedCases";

// 홈 페이지의 임시 콘텐츠를 표시한다.
export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeSpaces />
      <HomeFeaturedCases />
    </>
  );
}
