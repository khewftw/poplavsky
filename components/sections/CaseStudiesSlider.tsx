"use client";

import { useCallback, useState } from "react";
import { caseStudies } from "@/lib/content";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CaseStudiesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveIndex(
      ((index % caseStudies.length) + caseStudies.length) % caseStudies.length
    );
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(activeIndex + (diff > 0 ? 1 : -1));
    }
    setTouchStart(null);
  };

  const current = caseStudies[activeIndex];

  return (
    <div
      id="cases"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex px-2 py-0.5 text-[10px] border border-red-400/40 text-red-400">
          Было: {current.threatAmount}
        </span>
        <span className="inline-flex px-2 py-0.5 text-[10px] border border-green-500/40 text-green-400">
          Стало: {current.savedAmount}
        </span>
      </div>

      <div key={current.id}>
        <h4 className="font-serif text-base text-text-primary leading-snug">
          {current.title}
        </h4>

        <dl className="mt-4 grid grid-cols-1 gap-3">
          <div>
            <dt className="text-[10px] text-gold uppercase tracking-wider mb-1">
              Сфера
            </dt>
            <dd className="text-xs text-text-primary">{current.sphere}</dd>
          </div>
          <div>
            <dt className="text-[10px] text-gold uppercase tracking-wider mb-1">
              Было
            </dt>
            <dd className="text-xs text-text-muted">{current.before}</dd>
          </div>
          <div>
            <dt className="text-[10px] text-gold uppercase tracking-wider mb-1">
              Что сделали
            </dt>
            <dd className="text-xs text-text-muted">{current.actions}</dd>
          </div>
          <div>
            <dt className="text-[10px] text-gold uppercase tracking-wider mb-1">
              Стало
            </dt>
            <dd className="text-xs text-text-primary">{current.after}</dd>
          </div>
        </dl>
      </div>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-border-subtle">
        <div className="flex gap-1.5">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`w-1.5 h-1.5 transition-colors ${
                index === activeIndex ? "bg-gold" : "bg-border-subtle"
              }`}
              aria-label={`Кейс ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="p-2 border border-gold text-gold hover:bg-gold/10 min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Предыдущий кейс"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="p-2 border border-gold text-gold hover:bg-gold/10 min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label="Следующий кейс"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
