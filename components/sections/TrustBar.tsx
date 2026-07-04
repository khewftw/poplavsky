import { trustStats } from "@/lib/content";
import { getIcon } from "@/lib/icons";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";

interface TrustBarProps {
  embedded?: boolean;
}

function TrustBarGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {trustStats.map((stat, index) => {
        const Icon = getIcon(stat.iconName);
        return (
          <div key={stat.value} className="flex">
            {index > 0 && (
              <GoldDivider orientation="vertical" className="hidden lg:block" />
            )}
            <div className="flex-1 flex items-start gap-2 lg:gap-3 py-4 sm:py-3 lg:py-4 px-4 sm:px-3 lg:px-5 border-b sm:border-b sm:border-r border-border-subtle last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(even)]:border-r-0 lg:border-b-0 lg:border-r-0">
              <Icon
                className="shrink-0 text-gold mt-0.5"
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <p className="text-sm lg:text-lg font-semibold text-text-primary leading-tight">
                  {stat.value}
                </p>
                <p className="text-[10px] lg:text-xs text-text-muted leading-snug mt-0.5">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function TrustBar({ embedded = false }: TrustBarProps) {
  if (embedded) {
    return (
      <div
        className="w-screen relative left-1/2 -translate-x-1/2 border-t border-border-gold bg-bg-primary/85 backdrop-blur-sm"
        aria-label="Ключевые показатели"
      >
        <TrustBarGrid />
      </div>
    );
  }

  return (
    <section
      className="w-full border-y border-border-gold bg-bg-surface"
      aria-label="Ключевые показатели"
    >
      <Container>
        <TrustBarGrid />
      </Container>
    </section>
  );
}
