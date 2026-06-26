import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-bg-primary hover:bg-gold-hover active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
  outline:
    "border border-gold text-gold bg-transparent hover:bg-gold/10 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold",
};

const baseClasses =
  "inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-200 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
