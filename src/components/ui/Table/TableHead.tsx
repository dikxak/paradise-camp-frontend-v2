import React, { ReactNode } from "react";

import clsx from "clsx";

type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
  className?: string;
};

const TableHead = ({ children, className }: TableHeadProps) => (
  <thead className={clsx("sticky top-0 z-10 bg-gray-100", className)}>
    {children}
  </thead>
);

TableHead.displayName = "TableHead";

export default TableHead;
