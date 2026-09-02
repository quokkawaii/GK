export type ConstructionGuideMetadata = {
  title: string;
  description: string;
};

export type ConstructionGuideItem = {
  title: string;
  description: string;
};

export type ConstructionGuideStep = {
  number: string;
  title: string;
  description: string;
};

export type ConstructionGuideSection = {
  eyebrow: string;
  titleLines: string[];
  description: string;
};

export type ConstructionGuideProcess = ConstructionGuideSection & {
  steps: ConstructionGuideStep[];
};

export type ConstructionGuideBeforeContact = ConstructionGuideSection & {
  items: ConstructionGuideItem[];
};

export type ConstructionGuideOnSiteCheck = {
  eyebrow: string;
  titleLines: string[];
  items: ConstructionGuideItem[];
};

export type ConstructionGuideSpace = {
  label: string;
  routeKey: string;
  filter: {
    place: string;
    material: string;
  };
};

export type ConstructionGuideSpaces = ConstructionGuideSection & {
  items: ConstructionGuideSpace[];
};

export type ConstructionGuideJson = {
  metadata: ConstructionGuideMetadata;
  hero: ConstructionGuideSection;
  beforeContact: ConstructionGuideBeforeContact;
  estimateProcess: ConstructionGuideProcess;
  constructionProcess: ConstructionGuideProcess;
  onSiteCheck: ConstructionGuideOnSiteCheck;
  spaces: ConstructionGuideSpaces;
};

export type ConstructionGuideProps = {
  constructionGuideJson: ConstructionGuideJson;
};

export type ConstructionGuideSectionProps = {
  section: ConstructionGuideSection;
};

export type ConstructionGuideProcessProps = {
  process: ConstructionGuideProcess;
};
