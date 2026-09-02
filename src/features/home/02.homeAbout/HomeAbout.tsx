import homeJson from "@/content/home.json";
import { RouteLink } from "@/components/layout/RouteLink";
import { findByRouterKey } from "@/func/route/routeFunc";
import type { HomeContent } from "@/types/home/homeType-json";

const homeContent: HomeContent = homeJson;

// 홈 회사 소개 영역을 표시한다.
export default function HomeAbout() {
  const { titleLines, lead, paragraphs } = homeContent.about;
  const constructionGuideRoute = findByRouterKey("constructionGuide");

  if (!constructionGuideRoute) {
    return null;
  }

  return (
    <section
      className="bg-canvas px-6 py-[88px] max-md:px-4 max-md:py-14"
      id="company"
      aria-labelledby="company-title"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid grid-cols-2 items-start gap-16 max-md:flex max-md:flex-col max-md:gap-9">
          <div className="mb-9 max-w-[650px] max-md:mb-0">
            <h2
              id="company-title"
              className="m-0 text-[36px] leading-[1.25] tracking-[-0.06em] max-md:text-[29px]"
            >
              {titleLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <div className="text-body [&>.contact-number]:mt-6">
            <p className="m-0 text-[26px] font-bold tracking-[-0.05em]">{lead}</p>

            {paragraphs.map((paragraph, index) => (
              <p
                className={index === paragraphs.length - 1 ? "m-0" : "m-0 mb-3"}
                key={`${paragraph}-${index}`}
              >
                {paragraph}
              </p>
            ))}

            <RouteLink route={constructionGuideRoute} />
          </div>
        </div>
      </div>
    </section>
  );
}
