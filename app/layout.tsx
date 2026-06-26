import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Поплавский — Юридическое бюро | Защита частных лиц",
  description:
    "Уголовная защита, семейные споры, налоговые и арбитражные дела для физических лиц. Персональная стратегия и сопровождение на каждом этапе.",
  openGraph: {
    locale: "ru_RU",
    title: "Поплавский — Юридическое бюро",
    description:
      "Сложные споры решаются не эмоцией. Они решаются стратегией.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
