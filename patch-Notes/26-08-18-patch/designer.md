## 수정 1 — 디자이너

- 파일: `docs/design/design-system.md`
- 내용: 색상, 글꼴, 글자 크기, 간격, 모서리, 버튼과 필터·페이지 번호의 시각 기준을 `toss.md`의 `toss.im` 마케팅 웹 값으로 정렬했다. TDS Mobile 값은 사용하지 않았다.
- 이유: GK의 시공 사례·전화 문의·상세 팝업 동작은 유지하면서, 공개 웹의 시각 UI와 px 기준을 한 출처로 통일하기 위해서다.
- 관련: `docs/design/references/toss.md`, REQ-common-001, REQ-common-004, REQ-common-023, REQ-common-026, REQ-common-027
- 검증: Toss 마케팅 웹의 색상, 36/30/24/22/16/14px 타이포그래피, 4/6/8/16/24/32px 여백, 40/46px 버튼, 7px 버튼 반경과 대조했다. Toss에 보편 값이 없는 최대 폭·브레이크포인트·PC 상세 팝업 여백·페이지 번호는 GK 확장값으로 표시했다.
