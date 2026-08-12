// 회사 소개 본문에 표시할 인사말·문단·마무리 문구다.
type CompanyIntroductionProps = Readonly<{
  lead: string;
  body: readonly string[];
  closing: string;
}>;
// 회사 소개의 인사말·본문·마무리 문구를 표시한다.
export function CompanyIntroduction({ lead, body, closing }: CompanyIntroductionProps) {
  return (
    <>
      {/* 회사 소개의 핵심 인사말 제목이다. */}
      <h2 className="text-xl font-bold tracking-[-0.04em]">{lead}</h2>
      {/* site.json의 본문 문단을 순서대로 표시하는 소개 영역이다. */}
      <div className="mt-5 space-y-4 text-sm leading-7 text-[#555555] md:text-base">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {/* 소개 글의 마지막 안내 문구다. */}
      <p className="mt-7 text-sm leading-7 text-[#555555] md:text-base">{closing}</p>
    </>
  );
}
