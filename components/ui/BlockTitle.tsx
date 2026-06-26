interface BlockTitleProps {
  children: string;
  className?: string;
}

export function BlockTitle({ children, className = "" }: BlockTitleProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <h2 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-text-primary">
        {children}
      </h2>
      <span className="hidden sm:block w-10 h-px bg-gold shrink-0" aria-hidden="true" />
    </div>
  );
}
