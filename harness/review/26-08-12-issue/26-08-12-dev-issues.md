# 26-08-12 개발 이슈

## DEV-REV-004

- 심각도: 높음
- 대상: `src/features/products/components/ProductList.tsx`
- 문제: 승인된 요구사항은 여러 자재 태그의 AND 선택과 `전체`만으로 해제를 정하지만, 현재 코드는 단일 `selectedProduct` 상태와 별도 `필터 초기화` 버튼을 사용한다.
- 근거: `docs/requirements/PRD.md`의 REQ-010, `docs/requirements/content-model.md`의 제품 필터 규칙
- 영향: 사용자가 정한 제품 필터 동작과 실제 화면이 다르며, 콘텐츠가 늘어날수록 요구사항 불일치가 커진다.
- 권장 조치: 선택값을 배열로 바꾸고, 여러 자재가 함께 적용되도록 목록 계산을 분리한다. 별도 초기화 버튼은 제거하고 `전체`만 모든 선택을 해제하게 한다.
- 상태: 미해결

## DEV-REV-005

- 심각도: 높음
- 대상: `src/features/cases/components/CaseDetailModal.tsx`
- 문제: 사례 상세 팝업과 사진 뷰어는 열릴 때 초점을 이동시키지 않고, `Tab`을 팝업 안에 제한하지 않으며, 닫을 때 원래 카드나 버튼으로 초점을 되돌리지 않는다.
- 근거: 2026-08-09 디자인 이관 이슈, `CaseDetailModal`의 현재 키보드 처리
- 영향: 키보드 사용자가 팝업 밖의 배경 요소로 이동하거나 닫은 뒤 현재 위치를 잃을 수 있다.
- 권장 조치: 팝업과 사진 뷰어에 초점 이동·제한·복귀 규칙을 구현하고 수동 접근성 검증 결과를 이 항목에 기록한다.
- 상태: 미해결

## DEV-REV-006

- 심각도: 보통
- 대상: `src/app/layout.tsx`, `src/app/company/page.tsx`, `src/features/cases/components/CaseList.tsx`, `src/features/products/components/ProductList.tsx`
- 문제: 공통 레이아웃이 이미 `<main>`을 제공하는데 페이지와 기능 컴포넌트가 다시 `<main>`을 렌더링한다.
- 영향: 한 문서에 주 콘텐츠 랜드마크가 여러 개가 되어 의미 구조와 접근성 도구의 탐색이 혼란스러워진다.
- 권장 조치: `<main>`은 공통 레이아웃 한 곳에만 두고, 하위 화면은 `section` 또는 `div`로 구성한다.
- 상태: 미해결

## DEV-REV-007

- 심각도: 보통
- 대상: `src/features/cases/components/CaseList.tsx`
- 문제: 하나의 컴포넌트가 URL 읽기, Zustand 상태 변경, 필터 계산, 페이지 이동, 스크롤, 팝업 상태, 화면 표시를 모두 맡는다.
- 영향: 주니어 개발자가 수정 지점을 찾기 어렵고, 필터나 팝업 동작을 바꿀 때 예상치 못한 영향이 생길 수 있다.
- 권장 조치: URL 초기화와 목록 상태 제어를 작은 커스텀 훅 또는 명확한 보조 함수로 분리하고, `CaseList`는 화면 조립에 집중시킨다.
- 상태: 미해결

## DEV-REV-008

- 심각도: 보통
- 대상: `src/content/*.json`, `package.json`, `tests/`
- 문제: 정적 JSON의 필수값·이미지 경로·제품 참조·날짜 형식을 한 번에 검사하는 콘텐츠 검사 명령이 없다.
- 영향: 콘텐츠 추가·수정 시 화면에 들어간 뒤에야 누락·오타를 발견할 수 있다.
- 권장 조치: 기존 검증 도구 범위 안에서 JSON 콘텐츠를 검사하는 명령을 추가하고, `npm run check:content`처럼 명확한 실행 이름을 제공한다.
- 상태: 미해결

## DEV-REV-009

- 심각도: 낮음
- 대상: `tests/`
- 문제: 일부 자동 테스트가 현재 JSON의 특정 사례 ID와 개수를 기대한다.
- 영향: 정상적인 콘텐츠 추가·교체도 테스트 수정으로 이어져 재사용성과 콘텐츠 확장성이 낮아진다.
- 권장 조치: 고정 데이터 대신 테스트 전용 입력값을 사용하거나, 데이터 수와 무관한 동작 규칙을 검증한다.
- 상태: 미해결

## DEV-REV-010

- 심각도: 보통
- 대상: `src/lib/home-content.ts`, `src/lib/products.ts`
- 문제: `getProductCase`가 홈 전용 모듈과 공통 제품 모듈에 각각 구현돼 있다.
- 근거: 두 함수 모두 사례의 `productIds`에서 제품명을 찾는 같은 조건을 사용한다.
- 영향: 제품 조회 기준을 바꿀 때 한쪽만 수정할 위험이 있고, 주니어 개발자가 어느 함수를 써야 하는지 판단하기 어렵다.
- 권장 조치: 제품 조회 함수는 공통 모듈 한 곳에 두고 홈과 제품 목록이 함께 사용한다. 정적 JSON의 직접 import는 전역 상태로 복제하지 않는 현재 규칙을 유지한다.
- 상태: 미해결

## DEV-REV-011

- 심각도: 보통
- 대상: `src/app/company/page.tsx`, `src/content/site.json`
- 문제: 회사 소개 화면이 `about.paragraphs[0]`, `slice(1, 3)`, `paragraphs[3]`처럼 배열 위치로 문구의 역할을 결정한다.
- 영향: 문단을 추가하거나 순서를 바꾸면 소제목·본문·마무리 문구가 의도와 다른 위치에 표시될 수 있다.
- 권장 조치: `lead`, `body`, `closing`, `homeSummary`처럼 화면 의미가 드러나는 필드로 콘텐츠 모델을 바꾸고 사용 위치를 명확히 한다.
- 상태: 미해결

## DEV-REV-012

- 심각도: 보통
- 대상: `src/lib/home-content.ts`
- 문제: 홈 대표 제품은 사례 JSON에서 처음 발견되는 제품 3개를 표시한다.
- 영향: 사례나 제품을 추가·재정렬하면 의도하지 않아도 홈 노출 제품이 바뀌며, 이것이 대표 우선순위인지 단순 구현 결과인지 알기 어렵다.
- 권장 조치: 대표 제품을 데이터에 명시하거나 최신 사례 기준 등 선정 규칙을 이름 있는 함수와 문서로 확정한다. 실제 우선순위 정보가 없으면 사용자에게 요청한다.
- 상태: 미해결

## DEV-REV-013

- 심각도: 높음
- 대상: `src/components/layout/Header.tsx`, `src/components/layout/MobileMenu.tsx`, `src/content/site.json`
- 문제: `siteContent.phone` 타입은 `string | null`인데 Header와 MobileMenu은 값 확인 없이 `siteContent.phone.replaceAll()`을 호출한다.
- 영향: 전화번호가 아직 준비되지 않은 정상 콘텐츠 상태에서 페이지 렌더링이 실패할 수 있다.
- 권장 조치: 회사 소개·푸터와 같은 null 분기 방식을 공통화하거나 전화번호 링크 컴포넌트로 분리한다.
- 상태: 미해결

## DEV-REV-014

- 심각도: 보통
- 대상: `src/lib/cases.ts`, `src/features/cases/store/casePaginationStore.ts`
- 문제: `getCasePage`는 마지막 페이지보다 큰 값만 보정하고 음수는 보정하지 않으며, Zustand 저장소도 음수 입력을 그대로 저장한다.
- 영향: 비정상 입력이나 이후 기능 변경으로 음수 페이지가 전달되면 slice 계산과 페이지 표기가 의도와 달라질 수 있다.
- 권장 조치: 페이지 번호를 `0`과 마지막 페이지 사이로 제한하고, 저장소의 입력도 같은 규칙으로 방어한다.
- 상태: 미해결

## DEV-REV-015

- 심각도: 보통
- 대상: `src/app/`
- 문제: `robots.ts`와 `sitemap.ts` 파일이 없다.
- 근거: 프로젝트 공통 규칙의 SEO 기본 항목에 사이트맵과 robots가 포함돼 있다.
- 영향: 검색 로봇 안내와 공개 페이지 URL 목록을 표준 방식으로 제공하지 못한다.
- 권장 조치: 승인된 사이트 URL과 배포 도메인 정보를 확인한 뒤 Next.js 메타데이터 파일로 구현한다. 실제 배포 도메인은 사용자에게 요청한다.
- 상태: 미해결
