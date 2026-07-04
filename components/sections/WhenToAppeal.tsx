import { whenToAppealSection, richAppealCards } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhenToAppeal() {
  return (
    <Section id="when-to-appeal" borderTop>
      <SectionHeading title={whenToAppealSection.title} overline="ДИАГНОСТИКА" showUnderline />
      <p className="text-xs sm:text-sm text-text-muted mb-8 -mt-2 max-w-3xl leading-relaxed">
        {whenToAppealSection.subtitle}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {richAppealCards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col p-6 bg-bg-cell border border-border-gold rounded-sm hover:border-gold transition-colors duration-300"
          >
            <span className="text-[9px] text-gold font-semibold tracking-wider uppercase block mb-1">
              {card.subtitle}
            </span>
            <h3 className="font-serif text-sm sm:text-base text-text-primary mb-4 border-b border-border-subtle pb-3 leading-snug">
              {card.title}
            </h3>
            
            <div className="flex-1 flex flex-col gap-4">
              <div className="space-y-1">
                <span className="text-[9px] text-text-muted uppercase tracking-wider block font-semibold">Чем поможем</span>
                <p className="text-xs text-text-primary leading-relaxed">{card.help}</p>
              </div>
              
              <div className="space-y-1">
                <span className="text-[9px] text-gold uppercase tracking-wider block font-semibold">Гарантии процесса</span>
                <p className="text-xs text-text-muted leading-relaxed">{card.guarantees}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] text-red-400/90 uppercase tracking-wider block font-semibold">Как работают другие бюро</span>
                <p className="text-xs text-text-muted/80 leading-relaxed italic">{card.others}</p>
              </div>
              
              <div className="space-y-1 border-t border-border-subtle pt-3 mt-2">
                <span className="text-[9px] text-green-400 uppercase tracking-wider block font-semibold">Плюсы реагирования сейчас</span>
                <p className="text-xs text-text-primary leading-relaxed font-medium">{card.pluses}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
