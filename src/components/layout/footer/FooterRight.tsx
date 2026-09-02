import { RouteLink } from "@/components/layout/RouteLink";
import { FooterRightInfo } from "@/components/layout/footer/FooterRightInfo";
import { findByRouterKey } from "@/func/route/routeFunc";
import { RouteType } from "@/types/routes/routesType-json";

// 푸터 오른쪽 영역을 표시한다.
export function FooterRight() {
  const routerKey = "constructionGuide";
  const route = findByRouterKey(routerKey) as RouteType;

  return (
    <div className="footer-right">
      <FooterRightInfo />
      <RouteLink route={route} />
    </div>
  );
}
