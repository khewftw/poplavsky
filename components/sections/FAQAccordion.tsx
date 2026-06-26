"use client";

import { useState } from "react";
import { faqItems } from "@/lib/content";
import { Minus, Plus } from "lucide-react";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <div className="border-t border-border-subtle">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="border-b border-border-subtle">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full flex items-start justify-between gap-3 py-3 text-left min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-expanded={isOpen}
              >
                <span className="text-xs text-text-primary font-medium leading-snug">
                  {item.question}
                </span>
                <span className="shrink-0 text-gold">
                  {isOpen ? (
                    <Minus size={14} strokeWidth={1.5} />
                  ) : (
                    <Plus size={14} strokeWidth={1.5} />
                  )}
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pb-3 text-xs text-text-muted leading-relaxed pr-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
