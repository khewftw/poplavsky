import Image from "next/image";
import { practicalSituationsSection } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function PracticalSituations() {
  return (
    <Section id="practical-situations" borderTop>
      <SectionHeading title={practicalSituationsSection.title} overline="ПРАКТИКА" showUnderline />
      <p className="text-xs sm:text-sm text-text-muted mb-10 -mt-2 max-w-3xl leading-relaxed">
        {practicalSituationsSection.subtitle}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:items-stretch">
        
        {/* LEFT COLUMN: IMAGE AND CALL TO ACTION */}
        <div className="flex flex-col border border-border-gold bg-bg-surface p-6 rounded-sm justify-between">
          <div className="relative w-full h-[220px] lg:h-[280px] mb-6 rounded-sm overflow-hidden border border-border-subtle">
            <Image
              src="/images/practical_situations_bg.png"
              alt="Оценка прецедентов"
              fill
              className="object-cover object-center brightness-90"
              sizes="(max-width: 1024px) 100vw, 380px"
              priority
            />
          </div>
          <div className="flex-1 flex flex-col justify-between gap-6">
            <div>
              <h4 className="text-[10px] text-gold uppercase tracking-[0.2em] font-semibold mb-2">Опыт и стратегии</h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Каждая ситуация прорабатывается индивидуально. Анализ прецедентов помогает исключить типовые процессуальные ловушки оппонентов на ранней стадии спора.
              </p>
            </div>
            <Button href="/contacts" className="w-full text-xs py-3">
              Обсудить ваш случай →
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN: STACKED DETAILED SITUATIONS */}
        <div className="flex flex-col gap-6">
          {practicalSituationsSection.situations.map((sit, idx) => (
            <div
              key={idx}
              className="border-l-2 border-gold bg-bg-cell/40 hover:bg-bg-cell border border-y-border-subtle border-r-border-subtle p-6 hover:border-gold/40 transition-all duration-300"
            >
              <h3 className="font-serif text-base text-gold mb-4 pb-2 border-b border-border-subtle">
                {sit.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="space-y-1">
                  <span className="text-[9px] text-text-muted uppercase tracking-wider block font-semibold">Ситуация</span>
                  <p className="text-xs text-text-primary leading-relaxed">{sit.situation}</p>
                </div>
                
                <div className="space-y-1">
                  <span className="text-[9px] text-red-400/80 uppercase tracking-wider block font-semibold">Риск</span>
                  <p className="text-xs text-text-muted leading-relaxed">{sit.risk}</p>
                </div>
                
                <div className="space-y-1">
                  <span className="text-[9px] text-gold uppercase tracking-wider block font-semibold">Что делаем</span>
                  <p className="text-xs text-text-muted leading-relaxed">{sit.action}</p>
                </div>
                
                <div className="space-y-1 border-t md:border-t-0 md:border-l border-border-subtle pt-3 md:pt-0 md:pl-6">
                  <span className="text-[9px] text-green-400 uppercase tracking-wider block font-semibold">Результат для клиента</span>
                  <p className="text-xs text-text-primary leading-relaxed font-medium">{sit.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
