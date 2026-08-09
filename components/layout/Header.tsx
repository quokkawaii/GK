import Link from "next/link";

import siteContent from "@/content/site.json";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { navigationItems } from "@/lib/navigation";

export function Header() {
  return (
    <header className="border-border bg-surface sticky top-0 z-30 border-b">
      <Container className="flex h-[62px] items-center justify-between md:h-16">
        <Link href="/" className="text-[20px] font-bold tracking-[-0.04em] md:text-[23px]">
          GK <span className="text-accent">산업</span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-[13px] font-semibold md:flex"
          aria-label="기본 메뉴"
        >
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <SocialLinks />
          </div>
          <a
            href={`tel:${siteContent.phone.replaceAll("-", "")}`}
            className="bg-accent flex min-h-11 items-center px-3 text-[12px] font-semibold text-white"
          >
            <span className="md:hidden">전화 문의</span>
            <span className="hidden md:inline">전화 문의 {siteContent.phone}</span>
          </a>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
