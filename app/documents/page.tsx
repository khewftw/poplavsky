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
import { documentsPageContent, siteConfig } from "@/lib/content";
import { ArrowRight, Download, Check, ShieldAlert, CreditCard, RefreshCw, Eye, Lock, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Документы и условия — ПОПЛАВСКИЙ. Юридическое бюро",
  description: "Официальные документы бюро: публичная оферта, политика обработки персональных данных, согласие на обработку ПДн, порядок оплаты и возврата.",
  openGraph: {
    title: "Документы и условия — ПОПЛАВСКИЙ. Юридическое бюро",
    description: "Порядок оказания юридических услуг, условия записи, переноса консультаций и возврата денежных средств.",
  }
};

export default function DocumentsPage() {
  const content = documentsPageContent;

  return (
    <>
      <Header />
      <main className="w-full bg-bg-primary text-text-primary flex-1">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex flex-col justify-center py-16 overflow-hidden border-b border-border-gold">
          <Image
            src="/images/documents_hero_bg.png"
            alt="Документы и условия"
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
              <span className="text-gold">Документы и условия</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight mb-4">
                Документы и условия работы
              </h1>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                {content.subtitle}
              </p>
              <p className="text-xs text-text-muted leading-relaxed mb-8 max-w-xl border-l border-gold pl-4">
                Перед оплатой консультации или иной юридической услуги рекомендуется ознакомиться с публичной офертой, политикой обработки персональных данных и порядком оплаты и возврата.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/oferta">Открыть оферту</Button>
                <Button variant="outline" href="/payment-return">Посмотреть порядок оплаты и возврата</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* TRUST CARDS */}
        <Section className="py-6 lg:py-8 border-b border-border-gold">
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {content.trustCards.map((card, idx) => {
              let iconName = "Shield";
              if (idx === 1) iconName = "Target"; // eye
              else if (idx === 2) iconName = "Target"; // lock
              else if (idx === 3) iconName = "Scale"; // sync
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

        {/* MAIN DOCUMENTS LIST */}
        <Section className="py-12 lg:py-16">
          <SectionHeading title="Основные документы" showUnderline />
          <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-px">
            {content.cards.map((doc, idx) => (
              <BentoCell key={idx} className="flex flex-col min-h-[200px]">
                <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                  {doc.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed flex-1 mb-6">
                  {doc.desc}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {"openHref" in doc && doc.openHref ? (
                    <Button href={doc.openHref} className="text-xs py-2 px-5 flex items-center gap-1 shrink-0">
                      Открыть документ <ArrowRight size={12} />
                    </Button>
                  ) : null}
                  {"downloadHref" in doc && doc.downloadHref ? (
                    <a
                      href={doc.downloadHref}
                      download
                      className="text-[10px] text-gold hover:text-gold-hover uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 py-2"
                    >
                      <Download size={12} /> {"downloadLabel" in doc ? doc.downloadLabel : "Скачать"}
                    </a>
                  ) : "pdfHref" in doc && doc.pdfHref ? (
                    <a
                      href={doc.pdfHref}
                      download
                      className="text-[10px] text-gold hover:text-gold-hover uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 py-2"
                    >
                      <Download size={12} /> Скачать PDF
                    </a>
                  ) : null}
                </div>
              </BentoCell>
            ))}
          </BentoGrid>
        </Section>

        {/* BRIEF WORK RULES */}
        <Section className="py-12 lg:py-16 border-t border-border-gold bg-bg-surface">
          <SectionHeading title="Кратко о правилах работы" showUnderline />
          <p className="text-xs sm:text-sm text-text-muted -mt-2 mb-8 max-w-3xl leading-relaxed">
            Ниже — основные условия в кратком виде. Полный порядок определяется публичной офертой и иными документами, размещёнными на этой странице.
          </p>
          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {content.rules.map((rule, idx) => {
              let iconName = "Shield";
              if (idx === 0) iconName = "Calendar";
              else if (idx === 1) iconName = "FileText";
              else if (idx === 2) iconName = "Target"; // desktop/monitor
              else if (idx === 3) iconName = "MapPin"; // car
              else if (idx === 4) iconName = "Target"; // lightning bolt
              else if (idx === 5) iconName = "Scale";
              const Icon = getIcon(iconName);
              return (
                <BentoCell key={idx} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-gold shrink-0" size={16} strokeWidth={1.5} />
                    <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider leading-snug">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {rule.desc}
                  </p>
                </BentoCell>
              );
            })}
          </BentoGrid>
        </Section>

        {/* DETAILED BLOCKS & FORMATS COLUMN */}
        <Section className="py-12 lg:py-16 border-t border-border-gold">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-stretch">
            
            {/* LEFT: PAYMENT / RETURN / PERSONAL DATA INFO */}
            <div className="flex flex-col gap-6">
              
              {/* Payment block */}
              <div className="border border-border-gold bg-bg-cell p-6">
                <h4 className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                  <CreditCard size={14} /> Оплата услуг
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  Оплата производится после согласования формата, стоимости и объёма услуги. Возможные способы оплаты указываются при записи на консультацию или в счёте на оплату. Банковские реквизиты для безналичной оплаты доступны для скачивания в разделе «Основные документы».
                </p>
                <ul className="flex flex-col gap-1.5 text-xs text-text-muted mb-4 list-none">
                  <li className="flex items-start gap-2"><span className="text-gold">•</span> онлайн-консультация оплачивается до её проведения;</li>
                  <li className="flex items-start gap-2"><span className="text-gold">•</span> очная консультация оплачивается до встречи, если иное не согласовано;</li>
                  <li className="flex items-start gap-2"><span className="text-gold">•</span> срочная консультация оплачивается по повышенному тарифу;</li>
                  <li className="flex items-start gap-2"><span className="text-gold">•</span> выезд специалиста, проживание и транспортные расходы оплачиваются отдельно.</li>
                </ul>
                <Link href="/payment-return" className="text-xs text-gold hover:text-gold-hover transition-colors font-semibold uppercase tracking-wider flex items-center gap-1">
                  Подробнее о порядке оплаты и возврата <ArrowRight size={12} />
                </Link>
              </div>

              {/* Refund and Reschedule block */}
              <div className="border border-border-gold bg-bg-cell p-6">
                <h4 className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                  <RefreshCw size={14} /> Возврат и перенос
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  Условия переноса, отмены консультации и возврата денежных средств зависят от формата услуги, времени отмены, объёма уже выполненной работы и фактически понесённых расходов.
                </p>
                <ul className="flex flex-col gap-1.5 text-xs text-text-muted mb-4 list-none">
                  <li className="flex items-start gap-2"><span className="text-gold">•</span> консультация может быть перенесена по согласованию сторон;</li>
                  <li className="flex items-start gap-2"><span className="text-gold">•</span> если услуга уже оказана, её стоимость возврату не подлежит;</li>
                  <li className="flex items-start gap-2"><span className="text-gold">•</span> если до консультации был выполнен анализ документов, стоимость фактически выполненной части может быть удержана.</li>
                </ul>
                <Link href="/payment-return" className="text-xs text-gold hover:text-gold-hover transition-colors font-semibold uppercase tracking-wider flex items-center gap-1">
                  Открыть порядок оплаты и возврата <ArrowRight size={12} />
                </Link>
              </div>

              {/* Personal Data block */}
              <div className="border border-border-gold bg-bg-cell p-6">
                <h4 className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                  <Lock size={14} /> Персональные данные
                </h4>
                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  При направлении заявки, обращении по телефону или через мессенджеры обрабатываются персональные данные, необходимые для связи и оказания услуг: имя, телефон, e-mail, категория вопроса, сведения в обращении.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 font-semibold text-xs text-gold uppercase tracking-wider">
                  <Link href="/privacy" className="hover:text-gold-hover transition-colors flex items-center gap-1">
                    Политика конфиденциальности <ArrowRight size={12} />
                  </Link>
                  <Link href="/consent" className="hover:text-gold-hover transition-colors flex items-center gap-1">
                    Согласие на ПДн <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

            </div>

            {/* RIGHT: WORK FORMATS LIST */}
            <div className="border border-border-gold bg-bg-cell p-6 flex flex-col justify-between">
              <div>
                <BlockTitle className="mb-4">Форматы работы</BlockTitle>
                <div className="flex flex-col gap-4">
                  <div className="border-b border-border-subtle pb-3">
                    <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-0.5">Онлайн</h4>
                    <p className="text-[11px] text-text-muted leading-relaxed">Удобно из любой точки мира по телефону или видеосвязи.</p>
                  </div>
                  <div className="border-b border-border-subtle pb-3">
                    <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-0.5">Очно в Москве</h4>
                    <p className="text-[11px] text-text-muted leading-relaxed">В нашем офисе по предварительной записи для конфиденциальных бесед.</p>
                  </div>
                  <div className="border-b border-border-subtle pb-3">
                    <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-0.5">Срочно</h4>
                    <p className="text-[11px] text-text-muted leading-relaxed">В приоритете, по отдельному повышенному тарифу день-в-день.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-0.5">Выезд по России</h4>
                    <p className="text-[11px] text-text-muted leading-relaxed">Выезжаем в ваш город по предварительному согласованию и предоплате.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border-subtle">
                <Button href="/services" className="w-full text-xs font-semibold">
                  Посмотреть услуги и цены
                </Button>
              </div>
            </div>

          </div>

          {/* WARNING BANNER */}
          <div className="mt-6 p-4 border border-border-gold bg-bg-cell flex items-start gap-3">
            <ShieldAlert className="text-gold shrink-0 mt-0.5" size={16} />
            <p className="text-xs text-text-muted leading-relaxed">
              <strong>Важное юридическое уточнение:</strong> Информация на сайте носит ознакомительный характер и не является публичной офертой, за исключением официальных документов, размещённых в данном разделе. Юридическая помощь не гарантирует достижения определённого результата, так как исход дела зависит от множества обстоятельств, доказательств, действий сторон, позиции суда и иных факторов.
            </p>
          </div>
        </Section>

        {/* BOTTOM CTA BANNER */}
        <Section className="py-12 lg:py-16 border-t border-border-gold bg-bg-surface">
          <div className="border border-border-gold p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-text-primary mb-4 leading-tight">
                  Остались вопросы по условиям работы?
                </h2>
                <p className="text-xs text-text-muted leading-relaxed mb-6 max-w-xl">
                  Мы готовы подробно объяснить правила, документы и условия оказания услуг. Задайте вопрос перед записью.
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
                <Button href="/contacts" className="py-3.5">
                  Записаться на консультацию
                </Button>
                <Button variant="outline" href="/services" className="py-3.5">
                  Посмотреть услуги и цены
                </Button>
                <p className="text-[10px] text-text-muted text-center italic">
                  Сначала — согласование условий. Затем — консультация или сопровождение.
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
