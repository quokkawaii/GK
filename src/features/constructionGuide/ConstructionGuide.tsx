"use client";

import Link from "next/link";

import { findByRouterKey } from "@/func/route/routeFunc";
import { useCasesFilter } from "@/hooks/cases/useCasesFilter";
import type {
  ConstructionGuideProcessProps,
  ConstructionGuideProps,
  ConstructionGuideSectionProps,
} from "@/types/constructionGuide/constructionGuideType-json";

function SectionHeading({ section }: ConstructionGuideSectionProps) {
  return (
    <div className="max-w-[650px]">
      <p className="text-primary m-0 text-sm font-semibold tracking-[0.08em]">{section.eyebrow}</p>
      <h2 className="mt-3 mb-0 text-[36px] leading-[1.3] tracking-[-0.06em] max-md:text-[29px]">
        {section.titleLines.map((line, index) => (
          <span key={`${line}-${index}`}>
            {index > 0 && <br />}
            {line}
          </span>
        ))}
      </h2>
      {section.description && (
        <p className="text-body mt-3 mb-0 break-keep">{section.description}</p>
      )}
    </div>
  );
}

function ProcessSection({ process }: ConstructionGuideProcessProps) {
  return (
    <section className="bg-canvas px-6 py-[88px] max-md:px-4 max-md:py-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <SectionHeading section={process} />

        <ol className="mt-10 grid grid-cols-5 gap-3 max-md:grid-cols-1">
          {process.steps.map((step) => (
            <li className="border-border bg-canvas rounded-xl border p-5" key={step.number}>
              <span className="text-primary text-sm font-semibold">{step.number}</span>
              <h3 className="mt-6 mb-0 text-lg font-semibold">{step.title}</h3>
              <p className="text-body mt-2 mb-0 text-sm leading-6">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// 시공 안내 전체 화면을 표시한다.
export function ConstructionGuide({ constructionGuideJson }: ConstructionGuideProps) {
  const { hero, beforeContact, estimateProcess, constructionProcess, onSiteCheck, spaces } =
    constructionGuideJson;
  const route = findByRouterKey("cases");
  const placeFilter = useCasesFilter("place");
  const materialFilter = useCasesFilter("material");

  if (!route) {
    return null;
  }

  return (
    <div className="bg-canvas">
      <section className="border-border border-b px-6 py-[88px] max-md:px-4 max-md:py-14">
        <div className="mx-auto w-full max-w-[1180px]">
          <SectionHeading section={hero} />
        </div>
      </section>

      <section className="px-6 py-[88px] max-md:px-4 max-md:py-14">
        <div className="mx-auto w-full max-w-[1180px]">
          <SectionHeading section={beforeContact} />

          <ul className="mt-10 grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {beforeContact.items.map((item) => (
              <li className="border-border rounded-xl border p-5" key={item.title}>
                <strong className="text-lg font-semibold">{item.title}</strong>
                <span className="text-body mt-2 block text-sm">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSection process={estimateProcess} />
      <ProcessSection process={constructionProcess} />

      <section className="bg-canvas px-6 py-[88px] max-md:px-4 max-md:py-14">
        <div className="mx-auto w-full max-w-[1180px]">
          <SectionHeading
            section={{
              eyebrow: onSiteCheck.eyebrow,
              titleLines: onSiteCheck.titleLines,
              description: "",
            }}
          />

          <div className="mt-10 grid grid-cols-2 gap-3 max-md:grid-cols-1">
            {onSiteCheck.items.map((item) => (
              <article className="border-border bg-canvas rounded-xl border p-6" key={item.title}>
                <h3 className="m-0 text-xl font-semibold">{item.title}</h3>
                <p className="text-body mt-3 mb-0 leading-7">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-[88px] max-md:px-4 max-md:py-14">
        <div className="mx-auto w-full max-w-[1180px]">
          <SectionHeading section={spaces} />

          <ul className="mt-10 grid grid-cols-5 gap-3 max-md:grid-cols-2">
            {spaces.items.map((item) => (
              <li key={item.label}>
                <Link
                  className="border-border text-body hover:border-primary hover:text-primary block rounded-xl border p-5 font-semibold transition-colors"
                  href={route.route}
                  onClick={() => {
                    placeFilter.handleChange(item.filter.place);
                    materialFilter.handleChange(item.filter.material);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
