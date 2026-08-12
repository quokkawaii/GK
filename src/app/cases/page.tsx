import type { Metadata } from "next";

import casesContent from "@/content/cases.json";
import { CasesScreen } from "@/features/cases/components/CasesScreen";

export const metadata: Metadata = {
  title: "시공 사례",
  description: "GK 산업의 바닥 시공 사례를 사진과 현장 정보로 확인해 보세요.",
};

// 정적 사례 데이터를 사례 목록 화면에 전달한다.
export default function CasesPage() {
  // 필터·목록·상세 팝업을 포함한 사례 기능 화면이다.
  return <CasesScreen cases={casesContent.content} />;
}
