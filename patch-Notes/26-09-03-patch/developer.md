## 추가 1 - 개발자

- 파일: `wrangler.jsonc`
- 내용: Cloudflare Workers가 Next.js 정적 빌드 결과물인 `out` 폴더를 직접 배포하도록 정적 자산 설정을 추가했다. 끝 슬래시 제거와 정적 `404.html` 응답 규칙도 함께 지정했다.
- 이유: `npx wrangler deploy`가 Next.js 프로젝트를 OpenNext 서버 앱으로 자동 변환하면서 존재하지 않는 standalone manifest를 찾던 배포 오류를 방지하기 위해서다.
- 관련: `NFR-common-026`, `NFR-common-037`, `NFR-common-041`, 사용자 요청
- 검증: `next build --webpack`으로 정적 페이지 6개와 `out/404.html`을 생성했고, Cloudflare 로그와 동일한 Wrangler 4.128.0의 `deploy --dry-run`에서 `out`의 정적 자산 118개를 정상 인식했다. 기본 Turbopack 빌드는 실행 환경의 내부 포트 권한 제한으로 완료하지 못했으며, 제공된 Cloudflare 로그에서는 해당 빌드가 성공했다.

## 수정 2 - 개발자

- 파일: `src/app/globals.css`
- 내용: 모바일 헤더에서 `HeaderContact`의 문의 전화만 표시하고 소셜 아이콘은 숨기도록 반응형 스타일을 수정했다. 햄버거 메뉴와의 간격도 조정했다.
- 이유: 모바일 환경에서도 기존 `site.json`의 문의 전화 링크를 바로 확인하고 통화할 수 있도록 하기 위해서다.
- 관련: 사용자 요청
- 검증: Prettier 검사와 `npm run build -- --webpack`을 통과했다.

## 수정 6 - 개발자

- 파일: `src/features/home/04.homeFeaturedCases/HomeFeaturedCases.tsx`
- 내용: 대표 시공 사례 전체 보기 링크를 모바일에서만 표시하도록 변경했다.
- 이유: PC 화면에서는 카드 목록만 제공하고, 모바일 화면에서만 추가 이동 링크를 보여주기로 한 사용자 결정을 반영하기 위해서다.
- 관련: 사용자 요청
- 검증: 변경 후 Prettier 검사와 `npm run build -- --webpack`으로 검증한다.

## 수정 5 - 개발자

- 파일: `src/features/home/04.homeFeaturedCases/HomeFeaturedCases.tsx`
- 내용: 시공 사례 전체 보기 `RouteLink`를 카드 목록 바로 아래의 동일한 콘텐츠 영역으로 배치했다. 데스크톱에서는 오른쪽, 모바일에서는 중앙에 정렬하고 경로가 없을 때는 링크만 생략하도록 조건부 렌더링했다.
- 이유: 카드 목록과 분리되어 보이던 링크를 대표 시공 사례의 후속 행동으로 자연스럽게 연결하기 위해서다.
- 관련: 사용자 요청
- 검증: Prettier 검사와 `npm run build -- --webpack`을 통과했다.

## 수정 4 - 개발자

- 파일: `src/features/cases/06.caseModal/CaseModal.tsx`
- 내용: 모바일 사례 모달을 화면 전체 높이로 확장하고 오버레이를 전체 영역에 맞춰 배치했다. 설명 영역이 상단에 고정되고 사진 영역이 나머지 공간을 채우도록 기존 모바일 flex 구조와 연결했다.
- 이유: 모바일 모달 뒤로 공용 헤더 상단이 노출되는 문제를 제거하기 위해서다.
- 관련: 사용자 요청
- 검증: 변경 후 `npm run build -- --webpack`으로 정적 페이지 6개 생성을 확인했다.

## 수정 3 - 개발자

- 파일: `src/features/cases/02.casesFilter/CasesFilterGroup.tsx`, `src/features/cases/06.caseModal/CaseModal.tsx`, `src/features/cases/06.caseModal/CaseModalGallery.tsx`, `src/features/cases/06.caseModal/CaseModalInfo.tsx`, `src/features/cases/07.photoViewer/PhotoViewer.tsx`
- 내용: 모바일 필터 버튼의 축소·줄바꿈을 막고, 모바일 사례 모달을 설명 위·사진 아래 순서로 배치했다. 설명 영역은 고정하고 사진 영역은 남은 높이를 사용하도록 조정했으며, 모달과 포토뷰어 사진은 고정 프레임을 채우도록 변경했다.
- 이유: 모바일 필터의 장소 옵션 표시 오류, 모바일 모달 순서·높이 문제, 세로 사진 양옆의 검정 여백 문제를 수정하기 위해서다.
- 관련: 사용자 요청
- 검증: Prettier 검사와 `npm run build -- --webpack`을 통과했다.
