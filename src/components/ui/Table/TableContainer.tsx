import { ReactNode } from "react";

import clsx from "clsx";

type TableContainerProps = {
  children: ReactNode;
  className?: string;
};

const TableContainer = ({ children, className }: TableContainerProps) => (
  <div className={clsx("overflow-x-auto border", className)}>{children}</div>
);

TableContainer.displayName = "TableContainer";

export default TableContainer;
