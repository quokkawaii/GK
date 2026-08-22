## 수정 1 — 기획자

- 파일: `docs/requirements/01-common-req.md`, `docs/plan/01-common-plan.md`
- 내용: 공통 요구사항 54개를 `상태`, `제목`, `완료 기준` 구조로 정리하고, 요구사항에 남아 있던 유형·영역·우선순위·요구사항·이유 항목을 제거했다. 공식 참고 문서는 공통 기획 문서로 이동했다.
- 이유: 요구사항에는 필요한 기능과 완료 기준만 남기고, 구현과 판단에 사용하는 참고 정보는 기획 문서에서 관리하기 위해서다.
- 관련: `REQ-common-*`, `NFR-common-*`
- 검증: 식별자, 상태, 제목과 완료 기준 구역 수만 확인했다. 완료 기준 내부 항목 수를 원문과 대조하지 않아 54개 요구사항에서 첫 항목만 남은 오류를 발견하지 못했다.

## 수정 2 — 기획자

- 파일: `docs/requirements/01-common-req.md`, `docs/requirements/03-cases-req.md`, `docs/requirements/04-products-req.md`, `docs/plan/01-common-plan.md`, `docs/plan/03-cases-plan.md`, `docs/plan/04-products-plan.md`
- 내용: Git 원문에서 잘린 완료 기준 158개를 복구하고, 77개 요구사항을 공통 72개·시공 사례 4개·제품 소개 1개로 정형화했다. 기획 문서에도 동일한 77개 식별자를 사용해 우선순위·제목·구현 상태·구현 방법을 작성했다.
- 이유: 요구사항과 기획의 식별자를 유지하면서 데이터 손실 없이 역할별 책임을 분리하기 위해서다.
- 관련: `REQ-common-*`, `NFR-common-*`
- 검증: 요구사항과 기획의 ID가 각각 77개이고 고유 ID도 77개인지 확인했다. Git 원문과 상태·제목·우선순위·완료 기준을 ID별로 비교하고 차이가 없는지 확인했다.

## 수정 3 — 디자인·개발 문서 정형화

- 파일: `docs/design/01-common-design.md`, `docs/design/02-home-design.md`, `docs/design/03-cases-design.md`, `docs/design/04-products-design.md`, `docs/design/05-about-design.md`, `docs/develop/01-common-dev.md`, `docs/develop/02-deployment-dev.md`, `docs/develop/03-homePage-dev.md`, `docs/develop/04-casesPage-dev.md`, `docs/develop/05-productsPage-dev.md`, `docs/develop/06-aboutPage-dev.md`
- 내용: 사용자의 이번 작업 한정 수정 허가에 따라 요구사항·기획과 동일한 77개 식별자를 디자인과 개발 문서에도 유지했다. 디자인 문서는 공통 72개·시공 사례 4개·제품 소개 1개로, 개발 문서는 공통 58개·배포 14개·시공 사례 4개·제품 소개 1개로 분류했다. 홈과 회사 소개에는 페이지 전용 요구사항이 없어 공통 문서 적용 사실만 남겼다.
- 이유: 요구사항부터 디자인·개발까지 같은 식별자로 추적하면서 각 역할 문서에는 해당 역할의 처리 방법과 상태만 남기기 위해서다.
- 관련: `REQ-common-*`, `NFR-common-*`
- 검증: Git 원문의 77개 식별자와 디자인·개발 문서의 식별자·제목·우선순위를 ID별로 대조해 누락, 중복, 불일치가 없음을 확인했다. 디자인 방법과 개발 방법 구역도 각각 77개인지 확인했다. 디자인 상태는 `미확인` 35개·`디자인 대상 아님` 42개이고, 개발 상태는 `미확인` 61개·`구현 대상 아님` 16개다.

## 수정 4 — REQ·NFR 구역 분리와 최신 형식 적용

- 파일: `docs/requirements/01-common-req.md`, `docs/requirements/02-home-req.md`, `docs/requirements/03-cases-req.md`, `docs/requirements/04-products-req.md`, `docs/requirements/05-about-req.md`, `docs/plan/01-common-plan.md`, `docs/plan/02-home-plan.md`, `docs/plan/03-cases-plan.md`, `docs/plan/04-products-plan.md`, `docs/plan/05-about-plan.md`
- 내용: 각 문서에 `기능 요구사항 (REQ)`과 `비기능 요구사항 (NFR)` 구역을 만들고 REQ를 먼저, NFR을 다음에 배치했다. 각 구역 안에서는 식별자 번호 오름차순으로 정렬했다. 요구사항 필드는 `상태`, `제목`, `완료 기준` 형식으로 통일하고 기획 필드는 `우선순위`, `제목`, `구현 상태`, `구현 방법` 형식으로 통일했다. 기획 구현 상태는 최신 기획 규칙의 `구현/미구현` 체계에 따라 현재 77개 항목을 모두 `미구현`으로 기록했다.
- 이유: 기능 요구사항을 읽는 중간에 비기능 요구사항이 섞이지 않게 하고, 수정된 요구사항·기획 작성 규칙과 문서 형식을 일치시키기 위해서다.
- 관련: `REQ-common-*`, `NFR-common-*`
- 검증: 요구사항과 기획에 동일한 77개 식별자가 존재하는지 확인했다. Git 원문과 요구사항 상태·제목·완료 기준 및 기획 우선순위·제목을 ID별로 대조해 불일치가 없음을 확인했다. 10개 문서마다 REQ·NFR 구역이 각각 하나씩 존재하고 각 구역의 번호가 오름차순인지 확인했다.
