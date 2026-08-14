# 26-08-08 개발 이슈

이 문서는 2026-08-08 당시 검토 내용과 이후 변경된 결정을 함께 보존한다.

## DEV-REV-001

- 심각도: 높음
- 당시 문제: 정적 내보내기에서 Next.js `Image`를 사용하기 위한 설정 위치와 값이 개발 설계에 없었다.
- 당시 해결: `next.config.ts`에 `output: "export"`, `images.unoptimized: true`를 기록하고 배포 계획과 기준을 맞췄다.
- 당시 수정 파일: `docs/development/project-structure.md`, `docs/development/deployment-plan.md`
- 당시 상태: 해결
- 2026-08-14 변경: 사용자가 정적 배포 결과와 관련 설정을 현재 범위에서 제거하도록 요청했다. `next.config.ts`, `out/`과 정적 내보내기 전제를 제거했으며 배포 서비스와 방식은 미확정 상태로 되돌렸다.
- 현재 상태: 기존 해결안 철회·배포 방식 재결정 필요

## DEV-REV-002

- 심각도: 보통
- 당시 문제: 최신 사례 정렬에 필요한 `workDate`의 필수 여부, 날짜 형식과 유효성을 검사할 계획이 없었다.
- 당시 해결: 콘텐츠 검사와 자동 테스트 범위에 `workDate` 검증과 최신순 정렬 규칙을 추가했다.
- 당시 수정 파일: `docs/development/content-validation.md`, `docs/development/testing-policy.md`
- 당시 상태: 해결
- 2026-08-14 변경: 사용자가 Vitest, `tests/`, 콘텐츠 검사 스크립트와 관련 설정을 제거하도록 요청했다. 자동 검사를 전제로 한 기존 해결안은 철회하고, 현재 문서는 사람이 확인할 검토 기준만 남겼다.
- 현재 상태: 기존 자동 검사 해결안 철회·수동 검토 기준으로 대체
