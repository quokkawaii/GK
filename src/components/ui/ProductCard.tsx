import Link from "next/link";

// 제품 카드에 표시할 제품명과 대표 적용 현장이다.
type ProductCardProps = Readonly<{
  productId: string;
  location: string;
}>;

// 제품명과 적용 현장을 받아 홈과 제품 목록에서 같은 제품 카드를 표시한다.
export function ProductCard({ productId, location }: ProductCardProps) {
  return (
    /* 제품명과 적용 현장, 사례 이동 링크를 표시하는 공용 카드다. */
    <article className="toss-product-card text-text">
      {/* 제품 이미지가 준비되기 전까지 카드 비율을 유지하는 이미지 안내 영역이다. */}
      <div className="flex aspect-[4/3] items-center justify-center bg-[#dce7f2] text-center text-sm text-[#4e5968]">
        죄송합니다.
        <br />
        이미지는 준비 중입니다.
      </div>
      {/* 제품 분류·제품명·적합 현장·사례 이동 링크를 담는 정보 영역이다. */}
      <div className="p-4">
        <p className="text-accent text-xs font-semibold">시공 자재</p>
        <h2 className="mt-1 text-lg font-semibold tracking-[-0.04em]">{productId}</h2>
        <p className="mt-2 text-sm text-[#606060]">적합 현장: {location}</p>
        {/* 해당 제품이 적용된 사례 목록으로 필터를 설정해 이동하는 링크다. */}
        <Link
          href={`/cases?tag=${encodeURIComponent(productId)}`}
          className="toss-secondary-button mt-4 flex items-center justify-center text-sm"
        >
          시공 사례 보기
        </Link>
      </div>
    </article>
  );
}
