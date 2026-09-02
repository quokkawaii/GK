import homeJson from "@/content/home.json";
import type { HomeContent } from "@/types/home/homeType-json";

// home.json의 홈 콘텐츠를 반환한다.
export const getHomeContent = (): HomeContent => homeJson;
