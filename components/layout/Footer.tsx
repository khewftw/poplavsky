"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  closingContent,
  footerContent,
  footerLinks,
  navLinks,
  siteConfig,
} from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <footer className="w-full border-t border-border-gold bg-bg-surface py-8 lg:py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="ПОПЛАВСКИЙ"
                width={32}
                height={32}
                className="shrink-0 object-contain"
              />
              <div className="w-[1px] h-6 bg-border-gold shrink-0" />
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
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
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
                  <Link
                    href={link.href}
                    className="text-xs text-text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
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

        <div className="mt-8 pt-6 border-t border-border-subtle">
          <p className="text-[10px] text-text-muted leading-relaxed">
            Информация на сайте носит справочный характер и не является индивидуальной юридической консультацией. Оказание юридических услуг не является гарантией результата по делу.
          </p>
        </div>
      </Container>
    </footer>
  );
}
