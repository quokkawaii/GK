type CompanyIntroductionProps = Readonly<{
  lead: string;
  body: readonly string[];
  closing: string;
}>;
// 회사 소개의 인사말·본문·마무리 문구를 표시한다.
export function CompanyIntroduction({ lead, body, closing }: CompanyIntroductionProps) {
  return (
    <>
      <h2 className="text-xl font-bold tracking-[-0.04em]">{lead}</h2>
      <div className="mt-5 space-y-4 text-sm leading-7 text-[#555555] md:text-base">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-7 text-sm leading-7 text-[#555555] md:text-base">{closing}</p>
    </>
  );
}
