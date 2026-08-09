type ContainerProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`page-container ${className}`.trim()}>{children}</div>;
}
