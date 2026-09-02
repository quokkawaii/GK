import footerJson from "@/content/footer.json";
import type { FooterContent } from "@/types/footer/footerType-json";

const footerContent: FooterContent = footerJson;

// 푸터 오른쪽 상담 안내 영역을 표시한다.
export function FooterRightInfo() {
  return (
    <>
      <p className="contact-label">{footerContent.right.contactTitle}</p>
      <p className="contact-description">
        {footerContent.right.contactDescription}
      </p>
    </>
  );
}
