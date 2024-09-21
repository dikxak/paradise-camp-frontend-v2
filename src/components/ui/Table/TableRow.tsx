import { ReactNode } from "react";

import clsx from "clsx";

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  children: ReactNode;
  className?: string;
};

const TableRow = ({ children, className }: TableRowProps) => (
  <tr className={clsx("border-b hover:bg-primary-50", className)}>
    {children}
  </tr>
);

export default TableRow;
