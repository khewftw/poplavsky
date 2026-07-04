import Image from "next/image";
import { founderContent } from "@/lib/content";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function FounderSection() {
  return (
    <Section id="about-bureau" borderTop>
      <div className="border border-border-gold grid grid-cols-1 lg:grid-cols-[380px_1fr] lg:items-stretch">
        {/* IMAGE */}
        <div className="relative min-h-[350px] lg:min-h-[450px]">
          <Image
            src="/images/founder.jpeg"
            alt="Валентин Поплавский"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 380px"
          />
        </div>
        
        {/* TEXT */}
        <div className="p-6 lg:p-10 flex flex-col justify-between bg-bg-surface">
          <div className="flex flex-col gap-4">
            <BlockTitle>{founderContent.overline}</BlockTitle>
            <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-text-primary leading-snug border-l border-gold pl-4 my-2">
              {founderContent.quote}
            </blockquote>
            {/* Body text with paragraphs */}
            <div className="text-xs sm:text-sm text-text-muted leading-relaxed space-y-4 max-w-2xl">
              {founderContent.body.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="pt-6 mt-8 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-base lg:text-lg text-gold italic leading-none">
                {founderContent.signature}
              </p>
              <p className="text-[10px] text-text-muted uppercase tracking-wider mt-1.5 leading-none">
                {founderContent.role}
              </p>
            </div>
            <Button variant="outline" href="/about" className="text-xs py-2 px-5 shrink-0">
              Подробнее о бюро →
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
