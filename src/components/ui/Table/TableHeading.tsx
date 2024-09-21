/* eslint-disable react/jsx-props-no-spreading */

import { ReactNode } from "react";

import clsx from "clsx";

type TableHeadingProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode;
  className?: string;
};

const TableHeading = ({ children, className, ...rest }: TableHeadingProps) => (
  <th
    {...rest}
    className={clsx(
      "border-b border-gray-200 bg-primary-800 px-4 py-3 text-left text-base font-semibold text-white",
      className,
    )}
  >
    {children}
  </th>
);

export default TableHeading;
