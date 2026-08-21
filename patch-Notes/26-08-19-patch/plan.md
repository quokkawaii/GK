## 수정 1 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-017`을 자동 전환·움직임 미제공으로 확정했다. 네 공개 페이지의 자동 재생·자동 전환·부드러운 스크롤을 제공하지 않고, 사례 상세 사진은 방문자 조작으로만 변경한다.
- 이유: 사진과 필터 결과가 자동으로 움직이지 않게 하여 불필요한 상호작용과 모션 설정 처리를 만들지 않기 위해서다.
- 관련: NFR-common-017, REQ-common-030, 시공 사례 상세 사진 뷰어
- 검증: 자동 전환 금지, 방문자 조작에 따른 사진 변경, 필터 뒤 즉시 이동, 모션 감소 별도 처리 미제공 기준이 완료 기준에 각각 있는지 확인했다.

## 수정 2 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-018`을 필터·사진 변경의 별도 보조기술 실시간 안내 미제공으로 확정했다. 기존 화면의 결과 요약·결과 없음 안내·사진 위치 표시는 유지하고, 별도 실시간 안내 상태는 추가하지 않는다.
- 이유: 첫 출시에서는 이미 화면에 표시되는 상태 정보 외에 실시간 안내를 관리하지 않기로 했기 때문이다.
- 관련: NFR-common-018, REQ-common-029, REQ-common-030, 시공 사례 상세 갤러리
- 검증: 결과 요약·결과 없음·사진 위치의 기존 화면 표기 유지와 별도 실시간 안내 미제공 기준이 완료 기준에 있는지 확인했다.

## 수정 3 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-019`를 정상 공개 페이지의 canonical 주소 제공으로 확정했다. 홈·시공 사례 목록·사용 제품·회사 소개에는 기본 공개 URL의 canonical을 제공하고, 필터 결과·사례 상세 팝업·404·오류 화면에는 제공하지 않는다.
- 이유: 색인 대상 공개 페이지의 대표 주소는 명확히 하되, 독립 URL이 없는 상세 팝업과 오류 상태를 대표 콘텐츠로 만들지 않기 위해서다.
- 관련: NFR-common-009, NFR-common-010, NFR-common-019, REQ-common-028, REQ-common-037
- 검증: 기존 URL·사이트맵 규칙과 중복되던 문구를 제거하고, 네 공개 페이지의 canonical 적용 범위와 제외 범위를 완료 기준에 각각 남겼다.

## 수정 4 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-020`을 대표 이미지 없는 공개 페이지의 공유 이미지 미제공으로 확정했다. 사이트 아이콘·robots·sitemap은 제공하며, 실제 대표 이미지가 없는 페이지에는 다른 시공 사진·임의 이미지·공통 브랜드 이미지를 대신 사용하지 않는다.
- 이유: 실제 콘텐츠와 관계없는 사진이 공유 미리보기에 표시되는 것을 막기 위해서다.
- 관련: NFR-common-004, NFR-common-020
- 검증: 제목·설명·실제 대표 이미지의 기존 요구사항과 중복되던 문구를 제거하고, 아이콘·robots·sitemap 및 대표 이미지 미제공 기준을 완료 기준에 남겼다.

## 수정 5 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-021`을 첫 출시 업체 구조화 데이터 미제공으로 확정했다. 나중에 단일 배포 도메인과 실제 공개 회사 정보가 모두 준비되면 별도 결정으로 다시 검토한다.
- 이유: 현재 주소·사업자 정보가 공개 확정되지 않았으므로, 불완전한 업체 정보를 구조화 데이터에 넣지 않기 위해서다.
- 관련: NFR-common-009, NFR-common-021
- 검증: 첫 출시 구조화 데이터 미포함, 근거 없는 값 미포함, 단일 배포 도메인이 구조화 데이터 자동 시작 조건이 아님을 완료 기준에서 확인했다.

## 수정 6 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-022`를 대표 사진 우선 로드와 나머지 지연 로드로 확정했다. 각 공개 페이지의 첫 화면 사진 1장만 우선 로드하며, 시공 사례는 `cases.json`의 `thumbnailIndex`가 가리키는 사진을 대표 사진으로 사용한다.
- 이유: 시공 사진을 첫 화면에서 빠르게 보이게 하되, 목록과 상세 갤러리의 나머지 사진이 초기 표시를 늦추지 않게 하기 위해서다.
- 관련: NFR-common-022, `src/content/cases.json`, 디자인 시스템 사진 기준
- 검증: 현재 모든 시공 사례에 `thumbnailIndex`가 있고, 각 항목은 `images` 배열을 함께 가진 것을 확인했다.

## 수정 7 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-023`을 제거하고, 정적 산출물 배포·요청 시점 서버 기능 미사용·빌드 시점 공개 콘텐츠 및 URL 결정·404 제공 기준을 `NFR-common-001`에 통합했다.
- 이유: 정적 프론트엔드 범위를 같은 내용으로 두 번 관리하지 않기 위해서다.
- 관련: NFR-common-001, NFR-common-023, REQ-common-021
- 검증: `NFR-common-001`에 통합한 범위가 있고 `NFR-common-023` 식별자는 더 이상 없는지 확인한다.

## 수정 8 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-025`를 브라우저 저장소·페이지 간 목록 상태·추적 데이터 미사용으로 확정했다. 시공 사례 상세 팝업을 닫을 때만 기존 목록 상태를 유지하고, 홈·사용 제품·회사 소개로 이동하거나 새로고침·새 탭으로 시공 사례 목록에 들어오면 필터를 해제한 1페이지를 표시한다.
- 이유: 방문자 상태를 저장하거나 추적하지 않고, 목록을 다시 방문할 때 예측 가능한 초기 상태를 제공하기 위해서다.
- 관련: NFR-common-025, REQ-common-029, REQ-common-030, REQ-common-028
- 검증: 팝업 닫기 시 유지 범위와 다른 페이지 이동·새로고침·새 탭 진입 시 초기화 범위가 완료 기준에 각각 있는지 확인한다.

## 수정 9 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-026`을 정적 빌드와 Cloudflare 배포 성공 확인으로 확정했다. 공통 화면의 수동 검수와 별도 검수 결과 기록은 첫 출시와 이후 운영 배포의 필수 조건에서 제외했다.
- 이유: 현재 서비스에서는 전체 수동 검수 체계의 운영 비용보다 정적 빌드와 배포 성공을 빠르게 확인하는 것을 우선하기 때문이다.
- 관련: NFR-common-026, NFR-common-001, REQ-common-038
- 검증: 정적 빌드 성공·Cloudflare 배포 성공만 남기고 기존 수동 검수·기록 항목이 완료 기준에서 제거됐는지 확인한다.

## 수정 10 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-027`을 긴 한국어 콘텐츠 전체 표시와 모바일 가로·세로 화면의 핵심 조작 유지로 확정했다. 목록 카드·상세 팝업·헤더·푸터는 실제 정보를 줄바꿈으로 표시하며, 말줄임표만으로 숨기지 않는다.
- 이유: 실제 회사·시공 정보가 길어져도 정보가 가려지거나 핵심 조작이 화면 밖으로 밀리지 않게 하기 위해서다.
- 관련: NFR-common-027, NFR-common-016, 시공 사례 상세 팝업
- 검증: 긴 텍스트의 줄바꿈 표시 범위와 모바일 가로·세로 화면의 헤더·전화·필터·팝업·사진 조작 기준이 완료 기준에 있는지 확인한다.

## 수정 11 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-029`를 공통 변경의 연계 파일 동시 반영으로 확정했다. 공통 값·URL·구조·접근성 기준을 바꿀 때 참조 위치를 확인하고, 영향받는 파일을 같은 변경에서 함께 수정한다.
- 이유: 공통 변경 후 연계 화면과 검색·공유 자산을 따로 수정하면 값과 동작이 어긋날 수 있기 때문이다.
- 관련: NFR-common-029, NFR-common-026, 대표 전화번호·URL·메타데이터 요구사항
- 검증: 공통 값, URL, 접근성·반응형 변경별 연계 수정 대상과 별도 승인 문서 미생성 기준이 완료 기준에 있는지 확인한다.

## 수정 12 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-030`을 Toss 마케팅 웹 색상값 사용으로 확정했다. 디자인 시스템의 색상 토큰은 사용하되, 텍스트·아이콘·테두리·조작 상태의 대비 비율을 별도 수치나 출시 조건으로 관리하지 않는다.
- 이유: 첫 출시에서는 디자인 시스템 색상값의 일관된 적용을 우선하고 별도 대비 수치 체계를 운영하지 않기로 했기 때문이다.
- 관련: NFR-common-030, `docs/design/design-system.md`, `docs/design/references/toss.md`
- 검증: 디자인 시스템 색상 토큰 사용과 별도 대비 수치 미관리 기준이 완료 기준에 있는지 확인한다.

## 수정 13 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-031`을 아이콘 조작 요소의 목적 이름 제공으로 확정했다. 메뉴·닫기·사진·페이지 이동 아이콘의 이름만 필수로 두고, 필터·현재 페이지·팝업 상태는 첫 출시의 별도 요구사항으로 관리하지 않는다.
- 이유: 사진 중심 첫 출시에서 아이콘의 기본 목적만 명확히 하되, 상태 정보를 별도 접근성 체계로 운영하지 않기 위해서다.
- 관련: NFR-common-031, `docs/design/design-system.md`, 기존 모바일 메뉴·시공 사례 상세·사진 갤러리 구현
- 검증: 아이콘 조작 요소의 이름 범위와 상태 정보의 비필수 범위가 완료 기준에 있는지 확인했다. 기존 구현의 상태 속성은 제거하지 않는다.

## 수정 14 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-033`을 GitHub 연동 Cloudflare 자동 재배포 사용으로 확정했다. 배포 연결 브랜치 변경으로 자동 재배포하며, 별도 캐시 삭제·반영 시간 목표·화면·공유 미리보기 확인 절차는 두지 않는다.
- 이유: 현재 서비스는 GitHub 변경에 따른 Cloudflare 자동 재배포만으로 정적 자산 갱신을 운영하기로 했기 때문이다.
- 관련: NFR-common-033, NFR-common-026, REQ-common-038
- 검증: 자동 재배포 범위와 별도 캐시·반영·확인 절차 미제공 기준이 완료 기준에 있는지 확인한다.

## 수정 15 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-034`를 `REJECTED`로 폐기 처리했다.
- 이유: 현재 출시 기준은 정적 빌드 성공과 Cloudflare 배포 성공만 확인하며, 화면 이상을 별도로 감지하거나 롤백을 발동하는 절차를 두지 않기 때문이다.
- 관련: NFR-common-034, NFR-common-026
- 검증: `NFR-common-034`의 상태가 `REJECTED`이고 요구사항 본문은 이력 보존을 위해 유지되는지 확인한다.

## 수정 16 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-035`를 `REJECTED`로 폐기 처리했다.
- 이유: 현재 웹사이트는 전화 연결과 외부 채널 링크만 제공하며, 법정 표기·개인정보 안내의 별도 사전 검토 절차를 제품 요구사항으로 두지 않기 때문이다. 실제 운영 판단이나 향후 데이터 처리 기능 도입은 별도 업무에서 다룬다.
- 관련: NFR-common-035, NFR-common-007, NFR-common-008, NFR-common-025
- 검증: `NFR-common-035`의 상태가 `REJECTED`이고 요구사항 본문은 이력 보존을 위해 유지되는지 확인한다.

## 수정 17 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `REQ-common-033`을 배포 콘텐츠의 즉시 공개로 확정했다. 운영 배포본의 JSON과 `public` 폴더에 포함한 사례·제품·사진은 모두 공개하며, 발행 상태·비공개 전환·숨김·삭제 절차는 제공하지 않는다.
- 이유: 현재 정적 사이트에서는 별도 콘텐츠 발행·비공개 관리 기능을 운영하지 않기로 했기 때문이다.
- 관련: REQ-common-033, NFR-common-001, NFR-common-033
- 검증: 공개 처리 범위와 발행 상태·관리 UI·별도 숨김·삭제 절차 미제공 기준이 완료 기준에 있는지 확인한다.

## 수정 18 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `REQ-common-034`를 `REJECTED`로 폐기 처리했다.
- 이유: 현재 정적 콘텐츠 구조에서는 이미지 없음 안내와 JSON 직접 관리로 충분하며, 사례 ID·제품 참조를 별도 검증하거나 빌드를 중단하는 기능을 제공하지 않기 때문이다.
- 관련: REQ-common-034, REQ-common-033, 디자인 시스템 이미지 없음 상태
- 검증: `REQ-common-034`의 상태가 `REJECTED`이고 요구사항 본문은 이력 보존을 위해 유지되는지 확인한다.

## 수정 19 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `REQ-common-038`을 Cloudflare Pages 대표 도메인 단일 운영으로 확정했다. 대표 커스텀 도메인 하나를 연결하고, `www`와 `pages.dev` 주소는 대표 도메인으로 301 이동한다.
- 이유: 정적 내보내기에서 대표 주소·HTTPS·404·보안 헤더의 제공 위치를 Cloudflare Pages로 일관되게 운영하기 위해서다.
- 관련: REQ-common-038, NFR-common-009, NFR-common-024, NFR-common-033
- 검증: Cloudflare Pages 정적 배포, 대표 도메인 연결, `www`·`pages.dev` 301 이동, HTTPS·404·`_headers` 제공 범위가 완료 기준에 있는지 확인한다.

## 수정 20 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `REQ-common-015`를 공통 헤더의 전화 문의 CTA 미제공으로 복원했다. 전화 문의는 각 화면 히어로와 데스크톱·태블릿의 히어로 이탈 뒤 오른쪽 CTA로 제공하며, 모바일에는 오른쪽 CTA를 표시하지 않는다.
- 이유: 헤더는 기본 탐색에 집중하고 전화 문의는 히어로와 스크롤 뒤 CTA로 일관되게 제공하기 위해서다.
- 관련: REQ-common-015, REQ-common-023, REQ-common-026
- 검증: 헤더 CTA 미표시, 히어로 CTA, 데스크톱·태블릿 오른쪽 CTA, 모바일 오른쪽 CTA 미표시 기준이 각각 요구사항에 있는지 확인한다.

## 수정 21 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 과거 확정 이력에 따라 `NFR-common-006`을 `REJECTED`로 복원했다.
- 이유: 첫 출시에서는 별도 성능 수치와 성능 측정 체계를 출시 조건으로 운영하지 않기로 이미 결정했기 때문이다.
- 관련: NFR-common-006, NFR-common-001
- 검증: `NFR-common-006`의 상태가 `REJECTED`이고 요구사항 본문은 이력 보존을 위해 유지되는지 확인한다.

## 수정 22 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 직접 지시에 따라 `NFR-common-024`를 `DECIDED`로 복원했다. 정적 배포본의 보안 헤더 설정은 적용하되, 별도 배포 기록은 출시 조건에서 제외했다.
- 이유: Cloudflare Pages 정적 배포에 보안 헤더를 추가했으며, 별도 수동 검수·기록 절차는 운영하지 않기로 했기 때문이다.
- 관련: NFR-common-024, NFR-common-026, REQ-common-038, `public/_headers`
- 검증: `NFR-common-024` 상태, 보안 헤더 적용 기준, 별도 배포 기록 미제공 기준을 확인한다.

## 수정 23 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: Next.js 정적 내보내기, Cloudflare Pages, Google Search Central, W3C WCAG 2.2 공식 문서에서 아직 식별자화되지 않은 배포·검색·보안·접근성 조건을 `NFR-common-036` ~ `NFR-common-049`으로 추가했다. 기존 요구사항 범위와 겹치는 내용은 새 요구사항으로 반복하지 않고, `NFR-common-004`의 공유 이미지 기준은 `NFR-common-020`의 실제 대표 이미지 조건을 따르도록 통합했다. 이후 디자인 시스템·`toss.md`와 다시 대조해 `NFR-common-045`의 초점 표시, `NFR-common-046`의 사진·필터 드래그 대체 문구를 제거하고 디자인 기준 밖의 검증 조건만 남겼으며, 새 항목별 공식 출처 링크도 요구사항 문서에 기록했다.
- 이유: 공식 플랫폼 제약과 접근성·검색 기준을 기존 구현물과 무관하게 요구사항 단계에서 빠짐없이 관리하고, 확정 전 선택이 필요한 값은 임의로 결정하지 않기 위해서다.
- 관련: NFR-common-001, NFR-common-004, NFR-common-016, NFR-common-019, NFR-common-020, NFR-common-024, NFR-common-033, NFR-common-036 ~ NFR-common-049
- 검증: 새 식별자가 모두 `TBD`이고, 기존 `DECIDED`·`REJECTED` 상태를 변경하지 않았으며, 공유 이미지 기준이 `NFR-common-020`으로 단일화됐는지 확인한다.

## 수정 24 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-036`을 Cloudflare Pages 운영 배포 브랜치 요구사항으로 분리하고, GitHub `main` 브랜치 변경만 대표 도메인 운영 배포를 시작하도록 `DECIDED`로 확정했다. 기존 항목에 함께 있던 미리보기 배포 범위·접근 정책은 `NFR-common-050`으로 분리해 `TBD`로 유지했다.
- 이유: 운영 브랜치 결정과 미리보기 자동 생성·접근 정책은 서로 독립된 Cloudflare Pages 설정이므로, 하나만 선택한 상태에서 전체 항목을 확정하지 않기 위해서다.
- 관련: NFR-common-033, NFR-common-036, NFR-common-050
- 검증: `NFR-common-036`이 `main` 운영 배포만 다루며 `DECIDED`인지, `NFR-common-050`이 미리보기 정책만 다루며 `TBD`인지 확인한다.

## 수정 25 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-050`을 Cloudflare Pages 미리보기 자동 배포 미제공으로 `DECIDED` 처리했다. `main` 이외 브랜치 변경은 미리보기 URL을 만들지 않으며, 미리보기 전용 Access·`noindex` 확인도 제공하지 않는다.
- 이유: 선택한 정책은 외부 미리보기 URL 자체를 생성하지 않는 범위이므로, 접근 제한이나 색인 제외 정책을 별도 요구사항으로 분리할 대상이 없기 때문이다.
- 관련: NFR-common-036, NFR-common-050
- 검증: `NFR-common-050`의 상태가 `DECIDED`이고, `main` 외 브랜치 미리보기 배포·미리보기 URL·전용 접근 정책 미제공 기준이 모두 있는지 확인한다.

## 수정 26 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-037`을 대표 공개 URL의 끝 슬래시 미사용으로 분리하고 `DECIDED`로 확정했다. `/cases/`, `/cases.html`, `/cases/index.html` 등 변형 주소는 `/cases`로 301 이동한다. 비대표 도메인 이동의 경로·쿼리 문자열 보존 여부는 `NFR-common-051`로 분리해 `TBD`로 유지했다.
- 이유: URL 끝 슬래시 형식과 비대표 도메인 이동의 경로·쿼리 보존은 독립된 주소 정책이므로, 선택한 형식만 확정하고 나머지는 별도로 결정하기 위해서다.
- 관련: NFR-common-019, NFR-common-020, NFR-common-037, NFR-common-051
- 검증: `NFR-common-037`이 끝 슬래시 없는 대표 URL과 변형 주소 301만 다루며 `DECIDED`인지, `NFR-common-051`이 경로·쿼리 보존만 다루며 `TBD`인지 확인한다.

## 수정 27 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-051`을 비대표 도메인 이동 시 경로·쿼리 문자열 전체 보존으로 `DECIDED` 처리했다. `www`와 `pages.dev`의 공개 경로·GET 쿼리 문자열은 대표 도메인의 같은 끝 슬래시 없는 경로로 301 이동한다.
- 이유: 비대표 주소로 들어온 방문자가 열려던 공개 화면과 URL에 전달된 정보를 잃지 않고 대표 도메인으로 이동하게 하기 위해서다.
- 관련: NFR-common-037, NFR-common-051, REQ-common-038
- 검증: `www`·`pages.dev`의 경로·쿼리 보존 예시, 끝 슬래시 없는 이동 결과, sitemap·canonical의 기본 URL 기준이 완료 기준에 있는지 확인한다.

## 수정 28 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-038`을 `public` 폴더 사진의 정적 직접 제공으로 분리하고 `DECIDED` 처리했다. 시공·제품 사진은 `public`에서 정적 빌드 결과물로 포함되어 같은 배포 도메인에서 직접 제공하며, 이미지 최적화 서버·외부 이미지 서비스·서버 API를 사용하지 않는다. 기존 `NFR-common-001`과 겹치던 공개 경로 정적 내보내기 문구는 제거했다.
- 이유: 사진 제공 방식만 독립적으로 확정하고, 이미 확정된 정적 공개 URL 기준을 중복 관리하지 않기 위해서다.
- 관련: NFR-common-001, NFR-common-022, NFR-common-038
- 검증: `NFR-common-038`이 `public` 사진·`out` 포함·같은 도메인 직접 제공·최적화 서버 미사용만 다루며 `DECIDED`인지 확인한다.

## 수정 29 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-039`를 실제 페이지 라우트 링크를 통한 공개 화면 이동으로 `DECIDED` 처리했다. 홈, 시공 사례, 제품 소개, 회사 소개 이동은 각각 `/`, `/cases`, `/products`, `/about` URL을 사용하며, fragment 라우팅과 클릭 이벤트만의 화면 전환은 제공하지 않는다.
- 이유: React를 사용하더라도 각 공개 화면의 실제 URL을 기준으로 정적 배포·대표 URL·검색 경로를 일관되게 유지하기 위해서다.
- 관련: REQ-common-004, REQ-common-021, REQ-common-028, NFR-common-037, NFR-common-039
- 검증: 네 공개 화면의 목적 URL, fragment 미사용, 클릭 이벤트 단독 이동 미사용, 사례 상세 팝업의 목록 URL 유지 기준이 완료 기준에 있는지 확인한다.

## 수정 30 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-040`에서 검색 로봇·sitemap 정책과 독립적인 사이트 아이콘 조건을 제거하고, `NFR-common-052` 검색 결과용 사이트 아이콘 제공으로 `TBD` 분리했다.
- 이유: 검색 로봇·sitemap의 크롤링 정책과 사이트 아이콘 자산 규격은 독립적으로 결정·검증해야 하므로 하나의 요구사항으로 묶지 않기 위해서다.
- 관련: NFR-common-040, NFR-common-052
- 검증: `NFR-common-040`이 robots·sitemap만, `NFR-common-052`가 사이트 아이콘만 다루며 두 항목 모두 `TBD`인지 확인한다.

## 수정 31 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-040`을 대표 공개 페이지 4개의 검색 로봇·sitemap 제공으로 `DECIDED` 처리했다. root `robots.txt`는 sitemap을 안내하고, sitemap에는 `/`, `/cases`, `/products`, `/about`의 대표 도메인 canonical URL만 포함한다.
- 이유: 검색 대상은 실제 공개 페이지 4개로 제한하고, 필터·상세 팝업·오류·배포용 주소가 대표 검색 콘텐츠가 되지 않게 하기 위해서다.
- 관련: NFR-common-019, NFR-common-020, NFR-common-040, REQ-common-028
- 검증: root `robots.txt`, 절대 URL 4개 sitemap, 제외 URL 범위, 404·`noindex` 색인 제외 방식을 완료 기준에서 확인한다.

## 수정 32 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-052`를 48×48px 이상 정사각형 파비콘 1개 제공으로 `DECIDED` 처리했다. 홈 문서는 해당 파비콘 URL을 참조하고, 홈·파비콘은 검색 크롤러가 요청할 수 있다.
- 이유: 브라우저 탭·북마크·검색 결과에서 동일한 사이트 식별 아이콘을 선명하게 제공하기 위해서다.
- 관련: NFR-common-020, NFR-common-052
- 검증: 홈 문서의 파비콘 참조, 대표 도메인 파비콘 응답, 정사각형 48×48px 이상 크기, 단일 자산 제공 여부를 확인한다.

## 수정 33 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-041`을 유효하지 않은 공개 주소에서 REQ-common-019의 안내 화면과 홈 복귀 버튼을 표시하면서 실제 HTTP 404로 응답하는 방식으로 `DECIDED` 처리했다.
- 이유: 존재하지 않는 주소를 정상 공개 페이지로 오인시키지 않고, 방문자에게는 홈으로 돌아갈 수단을 제공하기 위해서다.
- 관련: REQ-common-019, NFR-common-041
- 검증: 존재하지 않는 공개 주소의 HTTP 404 상태, 정적 결과물의 최상위 404 결과물, 홈·정상 화면 200 대체 부재, 홈 복귀 버튼을 확인한다.

## 수정 34 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-042`를 자체 도메인 자산만 허용하고 외부 자원·iframe·플러그인 객체를 막는 정적 응답 보안 헤더 정책으로 `DECIDED` 처리했다. `nosniff`, 외부 이동 시 도메인 정보만 전달하는 참조 정책, 카메라·위치·마이크 사용 금지와 모든 정적 응답·404 적용 범위를 명시했다.
- 이유: 정적 공개 사이트가 필요로 하지 않는 외부 콘텐츠와 브라우저 권한을 기본적으로 허용하지 않기 위해서다.
- 관련: NFR-common-001, NFR-common-024, NFR-common-042
- 검증: Cloudflare Pages의 정적 HTML·CSS·JavaScript·이미지·404 응답에서 각 헤더와 자체 도메인 출처 제한, 프레임 삽입 차단, 권한 차단을 확인한다.

## 수정 35 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-043`을 홈·시공 사례·제품 소개·회사 소개에서 320 CSS px 너비 및 1280 CSS px·400% 브라우저 확대를 모두 검수하는 기준으로 `DECIDED` 처리했다.
- 이유: 작은 화면과 고배율 확대에서도 페이지 구조와 핵심 조작이 깨지지 않게 하기 위해서다.
- 관련: NFR-common-016, NFR-common-043, REQ-common-015, REQ-common-028
- 검증: 두 검수 조건에서 페이지 가로 스크롤, 겹침·잘림, 헤더 메뉴·전화 문의·필터·상세 팝업 닫기·사진 조작의 사용 가능 여부를 확인한다.

## 수정 36 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-044`를 사용자 브라우저·보조 도구의 글자 간격 변경에서도 공개 화면과 시공 사례 상세 팝업의 정보·조작을 유지하는 방식으로 `DECIDED` 처리했다. 사이트 내부 글자 간격 설정 UI는 제공하지 않는다.
- 이유: 전체 페이지 확대와 별개로 글자 간격을 넓혀 읽는 경우에도 콘텐츠와 조작이 잘리거나 겹치지 않게 하기 위해서다.
- 관련: NFR-common-043, NFR-common-044, REQ-common-028
- 검증: 줄간격 1.5배·문단 간격 2배·자간 0.12em·단어 간격 0.16em 조건에서 각 공개 화면과 상세 팝업의 텍스트·버튼·필터·팝업 조작을 확인한다.

## 수정 37 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-045`를 `REJECTED` 처리했다. 기본 `Tab` 이동에 대한 초점 가림 방지 보정과 추가 키보드 조작은 제공 범위에서 제외하며, 시공 사례 상세 팝업의 `Esc` 닫기만 REQ-common-028에 따라 유지한다.
- 이유: 사용하지 않는 키보드 `Tab` 이동을 위해 고정 UI와 화면 위치를 별도로 보정하는 동작을 추가하지 않기 위해서다.
- 관련: NFR-common-045, REQ-common-028
- 검증: `Tab` 초점 가림 방지 보정과 사진·목록 추가 키보드 조작이 구현 범위에 포함되지 않았는지, 상세 팝업 `Esc` 닫기가 유지되는지를 확인한다.

## 수정 38 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-046`을 디자인 시스템에 크기가 정의되지 않은 아이콘 전용 조작에 최소 24×24 CSS px 포인터 대상 또는 동등한 분리 간격을 적용하는 방식으로 `DECIDED` 처리했다.
- 이유: 메뉴·닫기·사진 조작처럼 아이콘만 사용하는 요소를 터치·마우스로 정확하게 선택할 수 있게 하기 위해서다.
- 관련: NFR-common-046, docs/design/design-system.md
- 검증: 아이콘 전용 조작의 24×24 CSS px 포인터 대상 또는 인접 대상과의 분리 간격을 확인하고, 디자인 시스템이 정한 전화 문의·일반 버튼·페이지 번호·필터 버튼에는 별도 크기값을 추가하지 않았는지 확인한다.

## 수정 39 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-045`에서 사용자가 확정한 키보드 `Tab` 조작 제외 결정에 맞춰, 연계 항목인 `NFR-common-047`을 `REJECTED` 처리했다. 상세 팝업·사진 확대 뷰어의 초점 지정·순환·복귀와 대화상자 역할·이름은 제공하지 않는다.
- 이유: 이미 제외한 키보드 `Tab` 조작 요구사항이 모달에만 중복으로 남지 않게 하기 위해서다.
- 관련: NFR-common-045, NFR-common-047, REQ-common-028, docs/design/design-system.md
- 검증: 모달의 `Tab` 초점 보정·대화상자 정보는 구현 범위에 포함하지 않고, `Esc` 닫기·배경 스크롤 잠금·목록 상태 유지가 계속 적용되는지 확인한다.

## 수정 40 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 지시에 따라 `NFR-common-020`을 대표 이미지 유무와 관계없이 모든 공개 페이지에 공유 미리보기 이미지를 제공하지 않는 기준으로 명확히 수정했다. 연계된 `NFR-common-048`에서도 공유 이미지 미제공을 같은 기준으로 정정하고, canonical 주소 중복은 NFR-common-019 참조로 바꿨다.
- 이유: 대표 이미지가 있는 페이지에는 공유 이미지를 제공한다는 조건부 해석과 canonical 주소의 중복 정의를 없애기 위해서다.
- 관련: NFR-common-019, NFR-common-020, NFR-common-048
- 검증: 모든 공개 페이지에 Open Graph·Twitter 공유 이미지 메타데이터가 없는지, 각 페이지의 canonical 주소는 NFR-common-019에서만 정의되는지 확인한다.

## 수정 41 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-048`을 홈·시공 사례·제품 소개·회사 소개별 제목·설명·공유 URL을 정적 HTML에 제공하는 방식으로 `DECIDED` 처리했다. 공유 이미지는 NFR-common-020에 따라 모든 공개 페이지에서 제공하지 않는다.
- 이유: 검색 결과와 공유 미리보기의 텍스트 정보가 각 공개 페이지의 실제 내용을 구분해 설명하게 하기 위해서다.
- 관련: NFR-common-019, NFR-common-020, NFR-common-048
- 검증: 네 공개 페이지의 정적 HTML에 각각 다른 제목·설명·공유 URL이 있고, `og:image`·`twitter:image` 등 공유 이미지 메타데이터는 없는지 확인한다.

## 수정 42 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: REQ-common-011의 `www.대표도메인 → 대표도메인` 301 이동 결정에 따라 `NFR-common-049`를 루트 대표 도메인의 Cloudflare zone·네임서버 연결 방식으로 `DECIDED` 처리했다. 선택지로 남아 있던 서브도메인 CNAME 방식은 제거했다.
- 이유: 이미 루트 대표 도메인을 전제로 확정된 `www` 이동·HTTPS·대표 URL 요구사항과 DNS 연결 방식을 일치시키기 위해서다.
- 관련: REQ-common-011, NFR-common-009, NFR-common-049, NFR-common-051
- 검증: 구매한 루트 도메인의 Cloudflare zone 추가, Cloudflare 네임서버 연결, Pages 대표 도메인 연결, `www` 301 이동 및 HTTPS 발급의 호환성을 확인한다.

## 수정 43 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: `NFR-common-049`의 `DECIDED` 처리를 취소하고 `TBD`로 복구했다. 루트 도메인 연결 방식은 기존 요구사항과의 연계 해석만으로 확정할 수 없으므로, 루트 도메인·서브도메인 DNS 연결 선택지를 다시 복구했다.
- 이유: 공식 문서를 근거로 추가한 요구사항은 사용자의 직접 선택 전까지 `TBD`여야 한다는 요구사항 작성 규칙을 지키기 위해서다.
- 관련: NFR-common-049, docs/requirements/AGENTS.md
- 검증: `NFR-common-049` 상태가 `TBD`이고, 루트 도메인·서브도메인 각각의 DNS 연결 방식이 선택지로 남아 있는지 확인한다.

## 수정 44 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-049`를 나중에 구매할 루트 도메인을 대표 주소로 쓰고, Cloudflare zone·네임서버 연결 뒤 Pages에 연결하는 방식으로 `DECIDED` 처리했다. `www.대표도메인`과 `<프로젝트>.pages.dev`는 루트 대표 도메인으로 301 이동한다.
- 이유: 짧은 루트 주소를 대표로 사용하고, 기존의 `www → 대표 주소` 이동 요구사항과 DNS 연결 방식을 일치시키기 위해서다.
- 관련: REQ-common-011, NFR-common-009, NFR-common-049, NFR-common-051
- 검증: 구매한 루트 도메인의 Cloudflare zone 추가, 네임서버 연결, Pages 대표 도메인 연결, `www`·`pages.dev` 301 이동과 HTTPS 발급을 확인한다.

## 수정 45 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-053`을 대표 공개 페이지의 내부 이동과 브라우저 뒤로·앞으로 모두 도착 페이지 최상단을 표시하는 기준으로 `DECIDED` 처리했다.
- 이유: 페이지를 다시 열 때 이전 스크롤 중간 위치가 남아 페이지 제목과 첫 콘텐츠를 놓치는 일을 막기 위해서다.
- 관련: NFR-common-039, NFR-common-025, docs/design/design-system.md
- 검증: 각 대표 공개 페이지를 내부 링크와 브라우저 뒤로·앞으로로 열어 최상단 표시를 확인하고, 시공 사례 상세 팝업을 닫을 때만 기존 목록 위치가 유지되는지 확인한다.

## 수정 46 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-054`를 사례 상세 팝업·사진 확대 뷰어를 브라우저 이력에 추가하지 않는 방식으로 `DECIDED` 처리했다. 열린 상태에서 뒤로가기를 누르면 팝업을 닫지 않고 `/cases` 직전 이력으로 이동한다.
- 이유: 주소가 없는 일시적 보기 상태가 브라우저 뒤로·앞으로 흐름을 가로채지 않게 하기 위해서다.
- 관련: REQ-common-028, NFR-common-025, NFR-common-053, docs/design/design-system.md
- 검증: 팝업·뷰어를 연 뒤 주소와 브라우저 이력 항목이 추가되지 않는지, 뒤로가기가 이전 문서로 이동하는지, 앞으로가기로 팝업·뷰어가 자동 재개되지 않는지 확인한다.

## 수정 47 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `REQ-common-039`를 시공 사례·사용 제품 목록 모두 콘텐츠 작성자가 정한 고정 순서로 표시하고 방문자용 정렬 UI를 제공하지 않는 기준으로 `DECIDED` 처리했다.
- 이유: 정적 홍보 사이트의 소개 순서를 콘텐츠 작성자가 관리하고, 사용하지 않는 정렬 조작과 상태를 추가하지 않기 위해서다.
- 관련: NFR-common-010, REQ-common-029, REQ-common-030
- 검증: 두 목록의 필터 전·후 순서가 콘텐츠 작성 순서인지, 최신순·이름순 등의 정렬 조작·URL 상태가 없는지, 데이터 순서 변경이 다음 빌드 목록에 반영되는지 확인한다.

## 수정 48 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `REQ-common-040`을 `/products`에서 제품 필터 칩을 선택하거나 `전체`로 해제한 뒤 1페이지로 초기화하고, 결과 요약과 첫 카드 또는 결과 없음 안내를 표시하는 기준으로 `DECIDED` 처리했다.
- 이유: 필터 변경 뒤 이전 페이지나 목록 중간 위치가 남아 새 결과의 개수와 첫 제품을 놓치는 일을 막기 위해서다.
- 관련: REQ-common-029, REQ-common-030, NFR-common-010, docs/design/design-system.md
- 검증: 제품 필터 선택·해제 뒤 1페이지가 표시되는지, 결과 요약과 첫 카드 또는 결과 없음 안내가 고정 헤더에 가려지지 않는지, 선택 상태가 유지되는지 확인한다.

## 수정 49 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `REQ-common-041`을 시공 사례와 사용 제품 목록 모두 PC·태블릿·모바일에서 한 페이지당 카드 4개를 표시하고 같은 페이지 번호 이동 방식을 쓰는 기준으로 `DECIDED` 처리했다.
- 이유: 두 목록의 카드 밀도와 페이지 이동 방식을 일치시켜 방문자가 목록마다 다른 기준을 익히지 않게 하기 위해서다.
- 관련: REQ-common-040, docs/design/design-system.md
- 검증: 각 화면 폭에서 두 목록이 최대 4개 카드를 표시하는지, 5개 이상일 때 이전·다음·페이지 번호 이동이 제공되는지, 제품 필터 변경 뒤 1페이지 결과가 표시되는지 확인한다.

## 수정 50 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택 1번에 따라 시공 사례 상세를 `/cases` 안에서 여는 팝업으로 분리하고, 상세에 적용되던 히어로 전화 CTA·오른쪽 전화 CTA·모바일 상단 이동 버튼을 네 독립 공개 페이지에만 적용하도록 REQ-common-021·023·026·027을 수정했다.
- 이유: 시공 사례 상세 팝업에는 고정 헤더와 전화 문의를 표시하지 않는 디자인 시스템 기준을 공용 요구사항과 일치시키기 위해서다.
- 관련: PLAN-REV-001, REQ-common-021, REQ-common-023, REQ-common-026, REQ-common-027, NFR-common-012
- 검증: 상세 팝업에 페이지용 전화 CTA·상단 이동 요구가 남아 있지 않고, 네 독립 공개 페이지에 대한 요구가 유지되는지 확인했다.

## 수정 51 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 지시에서 말한 삭제의 의미에 따라 `NFR-common-004`의 식별자·기존 내용을 보존하고 상태를 `REJECTED`로 변경했다.
- 이유: 페이지 제목·설명·공유 URL·공유 이미지·대표 도메인·robots 기준이 NFR-common-019·020·040·048에 각각 중복돼 있었고, 공유 이미지 기준은 NFR-common-020·048과 충돌했다.
- 관련: PLAN-REV-005, NFR-common-019, NFR-common-020, NFR-common-040, NFR-common-048
- 검증: `NFR-common-004`가 기존 내용과 `REJECTED` 상태로 유지되는지 확인한다.

## 수정 52 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 지시에서 말한 삭제의 의미에 따라 `NFR-common-020`의 식별자·기존 내용을 보존하고 상태를 `REJECTED`로 변경했다. 공유 이미지 미제공 기준은 NFR-common-048에 직접 명시했고, NFR-common-037의 sitemap 참조는 NFR-common-040으로 바로잡았다.
- 이유: 사이트 아이콘·robots·sitemap은 NFR-common-040·052에, 공유 이미지 미제공은 NFR-common-048에 이미 정의돼 있어 NFR-common-020 전체가 중복이었기 때문이다.
- 관련: PLAN-REV-005, NFR-common-037, NFR-common-040, NFR-common-048, NFR-common-052
- 검증: `NFR-common-020`이 기존 내용과 `REJECTED` 상태로 유지되고, 현재 적용 기준인 NFR-common-037·048이 이 항목을 참조하지 않는지 확인한다.

## 수정 53 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 지시에 따라 `NFR-common-049`에서 존재하지 않는 `REQ-common-011` 참조와 NFR-common-051에 이미 있는 비대표 도메인 301 이동 완료 기준을 삭제했다.
- 이유: NFR-common-049에는 루트 도메인의 Cloudflare zone·네임서버 연결이라는 고유 기준만 남기고, 비대표 도메인 이동은 NFR-common-051만 기준으로 사용하기 위해서다.
- 관련: PLAN-REV-003, NFR-common-049, NFR-common-051
- 검증: NFR-common-049에 `REQ-common-011`, `www.대표도메인`, `<프로젝트>.pages.dev` 301 이동 기준이 남아 있지 않은지 확인한다.

## 수정 54 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택 1번에 따라 `REQ-common-009`와 `NFR-common-030`의 식별자·기존 내용을 보존하고 상태를 `REJECTED`로 변경했다.
- 이유: 이미지 미제공 문구·상태와 Toss 색상 토큰은 디자인 시스템에 이미 정의돼 있으며, 공용 요구사항에 중복 기준을 두지 않기 위해서다.
- 관련: PLAN-REV-004, REQ-common-009, NFR-common-030, docs/design/design-system.md
- 검증: 두 항목이 `REJECTED` 상태이고, 디자인 시스템이 이미지 미제공·색상 기준의 유일한 적용 기준으로 남는지 확인한다.

## 수정 55 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택 1번에 따라 `REQ-common-038`의 식별자·기존 내용을 보존하고 상태를 `REJECTED`로 변경했다.
- 이유: Cloudflare Pages·대표 도메인·301·HTTPS·404·보안 헤더는 NFR-common-009·026·036·041·042·049·051에 각각 확정돼 있어 중복 항목을 적용 기준으로 사용하지 않기 위해서다.
- 관련: PLAN-REV-005, REQ-common-038, NFR-common-009, NFR-common-026, NFR-common-036, NFR-common-041, NFR-common-042, NFR-common-049, NFR-common-051
- 검증: `REQ-common-038`이 `REJECTED` 상태이고, 열거한 세부 요구사항이 각 배포 기준을 계속 정의하는지 확인한다.

## 수정 56 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택 1번에 따라 `NFR-common-024`에서 NFR-common-042와 중복된 자원 출처·iframe·보안 헤더 기준을 제거하고, 새 탭 외부 채널이 기존 GK 사이트 창을 제어하지 못하게 하는 기준만 남겼다.
- 이유: 외부 채널 링크의 기존 창 보호는 유지하되, 정적 응답 보안 정책은 NFR-common-042만 적용 기준으로 사용하기 위해서다.
- 관련: PLAN-REV-005, NFR-common-024, NFR-common-042, REQ-common-018
- 검증: NFR-common-024가 새 탭 외부 채널의 기존 창 제어 방지만 정의하고, 보안 헤더 기준은 NFR-common-042만 정의하는지 확인한다.

## 수정 57 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택에 따라 `NFR-common-022`의 `src/content/cases.json`과 `thumbnailIndex`를 공용 요구사항의 확정 기준으로 유지했다. 원본 문서는 이미 이 내용과 일치해 본문 변경은 없다.
- 이유: 사례별 대표 사진의 출처와 우선 로드 대상을 현재 콘텐츠 구조로 명확히 고정하기 위해서다.
- 관련: PLAN-REV-006, NFR-common-022
- 검증: NFR-common-022에 `src/content/cases.json`과 `thumbnailIndex` 기준이 유지되는지 확인한다.

## 수정 58 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택 1번에 따라 `NFR-common-025`의 Zustand·`sessionStorage`를 공용 요구사항의 확정 기준으로 유지했다. 원본 문서는 이미 이 내용과 일치해 본문 변경은 없다.
- 이유: 시공 사례·제품 목록의 필터와 페이지 번호를 현재 브라우저 탭에서 유지하는 방식까지 명확히 고정하기 위해서다.
- 관련: PLAN-REV-006, NFR-common-025
- 검증: NFR-common-025에 Zustand·`sessionStorage`, 현재 탭 내 유지, 새 탭 초기화, 추적 데이터 미사용 기준이 함께 유지되는지 확인한다.

## 수정 59 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택 1번에 따라 `NFR-common-045·047`의 `REJECTED` 상태와 기존 내용을 유지하면서, `Esc` 닫기를 잘못 연결한 `REQ-common-028` 참조만 제거했다.
- 이유: REQ-common-028은 사례 상세의 독립 URL·색인 미제공 항목이므로, `Esc` 닫기·배경 스크롤 잠금·목록 위치 유지의 기준은 디자인 시스템만 참조하게 하기 위해서다.
- 관련: PLAN-REV-003, NFR-common-045, NFR-common-047, REQ-common-028, docs/design/design-system.md
- 검증: NFR-common-045·047에 `REQ-common-028` 참조가 없고, `Esc` 관련 기준은 디자인 시스템으로만 남는지 확인한다.

## 수정 60 — 기획자

- 파일: `docs/requirements/common/common.md`
- 내용: 사용자 선택 1번에 따라 `NFR-common-022·025·026·038`의 현재 구현 세부를 공용 요구사항의 확정 기준으로 유지했다. 원본 문서는 이미 이 내용과 일치해 본문 변경은 없다.
- 이유: 대표 사진 원본·목록 상태 저장·정적 빌드 및 배포 성공·정적 사진 제공 방식을 사용자 결정으로 명확히 고정하기 위해서다.
- 관련: PLAN-REV-006, NFR-common-022, NFR-common-025, NFR-common-026, NFR-common-038
- 검증: 네 항목에 현재 구현 세부가 유지되고, 공용 요구사항에서 해당 기준을 삭제하거나 다른 방식으로 바꾸지 않는지 확인한다.

## 수정 61 — 기획자

- 파일: `docs/requirements/welcome/welcomePage-plan.md`
- 내용: 웰컴 페이지 전용 기획 요구사항 문서를 새로 만들고, 공용·디자인 기준은 중복 작성하지 않고 참조로만 연결했다. 히어로 이후의 시공 사례·사용 제품·회사 신뢰 정보와 구역 순서는 `TBD-welcome-001`부터 `TBD-welcome-004`로 분리했다.
- 이유: 이미 확정된 공용 행동과 디자인 수치를 다시 정의하지 않으면서, 웰컴에만 필요한 콘텐츠 구성과 페이지 이동 결정을 독립적으로 인터뷰·관리하기 위해서다.
- 관련: REQ-common-001, REQ-common-015, REQ-common-021~027, NFR-common-022, NFR-common-027, NFR-common-039, NFR-common-053, TBD-welcome-001~004
- 검증: 새 문서가 공용·디자인 기준을 복제하지 않고 참조만 하며, 미확정 웰컴 전용 결정 4개가 모두 `TBD` 상태인지 확인한다.
