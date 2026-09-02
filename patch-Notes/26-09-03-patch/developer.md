## 추가 1 - 개발자

- 파일: `wrangler.jsonc`
- 내용: Cloudflare Workers가 Next.js 정적 빌드 결과물인 `out` 폴더를 직접 배포하도록 정적 자산 설정을 추가했다. 끝 슬래시 제거와 정적 `404.html` 응답 규칙도 함께 지정했다.
- 이유: `npx wrangler deploy`가 Next.js 프로젝트를 OpenNext 서버 앱으로 자동 변환하면서 존재하지 않는 standalone manifest를 찾던 배포 오류를 방지하기 위해서다.
- 관련: `NFR-common-026`, `NFR-common-037`, `NFR-common-041`, 사용자 요청
- 검증: `next build --webpack`으로 정적 페이지 6개와 `out/404.html`을 생성했고, Cloudflare 로그와 동일한 Wrangler 4.128.0의 `deploy --dry-run`에서 `out`의 정적 자산 118개를 정상 인식했다. 기본 Turbopack 빌드는 실행 환경의 내부 포트 권한 제한으로 완료하지 못했으며, 제공된 Cloudflare 로그에서는 해당 빌드가 성공했다.

## 수정 2 - 개발자

- 파일: `src/app/globals.css`
- 내용: 모바일 헤더에서 `HeaderContact`의 문의 전화만 표시하고 소셜 아이콘은 숨기도록 반응형 스타일을 수정했다. 햄버거 메뉴와의 간격도 조정했다.
- 이유: 모바일 환경에서도 기존 `site.json`의 문의 전화 링크를 바로 확인하고 통화할 수 있도록 하기 위해서다.
- 관련: 사용자 요청
- 검증: Prettier 검사와 `npm run build -- --webpack`을 통과했다.
