import { processSection, processSteps } from "@/lib/content";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { BentoCell } from "@/components/ui/BentoCell";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Section } from "@/components/ui/Section";

export function ProcessSection() {
  return (
    <Section id="approach" borderTop>
      <BlockTitle className="mb-2">{processSection.title}</BlockTitle>
      <p className="text-xs sm:text-sm text-text-muted mb-6 max-w-3xl leading-relaxed">
        Сначала — анализ и стратегия. Затем — действия. Такой подход снижает риск ошибок и помогает принимать решения не на эмоциях, а на фактах.
      </p>
      <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <BentoCell
            key={step.number}
            className="flex flex-col gap-3 min-h-[160px]"
          >
            <span className="font-serif text-2xl lg:text-3xl text-gold leading-none">
              {step.number}
            </span>
            <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wide leading-snug">
              {step.title}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {step.detail}
            </p>
          </BentoCell>
        ))}
      </BentoGrid>
    </Section>
  );
}
