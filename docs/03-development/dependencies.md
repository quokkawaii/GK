# 의존성 목록

이 문서는 GK 산업 사이트 개발에 실제로 설치한 npm 패키지와 사용 목적을 기록한다.

## 기록 규칙

- 패키지를 설치하거나 제거한 개발자는 이 문서를 같은 변경에서 함께 갱신한다.
- `package.json`의 버전과 문서의 버전은 일치해야 한다.
- `package-lock.json`은 실제 설치된 정확한 버전을 기록하므로 항상 Git에 함께 올린다.
- 기본 제공 기능으로 해결할 수 있다면 새 패키지를 설치하지 않는다.

## 설치된 패키지

| 패키지                      | 버전       | 사용 목적                         | 사용하는 위치                | 제거 가능 여부        |
| --------------------------- | ---------- | --------------------------------- | ---------------------------- | --------------------- |
| next                        | `^16.3.0`  | 정적 웹사이트의 페이지·빌드 기능  | `app/`, `next.config.ts`     | 불가                  |
| react                       | `^19.2.8`  | 화면 컴포넌트 표시                | `app/`, `components/`        | 불가                  |
| react-dom                   | `^19.2.8`  | React를 브라우저 화면에 연결      | Next.js 내부 화면 실행       | 불가                  |
| zustand                     | `^5.0.14`  | 콘텐츠·필터·페이지 번호 상태 관리 | `store/`                     | 가능                  |
| typescript                  | `^6.0.3`   | 데이터·코드 형태 검사             | 전체 TypeScript 파일         | 불가                  |
| @types/node                 | `^26.2.0`  | Node.js 타입 정보                 | 설정·개발 도구               | 가능                  |
| @types/react                | `^19.2.18` | React 타입 정보                   | React 컴포넌트               | 불가                  |
| @types/react-dom            | `^19.2.4`  | React DOM 타입 정보               | React 컴포넌트               | 불가                  |
| tailwindcss                 | `^4.3.3`   | 화면 스타일 작성                  | `app/globals.css`, TSX       | 가능                  |
| @tailwindcss/postcss        | `^4.3.3`   | Tailwind CSS 빌드 연결            | `postcss.config.mjs`         | Tailwind 사용 중 불가 |
| eslint                      | `^9.39.5`  | 코드 작성 실수 검사               | `eslint.config.mjs`          | 가능                  |
| eslint-config-next          | `^16.3.0`  | Next.js·React 검사 규칙           | `eslint.config.mjs`          | Next.js 사용 중 불가  |
| prettier                    | `^3.9.6`   | 코드 모양 통일                    | `prettier.config.mjs`        | 가능                  |
| prettier-plugin-tailwindcss | `^0.8.1`   | Tailwind 클래스 순서 통일         | `prettier.config.mjs`        | Tailwind 사용 중 가능 |
| husky                       | `^9.1.7`   | 커밋 직전 검사 실행               | `.husky/pre-commit`          | 가능                  |
| lint-staged                 | `^17.3.0`  | 이번 커밋의 변경 파일만 검사      | `package.json`, `.husky/`    | Husky 사용 중 가능    |
| vitest                      | `^4.1.10`  | 데이터 처리 규칙 자동 테스트      | `tests/`, `vitest.config.ts` | 가능                  |

## 설치 결과 메모

- `package-lock.json`이 생성됐으며, npm 취약점 검사 결과는 `0 vulnerabilities`다.
- `unrs-resolver`의 설치 후 스크립트가 현재 실행 환경의 안전 정책으로 차단됐다는 경고가 있었다. 이 패키지는 ESLint 내부 의존성이며, 허용 여부는 실제 검사 실행 결과를 확인한 뒤 사용자 승인 후 결정한다.
- Node.js LTS를 재설치해 이 컴퓨터의 전역 `npm`을 복구했다. `npm 11.2.0`과 `npm run lint` 실행을 확인했다.

## Next.js 기본 기능

| 기능    | 사용 목적                                                 | 별도 설치 |
| ------- | --------------------------------------------------------- | --------- |
| `Image` | 시공·제품 사진의 크기 지정, 지연 불러오기, 대체 문구 적용 | 필요 없음 |

## 예정 실행 명령

실제 의존성 설치와 `package.json` 생성 후 아래 명령을 같은 이름으로 등록한다.

| 명령                   | 역할                              |
| ---------------------- | --------------------------------- |
| `npm run dev`          | 개발 서버 실행                    |
| `npm run build`        | 배포용 정적 파일 생성             |
| `npm run lint`         | ESLint 검사                       |
| `npm run test`         | Vitest 실행                       |
| `npm run format`       | Prettier 서식 적용                |
| `npm run format:check` | 파일 변경 없이 Prettier 서식 검사 |
