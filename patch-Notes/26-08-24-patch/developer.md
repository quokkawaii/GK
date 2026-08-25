## 삭제 1 - 개발자

- 파일: `src/AGENTS.md`를 제외한 기존 `src/` 전체
- 내용: 기존 페이지, 컴포넌트, JSON, Zustand 상태, 훅, lib 함수와 타입 파일을 삭제했다.
- 이유: 기존 소스 데이터를 모두 제거하고 `src/AGENTS.md` 규칙에 맞는 구조에서 다시 시작하라는 사용자 요청을 반영했다.
- 관련: 사용자 요청, `src/AGENTS.md`
- 검증: `src/AGENTS.md`가 유지되고 나머지 기존 파일이 제거된 것을 확인했다.

## 추가 2 - 개발자

- 파일: `src/app/`, `src/components/`, `src/constants/`, `src/content/`, `src/events/`, `src/features/`, `src/func/`, `src/store/`, `src/types/`
- 내용: 페이지, 공용 컴포넌트, 상수, 원본 콘텐츠, 이벤트, 기능, 순수 함수, Zustand, 타입을 각각 관리할 빈 폴더를 생성했다.
- 이유: `src/AGENTS.md`와 사용자가 확정한 `func → events → component`, Zustand `store/` 관리 구조를 반영하기 위해서다.
- 관련: 사용자 요청, `src/AGENTS.md`
- 검증: `src` 바로 아래에 요청한 폴더와 `AGENTS.md`만 존재하는 것을 확인했다.

## 수정 3 - 개발자

- 파일: `docs/requirements/**`, `docs/plan/**`, `docs/design/**`, `docs/develop/**`
- 내용: 주요 공개 화면의 `제품 소개` 명칭을 `시공 안내`로 변경하고 대표 경로 `/products`를 `/construction-guide`로 변경했다. 페이지별 요구사항·기획·디자인·개발 명세의 제목과 공통 문서 및 디자인 시안의 연결 표현도 같은 값으로 맞췄다.
- 이유: 제품 소개 공개 화면을 시공 안내 공개 화면으로 변경하라는 사용자 요청을 반영했다.
- 관련: `REQ-common-004`, `REQ-common-021`, 사용자 요청
- 검증: 대상 문서에서 `제품 소개`와 `/products` 문자열이 남아 있지 않은지 검색했다.

## 수정 4 - 개발자

- 파일: `src/app/layout.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/SideContact.tsx`, `src/components/layout/Footer.tsx`
- 내용: 공통 레이아웃을 `Header → main(children) → SideContact → Footer` 순서로 연결하고, 세 공통 컴포넌트에 임시 빈 구조를 추가했다.
- 이유: 공통 레이아웃의 조립 구조를 먼저 확정하고 이후 각 컴포넌트의 실제 콘텐츠를 추가하기 위해서다.
- 관련: 사용자 요청
- 검증: 대상 파일 Prettier 검사를 통과했다. TypeScript 검사는 기존에 삭제된 라우트에 대한 `.next/types/validator.ts` 참조 오류로 통과하지 못했다.

## 추가 5 - 개발자

- 파일: `src/content/site.json`
- 내용: 공용 회사 정보, 대표 전화, 문의 전화, 공식 Instagram·YouTube URL, 저작권 정보를 JSON으로 추가했다.
- 이유: 헤더·사이드 CTA·푸터에서 공통으로 사용할 원본 데이터를 한 곳에서 관리하기 위해서다.
- 관련: 사용자 요청
- 검증: JSON 파싱과 Prettier 검사를 통과했다.

## 수정 6 - 개발자

- 파일: `src/content/cases.json`
- 내용: 모든 시공사례 데이터에서 사용하지 않기로 결정한 `description`과 `productIds` 필드를 삭제했다.
- 이유: 제품 데이터 연결과 설명 필드를 현재 시공사례 콘텐츠에서 사용하지 않기로 한 사용자 결정을 반영했다.
- 관련: 사용자 요청
- 검증: JSON 파싱과 Prettier 검사를 통과했다.

## 추가 7 - 개발자

- 파일: `src/content/home.json`
- 내용: 홈 시안의 메타데이터와 홈 전용 텍스트, 시공사례 조회 조건을 최상위 객체로 추가했다.
- 이유: 홈 콘텐츠를 `site.json`과 `cases.json`의 데이터와 중복하지 않고 별도 관리하기 위해서다.
- 관련: 사용자 요청
- 검증: JSON 파싱과 Prettier 검사를 통과했다.

## 추가 8 - 개발자

- 파일: `src/content/layout.json`
- 내용: 루트 레이아웃에서 사용할 기본 제목, 제목 템플릿, 기본 설명, 애플리케이션명, Open Graph 공통 메타데이터를 추가했다.
- 이유: 레이아웃 공통 메타데이터를 원본 JSON으로 분리해 관리하기 위해서다.
- 관련: 사용자 요청
- 검증: JSON 파싱과 Prettier 검사를 통과했다.

## 수정 9 - 개발자

- 파일: `src/app/layout.tsx`
- 내용: `src/content/layout.json`을 import하고 Next.js `Metadata`로 export해 루트 레이아웃의 공통 메타데이터에 연결했다.
- 이유: 레이아웃 메타데이터를 JSON 원본에서 관리하기로 한 사용자 결정을 반영했다.
- 관련: 사용자 요청
- 검증: Prettier 검사를 통과했다. TypeScript는 기존 `.next/types/validator.ts`의 삭제된 라우트 참조 오류로 통과하지 못했다.

## 수정 10 - 개발자

- 파일: `src/app/layout.tsx`
- 내용: 단일 `children` prop을 별도 `RootLayoutProps` 타입 없이 함수 인자에 직접 `ReactNode`로 표기했다. `layoutMetadata` 변수명 사용도 확인했다.
- 이유: 단일 prop 타입의 불필요한 분리를 제거해 레이아웃 인자 구조를 직관적으로 표현하기 위해서다.
- 관련: 사용자 요청
- 검증: Prettier 검사를 통과했다.

## 추가 11 - 개발자

- 파일: `src/components/layout/header/Header.tsx`, `HeaderBrand.tsx`, `HeaderNavigation.tsx`, `HeaderContact.tsx`, `HeaderMobileMenu.tsx`
- 내용: 헤더 전용 폴더와 빈 컴포넌트 파일 5개를 생성했다.
- 이유: 헤더 기능을 브랜드, 네비게이션, 연락처, 모바일 메뉴 단위로 분리할 수 있도록 구조를 준비하기 위해서다.
- 관련: 사용자 요청
- 검증: 생성된 5개 파일이 모두 빈 상태임을 확인했다.

## 수정 12 - 개발자

- 파일: `src/components/layout/Header.tsx`, `src/components/layout/header/Header.tsx`, `src/app/layout.tsx`
- 내용: 기존 헤더 파일을 삭제하고 구현을 새 헤더 폴더의 `Header.tsx`로 이동했으며, 루트 레이아웃 import 경로를 변경했다.
- 이유: 헤더 전용 폴더 구조와 실제 레이아웃 연결을 일치시키기 위해서다.
- 관련: 사용자 요청
- 검증: 기존 경로 파일 삭제, 새 경로 파일 존재, `layout.tsx` import 경로 변경, Prettier 검사를 확인했다.

## 수정 13 - 개발자

- 파일: `src/components/layout/header/Header.tsx`, `HeaderBrand.tsx`, `HeaderNavigation.tsx`, `HeaderContact.tsx`, `HeaderMobileMenu.tsx`, `src/constants/navigation.ts`, `src/app/globals.css`
- 내용: 공통 헤더의 브랜드, 데스크톱 네비게이션, 연락처·SNS, 모바일 메뉴와 sticky·스크롤 숨김·반응형 스타일을 구현했다.
- 이유: `docs/design/previews/common/header.html`의 헤더 구조와 표시 규칙을 Next.js 컴포넌트로 연결하기 위해서다.
- 관련: 사용자 요청, `docs/design/previews/common/header.html`
- 검증: 대상 파일 Prettier 검사를 통과했다. TypeScript는 기존 `.next/types/validator.ts`의 삭제된 라우트 참조 오류로 통과하지 못했다.

## 수정 14 - 개발자

- 파일: `src/components/layout/header/Header.tsx`, `src/constants/header.ts`
- 내용: 스크롤 프레임마다 `isHidden`을 false로 덮어쓰던 조건을 수정하고, 상단 스크롤 임계값을 상수로 분리했다. 아래 방향 이동 중에는 숨김 상태를 유지하고 위 방향 이동 시 표시하도록 변경했다.
- 이유: 스크롤 중 헤더가 잠시 숨겨졌다가 다시 나타나는 문제를 수정하기 위해서다.
- 관련: 사용자 요청
- 검증: 대상 파일 Prettier 검사를 통과했다.
