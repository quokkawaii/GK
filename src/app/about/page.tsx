import type { Metadata } from "next";

import { About } from "@/features/about/About";
import { getAboutJson } from "@/func/about/aboutFunc-json";

const aboutJson = getAboutJson();

export const metadata: Metadata = aboutJson.metadata;

// 회사 소개 페이지를 표시한다.
export default function AboutPage() {
  return <About aboutJson={aboutJson} />;
}
