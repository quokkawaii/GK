import type { Metadata } from "next";

import { Cases } from "@/features/cases/Cases";
import { getCasesMetadata } from "@/func/cases/casesPageFunc-json";

const casesMetadata = getCasesMetadata();

export const metadata: Metadata = casesMetadata;

// 시공 사례 페이지를 표시한다.
export default function CasesPage() {
  return <Cases />;
}
