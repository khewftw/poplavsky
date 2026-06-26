interface PlaceholderImageProps {
  variant?: "hero" | "portrait";
  className?: string;
  label?: string;
}

export function PlaceholderImage({
  variant = "hero",
  className = "",
  label = "Фото управляющего партнёра",
}: PlaceholderImageProps) {
  const aspectClass =
    variant === "hero" ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[3/4]";

  return (
    <div
      className={`relative overflow-hidden border border-border-subtle bg-gradient-to-br from-bg-elevated via-bg-surface to-bg-primary ${aspectClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 border border-gold/30 rounded-full flex items-center justify-center">
          <span className="font-serif text-4xl text-gold/50">П</span>
        </div>
      </div>
    </div>
  );
}
