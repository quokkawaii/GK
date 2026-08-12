import { PageHero } from "@/components/ui/PageHero";
// 회사 소개 첫 화면에 표시할 제목이다.
type CompanyHeroProps = Readonly<{ title: string }>;
// 회사 소개 제목을 공용 첫 영역으로 표시한다.
export function CompanyHero({ title }: CompanyHeroProps) {
  // 회사 소개 주소에서 공통 히어로에 전달하는 제목·문구 영역이다.
  return <PageHero eyebrow="ABOUT GK INDUSTRY" title={title} />;
}
