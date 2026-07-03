import Image from "next/image";
import { heroContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

// хуйня

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col min-h-[70vh] lg:min-h-[75vh] justify-center py-16 lg:py-20 overflow-hidden border-b border-border-gold"
    >
      <Image
        src="/images/hero-mobile.jpeg"
        alt=""
        fill
        priority
        className="object-cover object-top lg:hidden"
        sizes="100vw"
      />
      <Image
        src="/images/hero21-9.png"
        alt=""
        fill
        priority
        className="hidden lg:block object-cover object-top"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 z-[5] bg-gradient-to-t from-bg-primary/95 via-bg-primary/50 to-transparent lg:bg-none lg:backdrop-blur-3xl lg:[mask-image:linear-gradient(to_right,white_0%,white_10%,transparent_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col justify-center w-full my-auto">
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
