type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  const containerClassName =
    `${className} mx-auto my-16 max-w-[80rem] p-4`.trim();

  return <div className={containerClassName}>{children}</div>;
};

export default Container;
