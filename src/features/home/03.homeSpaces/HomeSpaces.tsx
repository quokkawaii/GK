import homeJson from "@/content/home.json";
import type { HomeContent } from "@/types/home/homeType-json";

const homeContent: HomeContent = homeJson;

// 홈 공간별 시공 안내 영역을 표시한다.
export default function HomeSpaces() {
  const { title, description, items } = homeContent.spaces;

  return (
    <section
      className="bg-canvas px-6 py-[88px] max-md:px-4 max-md:py-14"
      aria-labelledby="spaces-title"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mb-9 max-w-[650px]">
          <h2
            id="spaces-title"
            className="m-0 text-[36px] leading-[1.25] tracking-[-0.06em] max-md:text-[29px]"
          >
            {title}
          </h2>
          <p className="text-body mt-3 mb-0 break-keep">{description}</p>
        </div>

        <ul className="m-0 grid list-none grid-cols-4 gap-3 p-0 max-md:grid-cols-2">
          {items.map((item, index) => (
            <li
              className="border-border bg-canvas rounded-xl border p-5"
              key={`${item.title}-${index}`}
            >
              <strong className="block text-[17px] leading-6 font-semibold">{item.title}</strong>
              <span className="text-body mt-[7px] block text-sm leading-[21px]">
                {item.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
