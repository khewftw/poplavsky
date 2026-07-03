"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);

    if (href.startsWith("/#") || href.startsWith("#")) {
      const hash = href.includes("#") ? href.split("#")[1] : href.replace("#", "");
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border-subtle transition-colors duration-300 ${
        scrolled ? "bg-bg-primary/95 backdrop-blur-sm" : "bg-bg-primary"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 sm:gap-3 shrink min-w-0"
          >
            <Image
              src="/logo.svg"
              alt="ПОПЛАВСКИЙ"
              width={36}
              height={36}
              className="shrink-0 object-contain"
              priority
            />
            <div className="w-[1px] h-7 bg-border-gold shrink-0" />
            <span className="flex flex-col leading-tight min-w-0">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-text-primary truncate">
                {siteConfig.logoMain}
              </span>
              <span className="text-[9px] sm:text-[10px] text-text-muted tracking-wider uppercase truncate">
                {siteConfig.logoSub}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs text-text-muted hover:text-gold transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
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
              href="/contacts"
              className="whitespace-nowrap"
            >
              {siteConfig.ctaConsultation}
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gold shrink-0"
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg text-text-primary hover:text-gold transition-colors py-2 border-b border-border-subtle"
                >
                  {link.label}
                </Link>
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
              href="/contacts"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              {siteConfig.ctaConsultation}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
