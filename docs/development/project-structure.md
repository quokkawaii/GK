# 개발 폴더 구조

이 문서는 GK 산업 사이트의 현재 폴더 구조와 각 영역의 책임을 기록한다. 제품 코드, 승인 산출물, AI 작업 환경, 개발 도구 설정이 루트에서 섞이지 않도록 구분한다.

프로젝트 내부의 `@/` 경로 별칭은 `src/`를 가리킨다. 예를 들어 `@/src/components/layout/Header`는 `src/components/layout/Header.tsx`를 의미한다.

```text
GK/
├─ src/                              # 실제 Next.js 제품 소스
│  ├─ src/app/                           # URL, 메타데이터, 페이지 조립
│  │  ├─ layout.tsx                  # 모든 페이지의 공통 틀
│  │  ├─ page.tsx                    # /
│  │  ├─ cases/page.tsx              # /cases
│  │  ├─ products/page.tsx           # /products
│  │  ├─ company/page.tsx            # /company
│  │  └─ globals.css                 # Tailwind 토큰과 전역 스타일
│  ├─ features/                      # 화면 기능별 코드
│  │  ├─ cases/
│  │  │  ├─ src/components/              # 사례 목록·카드·상세 팝업
│  │  │  └─ store/                   # 사례 필터·페이지 상태
│  │  ├─ home/src/components/            # 홈 전용 화면 조각
│  │  └─ products/src/components/        # 제품 목록 화면
│  ├─ src/components/
│  │  ├─ layout/                     # 여러 페이지에서 쓰는 헤더·푸터
│  │  └─ ui/                         # 기능에 종속되지 않는 공통 UI
│  ├─ src/content/                       # 정적 JSON: cases.json, site.json
│  ├─ src/lib/                           # 공통 데이터 처리 함수와 상수
│  └─ src/types/                         # 공통 TypeScript 타입
├─ public/                           # 그대로 배포되는 이미지·아이콘
├─ tests/                            # 제품 코드 자동 테스트
├─ scripts/                          # 빌드 전 콘텐츠 검사 스크립트
├─ docs/
│  ├─ requirements/                 # 요구사항·결정·콘텐츠 모델
│  ├─ design/                       # 디자인 시스템·반응형 기준
│  │  └─ previews/                  # 승인 검토용 PC·모바일 HTML 시안
│  └─ development/                  # 구조·검증·배포 문서
├─ harness/
│  ├─ roles/                        # AI 역할별 작업 지침
│  ├─ review/                       # 중앙 미해결 목록과 날짜별 이슈 이력
│  │  ├─ issue-register.md          # 단 하나의 미해결 이슈 목록
│  │  └─ YY-MM-DD-issue/            # 이슈가 생긴 날짜에만 생성
│  │     └─ YY-MM-DD-dev-issues.md  # 실제 이슈가 난 영역 파일만 생성
│  └─ patch-notes/                  # 날짜별 파일 변경 기록
├─ config/                           # ESLint·Prettier·Vitest 등 도구 설정
├─ .github/                          # GitHub 자동화 설정
├─ .husky/                           # 커밋 전 검사
├─ AGENTS.md                         # AI 공통 규칙의 진입점
├─ package.json                      # npm 명령과 의존성
├─ next.config.ts                    # Next.js 설정
├─ postcss.config.mjs                # CSS 변환 설정
└─ tsconfig.json                     # TypeScript와 `@/` 별칭 설정
```

## 코드 배치 기준

- `src/app/`은 URL과 페이지 조립을 담당한다. 기능 구현이 길어지면 `src/features/` 컴포넌트를 불러온다.
- 한 화면에서만 사용하는 코드는 해당 `src/features/<기능>/`에 둔다.
- 두 기능 이상에서 사용하는 화면 요소만 `src/components/`에 둔다.
- 정적 JSON은 `src/content/`에서 직접 가져온다. 변경되지 않는 콘텐츠를 Zustand에 복사하지 않는다.
- Zustand는 사용자 조작으로 바뀌는 사례 필터와 페이지 상태에만 사용하고 사례 기능 폴더 안에서 관리한다.
- 범용 계산과 상수는 `src/lib/`, 여러 기능이 공유하는 타입은 `src/types/`에 둔다.
- `npm run check:content`는 `src/content/`의 JSON 필수값, ID 중복, 이미지 배열, `thumbnailIndex` 참조를 검사한다.

## 리뷰 이슈 관리

- 이슈 ID는 영역별로 독립 관리한다: `PLAN-REV-001`, `DESIGN-REV-001`, `DEV-REV-001`.
- `harness/review/issue-register.md`에는 미해결 이슈만 기록한다. 해결되면 중앙 목록에서 삭제한다.
- 상세 이력과 해결 방법은 이슈가 처음 기록된 날짜·영역 파일에 계속 추가한다. 해결 전용 파일이나 이슈가 없는 영역의 빈 파일은 만들지 않는다.

## 디자인 시스템 위치

- 디자인 기준: `docs/design/design-system.md`
- 승인 화면 시안: `docs/design/previews/pc/`, `docs/design/previews/mobile/`
- 실제 디자인 토큰: `src/app/globals.css`의 Tailwind `@theme`
- 재사용 UI: `src/components/ui/`

## 자동 생성 폴더

`.next/`, `out/`, `node_modules/`는 명령 실행 후 다시 생성되는 폴더다. Git에 저장하지 않고 개발자가 직접 수정하지 않는다.

- `.next/`: Next.js 개발 서버와 빌드가 사용하는 내부 캐시·중간 결과
- `out/`: `output: "export"` 빌드가 만드는 정적 배포 결과
- `node_modules/`: npm이 설치한 외부 패키지
