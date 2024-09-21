/* eslint-disable react/jsx-props-no-spreading */

import { ReactNode, TableHTMLAttributes } from "react";

import clsx from "clsx";

type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  children: ReactNode;
  className?: string;
};

const Table = ({ children, className, ...rest }: TableProps) => (
  <table {...rest} className={clsx("min-w-full bg-white", className)}>
    {children}
  </table>
);

Table.displayName = "Table";

export default Table;
