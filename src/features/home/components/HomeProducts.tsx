import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";

// 홈 제품 영역에 표시할 제품명과 제품별 대표 현장이다.
type HomeProductsProps = Readonly<{
  productIds: readonly string[];
  locations: Readonly<Record<string, string>>;
}>;

// 홈에서 사용할 제품 카드들을 공용 제품 카드로 배치한다.
export function HomeProducts({ productIds, locations }: HomeProductsProps) {
  return (
    /* 사용 제품 제목과 제품 카드 목록을 보여 주는 홈 섹션이다. */
    <section className="bg-surface py-12 md:py-16">
      <Container>
        {/* 섹션 제목과 전체 제품 이동 링크를 나란히 배치하는 머리글이다. */}
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-accent text-xs font-semibold tracking-[0.1em]">USED PRODUCTS</p>
            <h2 className="mt-1 text-[24px] font-bold tracking-[-0.05em] md:text-[28px]">
              사용 제품
            </h2>
          </div>
          {/* 사용 제품 전체 목록으로 이동하는 보조 링크다. */}
          <Link href="/products" className="border-text border-b pb-0.5 text-xs font-semibold">
            사용 제품 보기 →
          </Link>
        </div>
        {/* 홈에 노출할 제품 카드를 세 열로 배치하는 목록이다. */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {productIds.map((id) => (
            <ProductCard key={id} productId={id} location={locations[id] ?? "시공 현장"} />
          ))}
        </div>
      </Container>
    </section>
  );
}
