import siteJson from "@/content/site.json";
import type { SiteContent } from "@/types/site/siteType-json";

const siteContent: SiteContent = siteJson;

// 푸터 왼쪽 영역을 표시한다.
export function FooterLeft() {
  return (
    <div className="footer-left">
      <p className="company-name">상호·{siteContent.company.name}</p>

      <dl className="company-meta">
        <div>
          <dt>서비스 지역</dt>
          <dd>{siteContent.company.serviceArea}</dd>
        </div>
        <div>
          <dt>주소</dt>
          <dd>{siteContent.company.address}</dd>
        </div>
        <div>
          <dt>대표자</dt>
          <dd>{siteContent.company.representative}</dd>
        </div>
      </dl>

      <p className="company-phone">
        <a
          href={siteContent.company.representativePhone.href}
          aria-label={`${siteContent.company.representativePhone.label} ${siteContent.company.representativePhone.number}`}
        >
          {siteContent.company.representativePhone.label}:{" "}
          {siteContent.company.representativePhone.number}
        </a>
      </p>
    </div>
  );
}
