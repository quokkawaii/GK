import { FooterBottom } from "@/components/layout/footer/FooterBottom";
import { FooterLeft } from "@/components/layout/footer/FooterLeft";
import { FooterRight } from "@/components/layout/footer/FooterRight";

// 공통 푸터의 임시 구조다. 실제 푸터 콘텐츠 추가 시 이 주석과 빈 구조를 제거한다.
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <FooterLeft />
        <FooterRight />
      </div>
      <FooterBottom />
    </footer>
  );
}
