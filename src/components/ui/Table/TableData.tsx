/* eslint-disable react/jsx-props-no-spreading */

import { ReactNode } from "react";

import clsx from "clsx";

type TableDataProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode;
  className?: string;
};

const TableData = ({ children, className, ...rest }: TableDataProps) => (
  <td {...rest} className={clsx("px-4 py-2 text-sm text-gray-900", className)}>
    {children}
  </td>
);

TableData.displayName = "TableData";

export default TableData;
