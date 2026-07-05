interface BlockTitleProps {
  children: string;
  className?: string;
}

export function BlockTitle({ children, className = "" }: BlockTitleProps) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <h3 className="font-serif text-lg sm:text-xl text-text-primary leading-tight">
        {children}
      </h3>
      <span className="hidden sm:block w-10 h-px bg-gold shrink-0" aria-hidden="true" />
    </div>
  );
}
