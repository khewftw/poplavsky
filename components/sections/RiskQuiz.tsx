"use client";

import { useCallback, useState } from "react";
import { quizSection } from "@/lib/content";
import {
  calculateVulnerabilityScore,
  quizQuestions,
  type QuizPhase,
} from "@/lib/quiz";
import type { QuizResult } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const phaseToQuestionIndex: Record<string, number> = {
  q1: 0,
  q2: 1,
  q3: 2,
};

const PHASE_MIN_HEIGHT = "min-h-[200px]";

interface RiskQuizProps {
  compact?: boolean;
  hideTitle?: boolean;
}

export function RiskQuiz({ compact = false, hideTitle = false }: RiskQuizProps) {
  const [phase, setPhase] = useState<QuizPhase>("q1");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", phone: "", consent: false });
  const [errors, setErrors] = useState<Partial<Record<"name" | "phone" | "consent", string>>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const currentQuestionIndex = phaseToQuestionIndex[phase] ?? -1;
  const progress =
    phase === "success"
      ? 100
      : phase === "lead-form" || phase === "calculating"
        ? 90
        : ((currentQuestionIndex + 1) / quizQuestions.length) * 75;

  const handleAnswer = useCallback(
    (questionId: string, value: string) => {
      const newAnswers = { ...answers, [questionId]: value };
      setAnswers(newAnswers);

      const phases: QuizPhase[] = ["q1", "q2", "q3"];
      const currentIdx = phases.indexOf(phase as "q1" | "q2" | "q3");

      if (currentIdx < 2) {
        setTimeout(() => setPhase(phases[currentIdx + 1]), 300);
      } else {
        setPhase("calculating");
        setTimeout(() => {
          const score = calculateVulnerabilityScore(newAnswers);
          setResult(score);
          setPhase("lead-form");
        }, 1500);
      }
    },
    [answers, phase]
  );

  const validateForm = () => {
    const newErrors: Partial<Record<"name" | "phone" | "consent", string>> = {};
    if (form.name.trim().length < 2) {
      newErrors.name = "Введите имя";
    }
    const phoneClean = form.phone.replace(/\D/g, "");
    if (phoneClean.length < 10) {
      newErrors.phone = "Введите корректный телефон или Telegram";
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
      setResult(calculateVulnerabilityScore(answers));
      setPhase("success");
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const optionCount = currentQuestion?.options.length ?? 0;

  return (
    <div id={compact ? undefined : "quiz"} aria-live="polite">
      {!compact && !hideTitle && (
        <SectionHeading title={quizSection.title} showUnderline />
      )}

      <div className={compact ? "" : "border border-border-gold p-5 lg:p-6"}>
        <div className="mb-4">
          <div className="h-0.5 bg-border-subtle w-full">
            <div
              className="h-full bg-gold transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1.5 text-[10px] text-text-muted uppercase tracking-wider">
            Шаг{" "}
            {phase === "success"
              ? "завершён"
              : phase === "lead-form" || phase === "calculating"
                ? "4"
                : currentQuestionIndex + 1}{" "}
            из 4
          </p>
        </div>

        {(phase === "q1" || phase === "q2" || phase === "q3") && currentQuestion && (
          <fieldset className={PHASE_MIN_HEIGHT}>
            <legend className="font-serif text-base text-text-primary mb-3">
              {currentQuestion.question}
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentQuestion.options.map((option, index) => {
                const isLastOfOddFive =
                  optionCount === 5 && index === optionCount - 1;
                return (
                  <label
                    key={option.value}
                    className={`flex items-start gap-3 p-3 border cursor-pointer transition-colors min-h-[52px] h-full ${
                      isLastOfOddFive ? "sm:col-span-2" : ""
                    } ${
                      answers[currentQuestion.id] === option.value
                        ? "border-gold bg-gold/5"
                        : "border-border-subtle hover:border-gold/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option.value}
                      checked={answers[currentQuestion.id] === option.value}
                      onChange={() =>
                        handleAnswer(currentQuestion.id, option.value)
                      }
                      className="accent-gold w-4 h-4 mt-0.5 shrink-0"
                    />
                    <span className="text-xs text-text-primary">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}

        {phase === "calculating" && (
          <div className={`py-6 text-center ${PHASE_MIN_HEIGHT} flex items-center justify-center`}>
            <p className="text-sm text-text-primary animate-pulse">
              {quizSection.calculatingText}
            </p>
          </div>
        )}

        {phase === "lead-form" && (
          <form onSubmit={handleSubmit} className={PHASE_MIN_HEIGHT}>
            {result && (
              <p className="text-gold text-xs mb-4">
                Оценка: {result.score}/100 — {result.tierLabel}
              </p>
            )}
            <div className="flex flex-col gap-3">
              <input
                id="quiz-name"
                type="text"
                placeholder="Имя"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className="w-full px-3 py-2.5 bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none text-xs"
              />
              {errors.name && (
                <p className="text-xs text-red-400 -mt-2">{errors.name}</p>
              )}
              <input
                id="quiz-phone"
                type="text"
                placeholder="Телефон / Telegram"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                className="w-full px-3 py-2.5 bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none text-xs"
              />
              {errors.phone && (
                <p className="text-xs text-red-400 -mt-2">{errors.phone}</p>
              )}
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
                {quizSection.formCta}
              </Button>
            </div>
          </form>
        )}

        {phase === "success" && result && (
          <div className={`py-4 ${PHASE_MIN_HEIGHT}`}>
            <h3 className="font-serif text-lg text-text-primary">
              {quizSection.successTitle}
            </h3>
            <p className="mt-2 text-gold text-sm">
              {result.score}/100 — {result.tierLabel}
            </p>
            <p className="mt-2 text-text-muted text-xs">
              {quizSection.successDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
