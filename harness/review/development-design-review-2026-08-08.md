# 개발 설계 리뷰 — 2026-08-08

## 대상

- `docs/requirements/PRD.md`, `content-model.md`, `implementation-decisions.md`
- `docs/design/design-system.md`
- `docs/development/`의 개발 구조·의존성·검증·오류·배포·통계·브라우저 지원 문서

## 판정

**CHANGES REQUIRED**

기획·디자인·정적 JSON·Next.js·Cloudflare Pages·검증 절차의 큰 방향은 일치한다. 다만 Next.js `Image`와 정적 내보내기를 함께 쓰는 설정, 최신순 정렬에 필요한 데이터 검사가 구현 설계에 빠져 있어 개발 시작 전 보완이 필요하다.

## 통과 항목

| 항목 | 결과 | 근거 |
| --- | --- | --- |
| 범위 | 통과 | 서버·DB·REST API·인증·업로드를 제외하고 정적 JSON·전화 문의 중심으로 제한했다. |
| 화면 구조 | 통과 | 승인된 주소, 공통 레이아웃, 사례·제품 상세, 회사 소개, 404·오류 화면의 폴더 계획이 있다. |
| 디자인 인계 | 통과 | `styles/tokens.css`, `src/components/ui/`, `src/app/globals.css`로 디자인 시스템의 구현 위치가 명확하다. |
| 목록 상태 | 통과 | Zustand와 sessionStorage는 필터·페이지 상태에만 사용하며 URL 쿼리를 만들지 않는다. |
| 콘텐츠 분리 | 통과 | `src/content/` JSON, `public/images/`, 대표 이미지 위치, 여러 장 사진, 제품 참조 규칙이 기획과 일치한다. |
| 실패 대응 | 통과 | 테스트·콘텐츠 검사·PR 검사 실패 시 자동 수정하지 않고 사용자 승인 뒤 수정하는 규칙이 있다. |
| 배포·검색·통계 | 통과 | Cloudflare Pages 정적 배포, 미리보기 noindex, SEO 기본 항목, 개인정보를 수집하지 않는 기본 통계 범위가 정리됐다. |

## 지적 사항

### REV-021 — 정적 내보내기용 Next.js 이미지 설정 누락 (높음)

- 대상: `docs/development/project-structure.md`, `dependencies.md`, `deployment-plan.md`, DEC-030·DEC-035
- 문제: Next.js `Image`를 사용하면서 서버 이미지 변환을 사용하지 않기로 했지만, 정적 내보내기에서 필요한 `next.config`의 이미지 처리 설정 위치와 방식이 문서에 없다.
- 영향: 개발자가 기본 `Image` 설정을 그대로 사용하면 정적 결과물에서 사진을 정상 표시하지 못하거나, Cloudflare에 없는 이미지 변환 서버를 기대하는 구성이 될 수 있다.
- 권장 조치: 개발 설계에 `next.config`를 추가하고, 정적 내보내기용 `output: "export"`와 `images.unoptimized: true`를 명시한다. 사진은 이미 정한 `public/images/` 경로를 그대로 사용한다.
- 관련: DEC-030, DEC-035

### REV-022 — 최신 사례 정렬용 시공일 검사 누락 (중간)

- 대상: `docs/development/content-validation.md`, `docs/development/testing-policy.md`, REQ-006
- 문제: 사례 목록은 최신 `workDate` 순으로 정렬해야 하지만, 콘텐츠 사전 검사에는 `workDate`의 필수 여부·날짜 형식·정렬 가능 여부가 없다.
- 영향: 잘못된 날짜가 JSON에 들어가면 최신 사례가 첫 페이지에 나오지 않아 REQ-006을 지키지 못할 수 있다.
- 권장 조치: 콘텐츠 검사에 `workDate` 필수·`YYYY-MM-DD` 형식·유효 날짜 확인을 추가하고, 최신순 정렬 규칙을 Vitest 대상에 포함한다.
- 관련: REQ-006, DEC-028, DEC-032

## 인계

- 완료: 개발 설계 문서와 승인된 기획·디자인의 일치 여부 검토
- 확정: 통과 항목은 개발 단계에서 그대로 구현 기준으로 사용한다.
- 미해결: REV-021, REV-022
- 다음 역할 입력: REV-021, REV-022
- 다음 행동: 개발자가 설계 문서만 보완한 뒤 재검토를 요청한다. 실제 앱 코드·의존성 설치는 개발 단계 승인 전에는 시작하지 않는다.

---

## 재검토 — 2026-08-08

### 판정

**PASS**

| 항목 | 결과 | 근거 |
| --- | --- | --- |
| REV-021 | 해소 | `next.config.ts` 위치와 `output: "export"`·`images.unoptimized: true` 설정이 폴더 구조와 배포 계획에 같은 방식으로 기록됐다. |
| REV-022 | 해소 | `workDate`의 필수·형식·실제 날짜 검증과 최신순 정렬 규칙이 콘텐츠 검사와 자동 테스트 범위에 반영됐다. |

### 검증 메모

- 네 개발 설계 문서에서 정적 내보내기·이미지 처리·사진 경로·시공일 검증·최신순 정렬 내용을 소스 기준으로 대조했다.
- 변경사항 공백 검사(`git diff --check`)를 통과했다.
- 한글 비교 문자열이 깨진 단순 검증 스크립트는 문서 검증 결과에 사용하지 않았고, 실제 문서 내용을 직접 대조했다.

### 인계

- 완료: 개발 설계 재검토
- 확정: REV-021·REV-022는 모두 해소됐으며, 개발 설계는 승인된 기획·디자인·기술 범위와 일치한다.
- 다음 역할 입력: 승인된 기획·디자인·개발 설계 문서 전체
- 다음 행동: 사용자가 개발 단계 시작을 승인하면 개발자가 Next.js 프로젝트 초기화와 승인된 의존성 설치부터 진행한다.
