import Image from "next/image";
import { heroContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col min-h-[calc(100dvh-64px)] lg:min-h-[60vh] justify-end lg:justify-center py-12 lg:py-20 overflow-hidden border-b border-border-gold"
    >
      <Image
        src="/images/hero-mobile1.jpeg"
        alt="Валентин Поплавский"
        fill
        priority
        className="object-cover object-top lg:hidden"
        sizes="100vw"
      />
      <Image
        src="/images/hero.jpeg"
        alt="Валентин Поплавский"
        fill
        priority
        className="hidden lg:block object-cover object-top"
        sizes="100vw"
      />

      {/* Mobile overlay: gradient to top */}
      <div
        className="absolute inset-0 z-[5] bg-gradient-to-t from-bg-primary via-bg-primary/95 via-50% to-transparent lg:hidden"
        aria-hidden="true"
      />
      {/* Desktop overlay: gradient to right */}
      <div
        className="absolute inset-0 z-[5] hidden lg:block bg-[linear-gradient(to_right,#0D0D0D_0%,#0D0D0D_25%,transparent_50%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col justify-end lg:justify-center w-full mt-auto mb-0 lg:my-auto pb-10 lg:pb-0">
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
