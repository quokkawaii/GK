import Link from "next/link";
import type { RouteType } from "@/types/routes/routesType-json";

// 라우트 데이터에 맞는 페이지 이동 링크를 표시한다.
export function RouteLink({ route: { route: route, label, className } }: { route: RouteType }) {
  return (
    <Link className={`contact-number ${className}`} href={route} aria-label={label}>
      {label}
    </Link>
  );
}
