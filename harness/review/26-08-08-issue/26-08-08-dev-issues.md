# 26-08-08 개발 이슈

## DEV-REV-001

- 심각도: 높음
- 문제: 정적 내보내기에서 Next.js `Image`를 안전하게 쓰기 위한 설정 위치와 값이 개발 설계에 없었다.
- 해결: `next.config.ts`에 `output: "export"`, `images.unoptimized: true`를 기록하고 배포 계획과 같은 기준으로 맞췄다.
- 수정 파일: `docs/development/project-structure.md`, `docs/development/deployment-plan.md`
- 검증: 개발 설계 재검토에서 정적 내보내기·이미지 처리 기준 일치를 확인했다.
- 상태: 해결

## DEV-REV-002

- 심각도: 보통
- 문제: 최신 사례 정렬에 필요한 `workDate`의 필수 여부·날짜 형식·유효성을 검사하는 계획이 없었다.
- 해결: 콘텐츠 검사와 자동 테스트 범위에 `workDate` 검증 및 최신순 정렬 규칙을 추가했다.
- 수정 파일: `docs/development/content-validation.md`, `docs/development/testing-policy.md`
- 검증: 개발 설계 재검토에서 검사·정렬 기준 일치를 확인했다.
- 상태: 해결
