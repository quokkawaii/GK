# 폴더 구조

src/
├── app/ # 페이지 주소, 공통 레이아웃, 전역 스타일 조립
├── components/ # 여러 페이지와 기능이 공유하는 UI 컴포넌트
├── constants/ # 페이지 수 등 변경되지 않는 공통 값
├── content/ # 수정되지 않은 원본 JSON 데이터
├── events/ # 클릭·키보드·스크롤·포인터 이벤트 처리
├── features/ # 홈·시공 사례·회사 소개 등 기능별 코드
├── func/ # 계산·필터·정제·변환을 담당하는 함수
├── hooks/ # React 상태와 생명주기를 사용하는 재사용 동작
├── lib/ # 공통 모듈 연결과 외부 라이브러리 관련 코드
├── store/ # Zustand 스토어와 컴포넌트용 구독 함수 관리
├── types/ # TypeScript 데이터와 함수 인자 형태
└── AGENTS.md # src 내부 코딩·구조·책임 분리 규칙

# 디자인

- 모든 웹 사이트의 디자인은 docs/design/previews/common를 복사 붙여넣기를 한것과 같아야한다.

# 코딩 스타일

## 사용하는 도구

| 도구       | 역할                                             |
| ---------- | ------------------------------------------------ |
| TypeScript | 값과 데이터 형태의 오류 확인                     |
| Prettier   | 들여쓰기, 줄 바꿈, 따옴표 등 코드 모양 자동 통일 |

## 공통 설정

아래 설정값은 구현 계획 인터뷰에서 확정한 뒤 프로젝트 설정 파일에도 동일하게 적용한다.

| 항목            | 설정값                      | 상태 |
| --------------- | --------------------------- | ---- |
| 줄 바꿈 방식    | LF                          | 확정 |
| 들여쓰기        | 공백 2칸 (탭 문자 미사용)   | 확정 |
| 한 줄 최대 길이 | 100자                       | 확정 |
| 세미콜론 사용   | 항상 사용                   | 확정 |
| 문자열 따옴표   | 큰따옴표 (`"`)              | 확정 |
| 마지막 쉼표     | 항상 사용                   | 확정 |
| 콘텐츠 JSON     | 공백 2칸, 객체 항목 한 줄씩 | 확정 |

# 주스탠드 관리 방법

- 모든 주스탠드 스토어는 해소하는 파일을 생성한다.
- 스토어 => 해소 파일 (구독) => 컴포넌트 파일 순으로 데이터의 흐름이 되어야한다.
- 이 과정에서 컴포넌트 파일은 import하여 받은 구독 데이터들을 사용했을때 모든 기능이 정상적으로 사용가능상태여야 한다. (usestate와 같은 상태 변화를 사용가능해야됨)

# json 관리 방법

- 모든 json파일은 해소하는 파일을 생성한다.
- json 파일 => get함수 => 컴포넌트 파일
- 데이터의 set을 하는 기능이나 crud하는 기능은 없으며 오로지 get 함수만 존재해야한다.
- get함수는 json파일마다 각 한개씩 존재해야한다.

# 컴포넌트 관리 방법

- 모든 컴포넌트 코드는 자기책임원칙을 지켜야한다.
- 어느정도의 자기책임원칙을 지켜야하는지는 아래와 같다.
- 아래는 예시 코드이다

```tsx
{
  /* 대표 사진 또는 사진 없음 안내를 표시하는 카드 이미지 영역이다. */
}
<div className="relative aspect-[4/3] overflow-hidden bg-[#85817a]">
  {thumbnail ? (
    /* cases.json의 thumbnailIndex가 가리키는 대표 사진이다. */
    <Image
      src={thumbnail.src}
      alt={thumbnail.alt}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      sizes="(max-width: 767px) 50vw, 25vw"
    />
  ) : (
    /* 사진 데이터가 없을 때 카드 크기를 유지하는 안내 문구다. */
    <span className="flex h-full items-center justify-center text-sm text-white">
      이미지가 없습니다
    </span>
  )}
</div>;
{
  /* 태그·사례명·장소를 표시하는 카드 정보 영역이다. */
}
<div className="p-4">
  <p className="text-accent text-xs font-semibold">{caseItem.tags.join(" · ")}</p>
  <h2 className="mt-1 text-lg font-semibold tracking-[-0.04em]">{caseItem.title}</h2>
  <p className="text-muted mt-1 text-sm">{caseItem.location}</p>
</div>;
```

- 이와 같이 주석으로 나뉘지만 한파일에 있다면 자기책임원칙을 실패한것이다.
- 아래는 자기책임 원칙이 잘 적용된 사례이다.

```tsx

{/* 대표 사진 또는 사진 없음 안내를 표시하는 카드 이미지 영역이다. */}
<div className="relative aspect-[4/3] overflow-hidden bg-[#85817a]">
  {thumbnail ? <대표 사진 컴포넌트/> : <대표 사진이 없을때 컴포넌트 />}
</div>
<div className="p-4">
  < 태그·사례명·장소를 표시하는 카드 정보 컴포넌트 />
</div>
```

- 이와 같이 영역을 분리해야한다.
- 잘 분리된 컴포넌트는 주석이 필요없으며, 컴포넌트 명이 주석을 대체할 수 있어야한다.

# 컴포넌트 이름 짓기

- 한눈에 봐도 무슨 컴포넌트 인지 알아야한다.
- 복잡한 이름으로는 절대 지으면 안된다.
- 중복이나 비슷한 이름도 지으면 안된다.

# 이벤트 함수 관리 방법

- src/events 폴더에서 관리한다.
- 필요한 이벤트에 대한 폴더가 없다면 폴더를 만든다 (ex : onclick, onsubmit 등)
- 각 이벤트에 대한 파일을 만들고 export하여 사용할 파일과 연결한다.

# 상수 관리 방법

- src/constants 폴더에서 관리한다.
- constants 하위에 파일을 만든다.
- 파일명은 자기책임원칙에 의해 분리한다. (ex : 페이징쿼리에 필요한 상수와 전화번호 상수의 분리)

# type 관리 방법

- 모든 type은 src/types 폴더에서 관리한다.
- interface는 사용하지 않는다.
- 특정 곳에서 사용하면 특정된곳 + type으로 이름을 짓는다. (ex: 홈에서 사용하는 타입 = homeType-page.ts, case의 json일 경우 = caseType-json.ts)

# 기능 관리 방법

- 모든 함수(기능)은 src/func 폴더에서 관리한다.
- 특정된 곳에서 사용한다면 특정된곳 + func로 이름을 짓는다. (ex: 홈에서 사용하는 기능 = homeFunc-page.ts, case의 json일 경우 = caseFunc-json.ts)

# Readonly 타입

- Readonly 타입은 절대 사용하지 않는다.

## 운영 규칙

- React 컴포넌트 파일은 파스칼 표기법, 일반 함수·데이터 처리 모듈은 카멜 표기법으로 이름을 짓는다.
- 여러 기능이 공유하는 데이터 형태는 `type`으로 정의하고 `src/types/`에서 관리한다. 기능 안에서만 사용하는 props와 상태 타입은 사용하는 파일 가까이에 둔다. 외부 타입 확장이 필요한 경우만 `interface`를 사용한다.
- Next.js 페이지 파일만 `export default`를 사용하고, 그 외 컴포넌트·함수·타입은 이름 있는 `export`를 사용한다.
- 모든 코드에서 `any`와 `unknown`을 사용하지 않는다. 새 값의 형태가 필요하면 사용 전에 명시적인 `type`을 정의한다.
- TypeScript는 `strict: true`로 실행한다.
- 불리언 값은 `is`·`has`·`can`, 이벤트 처리 함수는 `handle`, 계산·반환 함수는 동사로 시작한다.
- 값이 변하지 않는 공통 설정은 대문자·밑줄 표기법, 일반 변수는 카멜 표기법을 사용한다.
- 정적 JSON은 Zustand에 복사하지 않는다. Zustand는 여러 컴포넌트가 함께 변경하는 사용자 상태에만 사용하고 해당 `src/features/` 안에 둔다. 목록 계산은 `getCasePage` 같은 `src/lib/`의 순수 함수로 처리한다.
- 함수와 `type` 선언 바로 위에는 역할을 설명하는 한 줄 주석을 작성한다. 타입 주석에는 데이터 출처를, 함수 주석에는 기능을 간단히 적는다.
- 코드 내용과 관계없는 대량 서식 변경은 별도 작업으로 분리한다.
- Prettier 설정을 바꾸면 이유와 영향을 이 문서에 기록한다.
- 실제 Prettier 패키지를 설치하면 `dependencies.md`에도 버전과 사용 목적을 추가한다.
- 개발 단계에서 Prettier의 `endOfLine` 설정과 Git 설정을 LF 기준으로 맞춘다.
- 개발 단계에서 Prettier의 `tabWidth`를 `2`, `useTabs`를 `false`로 설정한다.
- 개발 단계에서 Prettier의 `printWidth`를 `100`으로 설정한다.
- 개발 단계에서 Prettier의 `semi`를 `true`로 설정한다.
- 개발 단계에서 Prettier의 `singleQuote`를 `false`로 설정한다.
- 개발 단계에서 Prettier의 `trailingComma`를 `all`로 설정한다.
- `src/content/` JSON은 사람이 검토·수정하기 쉽게 공백 2칸과 객체 항목 한 줄씩의 여러 줄 형식을 유지한다.
