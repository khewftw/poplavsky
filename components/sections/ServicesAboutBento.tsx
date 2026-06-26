import Image from "next/image";
import {
  founderContent,
  processSection,
  processSteps,
  serviceCards,
  servicesSection,
} from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { BentoCell } from "@/components/ui/BentoCell";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Section } from "@/components/ui/Section";

export function ServicesAboutBento() {
  return (
    <Section id="services" borderTop>
      <div className="border border-border-gold grid grid-cols-1 lg:grid-cols-[1fr_minmax(300px,380px)] lg:items-stretch">
        <div className="border-b lg:border-b-0 lg:border-r border-border-gold p-5 lg:p-6">
          <BlockTitle>{servicesSection.title}</BlockTitle>

          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card) => {
              const Icon = getIcon(card.iconName);
              return (
                <BentoCell key={card.id} className="flex flex-col gap-3">
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
                  <a
                    href="#contacts"
                    className="text-[10px] text-gold tracking-wider uppercase hover:text-gold-hover transition-colors"
                  >
                    Подробнее →
                  </a>
                </BentoCell>
              );
            })}
          </BentoGrid>

          <BlockTitle className="mt-6 lg:mt-8">{processSection.title}</BlockTitle>

          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <BentoCell
                key={step.number}
                className="flex flex-col gap-2 min-h-[140px]"
              >
                <span className="font-serif text-2xl lg:text-3xl text-gold leading-none">
                  {step.number}
                </span>
                <h3 className="text-[10px] font-semibold text-text-primary uppercase tracking-wide leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {step.detail}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </div>

        <div className="flex flex-col min-h-full" id="expertise">
          <div className="relative flex-1 min-h-[320px] lg:min-h-0">
            <Image
              src="/images/founder.jpeg"
              alt="Валентин Поплавский"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 380px"
            />
          </div>
          <div className="p-5 lg:p-6 flex flex-col gap-3 shrink-0 border-t border-border-gold">
            <BlockTitle>{founderContent.overline}</BlockTitle>
            <blockquote className="font-serif text-lg lg:text-xl text-text-primary leading-snug">
              {founderContent.quote}
            </blockquote>
            <p className="text-xs text-text-muted leading-relaxed">
              {founderContent.body}
            </p>
            <div className="pt-2 mt-auto">
              <p className="font-serif text-base lg:text-lg text-gold italic">
                {founderContent.signature}
              </p>
              <p className="text-[10px] text-text-muted uppercase tracking-wider mt-1">
                {founderContent.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
