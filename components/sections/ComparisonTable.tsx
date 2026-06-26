import { comparisonRows, comparisonSection } from "@/lib/content";
import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ComparisonTableProps {
  compact?: boolean;
  hideTitle?: boolean;
}

export function ComparisonTable({
  compact = false,
  hideTitle = false,
}: ComparisonTableProps) {
  return (
    <div id={compact ? undefined : "approach"}>
      {!compact && !hideTitle && (
        <SectionHeading title={comparisonSection.title} showUnderline />
      )}

      <div className="flex flex-col gap-px bg-border-gold border border-border-gold">
        {!compact && (
          <div className="hidden lg:grid lg:grid-cols-2 gap-px bg-border-gold">
            <div className="bg-bg-cell p-3">
              <h4 className="text-[10px] text-text-muted uppercase tracking-wider">
                {comparisonSection.badHeader}
              </h4>
            </div>
            <div className="bg-bg-cell p-3">
              <h4 className="text-[10px] text-gold uppercase tracking-wider">
                {comparisonSection.goodHeader}
              </h4>
            </div>
          </div>
        )}

        {comparisonRows.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border-gold"
          >
            <div className="flex gap-3 p-4 bg-bg-cell opacity-90">
              <X
                className="shrink-0 text-red-400/70 mt-0.5"
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="text-xs text-text-muted leading-relaxed">{row.bad}</p>
            </div>
            <div className="flex gap-3 p-4 bg-bg-cell">
              <Check
                className="shrink-0 text-gold mt-0.5"
                size={16}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="text-xs text-text-primary leading-relaxed">
                {row.good}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
