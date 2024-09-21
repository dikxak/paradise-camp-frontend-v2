import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
  const containerClassName = clsx(
    "mx-auto mt-16 mb-12 max-w-[80rem] p-4",
    className,
  );

  return <div className={containerClassName}>{children}</div>;
};

export default Container;
