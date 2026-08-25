import siteContent from "@/content/site.json";

// 공용 사이트 데이터로 전화 문의와 공식 외부 채널을 표시한다.
export function HeaderContact() {
  return (
    <div className="header-contact" aria-label="전화 문의 및 공식 외부 채널">
      <a className="header-phone" href={siteContent.inquiry.href}>
        {siteContent.inquiry.label}: {siteContent.inquiry.number}
      </a>
      <div className="header-socials">
        <a
          href={siteContent.social.instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram 새 탭 열기"
        >
          <img src="/images/social/instagram.svg" alt="" />
        </a>
        <a
          href={siteContent.social.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube 새 탭 열기"
        >
          <img src="/images/social/youtube.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
