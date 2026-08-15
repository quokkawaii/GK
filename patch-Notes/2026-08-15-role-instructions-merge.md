# 역할 지침 통합

## 변경 내용

- `harness/roles/`의 기획자, 디자이너, 개발자, 리뷰어 지침에서 역할별 고유 규칙을 `.codex/agents/*.toml`에 통합했다.
- 모든 역할에 공통으로 적용되는 실행 규칙은 루트 `AGENTS.md`에 한 번만 정리했다.
- 기존 `harness/roles/*.md` 역할 문서는 제거했다.
- 역할 문서에 잘못 들어가 있던 Toss 디자인 참고 자료는 `docs/design/references/toss.md`로 이동했다.
- 역할 안내 시안의 경로를 `.codex/agents/*.toml` 기준으로 수정했다.

## 검증

- 네 개의 custom agent TOML 파일을 Python `tomllib`으로 파싱했다.
- 현재 역할 이름은 `planner`, `designer`, `frontend-developer`, `reviewer`로 통일했다.

## 남은 항목

- 루트 `AGENTS.md`에 표시된 `src/AGENTS.md`는 현재 저장소에 존재하지 않는다.
