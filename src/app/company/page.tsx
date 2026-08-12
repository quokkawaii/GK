import type { Metadata } from "next";
import siteContent from "@/content/site.json";
import { Container } from "@/components/ui/Container";
import { CompanyContact } from "@/features/company/components/CompanyContact";
import { CompanyHero } from "@/features/company/components/CompanyHero";
import { CompanyIntroduction } from "@/features/company/components/CompanyIntroduction";
import { CompanyServiceScopes } from "@/features/company/components/CompanyServiceScopes";

export const metadata: Metadata = {
  title: "회사 소개",
  description: "GK 산업의 바닥 시공 범위와 전화 문의 정보를 확인해 보세요.",
};

// 회사 소개 데이터를 준비하고 네 개의 화면 섹션을 조립한다.
export default function CompanyPage() {
  return (
    <>
      {/* 회사 소개 제목을 표시하는 공통 첫 화면이다. */}
      <CompanyHero title={siteContent.about.title} />
      {/* 소개 문구, 시공 범위, 전화 문의를 담는 회사 소개 본문이다. */}
      <section className="py-10 md:py-14">
        <Container className="max-w-[860px]">
          {/* site.json의 회사 소개 문구를 표시하는 영역이다. */}
          <CompanyIntroduction
            lead={siteContent.about.lead}
            body={siteContent.about.body}
            closing={siteContent.about.closing}
          />
          {/* 회사가 안내하는 시공 범위를 카드로 표시하는 영역이다. */}
          <CompanyServiceScopes scopes={siteContent.serviceScopes} />
          {/* 필수 전화번호로 연결하는 문의 영역이다. */}
          <CompanyContact phone={siteContent.phone} />
        </Container>
      </section>
    </>
  );
}
