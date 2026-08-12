"use client";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProductFilters } from "@/features/products/components/ProductFilters";
import { ProductResults } from "@/features/products/components/ProductResults";
import { getProductIds } from "@/lib/products";
import type { ConstructionCase } from "@/types";

// 제품 화면이 제품 목록을 만들 때 사용하는 정적 사례 데이터다.
type ProductsScreenProps = Readonly<{ cases: readonly ConstructionCase[] }>;

// 제품 페이지의 히어로·필터·결과 화면을 순서대로 조립한다.
export function ProductsScreen({ cases }: ProductsScreenProps) {
  const productIds = getProductIds(cases);
  return (
    <>
      {/* 제품 화면의 목적을 안내하는 공통 첫 영역이다. */}
      <PageHero
        eyebrow="PRODUCTS USED"
        title="시공 시 사용 제품"
        description="시공 사례에 기록된 자재명과 해당 자재가 사용된 현장 정보를 확인해 보세요."
      />
      {/* 제품 필터와 결과 카드를 담는 제품 목록 본문이다. */}
      <section className="py-8 md:py-12">
        <Container>
          {/* 표시할 제품을 선택하는 필터 화면이다. */}
          <ProductFilters productIds={productIds} />
          {/* 선택 조건에 맞는 제품 카드와 사례 이동 안내를 표시한다. */}
          <ProductResults cases={cases} productIds={productIds} />
        </Container>
      </section>
    </>
  );
}
