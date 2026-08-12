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
      <CompanyHero title={siteContent.about.title} />
      <section className="py-10 md:py-14">
        <Container className="max-w-[860px]">
          <CompanyIntroduction
            lead={siteContent.about.lead}
            body={siteContent.about.body}
            closing={siteContent.about.closing}
          />
          <CompanyServiceScopes scopes={siteContent.serviceScopes} />
          <CompanyContact phone={siteContent.phone} />
        </Container>
      </section>
    </>
  );
}
