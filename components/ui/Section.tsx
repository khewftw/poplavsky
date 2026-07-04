import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  borderTop?: boolean;
}

export function Section({
  id,
  children,
  className = "",
  borderTop = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full py-12 lg:py-16 ${borderTop ? "border-t border-border-gold" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
