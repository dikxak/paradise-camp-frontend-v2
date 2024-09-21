import { ReactNode } from "react";

import clsx from "clsx";

type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
  className?: string;
};

const TableBody = ({ children, className }: TableBodyProps) => (
  <tbody className={clsx(className)}>{children}</tbody>
);

export default TableBody;
