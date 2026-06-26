interface GoldDividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function GoldDivider({
  orientation = "horizontal",
  className = "",
}: GoldDividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={`w-px self-stretch bg-border-gold ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`h-px w-full bg-border-gold ${className}`}
      aria-hidden="true"
    />
  );
}
