"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlockTitle } from "@/components/ui/BlockTitle";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { BentoCell } from "@/components/ui/BentoCell";
import { Button } from "@/components/ui/Button";
import { getIcon } from "@/lib/icons";
import { contactsPageContent, siteConfig } from "@/lib/content";
import { Phone, Mail, MessageSquare, Briefcase, Clock, HelpCircle, FileText, Calendar, Lock, AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";

export default function ContactsPage() {
  const content = contactsPageContent;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    format: "",
    urgency: "",
    description: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof typeof form | "general", string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Phone input formatting +7 (XXX) XXX-XX-XX
  const handlePhoneChange = (value: string) => {
    let clean = value.replace(/\D/g, "");
    
    // If user typed 7 or 8 at the beginning, strip it for formatting
    if (clean.startsWith("7") || clean.startsWith("8")) {
      clean = clean.substring(1);
    }
    
    // Limit to 10 digits
    clean = clean.substring(0, 10);
    
    let formatted = "";
    if (clean.length > 0) {
      formatted += `+7 (${clean.substring(0, 3)}`;
    }
    if (clean.length >= 4) {
      formatted += `) ${clean.substring(3, 6)}`;
    }
    if (clean.length >= 7) {
      formatted += `-${clean.substring(6, 8)}`;
    }
    if (clean.length >= 9) {
      formatted += `-${clean.substring(8, 10)}`;
    }
    
    setForm(f => ({ ...f, phone: formatted || value }));
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof typeof form | "general", string>> = {};
    
    if (form.name.trim().length < 2) {
      newErrors.name = "Введите имя (не менее 2 символов)";
    }
    
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 11) { // includes +7/7/8
      newErrors.phone = "Введите корректный телефон (10 цифр после +7)";
    }
    
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Введите корректный E-mail";
    }

    if (!form.category) {
      newErrors.category = "Выберите категорию вопроса";
    }

    if (!form.format) {
      newErrors.format = "Выберите формат консультации";
    }

    if (!form.urgency) {
      newErrors.urgency = "Выберите срочность обращения";
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
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  const categories = [
    "Уголовно-правовой риск",
    "Семейный спор",
    "Налоговый спор",
    "Арбитражный / договорной спор",
    "Юридическое сопровождение",
    "Второе независимое мнение",
    "Иной вопрос",
  ];

  const formats = [
    "Онлайн",
    "Очно в Москве",
    "Срочно",
    "Выезд по Москве",
    "Выезд в Московскую область",
    "Выезд в другой регион РФ",
  ];

  const urgencies = [
    "Не срочно",
    "В ближайшие дни",
    "Желательно сегодня",
    "Срочно, требуется быстрое реагирование",
  ];

  const inputClasses = "w-full px-3 py-2.5 bg-bg-primary border border-border-subtle text-text-primary placeholder:text-text-muted focus:border-gold focus:outline-none text-xs rounded-sm transition-colors";
  const selectClasses = "w-full px-3 py-2.5 bg-bg-primary border border-border-subtle text-text-primary focus:border-gold focus:outline-none text-xs rounded-sm transition-colors cursor-pointer appearance-none";

  return (
    <>
      <Header />
      <main className="w-full bg-bg-primary text-text-primary flex-1">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex flex-col justify-center py-16 overflow-hidden border-b border-border-gold">
          <Image
            src="/images/contacts_hero_bg.png"
            alt="Контакты и запись"
            fill
            priority
            className="object-cover object-center brightness-[0.35]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
          <Container className="relative z-10">
            {/* BREADCRUMBS */}
            <div className="flex items-center gap-2 mb-4 text-[10px] text-text-muted uppercase tracking-wider">
              <a href="/" className="hover:text-gold transition-colors">Главная</a>
              <span>/</span>
              <span className="text-gold">Контакты</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight mb-4">
                {content.title}
              </h1>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                {content.subtitle}
              </p>
              <p className="text-xs text-text-muted leading-relaxed mb-8 max-w-xl border-l border-gold pl-4">
                {content.locationDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="#request-form">Оставить заявку</Button>
                <Button variant="outline" href="/services">Посмотреть услуги и цены</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* TRUST CARDS */}
        <Section className="py-6 lg:py-8 border-b border-border-gold">
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {content.trustCards.map((card, idx) => {
              let iconName = "Shield";
              if (idx === 1) iconName = "Clock";
              else if (idx === 2) iconName = "Target"; // online/offline
              else if (idx === 3) iconName = "MapPin";
              const Icon = getIcon(iconName);
              return (
                <BentoCell key={idx} className="flex items-center gap-3">
                  <Icon className="text-gold shrink-0" size={18} strokeWidth={1.5} />
                  <div>
                    <h4 className="text-[11px] font-semibold text-text-primary uppercase tracking-wide">
                      {card.title}
                    </h4>
                    <p className="text-[10px] text-text-muted mt-0.5 leading-snug">
                      {card.desc}
                    </p>
                  </div>
                </BentoCell>
              );
            })}
          </BentoGrid>
        </Section>

        {/* CONTACT DATA & FORM AREA */}
        <Section id="request-form" className="py-12 lg:py-16 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-12 items-stretch">
            
            {/* LEFT COLUMN: CONTACT DETAILS */}
            <div className="flex flex-col gap-4">
              
              {/* Phone card */}
              <div className="border border-border-gold bg-bg-cell p-5 flex items-start gap-4">
                <Phone className="text-gold mt-1 shrink-0" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Телефон</h4>
                  <a href={siteConfig.phoneHref} className="text-base font-semibold text-text-primary hover:text-gold transition-colors block">
                    {content.phone}
                  </a>
                  <p className="text-[10px] text-text-muted mt-1 leading-normal">
                    Для записи и согласования консультации
                  </p>
                </div>
              </div>

              {/* Email card */}
              <div className="border border-border-gold bg-bg-cell p-5 flex items-start gap-4">
                <Mail className="text-gold mt-1 shrink-0" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] text-text-muted uppercase tracking-wider mb-1">E-mail</h4>
                  <a href={content.emailHref} className="text-sm font-semibold text-text-primary hover:text-gold transition-colors block">
                    {content.email}
                  </a>
                  <p className="text-[10px] text-text-muted mt-1 leading-normal">
                    Для направления документов и официальных обращений
                  </p>
                </div>
              </div>

              {/* Messengers card */}
              {/* @ts-ignore */}
              <a
                href={content.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border-gold bg-bg-cell p-5 flex items-start gap-4 hover:border-gold transition-colors group cursor-pointer"
              >
                <MessageSquare className="text-gold mt-1 shrink-0 group-hover:scale-105 transition-transform" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{content.telegramText}</h4>
                  <p className="text-xs text-text-primary leading-normal font-medium group-hover:text-gold transition-colors">
                    Написать в Telegram
                  </p>
                  <p className="text-[10px] text-text-muted mt-1 leading-normal">
                    {content.telegramDesc}
                  </p>
                </div>
              </a>

              {/* Work Formats */}
              <div className="border border-border-gold bg-bg-cell p-5 flex items-start gap-4">
                <Briefcase className="text-gold mt-1 shrink-0" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] text-text-muted uppercase tracking-wider mb-2">Форматы работы</h4>
                  <ul className="flex flex-col gap-1 text-[11px] text-text-muted">
                    <li className="flex items-center gap-2"><span className="text-gold">•</span> Онлайн-консультация</li>
                    <li className="flex items-center gap-2"><span className="text-gold">•</span> Очная встреча в Москве</li>
                    <li className="flex items-center gap-2"><span className="text-gold">•</span> Срочная консультация</li>
                    <li className="flex items-center gap-2"><span className="text-gold">•</span> Выезд по России</li>
                  </ul>
                </div>
              </div>

              {/* Connection hours */}
              <div className="border border-border-gold bg-bg-cell p-5 flex items-start gap-4">
                <Clock className="text-gold mt-1 shrink-0" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[10px] text-text-muted uppercase tracking-wider mb-1">Время связи</h4>
                  <p className="text-xs text-text-primary font-medium">{content.workingHours}</p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: APPLICATION FORM */}
            <div className="border border-border-gold bg-bg-cell p-6 lg:p-8 flex flex-col justify-center">
              {isSubmitted ? (
                <div className="py-8 text-center max-w-md mx-auto">
                  <ShieldCheck className="text-gold mx-auto mb-4" size={48} strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-text-primary mb-3">
                    Заявка успешно отправлена
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-6">
                    Спасибо. Ваша заявка отправлена. Мы свяжемся с вами по указанным контактам для уточнения деталей, формата консультации и порядка дальнейшей работы.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="text-xs py-2 px-5">
                    Отправить ещё одну заявку
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="border-b border-border-subtle pb-3 mb-2">
                    <h3 className="font-serif text-base text-text-primary">
                      Оставить заявку
                    </h3>
                    <p className="text-[11px] text-text-muted mt-1 leading-normal">
                      Кратко опишите ситуацию — это поможет быстрее определить категорию вопроса, срочность и формат консультации.
                    </p>
                  </div>

                  {errors.general && (
                    <div className="p-3 border border-red-500/30 bg-red-500/5 text-xs text-red-400">
                      {errors.general}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-name" className="text-[10px] text-text-muted uppercase tracking-wider block mb-1">Имя</label>
                      <input
                        id="form-name"
                        type="text"
                        placeholder="Ваше имя"
                        value={form.name}
                        onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                        className={inputClasses}
                      />
                      {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="text-[10px] text-text-muted uppercase tracking-wider block mb-1">Телефон</label>
                      <input
                        id="form-phone"
                        type="text"
                        placeholder="+7 (___) ___-__-__"
                        value={form.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className={inputClasses}
                      />
                      {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-email" className="text-[10px] text-text-muted uppercase tracking-wider block mb-1">E-mail (необязательно)</label>
                    <input
                      id="form-email"
                      type="text"
                      placeholder="E-mail для получения письменного ответа"
                      value={form.email}
                      onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                      className={inputClasses}
                    />
                    {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-category" className="text-[10px] text-text-muted uppercase tracking-wider block mb-1">Категория вопроса</label>
                      <div className="relative">
                        <select
                          id="form-category"
                          value={form.category}
                          onChange={(e) => setForm(f => ({ ...f, category: e.target.value }))}
                          className={selectClasses}
                        >
                          <option value="">Выберите категорию</option>
                          {categories.map((c, i) => (
                            <option key={i} value={c} className="bg-bg-cell text-text-primary">{c}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-3.5 pointer-events-none w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-text-muted" />
                      </div>
                      {errors.category && <p className="text-[10px] text-red-400 mt-1">{errors.category}</p>}
                    </div>

                    <div>
                      <label htmlFor="form-format" className="text-[10px] text-text-muted uppercase tracking-wider block mb-1">Формат консультации</label>
                      <div className="relative">
                        <select
                          id="form-format"
                          value={form.format}
                          onChange={(e) => setForm(f => ({ ...f, format: e.target.value }))}
                          className={selectClasses}
                        >
                          <option value="">Выберите формат</option>
                          {formats.map((fmt, i) => (
                            <option key={i} value={fmt} className="bg-bg-cell text-text-primary">{fmt}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-3.5 pointer-events-none w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-text-muted" />
                      </div>
                      {errors.format && <p className="text-[10px] text-red-400 mt-1">{errors.format}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-urgency" className="text-[10px] text-text-muted uppercase tracking-wider block mb-1">Срочность</label>
                    <div className="relative">
                      <select
                        id="form-urgency"
                        value={form.urgency}
                        onChange={(e) => setForm(f => ({ ...f, urgency: e.target.value }))}
                        className={selectClasses}
                      >
                        <option value="">Выберите срочность</option>
                        {urgencies.map((u, i) => (
                          <option key={i} value={u} className="bg-bg-cell text-text-primary">{u}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-3.5 pointer-events-none w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-text-muted" />
                    </div>
                    {errors.urgency && <p className="text-[10px] text-red-400 mt-1">{errors.urgency}</p>}
                  </div>

                  <div>
                    <label htmlFor="form-desc" className="text-[10px] text-text-muted uppercase tracking-wider block mb-1">Кратко опишите ситуацию</label>
                    <textarea
                      id="form-desc"
                      rows={4}
                      placeholder="Опишите суть вопроса, ключевые обстоятельства и желаемый результат. Не указывайте лишние персональные данные."
                      value={form.description}
                      onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))}
                      className={`${inputClasses} resize-none min-h-[90px]`}
                    />
                  </div>

                  <div className="mt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => setForm(f => ({ ...f, consent: e.target.checked }))}
                        className="accent-gold mt-0.5 shrink-0 w-3.5 h-3.5"
                      />
                      <span className="text-[10px] text-text-muted leading-relaxed">
                        Я согласен на обработку персональных данных в соответствии с{" "}
                        <a href="/consent" className="text-gold hover:underline">Согласием на обработку персональных данных</a>{" "}
                        и подтверждаю, что ознакомлен с{" "}
                        <a href="/privacy" className="text-gold hover:underline">Политикой обработки персональных данных</a>.
                      </span>
                    </label>
                    {errors.consent && <p className="text-[10px] text-red-400 mt-1">{errors.consent}</p>}
                  </div>

                  <div className="border-t border-border-subtle pt-4 mt-2">
                    <Button type="submit" disabled={isSubmitting} className="w-full py-3.5 text-xs font-bold">
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </Button>
                    <p className="text-[9px] text-text-muted text-center mt-2 leading-relaxed">
                      Нажимая кнопку “Отправить заявку”, вы подтверждаете согласие на обработку персональных данных и направление ответа по указанным контактам.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </Section>

        {/* WHEN TO APPEAL */}
        <Section className="py-12 lg:py-16 border-t border-border-gold bg-bg-surface">
          <SectionHeading title="Когда стоит обратиться" showUnderline />
          <p className="text-xs sm:text-sm text-text-muted -mt-2 mb-6 max-w-3xl leading-relaxed">
            Обращение особенно важно, если ситуация уже развивается, есть риск ошибки в первых действиях или вы не уверены, какую стратегию выбрать.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.whenToAppeal.map((item, idx) => (
              <div key={idx} className="flex gap-3 p-4 border border-border-subtle bg-bg-cell">
                <span className="text-gold select-none font-serif text-lg leading-none shrink-0">•</span>
                <p className="text-xs text-text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* HOW PROCESS WORKS */}
        <Section className="py-12 lg:py-16 border-t border-border-gold">
          <SectionHeading title="Как проходит запись" showUnderline />
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {content.steps.map((step) => (
              <BentoCell key={step.num} className="flex flex-col gap-2 min-h-[140px]">
                <span className="font-serif text-2xl lg:text-3xl text-gold leading-none">
                  {step.num}
                </span>
                <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </Section>

        {/* PREPARATIONS */}
        <Section className="py-12 lg:py-16 border-t border-border-gold bg-bg-surface">
          <SectionHeading title="Что желательно подготовить" showUnderline />
          <p className="text-xs sm:text-sm text-text-muted -mt-2 mb-6 max-w-3xl leading-relaxed">
            Для более точного анализа ситуации желательно заранее собрать основные документы и кратко восстановить хронологию событий.
          </p>
          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {content.preparations.map((prep, idx) => {
              let iconName = "Shield";
              if (idx === 0) iconName = "FileText";
              else if (idx === 1) iconName = "Target"; // folder
              else if (idx === 2) iconName = "Calendar";
              else if (idx === 3) iconName = "Scale"; // question
              const Icon = getIcon(iconName);
              return (
                <BentoCell key={idx} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-gold shrink-0" size={16} strokeWidth={1.5} />
                    <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                      {prep.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {prep.desc}
                  </p>
                </BentoCell>
              );
            })}
          </BentoGrid>
          
          <div className="mt-6 p-4 border border-border-gold bg-bg-cell flex items-start gap-3">
            <AlertTriangle className="text-gold shrink-0 mt-0.5" size={16} />
            <p className="text-xs text-text-muted leading-relaxed">
              <strong>Важное уточнение:</strong> Не направляйте через форму лишние персональные данные, банковские сведения, пароли, коды доступа и иную информацию, не связанную с первичным обращением. Подробные документы можно передать после согласования формата консультации.
            </p>
          </div>
        </Section>

        {/* CONFIDENTIALITY & DISCLAIMERS */}
        <Section className="py-12 lg:py-16 border-t border-border-gold">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col border border-border-gold bg-bg-cell p-5">
              <h4 className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                <Lock size={14} /> Конфиденциальность
              </h4>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                Сложные правовые ситуации требуют аккуратного обращения с информацией. Все обращения рассматриваются конфиденциально. Информация, направленная через форму, используется для связи с вами, предварительного определения категории вопроса и согласования дальнейшего порядка работы.
              </p>
              <div className="mt-auto flex flex-col gap-1 text-[11px] text-gold font-medium">
                <a href="/privacy" className="hover:underline">Политика обработки персональных данных →</a>
                <a href="/consent" className="hover:underline">Согласие на обработку персональных данных →</a>
                <a href="/documents" className="hover:underline">Документы и условия работы →</a>
              </div>
            </div>

            <div className="flex flex-col border border-border-gold bg-bg-cell p-5">
              <h4 className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                <AlertTriangle size={14} /> Важное уточнение
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Оставление заявки, звонок или сообщение в мессенджере сами по себе не означают заключение договора на оказание юридических услуг. Условия работы, стоимость, объём услуги и порядок оплаты согласуются отдельно до начала оказания услуги.
              </p>
              <p className="text-xs text-text-muted leading-relaxed mt-3 border-t border-border-subtle pt-3">
                Юридическая консультация и сопровождение не являются гарантией конкретного результата по делу. Итог зависит от обстоятельств, доказательств, действий сторон, позиции суда, государственных органов и иных факторов.
              </p>
            </div>
          </div>
        </Section>

        {/* BOTTOM CTA BANNER */}
        <Section className="py-12 lg:py-16 border-t border-border-gold bg-bg-surface">
          <div className="border border-border-gold p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-text-primary mb-4 leading-tight">
                  Готовы обсудить ситуацию?
                </h2>
                <p className="text-xs text-text-muted leading-relaxed mb-6 max-w-xl">
                  Опишите вопрос — мы поможем определить подходящий формат консультации и дальнейший порядок работы.
                </p>
                <div className="flex flex-col gap-1.5 border-l border-gold pl-4 py-1.5 mb-6 lg:mb-0">
                  <span className="text-xs text-text-muted uppercase tracking-wider block">Телефон</span>
                  <a href={siteConfig.phoneHref} className="text-sm font-semibold text-text-primary hover:text-gold transition-colors block">
                    {siteConfig.phone}
                  </a>
                  <span className="text-[10px] text-text-muted">{siteConfig.location}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button href="#request-form" className="py-3.5">
                  Оставить заявку
                </Button>
                <Button variant="outline" href="/services" className="py-3.5">
                  Посмотреть услуги и цены
                </Button>
                <p className="text-[10px] text-text-muted text-center italic">
                  Сначала — анализ. Затем — стратегия. После этого — действия.
                </p>
              </div>
            </div>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  );
}
