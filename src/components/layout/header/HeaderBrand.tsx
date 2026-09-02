import { findByRouterKey } from "@/func/route/routeFunc";
import { RouteType } from "@/types/routes/routesType-json";
import Link from "next/link";

// 홈으로 이동하는 지케이 산업 브랜드 영역을 표시한다.
export function HeaderBrand() {
  const routeKey = "home";
  const route = findByRouterKey(routeKey) as RouteType;

  return (
    <Link className="brand" href={route?.route} aria-label="지케이 산업 홈으로 이동">
      <img className="brand-mark" src="/images/gk-favicon.svg" alt="" />
      지케이 <em>산업</em>
    </Link>
  );
}
