import Image from "next/image";
import Link from "next/link";

import { HomeCaseCards } from "@/features/home/components/HomeCaseCards";
import { HomePageStateReset } from "@/features/home/components/HomePageStateReset";
import { Container } from "@/components/ui/Container";
import { getHomeProductCase, homeProducts, recentCases } from "@/lib/home-content";

export default function HomePage() {
  return (
    <>
      <HomePageStateReset />
      <section className="text-white">
        <Container className="grid overflow-hidden bg-dark md:grid-cols-[1.04fr_0.96fr]">
          <div className="flex flex-col justify-center gap-5 px-6 py-9 md:gap-6 md:px-10 md:py-12 md:pr-11">
            <p className="text-xs font-semibold tracking-[0.13em] text-[#ef875d]">GK INDUSTRY</p>
            <h1 className="text-[32px] leading-tight font-bold tracking-[-0.06em] md:text-[40px]">
              현장에 맞는
              <br />
              바닥 시공
            </h1>
            <Link
              href="/cases"
              className="bg-accent flex min-h-11 w-fit items-center px-4 text-sm font-semibold text-white"
            >
              시공 사례 보기
            </Link>
          </div>
          <div className="relative min-h-[180px] overflow-hidden bg-[#5d5a55] md:min-h-[280px]">
            <Image
              src={recentCases[0].images[recentCases[0].thumbnailIndex].src}
              alt={recentCases[0].images[recentCases[0].thumbnailIndex].alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <Container>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-accent text-xs font-semibold tracking-[0.1em]">
                RECENT CASE STUDIES
              </p>
              <h2 className="mt-1 text-[24px] font-bold tracking-[-0.05em] md:text-[28px]">
                최근 시공 사례
              </h2>
            </div>
            <Link href="/cases" className="border-text border-b pb-0.5 text-xs font-semibold">
              시공 사례 보기 →
            </Link>
          </div>

          <HomeCaseCards cases={recentCases} />
        </Container>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <Container>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-accent text-xs font-semibold tracking-[0.1em]">USED PRODUCTS</p>
              <h2 className="mt-1 text-[24px] font-bold tracking-[-0.05em] md:text-[28px]">
                사용 제품
              </h2>
            </div>
            <Link href="/products" className="border-text border-b pb-0.5 text-xs font-semibold">
              사용 제품 보기 →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {homeProducts.map((productId) => {
              const productCase = getHomeProductCase(productId);

              return (
                <article key={productId} className="border-border border bg-white text-[#242424]">
                  <div className="flex aspect-[4/3] items-center justify-center bg-[#e8e5df] text-center text-sm text-[#5f5d59]">
                    제품 사진 준비 중
                  </div>
                  <div className="p-4">
                    <p className="text-accent text-xs font-semibold">{productId}</p>
                    <h3 className="mt-1 text-lg font-semibold tracking-[-0.04em]">{productId}</h3>
                    <p className="text-muted mt-1 text-sm">
                      {productCase?.location ?? "시공 현장"}
                    </p>
                    <Link
                      href={`/cases?tag=${encodeURIComponent(productId)}`}
                      className="border-text mt-4 inline-flex min-h-11 items-center border-b text-sm font-semibold"
                    >
                      시공 사례 보기
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
