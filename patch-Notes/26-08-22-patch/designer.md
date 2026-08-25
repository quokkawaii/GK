## 수정 1 — 디자이너

- 파일: `docs/design/design-system.md`
- 내용: `docs/design/references/toss.md`와 겹치는 색상, 타이포그래피, 간격, 모서리, 버튼, 필터 색상, 페이지 번호, 반응형 원칙 앞에 비노출 HTML 주석을 추가했다. Toss 참조값과 GK 전용 확장값이 함께 있는 항목은 중복 범위를 주석에서 구분했다.
- 이유: 사용자가 두 문서에서 겹치는 내용을 디자인 시스템 문서에 주석으로 표시하도록 요청했다.
- 관련: 없음
- 검증: 각 주석의 참조 항목과 `toss.md`의 토큰 및 설명을 대조하고, 기존 디자인 규칙 본문이 변경되지 않았는지 확인했다.

## 수정 2 — 디자이너

- 파일: `docs/design/design-system.md`
- 내용: `toss.md`와 중복되던 색상값, 타이포그래피 수치, 간격 수치, 모서리·테두리 값, 마케팅 버튼 상세 규격과 중복 표시 주석을 삭제했다. GK 디자인 시스템에는 `toss.md` 참조 위치와 GK 화면별 적용·확장 규칙만 남겼다.
- 이유: 사용자가 `toss.md`와 겹치는 내용은 GK 디자인 시스템에서 삭제하도록 요청했다.
- 관련: 없음
- 검증: `design-system.md`에 중복 수치가 남았는지 검색하고, GK 전용 필터·카드·사진·팝업·반응형 규칙이 유지됐는지 확인했다.

## 수정 3 — 디자이너

- 파일: `docs/design/previews/common/header.html`
- 내용: 공통 헤더 검토용 HTML 시안을 추가했다. 회사 식별과 홈 이동, 홈·시공 사례·제품 소개·회사 소개 탐색, Instagram·YouTube 외부 채널 링크, 현재 메뉴 표시, 모바일 햄버거 메뉴를 포함했다. 전화 문의 CTA는 헤더에서 제외했다.
- 이유: 공통 요구사항과 디자인 문서를 참조한 헤더 시안을 요청받았다.
- 관련: `REQ-common-007`, `REQ-common-015`, `REQ-common-016`, `REQ-common-018`, `REQ-common-022`
- 검증: 360px·768px·1280px 기준 반응형 CSS, 모바일 메뉴의 `aria-expanded` 전환, 외부 링크의 새 탭 접근 가능한 이름, 중복 ID가 없는지 확인했다.

## 수정 4 — 디자이너

- 파일: `docs/design/previews/common/hero.html`
- 내용: 실제 밀양 공장 시공 사진을 사용하는 공통 히어로 시안을 추가했다. 대표 문구, 시공 사례 이동 CTA, 전화 문의 CTA, 반응형 이미지 배치, 데스크톱·태블릿의 히어로 이탈 후 표시되는 오른쪽 전화 문의 CTA를 포함했다.
- 이유: 공통 디자인 문서의 히어로 전화 문의·대표 사진·반응형 기준을 검토할 수 있는 HTML 시안을 요청받았다.
- 관련: `REQ-common-001`, `REQ-common-023`, `REQ-common-026`, `NFR-common-002`
- 검증: 360px·768px·1280px 기준 반응형 규칙, 이미지 대체 텍스트, `tel:` 링크, 스크롤 후 오른쪽 CTA 표시 조건, `prefers-reduced-motion` 처리를 확인했다.

## 수정 5 — 디자이너

- 파일: `docs/design/previews/common/hero.html`
- 내용: 히어로 대표 사진을 `cases.json`의 9개 사례 대표 사진 슬라이드로 변경하고, 사진 양쪽에 이전·다음 버튼을 추가했다. 버튼 선택 시 이미지 경로, 대체 텍스트, 사례명이 함께 변경되도록 했다.
- 이유: 히어로에서 각 시공 사례의 대표 사진을 슬라이드 쇼로 보여주고 양쪽 전환 버튼을 제공하도록 요청받았다.
- 관련: `REQ-common-006`, `REQ-common-023`
- 검증: `cases.json`의 각 사례 `thumbnailIndex` 대표 사진 경로와 슬라이드 배열을 대조하고, 이전·다음 순환 전환 및 `aria-live` 사례명 갱신을 확인했다.

## 수정 6 — 디자이너

- 파일: `docs/design/previews/common/header.html`, `docs/design/previews/common/hero.html`
- 내용: 헤더의 Instagram·YouTube 링크를 제거하고 히어로 본문으로 이동했다. 히어로 오른쪽 고정 전화 문의 영역에는 전화번호와 두 공식 외부 채널 아이콘 링크를 함께 배치했으며, `public/images/social/`의 아이콘 파일을 사용했다.
- 이유: 헤더의 공식 외부 채널을 히어로와 오른쪽 문의 영역으로 이동하도록 요청받았다.
- 관련: `REQ-common-007`, `REQ-common-015`, `REQ-common-016`, `REQ-common-018`, `REQ-common-023`, `REQ-common-026`
- 검증: 헤더에 외부 채널 링크가 남아 있지 않은지, 히어로와 오른쪽 문의 영역에 두 링크가 각각 존재하는지, 두 아이콘 경로가 실제 `public/images/social/` 파일과 일치하는지 확인했다.

## 수정 7 — 디자이너

- 파일: `docs/design/previews/common/hero.html`
- 내용: 대표 사진과 소셜 아이콘의 절대 웹 경로를 `docs/design/previews/common/` 기준 `public/` 상대 경로로 변경했다.
- 이유: HTML 시안을 파일로 직접 열 때 `/images/...`가 로컬 파일 시스템의 루트로 해석되어 사진과 아이콘이 표시되지 않는 문제를 수정했다.
- 관련: 없음
- 검증: 슬라이드 9개 이미지와 Instagram·YouTube 아이콘의 상대 경로가 실제 `public/images/` 파일을 가리키는지 확인했다.

## 수정 8 — 디자이너

- 파일: `docs/design/previews/common/header.html`
- 내용: 데스크톱 기본 메뉴의 자동 왼쪽 여백을 제거하고 남은 헤더 영역에서 메뉴를 중앙 정렬하도록 변경했다.
- 이유: 헤더에서 메뉴가 오른쪽으로 치우쳐 보이는 문제를 수정했다.
- 관련: `REQ-common-004`, `REQ-common-022`
- 검증: 메뉴가 회사 식별 요소와 모바일 메뉴 버튼 사이의 영역에서 중앙 정렬되도록 CSS를 확인했다.

## 수정 9 — 디자이너

- 파일: `docs/design/previews/common/footer.html`
- 내용: 공통 푸터 검토용 HTML 시안을 추가했다. 공개 확정된 회사명, 서비스 지역, 대표 전화번호를 표시하고, 확정되지 않은 주소·사업자 정보와 공식 외부 채널 링크는 표시하지 않았다. 데스크톱 번호 표시와 모바일 전화 연결을 분리했다.
- 이유: 공통 디자인 문서의 푸터 회사 정보·전화 문의·반응형 기준을 검토할 수 있는 HTML 시안을 요청받았다.
- 관련: `REQ-common-001`, `REQ-common-005`, `REQ-common-006`, `REQ-common-017`, `NFR-common-002`
- 검증: `site.json`의 확정값과 표시값을 대조하고, 주소·사업자 정보·소셜 링크가 시안에 없는지 확인했다. 360px·768px·1280px 반응형 CSS와 모바일 `tel:` 링크를 확인했다.
