import type {
  QuizQuestion,
  QuizResult,
  VulnerabilityTier,
} from "./types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "area",
    question: "Какая сфера права вас интересует?",
    options: [
      { value: "criminal", label: "Уголовное право", weight: 3 },
      { value: "family", label: "Семейное право", weight: 2 },
      { value: "tax", label: "Налоговые споры", weight: 3 },
      { value: "arbitration", label: "Арбитражные споры", weight: 2 },
      { value: "business", label: "Защита бизнеса", weight: 2 },
    ],
  },
  {
    id: "amount",
    question: "Какова примерная сумма спора или долга?",
    options: [
      { value: "under-1m", label: "До 1 млн ₽", weight: 1 },
      { value: "1-5m", label: "От 1 до 5 млн ₽", weight: 2 },
      { value: "over-5m", label: "Свыше 5 млн ₽", weight: 4 },
    ],
  },
  {
    id: "stage",
    question: "Есть ли на руках документы или решения суда?",
    options: [
      { value: "preparing", label: "Только готовимся", weight: 1 },
      { value: "ongoing", label: "Суд уже идёт", weight: 3 },
      { value: "appeal", label: "Есть решение, нужна апелляция", weight: 4 },
    ],
  },
];

const tierLabels: Record<VulnerabilityTier, string> = {
  low: "Благоприятные перспективы",
  medium: "Средняя сложность дела",
  high: "Высокие правовые риски",
  critical: "Требуется срочная стратегия",
};

function getTier(score: number): VulnerabilityTier {
  if (score <= 35) return "low";
  if (score <= 55) return "medium";
  if (score <= 75) return "high";
  return "critical";
}

export function calculateVulnerabilityScore(
  answers: Record<string, string>
): QuizResult {
  let totalWeight = 0;

  for (const question of quizQuestions) {
    const answer = answers[question.id];
    const option = question.options.find((o) => o.value === answer);
    if (option) {
      totalWeight += option.weight;
    }
  }

  const maxWeight = quizQuestions.reduce(
    (sum, q) => sum + Math.max(...q.options.map((o) => o.weight)),
    0
  );

  const score = Math.round((totalWeight / maxWeight) * 100);
  const tier = getTier(score);

  return {
    score,
    tier,
    tierLabel: tierLabels[tier],
  };
}

export const quizPhases = [
  "q1",
  "q2",
  "q3",
  "calculating",
  "lead-form",
  "success",
] as const;
export type QuizPhase = (typeof quizPhases)[number];
