import { Container } from "@/components/ui/Container";

type PageHeroProps = Readonly<{
  eyebrow: string;
  title: string;
  description?: string;
}>;

// 여러 안내 페이지가 같은 첫 영역을 사용하도록 문구만 받아 표시한다.
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="!text-white">
      <Container className="bg-dark flex min-h-[240px] flex-col justify-center px-6 py-12 md:px-10 md:py-16">
        <p className="text-accent text-xs font-semibold tracking-[0.1em]">{eyebrow}</p>
        <h1 className="mt-3 max-w-[620px] text-[30px] font-bold tracking-[-0.06em] md:text-[40px]">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-[620px] text-sm leading-6 text-[#dddddd]">{description}</p>
        )}
      </Container>
    </section>
  );
}
