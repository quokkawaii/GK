# 개발 폴더 구조

이 문서는 승인된 GK 산업 사이트의 Next.js 폴더 구조를 기록한다. 2026-08-09에 개발 단계 승인을 받아 아래 폴더와 도구 설정을 만들었다. 화면·컴포넌트의 실제 구현 파일은 이후 기능별 작업에서 추가한다.

프로젝트 내부 import는 `@/`를 저장소 루트로 하는 경로 별칭을 사용한다. 예: `@/components/layout/Header`. 타입은 `types/index.ts`를 통해 `@/types`에서 가져온다.

`app/cases/page.tsx`는 목록과 같은 화면의 사례 상세 팝업을 제공한다. 사용 제품은 목록 화면만 제공한다.

```text
GK/
├─ next.config.ts               # 정적 내보내기·이미지 처리 설정
├─ app/                         # Next.js 페이지와 주소
│  ├─ layout.tsx                 # 모든 페이지 공통 틀
│  ├─ page.tsx                   # / 웰컴 페이지
│  ├─ globals.css                # 전체 공통 스타일
│  ├─ not-found.tsx              # 없는 주소 안내 화면
│  ├─ error.tsx                  # 화면 실행 중 오류 안내
│  ├─ global-error.tsx           # 사이트 전체 오류 안내
│  ├─ cases/
│  │  └─ page.tsx                # /cases 시공 사례 목록·상세 팝업
│  ├─ products/
│  │  ├─ page.tsx                # /products 사용 제품 목록
│  ├─ company/page.tsx           # /company 회사 소개
│  ├─ robots.ts                  # 검색엔진 크롤링 규칙
│  └─ sitemap.ts                 # 검색엔진용 사이트 목록
├─ components/
│  ├─ layout/                    # Header, Footer, MobileMenu
│  ├─ cases/                     # 사례 전용 화면 조각
│  ├─ products/                  # 제품 전용 화면 조각
│  └─ ui/                        # Button 등 공통 화면 요소
├─ content/                      # 정적 JSON 콘텐츠: cases.json, site.json
├─ lib/                          # getCasePage 등 콘텐츠 처리 함수·공통 상수와 index.ts 단일 진입점
├─ store/                        # contentStore, caseFilterStore, casePaginationStore
├─ types/                        # 재사용 타입: content.ts, filter.ts, ui.ts, index.ts
├─ tests/                        # Vitest 테스트 코드
├─ public/images/                # 실제 시공·제품 사진
├─ tsconfig.json                 # strict·경로 별칭·JSON 모듈 가져오기 설정
├─ .github/workflows/ci.yml      # PR 자동 검사
├─ docs/                         # 기획·디자인·개발 문서
├─ previews/                     # 검토용 HTML 시안
├─ roles/                        # 역할별 지침
└─ patchNote/                    # 변경 보고
```

비어 있는 코드 영역은 Git에서 폴더 구조가 보이도록 `.gitkeep` 파일만 둔다. 이는 기능 구현 파일이 아니다.

## 디자인 시스템 위치

- 디자인 기준 문서: `docs/02-design/design-system.md`
- 실제 코드 값: `app/globals.css`의 Tailwind `@theme`
- 재사용 화면 요소: `components/ui/`
- 전체 화면에 적용하는 기본 규칙: `app/globals.css`의 `@layer base`

화면별 CSS 모듈은 만들지 않는다. 화면 배치와 크기는 TSX의 Tailwind 클래스에 작성하고, 반복되는 구조는 버튼 같은 공통 컴포넌트로 재사용한다.

## 정적 내보내기와 사진 설정

`next.config.ts`에는 아래 두 설정을 함께 둔다.

```ts
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- `output: "export"`: 배포용 정적 파일을 `out/` 폴더에 만든다.
- `images.unoptimized: true`: Cloudflare Pages에 없는 Next.js 이미지 변환 서버를 사용하지 않는다.
- 화면에서는 계속 Next.js `Image`를 사용하되, 사진은 `public/images/`의 경로를 그대로 제공한다.
