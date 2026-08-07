# 코드 스타일과 자동 서식

이 문서는 GK 산업 사이트의 팀 공통 코드 작성·자동 서식 설정을 기록한다. 개발자 개인 설정보다 이 문서와 프로젝트 설정 파일을 우선한다.

## 사용하는 도구

| 도구 | 역할 |
| --- | --- |
| TypeScript | 값과 데이터 형태의 오류 확인 |
| ESLint | React·Next.js 코드 작성 실수 검사 |
| Prettier | 들여쓰기, 줄 바꿈, 따옴표 등 코드 모양 자동 통일 |

## 공통 설정

아래 설정값은 구현 계획 인터뷰에서 확정한 뒤 프로젝트 설정 파일에도 동일하게 적용한다.

| 항목 | 설정값 | 상태 |
| --- | --- | --- |
| 줄 바꿈 방식 | LF | 확정 |
| 들여쓰기 | 공백 2칸 (탭 문자 미사용) | 확정 |
| 한 줄 최대 길이 | 100자 | 확정 |
| 세미콜론 사용 | 항상 사용 | 확정 |
| 문자열 따옴표 | 큰따옴표 (`"`) | 확정 |
| 마지막 쉼표 | 항상 사용 | 확정 |

## 운영 규칙

- 코드 내용과 관계없는 대량 서식 변경은 별도 작업으로 분리한다.
- Prettier 설정을 바꾸면 이유와 영향을 이 문서 및 `patchNote/`에 기록한다.
- 실제 ESLint·Prettier 패키지를 설치하면 `dependencies.md`에도 버전과 사용 목적을 추가한다.
- 개발 단계에서 Prettier의 `endOfLine` 설정과 Git 설정을 LF 기준으로 맞춘다.
- 개발 단계에서 Prettier의 `tabWidth`를 `2`, `useTabs`를 `false`로 설정한다.
- 개발 단계에서 Prettier의 `printWidth`를 `100`으로 설정한다.
- 개발 단계에서 Prettier의 `semi`를 `true`로 설정한다.
- 개발 단계에서 Prettier의 `singleQuote`를 `false`로 설정한다.
- 개발 단계에서 Prettier의 `trailingComma`를 `all`로 설정한다.
- 개발 단계에서 Husky와 lint-staged를 설정해, 커밋 직전에 변경된 코드만 ESLint와 Prettier로 검사한다.
