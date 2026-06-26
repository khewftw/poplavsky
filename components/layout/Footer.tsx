import {
  closingContent,
  footerContent,
  footerLinks,
  navLinks,
  siteConfig,
} from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="w-full border-t border-border-gold bg-bg-surface py-8 lg:py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 border border-gold text-gold font-serif">
                П
              </span>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {siteConfig.logoMain}
                </p>
                <p className="text-[10px] text-text-muted uppercase tracking-wider">
                  {siteConfig.logoSub}
                </p>
              </div>
            </div>
            <p className="text-xs text-text-muted leading-relaxed max-w-xs">
              {footerContent.description}
            </p>
            <p className="mt-4 text-[10px] text-text-muted">
              {closingContent.copyright}
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-text-primary mb-4">
              Навигация
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.15em] uppercase text-text-primary mb-4">
              Документы
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={siteConfig.phoneHref}
                className="text-sm text-text-primary hover:text-gold transition-colors"
              >
                {siteConfig.phone}
              </a>
              <p className="text-[10px] text-text-muted mt-1">
                {siteConfig.location}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
