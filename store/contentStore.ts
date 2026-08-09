import { create } from "zustand";

import casesContent from "@/content/cases.json";
import siteContent from "@/content/site.json";
import type { ConstructionCase, SiteContent } from "@/types";

type ContentState = Readonly<{
  cases: readonly ConstructionCase[];
  site: SiteContent;
}>;

export const useContentStore = create<ContentState>(() => ({
  cases: casesContent.content,
  site: siteContent,
}));
