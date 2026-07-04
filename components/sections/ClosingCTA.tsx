"use client";

import { useState } from "react";
import Image from "next/image";
import { closingContent } from "@/lib/content";
import { BentoCell } from "@/components/ui/BentoCell";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const inputClassName =
  "w-full px-3 py-2.5 bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none text-xs";

export function ClosingCTA() {
  const [form, setForm] = useState({ name: "", phone: "", telegram: "", consent: false });
  const [errors, setErrors] = useState<
    Partial<Record<"name" | "phone" | "consent", string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<Record<"name" | "phone" | "consent", string>> = {};
    if (form.name.trim().length < 2) {
      newErrors.name = "Введите имя";
    }
    const phoneClean = form.phone.replace(/\D/g, "");
    if (phoneClean.length < 10) {
      newErrors.phone = "Введите корректный телефон";
    }
    if (!form.consent) {
      newErrors.consent = "Для отправки заявки необходимо дать согласие на обработку персональных данных.";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
          
          {/* LEFT: PREMIUM CONTEXT IMAGE */}
          <div className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-border-gold">
            <Image
              src="/images/closing_cta_bg.png"
              alt="Юридическое бюро"
              fill
              className="object-cover object-center brightness-75"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* RIGHT: TEXT & FORM */}
          <BentoCell className="flex flex-col justify-center p-6 lg:p-10">
            <div className="mb-6">
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
            </div>

            {submitted ? (
              <div className="py-6 border border-border-gold bg-bg-primary/40 p-6 rounded-sm">
                <h3 className="font-serif text-base text-gold mb-2">
                  {closingContent.form.successTitle}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
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
                <div className="mt-1 mb-2 text-left">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, consent: e.target.checked }))
                      }
                      className="accent-gold mt-0.5 shrink-0 w-3.5 h-3.5"
                    />
                    <span className="text-[10px] text-text-muted leading-relaxed">
                      Я даю согласие на обработку моих персональных данных в соответствии с{" "}
                      <a href="/consent" className="text-gold hover:underline">Согласием на обработку персональных данных</a>{" "}
                      и подтверждаю, что ознакомлен с{" "}
                      <a href="/privacy" className="text-gold hover:underline">Политикой обработки персональных данных</a>.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[10px] text-red-400 mt-1">{errors.consent}</p>
                  )}
                </div>
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
