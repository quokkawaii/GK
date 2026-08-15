# 프로젝트 소스 코드 구조

src/
├─ AGENTS.md
├─ app/ # 라우팅
├─ features/ # 기능 화면
├─ components/ # 공통 UI·레이아웃
├─ model/
│ ├─ content/ # 공통 JSON 데이터
│ └─ store/ # Zustand 상태
├─ service/
│ ├─ content/ # JSON 데이터와 컴포넌트 연결 파일
│ └─ store/ # Zustand 데이터와 컴포넌트 연결 파일
├─ hooks/ # 공통 훅
├─ types/ # 공통 타입
└─ lib/ # 공통 유틸

# 프로젝트 스택

- DB가 없으므로 백엔드도 없다.
- 이 프로젝트에서는 Backend, Database, Server API를 구현하지 않는다.
- Next.js, TypeScript, React, Zustand, Prettier, Tailwind CSS, Git, Codex Desktop App

# 역할

## `./.codex/agents/*.toml` 파일에 각 역할이 저장되어 있다.

## 예) 리뷰어로 변경 후 리뷰 진행과 같이 명령을 내리면 역할 변경 후 아래의 파일을 참조한 다음 명령을 실행하면 된다.

- 기획자 (planner)
- 디자이너 (designer)
- 개발자 (frontend-developer)
- 리뷰어 (reviewer)

# 작업 결과 & 리뷰

- 작업 결과는 `GK/patch-Notes`에 작성한다.
- 리뷰는 `GK/review`에 작성한다.

# 명령 실행 흐름

## 해당 순서는 AI의 workflow를 정리하기 위함이다.

1. 루트 `AGENTS.md` 적용
2. 사용자 명령에서 역할과 작업 범위 판단
3. 해당 custom agent 생성
4. 관련 하위 `AGENTS.md`와 참고 자료 확인
5. 작업 수행
6. 검증
7. 결과 기록

# 공통 역할 실행 규칙

- 각 역할은 작업 전에 필요한 입력 문서, 작업 범위, 수정 권한과 완료 기준을 확인한다.
- 자신의 역할 산출물만 작성하며 다른 역할의 확정 결과를 임의로 변경하지 않는다.
- 요구사항은 `REQ-`, 확정 결정은 `DEC-`, 미확정 정보는 `TBD-` 식별자로 관리한다.
- 역할 종료 시 완료 항목, 확정 사항, 미확정 사항, 다음 역할의 입력과 다음 행동을 구체적으로 인계한다.
- 검증 도구가 저장소에 존재할 때만 실행하며, 결과가 불명확하면 완료라고 보고하지 않는다.

# 하면 안 되는 것

1. 뇌피셜 금지

- 파일 구조와 코딩 방식에 뇌피셜이 심한 경우가 있다, 이 경우에 공식 문서를 찾아보거나 사용자에게 물어본다.

2. 추상적인 답변 금지

- "홈의 대표 제품을 골라주세요."보다는 "홈의 제품이 A, B, C가 있는데, 이 중에서 대표로 선택할 제품을 골라주세요."와 같이 답변한다.
