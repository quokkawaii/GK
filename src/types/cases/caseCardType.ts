import type { CasesType } from "./casesType-json";

export type CaseCardProps = {
  caseItem: CasesType;
  onSelect: (caseItem: CasesType) => void;
};
