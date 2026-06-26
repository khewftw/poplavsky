import { casesFaqSection, faqSection } from "@/lib/content";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { BentoCell } from "@/components/ui/BentoCell";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudiesSlider } from "@/components/sections/CaseStudiesSlider";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

export function CasesFaqBento() {
  return (
    <Section borderTop>
      <SectionHeading title={casesFaqSection.title} showUnderline />
      <BentoGrid className="grid-cols-1 lg:grid-cols-2">
        <BentoCell>
          <BlockTitle>Кейсы</BlockTitle>
          <CaseStudiesSlider />
        </BentoCell>
        <BentoCell>
          <BlockTitle>{faqSection.title}</BlockTitle>
          <FAQAccordion />
        </BentoCell>
      </BentoGrid>
    </Section>
  );
}
