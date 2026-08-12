"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProductFilters } from "@/features/products/components/ProductFilters";
import { ProductResults } from "@/features/products/components/ProductResults";
import { getProductIds } from "@/lib/products";
import type { ConstructionCase } from "@/types";

type ProductsScreenProps = Readonly<{ cases: readonly ConstructionCase[] }>;

// 제품 페이지의 히어로·필터·결과 화면을 순서대로 조립한다.
export function ProductsScreen({ cases }: ProductsScreenProps) {
  const productIds = getProductIds(cases);
  return (
    <>
      <PageHero
        eyebrow="PRODUCTS USED"
        title="시공 시 사용 제품"
        description="시공 사례에 기록된 자재명과 해당 자재가 사용된 현장 정보를 확인해 보세요."
      />
      <section className="py-8 md:py-12">
        <Container>
          <ProductFilters productIds={productIds} />
          <ProductResults cases={cases} productIds={productIds} />
        </Container>
      </section>
    </>
  );
}
