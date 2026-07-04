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
import { aboutPageContent, siteConfig } from "@/lib/content";
import { Check, Quote, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "О специалисте — ПОПЛАВСКИЙ. Юридическое бюро",
  description: "Опыт, профессиональный путь и принципы работы Валентина Поплавского. Высшее образование МГЮА, многолетняя практика расследования и защиты.",
  openGraph: {
    title: "О специалисте — ПОПЛАВСКИЙ. Юридическое бюро",
    description: "Более 30 лет опыта, персональная вовлеченность в сложные уголовные, арбитражные и семейные дела.",
  }
};

export default function AboutPage() {
  const content = aboutPageContent;

  return (
    <>
      <Header />
      <main className="w-full bg-bg-primary text-text-primary flex-1">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex flex-col justify-center py-20 overflow-hidden border-b border-border-gold">
          <Image
            src="/images/hero.jpeg"
            alt="Валентин Поплавский в кабинете"
            fill
            priority
            className="object-cover object-center lg:object-[center_25%] brightness-[0.35]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
          <Container className="relative z-10">
            {/* BREADCRUMBS */}
            <div className="flex items-center gap-2 mb-4 text-[10px] text-text-muted uppercase tracking-wider">
              <a href="/" className="hover:text-gold transition-colors">Главная</a>
              <span>/</span>
              <span className="text-gold">О специалисте</span>
            </div>

            <div className="max-w-2xl">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight mb-4">
                {content.title}
              </h1>
              <p className="text-gold font-serif text-base sm:text-lg mb-6">
                {content.subtitle}
              </p>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
                {content.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contacts">Записаться на консультацию</Button>
                <Button variant="outline" href="/services">Посмотреть услуги</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* STATS ROWS */}
        <Section className="py-6 lg:py-8 border-b border-border-gold">
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat, idx) => {
              let iconName = "Shield";
              if (idx === 1) iconName = "Target";
              else if (idx === 2) iconName = "Scale";
              else if (idx === 3) iconName = "MapPin";
              const Icon = getIcon(iconName);
              return (
                <BentoCell key={idx} className="flex items-center gap-4">
                  <Icon className="text-gold shrink-0" size={24} strokeWidth={1.5} />
                  <div>
                    <span className="font-serif text-lg text-text-primary block leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-text-muted uppercase tracking-wider block">
                      {stat.label}
                    </span>
                  </div>
                </BentoCell>
              );
            })}
          </BentoGrid>
        </Section>

        {/* PROFESSIONAL PATH */}
        <Section className="py-12 lg:py-16">
          <SectionHeading title="Профессиональный путь" showUnderline />
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {content.professionalPath.map((path) => (
              <BentoCell key={path.num} className="flex flex-col gap-3 min-h-[220px]">
                <span className="font-serif text-2xl lg:text-3xl text-gold leading-none">
                  {path.num}
                </span>
                <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                  {path.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {path.desc}
                </p>
              </BentoCell>
            ))}
          </BentoGrid>
        </Section>

        {/* APPROACH */}
        <Section className="py-12 lg:py-16 border-t border-b border-border-gold bg-bg-surface">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] border border-border-gold items-stretch">
            
            {/* COLUMN 1: HEADING & BULLETS */}
            <div className="border-b lg:border-b-0 lg:border-r border-border-gold p-6 lg:p-8 flex flex-col justify-center">
              <BlockTitle className="mb-4">Подход в работе</BlockTitle>
              <p className="text-xs text-text-primary leading-relaxed mb-6 font-medium">
                {content.approach.headline}
              </p>
              <ul className="flex flex-col gap-2.5">
                {content.approach.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                    <Check className="text-gold shrink-0 mt-0.5" size={14} strokeWidth={2} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2: FOUNDER PORTRAIT */}
            <div className="relative border-b lg:border-b-0 lg:border-r border-border-gold min-h-[350px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-0">
              <Image
                src="/images/founder.jpeg"
                alt="Валентин Поплавский"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            {/* COLUMN 3: QUOTE BLOCK */}
            <div className="p-6 lg:p-8 flex flex-col justify-between min-h-[300px] lg:min-h-0 bg-bg-cell">
              <Quote className="text-gold opacity-30 self-start" size={32} strokeWidth={1} />
              
              <blockquote className="font-serif text-base lg:text-lg text-text-primary leading-relaxed my-6">
                {content.approach.quote}
              </blockquote>

              <div className="mt-auto border-t border-border-subtle pt-4">
                <span className="font-serif text-base text-gold block italic">
                  {content.approach.signature}
                </span>
                <span className="text-[10px] text-text-muted uppercase tracking-wider block mt-1">
                  {content.approach.role}
                </span>
              </div>
            </div>

          </div>
        </Section>

        {/* WHY CHOOSE ME */}
        <Section className="py-12 lg:py-16">
          <SectionHeading title="Почему обращаются ко мне" showUnderline />
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {content.whyChooseMe.map((item, idx) => {
              let iconName = "Target";
              if (idx === 0) iconName = "Target"; // chess knight (Target map)
              else if (idx === 1) iconName = "Target"; // search / zoom
              else if (idx === 2) iconName = "Scale";
              else if (idx === 3) iconName = "Users";
              const Icon = getIcon(iconName);
              return (
                <BentoCell key={idx} className="flex flex-col gap-3 min-h-[160px]">
                  <Icon className="text-gold" size={22} strokeWidth={1.5} />
                  <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </BentoCell>
              );
            })}
          </BentoGrid>
        </Section>

        {/* PRACTICE DIRECTIONS (LINKS TO SERVICES) */}
        <Section className="py-12 lg:py-16 border-t border-border-gold bg-bg-surface">
          <SectionHeading title="Основные направления" showUnderline />
          <p className="text-xs sm:text-sm text-text-muted -mt-2 mb-8 max-w-3xl leading-relaxed">
            Правовые решения в ключевых отраслях права. Нажмите на направление, чтобы посмотреть подробный состав услуг и цены.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {content.practiceAreas.map((area, idx) => {
              let iconName = "Shield";
              if (idx === 1) iconName = "Heart";
              else if (idx === 2) iconName = "Landmark";
              else if (idx === 3) iconName = "Scale";
              else if (idx === 4) iconName = "Briefcase";
              const Icon = getIcon(iconName);
              return (
                <Link
                  key={idx}
                  href={area.href}
                  className="flex flex-col justify-between p-5 border border-border-gold bg-bg-cell hover:border-gold transition-all duration-300 group min-h-[140px]"
                >
                  <Icon className="text-gold group-hover:scale-105 transition-transform" size={20} strokeWidth={1.5} />
                  <div className="mt-6 flex items-end justify-between gap-2">
                    <span className="text-[11px] font-semibold text-text-primary uppercase tracking-wider leading-snug group-hover:text-gold transition-colors">
                      {area.title}
                    </span>
                    <ArrowUpRight size={14} className="text-text-muted group-hover:text-gold shrink-0 transition-colors" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* BOTTOM CTA BANNER */}
        <Section className="py-12 lg:py-16 border-t border-border-gold">
          <div className="border border-border-gold p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-text-primary mb-4 leading-tight">
                  Обсудим вашу ситуацию конфиденциально
                </h2>
                <p className="text-xs text-text-muted leading-relaxed mb-6 max-w-xl">
                  Оставьте заявку — я свяжусь с вами, чтобы обсудить вашу ситуацию и предложить возможные варианты решений.
                </p>
                <div className="flex flex-col gap-1.5 border-l border-gold pl-4 py-1.5 mb-6 lg:mb-0">
                  <span className="text-xs text-text-muted uppercase tracking-wider block">Контакты для записи</span>
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
                <p className="text-[10px] text-text-muted text-center flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Конфиденциальность гарантирована
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
