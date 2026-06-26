"use client";

import { useState } from "react";
import { closingContent } from "@/lib/content";
import { BentoCell } from "@/components/ui/BentoCell";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const inputClassName =
  "w-full px-3 py-2.5 bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none text-xs";

export function ClosingCTA() {
  const [form, setForm] = useState({ name: "", phone: "", telegram: "" });
  const [errors, setErrors] = useState<
    Partial<Record<"name" | "phone", string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<Record<"name" | "phone", string>> = {};
    if (form.name.trim().length < 2) {
      newErrors.name = "Введите имя";
    }
    const phoneClean = form.phone.replace(/\D/g, "");
    if (phoneClean.length < 10) {
      newErrors.phone = "Введите корректный телефон";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <Section id="contacts" borderTop>
      <div className="border border-border-gold">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <BentoCell className="border-b lg:border-b-0 lg:border-r border-border-gold">
            <SectionHeading
              title={closingContent.headline}
              showUnderline
              className="mb-4"
            />
            <h3 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-text-primary lg:text-sm">
              {closingContent.title}
            </h3>
            <p className="mt-3 text-xs text-text-muted leading-relaxed">
              {closingContent.subtitle}
            </p>
            <p className="mt-3 text-xs text-text-muted leading-relaxed">
              {closingContent.copy}
            </p>
          </BentoCell>

          <BentoCell>
            {submitted ? (
              <div className="py-2">
                <h3 className="font-serif text-lg text-text-primary">
                  {closingContent.form.successTitle}
                </h3>
                <p className="mt-2 text-text-muted text-xs">
                  {closingContent.form.successDescription}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder={closingContent.form.namePlaceholder}
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className={inputClassName}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 -mt-2">{errors.name}</p>
                )}
                <input
                  type="text"
                  placeholder={closingContent.form.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  className={inputClassName}
                />
                {errors.phone && (
                  <p className="text-xs text-red-400 -mt-2">{errors.phone}</p>
                )}
                <input
                  type="text"
                  placeholder={closingContent.form.telegramPlaceholder}
                  value={form.telegram}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, telegram: e.target.value }))
                  }
                  className={inputClassName}
                />
                <Button type="submit" className="w-full text-[10px] py-2.5">
                  {closingContent.form.submitCta}
                </Button>
              </form>
            )}
          </BentoCell>
        </div>
      </div>
    </Section>
  );
}
