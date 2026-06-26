import type { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`grid gap-px bg-border-gold border border-border-gold ${className}`}
    >
      {children}
    </div>
  );
}
