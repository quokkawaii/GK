# 개발 폴더 구조

이 문서는 승인된 GK 산업 사이트의 Next.js 폴더 구조를 기록한다. 실제 폴더와 파일은 개발 단계 승인 뒤에 만든다.

`app/cases/[slug]/page.tsx`와 `app/products/[slug]/page.tsx`는 빌드할 때 `content/` JSON을 읽어 상세 주소별 페이지를 자동 생성한다.

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
│  │  ├─ page.tsx                # /cases 시공 사례 목록
│  │  └─ [slug]/page.tsx         # 사례 상세
│  ├─ products/
│  │  ├─ page.tsx                # /products 사용 제품 목록
│  │  └─ [slug]/page.tsx         # 제품 상세
│  ├─ company/page.tsx           # /company 회사 소개
│  ├─ robots.ts                  # 검색엔진 크롤링 규칙
│  └─ sitemap.ts                 # 검색엔진용 사이트 목록
├─ components/
│  ├─ layout/                    # Header, Footer, MobileMenu
│  ├─ cases/                     # 사례 전용 화면 조각
│  ├─ products/                  # 제품 전용 화면 조각
│  └─ ui/                        # Button 등 공통 화면 요소
├─ styles/
│  └─ tokens.css                 # 색·글자·간격 등 디자인 시스템 값
├─ content/                      # 정적 JSON 콘텐츠
├─ lib/                          # 콘텐츠 읽기·필터·SEO 함수
├─ store/                        # Zustand 목록 상태
├─ types/                        # JSON 데이터 형태
├─ public/images/                # 실제 시공·제품 사진
├─ .github/workflows/ci.yml      # PR 자동 검사
├─ docs/                         # 기획·디자인·개발 문서
├─ previews/                     # 검토용 HTML 시안
├─ roles/                        # 역할별 지침
└─ patchNote/                    # 변경 보고
```

## 디자인 시스템 위치

- 디자인 기준 문서: `docs/02-design/design-system.md`
- 실제 코드 값: `styles/tokens.css`
- 재사용 화면 요소: `components/ui/`
- 전체 화면에 적용하는 기본 규칙: `app/globals.css`

이렇게 분리하면 디자인 값은 한곳에서 바꾸고, 버튼 같은 공통 요소는 여러 화면에서 재사용할 수 있다.

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
