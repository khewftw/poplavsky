import Image from "next/image";
import Link from "next/link";
import {
  founderContent,
  processSection,
  processSteps,
  serviceCards,
  servicesSection,
} from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { BentoCell } from "@/components/ui/BentoCell";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ServicesAboutBento() {
  return (
    <Section id="services" borderTop>
      <div className="border border-border-gold grid grid-cols-1 lg:grid-cols-[1fr_380px] lg:items-stretch">
        
        {/* LEFT COLUMN: DIRECTIONS & PROCESS */}
        <div className="border-b lg:border-b-0 lg:border-r border-border-gold p-6 lg:p-8 flex flex-col justify-between gap-10">
          
          {/* PRACTICAL DIRECTIONS */}
          <div>
            <SectionHeading title={servicesSection.title} overline="НАПРАВЛЕНИЯ" showUnderline className="mb-6" />
            <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((card) => {
                const Icon = getIcon(card.iconName);
                return (
                  <BentoCell key={card.id} className="flex flex-col gap-3 min-h-[170px] hover:border-gold/30 transition-colors">
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
          </div>

          {/* HOW WE WORK */}
          <div>
            <div id="approach" className="scroll-mt-24">
              <SectionHeading title={processSection.title} overline="ПРОЦЕСС" showUnderline className="mb-6" />
            </div>
            <p className="text-xs text-text-muted mb-6 -mt-2 max-w-3xl leading-relaxed">
              Сначала — анализ и стратегия. Затем — действия. Такой подход снижает риск ошибок и помогает принимать решения не на эмоциях, а на фактах.
            </p>
            <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <BentoCell
                  key={step.number}
                  className="flex flex-col gap-2 min-h-[150px] hover:border-gold/30 transition-colors"
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

        </div>

        {/* RIGHT COLUMN: FOUNDER (ABOUT BUREAU) */}
        <div className="flex flex-col min-h-full bg-bg-surface" id="about-bureau">
          <div className="relative flex-1 min-h-[350px] lg:min-h-0">
            <Image
              src="/images/founder.jpeg"
              alt="Валентин Поплавский"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 380px"
              priority
            />
          </div>
          <div className="p-6 flex flex-col gap-4 border-t border-border-gold bg-bg-cell/40">
            <div className="flex items-center gap-3">
              <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">
                {founderContent.overline}
              </span>
              <span className="w-10 h-px bg-gold shrink-0" aria-hidden="true" />
            </div>
            <blockquote className="font-serif text-lg text-text-primary leading-snug border-l border-gold pl-3">
              {founderContent.quote}
            </blockquote>
            <div className="text-xs text-text-muted leading-relaxed space-y-3">
              {founderContent.body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-4 mt-auto">
              <div>
                <p className="font-serif text-base text-gold italic leading-none">
                  {founderContent.signature}
                </p>
                <p className="text-[9px] text-text-muted uppercase tracking-wider mt-1.5 leading-none">
                  {founderContent.role}
                </p>
              </div>
              <Button variant="outline" href="/about" className="text-[10px] py-1.5 px-4 shrink-0">
                Подробнее о бюро →
              </Button>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
