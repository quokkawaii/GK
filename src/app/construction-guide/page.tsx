import type { Metadata } from "next";

import { ConstructionGuide } from "@/features/constructionGuide/ConstructionGuide";
import { getConstructionGuideJson } from "@/func/constructionGuide/constructionGuideFunc-json";

const constructionGuideJson = getConstructionGuideJson();

export const metadata: Metadata = constructionGuideJson.metadata;

// 시공 안내 페이지를 표시한다.
export default function ConstructionGuidePage() {
  return <ConstructionGuide constructionGuideJson={constructionGuideJson} />;
}
