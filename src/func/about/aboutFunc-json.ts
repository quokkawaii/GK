import aboutJson from "@/content/about.json";
import type { AboutJson } from "@/types/about/aboutType-json";

// about.json의 회사 소개 데이터를 반환한다.
export const getAboutJson = (): AboutJson => aboutJson;
