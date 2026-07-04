import { strategyVsReactionSection } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoCell } from "@/components/ui/BentoCell";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Section } from "@/components/ui/Section";

export function StrategyVsReaction() {
  return (
    <Section id="strategy-vs-reaction" borderTop>
      <SectionHeading title={strategyVsReactionSection.title} overline="ПОДХОД" showUnderline />
      <p className="text-xs sm:text-sm text-text-muted mb-6 -mt-2 max-w-3xl leading-relaxed">
        {strategyVsReactionSection.subtitle}
      </p>
      <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {strategyVsReactionSection.cards.map((card, idx) => (
          <BentoCell
            key={idx}
            className="flex flex-col gap-3 min-h-[160px] border-t-2 border-t-gold hover:outline hover:outline-1 hover:outline-gold/30 transition-all group"
          >
            <span className="text-[10px] text-gold font-semibold tracking-wider uppercase leading-none">
              {(idx + 1).toString().padStart(2, "0")}
            </span>
            <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wide leading-snug group-hover:text-gold transition-colors">
              {card.title}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {card.desc}
            </p>
          </BentoCell>
        ))}
      </BentoGrid>
    </Section>
  );
}
