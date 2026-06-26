interface SectionHeadingProps {
  overline?: string;
  title: string;
  align?: "left" | "center";
  showUnderline?: boolean;
  variant?: "caps" | "serif";
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  align = "left",
  showUnderline = false,
  variant = "serif",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  const titleClass =
    variant === "caps"
      ? "font-sans text-xs font-semibold tracking-[0.15em] uppercase text-text-primary"
      : "font-serif text-xl md:text-2xl lg:text-3xl text-text-primary leading-tight text-balance max-w-3xl";

  return (
    <div
      className={`flex flex-col gap-2 mb-5 lg:mb-6 ${alignClass} ${className}`}
    >
      {overline && (
        <div
          className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">
            {overline}
          </span>
          <span className="hidden sm:block w-10 h-px bg-gold" aria-hidden="true" />
        </div>
      )}
      <h2 className={titleClass}>{title}</h2>
      {showUnderline && (
        <span className="w-12 h-px bg-gold" aria-hidden="true" />
      )}
    </div>
  );
}
