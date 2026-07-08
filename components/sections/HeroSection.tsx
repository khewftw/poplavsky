import Image from "next/image";
import { heroContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col lg:min-h-[60vh] lg:justify-center pb-8 lg:py-20 overflow-hidden border-b border-border-gold bg-bg-primary"
    >
      {/* Mobile: image on top with fade into background */}
      <div className="relative w-full h-[42dvh] min-h-[260px] max-h-[400px] lg:hidden shrink-0">
        <Image
          src="/images/hero-mobile1.jpeg"
          alt="Валентин Поплавский"
          fill
          priority
          className="object-cover object-[65%_18%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent via-bg-primary/70 to-bg-primary"
          aria-hidden="true"
        />
      </div>

      {/* Desktop: full-bleed background image */}
      <Image
        src="/images/hero.jpeg"
        alt="Валентин Поплавский"
        fill
        priority
        className="hidden lg:block object-cover object-top"
        sizes="100vw"
      />

      {/* Desktop overlay: gradient to right */}
      <div
        className="absolute inset-0 z-[5] hidden lg:block bg-[linear-gradient(to_right,var(--bg-primary)_0%,var(--bg-primary)_25%,transparent_50%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col justify-end lg:justify-center w-full lg:my-auto pt-6 lg:pt-0">
        <div className="flex flex-col gap-4 lg:gap-5 max-w-xl">
          <div className="flex items-center gap-3">
            <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">
              {heroContent.overline}
            </span>
            <span
              className="hidden sm:block w-10 h-px bg-gold"
              aria-hidden="true"
            />
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
            {heroContent.title}
          </h1>

          <p className="text-text-muted text-sm leading-relaxed max-w-md">
            {heroContent.subtitle}
          </p>

          {/* @ts-ignore */}
          {heroContent.additionalLine && (
            <p className="text-text-muted text-xs leading-relaxed max-w-md border-l border-gold pl-4 mt-1">
              {/* @ts-ignore */}
              {heroContent.additionalLine}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button href={heroContent.ctaPrimaryHref}>
              {heroContent.ctaPrimary}
            </Button>
            <Button variant="outline" href={heroContent.ctaSecondaryHref}>
              {heroContent.ctaSecondary}
            </Button>
          </div>

          {/* @ts-ignore */}
          {heroContent.signature && (
            <p className="text-[10px] text-text-muted italic mt-1">
              {/* @ts-ignore */}
              {heroContent.signature}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
