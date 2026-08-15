// 회사 소개 문의 영역에 표시할 필수 전화번호다.
type CompanyContactProps = Readonly<{ phone: string }>;
// 필수 전화번호를 받아 회사 문의 링크를 표시한다.
export function CompanyContact({ phone }: CompanyContactProps) {
  return (
    /* 전화 문의 안내와 전화 연결 버튼을 함께 표시하는 섹션이다. */
    <section className="toss-contact mt-8 md:flex md:items-center md:justify-between md:gap-5">
      {/* 문의가 필요한 내용을 설명하는 안내 문구 영역이다. */}
      <div>
        <h2 className="text-base font-semibold">바닥 시공 문의</h2>
        <p className="mt-1 text-xs leading-5 text-[#555555]">
          시공 사례와 사용 제품 정보를 확인하신 뒤 전화로 문의해 주세요.
        </p>
      </div>
      {/* JSON에 등록된 필수 전화번호로 연결하는 전화 문의 링크다. */}
      <a
        href={`tel:${phone.replaceAll("-", "")}`}
        className="toss-primary-button mt-4 flex items-center justify-center text-sm md:mt-0"
      >
        전화 문의 {phone}
      </a>
    </section>
  );
}
