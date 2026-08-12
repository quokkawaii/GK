// 공통 가로 여백 안에 화면 내용을 배치할 때 받는 값이다.
type ContainerProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

// 페이지별 내용을 동일한 최대 너비와 여백 안에 배치한다.
export function Container({ children, className = "" }: ContainerProps) {
  // 모든 화면 섹션의 공통 최대 너비와 가로 여백을 적용하는 요소다.
  return <div className={`page-container ${className}`.trim()}>{children}</div>;
}
