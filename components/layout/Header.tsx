"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function scrollToHash(href: string) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToHash(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border-subtle transition-colors duration-300 ${
        scrolled ? "bg-bg-primary/95 backdrop-blur-sm" : "bg-bg-primary"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#about");
            }}
            className="flex items-center gap-3 shrink-0"
          >
            <span className="flex items-center justify-center w-9 h-9 border border-gold text-gold font-serif text-lg">
              П
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide text-text-primary">
                {siteConfig.logoMain}
              </span>
              <span className="text-[10px] text-text-muted tracking-wider uppercase">
                {siteConfig.logoSub}
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs text-text-muted hover:text-gold transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <div className="text-right">
              <a
                href={siteConfig.phoneHref}
                className="block text-sm text-text-primary hover:text-gold transition-colors"
              >
                {siteConfig.phone}
              </a>
              <span className="text-xs text-text-muted">{siteConfig.location}</span>
            </div>
            <Button
              variant="outline"
              onClick={() => handleNavClick("#contacts")}
              className="whitespace-nowrap"
            >
              {siteConfig.ctaConsultation}
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-bg-primary z-40 overflow-y-auto">
          <Container className="py-8 flex flex-col gap-8">
            <nav className="flex flex-col gap-4" aria-label="Мобильная навигация">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-lg text-text-primary hover:text-gold transition-colors py-2 border-b border-border-subtle"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <a
                href={siteConfig.phoneHref}
                className="text-lg text-text-primary"
              >
                {siteConfig.phone}
              </a>
              <span className="text-text-muted">{siteConfig.location}</span>
            </div>
            <Button
              variant="outline"
              onClick={() => handleNavClick("#contacts")}
              className="w-full"
            >
              {siteConfig.ctaConsultation}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
