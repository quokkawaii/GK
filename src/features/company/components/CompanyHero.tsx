import { PageHero } from "@/components/ui/PageHero";
type CompanyHeroProps = Readonly<{ title: string }>;
// 회사 소개 제목을 공용 첫 영역으로 표시한다.
export function CompanyHero({ title }: CompanyHeroProps) {
  return <PageHero eyebrow="ABOUT GK INDUSTRY" title={title} />;
}
