import { whenToAppealSection } from "@/lib/content";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { Section } from "@/components/ui/Section";

export function WhenToAppeal() {
  return (
    <Section id="when-to-appeal" borderTop>
      <BlockTitle className="mb-2">{whenToAppealSection.title}</BlockTitle>
      <p className="text-xs sm:text-sm text-text-muted mb-6 max-w-3xl leading-relaxed">
        {whenToAppealSection.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {whenToAppealSection.items.map((item, idx) => (
          <div key={idx} className="flex gap-3 p-4 border border-border-subtle bg-bg-cell hover:border-gold/30 transition-colors">
            <span className="text-gold select-none font-serif text-lg leading-none shrink-0">•</span>
            <p className="text-xs text-text-muted leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
