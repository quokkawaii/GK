import Link from "next/link";

// 홈으로 이동하는 지케이 산업 브랜드 영역을 표시한다.
export function HeaderBrand() {
  return (
    <Link className="brand" href="/" aria-label="지케이 산업 홈으로 이동">
      <span className="brand-mark" aria-hidden="true">
        지케이
      </span>
      지케이 <em>산업</em>
    </Link>
  );
}
