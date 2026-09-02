import homeJson from "@/content/home.json";
import type { HomeContent } from "@/types/home/homeType-json";

const homeContent: HomeContent = homeJson;

// 히어로 왼쪽의 소개 문구, 제목, 설명을 표시한다.
export default function HeroContent() {
  const { eyebrow, titleLines, description } = homeContent.hero;

  return (
    <>
      <p className="text-primary m-0 text-xs font-bold tracking-[0.13em]">{eyebrow}</p>

      <h1
        id="hero-title"
        className="m-[16px_0_20px] text-[clamp(36px,4.5vw,58px)] leading-[1.12] tracking-[-0.08em] max-md:text-[40px]"
      >
        {titleLines.map((line, index) => (
          <span key={`${line}-${index}`}>
            {index > 0 && <br />}
            {line}
          </span>
        ))}
      </h1>

      <p className="text-body m-0 max-w-[560px] text-[17px] leading-[27px] break-keep max-md:text-base">
        {description}
      </p>
    </>
  );
}
