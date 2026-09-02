import siteContent from "@/content/site.json";
import type { SiteContent } from "@/types/site/siteType-json";

import { SocialLinks } from "@/components/layout/SocialLinks";

const typedSiteContent: SiteContent = siteContent;

// 공용 사이트 데이터로 전화 문의와 공식 외부 채널을 표시한다.
export function HeaderContact() {
  return (
    <div className="header-contact" aria-label="전화 문의 및 공식 외부 채널">
      <a className="header-phone" href={typedSiteContent.inquiry.href}>
        {typedSiteContent.inquiry.label}: {typedSiteContent.inquiry.number}
      </a>
      <div className="header-socials">
        <SocialLinks social={typedSiteContent.social.instagram} />
        <SocialLinks social={typedSiteContent.social.youtube} />
      </div>
    </div>
  );
}
