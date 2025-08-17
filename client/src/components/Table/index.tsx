import type { ReactNode } from "react";

interface TableProps {
  className?: string;
  children: ReactNode;
}

interface TableHeaderProps {
  className?: string;
  children: ReactNode;
}

interface TableBodyProps {
  className?: string;
  children: ReactNode;
}

interface TableRowProps {
  className?: string;
  children: ReactNode;
}

interface TableCellProps {
  className?: string;
  isHeader?: boolean;
  colSpan?: number;
  children: ReactNode;
}

const Table = ({ className, children }: TableProps) => {
  return <table className={`min-w-full ${className}`}>{children}</table>;
};

const TableHeader = ({ className, children }: TableHeaderProps) => {
  return <thead className={className}>{children}</thead>;
};

const TableBody = ({ className, children }: TableBodyProps) => {
  return <tbody className={className}>{children}</tbody>;
};

const TableRow = ({ className, children }: TableRowProps) => {
  return <tr className={className}>{children}</tr>;
};

const TableCell = ({
  className,
  isHeader = false,
  colSpan,
  children,
}: TableCellProps) => {
  const CellTag = isHeader ? "th" : "td";
  return (
    <CellTag className={className} colSpan={colSpan}>
      {children}
    </CellTag>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableCell };
