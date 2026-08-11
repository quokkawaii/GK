import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import siteContent from "@/content/site.json";

export const metadata: Metadata = {
  title: "회사 소개",
  description: "GK 산업의 바닥 시공 범위와 전화 문의 정보를 확인해 보세요.",
};

export default function CompanyPage() {
  return (
    <div>
      <section className="!text-white">
        <Container className="bg-dark flex min-h-[240px] flex-col justify-center px-6 py-12 md:px-10 md:py-16">
          <p className="text-xs font-semibold tracking-[0.12em] text-[#ef875d]">
            ABOUT GK INDUSTRY
          </p>
          <h1 className="mt-3 max-w-[620px] text-[30px] leading-tight font-bold tracking-[-0.06em] md:text-[40px]">
            {siteContent.about.title}
          </h1>
        </Container>
      </section>

      <section className="py-10 md:py-14">
        <Container className="max-w-[860px]">
          <h2 className="text-xl font-bold tracking-[-0.04em]">{siteContent.about.lead}</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[#555555] md:text-base">
            {siteContent.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="border-border bg-border mt-8 grid gap-px border sm:grid-cols-2">
            {siteContent.serviceScopes.map((scope) => (
              <div key={scope.name} className="bg-white p-4">
                <h3 className="text-sm font-semibold">{scope.name}</h3>
                <p className="mt-1 text-xs text-[#666666]">{scope.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm leading-7 text-[#555555] md:text-base">
            {siteContent.about.closing}
          </p>

          <section className="mt-8 bg-[#f3f1ef] p-5 md:flex md:items-center md:justify-between md:gap-5">
            <div>
              <h2 className="text-base font-semibold">바닥 시공 문의</h2>
              <p className="mt-1 text-xs leading-5 text-[#555555]">
                시공 사례와 사용 제품 정보를 확인하신 뒤 전화로 문의해 주세요.
              </p>
            </div>
            {siteContent.phone ? (
              <a
                href={`tel:${siteContent.phone.replaceAll("-", "")}`}
                className="bg-accent mt-4 flex min-h-11 items-center justify-center px-4 text-sm font-semibold !text-white md:mt-0"
              >
                전화 문의 {siteContent.phone}
              </a>
            ) : (
              <span className="mt-4 text-sm text-[#606060] md:mt-0">전화번호 준비 중</span>
            )}
          </section>
        </Container>
      </section>
    </div>
  );
}
