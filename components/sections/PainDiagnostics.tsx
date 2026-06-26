import { painScenarios, painSection } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { BentoCell } from "@/components/ui/BentoCell";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PainDiagnostics() {
  return (
    <Section id="diagnostics" borderTop>
      <SectionHeading title={painSection.title} showUnderline />

      <BentoGrid className="grid-cols-1 md:grid-cols-2">
        {painScenarios.map((card) => {
          const Icon = getIcon(card.iconName);
          return (
            <BentoCell
              key={card.id}
              className="border-t-2 border-t-gold hover:outline hover:outline-1 hover:outline-gold/50 transition-colors group"
            >
              <Icon
                className="text-gold mb-3"
                size={24}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span className="text-gold text-[10px] font-semibold tracking-[0.15em] uppercase">
                {card.scenario}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-text-primary group-hover:text-gold transition-colors">
                {card.title}
              </h3>
              <p className="mt-2 text-xs text-text-muted leading-relaxed">
                {card.description}
              </p>
            </BentoCell>
          );
        })}
      </BentoGrid>
    </Section>
  );
}
