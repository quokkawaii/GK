import Link from "next/link";

import { findByRouterKey } from "@/func/route/routeFunc";
import type { AboutJson } from "@/types/about/aboutType-json";

// 회사 소개 전체 화면을 표시한다.
export function About({ aboutJson }: { aboutJson: AboutJson }) {
  const { titleLines, paragraphs, contactMessage, signature } = aboutJson;
  const route = findByRouterKey("constructionGuide");

  if (!route) {
    return null;
  }

  return (
    <section className="bg-canvas mx-auto min-h-[680px] w-[calc(100%_-_48px)] max-w-[1180px] py-[72px] pb-[68px] max-md:min-h-[620px] max-md:w-[calc(100%_-_32px)] max-md:py-12 max-md:pb-[52px]">
      <h1 className="m-0 text-[clamp(30px,3vw,42px)] leading-[1.35] font-medium tracking-[-0.08em] max-md:text-[29px]">
        {titleLines.map((line, index) => (
          <span key={`${line}-${index}`}>
            {index > 0 && <br />}
            {index === 1 ? <strong className="text-primary font-medium">{line}</strong> : line}
          </span>
        ))}
      </h1>

      <div className="mt-14 max-w-[760px] text-[clamp(17px,1.55vw,21px)] leading-[1.9] font-normal tracking-[-0.055em] text-[#737373] max-md:mt-[42px] max-md:text-[17px] max-md:leading-[1.85]">
        {paragraphs.map((paragraph, index) => (
          <p className="m-0 mb-10 max-md:mb-8" key={`${paragraph}-${index}`}>
            {paragraph}
          </p>
        ))}

        <p className="text-foreground m-0 mb-10 max-md:mb-8">
          {contactMessage.before}{" "}
          <Link
            className="!text-primary font-semibold underline-offset-4 hover:underline"
            href={route.route}
          >
            {contactMessage.emphasis}
          </Link>{" "}
          {contactMessage.after}
        </p>
      </div>

      <span className="block text-right text-[22px] font-semibold tracking-[-0.08em] max-md:text-[20px]">
        {signature}
      </span>
    </section>
  );
}
