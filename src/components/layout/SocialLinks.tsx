import Image from "next/image";

import siteContent from "@/content/site.json";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {siteContent.social.instagram && (
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
