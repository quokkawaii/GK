import Image from "next/image";

import siteContent from "@/content/site.json";

// 등록된 소셜 주소에 대해서만 외부 링크 아이콘을 표시한다.
export function SocialLinks() {
  return (
    /* 등록된 외부 소셜 채널 아이콘을 나란히 표시하는 목록이다. */
    <div className="flex items-center gap-2">
      {siteContent.social.instagram && (
        /* Instagram 주소가 있을 때만 표시하는 외부 링크다. */
        <a
          href={siteContent.social.instagram}
          className="text-muted hover:text-accent flex size-9 items-center justify-center transition-colors"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram 열기"
        >
          <Image src="/images/social/instagram.svg" alt="" width={22} height={22} />
        </a>
      )}
      {siteContent.social.youtube && (
        /* YouTube 주소가 있을 때만 표시하는 외부 링크다. */
        <a
          href={siteContent.social.youtube}
          className="flex size-9 items-center justify-center text-[#FF0000] transition-colors hover:text-[#CC0000]"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube 열기"
        >
          <Image src="/images/social/youtube.svg" alt="" width={22} height={22} />
        </a>
      )}
    </div>
  );
}
