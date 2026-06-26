import Image from "next/image";
import { heroContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col h-[100dvh] min-h-0 overflow-hidden"
    >
      {/* Фоновое изображение */}
      <Image
        src="/images/hero21-9.png"
        alt=""
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />

      {/* Маска с размытием */}
      <div
        className="absolute inset-0 z-[5] backdrop-blur-3xl [mask-image:linear-gradient(to_right,white_0%,white_10%,transparent_70%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Контейнер для контента. Используем flex-col и justify-center для идеального центрирования по вертикали */}
      <Container className="relative z-10 flex flex-col justify-center w-full h-full">
        
        {/* Убрали pt-16, чтобы ничего не смещало блок вниз от математического центра */}
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

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button href={heroContent.ctaPrimaryHref}>
              {heroContent.ctaPrimary}
            </Button>
            <Button variant="outline" href={heroContent.ctaSecondaryHref}>
              {heroContent.ctaSecondary}
            </Button>
          </div>
        </div>
        
      </Container>
    </section>
  );
}