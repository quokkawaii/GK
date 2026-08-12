import type { Metadata } from "next";

import casesContent from "@/content/cases.json";
import { CasesScreen } from "@/features/cases/components/CasesScreen";

export const metadata: Metadata = {
  title: "시공 사례",
  description: "GK 산업의 바닥 시공 사례를 사진과 현장 정보로 확인해 보세요.",
};

export default function CasesPage() {
  return <CasesScreen cases={casesContent.content} />;
}
