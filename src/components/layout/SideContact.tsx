"use client";

import siteJson from "@/content/site.json";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { useSideContact } from "@/hooks/useSideContact";
import type { SiteContent } from "@/types/site/siteType-json";

const siteContent: SiteContent = siteJson;

// 공통 사이드 전화 문의의 임시 구조다. 실제 콘텐츠 추가 시 이 주석과 빈 구조를 제거한다.
export function SideContact() {
  const isVisible = useSideContact();

  return (
    <aside
      className={isVisible ? "side-call is-visible" : "side-call is-hidden"}
      aria-label="전화 문의 및 공식 외부 채널"
    >
      <a
        className="side-call-phone"
        href={siteContent.inquiry.href}
        aria-label={`${siteContent.inquiry.label} ${siteContent.inquiry.number}`}
      >
        전화 문의
        <br />
        {siteContent.inquiry.number}
      </a>
      <div className="side-call-socials">
        <SocialLinks social={siteContent.social.instagram} />
        <SocialLinks social={siteContent.social.youtube} />
      </div>
    </aside>
  );
}
