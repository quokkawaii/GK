import footerJson from "@/content/footer.json";
import siteJson from "@/content/site.json";
import type { FooterContent } from "@/types/footer/footerType-json";
import type { SiteContent } from "@/types/site/siteType-json";

const footerContent: FooterContent = footerJson;
const siteContent: SiteContent = siteJson;

// 푸터 하단 영역을 표시한다.
export function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-inner">
        {siteContent.company.name} · {footerContent.bottom.tagline} · ©{" "}
        {siteContent.copyright.year} {siteContent.copyright.holder}. All rights
        reserved.
      </div>
    </div>
  );
}
