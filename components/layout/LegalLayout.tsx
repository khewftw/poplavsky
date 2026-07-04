import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

interface LegalLayoutProps {
  title: string;
  updatedAt?: string;
  children: ReactNode;
}

export function LegalLayout({ title, updatedAt = "02 июля 2026 г.", children }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="w-full bg-bg-primary text-text-primary flex-1">
        <section className="py-12 md:py-20 border-b border-border-gold">
          <Container>
            {/* BREADCRUMBS */}
            <div className="flex items-center gap-2 mb-6 text-[10px] text-text-muted uppercase tracking-wider">
              <a href="/" className="hover:text-gold transition-colors">Главная</a>
              <span>/</span>
              <a href="/documents" className="hover:text-gold transition-colors">Документы</a>
              <span>/</span>
              <span className="text-gold">{title}</span>
            </div>

            <div className="max-w-4xl">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-text-primary leading-tight mb-4">
                {title}
              </h1>
              <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider">
                Действующая редакция от {updatedAt}
              </p>
            </div>
          </Container>
        </section>

        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-4xl mx-auto bg-bg-cell/50 border border-border-subtle p-6 md:p-12 text-xs sm:text-sm text-text-muted leading-relaxed select-text space-y-6 text-justify">
              {children}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
