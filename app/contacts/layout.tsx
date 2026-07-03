import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты и запись — ПОПЛАВСКИЙ. Юридическое бюро",
  description: "Свяжитесь с нами удобным способом: по телефону +7-968-554-000-3, через Telegram, WhatsApp или e-mail. Обсудим вашу ситуацию конфиденциально.",
  openGraph: {
    title: "Контакты и запись — ПОПЛАВСКИЙ. Юридическое бюро",
    description: "Обсудим вашу ситуацию конфиденциально. Форматы работы: онлайн, очно в Москве, выезд по России.",
  }
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
