import constructionGuideJson from "@/content/constructionGuide.json";
import type { ConstructionGuideJson } from "@/types/constructionGuide/constructionGuideType-json";

// constructionGuide.json의 시공 안내 데이터를 반환한다.
export const getConstructionGuideJson = (): ConstructionGuideJson => constructionGuideJson;
