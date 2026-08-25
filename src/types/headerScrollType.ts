// 헤더 스크롤 로직에서 공유하는 이전 위치와 프레임 예약 상태의 형태다.
export type HeaderScrollState = {
  lastScrollY: number; // 마지막으로 스크롤한 위치
  ticking: boolean; // 프레임당 이벤트를 발생하기 위한 조건
};
