# 26-08-12 개발 이슈

## DEV-REV-004

- 심각도: 높음
- 대상: `src/features/products/components/ProductList.tsx`
- 문제: 승인된 요구사항은 여러 자재 태그의 AND 선택과 `전체`만으로 해제를 정하지만, 현재 코드는 단일 `selectedProduct` 상태와 별도 `필터 초기화` 버튼을 사용한다.
- 근거: `docs/requirements/PRD.md`의 REQ-010, `docs/requirements/content-model.md`의 제품 필터 규칙
- 영향: 사용자가 정한 제품 필터 동작과 실제 화면이 다르며, 콘텐츠가 늘어날수록 요구사항 불일치가 커진다.
- 권장 조치: 선택값을 배열로 바꾸고, 여러 자재가 함께 적용되도록 목록 계산을 분리한다. 별도 초기화 버튼은 제거하고 `전체`만 모든 선택을 해제하게 한다.
- 상태: 해결
- 해결 방법: 제품 선택 상태를 배열로 관리하고 선택한 모든 제품을 가진 사례 기준으로 제품 목록을 계산했다. `전체`는 선택값을 모두 해제한다.
- 검증: 제품 AND 필터 테스트와 전체 콘텐츠 검사를 통과했다.

## DEV-REV-005

- 심각도: 높음
- 대상: `src/features/cases/components/CaseDetailModal.tsx`
- 문제: 사례 상세 팝업과 사진 뷰어는 열릴 때 초점을 이동시키지 않고, `Tab`을 팝업 안에 제한하지 않으며, 닫을 때 원래 카드나 버튼으로 초점을 되돌리지 않는다.
- 근거: 2026-08-09 디자인 이관 이슈, `CaseDetailModal`의 현재 키보드 처리
- 영향: 키보드 사용자가 팝업 밖의 배경 요소로 이동하거나 닫은 뒤 현재 위치를 잃을 수 있다.
- 권장 조치: 팝업과 사진 뷰어에 초점 이동·제한·복귀 규칙을 구현하고 수동 접근성 검증 결과를 이 항목에 기록한다.
- 구조 연결: DEV-REV-019 개편 뒤에는 `CaseDialogScreen`이 공용 `useDialogFocus`를 직접 사용한다. 이 이슈의 수동 검증은 기존 `CaseDetailModal`이 아니라 개편된 상세 팝업과 큰 사진 보기 화면을 대상으로 진행한다.
- 수동 검증 항목: 키보드로 사례 카드를 열었을 때 팝업 안의 첫 조작 요소로 이동하는지, Tab·Shift+Tab이 팝업 밖으로 나가지 않는지, Escape가 큰 사진 보기부터 닫고 다음 Escape에서 상세 팝업을 닫는지, 닫은 뒤 원래 카드로 돌아오는지 확인한다.
- 상태: 구현 완료·수동 검증 대기
- 해결 방법: 팝업과 사진 뷰어가 열릴 때 초점을 이동하고, `Tab` 이동을 각 다이얼로그 안에 제한하며, 닫을 때 이전 요소로 초점을 복귀하도록 했다.
- 검증: 빌드는 통과했다. 실제 키보드 수동 검증은 아직 진행하지 않았다.

## DEV-REV-006

- 심각도: 보통
- 대상: `src/app/layout.tsx`, `src/app/company/page.tsx`, `src/features/cases/components/CaseList.tsx`, `src/features/products/components/ProductList.tsx`
- 문제: 공통 레이아웃이 이미 `<main>`을 제공하는데 페이지와 기능 컴포넌트가 다시 `<main>`을 렌더링한다.
- 영향: 한 문서에 주 콘텐츠 랜드마크가 여러 개가 되어 의미 구조와 접근성 도구의 탐색이 혼란스러워진다.
- 권장 조치: `<main>`은 공통 레이아웃 한 곳에만 두고, 하위 화면은 `section` 또는 `div`로 구성한다.
- 상태: 해결
- 해결 방법: 공통 레이아웃의 `<main>`만 유지하고 회사 소개·사례 목록·제품 목록 컴포넌트의 중첩 `<main>`을 `<div>`로 변경했다.
- 검증: `src/app/layout.tsx`와 하위 화면을 확인해 문서에 `<main>`이 하나만 남는 것을 확인했다.

## DEV-REV-007

- 심각도: 보통
- 대상: `src/features/cases/components/CaseList.tsx`
- 문제: 하나의 컴포넌트가 URL 읽기, Zustand 상태 변경, 필터 계산, 페이지 이동, 스크롤, 팝업 상태, 화면 표시를 모두 맡는다.
- 영향: 주니어 개발자가 수정 지점을 찾기 어렵고, 필터나 팝업 동작을 바꿀 때 예상치 못한 영향이 생길 수 있다.
- 결정: 개발 단계에서 화면에 보이는 필터 영역은 `CaseFilters.tsx`, 페이지 번호 영역은 `CasePagination.tsx`로 분리한다. JSON 읽기, URL·팝업 상태, 두 영역 조립은 `CaseList.tsx`에 유지한다.
- 권장 조치: 위 두 화면 컴포넌트만 추가하고, 별도 커스텀 훅이나 상태 구조 변경은 하지 않는다.
- 상태: 해결
- 해결 방법: 필터 UI를 `CaseFilters.tsx`, 페이지 번호 UI를 `CasePagination.tsx`로 분리하고 `CaseList.tsx`는 상태와 화면 조립을 유지했다.
- 검증: 빌드가 통과했다.

## DEV-REV-010

- 심각도: 보통
- 대상: `src/lib/home-content.ts`, `src/lib/products.ts`
- 문제: `getProductCase`가 홈 전용 모듈과 공통 제품 모듈에 각각 구현돼 있다.
- 근거: 두 함수 모두 사례의 `productIds`에서 제품명을 찾는 같은 조건을 사용한다.
- 영향: 제품 조회 기준을 바꿀 때 한쪽만 수정할 위험이 있고, 주니어 개발자가 어느 함수를 써야 하는지 판단하기 어렵다.
- 권장 조치: 제품 조회 함수는 공통 모듈 한 곳에 두고 홈과 제품 목록이 함께 사용한다. 정적 JSON의 직접 import는 전역 상태로 복제하지 않는 현재 규칙을 유지한다.
- 상태: 해결
- 해결 방법: 홈은 공통 `getProductCase(cases, productId)`를 호출하고 별도 조회 구현을 제거했다.
- 검증: 빌드가 통과했다.

## DEV-REV-011

- 심각도: 보통
- 대상: `src/app/company/page.tsx`, `src/content/site.json`
- 문제: 회사 소개 화면이 `about.paragraphs[0]`, `slice(1, 3)`, `paragraphs[3]`처럼 배열 위치로 문구의 역할을 결정한다.
- 영향: 문단을 추가하거나 순서를 바꾸면 소제목·본문·마무리 문구가 의도와 다른 위치에 표시될 수 있다.
- 권장 조치: `lead`, `body`, `closing`처럼 회사 소개 페이지 안에서의 역할이 드러나는 필드로 콘텐츠 모델을 바꾸고 사용 위치를 명확히 한다. 홈에는 회사 소개를 표시하지 않는다.
- 상태: 해결
- 해결 방법: 회사 소개 JSON을 `lead`, `body`, `closing` 필드로 바꾸고 회사 소개 페이지가 의미 있는 필드를 사용하도록 했다. 홈에서는 회사 소개 콘텐츠를 표시하지 않도록 제거했다.
- 검증: 콘텐츠 검사와 빌드가 통과했다.

## DEV-REV-012

- 심각도: 보통
- 대상: `src/lib/home-content.ts`
- 문제: 홈 제품 표시 순서가 사례 JSON에서 처음 발견되는 순서에 의존한다.
- 결정: 제품명을 정렬한 뒤 앞에서부터 최대 3개를 표시한다. 별도 대표 제품 목록은 만들지 않는다. `DEC-086`을 따른다.
- 영향: 새 제품을 추가하면 정렬 결과의 앞 3개에 들어오는 경우에만 홈에 표시된다.
- 권장 조치: `homeProducts` 계산에 정렬을 추가하고, 이 결정에 맞는 테스트를 작성한다.
- 상태: 해결
- 해결 방법: 제품 ID 중복을 제거하고 정렬한 뒤 앞에서 최대 3개를 홈에 표시하도록 했다.
- 검증: 구현 결정 DEC-086과 코드가 일치하며 빌드가 통과했다.

## DEV-REV-013

- 심각도: 높음
- 대상: `src/components/layout/Header.tsx`, `src/components/layout/MobileMenu.tsx`, `src/content/site.json`
- 철회 사유: 현재 Git에 추적되는 `src/content/site.json`에는 사용자가 제공한 전화번호 `010-9261-2061`이 이미 들어 있다. 전화번호를 비워 두는 요구사항이나 계획은 없는데, 타입의 `null` 허용만 보고 가정한 잘못된 리뷰 지적이었다.
- 확인: `git show HEAD:src/content/site.json`으로 Git 추적값을 확인했다.
- 조치: 코드 변경 없이 중앙 미해결 목록에서 제거했다.
- 상태: 철회

## DEV-REV-014

- 심각도: 보통
- 대상: `src/lib/cases.ts`, `src/features/cases/store/casePaginationStore.ts`
- 문제: 현재 페이지 번호가 내부적으로 0부터 시작하며, Zustand 저장소는 0 이하 값을 그대로 저장한다.
- 결정: 현재 페이지는 1부터 저장한다. 코드에서 0 이하 또는 현재 전체 페이지 수보다 큰 페이지 번호를 넘기면 페이지를 바꾸지 않고 현재 페이지를 유지한다.
- 영향: 사용자가 직접 입력하는 값은 아니지만, 이후 버튼·URL 연결·코드 변경에서 잘못된 값이 전달돼도 목록 상태가 바뀌지 않는다.
- 권장 조치: 페이지 저장 함수에 유효 범위를 벗어난 입력을 무시하는 방어 로직을 추가하고, 화면 표시의 `+1` 보정을 제거한다.
- 상태: 해결
- 해결 방법: 현재 페이지를 1부터 관리하고, 0 이하 또는 전체 페이지 수보다 큰 값은 현재 페이지를 유지하도록 했다.
- 검증: 페이지 경계 테스트와 빌드가 통과했다.

## DEV-REV-015

- 심각도: 보통
- 대상: `src/app/`
- 문제: `robots.ts`와 `sitemap.ts` 파일이 없다.
- 근거: 프로젝트 공통 규칙의 SEO 기본 항목에 사이트맵과 robots가 포함돼 있다.
- 영향: 검색 로봇 안내와 공개 페이지 URL 목록을 표준 방식으로 제공하지 못한다.
- 권장 조치: 승인된 사이트 URL과 배포 도메인 정보를 확인한 뒤 Next.js 메타데이터 파일로 구현한다. 실제 배포 도메인은 사용자에게 요청한다.
- 사용자 확인: 2026-08-12 기준 실제 배포 도메인은 아직 정해지지 않았다.
- 상태: 도메인 확정 대기

## DEV-REV-016

- 심각도: 보통
- 대상: `src/app/page.tsx`, `src/app/company/page.tsx`
- 문제: 웰컴 페이지는 히어로·최근 시공 사례·사용 제품 섹션의 마크업과 제품 카드 표시 로직을 `page.tsx`에 직접 두고 있다. 회사 소개 페이지도 히어로·소개 본문·서비스 범위·전화 문의 영역을 모두 `page.tsx`에서 렌더링한다. 반면 `src/app/cases/page.tsx`와 `src/app/products/page.tsx`는 메타데이터와 기능 화면 조립만 담당한다.
- 근거: DEC-026은 `src/app/`을 주소와 페이지 조립, `src/features/`를 기능별 화면과 상태의 위치로 확정했다. 개발 역할 지침도 한 컴포넌트가 한 가지 책임을 우선하도록 정한다.
- 영향: 섹션 단위의 화면 변경이 라우트 파일에 누적되고, 섹션을 독립적으로 검토·재사용·테스트하기 어렵다. 동일한 라우트 계층 안에서도 페이지별 책임 구조가 일관되지 않다.
- 개편 파일: 홈은 `src/features/home/components/HomeHero.tsx`, `HomeRecentCases.tsx`, `HomeProducts.tsx`로 나눈다. 회사 소개는 `src/features/company/components/CompanyHero.tsx`, `CompanyIntroduction.tsx`, `CompanyServiceScopes.tsx`, `CompanyContact.tsx`로 나눈다. `src/app/page.tsx`와 `src/app/company/page.tsx`는 각 화면에 필요한 데이터 props를 전달해 배치한다. 기존 `CaseList`와 `ProductList`의 조립 방식은 유지하지 않으며, DEV-REV-017·018의 구조로 함께 교체한다.
- 화면 구성 기준: 홈은 `HomeHero`, 최근 사례, 사용 제품만 조립한다. 회사 소개 콘텐츠·문구·섹션은 홈에 넣지 않는다. 회사 소개는 별도 `company/page.tsx`가 `CompanyHero`, 회사 소개 본문, 서비스 범위, 전화 문의 영역을 조립한다. 이는 DEV-REV-011에서 확정한 “홈에는 회사 소개를 표시하지 않는다”는 규칙을 유지하는 것이다.
- 상태: 미해결

## DEV-REV-017

- 심각도: 높음
- 대상: `src/app/cases/page.tsx`, `src/features/cases/components/CaseList.tsx`
- 문제: `CaseList`가 `cases.json`을 직접 읽고, URL 쿼리·해시를 해석하며, Zustand 필터·페이지 상태를 변경하고, 태그·페이지 결과를 계산하고, 스크롤·상세 모달 상태를 관리하고, 히어로·결과 요약·목록 영역을 렌더링한다. 하위 필터·페이지·카드·모달 컴포넌트는 있지만, 기능 컨테이너가 여전히 여러 책임을 한 파일에 모은 상태다.
- 근거: 페이지 조립 책임은 DEC-026의 `src/app/`에, 기능별 화면은 `src/features/`에 둔다. 개발 역할 지침은 한 컴포넌트가 한 가지 책임을 우선하도록 정한다. 또한 사용자 기준에서 `page.tsx`는 데이터를 준비해 컴포넌트 props로 전달해야 한다.
- 영향: 사례 데이터 공급 방식이나 URL 동작, 모달·목록 UI를 각각 바꾸려 해도 같은 컴포넌트를 함께 수정해야 한다. 사례 목록을 독립적인 상태 조립과 화면 컴포넌트로 검토·테스트하기 어렵다.
- 권장 조치: `CasesPage`가 사례 데이터를 준비해 목록 기능에 props로 전달하고, `CaseList`는 목록 상태 조립에 한정한다. `src/features/cases/state/useCaseList.ts` 파일 하나가 사례 목록이 기억할 것(선택 태그·현재 페이지)과 바꾸는 방법을 제공한다. 다른 화면 파일은 `const caseList = useCaseList()`로 이 파일을 사용하고, 내부에서 어떤 상태 도구를 쓰는지는 알 필요가 없다. 히어로·결과 요약/빈 상태·카드 목록 같은 화면 영역은 의미 있는 하위 컴포넌트로 분리한다. 기존 `CaseFilters`, `CasePagination`, `CaseCard`, `CaseDetailModal`은 유지하며, URL·해시 연결은 상태 조립 계층에서 관리한다.
- 사용자 확인: 2026-08-12 기준 사례 목록의 필터·페이지 기억값은 `useCaseList` 파일 하나로 모은다. 그 파일은 상태 도구 자체가 아니라, 화면이 이해할 수 있는 `selectedTags`, `currentPage`, `chooseLocationTag`, `chooseProductTag`, `clearFilters`, `goToPage`만 제공한다.
- 개편 파일: `src/app/cases/page.tsx`는 `cases.json`의 사례 데이터를 준비하고 `CasesHero`, `CaseFilters`, `CaseResults`, `CasePagination`을 배치한다. `CasesHero`는 공용 `PageHero`를 사용한다. `CaseFilters`와 `CasePagination`은 props 콜백을 부모에게 되돌리지 않고 각각 `useCaseList`를 직접 사용한다. `CaseResults`도 `useCaseList`와 `CaseCard`, `CaseDetailModal`을 직접 사용한다. 기존 `CaseList.tsx`, `caseFilterStore.ts`, `casePaginationStore.ts`, `HomePageStateReset.tsx`는 이 구조로 기능을 옮긴 뒤 제거한다.
- URL 역할: 제품 카드의 `?tag=제품명` 링크는 사례 목록을 처음 열 때 제품 태그를 선택하는 입력으로 유지한다. `#case-사례번호` 해시는 해당 사례 상세를 여는 입력으로 유지한다. 이 두 주소 입력을 어느 사례 목록 화면이 처리할지는 구현 계획에서 파일 하나로 정하되, 라우트 페이지와 공용 화면에 흩어 구현하지 않는다.
- 상태: 미해결

## DEV-REV-018

- 심각도: 보통
- 대상: `src/app/products/page.tsx`, `src/features/products/components/ProductList.tsx`
- 문제: `ProductList`가 `cases.json`을 직접 읽고, 제품 선택 상태·필터 계산을 관리하며, 히어로·필터·제품 카드·안내 화면까지 렌더링한다. 사례 목록에서 확인한 책임 과다 구조가 제품 목록에도 반복된다.
- 근거: DEC-026의 페이지 조립과 기능별 화면 경계, 그리고 한 컴포넌트가 한 가지 책임을 우선한다는 개발 역할 지침에 맞지 않는다.
- 영향: 제품 데이터 공급 방식, 선택 상태, 필터 UI, 카드 표현 중 하나를 바꿔도 같은 컴포넌트를 함께 수정해야 한다. 사례·제품 기능 사이의 구조도 일관되게 유지하기 어렵다.
- 개편 파일: `src/app/products/page.tsx`는 사례 데이터를 준비하고 `ProductsHero`, `ProductFilters`, `ProductResults`를 배치한다. `ProductsHero`는 공용 `PageHero`를 사용한다. `ProductFilters`와 `ProductResults`는 제품 목록 전용 `src/features/products/state/useProductList.ts`를 각각 직접 사용한다. 이 파일은 두 화면이 함께 쓰는 선택 제품 목록과 선택·해제·전체 동작만 제공한다. 제품 필터 계산 함수는 현재 `src/lib/products.ts`에 유지한다. 기존 `ProductList.tsx`는 기능을 옮긴 뒤 제거한다.
- 공용 화면 연결: `ProductResults`와 홈의 `HomeProducts`는 같은 `ProductCard`를 사용한다. 제품 목록은 2열, 홈은 3열 그리드를 담당하며 카드 내부 화면과 사례 이동 링크는 같게 유지한다.
- 구현 결정: `useProductList`는 `sessionStorage`의 `gk-product-list`에 `selectedProductIds`만 저장한다. 제품 상세·카드·안내 화면의 상태는 저장하지 않는다.
- 사용자 확인: 2026-08-12 기준 사용자가 고른 제품은 `/products` 새로고침 뒤에도, 홈·사례·회사 소개를 거쳐 다시 `/products`로 돌아온 뒤에도 유지한다. 선택 제품은 사용자가 제품 필터의 `전체`를 눌렀을 때만 초기화한다. 브라우저 탭을 닫으면 초기 상태로 돌아간다.
- 상태: 미해결

## DEV-REV-019

- 심각도: 보통
- 대상: `src/features/cases/components/CaseDetailModal.tsx`
- 문제: 한 파일이 모달 열림·닫힘과 포커스 복귀, body 스크롤 잠금, Escape·Tab 키 처리, 현재 사진 상태와 이전/다음 사진 이동, 썸네일 목록, 확대 사진 뷰어, 사례 상세 정보 렌더링을 모두 담당한다.
- 근거: 파일이 287줄로 늘었고, 접근성 제어와 이미지 갤러리·상세 화면이라는 독립적인 변경 이유가 한 컴포넌트에 결합돼 있다. 개발 역할 지침의 단일 책임 원칙과 맞지 않는다.
- 영향: 포커스·스크롤 동작을 수정할 때 사진 기능까지, 사진 UI를 수정할 때 모달 접근성까지 함께 검토해야 한다. 회귀 위험과 주니어 개발자의 이해 비용이 커진다.
- 수정 방향: `CaseDetailModal`은 부모 조립 파일이다. 사례 데이터와 닫기 동작을 전달하고 아래 세 화면을 배치할 뿐, 팝업·키보드·스크롤·사진 이동 기능을 직접 구현하거나 import하지 않는다.
- 화면 1 — `CaseDialogScreen`: 팝업의 배경, 제목, 닫기 버튼, 자식 화면이 들어갈 자리를 그린다. 이 화면이 `useDialogFocus`와 `useBodyScrollLock`을 직접 import한다. `useDialogFocus`는 처음 초점 이동·Tab 제한·Escape·닫은 뒤 초점 복귀를, `useBodyScrollLock`은 메뉴·팝업·사진 뷰어가 겹쳐도 마지막 사용자가 닫힐 때만 뒤 화면 스크롤을 복원하는 일을 맡는다. 팝업 틀이 더 복잡해지면 `CaseDialogHeader`, `CaseDialogBackdrop`처럼 화면 1-1, 1-2로 나눈다.
- 화면 2 — `ImageGallery`: 사례 전용 이름을 쓰지 않는 공용 이미지 화면이다. `images` props만 받아 현재 사진, 이전·다음 버튼, 사진 순서, 썸네일, 큰 사진 보기를 표시한다. 이 화면이 `useImageGallery`와 큰 사진 보기 기능을 직접 import한다. `useImageGallery`는 현재 사진 선택·이전·다음·썸네일 선택 규칙만 제공한다. 사진 화면이 더 복잡해지면 `MainImage`, `ImageControls`, `ImageThumbnails`처럼 화면 2-1, 2-2, 2-3으로 나눈다.
- 화면 3 — `CaseInformation`: 시공 내용·장소·사용 제품·태그만 표시한다. 사진과 팝업을 제어하지 않으며, 현재는 별도 기능 import가 필요 없다. 정보 표시가 복잡해지면 `CaseDescription`, `CaseMetadata`처럼 화면 3-1, 3-2로 나눈다.
- props와 재사용: `ImageGallery`는 기능과 화면을 함께 갖되 데이터에는 의존하지 않는다. 사례 상세는 `images={caseItem.images}`를, 나중의 제품 상세는 `images={product.images}`를 전달해 같은 화면을 사용한다. 제품 상세를 위해 사례 사진 UI·사진 이동 코드를 복사하지 않는다. 공용 이미지 화면은 `src/components/`에 두고, 사례 고유 정보 화면은 `src/features/cases/`에 둔다.
- 사용자 기준: 2026-08-12 기준 부모는 화면을 합치고 props를 전달한다. 각 자식 화면은 자기 화면을 그리며 필요한 기능을 직접 import한다. 같은 화면 또는 기능을 A·B에서 쓸 수 있으면 데이터 props만 바꿔 재사용하고 코드를 복사하지 않는다.
- 상태: 미해결

## DEV-REV-027

- 심각도: 높음
- 대상: `src/**/*.ts`, `src/**/*.tsx`
- 문제: 현재 `src`의 컴포넌트 구조는 파일마다 화면 조립·세부 화면·상태·브라우저 제어·데이터 읽기가 섞여 있는 정도가 다르다. 사례 상세에서 합의한 “부모 → 자식 화면 → 자식이 필요한 기능 직접 import” 기준이 전체 소스의 구조 규칙으로 기록되어 있지 않다.
- 영향: 이후 제품 상세, 새 팝업, 홈 섹션처럼 비슷한 화면을 추가할 때 기존 코드를 복사하거나 부모 파일에 기능을 다시 넣게 된다. 파일 이름만 보고 무엇을 재사용하고 어디를 수정해야 하는지 판단하기 어렵다.
- 적용 규칙:
  1. `src/app/**/page.tsx`는 주소·메타데이터·서버 데이터 준비·부모 화면에 props 전달만 한다. 섹션의 긴 마크업, 브라우저 이벤트, 화면 전용 상태를 직접 두지 않는다.
  2. 부모 컴포넌트는 자식 화면을 배치하고 필요한 데이터·동작을 props로 전달한다. 부모는 자식 화면이 쓰는 세부 기능을 대신 구현하거나 import하지 않는다.
  3. 자식 화면은 자기 화면을 그리고, 필요한 재사용 기능을 직접 import한다. 화면이 커지면 그 화면 안에서 `화면-1`, `화면-2`처럼 더 작은 자식 화면으로 나눈다.
  4. 사례·제품·홈 등 여러 기능에서 같은 화면을 쓸 수 있으면 특정 기능 이름이 아닌 공용 이름을 쓰고 `src/components/`에 둔다. 공용 화면은 `images`, `title`, `items`처럼 필요한 데이터만 props로 받으며, 사례·제품 데이터 파일을 직접 읽지 않는다.
  5. 여러 화면에서 같은 동작을 쓸 수 있으면 그 동작은 `src/hooks/` 또는 역할이 드러나는 공용 함수 파일에 둔다. 각 화면이 필요한 기능만 직접 import한다. 예: 팝업 초점 처리, 뒤 화면 스크롤 잠금, 이미지 선택 이동.
  6. 한 화면에서만 쓰는 문구·정보 구성·업무 규칙은 해당 `src/features/<기능>/`에 둔다. 공용 파일로 만들기 위해 짧은 마크업까지 억지로 합치지는 않는다.
- 현재 파일 분류와 처리: `src/app/page.tsx`, `src/app/cases/page.tsx`, `src/app/products/page.tsx`, `src/app/company/page.tsx`는 데이터 준비·부모 조립으로 바꾼다. `CaseList.tsx`, `ProductList.tsx`, `HomePageStateReset.tsx`, `caseFilterStore.ts`, `casePaginationStore.ts`는 각각의 기능을 새 부모·자식 화면·목록 전용 상태 파일로 옮긴 뒤 제거한다. `CaseDetailModal.tsx`, `MobileMenu.tsx`, `HomeCaseCards.tsx`는 DEV-REV-019와 이 이슈의 화면 책임 기준으로 다시 나눈다. `Header.tsx`, `Footer.tsx`, `SocialLinks.tsx`, `Container.tsx`는 공통 화면으로 유지한다. `src/lib/*.ts`, `src/types/*.ts`는 화면이 아닌 공용 계산·데이터 형식 파일로 유지하되 DEV-REV-025 주석 규칙을 적용한다.
- 작업 순서: 1) 공용 화면·공용 기능을 만든다. 2) 각 주소의 자식 화면을 만든다. 3) 각 `page.tsx`를 데이터 준비·화면 배치만 하도록 바꾼다. 4) 기존 집중 파일의 기능을 모두 옮긴 것을 확인한 뒤에만 기존 파일을 제거한다. 5) 각 주소·필터·상세 팝업·키보드를 검증한다. 구현 순서와 파일별 변경은 개발 계획에서 다시 사용자 승인을 받는다.
- 근거: 2026-08-12 사용자 확인. 사례 상세의 이미지 화면은 제품 상세에서도 `images={product.images}`처럼 props만 바꿔 재사용할 수 있어야 하며, 이 원칙은 사례 상세에만 한정하지 않고 `src` 전체에 적용한다.
- 상태: 미해결

## 구현 결과 기록

- 해결 `DEV-REV-016`: 홈·회사 소개 라우트가 화면 섹션을 직접 그리지 않도록 `HomeHero`, `HomeRecentCases`, `HomeProducts`, `CompanyHero`, `CompanyIntroduction`, `CompanyServiceScopes`, `CompanyContact`를 추가했다.
- 해결 `DEV-REV-017`, `DEV-REV-022`: `CasesScreen`과 `useCaseList`로 사례 데이터·필터·페이지·URL 입력을 연결하고, 장소·제품 선택 교체 규칙을 한 파일에 모았다. 기존 `CaseList`와 두 개의 사례 저장소를 제거했다.
- 해결 `DEV-REV-018`: `ProductsScreen`, `ProductFilters`, `ProductResults`, `useProductList`를 추가하고 제품 선택을 `gk-product-list`에 저장했다. 새로고침·페이지 이동 뒤 선택을 유지하고 전체 버튼에서만 초기화한다.
- 부분 해결 `DEV-REV-019`: `CaseDetailModal`은 화면 조립으로 바꾸고 `ImageGallery`, `CaseInformation`, `useDialogFocus`, `useBodyScrollLock`, `useImageGallery`를 연결했다. 모바일 메뉴 연결과 키보드 수동 검증은 남아 있다.
- 해결 `DEV-REV-020`: 전화번호 타입을 필수 `string`으로 바꿨다.
- 해결 `DEV-REV-021`: 사례 선택 태그와 현재 페이지를 `gk-case-list`에 저장하고 새로고침·페이지 이동 뒤 유지하며 필터 초기화에서만 지운다.
- 해결 `DEV-REV-023`, `DEV-REV-024`: `PageHero`, `ProductCard`를 추가해 공용 화면을 재사용한다.
- 검증: `npm run build` 통과.
- 남은 이슈: `DEV-REV-005`, `DEV-REV-015`, `DEV-REV-019`, `DEV-REV-025`, `DEV-REV-027`.

## DEV-REV-020

- 심각도: 보통
- 대상: `src/components/layout/Header.tsx`, `src/components/layout/MobileMenu.tsx`, `src/types/content.ts`
- 문제: `SiteContent.phone` 타입은 `string | null`인데, 헤더와 모바일 메뉴는 전화번호가 반드시 있다고 가정해 `replaceAll(...)`을 바로 호출한다. 반대로 푸터와 회사 소개 화면은 전화번호가 없을 수 있다는 분기 화면을 가지고 있다. 같은 사업 핵심 정보에 대해 파일마다 전제가 다르다.
- 근거: 현재 `site.json`에는 전화번호가 있고, 사용자는 전화 문의가 GK 사이트의 핵심이므로 전화번호를 반드시 있는 값으로 확정했다.
- 영향: 타입·콘텐츠·화면의 기준이 다르면 개발자가 어느 파일에서는 null 처리를 넣고 어느 파일에서는 생략하는 식의 불필요한 차이를 계속 만든다.
- 구현 기준: `SiteContent.phone`을 `string` 필수값으로 바꾸고, 콘텐츠 검사도 빈 전화번호를 허용하지 않도록 맞춘다. 푸터와 회사 소개의 “전화번호가 없을 때” 분기 화면은 제거한다. 각 화면은 이미 JSON에서 읽은 `siteContent.phone`을 직접 표시하고, 현재처럼 해당 화면에서 `tel:${siteContent.phone.replaceAll("-", "")}` 링크를 만들 수 있다.
- 제외 범위: 전화 링크 생성을 위한 `getTelephoneHref` 같은 별도 공용 함수는 만들지 않는다. 이 규칙은 이미 같은 `siteContent.phone` 데이터에서 직접 확인 가능하며, 이번 구조 정리에서 공용화할 대상이 아니다.
- 사용자 확인: 2026-08-12 기준 전화번호는 반드시 존재하는 값이다. 전화번호 관련 데이터를 JSON에 함께 관리하므로, 링크 변환만을 위한 별도 공용 함수를 추가하지 않는다.
- 상태: 미해결

## DEV-REV-021

- 심각도: 높음
- 대상: `src/features/cases/store/caseFilterStore.ts`, `src/features/cases/store/casePaginationStore.ts`
- 문제: 두 Zustand 저장소는 메모리 상태만 생성하며 `sessionStorage`를 읽거나 쓰는 구현이 없다.
- 근거: DEC-017은 필터와 페이지 번호를 현재 브라우저 탭의 `sessionStorage`에 유지하도록 승인했으며, 그 범위를 명시한다.
- 영향: 페이지를 새로고침하면 사례 목록의 선택 태그와 페이지 번호가 사라져 승인된 사용자 경험과 달라진다. 문서와 소스가 달라 이후 유지보수자가 실제 기준을 판단하기도 어렵다.
- 구현 결정: `src/features/cases/state/useCaseList.ts` 하나가 사례 목록의 선택 태그와 현재 페이지를 관리한다. 내부 구현은 Zustand의 persist 기능을 `sessionStorage`와 연결한다. 저장 키는 `gk-case-list`이며, `selectedTags`와 `currentPage`만 저장한다. 상세 팝업·사진 뷰어 상태는 저장하지 않는다.
- 화면 이동 규칙: 사용자가 `/cases`를 새로고침하거나 홈·제품·회사 소개 등 다른 주소로 이동했다가 다시 `/cases`로 돌아와도 고른 태그와 현재 페이지를 유지한다. 선택 태그와 현재 페이지는 사용자가 사례 필터의 `필터 초기화`를 눌렀을 때만 초기화한다.
- 구현 위치: 현재의 `HomePageStateReset`은 홈에 들어올 때 사례 목록 값을 지우므로 제거한다. 사례 목록을 떠날 때 초기화하는 생명주기 처리도 만들지 않는다. 홈·제품·회사 소개 부모 페이지는 사례 목록 상태를 읽거나 바꾸지 않는다.
- 사용자 확인: 2026-08-12 기준 모든 필터값은 모든 새로고침과 모든 페이지 이동 뒤에도 유지한다. `sessionStorage`를 사용하므로 브라우저 탭을 닫으면 초기 상태로 돌아간다.
- 상태: 구현 대기

## DEV-REV-022

- 심각도: 보통
- 대상: `src/features/cases/components/CaseList.tsx`
- 문제: `handleLocationTagChange`와 `handleProductTagChange`는 제거할 태그 그룹만 다르고, 기존 그룹 선택을 제거한 뒤 새 태그를 추가하고 페이지 번호를 초기화하는 같은 규칙을 각각 구현한다.
- 근거: 같은 목록 상태 규칙이 두 곳에 있어 한쪽의 변경·버그 수정이 다른 쪽에 빠질 수 있다. 개발 역할 지침은 단일 책임과 단순한 구조를 우선한다.
- 영향: 장소·자재 필터의 선택 규칙을 바꿀 때 두 함수를 동기화해야 하며, 규칙 자체를 독립적으로 테스트하기 어렵다.
- 권장 조치: `useCaseList`에 `chooseLocationTag`, `chooseProductTag` 동작을 둬 선택 교체와 페이지 초기화를 한 번에 처리한다. 화면은 이 동작만 호출하고 UI 이벤트 처리만 맡는다.
- 사용자 확인: 2026-08-12 기준 장소는 1개, 제품도 1개만 선택한다. 같은 종류의 새 태그를 고르면 기존 태그를 교체한다. 장소와 제품을 함께 골랐을 때는 두 조건을 모두 만족하는 사례만 보여 준다.
- 상태: 미해결

## DEV-REV-023

- 심각도: 보통
- 대상: `src/features/cases/components/CaseList.tsx`, `src/features/products/components/ProductList.tsx`, `src/app/company/page.tsx`
- 문제: 세 화면이 어두운 배경의 컨테이너, 동일한 최소 높이·패딩·제목 스타일로 된 페이지 히어로를 각각 직접 구현한다. 바뀌는 것은 눈썹 문구, 제목, 설명뿐이다.
- 근거: DEC-026은 여러 기능이 공유하는 화면 요소를 `src/components/`에 두고, DEC-062는 반복되는 긴 스타일 조합을 공통 TSX 컴포넌트로 묶도록 정한다.
- 영향: 히어로의 여백·배경·제목 스타일을 바꿀 때 세 파일을 같이 수정해야 하며, 한 화면만 디자인 기준에서 벗어날 수 있다.
- 개편 파일: `src/components/ui/PageHero.tsx`는 `eyebrow`, `title`, `description` props를 받아 공통 첫 영역을 그린다. `CasesHero`, `ProductsHero`, `CompanyHero`는 각 페이지 문구를 `PageHero`에 전달한다. 히어로는 홈에 적용하지 않는다. 홈의 첫 영역은 대표 이미지와 사례 이동 기능이 있어 별도 `HomeHero`로 유지한다.
- 상태: 미해결

## DEV-REV-024

- 심각도: 높음
- 대상: `src/app/page.tsx`, `src/features/products/components/ProductList.tsx`
- 문제: 홈의 사용 제품 카드와 제품 목록의 제품 카드가 이미지 준비 상태, 제품명, 적합 현장, `시공 사례 보기` 링크라는 같은 정보를 서로 다른 마크업과 문구로 각각 구현한다.
- 근거: 디자인 시스템은 홈의 사용 제품 카드가 제품 목록과 같은 카드 컴포넌트와 표시 순서를 재사용하도록 확정했다.
- 영향: 홈과 제품 목록의 카드 모양·빈 이미지 문구·링크 동작이 달라지고, 제품 카드 변경을 두 곳에서 반복해야 한다.
- 개편 파일: `src/components/ui/ProductCard.tsx`는 제품명, 적합 현장, 사례 목록 링크를 props로 받아 카드 내부를 그린다. 홈 `HomeProducts`와 제품 목록 `ProductResults`가 이 카드를 직접 import한다. 홈의 3열과 제품 목록의 2열 배치는 카드 바깥 그리드가 담당한다.
- 구현 기준: 제품 이미지가 없으면 모든 제품 카드에 `죄송합니다. 이미지는 준비 중입니다.`를 표시한다. 이는 기존 디자인 시스템의 확정 문구이며, 홈 카드도 예외가 아니다.
- 상태: 미해결

## DEV-REV-025

- 심각도: 높음
- 대상: `src/**/*.ts`, `src/**/*.tsx`
- 문제: 함수와 `type` 선언 바로 위에 역할을 설명하는 한 줄 주석을 작성한다는 확정 규칙이 적용되지 않았다. 현재 `src`의 TS/TSX 코드에는 이 규칙에 해당하는 주석이 없다.
- 근거: DEC-067과 `docs/development/code-style.md`는 타입에는 데이터 출처를, 함수에는 기능을 간단히 설명하는 한 줄 주석을 요구한다.
- 영향: `getCasePage`, Zustand 저장소, 페이지·기능 컴포넌트, props 타입처럼 이름만으로 전체 책임과 데이터 출처를 즉시 알기 어려운 코드를 주니어 개발자가 빠르게 파악하기 어렵다. 합의한 코드 이해 방식도 작동하지 않는다.
- 권장 조치: 이번 구조 정리 대상부터 함수와 `type` 선언 바로 위에 역할 주석을 추가하고, 남은 `src` 파일에도 같은 규칙을 일괄 적용한다. 주석은 구현을 줄 단위로 해설하지 않고, 무엇을 입력받아 어떤 역할을 하는지 또는 데이터가 어디서 오는지만 한 줄로 적는다.
- 해결: `src`의 타입 선언과 함수·훅·화면 조립 함수 바로 위에 데이터 출처 또는 역할을 설명하는 한 줄 주석을 추가했다. 자명한 JSX와 변수 동작을 줄 단위로 설명하는 주석은 추가하지 않았다.
- 수정 파일: `src/**/*.ts`, `src/**/*.tsx`
- 검증: 2026-08-13 빌드 통과.
- 상태: 해결

## DEV-REV-026

- 심각도: 보통
- 대상: `src/features/home/components/HomeCaseCards.tsx`, `src/features/cases/components/CaseCard.tsx`, `src/features/cases/components/CaseList.tsx`
- 문제: 홈과 사례 목록이 모두 `thumbnailIndex`로 대표 사진을 고르고, 사진·태그·제목이 있는 클릭 가능한 사례 카드를 렌더링하며, `selectedCaseId`에서 선택 사례를 찾고 `CaseDetailModal`을 연다. 홈은 카드 마크업과 선택 상태를 직접 구현하고, 사례 목록은 `CaseCard`와 같은 상태 코드를 별도로 구현한다.
- 근거: 카드의 핵심 데이터·클릭 동작·상세 팝업은 같고, 차이는 홈에서 장소를 숨기고 3열 그리드를 사용한다는 표시 밀도뿐이다.
- 영향: 대표 사진의 빈 상태, 카드 접근성, 상세 열기 동작을 바꿀 때 홈과 사례 목록을 따로 수정해야 한다.
- 철회 사유: 카드의 공통 부분은 짧고, 홈과 목록은 표시 정보·그리드·상태 범위가 다르다. 현재 단계에서 `showLocation` 같은 옵션이나 공통 선택 상태를 만들면 중복 제거보다 props와 상태 결합이 늘어날 가능성이 크다. 실제로 함께 바뀌는 카드 규칙이 생길 때 다시 검토한다.
- 상태: 철회
