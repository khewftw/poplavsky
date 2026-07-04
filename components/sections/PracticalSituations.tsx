import { practicalSituationsSection } from "@/lib/content";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { BentoCell } from "@/components/ui/BentoCell";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Section } from "@/components/ui/Section";

export function PracticalSituations() {
  return (
    <Section id="practical-situations" borderTop>
      <BlockTitle className="mb-2">{practicalSituationsSection.title}</BlockTitle>
      <p className="text-xs sm:text-sm text-text-muted mb-8 max-w-3xl leading-relaxed">
        {practicalSituationsSection.subtitle}
      </p>
      
      <BentoGrid className="grid-cols-1 lg:grid-cols-3 gap-6">
        {practicalSituationsSection.situations.map((sit, idx) => (
          <BentoCell
            key={idx}
            className="flex flex-col p-6 bg-bg-cell border border-border-gold rounded-sm hover:border-gold transition-colors"
          >
            <h3 className="font-serif text-sm sm:text-base text-gold mb-5 border-b border-border-subtle pb-3">
              {sit.title}
            </h3>
            
            <div className="flex-1 flex flex-col gap-4">
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
              
              <div className="space-y-1 border-t border-border-subtle pt-3 mt-2">
                <span className="text-[9px] text-green-400 uppercase tracking-wider block font-semibold">Результат для клиента</span>
                <p className="text-xs text-text-primary leading-relaxed font-medium">{sit.result}</p>
              </div>
            </div>
          </BentoCell>
        ))}
      </BentoGrid>
    </Section>
  );
}
