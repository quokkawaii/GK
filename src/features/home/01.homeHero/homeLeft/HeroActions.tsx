import { RouteLink } from "@/components/layout/RouteLink";
import { findByRouterKey } from "@/func/route/routeFunc";
import { RouteType } from "@/types/routes/routesType-json";

// 시공 사례 보기와 시공 안내 보기 링크를 배치한다.
export default function HeroActions() {
  const casesRoute = findByRouterKey("cases") as RouteType;
  const constructionGuideRoute = findByRouterKey("constructionGuide") as RouteType;

  return (
    <div className="mt-8 flex flex-wrap gap-2.5 max-md:w-full [&>.contact-number]:mt-0 [&>.contact-number]:h-auto [&>.contact-number]:min-h-12 [&>.contact-number]:rounded-[7px] [&>.contact-number]:px-5 [&>.contact-number]:py-3 [&>.contact-number]:font-semibold max-md:[&>.contact-number]:w-full">
      <RouteLink route={casesRoute} />
      <RouteLink route={constructionGuideRoute} />
    </div>
  );
}
