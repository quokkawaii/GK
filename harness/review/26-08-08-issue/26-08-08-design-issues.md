# 26-08-08 디자인 이슈

## DESIGN-REV-001

- 심각도: 높음
- 문제: 모바일 메뉴 패널이 홈 외 화면에 적용되지 않았다.
- 해결: 공통 메뉴 스크립트와 같은 오른쪽 패널을 모든 모바일 화면에 적용했다.
- 수정 파일: `docs/design/previews/mobile/`의 화면 시안과 공통 스크립트
- 검증: 재검토에서 메뉴 열기·닫기 동작을 확인했다.
- 상태: 해결

## DESIGN-REV-002

- 심각도: 높음
- 문제: 모바일 전화 문의가 홈 외 화면에서 전화 연결이 아니었다.
- 해결: 모든 모바일 화면의 전화 문의 UI를 같은 `tel:` 연결로 통일했다.
- 수정 파일: `docs/design/previews/mobile/`의 화면 시안과 공통 스크립트
- 검증: 재검토에서 각 화면과 메뉴 패널의 연결을 확인했다.
- 상태: 해결

## DESIGN-REV-003

- 심각도: 보통
- 문제: 사용 제품 상세의 정보 표현이 보류 상태였다.
- 해결: 사진·정보 표·전화 문의 구성을 사용자 승인으로 확정했다.
- 수정 파일: `docs/design/previews/pc/product-detail.html`, `docs/design/previews/mobile/product-detail.html`
- 검증: 재검토에서 승인 구성과 일치를 확인했다.
- 상태: 해결

## DESIGN-REV-004

- 심각도: 높음
- 문제: 사례·제품 목록 카드 열과 사진 비율이 디자인 시스템과 달랐다.
- 해결: PC·모바일 목록을 2열·4:3 사진 비율로 통일했다.
- 수정 파일: `docs/design/previews/pc/`, `docs/design/previews/mobile/`
- 검증: 디자인 시스템 최종 재검토에서 해소를 확인했다.
- 상태: 해결

## DESIGN-REV-005

- 심각도: 높음
- 문제: 선택 필터의 색상 규칙이 디자인 시스템과 달랐다.
- 해결: 연한 주황 배경·주황 테두리·진한 주황 글자로 통일했다.
- 수정 파일: `docs/design/previews/pc/`, `docs/design/previews/mobile/`
- 검증: 디자인 시스템 최종 재검토에서 해소를 확인했다.
- 상태: 해결

## DESIGN-REV-006

- 심각도: 보통
- 문제: 글꼴과 44px 최소 조작 영역 기준이 일부 시안에 적용되지 않았다.
- 해결: 모든 실제 적용 후보 화면에 Pretendard 우선 규칙과 조작 영역 기준을 적용했다.
- 수정 파일: `docs/design/previews/pc/`, `docs/design/previews/mobile/`
- 검증: 디자인 시스템 최종 재검토에서 해소를 확인했다.
- 상태: 해결

## DESIGN-REV-007

- 심각도: 보통
- 문제: 사례 상세 갤러리가 사진 원본 비율 보존 기준을 따르지 않았다.
- 해결: 어두운 배경 위에서 사진 전체를 보이는 `contain` 표시 규칙을 적용했다.
- 수정 파일: `docs/design/previews/pc/case-detail.html`, `docs/design/previews/mobile/case-detail.html`
- 검증: 디자인 시스템 최종 재검토에서 해소를 확인했다.
- 상태: 해결

## DESIGN-REV-008

- 심각도: 보통
- 문제: 글꼴·조작 영역 기준의 적용 범위가 일부 화면에서 빠져 있었다.
- 해결: 홈·회사 소개·제품 상세 화면의 글꼴과 주요 버튼을 공통 기준으로 맞췄다.
- 수정 파일: `docs/design/previews/pc/`, `docs/design/previews/mobile/`
- 검증: 디자인 시스템 최종 재검토에서 해소를 확인했다.
- 상태: 해결
