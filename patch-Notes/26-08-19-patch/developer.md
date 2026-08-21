## 추가 1 — 개발자

- 파일: `next.config.ts`, `public/_headers`, `.gitignore`
- 내용: Cloudflare Pages 정적 배포를 위해 Next.js 정적 내보내기와 비최적화 이미지 출력을 설정했다. 모든 정적 응답에는 콘텐츠 출처 제한, iframe 삽입 차단, 미사용 브라우저 권한 차단 헤더를 적용했다.
- 이유: 서버 기능 없이 `out` 정적 산출물을 배포하고, 외부 리소스 로드와 다른 사이트의 iframe 삽입을 제한하기 위해서다.
- 관련: NFR-common-001, NFR-common-007, NFR-common-024
- 검증: `next build`로 `out/_headers` 포함 여부와 정적 내보내기 성공 여부를 확인한다.

## 수정 2 — 개발자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 역할 예외 승인에 따라 `NFR-common-025`를 시공 사례·사용 제품 목록의 필터와 페이지 번호를 Zustand 및 `sessionStorage`로 현재 브라우저 탭에 유지하는 기준으로 수정했다. 방문자 식별·행동 추적 목적의 저장소 사용 금지는 유지한다.
- 이유: 목록 필터와 페이지를 다시 설정하는 반복을 줄이되, 분석·광고·프로필 데이터는 수집하지 않기 위해서다.
- 관련: NFR-common-025, NFR-common-010, REQ-common-040, REQ-common-041
- 검증: 같은 탭에서 페이지 이동·새로고침 뒤 필터·페이지 번호가 유지되고, 탭을 닫은 뒤 새 탭에서는 초기화되는지 확인한다.

## 수정 3 — 개발자

- 파일: `config/prettierignore`
- 내용: 사용자 선택에 따라 Next.js 생성 폴더인 `.next/`, `out/`과 정적 원본 이미지, 의존성 잠금 파일만 Prettier 검사에서 제외했다. 직접 관리하는 문서·설정 파일은 다시 검사 대상에 포함했다.
- 이유: 생성 산출물 때문에 포맷 검사가 실패하지 않게 하면서, 사람이 관리하는 소스·문서·설정의 포맷 오류는 계속 발견하기 위해서다.
- 관련: DEV-REV-035, package.json
- 검증: `npm run format:check`가 `.next/`과 `out/`을 제외한 직접 관리 파일을 검사하는지 확인한다.

## 수정 4 — 개발자

- 파일: `src/components/layout/Header.tsx`
- 내용: 사용자 선택에 따라 공통 헤더를 공개 페이지 이동과 브라우저 뒤로·앞으로의 단일 스크롤 처리 지점으로 바꿨다. 브라우저 기본 스크롤 복원을 수동으로 전환하고, 경로가 바뀔 때마다 페이지 최상단을 표시한다.
- 이유: 헤더·모바일 메뉴·본문 링크마다 같은 스크롤 코드를 중복하지 않고 NFR-common-053의 대표 공개 페이지 최상단 표시 기준을 적용하기 위해서다.
- 관련: DEV-REV-033, NFR-common-053
- 검증: `/cases` 목록 중간에서 다른 대표 공개 페이지로 이동한 뒤 브라우저 뒤로·앞으로로 돌아와도 최상단이 표시되는지 확인한다.

## 수정 5 — 개발자

- 파일: `src/features/cases/state/useCaseList.ts`, `src/components/ui/ProductCard.tsx`, `src/features/cases/components/CasesScreen.tsx`
- 내용: 사용자 선택에 따라 사례·제품 목록의 Zustand 저장 키를 분리한 채 유지했다. 제품 카드의 `시공 사례 보기`는 사례 목록의 자재 필터를 설정하고 `/cases`로 이동하며, `?tag=`와 `#case-` 주소 복원은 제거했다.
- 이유: 필터·페이지 상태는 현재 탭의 `sessionStorage`에 유지하면서도, 공개 목록 URL과 사례 상세 팝업 주소는 기본 `/cases`로 고정하기 위해서다.
- 관련: DEV-REV-029, NFR-common-010, NFR-common-025, REQ-common-028
- 검증: 제품 카드 선택 뒤 주소가 `/cases`이고 선택 자재·1페이지가 표시되는지, `/cases?tag=...`와 `/cases#case-...`를 직접 열어도 URL 기반 필터·팝업 복원이 없는지 확인한다.
