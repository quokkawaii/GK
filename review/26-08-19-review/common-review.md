# 공용 요구사항 재검토

- 일자: 2026-08-19
- 역할: 리뷰어
- 범위: `docs/requirements/common/common.md`, `docs/design/design-system.md`, `docs/design/references/toss.md`
- 제외 범위: `src`, 정적 산출물, 구현·빌드 검증
- 판정: PASS

## BLOCKERS

- 없음

## RESOLVED FINDINGS

## PLAN-REV-001

- 최초 문제: 시공 사례 상세 팝업을 독립 공개 화면처럼 요구해, 디자인 시스템의 팝업 기준과 충돌했다.
- 처리: REQ-common-021·023·026·027을 수정해 상세을 `/cases` 안의 팝업으로 한정하고, 페이지용 전화 CTA·상단 이동은 네 독립 공개 페이지에만 적용했다.
- 재검토: pass. 상세 팝업에는 헤더·전화 CTA를 요구하지 않으며, 디자인 시스템의 팝업 기준과 일치한다.
- 심각도: pass
- 출처: REQ-common-021, REQ-common-023, REQ-common-026, REQ-common-027, `docs/design/design-system.md:115-132`

## PLAN-REV-002

- 최초 문제: 공유 미리보기 이미지를 제공하는 기준과 모든 페이지에서 제공하지 않는 기준이 충돌했다.
- 처리: NFR-common-004·020을 `REJECTED`로 보존하고, 적용 기준은 NFR-common-048의 모든 공개 페이지 공유 이미지 미제공으로 단일화했다.
- 재검토: pass. 적용 중인 `DECIDED` 항목에는 공유 이미지 제공 기준이 없으며, NFR-common-048만 공유 이미지 미제공을 정의한다.
- 심각도: pass
- 출처: NFR-common-004, NFR-common-020, NFR-common-048

## PLAN-REV-003

- 최초 문제: 존재하지 않는 REQ-common-011과 `Esc` 동작에 맞지 않는 REQ-common-028 참조가 있었다.
- 처리: NFR-common-049에서 REQ-common-011과 중복 301 기준을 제거하고, NFR-common-045·047에서 REQ-common-028 참조를 제거했다.
- 재검토: pass. 공용 요구사항 제목 식별자 77개에 중복·미존재 참조가 없고, `Esc` 기준은 디자인 시스템만 참조한다.
- 심각도: pass
- 출처: NFR-common-045, NFR-common-047, NFR-common-049, REQ-common-028, `docs/design/design-system.md:122,127,132`

## PLAN-REV-004

- 최초 문제: 이미지 미제공 문구·상태와 Toss 색상 토큰이 디자인 시스템과 중복되고 일부 값이 달랐다.
- 처리: REQ-common-009와 NFR-common-030을 `REJECTED`로 보존했다.
- 재검토: pass. 적용 중인 공용 요구사항에는 이미지 미제공 문구·상태 또는 디자인 색상 토큰을 별도로 정의하지 않는다.
- 심각도: pass
- 출처: REQ-common-009, NFR-common-030, `docs/design/design-system.md:23-35,97,128`

## PLAN-REV-005

- 최초 문제: 검색·공유·Cloudflare 보안·도메인 기준이 한 항목에 묶여 세부 항목과 중복됐다.
- 처리: NFR-common-004·020과 REQ-common-038을 `REJECTED`로 보존했다. NFR-common-024는 새 탭 외부 채널이 기존 사이트 창을 제어하지 못하게 하는 기준으로 한정했다.
- 재검토: pass. 적용 중인 검색·공유·Cloudflare 기준은 NFR-common-009·019·040·041·042·048·049·051이 각각 정의하며, NFR-common-024는 고유한 새 탭 보호만 정의한다.
- 심각도: pass
- 출처: NFR-common-004, NFR-common-009, NFR-common-019, NFR-common-020, NFR-common-024, NFR-common-040, NFR-common-041, NFR-common-042, NFR-common-048, NFR-common-049, NFR-common-051, REQ-common-038

## PLAN-REV-006

- 최초 문제: 공용 요구사항에 현재 파일 경로·Zustand·빌드 명령·정적 파일 제공 방식이 들어 있었다.
- 처리: 사용자가 NFR-common-022·025·026·038의 구현 세부를 공용 요구사항의 확정 기준으로 유지한다고 결정했다.
- 재검토: pass. 이 네 항목의 구현 세부는 사용자 승인으로 유지되는 명시적 공용 기준이다.
- 심각도: pass
- 출처: NFR-common-022, NFR-common-025, NFR-common-026, NFR-common-038, 사용자 선택 1번

## MAJOR FINDINGS

- 없음

## RESOLVED FINDINGS (continued)

## PLAN-REV-007

- 최초 문제: 디자인 시스템이 대표 전화번호를 헤더에 표시하고 모바일 헤더에서 전화 연결하도록 정해 REQ-common-015와 충돌했다.
- 처리: 디자인 시스템에서 헤더의 대표 전화번호 표시·모바일 헤더 전화 연결을 제거하고, 전화 문의 위치를 히어로 CTA·데스크톱·태블릿 오른쪽 CTA·회사 소개·푸터로 정렬했다.
- 재검토: pass. 공통 헤더에는 기본 탐색·외부 채널만 표시하고, 모바일 전화 연결은 히어로 CTA에서만 제공한다.
- 심각도: pass
- 출처: REQ-common-015, REQ-common-023, REQ-common-026, `docs/design/design-system.md:129-131`

## MINOR FINDINGS

- 없음

## REQUIREMENT COMPLIANCE

- PASS: 적용 중인 공용 요구사항과 디자인 시스템의 헤더·전화 문의 위치 기준이 일치한다.

## DESIGN COMPLIANCE

- PASS: 디자인 시스템은 헤더 전화 문의 CTA를 제거하고, REQ-common-015의 히어로·오른쪽 CTA 기준을 따른다.

## RESPONSIVE REVIEW

- 범위 제외: 구현 화면과 소스를 검토하지 않았다.

## CODE QUALITY

- 범위 제외: 구현 코드와 빌드 결과를 검토하지 않았다.

## VALIDATION

- 제목 식별자 77개를 확인했다. 중복 제목 식별자는 없다.
- 상태: `DECIDED` 61개, `REJECTED` 16개다.
- 공용 요구사항의 참조 식별자는 모두 실제 제목에 존재한다.
- PLAN-REV-001~007의 처리 결과를 원본·디자인 시스템과 다시 대조했다.

## REQUIRED FIXES

- 없음
