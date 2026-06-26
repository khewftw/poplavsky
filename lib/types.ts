import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}

export interface PainCard {
  id: string;
  scenario: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ComparisonRow {
  bad: string;
  good: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  sphere: string;
  before: string;
  actions: string;
  after: string;
  threatAmount: string;
  savedAmount: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FounderContent {
  overline: string;
  quote: string;
  body: string;
  signature: string;
  role: string;
}

export interface QuizOption {
  value: string;
  label: string;
  weight: number;
}

export interface QuizQuestion {
  id: "area" | "amount" | "stage";
  question: string;
  options: QuizOption[];
}

export type VulnerabilityTier = "low" | "medium" | "high" | "critical";

export interface QuizResult {
  score: number;
  tier: VulnerabilityTier;
  tierLabel: string;
}

export type IconComponent = LucideIcon;
