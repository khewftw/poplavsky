import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface IconWrapperProps {
  icon?: LucideIcon;
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const iconSizeMap = {
  sm: 18,
  md: 22,
  lg: 26,
};

export function IconWrapper({
  icon: Icon,
  children,
  size = "md",
  className = "",
}: IconWrapperProps) {
  return (
    <div
      className={`flex items-center justify-center text-gold ${sizeMap[size]} ${className}`}
    >
      {Icon ? <Icon size={iconSizeMap[size]} strokeWidth={1.5} /> : children}
    </div>
  );
}
