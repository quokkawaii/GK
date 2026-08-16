# 프로젝트 구조

```text
GK                                      # 프로젝트 루트
├─ .codex                               # Codex 설정과 역할별 에이전트 정의
│  ├─ config.toml                       # Codex 공통 설정
│  └─ agents                            # 역할별 규칙과 권한
│     ├─ AGENTS.md                      # 에이전트 산출물·권한 공통 규칙
│     ├─ designer.toml                  # 디자이너 역할 설정
│     ├─ frontend-developer.toml        # 프론트엔드 개발자 역할 설정
│     ├─ planner.toml                   # 기획자 역할 설정
│     └─ reviewer.toml                  # 리뷰어 역할 설정
├─ config                               # 프로젝트 도구 설정
│  ├─ prettier.config.mjs               # 코드 포맷 규칙
│  └─ prettierignore                    # 포맷 대상 제외 규칙
├─ docs                                 # 기획·디자인·개발 참고 문서
│  ├─ design                            # 디자인 시스템과 시안
│  │  ├─ design-system.md               # 공통 디자인 규칙
│  │  ├─ previews                       # HTML 디자인 시안
│  │  │  ├─ mobile                      # 모바일 화면 시안
│  │  │  └─ pc                          # PC 화면 시안
│  │  └─ references                     # 외부 디자인 참고 자료
│  ├─ development                       # 개발 규칙·기술 문서
│  └─ requirements                      # 요구사항과 기획 요약
├─ patch-Notes                          # 작업 완료 후 변경 이력
├─ public                               # 브라우저에 제공할 정적 파일
├─ review                               # 리뷰 결과와 이슈 기록
├─ src                                  # 실제 Next.js 소스 코드
├─ .gitignore                           # Git 관리 제외 목록
├─ AGENTS.md                            # 프로젝트 전체 Codex 작업 규칙
├─ next-env.d.ts                        # Next.js TypeScript 타입 선언
├─ package.json                         # 의존성·실행 명령 설정
├─ package-lock.json                    # 의존성 버전 고정 파일
├─ postcss.config.mjs                   # PostCSS 설정
├─ README.md                            # 프로젝트 소개·실행 방법
└─ tsconfig.json                        # TypeScript 컴파일 설정
```

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

# 역화 예외

- 사용자가 간단하게 묻는 형식은 역활이 아닌 일반 ai agent llm에게 묻는것이다.

# 작업 결과 & 리뷰

- 작업 결과는 `GK/patch-Notes`에 작성한다.
- 리뷰는 `GK/review`에 작성한다.
- 폴더 & 파일 생성시에는 사용자에게 무조건 보고를 해야한다.

# 공통 역할 실행 규칙

- 각 역할은 작업 전에 필요한 입력 문서, 작업 범위, 수정 권한과 완료 기준을 확인한다.
- 자신의 역할 산출물만 작성하며 다른 역할의 확정 결과를 임의로 변경하지 않는다.
- 요구사항은 `REQ-`, 확정 결정은 `DEC-`, 미확정 정보는 `TBD-` 식별자로 관리한다.
- 역할 종료 시 완료 항목, 확정 사항, 미확정 사항, 다음 역할의 입력과 다음 행동을 구체적으로 인계한다.
- 검증 도구가 저장소에 존재할 때만 실행하며, 결과가 불명확하면 완료라고 보고하지 않는다.

# 선보고 후조치

- 지금 하는 과정은 조치 후보고를 하고 있다.
- 하고자 하는 작업을 사용자에게 보고하고 허락받은뒤 수행해라.

# 하면 안 되는 것

1. 뇌피셜 금지

- 파일 구조와 코딩 방식에 뇌피셜이 심한 경우가 있다, 이 경우에 공식 문서를 찾아보거나 사용자에게 물어본다.

2. 추상적인 답변 금지

- "홈의 대표 제품을 골라주세요."보다는 "홈의 제품이 A, B, C가 있는데, 이 중에서 대표로 선택할 제품을 골라주세요."와 같이 답변한다.

3. 사용자가 원하는 결과 외에 생성 불허

- 예를들어 사진을 보는 페이지에서 임시 사진이 없을시, 사진을 만들거나 다른 사이트에서 png와 같은것을 가져오는거는 불허한다.
- 현재 구조에 파일 또는 폴더가 없을때 함부로 생성을 불허
- 이런 경우 사용자에게 즉시 보고를 해야한다.

# 폴더 & 파일 이름 규칙

- 사용자가 아무말 없었으면 공식 문서를 참고하거나 사용자에게 몇가지를 추천한다.
