import Link from "next/link";
import { serviceCards, servicesSection } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { BentoCell } from "@/components/ui/BentoCell";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Section } from "@/components/ui/Section";

export function ServicesGrid() {
  return (
    <Section id="services" borderTop>
      <BlockTitle className="mb-6">{servicesSection.title}</BlockTitle>
      <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map((card) => {
          const Icon = getIcon(card.iconName);
          return (
            <BentoCell key={card.id} className="flex flex-col gap-3 min-h-[180px]">
              <Icon
                className="text-gold"
                size={22}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="text-[11px] font-semibold text-text-primary uppercase tracking-wide leading-snug">
                {card.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed flex-1">
                {card.description}
              </p>
              <Link
                href={`/services#${card.id}`}
                className="text-[10px] text-gold tracking-wider uppercase hover:text-gold-hover transition-colors mt-2 block"
              >
                Подробнее →
              </Link>
            </BentoCell>
          );
        })}
      </BentoGrid>
    </Section>
  );
}
