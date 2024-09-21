import { ReactNode } from "react";

import clsx from "clsx";

type TableDataProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode;
  className?: string;
};

const TableData = ({ children, className }: TableDataProps) => (
  <td className={clsx("px-4 py-2 text-sm text-gray-900", className)}>
    {children}
  </td>
);

TableData.displayName = "TableData";

export default TableData;
