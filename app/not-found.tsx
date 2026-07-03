import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ShieldAlert, Home, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 — Страница не найдена",
  description: "Запрашиваемая страница не найдена. Поплавский — Юридическое бюро.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="w-full bg-bg-primary text-text-primary flex-1 flex flex-col justify-center py-20 min-h-[70vh] relative overflow-hidden">
        {/* Decorative backdrop background details */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <Container className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="border border-border-gold bg-bg-cell/40 backdrop-blur-sm p-8 md:p-16 max-w-lg w-full flex flex-col items-center shadow-xl">
            <span className="flex items-center justify-center w-16 h-16 border border-gold text-gold font-serif text-3xl mb-6 select-none">
              404
            </span>
            
            <h1 className="font-serif text-2xl md:text-3xl text-text-primary mb-3">
              Страница не найдена
            </h1>
            
            <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-8">
              Запрашиваемая страница не существует, была удалена или временно недоступна. Пожалуйста, проверьте корректность введённого адреса.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <Button href="/" className="text-xs flex items-center justify-center gap-2 w-full sm:w-auto">
                <Home size={14} /> На главную
              </Button>
              <Button variant="outline" href="/contacts" className="text-xs flex items-center justify-center gap-2 w-full sm:w-auto">
                Связаться с нами
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
