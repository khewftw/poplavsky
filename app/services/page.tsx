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
import { servicesPageContent, siteConfig } from "@/lib/content";
import { Info, Check, HelpCircle, FileText, Settings, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Услуги и цены — ПОПЛАВСКИЙ. Юридическое бюро",
  description: "Юридическая стратегия, анализ рисков и сопровождение сложных ситуаций. Цены на консультации, арбитраж, налоговые и семейные споры.",
  openGraph: {
    title: "Услуги и цены — ПОПЛАВСКИЙ. Юридическое бюро",
    description: "Честная оценка перспектив дела, персональная стратегия и сопровождение сложных споров.",
  }
};

export default function ServicesPage() {
  const content = servicesPageContent;

  return (
    <>
      <Header />
      <main className="w-full bg-bg-primary text-text-primary flex-1">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex flex-col justify-center py-16 overflow-hidden border-b border-border-gold">
          <Image
            src="/images/services_hero_bg.png"
            alt="Юридическое бюро"
            fill
            priority
            className="object-cover object-center brightness-[0.4]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
          <Container className="relative z-10">
            {/* BREADCRUMBS */}
            <div className="flex items-center gap-2 mb-4 text-[10px] text-text-muted uppercase tracking-wider">
              <a href="/" className="hover:text-gold transition-colors">Главная</a>
              <span>/</span>
              <span className="text-gold">Услуги и цены</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight mb-4">
                {content.title}
              </h1>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                {content.subtitle}
              </p>
              <p className="text-xs text-text-muted leading-relaxed mb-8 max-w-xl border-l border-gold pl-4">
                Стоимость зависит от характера вопроса, объёма документов, срочности, формата работы и необходимости выезда. Перед началом работы согласуются объём услуги, цена, порядок оплаты и ожидаемый результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contacts">Записаться на консультацию</Button>
                <Button variant="outline" href="/contacts">Задать вопрос</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* TRUST BAR */}
        <Section className="py-6 lg:py-8 border-b border-border-gold">
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {content.trustItems.map((item, idx) => (
              <BentoCell key={idx} className="flex flex-col justify-center min-h-[80px]">
                <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </Section>

        {/* DIRECTIONS GRID */}
        <Section className="py-12 lg:py-16">
          <SectionHeading title="НАПРАВЛЕНИЯ РАБОТЫ" showUnderline />
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.map((service) => {
              const Icon = getIcon(service.iconName);
              return (
                <BentoCell key={service.id} className="flex flex-col min-h-[220px]">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-gold shrink-0" size={20} strokeWidth={1.5} />
                    <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed flex-1 mb-6">
                    {service.desc}
                  </p>
                  <div className="mt-auto border-t border-border-subtle pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-text-muted uppercase tracking-wider block mb-0.5">Стоимость</span>
                      <span className="text-sm font-semibold text-text-primary">{service.price}</span>
                    </div>
                    <a
                      href={`#${service.id}`}
                      className="text-xs text-gold hover:text-gold-hover tracking-wider uppercase font-semibold transition-colors flex items-center gap-1"
                    >
                      Подробнее <ArrowRight size={12} />
                    </a>
                  </div>
                </BentoCell>
              );
            })}
          </BentoGrid>
        </Section>

        {/* DETAILED SERVICES ACCORDIONS / ANCHORS */}
        <Section className="py-12 lg:py-16 bg-bg-surface border-t border-b border-border-gold">
          <SectionHeading title="ПОДРОБНЫЕ УСЛОВИЯ И СОСТАВ УСЛУГ" overline="ДЕТАЛИЗАЦИЯ" showUnderline />
          <div className="flex flex-col gap-8 mt-8">
            {content.services.map((service) => {
              const Icon = getIcon(service.iconName);
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24 border border-border-gold bg-bg-cell p-6 lg:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-subtle pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Icon className="text-gold shrink-0" size={24} strokeWidth={1.5} />
                      <h3 className="font-serif text-lg sm:text-xl text-text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-[10px] text-text-muted uppercase tracking-wider block">Ориентир стоимости</span>
                      <span className="text-lg font-serif text-gold">{service.price}</span>
                    </div>
                  </div>

                  <p className="text-xs text-text-primary leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                        <HelpCircle size={14} className="text-gold" /> Когда подходит
                      </h4>
                      <ul className="flex flex-col gap-2 list-none">
                        {service.whenFits.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                            <span className="text-gold mt-1 select-none">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                        <FileText size={14} className="text-gold" /> Что входит в работу
                      </h4>
                      <ul className="flex flex-col gap-2 list-none">
                        {service.whatIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                            <span className="text-gold mt-1 select-none">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {service.id === "criminal-strategy" && (
                    <div className="mt-6 p-4 border border-border-gold bg-bg-primary/40 text-[11px] text-text-muted leading-relaxed">
                      <strong>Важное уточнение:</strong> Услуга не заменяет адвокатскую защиту там, где по закону требуется участие адвоката. При необходимости клиенту может быть рекомендовано привлечение адвоката с соответствующим процессуальным статусом.
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-text-muted max-w-xl leading-relaxed">
                      <strong className="text-text-primary">Результат для клиента:</strong> {service.result}
                    </p>
                    <Button href="/contacts" className="sm:self-center shrink-0 text-xs py-2 px-5">
                      {service.ctaText || "Записаться"}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* WORK FORMATS */}
        <Section className="py-12 lg:py-16">
          <SectionHeading title="ФОРМАТЫ РАБОТЫ" showUnderline />
          <p className="text-xs sm:text-sm text-text-muted -mt-2 mb-6 max-w-3xl leading-relaxed">
            Консультации и сопровождение возможны онлайн, очно в Москве, срочно, а также с выездом по России в сложных ситуациях.
          </p>
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {content.formats.map((format, idx) => {
              const Icon = getIcon(format.iconName);
              return (
                <BentoCell key={idx} className="flex flex-col">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon className="text-gold" size={18} strokeWidth={1.5} />
                    <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                      {format.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-gold mb-2">{format.desc}</p>
                  <p className="text-xs text-text-muted leading-relaxed flex-1">
                    {format.detail}
                  </p>
                </BentoCell>
              );
            })}
          </BentoGrid>

          {/* BOX INFO */}
          <div className="mt-6 p-4 border border-border-gold bg-bg-cell flex items-start gap-3">
            <Info className="text-gold shrink-0 mt-0.5" size={16} />
            <p className="text-xs text-text-muted leading-relaxed">
              Стоимость зависит от сложности дела, объёма работы и формата оказания услуги. Точная стоимость определяется после предварительного анализа вашей ситуации.
            </p>
          </div>
        </Section>

        {/* WHAT AFFECTS COST */}
        <Section className="py-12 lg:py-16 border-t border-border-gold bg-bg-surface">
          <SectionHeading title="Что влияет на стоимость" overline="ЦЕНООБРАЗОВАНИЕ" showUnderline />
          <p className="text-xs sm:text-sm text-text-muted mt-2 mb-8 max-w-4xl leading-relaxed">
            Окончательная стоимость зависит от сложности ситуации, объёма документов, срочности, количества участников, необходимости подготовки письменных материалов, участия в переговорах, выезда и продолжительности сопровождения.
          </p>
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {content.priceFactors.map((factor, idx) => (
              <BentoCell key={idx} className="flex items-start gap-3 min-h-[80px]">
                <Check className="text-gold shrink-0 mt-0.5" size={16} strokeWidth={2} />
                <span className="text-xs text-text-primary leading-relaxed">{factor}</span>
              </BentoCell>
            ))}
          </BentoGrid>
        </Section>

        {/* WHAT IS INCLUDED IN WORK */}
        <Section className="py-12 lg:py-16 border-t border-border-gold">
          <SectionHeading title="Что входит в работу" overline="СТАНДАРТЫ" showUnderline />
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <BentoCell className="flex flex-col gap-3 min-h-[160px]">
              <span className="font-serif text-2xl text-gold leading-none">01</span>
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Анализ</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Изучение ситуации, документов, сроков, действий сторон и возможных правовых последствий.
              </p>
            </BentoCell>
            <BentoCell className="flex flex-col gap-3 min-h-[160px]">
              <span className="font-serif text-2xl text-gold leading-none">02</span>
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Оценка рисков</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Определение сильных и слабых сторон позиции, вероятных сценариев и уязвимых мест.
              </p>
            </BentoCell>
            <BentoCell className="flex flex-col gap-3 min-h-[160px]">
              <span className="font-serif text-2xl text-gold leading-none">03</span>
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Стратегия</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Формирование плана действий: переговоры, документы, претензии, жалобы, суд или альтернативный сценарий.
              </p>
            </BentoCell>
            <BentoCell className="flex flex-col gap-3 min-h-[160px]">
              <span className="font-serif text-2xl text-gold leading-none">04</span>
              <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">Сопровождение</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Помощь на согласованных этапах: подготовка документов, консультации, переговоры, контроль дальнейших действий.
              </p>
            </BentoCell>
          </BentoGrid>
        </Section>

        {/* HOW WORK GOES */}
        <Section className="py-12 lg:py-16 border-t border-border-gold bg-bg-surface">
          <SectionHeading title="Как проходит работа" overline="ЭТАПЫ СОТРУДНИЧЕСТВА" showUnderline />
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-8">
            {content.processSteps.map((step, idx) => (
              <BentoCell key={idx} className="flex flex-col gap-3 min-h-[160px]">
                <span className="font-serif text-2xl text-gold leading-none">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </Section>

        {/* CONDITIONS */}
        <Section className="py-12 lg:py-16 border-t border-border-gold">
          <SectionHeading title="Важные условия" showUnderline />
          <p className="text-xs text-text-muted leading-relaxed mb-6 max-w-3xl">
            Юридическая помощь направлена на анализ ситуации, оценку рисков, подготовку позиции и сопровождение интересов клиента. Оказание юридических услуг не является гарантией конкретного результата по делу.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.conditions.map((cond, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 border border-border-subtle bg-bg-cell">
                <span className="text-gold select-none font-serif text-lg leading-none shrink-0">•</span>
                <p className="text-xs text-text-muted leading-relaxed">{cond}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-gold">
            Подробнее — в{" "}
            <a href="/documents" className="underline hover:text-gold-hover transition-colors">
              документах и условиях работы
            </a>
          </p>
        </Section>

        {/* BOTTOM CTA */}
        <Section className="py-12 lg:py-16 border-t border-border-gold bg-bg-surface">
          <div className="border border-border-gold p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-text-primary mb-4 leading-tight">
                  Нужна стратегия по вашей ситуации?
                </h2>
                <p className="text-xs text-text-muted leading-relaxed mb-6 max-w-xl">
                  Опишите вопрос — я помогу определить формат консультации, оценить срочность и предложить дальнейший порядок работы.
                </p>
                <div className="flex flex-col gap-1.5 border-l border-gold pl-4 py-1.5 mb-6 lg:mb-0">
                  <span className="text-xs text-text-muted uppercase tracking-wider block">Контакты</span>
                  <a href={siteConfig.phoneHref} className="text-sm font-semibold text-text-primary hover:text-gold transition-colors">
                    {siteConfig.phone}
                  </a>
                  <span className="text-[10px] text-text-muted">{siteConfig.location}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button href="/contacts" className="py-3.5">
                  Записаться на консультацию
                </Button>
                <Button variant="outline" href="/documents" className="py-3.5">
                  Открыть документы и условия
                </Button>
                <p className="text-[10px] text-text-muted text-center italic">
                  Конфиденциально. Официально. Без обещаний невозможного.
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
