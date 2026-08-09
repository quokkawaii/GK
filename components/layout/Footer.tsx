import siteContent from "@/content/site.json";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-dark py-8 text-[#dddddd]">
      <Container className="flex flex-col gap-5 text-sm md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold !text-white">{siteContent.companyName}</p>
          {siteContent.serviceArea && (
            <p className="mt-2 text-xs">서비스 지역: {siteContent.serviceArea}</p>
          )}
          {siteContent.address && <p className="mt-1 text-xs">주소: {siteContent.address}</p>}
          {siteContent.businessInfo && <p className="mt-1 text-xs">{siteContent.businessInfo}</p>}
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          {siteContent.phone ? (
            <a
              href={`tel:${siteContent.phone.replaceAll("-", "")}`}
              className="hover:text-accent font-semibold !text-white"
            >
              전화 문의 {siteContent.phone}
            </a>
          ) : (
            <span className="text-xs">전화번호 준비 중</span>
          )}
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
