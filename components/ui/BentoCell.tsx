import type { ReactNode } from "react";

interface BentoCellProps {
  children: ReactNode;
  className?: string;
}

export function BentoCell({ children, className = "" }: BentoCellProps) {
  return (
    <div className={`bg-bg-cell p-5 lg:p-6 ${className}`}>{children}</div>
  );
}
