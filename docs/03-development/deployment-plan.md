# 배포 계획

## 서비스와 방식

- 배포 서비스: Cloudflare Pages
- 연결 대상: GitHub 저장소
- 사이트 유형: Next.js 정적 내보내기
- 빌드 명령: `npx next build`
- 배포 폴더: `out`

## Next.js 정적 설정

`next.config.ts`에서 `output: "export"`와 `images.unoptimized: true`를 설정한다. 이 설정으로 Next.js `Image`는 사용하되, Cloudflare Pages에 없는 서버 이미지 변환 기능은 사용하지 않는다. 사진은 `public/images/`의 정적 경로로 제공한다.

## 브랜치별 동작

| GitHub 변경 | Cloudflare Pages 동작 | 용도 |
| --- | --- | --- |
| PR 브랜치에 푸시 | 미리보기 주소 생성·갱신 | 병합 전 화면 검토 |
| `main`에 머지 | 실제 사이트 자동 배포 | 고객이 보는 사이트 갱신 |

Cloudflare Pages 미리보기 주소에는 기본으로 `X-Robots-Tag: noindex` 응답 헤더가 적용된다. 배포 단계에서 실제 미리보기 주소의 헤더를 확인하고, `main` 배포만 검색 노출 대상으로 관리한다.

## 콘텐츠 변경 흐름

시공 사례·사용 제품·사이트 문구·사진도 코드 변경과 같은 흐름으로 관리한다.

1. 작업 브랜치를 만든다.
2. `content/` JSON과 `public/images/` 사진을 수정한다.
3. PR을 열어 Cloudflare Pages 미리보기에서 사진·문구·상세 팝업을 확인한다.
4. `main`에 머지하면 실제 사이트가 자동 갱신된다.

## 배포 단계에서 할 일

1. Cloudflare 계정과 GitHub 저장소를 연결한다.
2. Pages 프로젝트를 만들고 Next.js 정적 내보내기 빌드 설정을 입력한다.
3. 첫 미리보기 배포와 실제 배포를 각각 확인한다.
4. 사용자가 도메인을 준비하면 DNS와 HTTPS를 연결한다.
5. Pages 프로젝트의 Metrics에서 Cloudflare Web Analytics를 활성화한다.
6. 배포 후 Google Search Console과 네이버 서치어드바이저 등록은 별도 승인 후 진행한다.

## 현재 제외 사항

- Cloudflare Workers, Pages Functions 등 서버 기능
- 데이터베이스·REST API·인증·업로드
- 실제 계정 연결과 도메인 변경

## 방문 통계

- Cloudflare Web Analytics를 사용한다.
- Pages 프로젝트에서는 Metrics에서 활성화하면 다음 배포 때 스크립트가 자동으로 적용된다.
- 방문·페이지 조회·유입 경로·기기 유형·페이지 로딩 성능을 Cloudflare 대시보드에서 확인한다.
- 개인 식별·맞춤 이벤트·UTM 쿼리 분석은 초기 범위에서 제외한다.
