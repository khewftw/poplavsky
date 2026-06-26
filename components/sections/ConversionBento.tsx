import { comparisonSection, quizSection } from "@/lib/content";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { BentoCell } from "@/components/ui/BentoCell";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { RiskQuiz } from "@/components/sections/RiskQuiz";

export function ConversionBento() {
  return (
    <Section id="quiz" borderTop>
      <SectionHeading title={quizSection.title} showUnderline />
      {quizSection.lead && (
        <p className="text-sm text-text-muted mb-5 -mt-2 max-w-3xl">
          {quizSection.lead}
        </p>
      )}
      <BentoGrid className="grid-cols-1 lg:grid-cols-2">
        <BentoCell>
          <BlockTitle>{quizSection.columnTitle}</BlockTitle>
          <p className="text-xs text-text-muted mb-4 -mt-2">
            {quizSection.subtitle}
          </p>
          <RiskQuiz compact hideTitle />
        </BentoCell>
        <BentoCell>
          <BlockTitle>{comparisonSection.columnTitle}</BlockTitle>
          <ComparisonTable compact hideTitle />
        </BentoCell>
      </BentoGrid>
    </Section>
  );
}
