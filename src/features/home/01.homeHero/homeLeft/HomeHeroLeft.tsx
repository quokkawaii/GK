import HeroActions from "./HeroActions";
import HeroContent from "./HeroContent";

// 히어로 왼쪽의 문구 영역과 링크 영역을 배치한다.
export default function HomeHeroLeft() {
  return (
    <div>
      <HeroContent />
      <HeroActions />
    </div>
  );
}
