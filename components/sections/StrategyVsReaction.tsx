import { strategyVsReactionSection } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { FileSearch, ShieldAlert, Scale, Milestone } from "lucide-react";

export function StrategyVsReaction() {
  const icons = [FileSearch, ShieldAlert, Scale, Milestone];

  return (
    <Section id="strategy-vs-reaction" borderTop>
      <SectionHeading title={strategyVsReactionSection.title} overline="ПОДХОД" showUnderline />
      <p className="text-xs sm:text-sm text-text-muted mb-10 -mt-2 max-w-3xl leading-relaxed">
        {strategyVsReactionSection.subtitle}
      </p>
      
      <div className="relative mt-8">
        {/* Horizontal Line for Desktop */}
        <div className="hidden lg:block absolute top-10 left-10 right-10 h-px border-t border-dashed border-border-gold/40 z-0" />
        
        {/* Vertical Line for Mobile/Tablet */}
        <div className="lg:hidden absolute top-4 bottom-4 left-10 w-px border-l border-dashed border-border-gold/40 z-0" />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
          {strategyVsReactionSection.cards.map((card, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="flex flex-row lg:flex-col items-start gap-6 lg:gap-0 group">
                {/* Circle step number/icon */}
                <div className="w-20 h-20 shrink-0 rounded-full bg-bg-cell border border-border-gold flex items-center justify-center lg:mb-5 group-hover:border-gold group-hover:bg-bg-elevated transition-all duration-300 relative z-10">
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold text-bg-primary text-[10px] font-bold flex items-center justify-center select-none">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <Icon className="text-gold group-hover:scale-110 transition-transform duration-300" size={30} strokeWidth={1.2} />
                </div>
                
                {/* Text content */}
                <div className="flex-1 lg:text-left pt-2 lg:pt-0">
                  <h3 className="font-serif text-base text-text-primary mb-2 group-hover:text-gold transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed max-w-xs">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
