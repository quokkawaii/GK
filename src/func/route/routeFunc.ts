import type { RouteType } from "@/types/routes/routesType-json";
import routeJson from "@/content/routes.json";

export const findByRouterKey = (routerKey: string) => {
  const routes: RouteType[] = routeJson;
  return routes.find((router) => router.routerKey == routerKey);
};
