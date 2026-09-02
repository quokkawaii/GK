import type { SocialLinksProps } from "@/types/social/social";

// 공용 Instagram과 YouTube 링크를 표시한다.
export function SocialLinks({ social }: SocialLinksProps) {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
    >
      <img src={social.img} alt="" />
    </a>
  );
}
