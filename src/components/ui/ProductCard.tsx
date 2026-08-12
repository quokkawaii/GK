import Link from "next/link";

type ProductCardProps = Readonly<{
  productId: string;
  location: string;
}>;

// 제품명과 적용 현장을 받아 홈과 제품 목록에서 같은 제품 카드를 표시한다.
export function ProductCard({ productId, location }: ProductCardProps) {
  return (
    <article className="border-border border bg-white text-[#242424]">
      <div className="flex aspect-[4/3] items-center justify-center bg-[#e8e5df] text-center text-sm text-[#5f5d59]">
        죄송합니다.
        <br />
        이미지는 준비 중입니다.
      </div>
      <div className="p-4">
        <p className="text-accent text-xs font-semibold">시공 자재</p>
        <h2 className="mt-1 text-lg font-semibold tracking-[-0.04em]">{productId}</h2>
        <p className="mt-2 text-sm text-[#606060]">적합 현장: {location}</p>
        <Link
          href={`/cases?tag=${encodeURIComponent(productId)}`}
          className="bg-dark mt-4 flex min-h-11 items-center justify-center px-4 text-sm font-semibold !text-white"
        >
          시공 사례 보기
        </Link>
      </div>
    </article>
  );
}
